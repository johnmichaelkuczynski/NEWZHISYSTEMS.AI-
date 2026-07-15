import { useState } from "react";
import NavBar from "@/components/NavBar";
import aiFundamentalsBadge from "@assets/ZHI_AI_FUNDAMENTALS_BADGE_1781725917586.png";
import aiMathFundamentalsBadge from "@assets/ZHI_AI_MATH_FUNDAMENTALS_BADGE_1781730555335.png";
import infiniteSeriesBadge from "@assets/BABY_INFINITE_SERIES_1781731315533.png";
import cognitiveScienceBadge from "@assets/COGNITIVE_SCIENCE_1781747749673.png";
import constructiveReasoningBadge from "@assets/BASIC_CONSTRUCTIVE_CRITICAL_REASONING_1781748870574.png";
import finiteMathBadge from "@assets/FINITE_MATH_1781753715196.png";
import diagonalizationBadge from "@assets/DIAGONALIZATION_1781754327939.png";
import dataAnalyticsBadge from "@assets/BASIC_DATA_ANALYTICS_1781998712125.png";
import workforceAnalyticsBadge from "@assets/WORKFORCE_ANALYTICS_1782001428926.png";

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

interface Badge {
  image: string;
  url: string;
  label: string;
}

interface Course {
  title: string;
  url: string;
  badge?: Badge;
  videoUrl?: string;
}

