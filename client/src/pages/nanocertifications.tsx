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
