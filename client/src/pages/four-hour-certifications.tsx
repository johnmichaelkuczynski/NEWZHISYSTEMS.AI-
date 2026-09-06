import { useState } from "react";

const cryptographySections = [
  {
    emoji: "🔐",
    title: "What It Is",
    body: `Cryptography: Secrets, Locks, and Digital Trust is a rigorous but accessible four-hour web course taught, tutored, drilled, and graded by AI. It turns codes, ciphers, and digital trust into a structured learning experience with concrete cases, adaptive practice, grounded tutoring, and built-in academic-integrity screening.

The course explains how machines keep secrets, the idea that made the internet possible, and why real-world cryptographic systems usually fail at the human and implementation layers rather than in the mathematics itself.`,
  },
  {
    emoji: "🧭",
    title: "The Four-Hour Learning Journey",
    body: `**Hour 1 — Every Code Ever Broken Was Broken Because People Repeat Themselves** -- Letter counts, stock phrases, weather reports, and the habits that made systems such as Enigma vulnerable. The hour also distinguishes decipherment from cryptanalysis through the recovery of Linear B.

**Hour 2 — Perfect Secrecy Exists, Is Provable, and Is Worthless** -- Why an unbreakable cipher went largely unused, and why practical security is priced rather than guaranteed.

**Hour 3 — Two Strangers Can Agree on a Secret While Everyone Listens** -- The central insight behind public-key cryptography and secure communication over the internet.

**Hour 4 — Nobody Breaks the Math; Things Fall Apart at the Seams** -- Keys, people, weak randomness, leaky clocks, sloppy code, and governments: where real-world failures occur.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Three Lecture Depths** -- Every lecture is available at Short, Medium, or Long depth while preserving the same examples and learning objectives.

**Grounded AI Tutor** -- The section-scoped tutor streams answers grounded in the exact lecture passage on screen.

**Adaptive Practice** -- Generated scenario problems adjust difficulty according to recent answers and preserve difficulty across the session.

**Reasoned Application** -- Coursework combines multiple-choice questions with concise freeform responses that apply cryptographic ideas to concrete cases rather than merely reciting definitions.

**Four Graded Checkpoints** -- Two homework sets, a timed course test, and a cumulative final provide immediate percentage grades and feedback.

**Reasoning Primers and Diagnostics** -- Ungraded cryptography and general-reasoning instruments are available across multiple formats, lengths, and course phases.

**Academic Integrity** -- Every submission is checked by static text detection and diachronic keystroke-pattern analysis.`,
  },
  {
    emoji: "📦",
    title: "What Is Included",
    body: `A four-hour intensive organized around four core topics; free PDF and TXT course readers with no sign-in; exact answer persistence before grading; live diagnostics that verify generated, sent, persisted, and grading evidence; analytics for performance, mastery, activity, and weak areas; and a built-in product walkthrough video.`,
  },
  {
    emoji: "👥",
    title: "Designed For",
    body: `**Researchers and Professionals** -- A foundational but substantial introduction to cryptography compressed into a focused four-hour experience.

**Product and Engineering Teams** -- A shared language for codes, ciphers, digital trust, and the failure modes surrounding secure systems.

**Instructors and Curriculum Designers** -- A working example of AI-taught and AI-graded coursework with integrity controls.

**Academic-Integrity Researchers** -- A live demonstration of layered authorship screening in an educational product.`,
  },
  {
    emoji: "⚙️",
    title: "Under the Hood",
    body: `The course uses an OpenAPI contract as the source of truth, with React Query hooks and Zod validators generated from the same contract. Server-Sent Events deliver section-scoped tutor responses token by token.

Its adaptive-practice engine preserves and adjusts per-session difficulty. GPTZero-backed text detection is blended with structural signals, while keystroke analysis evaluates paste-and-rewrite behavior and sustained input patterns.

Operator diagnostics verify the database, course seed, model completion, JSON mode, detection, practice, grading, analytics, and answer-persistence evidence. A content marker detects subject changes and transactionally replaces stale curriculum.`,
  },
];

