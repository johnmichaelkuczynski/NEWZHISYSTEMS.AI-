import { useState } from "react";

interface CourseDescription {
  emoji: string;
  tagline: string;
  sections: { emoji: string; title: string; body: string }[];
}

interface Course {
  title: string;
  url: string;
  videoUrl?: string;
}

const courseDescriptions: Record<string, CourseDescription> = {
  "AI Math (Level 1)": {
    emoji: "🔎",
    tagline:
      "A rigorous, self-paced introduction to the mathematics behind modern AI that teaches, tutors, drills, and grades itself — built for researchers and professionals entering the field.",
    sections: [
      {
        emoji: "🔎",
        title: "What It Is",
        body: `AI Math Level 1 is a self-paced web course on the mathematics behind artificial intelligence -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. A complete one-day intensive curriculum builds the subject from first principles, one idea at a time: how AI is, underneath, numbers and arithmetic at scale, from turning words into vectors to teaching a network through backpropagation.`,
      },
      {
        emoji: "✨",
        title: "Product Features",
        body: `**One-Day Intensive Curriculum** -- One intensive day, organized by session:

**Morning session** -- Numbers as meaning: why AI is really math. Everything becomes numbers; the model as a giant pile of tunable weights; vectors as locations; embeddings and meaning as a place in space; measuring likeness with distance, the dot product, and cosine similarity.

**Afternoon session** -- How AI learns: from matrices to backpropagation. Matrices as layers that reshape vectors; loss and gradients; gradient descent and the learning rate; probability, uncertainty, and temperature; backpropagation as the self-teaching loop.

**Three-Depth Lectures** -- Every lecture reads at Short, Medium, or Long depth -- same ideas and examples, the reader's pace.

**Real Examples Throughout** -- Every concept is grounded in worked real-world cases: search engines matching "flat tire" to "punctured wheel," music apps recommending by likeness, chatbots that are confidently wrong because confidence is pattern-fit, not truth.

**Scenario Reasoning in Every Question** -- Every homework, test, exam, practice, and diagnostic question puts the student inside a concrete case and asks them to reason it out. No definition-recitation, no one-word answers.

**Section-Scoped AI Tutor** -- Ask about the exact passage on screen and get a live, grounded answer, streamed word by word.

**Adaptive Practice** -- Generated problem sets that get harder on a streak and ease off after a miss.

**AI-Graded Coursework** -- Two homework sets, a timed course test, and a timed cumulative final, each scored with a written rationale and a percent score. Coursework is 100% of the grade.

**Two-Layer Academic-Integrity Screening** -- Every submission is checked for AI authorship by an industry text classifier and by analysis of how the answer was actually typed, each producing a clear verdict.

**Ungraded Diagnostic Instruments** -- Subject-reasoning and general-reasoning checks in three formats and three lengths, offered before, during, and after the course -- unlimited attempts, fresh questions every time, never affecting the grade.

**Free Course Download** -- The full reader (every short lecture plus sample homework and exam problems) downloads as a PDF or TXT, no sign-in required.

**Try Before Signing In** -- The entire course is browsable without an account; sign-in is only requested once a visitor's free AI usage allowance is used up.

**Live Analytics** -- Dashboard KPIs, per-topic mastery, and a recent-activity feed for the student.

**Built-In Product Demo Video** -- A short animated walkthrough of the live product ships alongside the course.`,
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body: `**Researchers & professionals entering the field** -- a complete, rigorous grounding in the mathematics behind AI, compressed into one intensive day, with on-demand tutoring and adaptive practice.

**Instructors & curriculum designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.

**Academic-integrity researchers** -- a live demonstration of layered AI-authorship detection.

**Product & engineering teams** -- a reference implementation of an end-to-end AI-taught course product.`,
      },
    ],
  },
  "AI-Assisted Grading and Assessment (Level 1)": {
    emoji: "🔎",
    tagline:
      "A rigorous, self-paced introduction to AI-assisted grading and assessment that teaches, tutors, drills, and grades itself — built for researchers and professionals entering the field.",
    sections: [
      {
        emoji: "🔎",
        title: "What It Is",
        body: `AI-Assisted Grading & Assessment is a self-paced web course on how AI grades student work and what a grade actually means -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. A complete one-day intensive curriculum builds the subject from first principles, one idea at a time: from what a grade actually asserts about a student's competence to how a model turns a rubric into a judgment, and where that judgment quietly drifts.`,
      },
      {
        emoji: "✨",
        title: "Product Features",
        body: `**One-Day Intensive Curriculum** -- One intensive day, organized by session:

**Morning session** -- Grades as claims: what a grade actually asserts. A grade is an inference about competence, not a measurement; validity; construct-irrelevant variance and construct under-representation; reliability, grader spread, and error bars; how a grade generalizes from a small sample of work.

**Afternoon session** -- How AI grades: from rubric to model judgment. Operationalizing rubric criteria; model judgment as pattern-fit that reads semantic content; where it holds (short-inference criteria, superhuman consistency); silent drift (proxy drift toward length and polish, criterion drift, anchor sensitivity, rationale confabulation); calibrating against human-scored anchor papers; routing borderline and disputed work to humans.

**Three-Depth Lectures** -- Every lecture reads at Short, Medium, or Long depth -- same ideas and examples, the reader's pace.

**Real Examples Throughout** -- Every concept is grounded in worked real-world cases: two graders landing ten points apart on the same essay, a model scoring long fluent answers more generously than short correct ones, a rubric criterion that quietly turns into a proxy for polish.

**Scenario Reasoning in Every Question** -- Every homework, test, exam, practice, and diagnostic question puts the student inside a concrete case and asks them to reason it out. No definition-recitation, no one-word answers.

**Section-Scoped AI Tutor** -- Ask about the exact passage on screen and get a live, grounded answer, streamed word by word.

**Adaptive Practice** -- Generated problem sets that get harder on a streak and ease off after a miss.

**AI-Graded Coursework** -- Two homework sets, a timed course test, and a timed cumulative final, each scored with a written rationale and a percent score. Coursework is 100% of the grade.

**Two-Layer Academic-Integrity Screening** -- Every submission is checked for AI authorship by an industry text classifier and by analysis of how the answer was actually typed, each producing a clear verdict.

**Ungraded Diagnostic Instruments** -- Subject-reasoning and general-reasoning checks in three formats and three lengths, offered before, during, and after the course -- unlimited attempts, fresh questions every time, never affecting the grade.

**Free Course Download** -- The full reader (every short lecture plus sample homework and exam problems) downloads as a PDF or TXT, no sign-in required.

**Try Before Signing In** -- The entire course is browsable without an account; sign-in is only requested once a visitor's free AI usage allowance is used up.

**Live Analytics** -- Dashboard KPIs, per-topic mastery, and a recent-activity feed for the student.

**Built-In Product Demo Video** -- A short animated walkthrough of the live product ships alongside the course.`,
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body: `**Researchers & professionals entering the field** -- a complete, rigorous grounding in AI-assisted grading and assessment, compressed into one intensive day, with on-demand tutoring and adaptive practice.

**Instructors & curriculum designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.

**Academic-integrity researchers** -- a live demonstration of layered AI-authorship detection.

**Product & engineering teams** -- a reference implementation of an end-to-end AI-taught course product.`,
      },
    ],
  },
  "Generative AI Integration": {
    emoji: "🤖",
    tagline:
      "A rigorous, self-paced introduction to integrating generative models into real software systems for adult researchers and professionals.",
    sections: [
      {
        emoji: "🤖",
        title: "What It Is",
        body: `Generative AI Integration is a one-day web course taught, tutored, drilled, and graded by AI, with built-in academic-integrity enforcement. It covers the model API surface, the integration layer required for reliable software, and the engineering practices used to evaluate, protect, observe, and deploy generative features.`,
      },
      {
        emoji: "✨",
        title: "Product Features",
        body: `**One-Day Intensive Curriculum** -- One intensive day, organized by session:

**Morning session** -- Models as tools: what a generative model actually gives you. Prompt input and token output; system, user, and assistant roles; context windows as budgets rather than memory; temperature, top-p, and stop sequences; structured output and function or tool calling; streaming, latency, token pricing, and the integration layer required beyond a chat interface.

**Afternoon session** -- Building with generation: wiring a model into a real system. Instructions, examples, and output contracts; retrieval-augmented generation with chunking, embeddings, vector search, and grounding; agents and tool-use loops; golden sets, LLM-as-judge, and regression testing; validation, retries, fallbacks, prompt injection, PII, cost and rate limits; caching, observability, and model version pinning; and an end-to-end grounded support assistant.

**Three-Depth Lectures** -- Every lecture reads at Short, Medium, or Long depth while preserving its examples and learning objectives.

**Operational Reasoning Throughout** -- Questions present concrete integration cases and require students to identify the deciding concept and evidence rather than recite definitions.

**Two Reasoning Primers** -- The subject primer diagnoses failures such as hallucinated policy, looping tool calls, incorrect retrieval passages, and unexpected cost increases. The general primer applies analysis, inference, evaluation, deduction, and induction to AI systems.

**Section-Scoped AI Tutor** -- Ask about the exact passage on screen and receive a streamed, grounded answer.

**Adaptive Practice** -- Generated problem sets adjust difficulty based on the student's recent answers.

**AI-Graded Coursework** -- Two homework sets, a timed course test, and a cumulative final, each scored with written rationale and a percentage. Coursework is 100% of the grade.

**Two-Layer Academic-Integrity Screening** -- Every submission is checked by a text classifier and by analysis of how the answer was typed, with a clear verdict from each layer.

**Ungraded Diagnostic Instruments** -- Integration-case and general-reasoning checks in three formats and three lengths, offered before, during, and after the course with unlimited attempts and fresh questions.

**Free Course Download** -- The course reader downloads as PDF or TXT without sign-in.

**No Account Required** -- The course and its AI-powered features are available without creating an account.

**Live Analytics** -- Dashboard KPIs, per-topic mastery, recent activity, and private visitor analytics.

**Search Metadata** -- Structured metadata describes the course and its integration curriculum for search engines.

**Built-In Product Demo Video** -- A short walkthrough of the live product ships alongside the course.`,
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body: `**Researchers and professionals entering the field** -- a foundational but substantial treatment of generative-model integration, compressed into one intensive day.

**Product and engineering teams** -- operational guidance on model APIs, retrieval, tool use, evaluation, safety controls, and deployment.

**Instructors and curriculum designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.

**Academic-integrity researchers** -- a live demonstration of layered AI-authorship detection.`,
      },
    ],
  },
  "Infinite Series": {
    emoji: "♾️",
    tagline:
      "A rigorous, self-paced adult course on infinite series that teaches, tutors, drills, and grades itself.",
    sections: [
      {
        emoji: "♾️",
        title: "What It Is",
        body: `Infinite Series develops the theory and computation of infinite sums through two substantial sessions. Students learn to reason from partial sums, select convergence tests from decisive term features, control approximation error, and use power and Taylor series as analytical and numerical tools. The public course includes AI tutoring, adaptive practice, AI grading, and built-in academic-integrity screening.`,
      },
      {
        emoji: "✨",
        title: "Product Features",
        body: `**Two-Session Curriculum**

**Sums that never end** -- What it means to add forever. Sequences and limits; partial sums; geometric and telescoping series; harmonic divergence; divergence, p-series, integral, comparison, limit-comparison, ratio, root, and alternating-series tests; alternating error; repeating decimals; dosage steady states; and floating-point summation.

**Series as machines** -- Turning functions into infinite sums. Absolute and conditional convergence; Riemann rearrangement; power-series radius and interval; termwise differentiation and integration; Taylor and Maclaurin series; remainder bounds; standard expansions; limits and integrals by series; calculator evaluation of sin(0.3); and numerical-library practice.

**Three-Depth Lectures** -- Every lecture reads at Short, Medium, or Long depth -- same ideas and examples, at the reader's pace.

**Applied Examples Throughout** -- Repeating decimals, repeated drug dosage, floating-point summation, calculator approximation, and numerical-library design connect theorems to practice.

**Scenario Reasoning in Every Question** -- Every homework, test, exam, practice, and diagnostic question puts the student inside a concrete case and asks them to reason it out. No definition-recitation, no one-word answers.

**Section-Scoped AI Tutor** -- Ask about the exact passage on screen and get a live, grounded answer, streamed word by word.

**Adaptive Practice** -- Generated problem sets that get harder on a streak and ease off after a miss.

**AI-Graded Coursework** -- Two homework sets, a timed course test, and a timed cumulative final, each scored with a written rationale and a percent score. Coursework is 100% of the grade.

**Two-Layer Academic-Integrity Screening** -- Every submission is checked for AI authorship by an industry text classifier and by analysis of how the answer was actually typed, each producing a clear verdict.

**Ungraded Diagnostic Instruments** -- Subject-reasoning and general-reasoning checks in three formats and three lengths, offered before, during, and after the course -- unlimited attempts, fresh questions every time, never affecting the grade.

**Free Course Download** -- The full reader, including every short lecture plus sample homework and exam problems, downloads as a PDF or TXT with no sign-in required.

**No Account Required** -- The entire course and all AI-powered features are available without creating an account or signing in.

**Live Analytics** -- Dashboard KPIs, per-topic mastery, and a recent-activity feed for the student.

**Search-Engine Ready** -- Fully indexed and structured for Google, Bing, and other major search engines, with rich course metadata.

**Built-In Product Demo Video** -- A short animated walkthrough of the live product ships alongside the course.`,
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body: `**Researchers & professionals** -- a rigorous grounding in infinite-series analysis and computation, with on-demand tutoring and adaptive practice.

**Instructors & curriculum designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.

**Academic-integrity researchers** -- a live demonstration of layered AI-authorship detection.

**Product & engineering teams** -- a reference implementation of an end-to-end AI-taught course product.`,
      },
    ],
  },
};

