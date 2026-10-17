import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { once } from "node:events";
import test from "node:test";
import express from "express";
import ts from "typescript";
import { knowledge } from "./work-knowledge";
import { answerWorkQuestion, configuredCompletion, WorkQaError, type Complete } from "./work-qa";
import { registerWorkQa } from "./work-qa-route";
import { WORK_TEST_QUESTIONS, WORK_UNKNOWN } from "../shared/work-qa";

const named = (name: string) => knowledge.find(passage => passage.name === name)!;
const pairs = [
  ["Text Surgeon Plus"], ["Forensic Document Verifier", "OCR Pro", "Treatise Pro"],
  ["SOXL Options Edge", "SOXL Options Pro", "Forex Edge"],
  ["Evidence from Large Language Models: How AI Vindicates Classical Theories of Meaning", "On AI and Some Epistemological Issues"],
  ["Custom AI systems for firms"], ["Genius 101"],
];

function fixture(ids: string[], sentences = ["John-Michael built the tools described in the supplied evidence.", "His portfolio includes source-grounded work."]): Complete {
  let calls = 0;
  return async () => ++calls === 1 ? JSON.stringify({ ids }) : JSON.stringify({ sentences, sourceIds: ids });
}

test("single corpus covers every current and older app URL, full course catalogs, and all living books", () => {
  assert.equal(knowledge.filter(p => p.id.startsWith("app-")).length, 47);
  assert.equal(knowledge.filter(p => p.kind === "course").length, 81);
  assert.equal(knowledge.filter(p => p.kind === "book").length, 36);
  assert.equal(new Set(knowledge.map(p => p.id)).size, knowledge.length);
  const urls = new Set(knowledge.map(p => p.url.replace(/\/$/, "")));
  for (const file of ["home", "main-page", "courses", "nanocertifications", "baby-living-courses", "living-books"]) {
    const source = ts.createSourceFile(`${file}.tsx`, readFileSync(`client/src/pages/${file}.tsx`, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    function visit(node: ts.Node) {
      if (ts.isObjectLiteralExpression(node)) {
        const properties = node.properties.filter(ts.isPropertyAssignment);
        const url = properties.find(p => p.name.getText(source) === "url")?.initializer;
        const title = properties.find(p => p.name.getText(source) === "title")?.initializer;
        if (title && url && ts.isStringLiteralLike(url)) assert(urls.has(url.text.replace(/\/$/, "")), `${file}: missing ${url.text}`);
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
  const fourHour = readFileSync("client/src/pages/four-hour-certifications.tsx", "utf8");
  for (const match of fourHour.matchAll(/href="(https:\/\/[^"]+)"/g)) assert(urls.has(match[1].replace(/\/$/, "")));
  for (const app of knowledge.filter(p => p.kind === "app")) {
    assert(app.text.split(/(?<=[.!?])\s+/).length >= 2, app.name);
    assert(app.url.startsWith("https://"));
  }
  assert(named("Text Surgeon Plus").aliases.includes("Text Surgeon"));
  assert(named("Portfolio scale").text.includes("47 deployed AI apps, 80+ AI-taught certification courses, and 36"));
  assert(named("Education").text.includes("summa cum laude"));
  assert.equal(knowledge.filter(p => p.id.startsWith("pub-")).length, 12);
});

test("six requested flows use full semantic retrieval then only selected evidence (MOCK provider, not live answers)", async () => {
  for (const [index, question] of WORK_TEST_QUESTIONS.entries()) {
    const passages = pairs[index].map(named);
    assert(passages.every(Boolean));
    let call = 0;
    const complete: Complete = async (system, data) => {
      const input = JSON.parse(data);
      assert.equal(input.question, question);
      if (++call === 1) {
        assert(system.includes("semantic"));
        assert(input.index.length === knowledge.length);
        assert(input.index.some((p: any) => p.aliases.includes("Text Surgeon")));
        return JSON.stringify({ ids: passages.map(p => p.id) });
      }
      assert(system.includes("THIRD PERSON"));
      assert.deepEqual(input.evidence.map((p: any) => p.id), passages.map(p => p.id));
      assert(system.includes("Never invent clients"));
      return JSON.stringify({ sentences: [
        `John-Michael's work includes ${passages.map(p => p.name).join(", ")}.`,
        "His work is described in the cited source material.",
      ], sourceIds: passages.map(p => p.id) });
    };
    const result = await answerWorkQuestion(question, complete);
    assert.equal(call, 2);
    assert(result.sources.length);
    for (const app of passages.filter(p => p.kind === "app")) assert(result.answer.includes(app.url));
    assert(!result.answer.includes(WORK_UNKNOWN));
  }
});

test("partial-name and case-varied questions reach LLM retrieval unchanged, without keyword rejection", async () => {
  for (const question of ["what does tExT sUrGeOn do?", "Can his tools help a solicitor?", "Any software for currency desks?"]) {
    let input = "";
    const wrapped = fixture([named("Text Surgeon Plus").id]);
    await answerWorkQuestion(question, async (system, data, signal) => { input ||= JSON.parse(data).question; return wrapped(system, data, signal); });
    assert.equal(input, question);
  }
});

test("only no relevant retrieval produces the exact requested refusal", async () => {
  let calls = 0;
  assert.deepEqual(await answerWorkQuestion("A detail absent from all evidence", async () => {
    calls++; return '{"ids":[]}';
  }), { answer: WORK_UNKNOWN, sources: [] });
  assert.equal(calls, 1);
});

test("invalid provider data, unknown citations, invented URLs, first person, and HTML fail explicitly", async () => {
  const id = named("Text Surgeon Plus").id;
  const cases: Complete[] = [
    async () => "not json", async () => '{"ids":["invented"]}',
    (() => { let count = 0; return async () => ++count === 1 ? JSON.stringify({ ids: [id] }) : JSON.stringify({ sentences: ["He built a tool.", "It edits text."], sourceIds: ["invented"] }); })(),
    fixture([id], ["He built a tool at https://evil.example.", "It edits text."]),
    fixture([id], ["I built a tool.", "It edits text."]),
    fixture([id], ["He built <script>bad()</script>.", "It edits text."]),
    fixture([id], ["He built a tool."]),
  ];
  for (const complete of cases) await assert.rejects(answerWorkQuestion("Describe his work", complete), (error: unknown) => error instanceof WorkQaError && error.status === 502);
});

test("absent server key is an explicit 503 and never a local fake response", () => {
  const old = process.env.OPENAI_API_KEY;
  delete process.env.OPENAI_API_KEY;
  try { assert.throws(configuredCompletion, (error: unknown) => error instanceof WorkQaError && error.status === 503); }
  finally { if (old !== undefined) process.env.OPENAI_API_KEY = old; }
});

async function withApi(getCompletion: () => Complete, run: (base: string) => Promise<void>, options = {}) {
  const app = express();
  registerWorkQa(app, getCompletion, options);
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert(address && typeof address !== "string");
  try { await run(`http://127.0.0.1:${address.port}/api/work-question`); }
  finally { server.closeAllConnections(); await new Promise<void>(resolve => server.close(() => resolve())); }
}
const post = (url: string, question: unknown = "What does Text Surgeon do?") => fetch(url, {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question }),
});

test("endpoint validates JSON, size, schema, configuration and successful source response", async () => {
  let called = 0;
  await withApi(() => { called++; return fixture([named("Text Surgeon Plus").id]); }, async base => {
    for (const question of ["", "x".repeat(501), 123, null]) assert.equal((await post(base, question)).status, 400);
    const malformed = await fetch(base, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{" });
    assert.equal(malformed.status, 400);
    assert.equal((await post(base, "x".repeat(4000))).status, 413);
    const extra = await fetch(base, { method: "POST", headers: { "Content-Type": "application/json" }, body: '{"question":"Hi","apiKey":"secret"}' });
    assert.equal(extra.status, 400);
    assert.equal(called, 0);
    const response = await post(base);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("cache-control"), "no-store");
    const body = await response.json();
    assert(body.sources[0].url.startsWith("https://"));
    assert(body.answer.includes("https://textsurgeonplus.xyz/"));
  });
  await withApi(() => { throw new WorkQaError(503, "OPENAI_API_KEY is not configured."); }, async base => {
    const response = await post(base);
    assert.equal(response.status, 503);
    assert((await response.json()).error.includes("OPENAI_API_KEY"));
  });
});

test("endpoint enforces rate and concurrency limits and does not expose provider secrets", async () => {
  await withApi(() => fixture([named("Text Surgeon Plus").id]), async base => {
    assert.equal((await post(base)).status, 200);
    const blocked = await post(base);
    assert.equal(blocked.status, 429);
    assert(blocked.headers.has("retry-after"));
  }, { perMinute: 1 });
  await withApi(() => fixture([named("Text Surgeon Plus").id]), async base => {
    assert.equal((await post(base)).status, 200);
    assert.equal((await post(base)).status, 429);
  }, { globalPerHour: 1 });
  let release!: () => void;
  let entered!: () => void;
  const started = new Promise<void>(resolve => { entered = resolve; });
  const wait = new Promise<void>(resolve => { release = resolve; });
  await withApi(() => async () => { entered(); await wait; return '{"ids":[]}'; }, async base => {
    const pending = post(base);
    await started;
    assert.equal((await post(base)).status, 429);
    release();
    assert.equal((await pending).status, 200);
  }, { concurrency: 1 });
  await withApi(() => async () => { throw new Error("upstream secret sk-do-not-leak"); }, async base => {
    const response = await post(base);
    assert.equal(response.status, 502);
    assert(!(await response.text()).includes("sk-do-not-leak"));
  });
});
