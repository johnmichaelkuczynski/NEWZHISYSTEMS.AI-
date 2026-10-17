/**
 * Real provider acceptance test; does not start/restart the app.
 * OPENAI_API_KEY=... npx tsx scripts/test-work-qa-live.ts
 * Or test the already-running HTTP endpoint:
 * WORK_QA_TEST_URL=http://127.0.0.1:5000/api/work-question npx tsx scripts/test-work-qa-live.ts
 */
import assert from "node:assert/strict";
import { answerWorkQuestion, configuredCompletion } from "../server/work-qa";
import { WORK_TEST_QUESTIONS, WORK_UNKNOWN, type WorkAnswer } from "../shared/work-qa";

const url = process.env.WORK_QA_TEST_URL;
const complete = url ? null : configuredCompletion();
for (const question of WORK_TEST_QUESTIONS) {
  let result: WorkAnswer;
  if (url) {
    const response = await fetch(url, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }), signal: AbortSignal.timeout(50_000),
    });
    const body = await response.json();
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${body.error ?? body.message ?? "Question failed"}`);
    result = body;
  } else result = await answerWorkQuestion(question, complete!, AbortSignal.timeout(45_000));
  assert.notEqual(result.answer, WORK_UNKNOWN, question);
  assert(result.sources.length, `Missing sources for ${question}`);
  console.log(`\nQ: ${question}\nA: ${result.answer}\nSources:`);
  for (const source of result.sources) console.log(`- ${source.label}: ${source.url}\n  ${source.evidence}`);
}
console.log("\nAll six REAL provider queries completed; review the answers above for grounding and 2–5 third-person sentences.");
