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
  "IQ Booster": {
    emoji: "🔎",
    tagline:
      "A rigorous, self-paced introduction to how reasoning and aptitude tests work -- and how to beat them -- that teaches, tutors, drills, and grades itself, built for researchers and professionals entering the field.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Functional Intelligence is a self-paced, single-user web course on the skills behind reasoning and aptitude tests -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. A complete one-unit curriculum builds the subject from first principles, one idea at a time: how every pattern grid, series, analogy, odd-one-out, and spatial puzzle is really a hunt for a hidden rule, and how disciplined method -- not raw talent -- turns that hunt into a score.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 6 topics** -- a complete syllabus: pattern grids (finding the rule that fills the blank); number and letter series (spotting what comes next); analogies (how A-to-B locks onto C-to-what); odd-one-out (what doesn't belong, and why); spatial reasoning (rotating, folding, and seeing it in your head); test-craft (timing, elimination, and smart guessing -- the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Every question asks you to reason about a concrete puzzle or test-taking scenario, not to recite.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Functional Intelligence subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running and Authentication",
        body:
          "The app runs through Replit workflows rather than pnpm dev at the root. Each artifact has its own workflow that supplies the PORT and base path it needs.\n\nTypical local checks include typechecking the API server and course packages, applying the database schema with Drizzle, and regenerating API hooks and validators from the OpenAPI specification.\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO, including Sign in with Google. Social providers are managed through the workspace Auth settings.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "**System diagnostic** -- verifies the environment, database round-trip, course-seed integrity, OpenAI chat and JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic** -- creates a simulated student, runs a practice session, completes and submits an assignment, and verifies that grading, detection, and analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Researchers & Professionals Entering the Field** -- a complete, rigorous grounding in how reasoning and aptitude tests work, with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection through text classification and keystroke behavior.\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nFunctional Intelligence -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  Psychoanalysis: {
    emoji: "🛋️",
    tagline:
      "A formal, rigorous, self-paced course for adult learners entering psychoanalytic theory, history, technique, and debates about evidence.",
    sections: [
      {
        emoji: "🧠",
        title: "What It Is",
        body: `Basic Tenets of Psychoanalysis is a rigorous, historically informed introduction to psychoanalytic theory and practice. The course distinguishes observation from interpretation, clinical pattern from metapsychological hypothesis, and therapeutic outcome from evidence for a proposed mechanism.

Each lecture is available at Short, Medium, and Long depth, allowing adult learners to study the same concept at the level of detail that fits their needs.`,
      },
      {
        emoji: "📚",
        title: "Thirty-Topic Curriculum",
        body: `The curriculum contains exactly thirty course topics spanning the foundations, clinical concepts, techniques, later developments, and scientific status of psychoanalysis.

**Foundations of Mental Life** -- The unconscious, psychic determinism, repression, drives, the pleasure and reality principles, the structural model of id, ego, and superego, and the topographic model of conscious, preconscious, and unconscious.

**Development and Conflict** -- Infantile sexuality, stages of development, the Oedipus complex, conscience formation, fixation, regression, defense mechanisms, symptom formation, anxiety, narcissism, object relations, ambivalence, mourning, melancholia, and identification.

**Dreams and Everyday Evidence** -- Dreams as wish fulfillment; manifest and latent content; condensation, displacement, symbolization, and secondary revision; parapraxes; jokes; art; religion; and other expressions of unconscious life.

**Psychoanalytic Technique** -- Free association, transference, countertransference, resistance, working through, interpretation, and insight as a proposed mechanism of cure.

**Later Theory and Scientific Debate** -- The death drive, repetition compulsion, civilization and instinctual renunciation, post-Freudian revisions by Jung, Adler, Klein, and Lacan, the scientific status and testability of psychoanalysis, and its relationship to the modern mind sciences.`,
      },
      {
        emoji: "🎓",
        title: "Learning and Assessment",
        body: `**Section-Scoped AI Tutoring** -- Tutoring is grounded in the exact lecture being read.

**Adaptive Practice** -- Practice adjusts by topic and maintains persistent difficulty.

**Formal Assessment** -- Two homework sets, a timed course test, and a cumulative final emphasize concrete, multi-sentence case analysis rather than definition recall.

**Reasoning Diagnostics** -- Subject and General Reasoning diagnostics are available in multiple formats, lengths, and phases.

**Semantic Grading** -- Each problem receives a grading rationale, while static and diachronic keystroke-pattern screening support academic integrity.

**Public Course Readers and Analytics** -- PDF and TXT readers require no account, and analytics track assignment performance and topic mastery.`,
      },
      {
        emoji: "⚙️",
        title: "Technical Architecture",
        body: `The course uses a contract-first Express API with OpenAPI-generated Zod validators and React Query hooks. PostgreSQL and Drizzle support the curriculum, attempts, practice, diagnostics, and analytics.

Server-Sent Events power model-backed tutoring and generation. Curriculum reseeding is transactional and versioned, while GPTZero-backed static detection uses non-blocking fallbacks alongside keystroke-trace analysis. System diagnostics verify the fixed thirty-topic curriculum count.`,
      },
    ],
  },
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
  "Ethical AI & Governance Technology": {
    emoji: "⚖️",
    tagline:
      "A rigorous, self-paced introduction to where AI goes wrong and how AI gets governed for adult researchers and professionals.",
    sections: [
      {
        emoji: "⚖️",
        title: "What It Is",
        body: `AI Harms, Values, and Governance is a one-day web course taught, tutored, drilled, and graded by AI, with built-in academic-integrity enforcement. It covers inherited bias, competing fairness goals, opacity, privacy, confident wrongness, accountability, law and standards, and meaningful organizational governance.`,
      },
      {
        emoji: "✨",
        title: "Product Features",
        body: `**One-Day Intensive Curriculum** -- One intensive day, organized by session:

**Morning session** -- Where AI goes wrong. Bias in, bias out; competing fairness criteria; opacity and black-box explanation limits; privacy, consent, and training data; hallucination, automation bias, and over-reliance; hidden labor and environmental costs; and a hiring-screen case.

**Afternoon session** -- How AI gets governed. Accountability; audits, impact assessments, model cards, and red-teaming; risk tiers and the EU AI Act structure; hard law, soft law, standards, and NIST AI RMF; meaningful human oversight; procurement, deployment gates, incident response; and a hospital diagnostic-model case.

**Three-Depth Lectures** -- Every lecture reads at Short, Medium, or Long depth while preserving its examples and learning objectives.

**Governance Reasoning Throughout** -- Questions present concrete AI harms and governance cases and require students to identify the deciding concept and evidence rather than recite definitions.

**Two Reasoning Primers** -- The subject primer matches concrete governance scenarios to the right concept and resists the claim that an algorithm is neutral. The general primer applies analysis, inference, evaluation, deduction, and induction.

**Section-Scoped AI Tutor** -- Ask about the exact passage on screen and receive a streamed, grounded answer.

**Adaptive Practice** -- Generated problem sets adjust difficulty based on the student's recent answers.

**AI-Graded Coursework** -- Two homework sets, a timed course test, and a cumulative final, each scored with written rationale and a percentage. Coursework is 100% of the grade.

**Two-Layer Academic-Integrity Screening** -- Every submission is checked by a text classifier and by analysis of how the answer was typed, with a clear verdict from each layer.

**Ungraded Diagnostic Instruments** -- AI-governance-case and general-reasoning checks in three formats and three lengths, offered before, during, and after the course with unlimited attempts and fresh questions.

**Free Course Download** -- The course reader downloads as PDF or TXT without sign-in.

**No Account Required** -- The course and its AI-powered features are available without creating an account.

**Live Analytics** -- Dashboard KPIs, per-topic mastery, recent activity, and private visitor analytics.

**Search Metadata** -- Structured metadata describes the course and its AI harms and governance curriculum for search engines.

**Built-In Product Demo Video** -- A short walkthrough of the live product ships alongside the course.`,
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body: `**Researchers and professionals entering the field** -- a foundational but substantial treatment of AI harms, values, and governance, compressed into one intensive day.

**Product and engineering teams** -- practical guidance on fairness, privacy, accountability, risk-tiering, meaningful oversight, and organizational controls.

**Instructors and curriculum designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.

**Academic-integrity researchers** -- a live demonstration of layered AI-authorship detection.`,
      },
    ],
  },
  "Cloud Architecture": {
    emoji: "🚀",
    tagline:
      "A rigorous, self-paced, AI-powered cloud architecture course for researchers, professionals, and teams designing reliable, secure systems with AWS and Azure.",
    sections: [
      {
        emoji: "🚀",
        title: "What It Is",
        body: `Cloud Architecture (AWS/Azure) is a one-day web course taught, tutored, drilled, and graded by AI. It turns cloud design decisions into a structured learning experience with concrete cases, adaptive practice, grounded tutoring, and built-in academic-integrity screening.

The hard part of cloud architecture is not only choosing a service. It is connecting compute, storage, network, identity, resilience, security, cost, and human decisions into one system you can trust. Every assessment asks the learner to reason from evidence and make an architectural decision rather than recite definitions.`,
      },
      {
        emoji: "✨",
        title: "Product Features",
        body: `**One-Day Intensive Curriculum** -- One intensive day organized around four core topics:

**The building blocks** -- Renting instead of owning; compute, storage, network, and identity; virtual machines, containers, serverless functions, databases, regions, availability zones, virtual networks, subnets, and least privilege. The central question is which cloud primitives a system needs, and why.

**Designing for real use** -- Scaling, load balancing, statelessness, failure design, redundancy, backup, cost, managed services, infrastructure as code, observability, encryption, secrets, and shared responsibility. The focus is whether an architecture remains reliable, secure, and practical under real conditions.

**Two Reasoning Primers** -- An ungraded cloud-architecture primer identifies the architectural idea that decides a concrete deployment scenario. A general primer develops analysis, inference, evaluation, deduction, and induction in a domain-neutral format.

**Three-Depth Lectures** -- Every lecture is available in Short, Medium, or Long depth while keeping the same examples and learning objectives.

**Section-Scoped AI Tutor** -- Ask about the exact lecture passage on screen and receive a streamed, grounded answer.

**Adaptive Practice** -- Generated scenario problems adjust difficulty based on recent answers, so practice responds to the learner.

**Scenario-Based Assessments** -- Homework, tests, practice, and diagnostics require multi-step application to realistic production cases.

**AI-Graded Coursework** -- Two homework sets, a timed course test, and a cumulative final receive semantic grading, per-problem results, and written rationale.

**Two-Layer Academic-Integrity Screening** -- Every submission is checked by both a static text detector and diachronic keystroke-pattern analysis.

**Live Analytics** -- Dashboard KPIs, topic mastery, activity, and weak-area tracking.

**Free Course Downloads** -- PDF and TXT course downloads are available without sign-in.

**Operator Diagnostics** -- Self-tests verify the database, course seed, model completion, JSON mode, detection pipeline, practice loop, grading loop, and analytics.

**Built-In Product Walkthrough** -- A product demo video ships alongside the course.`,
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body: `**Researchers and professionals entering cloud architecture** -- a foundational but substantial introduction compressed into one focused day.

**Product and engineering teams** -- a shared language for cloud primitives, resilience, security, cost, and operational design.

**Instructors and curriculum designers** -- a working example of AI-taught, AI-graded coursework with integrity controls.

**Academic-integrity researchers** -- a live demonstration of layered authorship screening in an educational product.`,
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
  { title: "Psychoanalysis", url: "https://nanofreud.xyz" },
  { title: "IQ Booster", url: "https://nanofreud.xyz" },
  {
    title: "AI-Assisted Grading and Assessment (Level 1)",
    url: "https://aigrading1.ink",
  },
  {
    title: "Generative AI Integration",
    url: "https://generativeai.ink",
  },
  {
    title: "Ethical AI & Governance Technology",
    url: "https://aigovernance.ink",
  },
  {
    title: "Infinite Series",
    url: "https://nanoinfiniteseries.xyz",
  },
  {
    title: "Cloud Architecture",
    url: "https://cloudarchitecture.ink",
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