const evolutionaryPsychologySections = [
  {
    emoji: "🧠",
    title: "What It Is",
    body: `Evolutionary Psychology is a rigorous, self-paced, AI-powered introduction to evolutionary approaches to human behavior for adult researchers, professionals, and students entering the field.

The course asks how evolutionary processes may help explain psychological traits and behavior while emphasizing testable predictions, alternative explanations, and careful treatment of probabilistic patterns.`,
  },
  {
    emoji: "🧭",
    title: "The Learning Journey",
    body: `**Evolution by Natural Selection** -- Variation, inheritance, differential reproduction, fitness, and levels of explanation.

**Adaptation and Evolutionary Inference** -- Adaptations, by-products, noise, hypothesis formation, alternatives, and standards of evidence.

**Sexual Selection and Mating** -- Mate preferences, competition, trade-offs, and variation across people and contexts.

**Parental Investment and Families** -- Investment, parent–offspring conflict, life-history trade-offs, and caregiving ecology.

**Kin Selection and Inclusive Fitness** -- Relatedness, indirect fitness, kin recognition, and conditional helping.

**Cooperation and Reciprocity** -- Reciprocal altruism, partner choice, punishment, reputation, and collective action.

**Social Cognition, Status, and Groups** -- Coalitions, hierarchy, social learning, conflict, and intergroup psychology.

**Culture, Development, and Critical Methods** -- Developmental calibration, culture–gene interactions, cross-cultural evidence, replication, and ethical interpretation.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Three Lecture Depths** -- Every lecture is available at Short, Medium, or Long depth while preserving the same examples and learning objectives.

**Grounded AI Tutor** -- The section-scoped tutor streams answers grounded in the exact lecture passage on screen.

**Adaptive Practice** -- Generated scenario problems adjust their difficulty according to recent answers.

**Reasoned Application** -- Homework, tests, practice, and diagnostics require learners to compare explanations, reason from evidence, and qualify conclusions.

**Four Graded Checkpoints** -- Two homework sets, a timed course test, and a cumulative final receive semantic grading, per-problem results, and written rationale.

**Reasoning Primers** -- Two ungraded primers develop evolutionary-case analysis and core reasoning skills.

**Academic Integrity** -- Every submission is checked by static text detection and diachronic keystroke-pattern analysis.`,
  },
  {
    emoji: "📦",
    title: "What Is Included",
    body: `A 4–6 hour course organized around eight evolutionary psychology topic areas; three lecture depths; section-scoped AI tutoring; adaptive practice; four graded checkpoints; ungraded diagnostic checks; live learning analytics; free PDF and TXT course downloads with no sign-in; and a built-in product walkthrough video.`,
  },
  {
    emoji: "👥",
    title: "Designed For",
    body: `**Researchers and Professionals** -- A foundational but substantial introduction for people entering evolutionary psychology.

**Students and Interdisciplinary Teams** -- A shared language for evolutionary hypotheses, behavioral evidence, alternatives, and uncertainty.

**Instructors and Curriculum Designers** -- A working example of AI-taught and AI-graded coursework with integrity controls.

**Academic-Integrity Researchers** -- A live demonstration of layered authorship screening in an educational product.`,
  },
  {
    emoji: "⚙️",
    title: "Under the Hood",
    body: `The course uses an OpenAPI contract as the source of truth, with React Query hooks and Zod validators generated from the same contract. Server-Sent Events deliver section-scoped tutor responses token by token.

Its adaptive-practice engine preserves and adjusts per-session difficulty. GPTZero-backed text detection is blended with structural signals, while keystroke analysis evaluates paste-and-rewrite behavior and sustained input patterns.

Operator diagnostics verify the database, course seed, model completion, JSON mode, detection, practice, grading, and analytics. A content marker detects subject changes and transactionally replaces stale curriculum.`,
  },
];

