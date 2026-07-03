import { useState } from "react";
import NavBar from "@/components/NavBar";

interface Section {
  emoji: string;
  title: string;
  body: string;
}

interface CourseDescription {
  emoji: string;
  tagline: string;
  sections: Section[];
}

interface Course {
  title: string;
  url: string;
}

const courseDescriptions: Record<string, CourseDescription> = {
  "Constructive Critical Reasoning": {
    emoji: "🧭",
    tagline:
      "A Four-Unit Course That Trains You to Draw the Strongest Conclusion the Data Actually Supports -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Constructive Critical Reasoning (CCR) is a self-paced, single-user web course that teaches the discipline of committing to the richest, most-falsifiable conclusion a body of evidence will bear -- the opposite of reflexive skepticism. No math, coding, or technical background required.\n\nCCR inverts the usual grading instinct. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The richest, most-falsifiable, most-committed model earns top credit; the cautious \"you can't really conclude anything\" dodge earns near-zero; florid padding that binds no data scores low; and a bold claim the data actively defeats also earns zero. Every question rewards committing harder to the strongest model the data will bear, while exposing the cleanest test that could defeat it.\n\nThe curriculum is organized into four units and 32 sections: Unit 1 -- Foundations of Constructive Reasoning (the fecund lead, model selection by explanatory yield, parsimony as a live constraint, abductive commitment, from correlation to mechanism, the anomaly cluster, the cheap decisive test, and calibrated boldness); Unit 2 -- Building and Stress-Testing the Model; Unit 3 -- Adjudicating Among Rivals; and Unit 4 -- Commitment, Revision, and Decision.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, CCR pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Unit Structured Curriculum** -- A complete plain-language reasoning syllabus across 32 sections in four units (Foundations of Constructive Reasoning; Building and Stress-Testing the Model; Adjudicating Among Rivals; Commitment, Revision, and Decision). Each section ships with a lesson and one graded homework. There is no separate test, midterm, or final -- homework is the graded model.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**One Homework Per Section, Your Format** -- Each section's homework is offered in three formats and you pick exactly one: MCQ (long), Hybrid (medium -- multiple choice + short written), or Written (short). You get a single attempt -- it locks the moment you submit.\n\n**Inverted Partial-Credit Grading** -- MC option weights act as data (one zero-credit dodge foil, plus a descending gradient of live options); written answers are scored against a yield/risk rubric with a penalty for claims the data defeats; hybrid blends both parts. Every item returns a written rationale.\n\n**Adaptive Topic Practice** -- Generated scenario problem sets that move difficulty up after a streak and down after a miss, with explanations on every answer. Per-session difficulty persists.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable rationale.\n\n**Four-Phase Diagnostic Assessments** -- A single CCR reasoning instrument runs at four phases (baseline, two mid-course checkpoints, and after the unit) using a 3x3 menu of generated items, so reasoning growth can be tracked across the course. A configurable minimum-to-pass governs pass/fail.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-section mastery percentages, and a recent-activity feed.\n\n**Operator Diagnostics** -- One-click self-tests (system health and synthetic-student end-to-end run) verify the entire stack -- database, OpenAI integration, GPTZero, detection pipeline, and the practice/grade loop.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Inverted Partial-Credit Grading Engine**\n\n**MC / Hybrid MC part:** each option carries a stored weight in [0,1]. Exactly one option is a zero-credit dodge (a fallacy the data defeats, or a non-committal refusal); the rest form a descending gradient (richest/most-falsifiable = 1.0, weaker commitment = 0.6, timid partial = 0.3). Credit is the chosen option's weight.\n\n**Written:** scored against a { modelAnswer, yieldAnchors, riskAnchors, defeatedBy } rubric -- credit rises with how much data the answer binds and how falsifiable a test it commits to, and falls for asserting claims the data defeats or for empty elaboration.\n\n**Hybrid:** averages the MC and written parts. Section percent rolls up per item, and the course aggregate honors configurable format point values.\n\n**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic. If GPTZero is unavailable, the system falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** the textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration, penalizing paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**Single-Attempt Lock** -- Starting a homework records the chosen format; submitting locks the attempt. A second start on a submitted assignment is rejected (HTTP 409) and the UI shows the locked result.\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** spins up a fake student, runs a practice session, takes and submits a full homework attempt, and verifies grading + detection + analytics all reflect the run.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt so responses stay grounded in the lecture being read.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes current difficulty and section as input.\n\n**Living README** -- This README plus a companion BLUEPRINT.md architecture document are kept in lock-step with the code.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language course in reasoning toward the strongest supported conclusion -- with on-demand tutoring and adaptive practice, no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection combining text classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Constructive Critical Reasoning reframes \"critical thinking\" as a constructive act.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the richest model the evidence supports and naming the cleanest test that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nConstructive Critical Reasoning -- where the strongest honest conclusion, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Quantitative Reasoning": {
    emoji: "🎓",
    tagline: "The Quantitative Reasoning Studio -- Executable College Coursework",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "QuantReason is a full-service self-paced learning platform that delivers a complete four-week college-freshman Quantitative Reasoning course -- taught, tutored, drilled, graded, and integrity-checked entirely by AI.\n\nIt performs end-to-end coursework: depth-adjustable lectures, section-scoped Socratic tutoring, adaptive problem generation, and rubric-faithful AI grading -- from a 90-second concept skim all the way to a full midterm and final with per-problem rationales.\n\nDesigned for students, instructors evaluating AI-taught coursework, and academic-integrity researchers, it merges a real 28-topic QR syllabus with two layers of AI-authorship detection -- producing a course that students can trust to be fair and that instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Structured Curriculum** -- A complete QR syllabus across 28 topics: proportional reasoning, descriptive statistics, probability, exponential and linear models, financial math, data interpretation, and inference. Each week ships with lectures, homework, and a test; week four adds a midterm and a final.\n\n**Three-Depth Lectures** -- Every lecture is available at Short / Medium / Long length, AI-rewritten while preserving the same worked examples and learning objectives. Skim the concept, expand it on demand, or read the textbook-style deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with worked explanations on every answer. Per-session difficulty persists, so each drill picks up where the last one left off.\n\n**AI-Graded Assignments** -- Homework, tests, midterm, and final are scored by an LLM grader that returns per-problem correctness plus a written rationale, then rolls up to a percent score on the attempt.\n\n**Two-Layer AI-Authorship Detection** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- Two one-click self-tests verify the entire stack -- database, OpenAI, GPTZero, detection pipeline, and the practice/grade loop -- before you trust a session.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Static Text Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero.\n\n**System Diagnostic (/diagnostics/system)** -- Eight ordered checks: environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run)** -- Spins up a fake student, runs a practice session (wrong -> adjust down -> right -> adjust up), takes a full assignment attempt, submits it, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it. Request and response shapes can't drift between client and server because both come from the same spec.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming for tutor answers, with a section-scoped system prompt so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and the topic as input, so the question pool is generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The 62-second product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Freshmen & Self-Learners** -- A complete one-month QR course delivered with on-demand tutoring and adaptive practice -- no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "QuantReason redefines an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nQuantReason -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Conceptual Mathematics": {
    emoji: "🧠",
    tagline:
      "Teach Yourself Conceptual Mathematics -- A Four-Week Course on the Ideas Behind the Symbols, From the Integers to Gödel and the Halting Problem",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Conceptual Mathematics is a self-paced, single-user web course that asks the question math classes usually skip: what are these things, really? What is a number? What is an operation? What is a proof? What does it mean for a series to add up to a finite value? What does it mean for a theorem to be unprovable?\n\nIt is a content reskin of the QuantReason Quantitative Reasoning app. The full QuantReason runtime -- lectures with Short / Medium / Long depth, section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- is preserved unchanged. The purpose of this build is to teach the conceptual backbone of modern mathematics -- the same backbone that every undergraduate eventually meets in an analysis or abstract-algebra course, but without the prerequisite hazing.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum of 32 Micro-Lectures** -- Eight per week, organized by theme:\n\n**Week 1 -- The number systems.** Counting and the number line; rationals and ratios; irrationals and the √2 scandal; real numbers and completeness; imaginary and complex numbers as rotations; zero, negatives, and other conceptual leaps; bases and place value; countable vs. uncountable infinity.\n\n**Week 2 -- Operations and structures.** What an operation is; commutativity, associativity, distributivity; groups and symmetry; rings and fields; vector spaces; functions as mappings; relations, equivalence classes, and isomorphism; modular arithmetic.\n\n**Week 3 -- The continuum: calculus, geometry, topology.** Limits and the taming of infinity; continuity; derivatives as instantaneous rate; integrals as accumulation; the Fundamental Theorem of Calculus; sequences, series, and Zeno; Euclidean vs. non-Euclidean geometry; topology, dimension, and curvature.\n\n**Week 4 -- Foundations: logic, proof, undecidability.** Propositional and predicate logic; what a proof is; mathematical induction; sets and Russell's paradox; axioms and independence results; Gödel's incompleteness theorems; probability (measure, frequency, credence); computability and the halting problem.\n\n**One Real Example per Lecture** -- Every micro-lecture grounds its concept in a worked example from science, history, or another part of mathematics: the Pythagoreans throwing Hippasus overboard for √2, Cantor's diagonal argument, the Banach–Tarski paradox, Eddington's 1919 eclipse confirming non-Euclidean spacetime, the RSA cryptosystem as computation in ℤ/nℤ, Cohen's forcing argument for the independence of CH, and Turing's diagonal proof of the undecidability of the halting problem.\n\n**One Symbolic Question per Lecture** -- Every homework / test / midterm / final problem requires the student to write the key statement in symbols (set-builder notation, ε–δ, quantifiers, Σ, ≡ … (mod n)), not just describe it in English. The on-screen math keyboard is the only practical way to compose these answers.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, Operator Diagnostics** -- All inherited unchanged from the QuantReason runtime.\n\n**12 Graded Assignments** -- Two homeworks per week plus a graded weekly checkpoint: Week 1 test, end-of-Week-2 midterm, Week 3 test, end-of-Week-4 cumulative final.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Symbolic Answer Harness** -- Every problem prompt is structured so the canonical answer is a piece of mathematical notation. Both prompt rendering (KaTeX) and answer entry/grading (LaTeX-aware AI grader with numeric short-circuit) handle set-builder, quantifiers, blackboard-bold, congruence-modulo, ε–δ, and the rest cleanly.\n\n**Static AI Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalises paste-then-reword behaviour, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/diagnostics/system)** -- Environment, database round-trip, course-seed integrity (≥32 topics), OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run)** -- End-to-end stack proof: a fake student takes a practice session, takes a full assignment attempt, submits, and verifies grading + detection + analytics all reflect the run.\n\n**Auto-Reseed on Curriculum Change** -- The system compares the set of topic slugs in the database to the expected curriculum and checks a sentinel phrase in a designated lecture. If either differs, it wipes and re-seeds in dependency order -- a single content swap propagates cleanly on the next server start.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4) adjusts after each attempt; problems are generated on demand.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Anyone Who Took a Calculus Class and Wondered \"But What Is This?\"** -- A short, focused course on the conceptual scaffolding behind the symbols: number, operation, structure, limit, proof, undecidability.\n\n**The Maintainer of QuantReason and Its Clones** -- A pure stress test of the math-notation stack (keyboard, LaTeX rendering, grading, and AI detection) under a curriculum whose answers lean on quantifiers and set-builder notation.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most mathematics courses teach the moves -- how to differentiate, how to multiply matrices, how to solve a congruence. Far fewer teach the objects -- what a number is, what an operation is, what a proof is, what an axiom can and cannot do. This course is built around the second list.\n\nRead the idea, see it grounded in a real example, then write the defining statement in symbols of your own.\n\nTeach Yourself Conceptual Mathematics -- read the idea, ground the idea, write the idea.",
      },
    ],
  },
  "Teach Yourself Math Notation": {
    emoji: "🔣",
    tagline:
      "Teach Yourself Mathematical Notation -- A Four-Week Course on the Symbols of Mathematics, Science, and Engineering",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Mathematical Notation is a self-paced, single-user web course whose subject is the symbols themselves: =, ≠, ≈, ≡, ±, ∝, Σ, Π, Δ, ∂, ∫, μ, σ, P(A ∣ B), ∀, ∃, ∈, ⊆, ℕ, ℝ, ℂ, and the rest.\n\nIt is a content reskin of the QuantReason Quantitative Reasoning app. The full QuantReason runtime -- lectures with Short / Medium / Long depth, section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- is preserved unchanged. The purpose of this build is to put the on-screen math keyboard through its paces: every micro-lecture targets one symbol or symbol-subset and every assignment problem requires the student to type that symbol in their answer.\n\nIf a symbol on the keyboard cannot be inserted, rendered, graded, or detected cleanly, this course will surface it.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum of 28 Micro-Lectures** -- One symbol family per lecture, organized by week:\n\n**Week 1 -- Foundations.** Equality family (=, ≠, ≈, ≡); inequalities (<, >, ≤, ≥); ± and ∝; exponents (xⁿ); roots (√, ³√); |x| and n!; subscripts (x₀, xₜ, vᵧ).\n\n**Week 2 -- Calculus and change.** Σ; Π; Δ and δ; lim, →, ∞; d/dx and ∂/∂x; ∫, ∬, ∮; e, ln, log.\n\n**Week 3 -- Probability and statistics.** μ, σ, σ²; x̄, p̂, s; P(A), P(A∣B); E(X), Var(X); X ∼ N(μ, σ²); z, t, χ²; α, β.\n\n**Week 4 -- Logic, sets, and foundations.** ∈, ∉; ⊂, ⊆; ∪, ∩, ∅, Aᶜ; ∀, ∃, ∄; ∧, ∨, ¬; →, ↔; ℕ, ℤ, ℚ, ℝ, ℂ.\n\n**One Real Science Example per Lecture** -- Every micro-lecture grounds its symbol in an actual scientific equation: ΔS ≥ 0 for the second law, N(t) = N₀e^(−λt) for radioactive decay, χ² for Mendelian goodness-of-fit, p̂ for clinical-trial efficacy, ψ : ℝ⁴ → ℂ for the quantum wavefunction.\n\n**One Symbol-Use Question per Lecture** -- Every homework / test / midterm / final problem demands the student write the symbol in their answer, not just describe it in English. The math keyboard is the only practical way to do this.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, Operator Diagnostics** -- All inherited unchanged from the QuantReason runtime.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Math Keyboard Beta Harness** -- Every problem prompt is structured so that the only way to type the model answer is with the keys on the floating math keyboard. This makes the course a stress test of: tab discoverability, symbol insertion at the cursor, keystroke / paste detection on submitted answers, LaTeX-aware grading, and the KaTeX renderer for both the lecture and the student's answer.\n\n**Static AI Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/diagnostics/system)** -- Environment, database round-trip, course-seed integrity (≥28 topics), OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run)** -- End-to-end stack proof: a fake student takes a practice session, takes a full assignment attempt, submits, and verifies grading + detection + analytics all reflect the run.\n\n**Auto-Reseed on Curriculum Change** -- A single content swap propagates cleanly when the seed file changes: the system compares the set of topic slugs in the database to the expected curriculum and, if they differ, wipes and re-seeds in dependency order.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4) adjusts after each attempt; problems are generated on demand.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**The Maintainer of QuantReason and Its Clones** -- A pure stress test of the math-notation stack (keyboard, LaTeX rendering, grading, and AI detection) without the noise of a different curriculum to debug at the same time.\n\n**Anyone Who Has Ever Squinted at a Math Paper** -- A short, focused course that explains what the symbols mean, with one science example for each.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "A formula is the most compressed piece of writing a scientist ever produces. Every symbol does work -- and the cost of misreading one is that the whole sentence flips its meaning.\n\nThis course teaches notation by using notation: read the symbol, see it in a real scientific equation, then type it back in an answer of your own. The math keyboard is the gym; the symbols are the weights; the science examples are the reason any of it matters.\n\nTeach Yourself Mathematical Notation -- read the symbol, type the symbol, mean the symbol.",
      },
    ],
  },
  "Voice-Powered KnowThySelf": {
    emoji: "🪞",
    tagline:
      "KnowThySelf -- Voice-Powered Self-Knowledge: A four-unit, spoken-first self-inquiry course where you answer honest questions out loud and an AI tells you something true about yourself -- analysis, not grading.",
    sections: [
      {
        emoji: "🧩",
        title: "What This Is",
        body:
          "KnowThySelf walks one person through a structured month of self-inquiry. You read a short lesson, sit with a probing prompt, record a spoken answer, and get a candid, perceptive reading of what your answer -- and the way you gave it -- reveals. Each reading compounds into a cumulative portrait across nine dimensions, culminating in a capstone that names the one conflict you're really trying to resolve.",
      },
      {
        emoji: "🗂️",
        title: "Layout",
        body:
          "**App** -- the user-facing course, served at the root. **API** -- an Express API (database, object storage, AssemblyAI transcription, OpenAI analysis, diagnostics). **Videos** -- a product demo and a promo, both with audio. **Shared libraries** -- an OpenAPI spec as the source of truth, generated React Query hooks plus Zod validators, and a Drizzle database schema. The behavior shifted from grading to analyzing, with subject and branding changed to match self-inquiry.",
      },
      {
        emoji: "⚙️",
        title: "How It Works",
        body:
          "**Spoken pipeline** -- the browser records with MediaRecorder -> presigned upload -> object storage -> the server transcribes via AssemblyAI -> derives delivery metrics -> produces a candid reading via OpenAI, then rebuilds the cumulative profile.\n\n**Analysis, not grading** -- every answer returns a headline, an interpretation, and observations; the profile returns dimensions, a synthesis, and -- after the capstone -- a primary conflict. No scores.\n\n**Fail-loud** -- if transcription or analysis fails, the response is stored as failed and the API returns 502 -- never a fabricated reading.\n\n**Contract-first** -- one OpenAPI document drives the generated client hooks and server Zod validators.\n\n**Database** -- external Postgres (Neon), seeded idempotently on boot.",
      },
    ],
  },
  "Public Speaking": {
    emoji: "🎙️",
    tagline:
      "Podium, The Spoken-First Studio -- A Four-Week College Public Speaking Course That Teaches, Coaches, and Grades How You Actually Speak",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Podium is a self-paced, single-user web course that delivers a full month of college public speaking -- taught, drilled, and graded entirely by AI, with most assignments performed out loud.\n\nInstead of typing essays about communication, the student steps up to the mic, records a real spoken answer, and gets coached on both what they said and how they said it. It compresses a semester-style public speaking class into one focused product: read the lecture, practice against a prompt, record your response, and submit homework, tests, and a capstone speech that are transcribed and evaluated by AI -- scored on content and delivery, with concrete, actionable feedback on every attempt.\n\nDesigned for college freshmen, self-learners, instructors evaluating AI-coached coursework, and anyone who wants to get measurably better at speaking, Podium pairs a real public speaking curriculum with automatic transcription and a coaching grader that reads your pacing, filler words, and pauses -- not just your words.",
      },
      {
        emoji: "🎤",
        title: "What It Does",
        body:
          "**Four-Unit Structured Curriculum** -- A complete public speaking syllabus across 29 topics: managing nerves, breath and projection, posture and presence, audience analysis, message structure, openings and closings, evidence and storytelling, pace and the pause, vocal variety, eliminating filler words, body language, handling questions, rehearsal technique, persuasion, adapting to the occasion, impromptu speaking, and a full capstone speech. Each unit ships with lectures, homework, and a test.\n\n**Spoken-First Assignments** -- Most homework and every test is delivered out loud. The student records audio (or video) directly in the browser, and on submit the recording is transcribed and graded -- no typing required.\n\n**Two-Dimensional Coaching Grade** -- Every spoken response is scored on content (structure, clarity, argument, relevance) and delivery (pace, fluency, filler words, pauses, vocal energy) separately, then blended into an overall score and letter grade -- with a written summary, what worked, and what to fix next time.\n\n**Delivery Metrics Straight From the Audio** -- Each recording yields measured signals: words per minute, filler-word count and rate, number and length of pauses, and fluency and pace-variation proxies -- so feedback points to evidence, not vibes.\n\n**Written Reflections Where They Belong** -- A few assignments (audience analysis, rehearsal planning) are written short-answer reflections, graded on content alone -- because not every speaking skill is a performance.\n\n**Lecture Reading + Practice Loop** -- Read the lecture for any topic, then move straight into the assignment that practices it, so concept and rehearsal stay tied together.\n\n**Live Progress Analytics** -- Per-unit mastery, average content and delivery scores, best score, and a recent-activity feed -- so improvement over the month is visible at a glance.\n\n**Operator Diagnostics** -- Two one-click self-tests verify the entire stack -- database, OpenAI, the Anthropic grader, AssemblyAI transcription, GPTZero, object storage, and the full record -> transcribe -> grade loop -- before you trust a session.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Spoken Submission Pipeline** -- The browser records with MediaRecorder, requests a presigned upload URL, PUTs the blob to object storage, then submits the object path. The server downloads the recording, transcribes it via AssemblyAI (with disfluencies on), derives delivery metrics from word-level timings, and grades content + delivery via Anthropic (claude-sonnet-4-5, configurable through ANTHROPIC_MODEL).\n\n**Fail-Loud Grading** -- If transcription or evaluation fails, the response is stored as failed and the API returns 502 -- the system never fabricates a grade or a transcript. A failure is surfaced as a failure, never papered over with a silent fallback.\n\n**Backend-Only Keys** -- ANTHROPIC_API_KEY, ASSEMBLYAI_API_KEY, and every other provider key live only on the server; the browser never sees them.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift between client and server -- both come from the same spec.\n\n**Two Diagnostic Self-Tests** -- System: ordered checks for environment, database round-trip, course-seed integrity, OpenAI completion, the Anthropic grader, AssemblyAI authentication, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string. Synthetic-Student: starts a fresh attempt on a written reflection prompt, grades it through the real evaluator, finalizes and rolls up the score, verifies analytics reflect the run, then cleans itself up -- an end-to-end stack proof in one click.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Freshmen & Self-Learners** -- A complete one-month public speaking course with spoken practice and automatic coaching -- no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for AI-taught, AI-graded speaking coursework that evaluates delivery, not just text.\n\n**Product & Engineering Teams** -- A reference implementation of a record -> upload -> transcribe -> grade pipeline, contract-first full-stack architecture, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most \"speaking\" courses still grade you on what you write. Podium grades you on what you say -- and on how you say it.\n\nIt teaches the material, gives you a prompt, listens to your actual voice, measures your pacing and filler words, and hands back a coach's note you can act on before the next take. The result is a self-paced course where getting better at speaking is something you do out loud, on the record, and can measure week over week.\n\nPodium -- where the lecture, the prompt, the microphone, and the coach all live in one room.",
      },
    ],
  },
  "Portfolio Analysis": {
    emoji: "📈",
    tagline:
      "The Portfolio Analysis Studio -- Executable College Coursework: Taught, Tutored, Drilled, Graded, and Integrity-Checked Entirely by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Portfolio Think is a full-service self-paced learning platform that delivers a complete four-week college-freshman Portfolio Analysis course -- taught, tutored, drilled, graded, and integrity-checked entirely by AI.\n\nIt performs end-to-end coursework: depth-adjustable lectures, section-scoped Socratic tutoring, adaptive problem generation, and rubric-faithful AI grading -- from a 90-second concept skim all the way to a full midterm and final with per-problem rationales.\n\nDesigned for students, instructors evaluating AI-taught coursework, and academic-integrity researchers, it merges a real 29-topic portfolio-analysis syllabus with two layers of AI-authorship detection -- producing a course that students can trust to be fair and that instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Structured Curriculum** -- A complete portfolio-analysis syllabus across 29 topics: what portfolio management is, investment objectives and the policy statement, measuring return and risk, the risk-return tradeoff, time horizon and liquidity, the major asset classes, diversification and correlation, Modern Portfolio Theory and the efficient frontier, the Capital Market Line, the CAPM and beta, factor models and market efficiency, strategic and tactical asset allocation, passive and active management, equity and fixed-income strategies, alternatives, rebalancing, costs and taxes, performance measurement and attribution, risk-adjusted metrics, benchmarks, behavioral pitfalls, hedging, the investment process, and ethics and fiduciary duty. Each week ships with lectures, homework, and a test; week two adds a midterm and week four adds a final.\n\n**Three-Depth Lectures** -- Every lecture is available at Short / Medium / Long length, AI-rewritten while preserving the same worked examples and learning objectives. Skim the concept, expand it on demand, or read the textbook-style deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with worked explanations on every answer. Per-session difficulty persists, so each drill picks up where the last one left off.\n\n**AI-Graded Assignments** -- Homework, tests, midterm, and final are scored by an LLM grader that returns per-problem correctness plus a written rationale, then rolls up to a percent score on the attempt.\n\n**Two-Layer AI-Authorship Detection** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- Two one-click self-tests verify the entire stack -- database, OpenAI, GPTZero, detection pipeline, and the practice/grade loop -- before you trust a session.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Static Text Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero.\n\n**System Diagnostic** -- Seven ordered checks: environment (DATABASE_URL present), database round-trip, course-seed integrity (29 topics / 29 lectures / 12 assignments / 57 problems), OpenAI chat completion, OpenAI JSON mode, detection pipeline (structural heuristic + GPTZero scoring), and grader semantic-equivalence. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic** -- Spins up a fake student, reads every lecture, submits all twelve assignments (homework, tests, midterm, and final), runs an adaptive practice session (difficulty adjusts down on a miss and up on a streak), queries the section-scoped tutor, scans a pasted-style answer through both detectors, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it. Request and response shapes can't drift between client and server because both come from the same spec.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming for tutor answers, with a section-scoped system prompt so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1–4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and the topic as input, so the question pool is generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The 62-second product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Freshmen & Self-Learners** -- A complete one-month portfolio-analysis course delivered with on-demand tutoring and adaptive practice -- no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Portfolio Think redefines an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nPortfolio Think -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Conceptual Physics": {
    emoji: "🔬",
    tagline:
      "The Conceptual Physics Studio -- Executable College Coursework: Taught, Tutored, Drilled, Graded, and Integrity-Checked Entirely by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Physics Think is a full-service self-paced learning platform that delivers a complete four-week college-freshman Conceptual Physics course -- taught, tutored, drilled, graded, and integrity-checked entirely by AI.\n\nIt performs end-to-end coursework: depth-adjustable lectures, section-scoped Socratic tutoring, adaptive problem generation, and rubric-faithful AI grading -- from a 90-second concept skim all the way to a full midterm and final with per-problem rationales.\n\nDesigned for students, instructors evaluating AI-taught coursework, and academic-integrity researchers, it merges a real 29-topic conceptual-physics syllabus with two layers of AI-authorship detection -- producing a course that students can trust to be fair and that instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Structured Curriculum** -- A complete conceptual-physics syllabus across 29 topics: motion and frames of reference, forces and Newton's laws, inertia, mass, and momentum, energy and its conservation, gravity and orbits, fields, electricity and magnetism, waves and sound, heat and thermodynamics, light and optics, and an introduction to quantum ideas. Each week ships with lectures, homework, and a test; week four adds a midterm and a final.\n\n**Three-Depth Lectures** -- Every lecture is available at Short / Medium / Long length, AI-rewritten while preserving the same worked examples and learning objectives. Skim the concept, expand it on demand, or read the textbook-style deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with worked explanations on every answer. Per-session difficulty persists, so each drill picks up where the last one left off.\n\n**AI-Graded Assignments** -- Homework, tests, midterm, and final are scored by an LLM grader that returns per-problem correctness plus a written rationale, then rolls up to a percent score on the attempt.\n\n**Two-Layer AI-Authorship Detection** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- Two one-click self-tests verify the entire stack -- database, OpenAI, GPTZero, detection pipeline, and the practice/grade loop -- before you trust a session.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Static Text Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero.\n\n**System Diagnostic** -- Seven ordered checks: environment (DATABASE_URL present), database round-trip, course-seed integrity (29 topics / 29 lectures / 12 assignments / 57 problems), OpenAI chat completion, OpenAI JSON mode, detection pipeline (structural heuristic + GPTZero scoring), and grader semantic-equivalence. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic** -- Spins up a fake student, reads every lecture, submits all twelve assignments (homework, tests, midterm, and final), runs an adaptive practice session (difficulty adjusts down on a miss and up on a streak), queries the section-scoped tutor, scans a pasted-style answer through both detectors, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it. Request and response shapes can't drift between client and server because both come from the same spec.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming for tutor answers, with a section-scoped system prompt so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1–4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and the topic as input, so the question pool is generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The 62-second product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Freshmen & Self-Learners** -- A complete one-month conceptual-physics course delivered with on-demand tutoring and adaptive practice -- no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Physics Think redefines an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nPhysics Think -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Quantitative Critical Thinking": {
    emoji: "🔢",
    tagline:
      "Quantitative Think, The Quantitative Reasoning Studio -- Executable College Coursework: Taught, Tutored, Drilled, Graded, and Integrity-Checked Entirely by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Quantitative Think is a full-service self-paced learning platform that delivers a complete four-week college-freshman Quantitative Reasoning course -- taught, tutored, drilled, graded, and integrity-checked entirely by AI.\n\nIt performs end-to-end coursework: depth-adjustable lectures, section-scoped Socratic tutoring, adaptive problem generation, and rubric-faithful AI grading -- from a 90-second concept skim all the way to a full midterm and final with per-problem rationales.\n\nDesigned for students, instructors evaluating AI-taught coursework, and academic-integrity researchers, it merges a real 29-topic quantitative-reasoning syllabus with two layers of AI-authorship detection -- producing a course that students can trust to be fair and that instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Structured Curriculum** -- A complete quantitative-reasoning syllabus across 29 topics: magnitude and estimation, units and proportional reasoning, percentages and base rates, ratios and rates, descriptive statistics, probability and conditional probability, correlation versus causation, exponential growth, and reading data and visualizations critically. Each week ships with lectures, homework, and a test; week four adds a midterm and a final.\n\n**Three-Depth Lectures** -- Every lecture is available at Short / Medium / Long length, AI-rewritten while preserving the same worked examples and learning objectives. Skim the concept, expand it on demand, or read the textbook-style deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with worked explanations on every answer. Per-session difficulty persists, so each drill picks up where the last one left off.\n\n**AI-Graded Assignments** -- Homework, tests, midterm, and final are scored by an LLM grader that returns per-problem correctness plus a written rationale, then rolls up to a percent score on the attempt.\n\n**Two-Layer AI-Authorship Detection** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- Two one-click self-tests verify the entire stack -- database, OpenAI, GPTZero, detection pipeline, and the practice/grade loop -- before you trust a session.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Static Text Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero.\n\n**System Diagnostic** -- Seven ordered checks: environment (DATABASE_URL present), database round-trip, course-seed integrity (29 topics / 29 lectures / 12 assignments / 57 problems), OpenAI chat completion, OpenAI JSON mode, detection pipeline (structural heuristic + GPTZero scoring), and grader semantic-equivalence. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic** -- Spins up a fake student, reads every lecture, submits all twelve assignments (homework, tests, midterm, and final), runs an adaptive practice session (difficulty adjusts down on a miss and up on a streak), queries the section-scoped tutor, scans a pasted-style answer through both detectors, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it. Request and response shapes can't drift between client and server because both come from the same spec.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming for tutor answers, with a section-scoped system prompt so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1–4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and the topic as input, so the question pool is generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The 62-second product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Freshmen & Self-Learners** -- A complete one-month quantitative-reasoning course delivered with on-demand tutoring and adaptive practice -- no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Quantitative Think redefines an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nQuantitative Think -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Critical Thinking": {
    emoji: "🎓",
    tagline:
      "ClearThink, The Critical Thinking Studio -- Executable College Coursework: Taught, Tutored, Drilled, Graded, and Integrity-Checked Entirely by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "ClearThink is a full-service self-paced learning platform that delivers a complete four-week college-freshman Critical Thinking course -- taught, tutored, drilled, graded, and integrity-checked entirely by AI.\n\nIt performs end-to-end coursework: depth-adjustable lectures, section-scoped Socratic tutoring, adaptive problem generation, and rubric-faithful AI grading -- from a 90-second concept skim all the way to a full midterm and final with per-problem rationales.\n\nDesigned for students, instructors evaluating AI-taught coursework, and academic-integrity researchers, it merges a real 29-topic critical-thinking syllabus with two layers of AI-authorship detection -- producing a course that students can trust to be fair and that instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Structured Curriculum** -- A complete critical-thinking syllabus across 29 topics: claims and arguments, premises and conclusions, deductive and inductive reasoning, informal fallacies, cognitive biases, evidence and source evaluation, probability and causation, and rhetoric and persuasion. Each week ships with lectures, homework, and a test; week four adds a midterm and a final.\n\n**Three-Depth Lectures** -- Every lecture is available at Short / Medium / Long length, AI-rewritten while preserving the same worked examples and learning objectives. Skim the concept, expand it on demand, or read the textbook-style deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with worked explanations on every answer. Per-session difficulty persists, so each drill picks up where the last one left off.\n\n**AI-Graded Assignments** -- Homework, tests, midterm, and final are scored by an LLM grader that returns per-problem correctness plus a written rationale, then rolls up to a percent score on the attempt.\n\n**Two-Layer AI-Authorship Detection** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- Two one-click self-tests verify the entire stack -- database, OpenAI, GPTZero, detection pipeline, and the practice/grade loop -- before you trust a session.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Static Text Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero.\n\n**System Diagnostic** -- Eight ordered checks: environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic** -- Spins up a fake student, runs a practice session (wrong, adjust down, right, adjust up), takes a full assignment attempt, submits it, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it. Request and response shapes can't drift between client and server because both come from the same spec.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming for tutor answers, with a section-scoped system prompt so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1–4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and the topic as input, so the question pool is generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The 62-second product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Freshmen & Self-Learners** -- A complete one-month critical-thinking course delivered with on-demand tutoring and adaptive practice -- no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "ClearThink redefines an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nClearThink -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Know Thyself": {
    emoji: "🔍",
    tagline:
      "Know Thyself -- A Four-Week Course in Self-Examination: Read the Lecture, Sit With the Question, Answer Honestly",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "A self-paced, single-user web course whose subject is you. Over four weeks and 29 short lectures it walks the territory of a life -- where your sense of self came from, what you avoid, how you love, what you envy, what you fear is true about you, and who you are becoming.\n\nIt is a content reskin of the QuantReason runtime. The full engine -- lectures with short / medium / long depth, a section-scoped reflective guide, adaptive practice, AI-assisted feedback, two-layer AI-authorship detection, one-click diagnostics, and an analytics layer -- is preserved unchanged.",
      },
      {
        emoji: "🧠",
        title: "What Makes It Different",
        body:
          "**Answers are short and there are no right answers.** Every prompt asks for a sincere, first-person reflection. Responses are read for sincerity and depth, never for correctness, and brevity is never penalized.\n\n**Feedback is a mirror.** Instead of marking work right or wrong, the course reflects back what your words reveal about you, and the analytics page assembles an evolving psychological self-portrait from everything you've written.\n\n**Sincerity & depth grading.** The grader reads each answer for honesty, specificity, and self-awareness rather than correctness. Empty or low-effort answers fail gently and invite a second pass; any genuine attempt passes. Feedback always leads with what the answer reveals.\n\n**Evolving self-portrait.** The analytics report joins every submitted answer and practice reflection back to its topic and draws a psychological portrait -- narrative, patterns it notices, tensions worth sitting with, and questions to carry forward.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Two-Layer AI-Authorship Detection** -- Static detection sends each answer to GPTZero's predict/text endpoint and blends 0.85 x GPTZero + 0.15 x structural-heuristic; if GPTZero is unavailable, it falls back to an LLM scorer plus heuristic so submissions never block. Diachronic detection captures the keystroke timeline -- keystroke count, erase count, bulk-insert events, rewrite segments, and duration. Pasting is disabled -- the whole point is to hear from you.\n\n**Two Diagnostics** -- A System diagnostic checks environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity. A Synthetic-Student diagnostic proves the full stack end-to-end: a fake student takes a practice session and a full assignment attempt, submits, and verifies feedback + detection + analytics all reflect the run.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the topic slugs in the database against the expected curriculum; if they differ, it wipes and re-seeds in dependency order, so a single content swap in the seed file propagates cleanly.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming Reflective Guide** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most of what runs a life runs quietly, just below awareness. The work of this course is to turn some of it over in the light -- gently, specifically, in your own words.\n\nRead the lecture, sit with the question, and write the truest short answer you can. The feedback won't tell you whether you're right. It will tell you what you just revealed.\n\nKnow Thyself -- read the lecture, sit with the question, answer honestly.",
      },
    ],
  },
  "Evolutionary Psychology": {
    emoji: "🧬",
    tagline:
      "Teach Yourself Evolutionary Psychology -- A Four-Week Course on the Adapted Mind, From Natural Selection to Cooperation, Language, and Culture",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Evolutionary Psychology is a self-paced, single-user web course that asks the question most psychology classes skip: why do we have the minds we do? It grounds human behavior in the logic of natural selection rather than cataloguing isolated findings.\n\nIt delivers a complete, end-to-end learning loop -- three-depth lectures, a section-scoped AI tutor, adaptive practice, AI-graded assignments, and two-layer authorship detection -- across 29 micro-lectures organized into four themed weeks.\n\nDesigned for curious readers, students, and educators, it teaches the conceptual backbone that runs through every undergraduate text in the field -- adaptation, selection, kinship, mating, cooperation, and culture -- presented in one connected arc rather than a pile of disconnected experiments.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum (29 Micro-Lectures)** -- Foundations of evolutionary psychology (Week 1), survival and the evolved individual (Week 2), mating and reproduction (Week 3), and social life, cooperation, and culture (Week 4), sequenced so each idea builds on the last.\n\n**Three-Depth Lectures** -- Every lecture is available at short, medium, and long depth, so you can skim the core idea or read the full treatment of the same concept.\n\n**One Real Example per Lecture** -- Each micro-lecture grounds its concept in a worked example from biology, anthropology, history, or experimental psychology -- Hamilton's rule and the evolution of altruism, Trivers' parental-investment theory, the Wason selection task, snake-fear preparedness, Buss's cross-cultural mate-preference surveys, and more.\n\n**Section-Scoped AI Tutor** -- A streaming tutor grounded in the active lecture answers questions, offers starter prompts, and stays on-topic for the section you're reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1–4) adjusts after each attempt, and practice problems are generated on demand for the current concept.\n\n**AI-Graded Assignments** -- 12 assignments (homework, tests, midterm, final) with conceptual short-answer problems. Each problem asks you to state the key idea precisely -- in plain language or in symbolic form (Hamilton's rule rB > C, relatedness coefficients) via the on-screen math/symbol keyboard.\n\n**Two-Layer AI-Authorship Detection** -- Every submission is checked for AI authorship both statically (GPTZero + structural heuristic) and diachronically (keystroke-pattern analysis).\n\n**Built-In Product Demo Video** -- A companion artifact ships as a short, narrated screencast of the live UI.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Conceptual Answer Harness** -- Every problem prompt is structured so the canonical answer is a precise statement of an evolutionary-psychology concept, occasionally a piece of notation. Both prompt rendering (KaTeX) and answer grading (a LaTeX-aware AI grader with a numeric short-circuit) handle these cleanly.\n\n**Two-Layer AI-Authorship Detection** -- Static detection sends each answer to GPTZero's predict/text endpoint and blends 0.85 x GPTZero + 0.15 x structural-heuristic; if GPTZero is unavailable, it falls back to an LLM scorer plus heuristic. Diachronic detection scores the keystroke timeline -- keystroke count, erase count, bulk-insert events, rewrite segments, and duration -- to penalize paste-then-reword behavior and impossibly sustained typing.\n\n**Two Diagnostic Self-Tests** -- A System diagnostic checks environment, database round-trip, seed integrity, OpenAI chat + JSON mode, the detection pipeline, and the grader. A Synthetic-Student diagnostic proves the full stack end-to-end: a fake student reads lectures, submits every assignment, runs practice, asks the tutor, triggers detection, and verifies analytics.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the database's topic slugs to the expected curriculum and checks a sentinel phrase in a designated lecture; if either differs, it wipes and re-seeds in dependency order. A single content swap propagates cleanly.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**pnpm Monorepo Architecture** -- artifacts/qr-course (React + Vite frontend), artifacts/api-server (Express API), artifacts/qr-course-demo (demo video), lib/db (Drizzle schema + Postgres), and lib/api-spec (OpenAPI + codegen).",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Curious Readers** -- Anyone who wants to understand why the mind works the way it does -- a short, focused course on the conceptual scaffolding behind human behavior.\n\n**Students of Psychology & Biology** -- Self-paced coverage of the conceptual backbone -- adaptation, kin selection, mating strategies, cooperation, and culture -- with worked examples and precise-statement practice.\n\n**Educators & Lecturers** -- A connected, example-grounded arc through evolutionary psychology, with built-in practice, grading, and authorship checks for assigned writing.\n\n**Runtime Maintainers** -- A clean exercise of the lecture / tutor / grading / detection stack under a conceptual-precision curriculum, complete with one-click diagnostics.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Teach Yourself Evolutionary Psychology reframes a psychology course as a chain of explanations, not a catalogue of findings.\n\nMost courses teach what people do in this experiment or that survey. Far fewer teach the evolutionary logic that explains where those behaviors come from and why they hang together. This course is built around the second list: read the idea, see it grounded in a real example, then state the idea precisely in your own words.\n\nTeach Yourself Evolutionary Psychology -- read the idea, ground the idea, state the idea.",
      },
    ],
  },
  "Finance": {
    emoji: "💼",
    tagline:
      "Teach Yourself Finance -- A Four-Week Course on the Ideas Behind the Money, From the Time Value of a Dollar to the WACC of a Whole Company",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Finance is a self-paced, single-user web course that asks the question finance classes usually skip: why are these formulas the formulas? What is an interest rate, really? Why must a balance sheet balance? Where does the risk premium come from? Why is the value of any asset always the present value of its future cash flows?\n\nThe course runtime -- lectures with Short / Medium / Long depth, section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- teaches the conceptual backbone of modern finance: the same backbone every MBA, CFA candidate, and corporate-finance analyst eventually meets, presented in one connected arc.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum of 29 Micro-Lectures** -- Organized by theme:\n\n**Week 1 -- Foundations and the time value of money.** What finance is and why it exists; the financial system and markets; money, interest, and the time value of money; present value and future value; discounting cash flows; annuities and perpetuities; nominal vs. real rates and inflation.\n\n**Week 2 -- Financial statements and analysis.** The three statements and how they connect; the balance sheet and the accounting identity; the income statement; the statement of cash flows; financial ratio analysis and the DuPont decomposition; working capital and liquidity; reading and interpreting annual reports.\n\n**Week 3 -- Risk, return, and markets.** Risk and return fundamentals; measuring return (expected value, geometric vs. arithmetic); measuring risk and volatility (σ², σ); diversification and portfolio basics; the risk–return tradeoff and the Sharpe ratio; the Capital Asset Pricing Model; market efficiency.\n\n**Week 4 -- Valuation and corporate finance.** Bond valuation; stock valuation (Gordon growth); capital budgeting and NPV; cost of capital and WACC; capital structure, leverage, and Modigliani–Miller; corporate financing and dividend policy; financial intermediaries and institutions; capstone synthesis -- value as the PV of expected future cash flows.\n\n**One Real Example per Lecture** -- Every micro-lecture grounds its concept in a worked example from business, history, or markets -- $1,000 compounding at 8% for thirty years, British consols as a literal perpetuity, U.S. savers in the inflationary 1970s, Amazon's profitless years vs. its operating cash flow, Enron's footnote-buried leverage, the 2008 spike in the VIX, Markowitz's umbrella-and-sunscreen portfolio, CAPM hurdle rates, the dot-com bubble vs. the EMH, bond prices falling when yields rise, Modigliani–Miller and Lehman's maturity-transformation collapse.\n\n**One Symbolic Question per Lecture** -- Every homework / test / midterm / final problem requires the student to write the key finance formula in symbols (PV = FV / (1 + r)ⁿ, NPV = ΣCFₜ / (1 + r)ᵗ − CF₀, E(Rᵢ) = R_f + βᵢ(E(R_m) − R_f), WACC = (E/V)rₑ + (D/V)r_d(1 − T), σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂), not just describe it in English. The on-screen math keyboard -- with its dedicated Finance tab -- is the only practical way to compose these answers.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, Operator Diagnostics** -- The full runtime stack behind the course.\n\n**12 Graded Assignments** -- Two homeworks per week plus a graded weekly checkpoint: Week 1 test, end-of-Week-2 midterm, Week 3 test, end-of-Week-4 cumulative final.\n\n**Built-In Product Demo Video** -- The companion qr-course-demo artifact ships as a short screencast of the live UI.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Symbolic Answer Harness** -- Every problem prompt is structured so the canonical answer is a piece of finance notation. Both prompt rendering (KaTeX) and answer entry/grading (LaTeX-aware AI grader with numeric short-circuit) handle summations, discount factors, expectations, β, σ, ρ, the Σ(CFₜ / (1 + r)ᵗ) pattern, the CAPM line, WACC, and the rest cleanly.\n\n**Static AI Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalises paste-then-reword behaviour, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/diagnostics/system)** -- Environment, database round-trip, course-seed integrity (full finance curriculum present), OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run)** -- End-to-end stack proof -- a fake student takes a practice session, takes a full assignment attempt, submits, and verifies grading + detection + analytics all reflect the run.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the set of topic slugs in the database to the expected curriculum and checks a sentinel phrase in a designated lecture. If either differs, it wipes and re-seeds in dependency order. A single content swap propagates cleanly on the next server start.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1–4) adjusts after each attempt; problems are generated on demand.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Anyone Who Looked at a DCF Model and Wondered \"But Where Does This Come From?\"** -- A short, focused course on the conceptual scaffolding behind the formulas: interest, present value, statements, risk, return, cost of capital, valuation.\n\n**Anyone Maintaining the Math-Notation Stack** -- A pure stress test of the keyboard, LaTeX rendering, grading, and AI detection -- under a curriculum whose answers lean on summations, discount factors, expectations, and Greek-letter risk parameters.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most finance courses teach the recipes -- how to build a DCF, how to compute WACC, how to price a bond. Far fewer teach the objects -- what an interest rate is, what the balance-sheet identity means, what the risk premium is paying for, why one equation (V = ΣE(CFₜ) / (1 + r)ᵗ) sits underneath all of it. This course is built around the second list.\n\nRead the idea, see it grounded in a real example, then write the defining formula in symbols of your own.\n\nTeach Yourself Finance -- read the idea, ground the idea, write the idea.",
      },
    ],
  },
  "Business Ethics": {
    emoji: "🎓",
    tagline:
      "The Business Ethics Studio -- A Four-Week College Course That Teaches, Tutors, and Proofs Itself",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Business Ethics is a self-paced, single-user web course that delivers a full month of college-freshman business ethics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement.\n\nIt compresses the experience of a semester-style class into one focused product: read the lecture at the depth you want, ask a tutor scoped to the exact section you're on, drill problems whose difficulty adapts to you in real time, and submit homework, tests, a midterm, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nDesigned for students, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, the course pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Structured Curriculum** -- A complete business-ethics syllabus delivered across 28 topics. Each week ships with lectures, homework, and a test; week four adds a midterm and a final.\n\n**Three-Depth Lectures** -- Every lecture is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives. Skim the concept, expand it on demand, or read the textbook-style deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with worked explanations on every answer.\n\n**AI-Graded Assignments** -- Homework, tests, midterm, and final are scored by an LLM grader that returns per-problem feedback plus a rolled-up percent score.\n\n**Two-Layer AI-Authorship Detection** -- Each submitted answer is screened by a static text classifier and a diachronic keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Live Analytics** -- Dashboard KPIs, per-topic mastery percentages, and a recent-activity feed make progress, weak spots, and momentum visible at a glance.\n\n**Operator Diagnostics** -- One-click self-tests verify the entire stack -- database, OpenAI, detection pipeline, and the practice/grade loop -- before you trust a session.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Business Ethics redefines an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nBusiness Ethics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Formal Logic": {
    emoji: "⊢",
    tagline:
      "Teach Yourself Formal Logic -- Learn to Reason Like a Logician, in Four Focused Weeks",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Formal Logic takes you from \"what makes an argument good?\" to the proofs, quantifiers, and metatheorems behind every rigorous argument ever made.\n\nMost of us were never taught how reasoning actually works -- only handed a few rules and told to trust them. This self-paced course fixes that. It reveals the hidden form underneath every good argument, and teaches you to write that form down in symbols of your own.\n\nBy the end, you won't just recognize a valid argument -- you'll be able to prove one, spot the flaw in a bad one, and understand exactly what a proof can and cannot guarantee.",
      },
      {
        emoji: "🧠",
        title: "What You'll Learn",
        body:
          "A complete arc, building from everyday reasoning to the frontier of logic.\n\n**Week 1 -- Reasoning & Arguments.** Validity vs. soundness, deductive vs. inductive reasoning, logical form, and the everyday fallacies that fool almost everyone.\n\n**Week 2 -- Propositional Logic.** Connectives, truth tables, equivalence and De Morgan's laws -- and your first real proofs with natural deduction.\n\n**Week 3 -- Predicate Logic.** Quantifiers, scope, identity, and how to translate \"all,\" \"some,\" and \"the\" into precise symbolic statements.\n\n**Week 4 -- The Big Ideas.** Soundness and completeness, modal logic, set theory, and the famous limits -- what no proof procedure can ever decide.\n\nEvery lecture is grounded in a real argument or landmark moment -- Aristotle's syllogistic, modus ponens, Russell's theory of descriptions, Gödel's theorems, and the undecidability of logic itself.",
      },
      {
        emoji: "⚙️",
        title: "How It Works",
        body:
          "A simple, proven loop you repeat in every lecture:\n\n📖 Read the idea -> 🔎 see it in a real argument -> ✍️ write it yourself in symbols.\n\nLearn at the depth you want -- a quick pass, a deeper read, or the full treatment -- with a built-in tutor whenever you're stuck, practice that adapts to how you're doing, and instant, detailed feedback on everything you submit.",
      },
      {
        emoji: "🎓",
        title: "What Makes It Different",
        body:
          "**✍️ You write, not just read** -- every exercise asks you to express the key idea in real logical notation with an on-screen symbol keyboard, the way logicians actually work.\n\n**🎓 A tutor that knows where you are** -- ask questions in plain language and get answers tied to the exact lecture you're on.\n\n**📈 Practice that meets you at your level** -- difficulty adjusts as you go, so you're always challenged but never lost.\n\n**⚡ Real feedback, instantly** -- homework, tests, a midterm, and a final, all graded with specific, actionable comments, not just a score.\n\n**🧵 One connected story** -- not a pile of disconnected rules, but a single thread from your first argument to the limits of provability.",
      },
      {
        emoji: "👥",
        title: "Who It's For",
        body:
          "**Students in philosophy, mathematics, or computer science** who want logic to finally click.\n\n**Curious thinkers** who want to argue more clearly and see through bad reasoning.\n\n**Anyone preparing for coursework, exams, or interviews** where rigorous reasoning matters.\n\nNo prerequisites. No prior logic required. Just curiosity and four weeks.",
      },
    ],
  },
  "AI 101": {
    emoji: "🤖",
    tagline:
      "Teach Yourself AI -- A Four-Week Introductory Course on the Ideas Behind Artificial Intelligence, From \"What Is AI?\" to Agents, Alignment, and the Future",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself AI is a self-paced, single-user web course that explains what artificial intelligence actually is -- in plain English, without the hype and without requiring any math or coding background. What is a model? What does \"training\" really mean? How does a neural network learn? Why do language models make things up? What is bias, alignment, or an AI agent? The course answers these conceptually, one connected idea at a time.\n\nIt is a content reskin of the QuantReason Quantitative Reasoning app. The full QuantReason runtime -- lectures at Short / Medium / Long depth, a section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- is preserved unchanged. The purpose of this build is to teach the conceptual backbone of modern AI: how machines learn from data, what neural networks and generative models do, and how to use these systems wisely.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum of 28 Micro-Lectures** -- Organized by theme:\n\n**Week 1 -- What AI is and how it got here (7 lectures):** what AI is and isn't (automation vs. intelligence); a brief history from symbolic AI to machine learning; rules vs. learning; data as the raw material; what \"training\" actually means; models as input-output functions; and where AI shows up in everyday life.\n\n**Week 2 -- How machines learn (6 lectures):** pattern recognition; features and representations; supervised learning from labels; unsupervised learning (finding structure); prediction, classification, and error (precision and recall); and why more data and bigger models help.\n\n**Week 3 -- Neural networks and generative AI (7 lectures):** the intuition behind neural networks; how networks learn (loss, backpropagation, gradient descent); from neural nets to deep learning; language models and next-token prediction; what \"generative\" AI means; prompting; and the strengths, limits, and hallucination of these systems.\n\n**Week 4 -- AI in the world: ethics, safety, and the future (8 lectures):** bias, fairness, and data quality; reliability, evaluation, and trust; privacy and security; automation, work, and the economy; alignment and AI safety basics; a practical workflow for using AI well; the near future of agents; and a capstone synthesis.\n\n**One Real Example per Lecture** -- Every micro-lecture grounds its concept in a concrete, real-world example -- e.g. Deep Blue vs. AlphaGo as symbolic-vs-learned AI, the ImageNet dataset launching deep learning, a recruiting tool that learned historical bias, the boat-racing AI that gamed its reward by spinning in circles, language models regurgitating memorized training data, and coding agents that act over multiple steps.\n\n**One Conceptual Question per Lecture** -- Every homework / test / midterm / final problem is a short-answer conceptual question (define a term, draw a distinction, explain why something works, identify an example) answered in plain English -- no math or code required.\n\n**12 Graded Assignments** -- Two homeworks per week plus a graded checkpoint: a Week 1 test, the midterm at the end of Week 2, a Week 3 test, and the cumulative final at the end of Week 4.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, One-Click Diagnostics** -- All inherited unchanged from the QuantReason runtime.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Conceptual Answer Grading** -- Every problem's canonical answer is a short conceptual statement. The AI grader (with a numeric short-circuit retained for harmless edge cases) judges whether the student's answer captures the key idea of the model answer, accepting paraphrases and lenient wording while staying strict on the essential concept.\n\n**Static AI Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, and grader equivalence check.\n\n**Synthetic-Student Diagnostic (/api/diagnostics/synthetic-run)** -- end-to-end stack proof: a synthetic student reads every lecture, takes and submits every assignment, runs adaptive practice, asks the tutor, and triggers detection, verifying grading + detection + analytics all reflect the run.\n\n**Content Auditor (/api/diagnostics/content-audit)** -- sends every lecture body and every stored \"correct answer\" to OpenAI for an independent verdict on whether each is actually correct, flagging wrong definitions, inaccurate claims about how AI works, misused terminology, and conceptual answers that don't satisfy their prompt.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the set of topic slugs in the database to the expected curriculum and checks a sentinel phrase in a designated lecture. If either differs, it wipes and re-seeds in dependency order, so a single content swap propagates cleanly when the seed file changes.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-5) adjusts after each attempt; conceptual questions are generated on demand.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Anyone Curious About AI Who Wants the Concepts, Not the Hype** -- A short, focused course on the conceptual scaffolding behind modern AI -- data, learning, models, neural networks, generation, and responsible use -- with no math or coding prerequisites.\n\n**The Maintainer of QuantReason and Its Clones** -- A stress test of the runtime -- tutor, grading, detection, adaptive practice, and diagnostics -- under a different, prose-based curriculum whose answers are conceptual rather than symbolic.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most coverage of AI is either breathless hype or dense technical detail. This course takes the middle path: it explains the real ideas behind AI clearly enough that anyone can follow, and honestly enough that you come away able to tell what these systems can and cannot do.\n\nRead the idea, see it grounded in a real example, then explain the idea in your own words.\n\nTeach Yourself AI -- read the idea, ground the idea, explain the idea.",
      },
    ],
  },
  "Developmental Mathematics": {
    emoji: "🧮",
    tagline:
      "Teach Yourself Developmental Mathematics -- A Four-Week Course That Rebuilds the Foundations, From Place Value to the Start of Algebra",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Developmental Mathematics is a self-paced, single-user web course for anyone who wants to rebuild their arithmetic from the ground up: what numbers really are, how the four operations work, and why the rules you half-remember are actually true. It covers whole numbers and operations, fractions, decimals and percents, ratios and proportions, and a first taste of algebra.\n\nIt is a content reskin of the QuantReason Quantitative Reasoning app. The full QuantReason runtime -- lectures with Short / Medium / Long depth, section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- is preserved unchanged. Only the subject matter is new: the same proven format, now teaching developmental (foundational) math.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum of 28 Micro-Lectures** -- Organized by theme:\n\n**Week 1 -- Whole numbers, integers, and operations (7 lectures):** whole numbers and place value; addition and subtraction; multiplication and division; factors, multiples, and primes; negative numbers and the number line; order of operations; word problems and problem-solving strategies.\n\n**Week 2 -- Fractions, decimals, percents, and ratios (6 lectures):** understanding fractions; adding and subtracting fractions; multiplying and dividing fractions; decimals and place value; converting fractions, decimals, and percents; ratios, rates, and proportions.\n\n**Week 3 -- Percents, measurement, and beginning algebra (7 lectures):** percent problems and applications; units, measurement, and conversion; introduction to variables and expressions; simplifying and evaluating expressions; solving one-step equations; solving multi-step equations; translating words into equations.\n\n**Week 4 -- Graphing, exponents, polynomials, and geometry (8 lectures):** the coordinate plane; graphing linear equations; slope and intercepts; exponents and powers; introduction to polynomials; basic geometry (perimeter, area, volume); reading tables, charts, and graphs; capstone synthesis.\n\n**One Real Example per Lecture** -- Every micro-lecture grounds its idea in a concrete, everyday example: place value vs. Roman numerals, splitting a recipe, sale prices and percents off, scaling a map, reading a utility bill, balancing a checkbook with negatives, and the prime \"fingerprint\" of a number.\n\n**One Symbolic / Computational Question per Lecture** -- Every homework / test / midterm / final problem requires the student to write the answer in proper math notation -- fractions, exponents, the x / ÷ / - signs, percents, equations, and expanded form -- not just describe it in English. The on-screen math keyboard is the natural way to compose these answers.\n\n**12 Graded Assignments** -- Two homeworks per week plus a graded weekly checkpoint: Week 1 test, end-of-Week-2 midterm, Week 3 test, and an end-of-Week-4 cumulative final.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, Operator Diagnostics** -- All inherited unchanged from the QuantReason runtime.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Symbolic Answer Harness** -- Every problem prompt is structured so the canonical answer is a piece of math notation. Both prompt rendering (KaTeX) and answer entry/grading (LaTeX-aware AI grader with numeric short-circuit) handle fractions, exponents, percents, the multiplication/division signs, expanded form, and equations cleanly.\n\n**Static AI Detection (GPTZero)** -- Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection** -- The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/api/diagnostics/synthetic-run)** -- end-to-end stack proof: a fake student takes a practice session and a full assignment attempt, submits, and verifies grading + detection + analytics all reflect the run.\n\n**Content Auditor (/api/diagnostics/content-audit)** -- OpenAI-based quality control that fact-checks every lecture and verifies the legitimacy of every problem's answer -- confirming each seeded correctAnswer is actually correct for its prompt and flagging any mathematical errors.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the set of topic slugs in the database to the expected curriculum and checks a sentinel phrase in a designated lecture. If either differs, it wipes and re-seeds in dependency order. A single content swap propagates cleanly on the next server start.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4) adjusts after each attempt; problems are generated on demand.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Anyone Returning to Math** -- Students prepping for a placement test, adult learners, or anyone who wants the arithmetic and pre-algebra foundations to finally make sense -- not as memorized procedures, but as ideas you can reconstruct.\n\n**The Maintainer of QuantReason and Its Clones** -- A clean stress test of the math-notation stack -- keyboard, LaTeX rendering, grading, and AI detection -- under a different curriculum, with answers built from fractions, exponents, percents, and equations.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most math help reteaches the procedures -- how to borrow, how to flip-and-multiply, how to move a term across the equals sign. Far fewer explain why those procedures work. This course is built around the why: what place value buys you, why dividing by zero is undefined, why \"of\" means multiply, why you can do the same thing to both sides of an equation.\n\nRead the idea, see it grounded in an everyday example, then write the answer in proper notation of your own.\n\nTeach Yourself Developmental Mathematics -- read the idea, ground the idea, write the idea.",
      },
    ],
  },
  "Analytic Philosophy": {
    emoji: "🧠",
    tagline:
      "Teach Yourself Analytic Philosophy -- A Four-Week Course on the Logic Behind the Words, From Frege's Logical Form to Formal Truth and the Map of Philosophy",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Most philosophy courses teach you positions -- what Descartes believed, how Kant replied. This one teaches you the method: how to take an ordinary sentence, uncover its real logical form, and decide what it actually commits you to.\n\nWhat is a statement? What is existence? What does \"someone smokes\" really say? What makes a sentence meaningful -- and what can careful analysis settle that observation never could? Over four focused weeks you learn to answer questions like these the way analytic philosophers do: regiment the claim, read off its structure, and see what is really there.\n\nSelf-paced. Single-purpose. Built to be finished.",
      },
      {
        emoji: "🧠",
        title: "What You'll Learn",
        body:
          "A four-week curriculum of 29 micro-lectures, organized by theme:\n\n**Week 1 -- Analytic philosophy as logical analysis.** Philosophy as the analysis of categories; knowledge vs. meta-knowledge; how philosophy differs from the sciences; Frege on logical vs. grammatical form; the quantifier puzzle behind \"someone smokes\"; and what it really means to say something exists.\n\n**Week 2 -- Analysis, ontology, and meaning.** Analysis vs. ontologizing; Brentano, Meinong, and the trouble with \"non-existent objects\"; perception as description; the line between empirical and philosophical puzzles; sentences vs. propositions; and why \"meaning is use\" does not hold up.\n\n**Week 3 -- The Tractatus and logical positivism.** Wittgenstein's claim that philosophy is nonsense; the picture theory of meaning; showing vs. saying; the rise of logical positivism; verification and falsification; and why strict empiricism refutes itself.\n\n**Week 4 -- Formal truth and the map of philosophy.** Formal truth and entailment; open sentences and interpretations; the limits of empiricism; why no language is logically perfect; and how mind, language, logic, and metaphysics fit together -- ending in a capstone synthesis.\n\n**One real example in every lecture.** Each idea is grounded in a worked case -- the \"someone smokes but Smith does not\" consistency test, the square circle that needs no shadowy non-entity, the Tractatus throwing away its own ladder, Russell's self-cancelling argument against naïve realism, and the master criterion that a sentence means something only when it attributes a property to an object.\n\n**One thing you write in symbols every lecture.** You do not just read about logical form -- you produce it. Every problem asks you to render the key claim in real notation: quantifiers (∀, ∃), connectives (¬, ∧, ∨, ->, <->), modal operators (□, ◇), entailment (⊨, ⊢), and set-builder. An on-screen symbol keyboard makes it effortless.",
      },
      {
        emoji: "✨",
        title: "How It Works",
        body:
          "**Lectures at three depths.** Read the short version for the gist, then go to medium and long when you want the full argument.\n\n**A tutor that knows where you are.** Ask questions and get answers scoped to the exact section you are reading -- no generic chatbot detours.\n\n**Practice that adapts to you.** Difficulty adjusts as you go, so you are always working at the right edge.\n\n**Real assignments, really graded.** Twelve graded assignments -- homework, weekly checkpoints, a midterm, and a final -- each returned with detailed, specific feedback.\n\n**Honest-work safeguards.** Built-in originality checks help keep your answers your own.\n\n**A guided tour.** A short companion demo video walks you through the whole experience.",
      },
      {
        emoji: "🎓",
        title: "Who It's For",
        body:
          "**Anyone who has wondered what philosophers actually do.** A short, focused course on the method of analytic philosophy -- regiment the claim, read off its structure, and decide what it really says.\n\n**Students and self-learners** who want to use logical notation, not just recognize it.\n\n**The intellectually curious** who would rather learn a durable skill than memorize a list of names and dates.",
      },
      {
        emoji: "💡",
        title: "The Core Idea",
        body:
          "Grammar misleads; analysis clarifies. \"Someone smokes\" looks simple until you ask what it commits you to -- and that question has a precise answer. This course teaches you to find it, again and again, until reading the logic behind the words becomes second nature.\n\nRead the idea. Ground it in a real example. Then write it in symbols of your own.\n\nTeach Yourself Analytic Philosophy -- read the idea, ground the idea, write the idea.",
      },
    ],
  },
  "Ethics": {
    emoji: "⚖️",
    tagline:
      "EthosReason -- A Four-Unit College Ethics Course, From the Nature of Goodness to Moral Truth Itself",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "EthosReason is a self-paced, single-user web course that asks the question most ethics classes rush past: what are these things, really? What is goodness? What makes an act right, or wrong? When we praise or condemn someone, what exactly are we judging? Is there such a thing as moral truth -- and if so, can you ever derive it from plain facts?\n\nIt is a complete, taught-and-graded Ethics course delivered end to end by AI: depth-adjustable lectures, a tutor that answers questions about the exact passage you're reading, adaptive practice that meets you at your level, and homework, tests, a midterm, and a final that are graded with written feedback. The curriculum is built around one connected arc of moral philosophy -- the same backbone an undergraduate eventually meets in a semester ethics seminar, presented in four focused units.\n\nDesigned for students, self-learners, and instructors evaluating AI-taught coursework, EthosReason pairs a real 27-topic syllabus with a built-in academic-integrity layer -- so the course is one students can trust to be fair, and instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Unit Curriculum of 27 Topics** -- A complete ethics syllabus, organized by theme:\n\n**Unit 1 -- Foundations of Value.** What ethics is and how it differs from description; normative categories; instrumental vs. intrinsic goodness; goodness vs. commendableness; the two kinds of intrinsic badness; the morally complex structure of real situations; and why moral attributes are positive, not merely the absence of their opposites.\n\n**Unit 2 -- Obligation, Right, and Wrong.** Why moral obligations carry weight; how outweighing differs from canceling; \"right\" as least bad and \"wrong\" as least good; why \"ought\" implies \"can\"; and why legality is not the same thing as morality.\n\n**Unit 3 -- Acts, Agents, and Judgment.** Judging an act vs. judging the person; why intention is what truly counts; why attempts are punished less severely; the Hitler problem; whether one can act immorally toward oneself; and self-harm, punishment, and autonomy.\n\n**Unit 4 -- Metaethics and Moral Truth.** Whether you can derive an \"ought\" from an \"is\"; Moore's open-question argument; ampliative entailment; the genetic fallacy in ethics; moral truth vs. its uses; bad reasons to reject ethical realism; disagreement, fact, and value; and a capstone on what ethical truths really are.\n\n**One Real Example per Lecture** -- Every topic grounds its idea in a concrete case -- a pianist waking a sick roommate, freeing slaves before the Civil War, the Hitler problem -- so abstractions always land on something you can picture.\n\n**Three-Depth Lectures** -- Every lecture reads at Short / Medium / Long length, preserving the same examples and learning objectives. Skim the concept in a minute, expand it on demand, or read the full deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the exact paragraph you're on and the answer streams back live, grounded in that lecture section. Suggested starter questions come ready for each lecture.\n\n**Adaptive Practice** -- Problem sets that get harder as you build a streak and ease off after a miss, with an explanation on every answer. Your level carries over, so each drill picks up where the last left off.\n\n**Graded Assignments** -- Each unit ships with homework and a test; Unit 2 adds a midterm and Unit 4 a cumulative final. Every submission is graded with per-problem feedback and a percent score on the attempt.\n\n**Built-In Academic-Integrity Check** -- Every submitted answer is screened for signs of AI authorship, and each verdict comes with a plain-language explanation rather than an opaque flag.\n\n**Live Analytics** -- A dashboard of progress at a glance: attempts, accuracy, and streak; per-topic mastery; and a recent-activity feed that surfaces weak spots and momentum.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**AI That Teaches at Your Depth** -- Lectures rewrite themselves to the length you want without losing the examples or the point, so the same topic works for a quick refresher or a deep study session.\n\n**A Tutor That Stays on Topic** -- Answers stream in live and stay anchored to the section you're reading, instead of wandering off into the whole syllabus.\n\n**Practice That Adapts in Real Time** -- Difficulty tracks your performance from problem to problem, keeping you in the productive zone between \"too easy\" and \"overwhelming.\"\n\n**Grading You Can Read** -- Assignments are scored on whether your answer means the right thing, not whether it matches a string -- and every result comes with a written rationale.\n\n**A Two-Layer Integrity Check** -- Submissions are screened both for AI-style writing and for telltale authoring behavior, catching misuse that simple text checks miss -- always with a human-readable reason.\n\n**Three One-Click Self-Tests** -- The course can verify its own health end to end before you trust a session: a full system check, a simulated student run through the whole course, and an answer-key quality review that confirms every graded answer is sound.\n\n**A Real Demo, Not a Slideshow** -- The walkthrough video is the actual product in motion -- live typing, streaming answers, and synced audio -- captured straight from the running app.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Students & Self-Learners** -- A complete ethics course with on-demand tutoring and adaptive practice, no instructor required.\n\n**Anyone Who Ever Argued About Right and Wrong and Wanted to Argue Better** -- A structured tour of the concepts behind the arguments: goodness, obligation, intention, and moral truth.\n\n**Instructors Evaluating AI-Taught Coursework** -- A working example of what an AI-taught, AI-graded, integrity-screened course actually looks like from the student's seat.\n\n**Curious Minds Who Want the Ideas, Not Just the Vocabulary** -- Read the idea, see it in a real case, then write the defining judgment in your own words.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most ethics talk argues the verdicts -- was this act right, was that person to blame. Far fewer go back to the concepts underneath: what goodness is, what \"right\" and \"wrong\" actually mean, what we judge when we judge a person, and whether moral claims can be true at all. This course is built around that second list.\n\nRead the idea, ground it in a real example, then state the moral judgment in your own words -- and let the course check your reasoning fairly every step of the way.\n\nEthosReason -- read the idea, ground the idea, write the idea.",
      },
    ],
  },
  "Philosophy 101": {
    emoji: "🦉",
    tagline:
      "PhiloReason -- A Four-Unit College Philosophy 101 Course, From Clear Reasoning to the Big Questions of Mind, Reality, God, and the Good",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "PhiloReason is a self-paced, single-user web course that walks through the questions an introductory philosophy class is really about: How do we reason well? What can we actually know? What is the mind? What exists, is there a God, and how should we live?\n\nIt is a complete, taught-and-graded Philosophy 101 course delivered end to end by AI: depth-adjustable lectures, a tutor that answers questions about the exact passage you're reading, adaptive practice that meets you at your level, and homework, tests, a midterm, and a final that are graded with written feedback. The curriculum is built around one connected arc -- first the tools of reasoning, then the major areas they open up -- presented in four focused units.\n\nDesigned for students, self-learners, and instructors evaluating AI-taught coursework, PhiloReason pairs a real 29-topic syllabus with a built-in academic-integrity layer -- so the course is one students can trust to be fair, and instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Unit Curriculum of 29 Topics** -- A complete introductory philosophy syllabus, organized by theme:\n\n**Unit 1 -- Logic & Critical Reasoning.** What philosophy is and how it works; arguments, premises, and conclusions; validity and soundness; deductive vs. inductive reasoning; common logical fallacies; reading and reconstructing arguments; and philosophical method and analysis.\n\n**Unit 2 -- Knowledge & Reality (Epistemology).** What we can know; rationalism vs. empiricism; skepticism and the problem of doubt; justified true belief and Gettier problems; perception and reality; truth and theories of truth; and faith, reason, and knowledge.\n\n**Unit 3 -- Philosophy of Mind.** The mind-body problem; dualism; materialism and physicalism; personal identity over time; free will and determinism; consciousness and the self; and artificial minds and machine thought.\n\n**Unit 4 -- Metaphysics, God & Ethics.** What exists; arguments for and against God's existence; the problem of evil; consequentialism; deontology; virtue ethics; justice, rights, and political philosophy; and a capstone synthesis.\n\n**One Real Example per Lecture** -- Every topic grounds its idea in a concrete case -- a syllogism about Socrates, Descartes' dreaming doubt, the Ship of Theseus, the trolley problem -- so abstractions always land on something you can picture.\n\n**Three-Depth Lectures** -- Every lecture reads at Short / Medium / Long length, preserving the same examples and learning objectives. Skim the concept in a minute, expand it on demand, or read the full deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the exact paragraph you're on and the answer streams back live, grounded in that lecture section. Suggested starter questions come ready for each lecture.\n\n**Adaptive Practice** -- Problem sets that get harder as you build a streak and ease off after a miss, with an explanation on every answer. Your level carries over, so each drill picks up where the last left off.\n\n**Graded Assignments** -- Each unit ships with homework and a test; Unit 2 adds a midterm and Unit 4 a cumulative final. Every submission is graded with per-problem feedback and a percent score on the attempt.\n\n**Built-In Academic-Integrity Check** -- Every submitted answer is screened for signs of AI authorship, and each verdict comes with a plain-language explanation rather than an opaque flag.\n\n**Live Analytics** -- A dashboard of progress at a glance: attempts, accuracy, and streak; per-topic mastery; and a recent-activity feed that surfaces weak spots and momentum.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**AI That Teaches at Your Depth** -- Lectures rewrite themselves to the length you want without losing the examples or the point, so the same topic works for a quick refresher or a deep study session.\n\n**A Tutor That Stays on Topic** -- Answers stream in live and stay anchored to the section you're reading, instead of wandering off into the whole syllabus.\n\n**Practice That Adapts in Real Time** -- Difficulty tracks your performance from problem to problem, keeping you in the productive zone between \"too easy\" and \"overwhelming.\"\n\n**Grading You Can Read** -- Assignments are scored on whether your answer means the right thing, not whether it matches a string -- and every result comes with a written rationale.\n\n**A Two-Layer Integrity Check** -- Submissions are screened both for AI-style writing and for telltale authoring behavior, catching misuse that simple text checks miss -- always with a human-readable reason.\n\n**Three One-Click Self-Tests** -- The course can verify its own health end to end before you trust a session: a full system check, a simulated student run through the whole course, and an answer-key quality review that confirms every graded answer is sound.\n\n**A Real Demo, Not a Slideshow** -- The walkthrough video is the actual product in motion -- live typing, streaming answers, and synced audio -- captured straight from the running app.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Students & Self-Learners** -- A complete introductory philosophy course with on-demand tutoring and adaptive practice, no instructor required.\n\n**Anyone Who Ever Argued About a Big Question and Wanted to Argue Better** -- A structured tour of the tools and the territory: logic, knowledge, mind, reality, God, and the good.\n\n**Instructors Evaluating AI-Taught Coursework** -- A working example of what an AI-taught, AI-graded, integrity-screened course actually looks like from the student's seat.\n\n**Curious Minds Who Want the Ideas, Not Just the Vocabulary** -- Read the idea, see it in a real case, then write the defining judgment in your own words.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Introductory philosophy usually rushes to the famous answers -- Descartes, Kant, the trolley problem -- before students have the tools to weigh them. PhiloReason puts the tools first: a full unit on reasoning, then three units that apply it to knowledge, mind, and reality.\n\nRead the idea, ground it in a real example, then state the philosophical judgment in your own words -- and let the course check your reasoning fairly every step of the way.\n\nPhiloReason -- read the idea, ground the idea, write the idea.",
      },
    ],
  },
};

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

