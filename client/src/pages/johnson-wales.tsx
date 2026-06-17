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
          "**One-Unit Curriculum of 6 Topics** -- A complete foundations syllabus, organized by the real analytics workflow:\n\n**1.1 -- What data analytics is and the workflow.** What an analyst does and how the work differs from guessing; the ask -> collect -> clean -> analyze -> communicate loop; and why skipping a stage is where bad conclusions come from.\n\n**1.2 -- Data types, structure, and spreadsheets.** Categorical vs. numeric, continuous vs. discrete; tidy rows-and-columns structure; and working with data in a spreadsheet (Excel / Google Sheets).\n\n**1.3 -- Querying data with SQL.** Pulling exactly the rows and columns you need with SELECT, WHERE, GROUP BY, and joins.\n\n**1.4 -- Cleaning and transforming data.** Handling missing values, fixing types and formats, deduplicating, and reshaping data into an analyzable form.\n\n**1.5 -- Analysis with Python (pandas).** Loading, filtering, grouping, and aggregating data in pandas to answer real questions.\n\n**1.6 -- Data visualization and dashboards.** Choosing the right chart, telling an honest story with data, and building dashboards in Tableau / Power BI.\n\n**One Real Example per Lecture** -- Every topic grounds its idea in a concrete case -- a churn investigation, a sales table with dates stored as text, a misleading y-axis -- so abstractions always land on something you can picture.\n\n**Three-Depth Lectures** -- Every lecture reads at Short / Medium / Long length, preserving the same examples and learning objectives. Skim the concept in a minute, expand it on demand, or read the full deep cut.\n\n**Section-Scoped AI Tutor** -- Ask a question about the exact paragraph you're on and the answer streams back live, grounded in that lecture section. Suggested starter questions come ready for each lecture.\n\n**Adaptive Practice** -- Problem sets that get harder as you build a streak and ease off after a miss, with an explanation on every answer. Your level carries over, so each drill picks up where the last left off.\n\n**Graded Assignments** -- The unit ships with homework, a timed unit test, and a cumulative final exam. Every submission is graded with per-problem feedback and a percent score on the attempt.\n\n**Built-In Diagnostic Reasoning Assessments** -- Two original reasoning instruments run alongside the coursework and measure how your thinking grows over the course:\n\n**Ethical Reasoning (dilemma-based).** Read a data-work dilemma -- a misleading chart, a question of using private user data -- decide what the person should do, then rate how much each of a dozen considerations weighed on you and rank your top few -- a behavioral measure of which kinds of reasons drive your judgment, not whether you picked a \"correct\" answer.\n\n**Critical Reasoning (multiple-choice).** Ten questions spanning the five core thinking skills -- analysis, inference, evaluation, deduction, and induction.\n\n**Given twice each.** Once as a baseline before the unit, then again after it -- so your end-of-course reasoning can be compared against where you started. Every question across both administrations is mutually unique, so retaking never means repeating an item.\n\n**Pass on submit, with written feedback.** Completing an instrument counts as a pass and returns a plain-language critique of your reasoning; skipping it is a fail. The two diagnostics jointly count for 20% of your final grade, with coursework the other 80%.\n\n**Built-in prep.** Short primer lectures teach the method behind each instrument before you sit it.\n\n**Built-In Academic-Integrity Check** -- Every submitted answer is screened for signs of AI authorship, and each verdict comes with a plain-language explanation rather than an opaque flag.\n\n**Live Analytics** -- A dashboard of progress at a glance: attempts, accuracy, and streak; per-topic mastery; and a recent-activity feed that surfaces weak spots and momentum.",
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

export default function JohnsonWales() {
  const courses: Course[] = [
    { title: "Foundations of Data Analytics (Short Course)", url: "https://analytics101.xyz" },
    { title: "Data Analytics for Children", url: "https://babyanalytics.xyz" },
    { title: "Financial & Managerial Analytics for Children", url: "https://babyfinancialanalytics.xyz" },
    { title: "Marketing Analytics", url: "https://babymarketinganalytics.xyz" },
    { title: "Predictive Analytics for Children", url: "https://babypredictiveanalytics.xyz" },
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
            Johnson &amp; Wales
          </h1>
          <p className="text-gray-700 text-lg">
            AI-powered courses developed for Johnson &amp; Wales.
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
        )}
      </div>
    </div>
  );
}
