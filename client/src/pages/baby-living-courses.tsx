import { useState } from "react";
import NavBar from "@/components/NavBar";
import aiFundamentalsBadge from "@assets/ZHI_AI_FUNDAMENTALS_BADGE_1781725917586.png";
import aiMathFundamentalsBadge from "@assets/ZHI_AI_MATH_FUNDAMENTALS_BADGE_1781730555335.png";
import infiniteSeriesBadge from "@assets/BABY_INFINITE_SERIES_1781731315533.png";
import cognitiveScienceBadge from "@assets/COGNITIVE_SCIENCE_1781747749673.png";
import constructiveReasoningBadge from "@assets/BASIC_CONSTRUCTIVE_CRITICAL_REASONING_1781748870574.png";
import finiteMathBadge from "@assets/FINITE_MATH_1781753715196.png";
import diagonalizationBadge from "@assets/DIAGONALIZATION_1781754327939.png";

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
}

const courseDescriptions: Record<string, CourseDescription> = {
  "Psychodynamic Treatment of BPD 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Baby Course on the Psychodynamic Treatment of BPD -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Psychodynamic Treatment of BPD 101 is a self-paced, single-user web course -- a plain-language \"baby course\" on the psychodynamic treatment of BPD (borderline personality disorder): a depth-oriented approach to the meaning beneath the instability of emotion, identity, and relationships in BPD -- how overwhelming affect, splitting, and unstable self-image can carry meaning, how impulsive behaviors work as ways to regulate unbearable feeling and ward off abandonment, and how reading the conflict beneath the behavior complements the evidence-based treatments that help. No clinical background or jargon required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom or behavior earns top credit; the cautious \"we can't really conclude anything / the mind is too complex / everyone has mood swings\" dodge earns near-zero; florid padding that binds no evidence scores low; and a lurid overreach the evidence actively defeats (e.g. \"she's just manipulative / attention-seeking\") also earns zero. Every question rewards committing to the richest supported interpretation while naming the cheapest disconfirming observation.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 Understanding BPD: Emotion, Identity, and Unstable Relationships; 1.2 Splitting and the Black-and-White World; 1.3 Object Relations: How Early Bonds Become Inner Templates; 1.4 Identity Diffusion: The Unstable Sense of Self; 1.5 Mentalization: Learning to Read Minds, Including One's Own (MBT); 1.6 Transference-Focused Psychotherapy: Healing Through the Relationship (TFP); 1.7 The Evidence: Where Psychodynamic Treatment Genuinely Shines; and 1.8 A Treatment Arc, Start to Finish.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Psychodynamic Treatment of BPD 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "Psychodynamic Treatment of BPD 101 makes \"learning to read the meaning beneath a symptom or behavior\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom or behavior and naming the cheapest observation that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nPsychodynamic Treatment of BPD 101 -- where the strongest honest interpretation of the conflict beneath the symptom or behavior, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Psychodynamic Treatment of OCD 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Baby Course on the Psychodynamic Treatment of OCD -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Psychodynamic Treatment of OCD 101 is a self-paced, single-user web course -- a plain-language \"baby course\" on the psychodynamic treatment of OCD: how obsessions and compulsions can carry meaning, how rituals work as defenses that bind unbearable anxiety, and how reading the conflict beneath the symptom complements the evidence-based treatments that relieve it. No clinical background or jargon required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom earns top credit; the cautious \"we can't really conclude anything / the mind is too complex / rituals are random\" dodge earns near-zero; florid padding that binds no evidence scores low; and a lurid overreach the evidence actively defeats also earns zero. Every question rewards committing to the richest supported interpretation while naming the cheapest disconfirming observation.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 Understanding OCD: Obsessions, Compulsions, and the Cycle; 1.2 The Psychodynamic View: What the Symptom Might Be \"Saying\"; 1.3 The Function of the Ritual: Anxiety, Control, and Defense; 1.4 Conflict and Ambivalence: The Engine Beneath the Symptom; 1.5 The Therapeutic Relationship in OCD Treatment; 1.6 Where Psychodynamic Meets the Evidence: ERP, CBT, and Integration; 1.7 Working Through: Insight Alongside Symptom Relief; and 1.8 A Treatment Arc, Start to Finish.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Psychodynamic Treatment of OCD 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "Psychodynamic Treatment of OCD 101 makes \"learning to read the meaning beneath a symptom\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest interpretation the clinical evidence supports about the hidden function or conflict beneath the symptom and naming the cheapest observation that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nPsychodynamic Treatment of OCD 101 -- where the strongest honest interpretation of the conflict beneath the symptom, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Revenue Management & Pricing Analytics for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to revenue management and pricing analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Revenue Management & Pricing Analytics for Children is a self-paced, single-user web course that delivers a plain-language introduction to revenue management and pricing analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how businesses decide what to charge and how managers read demand to make better pricing decisions, never technical or jargon-heavy.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nRevenue Management & Pricing Analytics for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Foundations of Data Analytics (Short Course)": {
    emoji: "📊",
    tagline:
      "Data 101 -- A One-Unit Foundations of Data Analytics Course, From the Analytics Workflow to SQL, pandas, and Dashboards",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Data 101 is a self-paced, single-user web course that teaches the foundations most analytics tutorials rush past: what is this work, really? What does an analyst actually do? How is data structured? How do you pull the rows you need, clean the mess that's left, analyze it, and turn the result into something a team can act on?\n\nIt is a complete, taught-and-graded data analytics course delivered end to end by AI: depth-adjustable lectures, a tutor that answers questions about the exact passage you're reading, adaptive practice that meets you at your level, and homework, a unit test, and a final that are graded with written feedback. The curriculum is one focused unit -- the practical backbone an analyst meets in their first quarter -- presented as six connected topics.\n\nDesigned for students, self-learners, and instructors evaluating AI-taught coursework, Data 101 pairs a real six-topic syllabus with a built-in academic-integrity layer -- so the course is one students can trust to be fair, and instructors can trust to be honest.",
      },
      {
        emoji: "🧠",
        title: "What It Does",
        body:
          "**One-Unit Curriculum of 6 Topics** -- A complete foundations syllabus, organized by the real analytics workflow:\n\n**1.1 -- What data analytics is and the workflow.** What an analyst does and how the work differs from guessing; the ask -> collect -> clean -> analyze -> communicate loop; and why skipping a stage is where bad conclusions come from.\n\n**1.2 -- Data types, structure, and spreadsheets.** Categorical vs. numeric, continuous vs. discrete; tidy rows-and-columns structure; and working with data in a spreadsheet (Excel / Google Sheets).\n\n**1.3 -- Querying data with SQL.** Pulling exactly the rows and columns you need with SELECT, WHERE, GROUP BY, and joins.\n\n**1.4 -- Cleaning and transforming data.** Handling missing values, fixing types and formats, deduplicating, and reshaping data into an analyzable form.\n\n**1.5 -- Analysis with Python (pandas).** Loading, filtering, grouping, and aggregating data in pandas to answer real questions.\n\n**1.6 -- Data visualization and dashboards.** Choosing the right chart, telling an honest story with data, and building dashboards in Tableau / Power BI.\n\n**One Real Example per Lecture** -- Every topic grounds its idea in a concrete case -- a churn investigation, a sales table with dates stored as text, a misleading y-axis -- so abstractions always land on something you can picture.\n\n**Three-Depth Lectures** -- Every lecture reads at Short / Medium / Long length, preserving the same examples and learning objectives. Skim the concept in a minute, expand it on demand, or read the full deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the exact paragraph you're on and the answer streams back live, grounded in that lecture section. Suggested starter questions come ready for each lecture.\n\n**Adaptive Practice** -- Problem sets that get harder as you build a streak and ease off after a miss, with an explanation on every answer. Your level carries over, so each drill picks up where the last one left off.",
      },
      {
        emoji: "⚙️",
        title: "Technical Features",
        body:
          "**AI That Teaches at Your Depth** -- Lectures rewrite themselves to the length you want without losing the examples or the point, so the same topic works for a quick refresher or a deep study session.\n\n**A Tutor That Stays on Topic** -- Answers stream in live and stay anchored to the section you're reading, instead of wandering off into the whole syllabus.\n\n**Practice That Adapts in Real Time** -- Difficulty tracks your performance from problem to problem, keeping you in the productive zone between \"too easy\" and \"overwhelming.\"\n\n**Grading You Can Read** -- Assignments are scored on whether your answer means the right thing, not whether it matches a string -- and every result comes with a written rationale.\n\n**A Two-Layer Integrity Check** -- Submissions are screened both for AI-style writing and for telltale authoring behavior, catching misuse that simple text checks miss -- always with a human-readable reason.\n\n**Reasoning Diagnostics That Track Growth** -- Two original, validated-style instruments -- a dilemma-based ethical-reasoning inventory and a multiple-choice critical-reasoning test -- are administered at baseline and after the unit. Each item across both administrations is unique, every individual response is stored for later review, and the gradebook folds the diagnostics and the coursework into one weighted score (20% / 80%).\n\n**Three One-Click Self-Tests** -- The course can verify its own health end to end before you trust a session: a full system check, a simulated student run through the whole course, and an answer-key quality review that confirms every graded answer is sound.\n\n**A Real Demo, Not a Slideshow** -- The walkthrough video is the actual product in motion -- live typing, streaming answers, and synced audio -- captured straight from the running app.",
      },
      {
        emoji: "🎓",
        title: "Designed For",
        body:
          "**College Students & Self-Learners** -- A complete data analytics foundations course with on-demand tutoring and adaptive practice, no instructor required.\n\n**Anyone Switching Into a Data Role Who Wants the Fundamentals First** -- A structured tour of the concepts behind the tools: the workflow, data types, SQL, cleaning, pandas, and visualization.\n\n**Instructors Evaluating AI-Taught Coursework** -- A working example of what an AI-taught, AI-graded, integrity-screened course actually looks like from the student's seat.\n\n**Curious Minds Who Want the Ideas, Not Just the Syntax** -- Read the idea, see it in a real case, then write the answer in your own words.",
      },
      {
        emoji: "💡",
        title: "Core Idea",
        body:
          "Most analytics tutorials jump straight to the tools -- here's a SQL query, here's a pandas one-liner. Far fewer go back to the workflow underneath: what question you're actually answering, how the data is shaped, why it has to be cleaned, and how to tell an honest story with the result. This course is built around that second list.\n\nRead the idea, ground it in a real example, then state the answer in your own words -- and let the course check your reasoning fairly every step of the way.\n\nData 101 -- ask the question, work the data, tell the story.",
      },
    ],
  },
  "Baby Discrete Math": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to discrete math that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby Discrete Math is a self-paced, single-user web course that delivers a plain-language introduction to discrete mathematics -- the math of separate, distinct things (whole numbers, statements, sets, networks), the natural math of computers -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: why an \"if-then\" is false only when the 'if' is true and the 'then' is false, why a hundred examples still don't prove a rule, why {1,2,3} equals {3,2,1}, why 13 people must share a birth month, how a road map and a friendship network are the same dots-and-lines model, and how stepping onto the bottom rung and always reaching the next one lets you climb forever.",
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
  "Baby Lambda Calculus": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to the lambda calculus that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby Lambda Calculus is a self-paced, single-user web course that delivers a plain-language introduction to the lambda calculus -- the tiny language where everything is a function and computation is just substitution -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how a function with a placeholder computes by substitution, how renaming variables avoids confusion, how to build numbers and booleans out of pure functions, how recursion appears out of nowhere, and why this little language is exactly as powerful as any computer.",
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
  "Operations & Supply Chain Analytics for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to operations and supply chain analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Operations & Supply Chain Analytics for Children is a self-paced, single-user web course that delivers a plain-language introduction to operations and supply chain analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how things really move through a business and how managers read the flow to make better decisions, never technical or jargon-heavy.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nOperations & Supply Chain Analytics for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Marketing Analytics": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to marketing analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Marketing Analytics is a self-paced, single-user web course that delivers a plain-language introduction to marketing analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how we use data on what customers actually do to understand them and act and how to do it honestly, never technical or jargon-heavy.",
      },
      {
        emoji: "✨",
        title: "Features",
        body:
          "**One unit, 8 topics** -- a complete plain-language syllabus: what marketing analytics is; why \"the average customer\" doesn't exist (segmentation); the funnel, from stranger to buyer; customer lifetime value; churn; A/B testing; attribution and personalization; from insight to campaign.\n\n**Three-depth lessons** -- every lesson reads at Short / Medium / Long length, AI-rewritten while keeping the same examples and learning objectives.\n\n**Section-scoped AI tutor** -- ask about the exact paragraph you're reading; answers stream back token-by-token, grounded in that lecture section.\n\n**Adaptive practice** -- generated problem sets that get harder on a streak and ease off after a miss; per-session difficulty persists.\n\n**AI-graded assignments** -- two homework sets, a timed unit test, and a cumulative final, each scored for semantic equivalence with a written rationale and a rolled-up percent score.\n\n**Two-layer AI-authorship detection** -- every submission is screened by a static text classifier (GPTZero) and a diachronic keystroke-pattern detector, each with a human-readable verdict.\n\n**Diagnostic reasoning assessments** -- two instruments (Marketing Analytics subject reasoning and general reasoning), each in three formats and three lengths, takeable at four points in the journey. Ungraded practice with freshly generated items every attempt; coursework is 100% of the grade.\n\n**Live analytics** -- dashboard KPIs (attempts, accuracy, streak), per-topic mastery, and a recent-activity feed.\n\n**Operator diagnostics** -- one-click self-tests that verify the entire stack (database, OpenAI, GPTZero, detection, and the practice/grade loop) before you trust a session.",
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
  "Predictive Analytics for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to predictive analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Predictive Analytics for Children is a self-paced, single-user web course that delivers a plain-language introduction to predictive analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how we use patterns in the past to estimate what's likely to happen next and how to do it honestly, never technical or jargon-heavy.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nPredictive Analytics for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Baby Diagonalization and Incompleteness": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to diagonalization and incompleteness that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby Diagonalization and Incompleteness is a self-paced, single-user web course that delivers a plain-language introduction to diagonalization and incompleteness -- the single trick behind the deepest \"impossible\" results in math and computing -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how one cheeky move builds something guaranteed to differ from everything on a list, why some infinities are bigger than others, how sentences and programs can talk about themselves, and why no machine, proof system, or language can ever do everything -- from Cantor's reals and self-printing programs to the halting problem, Gödel, Tarski, and Rice.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to diagonalization and incompleteness with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBaby Diagonalization and Incompleteness -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Baby Finite Math": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to finite math that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby Finite Math is a self-paced, single-user web course that delivers a plain-language introduction to finite math -- the practical math of counting, chance, and decisions you can actually finish -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how to organize the world into sets, count possibilities without listing them all, measure how likely something is, and make the most of limited resources -- from club overlaps and card decks to interest, loans, and growth.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to finite math with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBaby Finite Math -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Baby Infinite Series": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to infinite series that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby Infinite Series is a self-paced, single-user web course that delivers a plain-language introduction to infinite series -- the math of adding forever and still getting an answer -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how a sum of infinitely many shrinking pieces, like 1/2 + 1/4 + 1/8 + ..., can settle on a single, finite total.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to infinite series with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBaby Infinite Series -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Financial & Managerial Analytics for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to financial and managerial analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Financial & Managerial Analytics for Children is a self-paced, single-user web course that delivers a plain-language introduction to financial and managerial analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how a business really makes money and how owners read the numbers to make better decisions, never technical or jargon-heavy.",
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
  "Psychodynamic Therapy 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Baby Course on the Mind Beneath the Surface -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Psychodynamic Therapy 101 is a self-paced, single-user web course -- a plain-language \"baby course\" on the mind beneath the surface: how out-of-awareness patterns, defenses, transference, and the therapeutic relationship shape how we struggle and how we change. No clinical background or jargon required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable interpretation the clinical evidence supports about the hidden dynamic earns top credit; the cautious \"we can't really conclude anything / the psyche is too complex\" dodge earns near-zero; florid padding that binds no evidence scores low; and a lurid overreach the evidence actively defeats also earns zero. Every item rewards committing to the richest supported interpretation while naming the cleanest disconfirming test.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 What Psychodynamic Therapy Is; 1.2 The Unconscious, Reconsidered; 1.3 Defense Mechanisms; 1.4 Transference; 1.5 The Therapeutic Relationship; 1.6 Insight and Working Through; 1.7 Does It Work? The Evidence; and 1.8 A Session, Start to Finish.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Psychodynamic Therapy 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "Psychodynamic Therapy 101 makes \"learning how the mind works beneath the surface\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest interpretation the clinical evidence supports about the hidden dynamic and naming the cheapest observation that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nPsychodynamic Therapy 101 -- where the strongest honest interpretation of what's happening beneath the surface, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Restaurant & Hospitality Analytics for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to restaurant and hospitality analytics that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Restaurant & Hospitality Analytics for Children is a self-paced, single-user web course that delivers a plain-language introduction to restaurant and hospitality analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept friendly and age-appropriate: it explains how a restaurant really makes money and how owners read the numbers to make better decisions, never technical or jargon-heavy.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nRestaurant & Hospitality Analytics for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Cognitive Science 101": {
    emoji: "🧭",
    tagline:
      "A One-Unit Baby Course on How the Mind Works -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Cognitive Science 101 is a self-paced, single-user web course -- a plain-language \"baby course\" on how the mind works: perception, memory, language, reasoning, machine minds, and consciousness. No math, coding, or technical background required.\n\nThe course teaches reasoning about the mind on an inverted grading scale. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The strongest, most-falsifiable conclusion the evidence supports about how the mind works earns top credit; the cautious \"we can't really conclude anything / the brain is too complex\" dodge earns near-zero; florid padding that binds no evidence scores low; and a bold claim the evidence actively defeats also earns zero. Every question rewards committing to the richest supported conclusion while naming the cleanest disconfirming test.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 What Cognitive Science Is; 1.2 The Big Idea: Mind as Information Processing; 1.3 Perception; 1.4 Memory; 1.5 Language and Thought; 1.6 Reasoning and Bias; 1.7 Brains and Machines; and 1.8 Consciousness.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Cognitive Science 101 pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "Cognitive Science 101 makes \"learning how the mind works\" an act of committed reasoning.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the strongest conclusion the evidence supports about the mind and naming the cleanest test that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nCognitive Science 101 -- where the strongest honest conclusion about how the mind works, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Baby AI Math": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to the math behind AI that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby AI Math is a self-paced, single-user web course that delivers a plain-language introduction to the math behind artificial intelligence -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No prior math or coding required. Every idea is explained intuitively in plain words rather than heavy formulas: how AI is really just numbers and arithmetic at huge scale, from turning words into vectors to teaching a network through backpropagation.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro to the math behind AI with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nBaby AI Math -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Developmental Psychology for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to developmental psychology that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Developmental Psychology for Children is a self-paced, single-user web course that delivers a plain-language introduction to developmental psychology -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept tasteful and age-appropriate: it explains the science of how people grow and change across the whole lifespan, from before birth to old age.",
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
  "Constructive Critical Reasoning": {
    emoji: "🧭",
    tagline:
      "A One-Unit Course That Trains You to Draw the Strongest Conclusion the Data Actually Supports -- Taught, Tutored, Drilled, and Graded by AI",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Constructive Critical Reasoning (CCR) is a self-paced, single-user web course that teaches the discipline of committing to the richest, most-falsifiable conclusion a body of evidence will bear -- the opposite of reflexive skepticism. No math, coding, or technical background required.\n\nCCR inverts the usual grading instinct. Most \"critical thinking\" rewards caution: the more hedged the answer, the safer it feels. Here, hedging is the failure mode. The richest, most-falsifiable, most-committed model earns top credit; the cautious \"you can't really conclude anything\" dodge earns near-zero; florid padding that binds no data scores low; and a bold claim the data actively defeats also earns zero. Every question rewards committing harder to the most, while exposing the cleanest disconfirming test.\n\nThe curriculum is organized into one unit and 8 sections: 1.1 The Fecund Lead; 1.2 Model Selection by Explanatory Yield; 1.3 Parsimony as a Live Constraint; 1.4 Abductive Commitment; 1.5 From Correlation to Mechanism; 1.6 The Anomaly Cluster; 1.7 The Cheap Decisive Test; and 1.8 Calibrated Boldness.\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, CCR pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "Constructive Critical Reasoning reframes \"critical thinking\" as a constructive act.\n\nIt doesn't reward the student for finding reasons to doubt -- it rewards them for committing to the richest model the evidence supports and naming the cleanest test that could prove them wrong. The course teaches that, tutors it, drills it, grades it on an inverted partial-credit scale, screens submissions for misuse, and proves the whole pipeline still works with a single click.\n\nConstructive Critical Reasoning -- where the strongest honest conclusion, not the safest hedge, earns the grade.",
      },
    ],
  },
  "Data Analytics for Children": {
    emoji: "🔎",
    tagline:
      "A Friendly, One-Unit Intro to Data Analytics That Teaches, Tutors, Drills, and Grades Itself -- No Math, Coding, or Spreadsheets Required",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Data Analytics for Children is a self-paced, single-user web course that delivers a friendly, plain-language introduction to data analytics -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, spreadsheets, SQL, or other technical skills required.\n\nIt turns the everyday habit of noticing, comparing, and counting into one product: read each lesson at the depth you want, ask a tutor scoped to the exact section you're on, drill questions whose difficulty adapts to you in real time, and submit homework, a unit test, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nThe curriculum is one unit -- \"Data Analytics for Everyone\" -- across 6 connected topics:\n\n**What is data, really?**\n\n**Spotting patterns**\n\n**Asking a good question**\n\n**Sorting, grouping, and counting**\n\n**Seeing the story**\n\n**From hunch to decision**\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Data Analytics for Children pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "This project is a pnpm monorepo with path-routed artifacts behind a shared reverse proxy:\n\n**artifacts/qr-course** -- the student-facing web app (React + Vite), served at /. This is Data Analytics for Children.\n\n**artifacts/api-server** -- the shared Express backend (lessons, tutor streaming, practice, grading, detection, diagnostics, analytics).\n\n**lib/api-spec** -- the OpenAPI source of truth plus generated React Query hooks and Zod schemas.\n\n**lib/db** -- the database schema and client (PostgreSQL via the project's DATABASE_URL).\n\n**artifacts/qr-course-demo, artifacts/diagnostics-demo** -- standalone demo-video artifacts that showcase the product.",
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
          "Data Analytics for Children reframes an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nData Analytics for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Criminal Psychology for Children": {
    emoji: "🔎",
    tagline:
      "A friendly, one-unit intro to criminal psychology that teaches, tutors, drills, and grades itself -- for curious students and adults alike.",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Criminal Psychology for Children is a self-paced, single-user web course that delivers a plain-language introduction to criminal psychology -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, or statistics required. The material is kept tasteful and age-appropriate: it explains the science of why people offend and how the justice system reasons, never anything graphic or sensational.",
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
          "**Middle Schoolers & Curious Adults** -- a complete, plain-language intro with on-demand tutoring and adaptive practice.\n\n**Instructors & Curriculum Designers** -- a working reference for AI-taught, AI-graded, AI-detection-screened coursework.\n\n**Academic-Integrity Researchers** -- a live testbed for layered AI-authorship detection (text classification + keystroke behavior).\n\n**Product & Engineering Teams** -- a reference implementation of contract-first full-stack architecture, streaming AI UX, and self-diagnostic tooling.\n\nCriminal Psychology for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Baby AI": {
    emoji: "🤖",
    tagline:
      "A Friendly, One-Unit Intro to Artificial Intelligence That Teaches, Tutors, Drills, and Grades Itself -- No Math, Coding, or Prior Science Required",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Baby AI is a self-paced, single-user web course that delivers a friendly, plain-language introduction to artificial intelligence -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, spreadsheets, or prior science required.\n\nIt turns one big idea -- that modern AI is a pattern-finding machine that learns from data and predicts likely answers, not a thinking, all-knowing mind -- into one product: read each lesson at the depth you want, ask a tutor scoped to the exact section you're on, drill questions whose difficulty adapts to you in real time, and submit homework, a unit test, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nThe curriculum is one unit -- \"Baby AI for Everyone\" -- across 8 connected topics:\n\n**What AI is (and isn't)**\n\n**Rules vs. learning (the two paradigms)**\n\n**Data and training (what \"learning\" actually means)**\n\n**Pattern recognition (the core idea behind it all)**\n\n**Neural networks and deep learning**\n\n**Language models (how AI predicts text, and what \"generative\" means)**\n\n**Strengths, limits, and hallucination**\n\n**Using AI well, and where it's headed**\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Baby AI pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "This project is a pnpm monorepo with path-routed artifacts behind a shared reverse proxy:\n\n**artifacts/qr-course** -- the student-facing web app (React + Vite), served at /. This is Baby AI.\n\n**artifacts/api-server** -- the shared Express backend (lessons, tutor streaming, practice, grading, detection, diagnostics, analytics).\n\n**lib/api-spec** -- the OpenAPI source of truth plus generated React Query hooks and Zod schemas.\n\n**lib/db** -- the database schema and client (PostgreSQL via the project's DATABASE_URL).\n\n**artifacts/course-promo, artifacts/qr-course-demo, artifacts/diagnostics-demo** -- standalone demo/promo-video artifacts that showcase the product.",
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
          "Baby AI reframes an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nBaby AI -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
      },
    ],
  },
  "Evolutionary Psychology for Children": {
    emoji: "🧠",
    tagline:
      "A Friendly, One-Unit Intro to Evolutionary Psychology That Teaches, Tutors, Drills, and Grades Itself -- No Math, Coding, or Prior Science Required",
    sections: [
      {
        emoji: "🧩",
        title: "Overview",
        body:
          "Evolutionary Psychology for Children is a self-paced, single-user web course that delivers a friendly, plain-language introduction to evolutionary psychology -- taught, tutored, drilled, and graded entirely by AI, with built-in academic-integrity enforcement. No math, coding, spreadsheets, or prior science required.\n\nIt turns one big idea -- that your mind has a history, and your everyday feelings are tools shaped to help your ancestors survive and connect -- into one product: read each lesson at the depth you want, ask a tutor scoped to the exact section you're on, drill questions whose difficulty adapts to you in real time, and submit homework, a unit test, and a final that are AI-graded with feedback and screened for AI-generated answers.\n\nThe curriculum is one unit -- \"Evolutionary Psychology for Everyone\" -- across 6 connected topics:\n\n**The mind has a history**\n\n**Built to survive (cravings, fears, and beauty)**\n\n**The logic of attraction**\n\n**Love, jealousy, and keeping a mate**\n\n**Why we cooperate**\n\n**Why we fight -- and believe**\n\nDesigned for middle schoolers, curious adults wanting brief but meaningful exposure, instructors evaluating AI-taught coursework, and researchers studying AI academic integrity, Evolutionary Psychology for Children pairs a real curriculum with two layers of AI-authorship detection -- surfacing not just whether the writing looks AI-generated, but whether the act of producing it did.",
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
          "This project is a pnpm monorepo with path-routed artifacts behind a shared reverse proxy:\n\n**artifacts/qr-course** -- the student-facing web app (React + Vite), served at /. This is Evolutionary Psychology for Children.\n\n**artifacts/api-server** -- the shared Express backend (lessons, tutor streaming, practice, grading, detection, diagnostics, analytics).\n\n**lib/api-spec** -- the OpenAPI source of truth plus generated React Query hooks and Zod schemas.\n\n**lib/db** -- the database schema and client (PostgreSQL via the project's DATABASE_URL).\n\n**artifacts/course-promo, artifacts/qr-course-demo, artifacts/diagnostics-demo** -- standalone demo/promo-video artifacts that showcase the product.",
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
          "Evolutionary Psychology for Children reframes an AI-taught course as a closed accountability loop.\n\nIt doesn't just teach the material and grade the homework -- it teaches, tutors, drills, grades, detects misuse, and proves the whole pipeline still works with a single click. The result is a self-paced course that students can actually trust to be fair, and that instructors can actually trust to be honest.\n\nEvolutionary Psychology for Children -- where the curriculum, the tutor, the grader, and the integrity check all live in one room.",
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
    { title: "Evolutionary Psychology for Children", url: "https://babyevopsych.xyz" },
    {
      title: "Baby AI",
      url: "https://babyartificialintelligence.xyz",
      badge: {
        image: aiFundamentalsBadge,
        url: "https://credsverse.com/credentials/dc3dd4b6-52d9-4468-b39a-acaf50c76352",
        label: "AI Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Baby AI Math",
      url: "https://babyaimath.xyz",
      badge: {
        image: aiMathFundamentalsBadge,
        url: "https://credsverse.com/credentials/57cebc9f-f4aa-4ef5-a05d-47bd0bf26c0d",
        label: "AI Math Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Baby Diagonalization and Incompleteness",
      url: "https://diagonalization.xyz",
      badge: {
        image: diagonalizationBadge,
        url: "https://credsverse.com/credentials/38c91731-2f69-4b98-9000-607927046ec5",
        label: "Diagonalization and Incompleteness -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Baby Finite Math",
      url: "https://babyfinitemath.xyz",
      badge: {
        image: finiteMathBadge,
        url: "https://credsverse.com/credentials/b7480ea3-bc7b-4a60-9099-7bc82db18bc8",
        label: "Basic Finite Math -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Cognitive Science 101",
      url: "https://babycognitivescience101.xyz",
      badge: {
        image: cognitiveScienceBadge,
        url: "https://credsverse.com/credentials/a2c4a47b-23d5-4e11-b7ff-346e89b2a6ff",
        label: "Cognitive Science Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Baby Infinite Series",
      url: "https://babyinfiniteseries.xyz",
      badge: {
        image: infiniteSeriesBadge,
        url: "https://credsverse.com/credentials/e5570034-5374-47e8-8cbf-d8e75c3969f8",
        label: "Infinite Series Fundamentals -- Course Completed (issued to Douglas Zhi)",
      },
    },
    {
      title: "Constructive Critical Reasoning",
      url: "https://babyconstructivereasoning.xyz",
      badge: {
        image: constructiveReasoningBadge,
        url: "https://credsverse.com/credentials/baf24cb4-85ef-4d44-b64f-116c1efd7968",
        label: "Basic Constructive Critical Reasoning -- Course Completed (issued to Douglas Zhi)",
      },
    },
    { title: "Criminal Psychology for Children", url: "https://babycrimpsych.xyz" },
    { title: "Data Analytics for Children", url: "https://babyanalytics.xyz" },
    { title: "Developmental Psychology for Children", url: "https://babydevelopmentalpsychology.xyz" },
    { title: "Financial & Managerial Analytics for Children", url: "https://babyfinancialanalytics.xyz" },
    { title: "Foundations of Data Analytics (Short Course)", url: "https://analytics101.xyz" },
    { title: "Baby Discrete Math", url: "https://babydiscretemath.xyz" },
    { title: "Baby Lambda Calculus", url: "https://babylambdacalculus.xyz" },
    { title: "Marketing Analytics", url: "https://babymarketinganalytics.xyz" },
    { title: "Operations & Supply Chain Analytics for Children", url: "https://babysupplychain.xyz" },
    { title: "Predictive Analytics for Children", url: "https://babypredictiveanalytics.xyz" },
    { title: "Revenue Management & Pricing Analytics for Children", url: "https://babyrevenuemanagement.xyz" },
    { title: "Psychodynamic Therapy 101", url: "https://babypsychodynamictherapy.xyz" },
    { title: "Psychodynamic Treatment of BPD 101", url: "https://psychodynamicbpdtherapy.xyz" },
    { title: "Psychodynamic Treatment of OCD 101", url: "https://psychodynamicocdtherapy.xyz" },
    { title: "Restaurant & Hospitality Analytics for Children", url: "https://babyrestaurantanalytics.xyz" },
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
            Baby Living Courses
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
