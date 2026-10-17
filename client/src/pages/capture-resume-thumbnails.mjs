// Capture actual live pages, never generated artwork. Re-run with:
// node client/src/pages/capture-resume-thumbnails.mjs
import { chromium } from "/mnt/pid2/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";
const sites = {
  genius: "https://genius101.xyz", noir: "https://noircomics.ink",
  verifier: "https://forensicdocumentverifier.com", ocr: "https://ocrman.shop",
  treatise: "https://treatisepro.com", audio: "https://audiotranscriber.ink",
  soxl: "https://soxledge.xyz", forex: "https://usdhkd.ink",
  model: "https://modeltransformer.ink", llm: "https://llmplus.ink",
  text: "https://textsurgeonplus.xyz/", goals: "https://smartgoaltracker.xyz",
  freud: "https://freudgpt.me", books: "https://livingbookcreator.xyz/",
  grader: "https://ezgrader.ai", test: "https://testme101.com",
  reader: "https://ezreader.ai", college: "https://collegeaimatch.xyz",
};
await mkdir("client/src/assets/resume", { recursive: true });
const browser = await chromium.launch({ executablePath: "/repl/tools/bin/chromium", headless: true, args: ["--no-sandbox"] });
const entries = Object.entries(sites);
if (process.env.CAPTURE_ONLY) {
  for (let i = entries.length - 1; i >= 0; i--) {
    if (!process.env.CAPTURE_ONLY.split(",").includes(entries[i][0])) entries.splice(i, 1);
  }
}
const results = [];
async function worker() {
  while (entries.length) {
    const [id, url] = entries.shift();
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1, ignoreHTTPSErrors: false });
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35000 });
      await page.waitForTimeout(4500);
      if (process.env.CAPTURE_WAIT) await page.waitForTimeout(Number(process.env.CAPTURE_WAIT));
      const text = await page.locator("body").innerText({ timeout: 5000 });
      if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status() ?? "no response"}`);
      if (text.trim().length < 35) throw new Error("Blank or insufficient rendered content");
      if (/application error|deployment not found|this app is not running|this site can.t be reached|verify you are human|checking your browser|access denied|bad gateway/i.test(text)) throw new Error(`Unavailable or blocked page: ${text.slice(0, 180)}`);
      await page.screenshot({ path: `client/src/assets/resume/${id}.jpg`, type: "jpeg", quality: 72 });
      results.push({ id, url, status: response.status(), finalUrl: page.url(), title: await page.title(), text: text.slice(0, 120), captured: true });
    } catch (error) {
      results.push({ id, url, captured: false, error: error.message });
    } finally { await page.close(); }
  }
}
try { await Promise.all(Array.from({ length: 5 }, worker)); }
finally { await browser.close(); }
console.log(JSON.stringify(results, null, 2));