const courseDescriptions: Record<string, CourseDescription> = {
  "Voice Powered Know Thyself": {
    emoji: "🪞",
    tagline:
      "KnowThySelf -- Voice-Powered Self-Knowledge: A structured month of honest self-inquiry. You speak. AI listens -- and tells you something true.",
    sections: [
      {
        emoji: "🌱",
        title: "What It Is",
        body:
          "Most self-reflection tools let you write tidy answers about who you wish you were. KnowThySelf is different.\n\nYou read a short lesson, sit with a question designed to unsettle you a little, and then answer it out loud -- in your own voice, at your own pace. The AI doesn't grade you. It reads your answer -- what you said and how you said it -- and reflects something true back to you. Over four units and nine sessions, those reflections weave together into a cumulative portrait of who you actually are.\n\nBy the final capstone, it names the one core conflict you keep circling.",
      },
      {
        emoji: "🗺️",
        title: "How the Course Is Structured",
        body:
          "The course runs across four units, each with lessons and a recorded session at the end:\n\n**Unit 1** -- The self you present: how you show up and why.\n\n**Unit 2** -- How you see the world: your lens, your assumptions.\n\n**Unit 3** -- What you want and what stops you.\n\n**Unit 4** -- The capstone: naming the central conflict.\n\nEach unit includes short readings to sit with before you record. There are no right answers.",
      },
      {
        emoji: "🎙️",
        title: "How a Session Works",
        body:
          "**Read** -- a short, focused lesson that primes the question.\n\n**Sit with it** -- let the question land before you reach for an answer.\n\n**Speak** -- record your answer out loud (you can re-record as many times as you like).\n\n**Receive** -- the AI reads back what your answer reveals, including how you said it.\n\n**Continue** -- each session deepens the portrait built from everything before it.\n\nYou also have an AI tutor on every lecture page -- ask it anything, in text or by voice, and it responds knowing your history.",
      },
      {
        emoji: "🪟",
        title: "What You Get",
        body:
          "A candid reading after each session -- not praise, not a score, but a real interpretation.\n\nA growing portrait across all nine sessions -- nine dimensions of how you move through the world.\n\nA capstone conclusion -- the one conflict at the root of the patterns.\n\nAn AI tutor -- present on every lecture, aware of what you've shared, ready to go deeper.",
      },
      {
        emoji: "🔒",
        title: "Your Privacy",
        body:
          "Every response is private to your account. Nothing is shared. The AI reads your delivery -- pace, pauses, fillers -- as tells, not as a grade. There is no leaderboard, no score, no comparison.",
      },
    ],
  },
  "Personal Finance": {
    emoji: "💵",
    tagline:
      "Teach Yourself Personal Finance -- A Four-Unit Introductory Course on the Ideas Behind Money: From \"Gross vs. Net\" to Investing, Insurance, and Life Planning",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Teach Yourself Personal Finance is a self-paced, single-user web course that explains how money actually works -- in plain English, without the jargon and without requiring any math or spreadsheet background. What's the difference between gross and net pay? How does compound interest grow your savings? Why does a credit score matter? What is diversification, inflation, or risk pooling? The course answers these conceptually, one connected idea at a time.\n\nThe full runtime -- lectures with Short / Medium / Long depth, section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- is preserved and put to work teaching the conceptual backbone of personal finance: how income, budgeting, debt, saving, investing, and risk fit together.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Unit Curriculum of 32 Micro-Lectures** -- Organized by theme:\n\n**Unit 1 -- Money, income, and budgeting (8 lectures):** income (gross vs. net); taxes and take-home pay; cash flow; budgeting; needs vs. wants; emergency funds; banking; and opportunity cost.\n\n**Unit 2 -- Credit, debt, and borrowing (8 lectures):** credit; interest; credit scores; loans and amortization; credit cards; good vs. bad debt; debt repayment; and default.\n\n**Unit 3 -- Saving, investing, and growth (8 lectures):** compound interest; the time value of money; risk and return; asset classes; diversification; index funds; retirement accounts; and inflation.\n\n**Unit 4 -- Risk, protection, and life planning (8 lectures):** insurance and risk pooling; life insurance; estate basics; major purchases; financial goals; and avoiding scams -- closing with a capstone synthesis.\n\n**One Real Example per Lecture** -- Every micro-lecture grounds its concept in a concrete, real-world example -- e.g. a $60,000 offer letter shrinking to take-home pay, how a small credit-card balance snowballs at a high APR, a single dollar doubling over decades of compounding, an index fund quietly beating stock-pickers, and how insurance spreads one person's disaster across a large pool.\n\n**One Conceptual Question per Lecture** -- Every homework / test / midterm / final problem is a short-answer conceptual question (define a term, draw a distinction, explain why something works, identify an example) answered in plain English -- no math or spreadsheets required.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, One-Click Diagnostics** -- All inherited unchanged from the runtime.\n\n**Built-In Product Demo Video** -- The companion demo artifact ships as a short screencast of the live UI over a background music bed.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Conceptual Answer Grading** -- Every problem's canonical answer is a short conceptual statement. The AI grader (with a numeric short-circuit retained for harmless edge cases) judges whether the student's answer captures the key idea of the model answer, accepting paraphrases and lenient wording while staying strict on the essential concept.\n\n**Static AI Detection (GPTZero):** Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic.\n\n**Diachronic Keystroke Detection:** The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/diagnostics/system):** environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, and grader equivalence check.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** end-to-end stack proof -- a synthetic student reads every lecture, takes and submits every assignment, runs adaptive practice, asks the tutor, and triggers detection, verifying grading + detection + analytics all reflect the run.\n\n**Content Auditor (/diagnostics/content-audit):** sends every lecture body and every stored \"correct answer\" to OpenAI for an independent verdict on whether each is actually correct -- flagging wrong definitions, inaccurate claims about how money works, misused terminology, and conceptual answers that don't satisfy their prompt.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the set of topic slugs in the database to the expected curriculum and checks a sentinel phrase in a designated lecture. If either differs, it wipes and re-seeds in dependency order, so a single content swap propagates cleanly.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-5) adjusts after each attempt; conceptual questions are generated on demand.\n\nNote: the on-screen math keyboard component remains in the codebase (the engine is preserved unchanged), but the finance curriculum's answers are plain-English conceptual statements, so the course does not rely on it.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Anyone Who Wants the Concepts, Not the Jargon:** A short, focused course on the conceptual scaffolding behind personal finance -- income, budgeting, debt, saving, investing, and risk -- with no math or spreadsheet prerequisites.\n\n**Instructors & Curriculum Designers** -- A working reference for AI-taught, AI-graded, AI-detection-screened coursework whose answers are conceptual rather than symbolic.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most money advice is either breathless hype or dense technical detail. This course takes the middle path: it explains the real ideas behind personal finance clearly enough that anyone can follow, and honestly enough that you come away able to make your own decisions with confidence.\n\nRead the idea, see it grounded in a real example, then explain the idea in your own words.\n\nTeach Yourself Personal Finance -- read the idea, ground the idea, explain the idea.",
      },
    ],
  },
  "AI Logic": {
    emoji: "🤖",
    tagline:
      "A Four-Week Introductory Course on the Ideas Behind Artificial Intelligence -- From \"What Is AI?\" to Agents, Alignment, and the Future",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "AI Logic is a self-paced, single-user web course that asks the question AI coverage usually skips: what are these systems, really? What is a model? What does \"training\" actually mean? How does a neural network learn? Why do language models make things up? What is bias, alignment, or an AI agent? The course answers these conceptually -- in plain English, with no math or coding background required -- one connected idea at a time.\n\nThe full runtime -- lectures with Short / Medium / Long depth, section-scoped AI tutor, adaptive practice, AI-graded homework / tests / midterm / final, two-layer AI-authorship detection, and one-click diagnostics -- teaches the conceptual backbone of modern AI: how machines learn from data, what neural networks and generative models do, and how to use AI responsibly.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**Four-Week Curriculum of 28 Micro-Lectures** -- Organized by theme:\n\n**Week 1 -- What AI is and how it got here.** What AI is and isn't (automation vs. intelligence); a brief history from symbolic AI to machine learning; rules vs. learning; data as the raw material; what \"training\" actually means; models as input-output functions; and where AI shows up in everyday life.\n\n**Week 2 -- How machines learn.** Pattern recognition; features and representations; supervised learning from labels; unsupervised learning (finding structure); prediction, classification, and error (precision and recall); and why more data and bigger models help.\n\n**Week 3 -- Neural networks and generative AI.** The intuition behind neural networks; how networks learn (loss, backpropagation, gradient descent); from neural nets to deep learning; language models and next-token prediction; what \"generative\" AI means; prompting; and the strengths, limits, and hallucination of these systems.\n\n**Week 4 -- AI in the world: ethics, safety, and the future.** Bias, fairness, and data quality; reliability, evaluation, and trust; privacy and security; automation, work, and the economy; alignment and AI safety basics; a practical workflow for using AI well; the near future of agents; and a capstone synthesis.\n\n**One Real Example per Lecture** -- Every micro-lecture grounds its concept in a concrete, real-world example -- e.g. Deep Blue vs. AlphaGo as symbolic-vs-learned AI, the ImageNet dataset launching deep learning, a recruiting tool that learned historical bias, the boat-racing AI that gamed its reward by spinning in circles, language models regurgitating memorized training data, and coding agents that act over multiple steps.\n\n**One Conceptual Question per Lecture** -- Every homework / test / midterm / final problem is a short-answer conceptual question (define a term, draw a distinction, explain why something works, identify an example) answered in plain English -- no math or code required.\n\n**Three-Depth Lectures, Section-Scoped Tutor, Adaptive Practice, AI Grading, Two-Layer Detection, Operator Diagnostics** -- All inherited unchanged from the underlying runtime.\n\n**12 Graded Assignments** -- Two homeworks per week plus a graded weekly checkpoint: Week 1 test, end-of-Week-2 midterm, Week 3 test, end-of-Week-4 cumulative final.\n\n**Built-In Product Demo Video** -- The companion demo artifact ships as a short, narrated screencast of the live UI.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Conceptual Answer Grading** -- Every problem's canonical answer is a short conceptual statement. The AI grader (with a numeric short-circuit retained for harmless edge cases) judges whether the student's answer captures the key idea of the model answer, accepting paraphrases and lenient wording while staying strict on the essential concept.\n\n**Static AI Detection (GPTZero):** Every submitted answer is sent to GPTZero's predict/text endpoint; the per-document AI probability is blended 0.85 x GPTZero + 0.15 x structural-heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic Keystroke Detection:** The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**System Diagnostic (/diagnostics/system):** environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, and grader equivalence check. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** end-to-end stack proof -- a synthetic student reads every lecture, takes and submits every assignment, runs adaptive practice, asks the tutor, and triggers detection, verifying grading + detection + analytics all reflect the run.\n\n**Content Auditor (/diagnostics/content-audit):** sends every lecture body and every stored \"correct answer\" to OpenAI for an independent verdict on whether each is actually correct -- flagging wrong definitions, inaccurate claims about how AI works, misused terminology, and conceptual answers that don't satisfy their prompt.\n\n**Auto-Reseed on Curriculum Change** -- seedIfEmpty compares the set of topic slugs in the database to the expected curriculum and checks a sentinel phrase in a designated lecture. If either differs, it wipes and re-seeds in dependency order. A single content swap propagates cleanly on the next server start.\n\n**Contract-First API** -- Single OpenAPI document; React Query hooks for the UI and Zod validators for the server are generated from it.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt grounded in the active lecture.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-5) adjusts after each attempt; conceptual questions are generated on demand.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**Anyone Curious About AI Who Wants the Concepts, Not the Hype:** A short, focused course on the conceptual scaffolding behind modern AI -- data, learning, models, neural networks, generation, and responsible use -- with no math or coding prerequisites.\n\n**Instructors & Curriculum Designers** -- A working reference for AI-taught, AI-graded, AI-detection-screened coursework whose answers are conceptual rather than symbolic.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most coverage of AI is either breathless hype or dense technical detail. This course takes the middle path: it explains the real ideas behind AI clearly enough that anyone can follow, and honestly enough that you come away able to tell what these systems can and cannot do.\n\nRead the idea, see it grounded in a real example, then explain the idea in your own words.\n\nAI Logic -- read the idea, ground the idea, explain the idea.",
      },
    ],
  },
  "Spatial IQ Booster": {
    emoji: "🔎",
    tagline:
      "A rigorous, self-paced introduction to how spatial reasoning works -- and how to beat the tests that measure it -- that teaches, tutors, drills, and grades itself, built for researchers and professionals entering the field.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Spatial Intelligence is a self-paced, single-user web course on the skills behind spatial-reasoning tasks and the tests that measure them -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. A complete one-unit curriculum builds the subject from first principles, one idea at a time: how every mental rotation, paper fold, cube net, cross-section, assembly, and projection is really a disciplined manipulation of a shape in the mind, and how method -- not raw talent -- turns that manipulation into a score.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 6 topics** -- a complete syllabus: mental rotation (turning a shape in your head, and telling a rotation from a mirror image); paper folding and hole-punching (reading each crease as a mirror and counting layers); cube nets (folding a flat net into a cube and tracking opposite faces); cross-sections (how a cutting plane's angle sets the shape of the slice); assembly and fit (matching edges, negative space, and conserved area); viewpoints and projections (top, front, and side views, and matching a 3-D object to its 2-D projections).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Every question asks you to reason about a concrete shape or test-taking scenario, not to recite.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Spatial Intelligence subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
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
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Researchers & Professionals Entering the Field** -- a complete, rigorous grounding in how spatial reasoning works and how the tests for it are solved, with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nSpatial IQ Booster -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
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
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Researchers & Professionals Entering the Field** -- a complete, rigorous grounding in how reasoning and aptitude tests work, with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nIQ Booster -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Psychodynamic Treatment of BPD 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Basic Course on the Psychodynamic Treatment of BPD -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Psychodynamic Treatment of BPD 101 is a self-paced, single-user web course -- a plain-language \"basic course\" on the psychodynamic treatment of BPD (borderline personality disorder): a depth-oriented approach to the meaning beneath the instability of emotion, identity, and relationships in BPD -- how overwhelming affect, splitting, and unstable self-image can carry meaning, how impulsive behaviors work as ways to regulate unbearable feeling and ward off abandonment, and how reading the conflict beneath the behavior complements the evidence-based treatments that help. No clinical background or jargon required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom or behavior earns top credit; the cautious \"we can't really conclude anything / the mind is too complex / everyone has mood swings\" dodge earns near-zero; florid padding that binds no evidence scores low; and a lurid overreach the evidence actively defeats (e.g. \"she's just manipulative / attention-seeking\") also earns zero. Every question rewards committing to the richest supported interpretation while naming the cheapest disconfirming observation.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 Understanding BPD: Emotion, Identity, and Unstable Relationships; 1.2 Splitting and the Black-and-White World; 1.3 Object Relations: How Early Bonds Become Inner Templates; 1.4 Identity Diffusion: The Unstable Sense of Self; 1.5 Mentalization: Learning to Read Minds, Including One's Own (MBT); 1.6 Transference-Focused Psychotherapy: Healing Through the Relationship (TFP); 1.7 The Evidence: Where Psychodynamic Treatment Genuinely Shines; and 1.8 A Treatment Arc, Start to Finish.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic Psychodynamic Treatment of BPD 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language psychodynamic-treatment-of-BPD syllabus across 8 sections. Each section ships with a lesson and one graded homework. There is no separate test, midterm, or final -- homework is the graded model.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**One Homework Per Section, Your Format** -- Each section's homework is offered in three formats and you pick exactly one: MCQ (long), Hybrid (medium -- multiple choice + short written), or Written (short). You get a single attempt -- it locks the moment you submit.\n\n**Inverted Partial-Credit Grading** -- MC option weights act as data (one zero-credit dodge foil, plus a descending gradient of live options); written answers are scored against a yield/risk rubric with a penalty for claims the evidence defeats; hybrid blends both parts. Every item returns a written rationale.\n\n**Adaptive Topic Practice** -- Generated scenario problem sets that move difficulty up after a streak and down after a miss, with explanations on every answer. Per-session difficulty persists.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable rationale.\n\n**Four-Phase Diagnostic Assessments** -- A single Scientific Reasoning instrument runs at four phases (baseline, two mid-course checkpoints, and after the unit) using a 3x3 menu of generated items, so reasoning growth can be tracked across the course. A configurable minimum-to-pass governs pass/fail.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-section mastery percentages, and a recent-activity feed.\n\n**Operator Diagnostics** -- One-click self-tests (system health and synthetic-student end-to-end run) verify the entire stack -- database, OpenAI integration, GPTZero, detection pipeline, and the practice/grade loop.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Inverted Partial-Credit Grading Engine**\n\n**MC / Hybrid MC part:** each option carries a stored weight in [0,1]. Exactly one option is a zero-credit dodge (a claim the evidence defeats, or a non-committal refusal); the rest form a descending gradient (richest/most-falsifiable = 1.0, weaker commitment = 0.6, timid partial = 0.3). Credit is the chosen option's weight.\n\n**Written:** scored against a { modelAnswer, yieldAnchors, riskAnchors, defeatedBy } rubric -- credit rises with how much evidence the answer binds and how falsifiable a test it commits to, and falls for asserting claims the evidence defeats or for empty elaboration.\n\n**Hybrid:** averages the MC and written parts. Section percent rolls up per item, and the course aggregate honors configurable format point values.\n\n**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic. If GPTZero is unavailable, the system falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** the textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration, penalizing paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**Single-Attempt Lock** -- Starting a homework records the chosen format; submitting locks the attempt. A second start on a submitted assignment is rejected (HTTP 409) and the UI shows the locked result.\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** spins up a fake student, runs a practice session, takes and submits a full homework attempt, and verifies grading + detection + analytics all reflect the run.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt so responses stay grounded in the lecture being read.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes current difficulty and section as input.\n\n**Living README** -- This README plus a companion BLUEPRINT.md architecture document are kept in lock-step with the code.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language course on the psychodynamic treatment of BPD -- with on-demand tutoring and adaptive practice, no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection combining text classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic Psychodynamic Treatment of BPD 101 makes \"learning to read the meaning beneath a symptom or behavior\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom or behavior and naming the cheapest observation that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nBasic Psychodynamic Treatment of BPD 101 -- where the strongest honest interpretation of the conflict beneath the symptom or behavior, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Basic Psychodynamic Treatment of OCD 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Basic Course on the Psychodynamic Treatment of OCD -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Psychodynamic Treatment of OCD 101 is a self-paced, single-user web course -- a plain-language \"basic course\" on the psychodynamic treatment of OCD: how obsessions and compulsions can carry meaning, how rituals work as defenses that bind unbearable anxiety, and how reading the conflict beneath the symptom complements the evidence-based treatments that relieve it. No clinical background or jargon required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom earns top credit; the cautious \"we can't really conclude anything / the mind is too complex / rituals are random\" dodge earns near-zero; florid padding that binds no evidence scores low; and a lurid overreach the evidence actively defeats also earns zero. Every question rewards committing to the richest supported interpretation while naming the cheapest disconfirming observation.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 Understanding OCD: Obsessions, Compulsions, and the Cycle; 1.2 The Psychodynamic View: What the Symptom Might Be \"Saying\"; 1.3 The Function of the Ritual: Anxiety, Control, and Defense; 1.4 Conflict and Ambivalence: The Engine Beneath the Symptom; 1.5 The Therapeutic Relationship in OCD Treatment; 1.6 Where Psychodynamic Meets the Evidence: ERP, CBT, and Integration; 1.7 Working Through: Insight Alongside Symptom Relief; and 1.8 A Treatment Arc, Start to Finish.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic Psychodynamic Treatment of OCD 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language psychodynamic-treatment-of-OCD syllabus across 8 sections. Each section ships with a lesson and one graded homework. There is no separate test, midterm, or final -- homework is the graded model.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**One Homework Per Section, Your Format** -- Each section's homework is offered in three formats and you pick exactly one: MCQ (long), Hybrid (medium -- multiple choice + short written), or Written (short). You get a single attempt -- it locks the moment you submit.\n\n**Inverted Partial-Credit Grading** -- MC option weights act as data (one zero-credit dodge foil, plus a descending gradient of live options); written answers are scored against a yield/risk rubric with a penalty for claims the evidence defeats; hybrid blends both parts. Every item returns a written rationale.\n\n**Adaptive Topic Practice** -- Generated scenario problem sets that move difficulty up after a streak and down after a miss, with explanations on every answer. Per-session difficulty persists.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable rationale.\n\n**Four-Phase Diagnostic Assessments** -- A single Scientific Reasoning instrument runs at four phases (baseline, two mid-course checkpoints, and after the unit) using a 3x3 menu of generated items, so reasoning growth can be tracked across the course. A configurable minimum-to-pass governs pass/fail.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-section mastery percentages, and a recent-activity feed.\n\n**Operator Diagnostics** -- One-click self-tests (system health and synthetic-student end-to-end run) verify the entire stack -- database, OpenAI integration, GPTZero, detection pipeline, and the practice/grade loop.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Inverted Partial-Credit Grading Engine**\n\n**MC / Hybrid MC part:** each option carries a stored weight in [0,1]. Exactly one option is a zero-credit dodge (a claim the evidence defeats, or a non-committal refusal); the rest form a descending gradient (richest/most-falsifiable = 1.0, weaker commitment = 0.6, timid partial = 0.3). Credit is the chosen option's weight.\n\n**Written:** scored against a { modelAnswer, yieldAnchors, riskAnchors, defeatedBy } rubric -- credit rises with how much evidence the answer binds and how falsifiable a test it commits to, and falls for asserting claims the evidence defeats or for empty elaboration.\n\n**Hybrid:** averages the MC and written parts. Section percent rolls up per item, and the course aggregate honors configurable format point values.\n\n**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic. If GPTZero is unavailable, the system falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** the textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration, penalizing paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**Single-Attempt Lock** -- Starting a homework records the chosen format; submitting locks the attempt. A second start on a submitted assignment is rejected (HTTP 409) and the UI shows the locked result.\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** spins up a fake student, runs a practice session, takes and submits a full homework attempt, and verifies grading + detection + analytics all reflect the run.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt so responses stay grounded in the lecture being read.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes current difficulty and section as input.\n\n**Living README** -- This README plus a companion BLUEPRINT.md architecture document are kept in lock-step with the code.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language course on the psychodynamic treatment of OCD -- with on-demand tutoring and adaptive practice, no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection combining text classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic Psychodynamic Treatment of OCD 101 makes \"learning to read the meaning beneath a symptom\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom and naming the cheapest observation that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nBasic Psychodynamic Treatment of OCD 101 -- where the strongest honest interpretation of the conflict beneath the symptom, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Basic Workforce Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to workforce analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Workforce Analytics is a self-paced, single-user web course that delivers a plain-language introduction to workforce analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how organizations use data about the people who work for them to make better, fairer decisions and how to do it honestly, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what workforce analytics is; the cost of turnover; predicting who will leave (retention); hiring analytics; scheduling and labor optimization; productivity and performance; engagement and fairness; from people data to people decisions.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Basic Workforce Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the single product walkthrough video (React + Framer Motion), exportable to MP4.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Workforce Analytics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Revenue Management & Pricing Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to revenue management and pricing analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Revenue Management & Pricing Analytics is a self-paced, single-user web course that delivers a plain-language introduction to revenue management and pricing analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how businesses decide what to charge and how managers read demand to make better pricing decisions, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what revenue management is (why two seats cost different prices); willingness to pay; price elasticity; price discrimination and fences; dynamic pricing; overbooking and capacity; discounts, bundles, and anchors; setting a pricing strategy (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Revenue Management & Pricing Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the single product walkthrough video (React + Framer Motion), exportable to MP4.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Revenue Management & Pricing Analytics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Discrete Math": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to discrete math that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Discrete Math is a self-paced, single-user web course that delivers a plain-language introduction to discrete mathematics -- the math of separate, distinct things (whole numbers, statements, sets, networks), the natural math of computers -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: why an \"if-then\" is false only when the 'if' is true and the 'then' is false, why a hundred examples still don't prove a rule, why {1,2,3} equals {3,2,1}, why 13 people must share a birth month, how a road map and a friendship network are the same dots-and-lines model, and how stepping onto the bottom rung and always reaching the next one lets you climb forever.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what discrete math is; logic, the machine code of reasoning; proof, how you know something for certain; sets, relations, and functions; counting and the pigeonhole principle; graphs, the hidden networks in everything; modular arithmetic, clock math that secures the internet; recursion and induction (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Questions ask you to reason through concrete cases in plain words, never to recite definitions.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Discrete Math subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-video** -- animated walkthrough video (Framer Motion).\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL (Neon), Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (an external Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.\n\nIf GPTZERO_API_KEY is absent, AI detection silently falls back to an LLM scorer plus a structural heuristic -- submissions never block.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle once on a fresh database (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so the database is populated automatically once DATABASE_URL is set and the schema has been pushed. The schema push creates the tables; the boot-time seed only fills in rows.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -> Configure tab -> SSO providers -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret under Custom credentials.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to discrete math with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.",
      },
    ],
  },
  "Basic Lambda Calculus": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to the lambda calculus that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Lambda Calculus is a self-paced, single-user web course that delivers a plain-language introduction to the lambda calculus -- the tiny language where everything is a function and computation is just substitution -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how a function with a placeholder computes by substitution, how renaming variables avoids confusion, how to build numbers and booleans out of pure functions, how recursion appears out of nowhere, and why this little language is exactly as powerful as any computer.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what the lambda calculus is; application and substitution; bound and free variables; Church numerals; booleans, logic, and choice; recursion and the Y combinator; lambda calculus equals Turing machines; from lambda to real languages (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Questions ask you to reason through concrete cases in plain words, never to recite definitions.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Lambda Calculus subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-video** -- animated walkthrough video (Framer Motion).\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL (Neon), Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (an external Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.\n\nIf GPTZERO_API_KEY is absent, AI detection silently falls back to an LLM scorer plus a structural heuristic -- submissions never block.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle once on a fresh database (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so the database is populated automatically once DATABASE_URL is set and the schema has been pushed. The schema push creates the tables; the boot-time seed only fills in rows.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -> Configure tab -> SSO providers -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret under Custom credentials.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to the lambda calculus with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.",
      },
    ],
  },
  "Basic Operations & Supply Chain Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to operations and supply chain analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Operations & Supply Chain Analytics is a self-paced, single-user web course that delivers a plain-language introduction to operations and supply chain analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how things really move through a business and how managers read the flow to make better decisions, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what operations & supply chain analytics is (the business as a flow); inventory (the cost of too much and too little); the bullwhip effect; bottlenecks; waiting lines (queues); demand forecasting; routing and optimization; resilience (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Operations & Supply Chain Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the single product walkthrough video (React + Framer Motion), exportable to MP4.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Operations & Supply Chain Analytics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Marketing Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to marketing analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Marketing Analytics is a self-paced, single-user web course that delivers a plain-language introduction to marketing analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how we use data on what customers actually do to understand them and act and how to do it honestly, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what marketing analytics is; why \"the average customer\" doesn't exist (segmentation); the funnel, from stranger to buyer; customer lifetime value; churn; A/B testing; attribution and personalization; from insight to campaign.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Basic Marketing Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the single product walkthrough video (React + Framer Motion), exportable to MP4.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.",
      },
    ],
  },
  "Basic Predictive Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to predictive analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Predictive Analytics is a self-paced, single-user web course that delivers a plain-language introduction to predictive analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how we use patterns in the past to estimate what's likely to happen next and how to do it honestly, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what predictive analytics is; the shape of data over time (trend, seasonality, and noise); regression, the workhorse of prediction; correlation vs. causation; forecasting methods; measuring forecast error; why forecasts fail; from prediction to decision.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Predictive Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the single product walkthrough video (React + Framer Motion), exportable to MP4.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Predictive Analytics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Diagonalization and Incompleteness": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to diagonalization and incompleteness that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Diagonalization and Incompleteness is a self-paced, single-user web course that delivers a plain-language introduction to diagonalization and incompleteness -- the single trick behind the deepest \"impossible\" results in math and computing -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how one cheeky move builds something guaranteed to differ from everything on a list, why some infinities are bigger than others, how sentences and programs can talk about themselves, and why no machine, proof system, or language can ever do everything -- from Cantor's reals and self-printing programs to the halting problem, Gödel, Tarski, and Rice.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what diagonalization actually is; Cantor's bigger infinities; self-reference; programs that print themselves; Turing and the halting problem; Gödel's incompleteness; Tarski and Rice; one method, many worlds (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Questions ask you to explain your reasoning in plain words, never to crunch heavy calculations.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Diagonalization & Incompleteness subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
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
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to diagonalization and incompleteness with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Diagonalization and Incompleteness -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Finite Math": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to finite math that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Finite Math is a self-paced, single-user web course that delivers a plain-language introduction to finite math -- the practical math of counting, chance, and decisions you can actually finish -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how to organize the world into sets, count possibilities without listing them all, measure how likely something is, and make the most of limited resources -- from club overlaps and card decks to interest, loans, and growth.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what finite math is; sets and logic; the art of counting; probability; matrices; linear programming; the math of money; putting finite math to work (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Questions ask you to explain your reasoning in plain words, never to crunch heavy calculations.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Finite Math subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
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
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to finite math with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Finite Math -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Infinite Series": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to infinite series that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Infinite Series is a self-paced, single-user web course that delivers a plain-language introduction to infinite series -- the math of adding forever and still getting an answer -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how a sum of infinitely many shrinking pieces, like 1/2 + 1/4 + 1/8 + ..., can settle on a single, finite total.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what an infinite series is; Zeno's paradox; geometric series; convergence vs. divergence; the harmonic series; tests for convergence; power and Taylor series; series in the real world (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Questions ask you to explain ideas in plain words, never to do calculations.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Infinite Series subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
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
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to infinite series with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Infinite Series -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Financial & Managerial Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to financial and managerial analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Financial & Managerial Analytics is a self-paced, single-user web course that delivers a plain-language introduction to financial and managerial analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how a business really makes money and how owners read the numbers to make better decisions, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what financial & managerial analytics is; reading the score (the three financial statements); where the money goes (fixed, variable, cost behavior); break-even; budgets and variance; unit economics; forecasting and KPIs; from numbers to decisions.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Financial & Managerial Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the promotional video (React + Framer Motion), exportable to MP4.\n\n**artifacts/qr-course-demo** -- a real-React product walkthrough video.\n\n**artifacts/diagnostics-demo** -- a video of the operator self-tests.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.",
      },
    ],
  },
  "Basic Psychodynamic Therapy 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Basic Course on the Mind Beneath the Surface -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Psychodynamic Therapy 101 is a self-paced, single-user web course -- a plain-language \"basic course\" on the mind beneath the surface: how out-of-awareness patterns, defenses, transference, and the therapeutic relationship shape how we struggle and how we change. No clinical background or jargon required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable interpretation the clinical evidence supports about the hidden dynamic earns top credit; the cautious \"we can't really conclude anything / the psyche is too complex\" dodge earns near-zero; florid padding that binds no evidence scores low; and a lurid overreach the evidence actively defeats also earns zero. Every item rewards committing to the richest supported interpretation while naming the cleanest disconfirming test.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 What Psychodynamic Therapy Is; 1.2 The Unconscious, Reconsidered; 1.3 Defense Mechanisms; 1.4 Transference; 1.5 The Therapeutic Relationship; 1.6 Insight and Working Through; 1.7 Does It Work? The Evidence; and 1.8 A Session, Start to Finish.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic Psychodynamic Therapy 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language psychodynamic therapy syllabus across 8 sections. Each section ships with a lesson and one graded homework. There is no separate test, midterm, or final -- homework is the graded model.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**One Homework Per Section, Your Format** -- Each section's homework is offered in three formats and you pick exactly one: MCQ (long), Hybrid (medium -- multiple choice + short written), or Written (short). You get a single attempt -- it locks the moment you submit.\n\n**Inverted Partial-Credit Grading** -- MC option weights act as data (one zero-credit dodge foil, plus a descending gradient of live options); written answers are scored against a yield/risk rubric with a penalty for claims the evidence defeats; hybrid blends both parts. Every item returns a written rationale.\n\n**Adaptive Topic Practice** -- Generated scenario problem sets that move difficulty up after a streak and down after a miss, with explanations on every answer. Per-session difficulty persists.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable rationale.\n\n**Four-Phase Diagnostic Assessments** -- A single Scientific Reasoning instrument runs at four phases (baseline, two mid-course checkpoints, and after the unit) using a 3x3 menu of generated items, so reasoning growth can be tracked across the course. A configurable minimum-to-pass governs pass/fail.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-section mastery percentages, and a recent-activity feed.\n\n**Operator Diagnostics** -- One-click self-tests (system health and synthetic-student end-to-end run) verify the entire stack -- database, OpenAI integration, GPTZero, detection pipeline, and the practice/grade loop.\n\n**Built-In Product Demo Video** -- A screencast of the live UI ships as its own deployable artifact, so the product can show itself.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Inverted Partial-Credit Grading Engine**\n\n**MC / Hybrid MC part:** each option carries a stored weight in [0,1]. Exactly one option is a zero-credit dodge (a claim the evidence defeats, or a non-committal refusal); the rest form a descending gradient (richest/most-falsifiable = 1.0, weaker commitment = 0.6, timid partial = 0.3). Credit is the chosen option's weight.\n\n**Written:** scored against a { modelAnswer, yieldAnchors, riskAnchors, defeatedBy } rubric -- credit rises with how much evidence the answer binds and how falsifiable a test it commits to, and falls for asserting claims the evidence defeats or for empty elaboration.\n\n**Hybrid:** averages the MC and written parts. Section percent rolls up per item, and the course aggregate honors configurable format point values.\n\n**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic. If GPTZero is unavailable, the system falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** the textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration, penalizing paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**Single-Attempt Lock** -- Starting a homework records the chosen format; submitting locks the attempt. A second start on a submitted assignment is rejected (HTTP 409) and the UI shows the locked result.\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** spins up a fake student, runs a practice session, takes and submits a full homework attempt, and verifies grading + detection + analytics all reflect the run.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt so responses stay grounded in the lecture being read.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes current difficulty and section as input.\n\n**Real-React Demo Video** -- The product walkthrough is a real React app exported as MP4 from a single browser tab.\n\n**Living README** -- This README plus a companion BLUEPRINT.md architecture document are kept in lock-step with the code.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language course on the mind beneath the surface -- with on-demand tutoring and adaptive practice, no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection combining text classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic Psychodynamic Therapy 101 makes \"learning how the mind works beneath the surface\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest interpretation the clinical evidence supports about the hidden dynamic and naming the cheapest observation that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nBasic Psychodynamic Therapy 101 -- where the strongest honest interpretation of what's happening beneath the surface, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Basic Restaurant & Hospitality Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to restaurant and hospitality analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Restaurant & Hospitality Analytics is a self-paced, single-user web course that delivers a plain-language introduction to restaurant and hospitality analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how a restaurant really makes money and how owners read the numbers to make better decisions, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what hospitality analytics is; covers, turns, and the bottom line; menu engineering; forecasting demand; pricing and yield; guests as data (loyalty, LTV); reviews, sentiment, and reputation; from dashboard to decision.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Hospitality Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as two artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the promotional video (React + Framer Motion), exportable to MP4.\n\n**artifacts/qr-course-demo** -- a real-React product walkthrough video.\n\n**artifacts/diagnostics-demo** -- a video of the operator self-tests.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Restaurant & Hospitality Analytics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Cognitive Science 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Basic Course on How the Mind Works -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Cognitive Science 101 is a self-paced, single-user web course -- a plain-language \"basic course\" on how the mind works: perception, memory, language, reasoning, machine minds, and consciousness. No math, coding, or technical background required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable conclusion the evidence supports about how the mind works earns top credit; the cautious \"we can't really conclude anything / the brain is too complex\" dodge earns near-zero; florid padding that binds no evidence scores low; and a bold claim the evidence actively defeats also earns zero. Every question rewards committing to the richest supported conclusion while naming the cleanest disconfirming test.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 What Cognitive Science Is; 1.2 The Big Idea: Mind as Information Processing; 1.3 Perception; 1.4 Memory; 1.5 Language and Thought; 1.6 Reasoning and Bias; 1.7 Brains and Machines; and 1.8 Consciousness.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic Cognitive Science 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language cognitive science syllabus across 8 sections. Each section ships with a lesson and one graded homework. There is no separate test, midterm, or final -- homework is the graded model.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**One Homework Per Section, Your Format** -- Each section's homework is offered in three formats and you pick exactly one: MCQ (long), Hybrid (medium -- multiple choice + short written), or Written (short). You get a single attempt -- it locks the moment you submit.\n\n**Inverted Partial-Credit Grading** -- MC option weights act as data (one zero-credit dodge foil, plus a descending gradient of live options); written answers are scored against a yield/risk rubric with a penalty for claims the evidence defeats; hybrid blends both parts. Every item returns a written rationale.\n\n**Adaptive Topic Practice** -- Generated scenario problem sets that move difficulty up after a streak and down after a miss, with explanations on every answer. Per-session difficulty persists.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable rationale.\n\n**Four-Phase Diagnostic Assessments** -- A single Scientific Reasoning instrument runs at four phases (baseline, two mid-course checkpoints, and after the unit) using a 3x3 menu of generated items, so reasoning growth can be tracked across the course. A configurable minimum-to-pass governs pass/fail.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-section mastery percentages, and a recent-activity feed.\n\n**Operator Diagnostics** -- One-click self-tests (system health and synthetic-student end-to-end run) verify the entire stack -- database, OpenAI integration, GPTZero, detection pipeline, and the practice/grade loop.\n\n**Built-In Product Demo Video** -- A screencast of the live UI ships as its own deployable artifact, so the product can show itself.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Inverted Partial-Credit Grading Engine**\n\n**MC / Hybrid MC part:** each option carries a stored weight in [0,1]. Exactly one option is a zero-credit dodge (a claim the evidence defeats, or a non-committal refusal); the rest form a descending gradient (richest/most-falsifiable = 1.0, weaker commitment = 0.6, timid partial = 0.3). Credit is the chosen option's weight.\n\n**Written:** scored against a { modelAnswer, yieldAnchors, riskAnchors, defeatedBy } rubric -- credit rises with how much evidence the answer binds and how falsifiable a test it commits to, and falls for asserting claims the evidence defeats or for empty elaboration.\n\n**Hybrid:** averages the MC and written parts. Section percent rolls up per item, and the course aggregate honors configurable format point values.\n\n**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic. If GPTZero is unavailable, the system falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** the textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration, penalizing paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**Single-Attempt Lock** -- Starting a homework records the chosen format; submitting locks the attempt. A second start on a submitted assignment is rejected (HTTP 409) and the UI shows the locked result.\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** spins up a fake student, runs a practice session, takes and submits a full homework attempt, and verifies grading + detection + analytics all reflect the run.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt so responses stay grounded in the lecture being read.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes current difficulty and section as input.\n\n**Real-React Demo Video** -- The product walkthrough is a real React app exported as MP4 from a single browser tab.\n\n**Living README** -- This README plus a companion BLUEPRINT.md architecture document are kept in lock-step with the code.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language course on how the mind works -- with on-demand tutoring and adaptive practice, no instructor required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection combining text classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic Cognitive Science 101 makes \"learning how the mind works\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest conclusion the evidence supports about the mind and naming the cleanest test that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nBasic Cognitive Science 101 -- where the strongest honest conclusion about how the mind works, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Basic AI Math": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to the math behind AI that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic AI Math is a self-paced, single-user web course that delivers a plain-language introduction to the math behind artificial intelligence -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how AI is really just numbers and arithmetic at huge scale, from turning words into vectors to teaching a network through backpropagation.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: why AI is really math; numbers as meaning (vectors and embeddings); measuring likeness (the dot product and distance); matrices (how a network moves information); slopes and gradients; gradient descent; probability; backpropagation (the capstone).\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists. Questions ask you to explain ideas in plain words, never to do calculations.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (AI-math subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as several artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the promotional video (React + Framer Motion), exportable to MP4.\n\n**artifacts/qr-course-demo** -- a real-React product walkthrough video.\n\n**artifacts/diagnostics-demo** -- a video of the operator self-tests.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to the math behind AI with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic AI Math -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Developmental Psychology": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to developmental psychology that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Developmental Psychology is a self-paced, single-user web course that delivers a plain-language introduction to developmental psychology -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept tasteful and age-appropriate: it explains the science of how people grow and change across the whole lifespan, from before birth to old age.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what developmental psychology is; nature vs. nurture; the infant mind; attachment; how children think (Piaget); language development; the teenage brain; aging and the lifespan.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning checks** -- two ungraded instruments (Developmental Psychology subject reasoning and General Reasoning), each offered in three formats and three lengths, at four points in the journey (before, one-third, two-thirds, and after the course). They are unlimited practice with fresh questions every attempt and never affect the grade (coursework is 100%).\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as two artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the promotional video (React + Framer Motion), exportable to MP4.\n\n**artifacts/qr-course-demo** -- a real-React product walkthrough video.\n\n**artifacts/diagnostics-demo** -- a video of the operator self-tests.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.",
      },
    ],
  },
  "Basic Constructive Critical Reasoning": {
    emoji: "🧭",
    tagline:
      "A One-Unit Course That Trains You to Draw the Strongest Conclusion the Data Actually Supports -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Constructive Critical Reasoning (CCR) is a self-paced, single-user web course that teaches the discipline of committing to the richest, most-falsifiable conclusion a body of evidence will bear -- the opposite of reflexive skepticism. No math, coding, or technical background required.\n\nCCR inverts the usual grading instinct. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The richest, most-falsifiable, most-committed model earns top credit; the cautious \"you can't really conclude anything\" dodge earns near-zero; florid padding that binds no data scores low; and a bold claim the data actively defeats also earns zero. Every question rewards committing harder to the most, while exposing the cleanest disconfirming test.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 The Fecund Lead; 1.2 Model Selection by Explanatory Yield; 1.3 Parsimony as a Live Constraint; 1.4 Abductive Commitment; 1.5 From Correlation to Mechanism; 1.6 The Anomaly Cluster; 1.7 The Cheap Decisive Test; and 1.8 Calibrated Boldness.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, CCR pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language reasoning syllabus across 8 sections. Each section ships with a lesson and one graded homework. There is no separate test, midterm, or final -- homework is the graded model.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture.\n\n**One Homework Per Section, Your Format** -- Each section's homework is offered in three formats and you pick exactly one: MCQ (long), Hybrid (medium -- multiple choice + short written), or Written (short). You get a single attempt -- it locks the moment you submit.\n\n**Inverted Partial-Credit Grading** -- MC option weights act as data (one zero-credit dodge foil, plus a descending gradient of live options); written answers are scored against a yield/risk rubric with a penalty for claims the data defeats; hybrid blends both parts. Every item returns a written rationale.\n\n**Adaptive Topic Practice** -- Generated scenario problem sets that move difficulty up after a streak and down after a miss, with explanations on every answer. Per-session difficulty persists.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable rationale.\n\n**Four-Phase Diagnostic Assessments** -- A single CCR reasoning instrument runs at four phases (baseline, two mid-course checkpoints, and after the unit) using a 3x3 menu of generated items, so reasoning growth can be tracked across the course. A configurable minimum-to-pass governs pass/fail.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-section mastery percentages, and a recent-activity feed.\n\n**Operator Diagnostics** -- One-click self-tests (system health and synthetic-student end-to-end run) verify the entire stack -- database, OpenAI integration, GPTZero, detection pipeline, and the practice/grade loop.\n\n**Built-In Product Demo Video** -- A screencast of the live UI ships as its own deployable artifact, so the product can show itself.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Inverted Partial-Credit Grading Engine**\n\n**MC / Hybrid MC part:** each option carries a stored weight in [0,1]. Exactly one option is a zero-credit dodge (a fallacy the data defeats, or a non-committal refusal); the rest form a descending gradient (richest/most-falsifiable = 1.0, weaker commitment = 0.6, timid partial = 0.3). Credit is the chosen option's weight.\n\n**Written:** scored against a { modelAnswer, yieldAnchors, riskAnchors, defeatedBy } rubric -- credit rises with how much data the answer binds and how falsifiable a test it commits to, and falls for asserting claims the data defeats or for empty elaboration.\n\n**Hybrid:** averages the MC and written parts. Section percent rolls up per item, and the course aggregate honors configurable format point values.\n\n**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic. If GPTZero is unavailable, the system falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** the textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration, penalizing paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds.\n\n**Single-Attempt Lock** -- Starting a homework records the chosen format; submitting locks the attempt. A second start on a submitted assignment is rejected (HTTP 409) and the UI shows the locked result.\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** spins up a fake student, runs a practice session, takes and submits a full homework attempt, and verifies grading + detection + analytics all reflect the run.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt so responses stay grounded in the lecture being read.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes current difficulty and section as input.\n\n**Real-React Demo Video** -- The product walkthrough is a real React app exported as MP4 from a single browser tab.\n\n**Living README** -- This README plus a companion BLUEPRINT.md architecture document are kept in lock-step with the code.",
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
          "Basic Constructive Critical Reasoning reframes \"critical thinking\" as a constructive act.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the richest model the evidence supports and naming the cleanest test that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nBasic Constructive Critical Reasoning -- where the strongest honest conclusion, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Basic Data Analytics": {
    emoji: "🔎",
    tagline:
      "A Friendly, One-Unit Intro to Data Analytics That Teaches, Tutors, Drills, and Grades Itself -- No Math, Coding, or Spreadsheets Required",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Data Analytics is a self-paced, single-user web course that delivers a friendly, plain-language introduction to data analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, spreadsheets, SQL, or other technical skills required.\n\nIt turns the everyday habit of noticing, comparing, and counting into one product: read each lesson at the depth you want, ask a tutor scoped to the exact section you're on, drill questions whose difficulty adapts to you in real time, and submit homework, a unit test, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nThe curriculum is one unit -- \"Data Analytics for Everyone\" -- across 6 connected topics:\n\n**What is data, really?**\n\n**Spotting patterns**\n\n**Asking a good question**\n\n**Sorting, grouping, and counting**\n\n**Seeing the story**\n\n**From hunch to decision**\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic Data Analytics pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language intro syllabus across 6 topics, shipping with lessons, two homework sets, a timed unit test, and a cumulative final exam.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives. Skim the concept, expand it on demand, or read the deeper cut -- and request a custom rewrite (\"add more examples\", \"shorter sentences\") when you want it your way.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture, and the tutor stays available while you practice.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with an explanation on every answer. Per-session difficulty persists, so each drill picks up where the last one left off. Every question poses a concrete scenario and asks for a short reasoned answer -- never one-word recall.\n\n**AI-Graded Assignments** -- Homework, the unit test, and the final are scored by an LLM grader that judges semantic equivalence to a model answer, returns per-problem correctness plus a written rationale, then rolls up to a percent score.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a behavioral keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Diagnostic Reasoning Assessments** -- Two original reasoning instruments (Professional Judgment, dilemma-based on relatable everyday data scenarios; and Critical Reasoning, CCTST-style multiple-choice) run at baseline and after the unit, so end-of-course reasoning can be compared against the starting point. Together they count for 20% of the final grade.\n\n**Math Keyboard Everywhere** -- A symbol palette is available on every freeform input -- answer boxes and the AI tutor -- so any notation a student wants to reach for is one tap away.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- One-click self-tests verify the entire stack -- database, OpenAI integration, GPTZero, the detection pipeline, answer-key quality, and the practice/grade loop -- before you trust a session.\n\n**Google Sign-In** -- Students sign in with Google (via Clerk) to keep their progress, attempts, and analytics tied to their account.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** Every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero. (Math-keyboard insertions count as real keystrokes, so legitimate symbol use never false-flags.)\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** Ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, an AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** Spins up a fake student, runs a practice session (wrong -> adjust down -> right -> adjust up), takes and submits a full assignment attempt, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Quality-Control Diagnostic (/diagnostics/quality-control):** Uses OpenAI to verify that course answer keys are legitimate, judged against the course's own lecture text rather than generic knowledge.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift between client and server.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt, so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and topic as input, so questions are generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.\n\n**Operator Console** -- A dedicated Diagnostics page surfaces the self-tests with one-click execution, per-step pass/fail rows, and raw error output for debugging.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This project is a pnpm monorepo with path-routed artifacts behind a shared reverse proxy:\n\n**artifacts/qr-course** -- the student-facing web app (React + Vite), served at /. This is Basic Data Analytics.\n\n**artifacts/api-server** -- the shared Express backend (lessons, tutor streaming, practice, grading, detection, diagnostics, analytics).\n\n**lib/api-spec** -- the OpenAPI source of truth plus generated React Query hooks and Zod schemas.\n\n**lib/db** -- the database schema and client (PostgreSQL via the project's DATABASE_URL).\n\n**artifacts/qr-course-demo, artifacts/diagnostics-demo** -- standalone demo-video artifacts that showcase the product.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language intro to data analytics with on-demand tutoring and adaptive practice -- no instructor, math, or coding required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic Data Analytics reframes an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nBasic Data Analytics -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Criminal Psychology": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to criminal psychology that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Criminal Psychology is a self-paced, single-user web course that delivers a plain-language introduction to criminal psychology -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept tasteful and age-appropriate: it explains the science of why people offend and how the justice system reasons, never anything graphic or sensational.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what criminal psychology is; why people offend; inside the psychopath; profiling the offender; eyewitnesses and memory; interrogation and false confessions; madness and the law; predicting danger.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two original instruments (Professional Judgment and Critical Reasoning) run at baseline and after the unit, counting for 20% of the final grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This is a pnpm workspace monorepo. The course runs as two artifacts plus shared libraries:\n\n**artifacts/qr-course** -- React + Vite frontend (the student app).\n\n**artifacts/api-server** -- Express API: lessons, tutor, practice, grading, detection, diagnostics.\n\n**artifacts/course-promo** -- the promotional video (React + Framer Motion), exportable to MP4.\n\n**artifacts/qr-course-demo** -- a real-React product walkthrough video.\n\n**artifacts/diagnostics-demo** -- a video of the operator self-tests.\n\n**lib/db** -- Drizzle ORM schema + Postgres connection.\n\n**lib/api-spec** -- OpenAPI contract -> generated React Query hooks + Zod validators.\n\n**Contract-first:** a single OpenAPI document is the source of truth. React Query hooks (client) and Zod validators (server) are generated from it, so request/response shapes can't drift.\n\n**Tech stack:** React, Vite, TypeScript, Tailwind, Express, Drizzle ORM, PostgreSQL, Clerk (auth), OpenAI (tutoring/grading), GPTZero (AI detection), Framer Motion (video).",
      },
      {
        emoji: "🔑",
        title: "Configuration",
        body:
          "The app reads the following secrets/environment variables (managed in the Replit Secrets pane):\n\n**DATABASE_URL** -- PostgreSQL connection string (e.g. a Neon database).\n\n**OPENAI_API_KEY** -- OpenAI key for the tutor, practice generation, and grading.\n\n**OPENAI_BASE_URL** -- OpenAI-compatible base URL.\n\n**GPTZERO_API_KEY** -- GPTZero key for static AI-authorship detection.\n\n**CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY** -- Clerk authentication (server + client).\n\n**VITE_CLERK_PUBLISHABLE_KEY** -- Clerk publishable key exposed to the frontend.\n\n**SESSION_SECRET** -- Server session signing.",
      },
      {
        emoji: "🚀",
        title: "Running",
        body:
          "The app runs through Replit workflows (not pnpm dev at the root). Each artifact has its own workflow that supplies the PORT and base-path it needs.\n\nTypical local checks include typechecking a package (pnpm --filter @workspace/api-server run typecheck), applying the database schema with Drizzle (pnpm --filter @workspace/db run push), and regenerating API hooks/validators from the OpenAPI spec (pnpm --filter @workspace/api-spec run codegen).\n\nThe API server seeds the course content on startup and self-heals when the content version changes, so a fresh database is populated automatically once DATABASE_URL and the schema are in place.\n\n**Authentication** -- Sign-in uses Clerk with email/password and social SSO (including Sign in with Google). Social providers are toggled from the workspace Auth pane -- enabling Google there makes it appear on the sign-in screen automatically; no code change is required. For a branded Google consent screen in production, add your own Google OAuth Client ID/Secret in the Auth pane.",
      },
      {
        emoji: "🩺",
        title: "Diagnostics",
        body:
          "Open the Diagnostics page in the app (or hit the API directly) to run:\n\n**System diagnostic (GET /api/diagnostics/system)** -- environment, database round-trip, course-seed integrity, OpenAI chat + JSON mode, the detection pipeline, an AI-positive control sample, and GPTZero connectivity.\n\n**Synthetic-student diagnostic (POST /api/diagnostics/synthetic-run)** -- spins up a fake student, runs a practice session, takes and submits a full assignment, and verifies grading + detection + analytics all reflect the run.",
      },
      {
        emoji: "📚",
        title: "Who It's For",
        body:
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBasic Criminal Psychology -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic AI": {
    emoji: "🤖",
    tagline:
      "A Friendly, One-Unit Intro to Artificial Intelligence That Teaches, Tutors, Drills, and Grades Itself -- No Math, Coding, or Prior Science Required",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic AI is a self-paced, single-user web course that delivers a friendly, plain-language introduction to artificial intelligence -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, spreadsheets, or prior science required.\n\nIt turns one big idea -- that modern AI is a pattern-finding machine that learns from data and predicts likely answers, not a thinking, all-knowing mind -- into one product: read each lesson at the depth you want, ask a tutor scoped to the exact section you're on, drill questions whose difficulty adapts to you in real time, and submit homework, a unit test, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nThe curriculum is one unit -- \"Basic AI for Everyone\" -- across 8 connected topics:\n\n**What AI is (and isn't)**\n\n**Rules vs. learning (the two paradigms)**\n\n**Data and training (what \"learning\" actually means)**\n\n**Pattern recognition (the core idea behind it all)**\n\n**Neural networks and deep learning**\n\n**Language models (how AI predicts text, and what \"generative\" means)**\n\n**Strengths, limits, and hallucination**\n\n**Using AI well, and where it's headed**\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic AI pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🤖",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language intro syllabus across 8 topics, shipping with lessons, two homework sets, a timed unit test, and a cumulative final exam.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives. Skim the concept, expand it on demand, or read the deeper cut -- and request a custom rewrite (\"add more examples\", \"shorter sentences\") when you want it your way.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture, and the tutor stays available while you practice.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with an explanation on every answer. Per-session difficulty persists, so each drill picks up where the last one left off. Every question poses a concrete scenario and asks for a short reasoned answer -- never one-word recall.\n\n**AI-Graded Assignments** -- Homework, the unit test, and the final are scored by an LLM grader that judges semantic equivalence to a model answer, returns per-problem correctness plus a written rationale, then rolls up to a percent score.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a behavioral keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Diagnostic Reasoning Assessments** -- Two original reasoning instruments (Professional Judgment, dilemma-based on relatable everyday scenarios; and Critical Reasoning, multiple-choice) run at baseline and after the unit, so end-of-course reasoning can be compared against the starting point. Together they count for 20% of the final grade.\n\n**Math Keyboard Everywhere** -- A symbol palette is available on every freeform input -- answer boxes and the AI tutor -- so any notation a student wants to reach for is one tap away.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- One-click self-tests verify the entire stack -- database, OpenAI integration, GPTZero, the detection pipeline, answer-key quality, and the practice/grade loop -- before you trust a session.\n\n**Google Sign-In** -- Students sign in with Google (via Clerk) to keep their progress, attempts, and analytics tied to their account.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** Every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero. (Math-keyboard insertions count as real keystrokes, so legitimate symbol use never false-flags.)\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** Ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, an AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** Spins up a fake student, runs a practice session (wrong -> adjust down -> right -> adjust up), takes and submits a full assignment attempt, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Quality-Control Diagnostic (/diagnostics/quality-control):** Uses OpenAI to verify that course answer keys are legitimate, judged against the course's own lecture text rather than generic knowledge.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift between client and server.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt, so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and topic as input, so questions are generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.\n\n**Operator Console** -- A dedicated Diagnostics page surfaces the self-tests with one-click execution, per-step pass/fail rows, and raw error output for debugging.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This project is a pnpm monorepo with path-routed artifacts behind a shared reverse proxy:\n\n**artifacts/qr-course** -- the student-facing web app (React + Vite), served at /. This is Basic AI.\n\n**artifacts/api-server** -- the shared Express backend (lessons, tutor streaming, practice, grading, detection, diagnostics, analytics).\n\n**lib/api-spec** -- the OpenAPI source of truth plus generated React Query hooks and Zod schemas.\n\n**lib/db** -- the database schema and client (PostgreSQL via the project's DATABASE_URL).\n\n**artifacts/course-promo, artifacts/qr-course-demo, artifacts/diagnostics-demo** -- standalone demo/promo-video artifacts that showcase the product.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language intro to artificial intelligence with on-demand tutoring and adaptive practice -- no instructor, math, or coding required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic AI reframes an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nBasic AI -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Basic Evolutionary Psychology": {
    emoji: "🧠",
    tagline:
      "A Friendly, One-Unit Intro to Evolutionary Psychology That Teaches, Tutors, Drills, and Grades Itself -- No Math, Coding, or Prior Science Required",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Basic Evolutionary Psychology is a self-paced, single-user web course that delivers a friendly, plain-language introduction to evolutionary psychology -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, spreadsheets, or prior science required.\n\nIt turns one big idea -- that your mind has a history, and your everyday feelings are tools shaped to help your ancestors survive and connect -- into one product: read each lesson at the depth you want, ask a tutor scoped to the exact section you're on, drill questions whose difficulty adapts to you in real time, and submit homework, a unit test, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nThe curriculum is one unit -- \"Evolutionary Psychology for Everyone\" -- across 6 connected topics:\n\n**The mind has a history**\n\n**Built to survive (cravings, fears, and beauty)**\n\n**The logic of attraction**\n\n**Love, jealousy, and keeping a mate**\n\n**Why we cooperate**\n\n**Why we fight -- and believe**\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Basic Evolutionary Psychology pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Structured Curriculum** -- A complete plain-language intro syllabus across 6 topics, shipping with lessons, two homework sets, a timed unit test, and a cumulative final exam.\n\n**Three-Depth Lessons** -- Every lesson is available at Short / Medium / Long length, AI-rewritten while preserving the same examples and learning objectives. Skim the concept, expand it on demand, or read the deeper cut -- and request a custom rewrite (\"add more examples\", \"shorter sentences\") when you want it your way.\n\n**Section-Scoped AI Tutor** -- Ask a question about the paragraph you're reading and the answer streams back token-by-token, grounded in that exact lecture section. Suggested starter questions are pre-generated per lecture, and the tutor stays available while you practice.\n\n**Adaptive Topic Practice** -- Generated problem sets that move difficulty up after a streak and down after a miss, with an explanation on every answer. Per-session difficulty persists, so each drill picks up where the last one left off. Every question poses a concrete scenario and asks for a short reasoned answer -- never one-word recall.\n\n**AI-Graded Assignments** -- Homework, the unit test, and the final are scored by an LLM grader that judges semantic equivalence to a model answer, returns per-problem correctness plus a written rationale, then rolls up to a percent score.\n\n**Two-Layer AI Detection on Every Submission** -- Each submitted answer is screened by both a static text classifier (GPTZero) and a behavioral keystroke-pattern detector. Each verdict ships with a human-readable rationale.\n\n**Diagnostic Reasoning Assessments** -- Two original reasoning instruments (Professional Judgment, dilemma-based on relatable everyday scenarios; and Critical Reasoning, multiple-choice) run at baseline and after the unit, so end-of-course reasoning can be compared against the starting point. Together they count for 20% of the final grade.\n\n**Math Keyboard Everywhere** -- A symbol palette is available on every freeform input -- answer boxes and the AI tutor -- so any notation a student wants to reach for is one tap away.\n\n**Live Analytics** -- Dashboard KPIs (attempts, accuracy, streak), per-topic mastery percentages, and a recent-activity feed -- so progress, weak spots, and momentum are all visible at a glance.\n\n**Operator Diagnostics** -- One-click self-tests verify the entire stack -- database, OpenAI integration, GPTZero, the detection pipeline, answer-key quality, and the practice/grade loop -- before you trust a session.\n\n**Google Sign-In** -- Students sign in with Google (via Clerk) to keep their progress, attempts, and analytics tied to their account.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**Two-Layer AI-Authorship Detection**\n\n**Static (GPTZero):** Every submitted answer is sent to GPTZero; the per-document AI probability is blended with a structural heuristic for the final score. If GPTZero is unavailable, the system silently falls back to an LLM scorer plus heuristic -- submissions never block.\n\n**Diachronic (Keystroke Pattern):** The student textarea captures keystroke count, erase count, bulk-insert events, longest bulk insert, rewrite segments, and total duration. A scorer penalizes paste-then-reword behavior, low keystroke-to-output ratios, and impossibly sustained typing speeds -- catching AI use even when the final text is reworded enough to pass GPTZero. (Math-keyboard insertions count as real keystrokes, so legitimate symbol use never false-flags.)\n\n**Diagnostic Self-Tests**\n\n**System Diagnostic (/diagnostics/system):** Ordered checks -- environment, database round-trip, course-seed integrity, OpenAI chat completion, OpenAI JSON mode, detection pipeline, an AI-positive control sample, and GPTZero connectivity. Each step returns pass/fail, timing, and a raw error string.\n\n**Synthetic-Student Diagnostic (/diagnostics/synthetic-run):** Spins up a fake student, runs a practice session (wrong -> adjust down -> right -> adjust up), takes and submits a full assignment attempt, and verifies grading + detection + analytics all reflect the run. End-to-end stack proof in one click.\n\n**Quality-Control Diagnostic (/diagnostics/quality-control):** Uses OpenAI to verify that course answer keys are legitimate, judged against the course's own lecture text rather than generic knowledge.\n\n**Contract-First API** -- A single OpenAPI document is the source of truth; React Query hooks for the UI and Zod validators for the server are generated from it, so request and response shapes can't drift between client and server.\n\n**Streaming AI Tutor** -- Token-by-token Server-Sent-Event streaming with a section-scoped system prompt, so responses stay grounded in the lecture the student is reading.\n\n**Adaptive Practice Engine** -- Per-session difficulty (1-4 continuous) adjusts after each attempt; the next-problem generator takes the current difficulty and topic as input, so questions are generated on demand instead of pre-baked.\n\n**Real-React Demo Video** -- The product walkthrough is a real React app, not a slideshow: persistent sidebar, animated SVG cursor, character-by-character typing, word-by-word streaming responses, and scene-synced background audio -- all exported as MP4 from a single browser tab.\n\n**Operator Console** -- A dedicated Diagnostics page surfaces the self-tests with one-click execution, per-step pass/fail rows, and raw error output for debugging.",
      },
      {
        emoji: "🏗️",
        title: "Architecture",
        body:
          "This project is a pnpm monorepo with path-routed artifacts behind a shared reverse proxy:\n\n**artifacts/qr-course** -- the student-facing web app (React + Vite), served at /. This is Basic Evolutionary Psychology.\n\n**artifacts/api-server** -- the shared Express backend (lessons, tutor streaming, practice, grading, detection, diagnostics, analytics).\n\n**lib/api-spec** -- the OpenAPI source of truth plus generated React Query hooks and Zod schemas.\n\n**lib/db** -- the database schema and client (PostgreSQL via the project's DATABASE_URL).\n\n**artifacts/course-promo, artifacts/qr-course-demo, artifacts/diagnostics-demo** -- standalone demo/promo-video artifacts that showcase the product.",
      },
      {
        emoji: "📊",
        title: "Designed For",
        body:
          "**Middle Schoolers & Curious Adults** -- A complete, plain-language intro to evolutionary psychology with on-demand tutoring and adaptive practice -- no instructor, math, or coding required.\n\n**Instructors & Curriculum Designers** -- A working reference for what AI-taught, AI-graded, AI-detection-screened coursework actually looks like end-to-end.\n\n**Academic-Integrity Researchers** -- A live testbed for layered AI-authorship detection that combines text-based classification with behavioral keystroke evidence.\n\n**Product & Engineering Teams** -- A reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic operator tooling in a Replit pnpm monorepo.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Basic Evolutionary Psychology reframes an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nBasic Evolutionary Psychology -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
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

export default function BabyLivingCourses() {
  const courses: Course[] = [
    { title: "IQ Booster", url: "https://iqbooster.xyz" },
    { title: "Spatial IQ Booster", url: "https://spatialiqbooster.xyz" },
    { title: "Basic Evolutionary Psychology", url: "https://babyevopsych.xyz", videoUrl: "https://youtu.be/hWJicnEpS6c" },
    {
      title: "Basic AI",
      url: "https://babyartificialintelligence.xyz",
      videoUrl: "https://youtu.be/NQJzLfNIhdw",
      badge: {
        image: aiFundamentalsBadge,
        url: "https://credsverse.com/credentials/dc3dd4b6-52d9-4468-b39a-acaf50c76352",
        label: "AI Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Basic AI Math",
      url: "https://babyaimath.xyz",
      videoUrl: "https://youtu.be/tmf-vQU5TqQ",
      badge: {
        image: aiMathFundamentalsBadge,
        url: "https://credsverse.com/credentials/57cebc9f-f4aa-4ef5-a05d-47bd0bf26c0d",
        label: "AI Math Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Basic Diagonalization and Incompleteness",
      url: "https://diagonalization.xyz",
      videoUrl: "https://youtu.be/7yMY9fgsDO0",
      badge: {
        image: diagonalizationBadge,
        url: "https://credsverse.com/credentials/38c91731-2f69-4b98-9000-607927046ec5",
        label: "Diagonalization and Incompleteness -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Basic Finite Math",
      url: "https://babyfinitemath.xyz",
      videoUrl: "https://youtu.be/w2Hy1Xkc-QE",
      badge: {
        image: finiteMathBadge,
        url: "https://credsverse.com/credentials/b7480ea3-bc7b-4a60-9099-7bc82db18bc8",
        label: "Basic Finite Math -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Basic Cognitive Science 101",
      url: "https://babycognitivescience101.xyz",
      videoUrl: "https://youtu.be/KIYlhT3lhFM",
      badge: {
        image: cognitiveScienceBadge,
        url: "https://credsverse.com/credentials/a2c4a47b-23d5-4e11-b7ff-346e89b2a6ff",
        label: "Cognitive Science Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Basic Infinite Series",
      url: "https://babyinfiniteseries.xyz",
      videoUrl: "https://youtu.be/uwoiLIHjmb0",
      badge: {
        image: infiniteSeriesBadge,
        url: "https://credsverse.com/credentials/e5570034-5374-47e8-8cbf-d8e75c3969f8",
        label: "Infinite Series Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Basic Constructive Critical Reasoning",
      url: "https://basicconstructivereasoning.xyz",
      videoUrl: "https://youtu.be/A_qV9cH23LA",
      badge: {
        image: constructiveReasoningBadge,
        url: "https://credsverse.com/credentials/baf24cb4-85ef-4d44-b64f-116c1efd7968",
        label: "Basic Constructive Critical Reasoning -- Course Completed (issued to Douglas Zhi)",
      },
    },
    { title: "AI Logic", url: "https://ailogiccourse.xyz", videoUrl: "https://youtu.be/NyrQs-__M-s" },
    { title: "Personal Finance", url: "https://personalfinance101.xyz", videoUrl: "https://www.youtube.com/watch?v=GKZ5KciGFss" },
    { title: "Voice Powered Know Thyself", url: "https://voicepoweredknowthyself.xyz" },
    { title: "Basic Criminal Psychology", url: "https://babycrimpsych.xyz", videoUrl: "https://youtu.be/J7OpTF3pK_I" },
    {
      title: "Basic Data Analytics",
      url: "https://babyanalytics.xyz",
      videoUrl: "https://youtu.be/FmUCg1agNkc",
      badge: {
        image: dataAnalyticsBadge,
        url: "https://credsverse.com/credentials/d8a812d4-3336-4000-a55a-2107c0e416fd",
        label: "Basic Data Analytics -- Course Completed (issued to Douglas Zhi)",
      },
    },
    { title: "Basic Developmental Psychology", url: "https://babydevelopmentalpsychology.xyz", videoUrl: "https://youtu.be/k42R9s1Mvm8" },
    { title: "Basic Financial & Managerial Analytics", url: "https://babyfinancialanalytics.xyz", videoUrl: "https://youtu.be/VTIJZvoe150" },
    { title: "Basic Discrete Math", url: "https://basicdiscretemath.xyz", videoUrl: "https://youtu.be/rb4pnVCug2U" },
    { title: "Basic Lambda Calculus", url: "https://basiclambdacalculus.xyz", videoUrl: "https://youtu.be/XpQuU6SU8P4" },
    { title: "Basic Marketing Analytics", url: "https://babymarketinganalytics.xyz", videoUrl: "https://youtu.be/hQ3JuHB8zBw" },
    { title: "Basic Operations & Supply Chain Analytics", url: "https://babysupplychain.xyz", videoUrl: "https://youtu.be/jh6b0Ap4DTU" },
    { title: "Basic Predictive Analytics", url: "https://babypredictiveanalytics.xyz", videoUrl: "https://youtu.be/wa7D4OKA3WA" },
    { title: "Basic Revenue Management & Pricing Analytics", url: "https://basicrevenuemanagement.xyz", videoUrl: "https://youtu.be/2Xpo610YqYc" },
    { title: "Basic Psychodynamic Therapy 101", url: "https://psychodynamictherapy.xyz", videoUrl: "https://youtu.be/UsUJ3oPdpiY" },
    { title: "Basic Psychodynamic Treatment of BPD 101", url: "https://psychodynamicbpdtherapy.xyz", videoUrl: "https://youtu.be/ZN2TGmrVzTw" },
    { title: "Basic Psychodynamic Treatment of OCD 101", url: "https://psychodynamicocdtherapy.xyz", videoUrl: "https://youtu.be/5YZeCEsKKD8" },
    { title: "Basic Restaurant & Hospitality Analytics", url: "https://babyrestaurantanalytics.xyz", videoUrl: "https://youtu.be/aM-ZePWbF_4" },
    {
      title: "Basic Workforce Analytics",
      url: "https://babyworkforceanalytics.xyz",
      videoUrl: "https://youtu.be/rOINDQbLd7U",
      badge: {
        image: workforceAnalyticsBadge,
        url: "https://credsverse.com/credentials/3aabea64-9f6a-4cce-a99e-f80f5da4fc99",
        label: "Basic Workforce Analytics -- Course Completed (issued to Douglas Zhi)",
      },
    },
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
            Basic Living Courses
          </h1>
          <p className="text-gray-700 text-lg">
            Short courses for children and for anyone who wants quick exposure
            to a discipline.
          </p>
        </header>

        {sortedCourses.length === 0 ? (
          <div className="border border-dashed border-gray-300 rounded-lg p-10 text-center text-gray-500">
            Courses will be added here soon.
          </div>
        ) : (
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
                          <p className="text-sm text-gray-600">{desc.tagline}</p>
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
                      {course.badge && (
                        <a
                          href={course.badge.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={course.badge.label}
                          className="shrink-0"
                        >
                          <img
                            src={course.badge.image}
                            alt={course.badge.label}
                            className="w-12 h-12 object-contain hover:scale-105 transition-transform"
                          />
                        </a>
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
        )}
      </div>
    </div>
  );
}