const freudSections = [
  {
    emoji: "🛋️",
    title: "What It Is",
    body: `Freud in Four Hours is a formal, rigorous, self-paced introduction to psychoanalytic theory, history, technique, and debates about evidence for adult learners entering the field.

The course is historically informed and conceptually exacting. It distinguishes observation from interpretation, clinical pattern from metapsychological hypothesis, and therapeutic outcome from evidence for a proposed mechanism.`,
  },
  {
    emoji: "🧭",
    title: "The Curriculum",
    body: `**Foundations of Mental Life** -- The unconscious, psychic determinism, repression, drives, the pleasure and reality principles, and Freud's structural and topographic models.

**Development and Conflict** -- Infantile sexuality, the Oedipus complex, fixation, regression, defense mechanisms, anxiety, narcissism, object relations, and ambivalence.

**Symptoms and Everyday Evidence** -- Symptom formation, dreams and dream work, parapraxes, jokes, art, religion, mourning, melancholia, identification, and repetition compulsion.

**Psychoanalytic Technique** -- Free association, transference, countertransference, resistance, working through, interpretation, and insight.

**Legacy and Critique** -- Civilization and instinctual renunciation, post-Freudian revisions from Jung to Lacan, psychoanalysis's scientific status, and its relationship to modern mind sciences.`,
  },
  {
    emoji: "🎓",
    title: "Learning and Assessment",
    body: `**Thirty Course Topics** -- A focused curriculum covers the central concepts, methods, historical developments, and current debates of psychoanalysis.

**Three Lecture Depths** -- Every lecture is available at Short, Medium, or Long depth.

**Grounded AI Tutor** -- Section-scoped tutoring remains grounded in the lecture being read.

**Adaptive Practice** -- Topic practice adjusts and preserves difficulty as the learner progresses.

**Reasoned Case Analysis** -- Assessments require concrete, multi-sentence analysis rather than definition recall.

**Four Graded Checkpoints** -- Two homework sets, a timed course test, and a cumulative final use semantic grading with per-problem rationale.

**Diagnostics and Integrity** -- Subject and General Reasoning diagnostics are paired with static and diachronic keystroke-pattern AI-authorship screening.`,
  },
  {
    emoji: "📦",
    title: "What Is Included",
    body: `Thirty psychoanalysis topics plus two diagnostic primers; three lecture depths; grounded AI tutoring; adaptive practice; two homework sets, a course test, and a cumulative final; public PDF and TXT course readers with no account required; and analytics for assignment performance and topic mastery.`,
  },
  {
    emoji: "⚙️",
    title: "Under the Hood",
    body: `The course uses a contract-first Express API with OpenAPI-generated Zod validators and React Query hooks. PostgreSQL and Drizzle support curriculum, attempts, practice, diagnostics, and analytics, while Server-Sent Events deliver model-backed tutoring and generation.

Transactional curriculum reseeding uses a versioned content marker. GPTZero-backed static detection includes non-blocking fallbacks and is paired with keystroke-trace analysis.`,
  },
];

function renderBody(body: string) {
  return body.split("\n\n").map((paragraph, index) => {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={index} className="text-gray-700">
        {parts.map((part, partIndex) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={partIndex} className="text-gray-900">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={partIndex}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

export default function FourHourCertifications() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  return (
    <div className="font-sans bg-white text-gray-900 leading-relaxed min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Four Hour Certifications
          </h1>
        </header>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔐</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Cryptography
                </h2>
                <p className="text-sm text-gray-600">
                  Secrets, Locks, and Digital Trust
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "cryptography" ? null : "cryptography",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "cryptography" ? "Hide" : "Details"}
              </button>
              <a
                href="https://picocryptography.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "cryptography" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                A rigorous but accessible four-hour introduction to codes,
                ciphers, and digital trust.
              </p>
              {cryptographySections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧠</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Evolutionary Psychology
                </h2>
                <p className="text-sm text-gray-600">
                  From Evolutionary Principles to Careful Explanations of Behavior
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "evolutionary-psychology"
                      ? null
                      : "evolutionary-psychology",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "evolutionary-psychology"
                  ? "Hide"
                  : "Details"}
              </button>
              <a
                href="https://evopsychfourhour.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "evolutionary-psychology" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                A rigorous 4–6 hour introduction to evolutionary approaches to
                human behavior and careful, evidence-based explanation.
              </p>
              {evolutionaryPsychologySections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛋️</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Freud in Four Hours
                </h2>
                <p className="text-sm text-gray-600">
                  Basic Tenets of Psychoanalysis
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCourse((value) =>
                    value === "freud-in-four-hours"
                      ? null
                      : "freud-in-four-hours",
                  )
                }
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {expandedCourse === "freud-in-four-hours"
                  ? "Hide"
                  : "Details"}
              </button>
              <a
                href="https://nanofreud.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Visit
              </a>
            </div>
          </div>

          {expandedCourse === "freud-in-four-hours" && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <p className="text-lg text-gray-700">
                A formal, rigorous four-hour introduction to psychoanalytic
                theory, history, technique, and debates about evidence.
              </p>
              {freudSections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">{renderBody(section.body)}</div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}