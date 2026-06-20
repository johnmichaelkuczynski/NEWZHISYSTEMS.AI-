import { useState } from "react";
import NavBar from "@/components/NavBar";
import dataAnalyticsBadge from "@assets/BASIC_DATA_ANALYTICS_1781998712125.png";

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
  videoUrl?: string;
  badge?: Badge;
}

const courseDescriptions: Record<string, CourseDescription> = {
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
    { title: "Basic Financial & Managerial Analytics", url: "https://babyfinancialanalytics.xyz", videoUrl: "https://youtu.be/VTIJZvoe150" },
    { title: "Basic Marketing Analytics", url: "https://babymarketinganalytics.xyz", videoUrl: "https://youtu.be/hQ3JuHB8zBw" },
    { title: "Basic Operations & Supply Chain Analytics", url: "https://babysupplychain.xyz", videoUrl: "https://youtu.be/jh6b0Ap4DTU" },
    { title: "Basic Predictive Analytics", url: "https://babypredictiveanalytics.xyz", videoUrl: "https://youtu.be/wa7D4OKA3WA" },
    { title: "Basic Revenue Management & Pricing Analytics", url: "https://babyrevenuemanagement.xyz", videoUrl: "https://youtu.be/2Xpo610YqYc" },
    { title: "Basic Restaurant & Hospitality Analytics", url: "https://babyrestaurantanalytics.xyz", videoUrl: "https://youtu.be/aM-ZePWbF_4" },
    { title: "Basic Workforce Analytics", url: "https://babyworkforceanalytics.xyz", videoUrl: "https://youtu.be/rOINDQbLd7U" },
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
