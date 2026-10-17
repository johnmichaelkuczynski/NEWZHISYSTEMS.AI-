export const organizations = [
  { value: "law", label: "Law Firm / Litigation Support" },
  { value: "finance", label: "Hedge Fund / Trading Firm" },
  { value: "operations", label: "Corporate Operations" },
  { value: "research", label: "Research Organization / Think Tank" },
  { value: "education", label: "Educational Institution" },
  { value: "general", label: "General" },
] as const;
export type Organization = (typeof organizations)[number]["value"];
export interface ResumeProject { id: string; name: string; url: string; description: string }
const app = (id: string, name: string, url: string, description: string): ResumeProject => ({ id, name, url, description });
export const apps = {
  genius: app("genius", "Genius 101", "https://genius101.xyz", "Converse with major thinkers; answers are grounded in retrieval from their actual texts, not free invention."),
  noir: app("noir", "Noir Comic Generator", "https://noircomics.ink", "Turns a script or a one-line idea into a film-noir comic; upload a photo and the main character is drawn from it."),
  verifier: app("verifier", "Forensic Document Verifier", "https://forensicdocumentverifier.com", "Examines PDF metadata and structural inconsistencies for legal, financial, and investigative document review."),
  ocr: app("ocr", "OCR Pro", "https://ocrman.shop", "Extracts text from scanned PDFs, images, and Word documents for document-review professionals."),
  treatise: app("treatise", "Treatise Pro", "https://treatisepro.com", "Analyzes written arguments and checks their reasoning for researchers, lawyers, and analysts."),
  audio: app("audio", "Audio Transcriber Plus", "https://audiotranscriber.ink", "Transcribes audio recordings into text for review and analysis."),
  soxl: app("soxl", "SOXL Options Edge", "https://soxledge.xyz", "Provides SOXL options analysis and decision support for options traders."),
  forex: app("forex", "Forex Edge", "https://usdhkd.ink", "Models exchange-rate distributions and backtests forecasts for quantitative researchers and currency analysts."),
  model: app("model", "Model Transformer", "https://modeltransformer.ink", "Generates equivalent formulations of formal models for researchers and analysts."),
  llm: app("llm", "LLM Plus", "https://llmplus.ink", "Routes conversations across multiple AI models while preserving project memory for long-running intellectual work."),
  text: app("text", "Text Surgeon Plus", "https://textsurgeonplus.xyz/", "Edits and rewrites text for writers and professionals preparing documents."),
  goals: app("goals", "Smart Goal Tracker", "https://smartgoaltracker.xyz", "Tracks calendar-based tasks and long-term goals with completion and follow-through analytics."),
  freud: app("freud", "Freud GPT", "https://freudgpt.me", "Supports conversations with thinkers in psychoanalysis, philosophy, and critical theory grounded in their writings."),
  books: app("books", "Living Book Creator", "https://livingbookcreator.xyz/", "Creates interactive books for authors and educators."),
  grader: app("grader", "EZGrader", "https://ezgrader.ai", "Evaluates, annotates, and returns student coursework with AI-generated grading and feedback."),
  test: app("test", "Test Me", "https://testme101.com", "Generates customizable examinations from uploaded study material and grades responses with feedback."),
  reader: app("reader", "EZ Reader", "https://ezreader.ai", "Processes, transforms, and refines documents with multiple AI models and reference-guided writing tools."),
  college: app("college", "College AI Match", "https://collegeaimatch.xyz", "Identifies US colleges for AI-powered course replacement and prepares outreach proposals and contact data."),
};
export const baseCourses = [
  app("machine-learning", "Machine Learning and Applied AI", "https://machinelearning101.xyz", "AI-taught certification coursework in machine learning and applied AI."),
  app("generative-ai", "Generative AI Integration", "https://generativeai.ink", "AI-taught certification coursework in generative AI integration."),
  app("governance", "Ethical AI & Governance Technology", "https://aigovernance.ink", "AI-taught certification coursework in ethical AI and governance technology."),
  app("predictive", "Predictive Analytics", "https://babypredictiveanalytics.xyz", "Teaches predictive analysis with tutoring, practice, and assessment."),
  app("analytics", "Data Analytics", "https://babyanalytics.xyz", "Teaches data analysis through guided practice for beginners."),
  app("math", "AI Math", "https://aimath1.xyz", "Teaches AI mathematics with tutoring and assessment for learners."),
];
const financeCourses = [
  app("portfolio", "Portfolio Analysis", "https://portfolioanalysis101.ink", "AI-taught certification coursework in portfolio analysis."),
  app("financial", "Financial & Managerial Analytics", "https://babyfinancialanalytics.xyz", "Teaches financial and managerial analysis for business learners."),
];
const educationCourses = [
  app("hospitality", "Restaurant & Hospitality Analytics", "https://babyrestaurantanalytics.xyz", "Teaches restaurant and hospitality analytics with AI tutoring and assessment."),
  app("revenue", "Revenue Management & Pricing Analytics", "https://basicrevenuemanagement.xyz", "Teaches revenue management and pricing through AI-guided lessons, practice, and assessment."),
];
export function coursesFor(organization: Organization) {
  if (organization === "finance") return [...baseCourses.slice(0, 4), ...financeCourses];
  if (organization === "education") return [...baseCourses, ...educationCourses];
  return baseCourses;
}
export const resumes: Record<Organization, { summary: string; projects: ResumeProject[] }> = {
  general: {
    summary: "Using AI-driven development, I design and ship production tools quickly to help firms put AI to practical use.",
    projects: [apps.verifier, apps.soxl, apps.text, apps.llm],
  },
  law: {
    summary: "Using AI-driven development, I rapidly build tools for document verification, text extraction, transcription, and analytical review—not substitutes for legal judgment.",
    projects: [apps.verifier, apps.ocr, apps.treatise, apps.audio],
  },
  finance: {
    summary: "Using AI-driven development, I rapidly build analytical systems for options, currency forecasting, and formal models—not guarantees of trading performance.",
    projects: [apps.soxl, apps.forex, apps.model],
  },
  operations: {
    summary: "Using AI-driven development, I rapidly build practical systems for persistent AI collaboration, document verification, writing, and tracking follow-through.",
    projects: [apps.llm, apps.text, apps.verifier, apps.goals],
  },
  research: {
    summary: "Using AI-driven development, I rapidly build tools for examining arguments, transforming formal models, exploring ideas, and creating interactive publications.",
    projects: [apps.freud, apps.treatise, apps.model, apps.books],
  },
  education: {
    summary: "Using AI-driven development, I rapidly build educational tools and course platforms with tutoring, practice, and assessment. These are systems I built, not credentials I earned.",
    projects: [apps.grader, apps.test, apps.reader, apps.college],
  },
};
export function projectsFor(organization: Organization) {
  return [apps.genius, apps.noir, ...resumes[organization].projects];
}
