import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { apps, coursesFor, organizations, projectsFor, resumes } from "./resume-content";

const expected = {
  law: ["Forensic Document Verifier", "OCR Pro", "Treatise Pro", "Audio Transcriber Plus"],
  finance: ["SOXL Options Edge", "Forex Edge", "Model Transformer"],
  operations: ["LLM Plus", "Text Surgeon Plus", "Forensic Document Verifier", "Smart Goal Tracker"],
  research: ["Freud GPT", "Treatise Pro", "Model Transformer", "Living Book Creator"],
  education: ["EZGrader", "Test Me", "EZ Reader", "College AI Match"],
  general: ["Forensic Document Verifier", "SOXL Options Edge", "Text Surgeon Plus", "LLM Plus"],
};
for (const { value } of organizations) {
  assert.deepEqual(resumes[value].projects.map(project => project.name), expected[value], value);
  const projects = projectsFor(value);
  assert.deepEqual(projects.slice(0, 2).map(project => project.name), ["Genius 101", "Noir Comic Generator"], value);
  assert.equal(new Set(projects.map(project => project.url)).size, projects.length);
  for (const project of [...projects, ...coursesFor(value)]) {
    assert.equal(new URL(project.url).protocol, "https:");
    assert(project.description.endsWith("."));
    assert(!/GPTBypass|Basic OSINT|OSINT Lister|Photo Psychoanalysis/i.test(JSON.stringify(project)));
  }
  assert.equal(coursesFor(value).length, value === "education" ? 8 : 6);
}
assert.deepEqual(coursesFor("finance").slice(-2).map(course => course.name), ["Portfolio Analysis", "Financial & Managerial Analytics"]);
assert.deepEqual(coursesFor("education").slice(-2).map(course => course.url), ["https://babyrestaurantanalytics.xyz", "https://basicrevenuemanagement.xyz"]);
assert.equal(coursesFor("general").at(-1)?.url, "https://aimath1.xyz");
assert(apps.genius.description.includes("retrieval from their actual texts"));
const page = readFileSync(new URL("./resume.tsx", import.meta.url), "utf8");
for (const required of [
  'href="#resume-apps"', 'href="#resume-courses"', 'href="/living-books"',
  "<strong>47</strong>", "<strong>80+</strong>", "<strong>36</strong>",
  "Prior experience", "Education", "Ask about my work", "jmkuczynski@yahoo.com",
  'url.searchParams.set("for", value)', 'window.addEventListener("popstate"',
]) assert(page.includes(required), required);
assert(!page.includes("90+"));
assert(!/headshot|portrait\.|image_1792263473016/.test(page));
assert(!/GPTBypass|Basic OSINT|OSINT Lister|Photo Psychoanalysis/.test(page));
for (const id of ["genius", "noir", "verifier", "ocr", "audio", "forex", "soxl", "model", "llm", "text", "goals", "freud", "books", "grader", "test", "college"]) {
  assert(existsSync(new URL(`../assets/resume/${id}.jpg`, import.meta.url)), `Real screenshot exists: ${id}`);
}
assert(page.includes("await askWorkQuestion(text, controller.signal)"));
assert(page.includes("version === requestVersion.current"));
assert(page.includes('event.key === "Enter" && !event.shiftKey'));
assert(page.includes("!event.nativeEvent.isComposing"));
assert(page.includes("disabled={asking}"));
assert(page.includes("cancelQuestion();"));
assert(page.includes("source.evidence"));
assert(!page.includes("answerResumeQuestion"));
console.log("Resume requirements passed: audiences, previews, preserved sections, and asynchronous Q&A wiring.");