export default function Courses() {
  const courses: Course[] = [
    { title: "Constructive Critical Reasoning", url: "https://constructivereasoning.xyz" },
    { title: "Quantitative Reasoning", url: "https://quantitativereasoning101.xyz" },
    { title: "Evolutionary Psychology", url: "https://evopsych.xyz" },
    { title: "Know Thyself", url: "https://knowthyself101.xyz" },
    { title: "Portfolio Analysis", url: "https://portfolioanalysis101.xyz" },
    { title: "Public Speaking", url: "https://publicspeaking101.xyz" },
    { title: "Voice-Powered KnowThySelf", url: "https://selfknow.xyz" },
    { title: "Finance", url: "https://finance101.xyz" },
    { title: "Business Ethics", url: "https://businessethics101.xyz" },
    { title: "Teach Yourself Math Notation", url: "https://mathnotation.xyz" },
    { title: "Conceptual Mathematics", url: "https://conceptualmath.xyz" },
    { title: "Conceptual Physics", url: "https://conceptualphysics.xyz" },
    { title: "Critical Thinking", url: "https://criticalthinking101.xyz" },
    { title: "Quantitative Critical Thinking", url: "https://quantitativethinking.xyz" },
    { title: "Formal Logic", url: "https://logic101.xyz" },
    { title: "AI 101", url: "https://ai101.live" },
    { title: "Developmental Mathematics", url: "https://developmentalmath.xyz" },
    { title: "Analytic Philosophy", url: "https://analyticphilosophy.net" },
    { title: "Ethics", url: "https://ethics101.xyz" },
    { title: "Philosophy 101", url: "https://philosophy101.xyz" },
  ];

  const sortedCourses = [...courses].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="font-sans bg-white text-gray-900 leading-relaxed min-h-screen">
      <NavBar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Living Courses
          </h1>
          <p className="text-gray-700 text-lg">
            Self-paced, AI-taught, AI-graded college coursework with built-in
            academic-integrity enforcement.
          </p>
        </header>

        <div className="space-y-4">
          {sortedCourses.map((course) => {
            const desc = courseDescriptions[course.title];
            const isOpen = expanded === course.title;
            return (
              <div
                key={course.title}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    {desc && <span className="text-2xl">{desc.emoji}</span>}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {course.title}
                      </h2>
                      {desc && (
                        <p className="text-sm text-gray-600">{desc.tagline}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
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
  );
}
