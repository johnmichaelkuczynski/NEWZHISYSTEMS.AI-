import assert from "node:assert/strict";
import { chromium } from "/mnt/pid2/node_modules/playwright/index.mjs";

// Run against the existing workflow; this test never starts or restarts a server.
const base = process.env.RESUME_TEST_URL ?? "http://127.0.0.1:5000";
const browser = await chromium.launch({ executablePath: "/repl/tools/bin/chromium", headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", error => errors.push(error.message));
const expected = {
  law: ["Forensic Document Verifier", "OCR Pro", "Treatise Pro", "Audio Transcriber Plus"],
  finance: ["SOXL Options Edge", "Forex Edge", "Model Transformer"],
  operations: ["LLM Plus", "Text Surgeon Plus", "Forensic Document Verifier", "Smart Goal Tracker"],
  research: ["Freud GPT", "Treatise Pro", "Model Transformer", "Living Book Creator"],
  education: ["EZGrader", "Test Me", "EZ Reader", "College AI Match"],
  general: ["Forensic Document Verifier", "SOXL Options Edge", "Text Surgeon Plus", "LLM Plus"],
};
try {
  for (const [audience, names] of Object.entries(expected)) {
    await page.goto(`${base}/resume?for=${audience}`, { waitUntil: "networkidle" });
    await page.waitForSelector(".resume-grid");
    assert.equal(await page.locator("#resume-organization").inputValue(), audience);
    assert.deepEqual(await page.locator(".resume-card h3").allTextContents(), ["Genius 101", "Noir Comic Generator", ...names]);
    assert.equal(await page.locator(".resume-course").count(), audience === "education" ? 8 : 6);
    assert((await page.locator(".resume-noir").innerText()).includes("Comic sample page pending"));
    const invalidLinks = await page.locator(".resume-try").evaluateAll(links => links.filter(a => !a.href.startsWith("https://") || a.target !== "_blank").length);
    assert.equal(invalidLinks, 0);
    await page.locator(".resume-bottom").scrollIntoViewIfNeeded();
    assert(await page.locator("#resume-experience").isVisible());
    await page.getByRole("button", { name: "Ask", exact: true }).click();
    assert(await page.locator("#resume-question-error").isVisible());
    await page.locator("#resume-question").fill("How many apps have you deployed?");
    await page.getByRole("button", { name: "Ask", exact: true }).click();
    assert((await page.locator('[aria-live="polite"]').innerText()).includes("47 deployed AI apps"));
    await page.locator("#resume-question").fill("Invent a client revenue figure");
    await page.getByRole("button", { name: "Ask", exact: true }).click();
    assert((await page.locator('[aria-live="polite"]').innerText()).includes("That isn't covered here"));
    await page.locator(".resume-grid").scrollIntoViewIfNeeded();
    const brokenImages = await page.locator(".resume-preview img").evaluateAll(images => images.filter(img => img.complete && img.naturalWidth === 0).length);
    assert.equal(brokenImages, 0);
    const gridColumns = await page.locator(".resume-grid").evaluate(element => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    assert.equal(gridColumns, 3);
    console.log(`PASS ${audience}: share URL, cards, courses, live images, grounded Q&A.`);
  }
  await page.goto(`${base}/resume?for=law&campaign=preserve#resume-apps`, { waitUntil: "networkidle" });
  await page.locator("#resume-organization").selectOption("finance");
  assert.equal(new URL(page.url()).searchParams.get("for"), "finance");
  assert.equal(new URL(page.url()).searchParams.get("campaign"), "preserve");
  assert.equal(new URL(page.url()).hash, "#resume-apps");
  await page.goBack();
  assert.equal(await page.locator("#resume-organization").inputValue(), "law");
  await page.goForward();
  assert.equal(await page.locator("#resume-organization").inputValue(), "finance");
  await page.goto(`${base}/resume?for=unsupported`, { waitUntil: "networkidle" });
  assert.equal(await page.locator("#resume-organization").inputValue(), "general");
  for (const width of [375, 767, 820]) {
    await page.setViewportSize({ width, height: 900 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `No horizontal overflow at ${width}px`);
    const columns = await page.locator(".resume-grid").evaluate(element => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    assert.equal(columns, width < 768 ? 1 : 2);
  }
  assert.deepEqual(errors, []);
  console.log("PASS history, preserved query/hash, invalid audience fallback, responsive grids, no overflow, and no React runtime errors.");
} finally { await browser.close(); }