const courses: Course[] = [
  { title: "AI Math (Level 1)", url: "https://aimath1.xyz" },
  {
    title: "AI-Assisted Grading and Assessment (Level 1)",
    url: "https://aigrading1.ink",
  },
  {
    title: "Generative AI Integration",
    url: "https://generativeai.ink",
  },
  {
    title: "Infinite Series",
    url: "https://nanoinfiniteseries.xyz",
  },
];

function renderSectionBody(body: string) {
  return body.split("\n\n").map((para, i) => {
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-700">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="text-gray-900">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

export default function Nanocertifications() {
  const sortedCourses = [...courses].sort((a, b) =>
    a.title.localeCompare(b.title),
  );
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="font-sans bg-white text-gray-900 leading-relaxed min-h-screen">

      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nanocertifications
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6 border border-gray-200 rounded-lg bg-gray-50 p-6">
              <ul className="space-y-4 text-sm text-gray-800 leading-relaxed list-disc pl-4">
                <li>
                  <strong>24/7 built-in tutors</strong> — every student has
                  on-demand, personalized instruction, eliminating the access
                  gap that stalls most online learning.
                </li>
                <li>
                  <strong>Cheat-proof by design</strong> — assessments cannot
                  be gamed, so completion actually certifies competence.
                </li>
                <li>
                  <strong>Industry-aligned progress</strong> — advancement is
                  benchmarked to professional standards, making the credential
                  something employers can trust.
                </li>
                <li>
                  <strong>Fixed assessments, adaptive lectures</strong> —
                  tests and homework are locked for rigor, while lectures flex
                  in length, depth, and style to fit each learner.
                </li>
                <li>
                  <strong>Verified mastery</strong> — adaptation never dilutes
                  standards; retention and mastery are confirmed, not assumed.
                </li>
              </ul>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="space-y-4">
              {sortedCourses.map((course) => {
                const desc = courseDescriptions[course.title];
                const isOpen = expanded === course.title;
                return (
                  <div
                    key={course.title}
                    className="border border-gray-200 rounded-lg bg-white"
                  >
                    <div className="flex items-center justify-between gap-4 p-4">
                      <div className="flex items-center gap-3 min-w-0">
                        {desc && <span className="text-2xl">{desc.emoji}</span>}
                        <div className="min-w-0">
                          <h2 className="text-lg font-semibold text-gray-900">
                            {course.title}
                          </h2>
                          {desc && (
                            <p className="text-sm text-gray-600">
                              {desc.tagline}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {desc && (
                          <button
                            onClick={() =>
                              setExpanded(isOpen ? null : course.title)
                            }
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {isOpen ? "Hide" : "Details"}
                          </button>
                        )}
                        {course.videoUrl && (
                          <a
                            href={course.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium whitespace-nowrap"
                          >
                            📹 Tutorial
                          </a>
                        )}
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                    {isOpen && desc && (
                      <div className="border-t border-gray-200 p-6 space-y-6">
                        {desc.sections.map((section) => (
                          <section key={section.title}>
                            <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <span>{section.emoji}</span>
                              <span>{section.title}</span>
                            </h3>
                            <div className="space-y-3 text-sm">
                              {renderSectionBody(section.body)}
                            </div>
                          </section>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
