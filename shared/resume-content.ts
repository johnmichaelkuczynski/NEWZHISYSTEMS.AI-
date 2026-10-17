export const organizations = [
  { value: "law", label: "Law Firm / Litigation Support" },
  { value: "finance", label: "Hedge Fund / Trading Firm" },
  { value: "operations", label: "Corporate Operations" },
  { value: "research", label: "Research Organization / Think Tank" },
  { value: "education", label: "Educational Institution" },
  { value: "general", label: "General" },
] as const;

export type Organization = (typeof organizations)[number]["value"];
export interface ResumeProject {
  name: string;
  url: string;
  description: string;
}

const apps = {
  genius: {
    name: "Genius 101", url: "https://genius101.xyz",
    description: "Supports thinker-based dialogue, debate, and long-form writing for researchers, educators, and writers.",
  },
  verifier: {
    name: "Forensic Document Verifier", url: "https://forensicdocumentverifier.com",
    description: "Examines PDF metadata and structural inconsistencies for legal, financial, and investigative document review.",
  },
  model: {
    name: "Model Transformer", url: "https://modeltransformer.ink",
    description: "Generates equivalent formulations of formal models for researchers and analysts.",
  },
  text: {
    name: "Text Surgeon Plus", url: "https://textsurgeonplus.xyz/",
    description: "Edits and rewrites text for writers and professionals preparing documents.",
  },
  soxl: {
    name: "SOXL Options Edge", url: "https://soxledge.xyz",
    description: "Provides SOXL options analysis and decision support for options traders.",
  },
  forex: {
    name: "USD/HKD Edge", url: "https://usdhkd.ink",
    description: "Models exchange-rate distributions and backtests forecasts for quantitative researchers and currency analysts.",
  },
  books: {
    name: "Living Book Creator", url: "https://livingbookcreator.xyz/",
    description: "Creates interactive books for authors and educators.",
  },
  ocr: {
    name: "OCR Pro", url: "https://ocrman.shop",
    description: "Extracts text from scanned PDFs, images, and Word documents for document-review professionals.",
  },
  treatise: {
    name: "Treatise Pro", url: "https://treatisepro.com",
    description: "Analyzes written arguments and checks their reasoning for researchers, lawyers, and analysts.",
  },
  framewise: {
    name: "FrameWise", url: "https://framewise.ink",
    description: "Rewrites messages for professionals adapting communications to particular audiences and relationships.",
  },
} satisfies Record<string, ResumeProject>;

const courses: ResumeProject[] = [
  { name: "AI Math", url: "https://babyaimath.xyz", description: "Teaches AI mathematics with tutoring and assessment for learners." },
  { name: "Calculus", url: "https://calculus101.ink", description: "Teaches calculus through lessons and practice for students." },
  { name: "Precalculus", url: "https://precalculus101.ink", description: "Teaches functions and trigonometry for calculus-bound students." },
  { name: "Trigonometry", url: "https://trigonometry.ink", description: "Teaches triangles, waves, and identities for mathematics learners." },
  { name: "Geometry", url: "https://basicgeometry.ink", description: "Teaches geometric reasoning and proof for students." },
  { name: "Data Analytics", url: "https://babyanalytics.xyz", description: "Teaches data analysis through guided practice for beginners." },
  { name: "Predictive Analytics", url: "https://babypredictiveanalytics.xyz", description: "Teaches predictive analysis with assessment for learners." },
  { name: "Financial & Managerial Analytics", url: "https://babyfinancialanalytics.xyz", description: "Teaches financial and managerial analysis for business learners." },
  { name: "Marketing Analytics", url: "https://babymarketinganalytics.xyz", description: "Teaches marketing analysis with practice for business learners." },
  { name: "AI", url: "https://ai101.ink", description: "Teaches artificial intelligence through graded coursework for beginners." },
];

export const resumes: Record<Organization, { summary: string; projects: ResumeProject[] }> = {
  general: {
    summary: "Using AI-driven development, I design and ship production tools quickly to help firms put AI to practical use.",
    projects: [apps.genius, apps.verifier, apps.model, apps.text, apps.soxl, apps.books],
  },
  law: {
    summary: "Using AI-driven development, I rapidly build tools for document verification, text extraction, and analytical review—not substitutes for legal judgment.",
    projects: [apps.verifier, apps.ocr, apps.treatise],
  },
  finance: {
    summary: "Using AI-driven development, I rapidly build analytical systems for options, currency forecasting, and formal models—not guarantees of trading performance.",
    projects: [apps.soxl, apps.forex, apps.model],
  },
  operations: {
    summary: "Using AI-driven development, I rapidly build practical systems for document processing, verification, writing, and professional communication.",
    projects: [apps.ocr, apps.verifier, apps.text, apps.framewise],
  },
  research: {
    summary: "Using AI-driven development, I rapidly build tools for examining arguments, transforming formal models, and exploring ideas.",
    projects: [apps.genius, apps.model, apps.treatise],
  },
  education: {
    summary: "Using AI-driven development, I rapidly build course platforms with tutoring, practice, and assessment. These are systems I built, not credentials I earned.",
    projects: courses,
  },
};

// Curated public excerpts only. Uploaded conversations contain speculative advice
// and sample client claims: those are deliberately excluded from this index.
// Retrieval returns stored text verbatim; no model can invent biographical facts.
interface Source { label: string; url?: string }
interface IndexedPassage {
  aliases: string[];
  text: string;
  source: Source;
}
const siteSource = { label: "Zhi Systems app catalog", url: "/utilities" };
const courseSource = { label: "Zhi Systems certification catalogs", url: "/courses" };
const backgroundSource = { label: "Owner-supplied professional history and resume material" };

export const resumeIndex: IndexedPassage[] = [
  ...Object.values(apps).map(app => ({
    aliases: [app.name.toLowerCase(), ...(app === apps.forex ? ["forex edge", "usd hkd edge"] : [])],
    text: `${app.name} — ${app.description} ${app.url}`,
    source: siteSource,
  })),
  ...courses.map(course => ({
    aliases: [course.name.toLowerCase()],
    text: `${course.name} — ${course.description} This is a course platform built by Dr. Kuczynski, not a credential earned. ${course.url}`,
    source: courseSource,
  })),
  {
    aliases: ["madison", "madison educational consulting"],
    text: "Madison Educational Consulting, 2015–2025: Private advisory practice producing research reports and analytical writing for executives and professionals.",
    source: backgroundSource,
  },
  {
    aliases: ["bard", "bard college"],
    text: "Bard College: Assistant Professor & Research Professor, 2012–2015.",
    source: backgroundSource,
  },
  {
    aliases: ["vcu", "virginia commonwealth university"],
    text: "VCU: Assistant Professor of Philosophy, 2007–2012.",
    source: backgroundSource,
  },
  {
    aliases: ["education", "academic qualifications", "degrees", "academic background"],
    text: "PhD, University of California, Santa Barbara. BA, University of California, Los Angeles, summa cum laude.",
    source: backgroundSource,
  },
  {
    aliases: ["experience", "prior experience", "professional background", "background"],
    text: "Founder and AI-Architect at Zhi Systems. Madison Educational Consulting, 2015–2025. Bard College, Assistant Professor & Research Professor, 2012–2015. VCU, Assistant Professor of Philosophy, 2007–2012.",
    source: backgroundSource,
  },
  {
    aliases: ["zhi systems", "work", "apps", "portfolio"],
    text: "Dr. Kuczynski builds AI systems that reason, using AI-driven development to design and ship production tools quickly. His stated portfolio includes 90+ built and deployed apps across document analysis, writing, research, finance, and education.",
    source: { label: "Owner-supplied positioning and Zhi Systems catalog", url: "/utilities" },
  },
  {
    aliases: ["courses", "course platforms", "certification courses", "educational systems"],
    text: `Course platforms built include ${courses.map(course => course.name).join(", ")}. These are products built, not qualifications earned.`,
    source: { label: "Uploaded Edtech / Certification Course Systems resume material and course catalog", url: "/courses" },
  },
  {
    aliases: ["contact", "email"],
    text: "Contact John-Michael Kuczynski at jmkuczynski@yahoo.com to discuss a project.",
    source: backgroundSource,
  },
];

export const RESUME_UNKNOWN = "That isn't covered here — contact John-Michael directly.";
const normalize = (text: string) => text.toLowerCase().replace(/[’]/g, "'").replace(/[?!.,]+$/g, "").trim();

// Conservative intent retrieval: only supported informational questions map to
// a passage. A topic name alone never makes an unsupported claim answerable.
export function answerResumeQuestion(question: string): { answer: string; sources: Source[] } {
  if (!question.trim() || question.length > 500) return { answer: RESUME_UNKNOWN, sources: [] };
  let query = normalize(question).replace(/^please\s+/, "");
  const directQuestions: Record<string, string> = {
    "what is your background": "background",
    "what's your background": "background",
    "what is his background": "background",
    "what experience do you have": "experience",
    "where have you worked": "experience",
    "where did you teach": "experience",
    "what are your qualifications": "education",
    "what degrees do you have": "education",
    "where did you study": "education",
    "where did you get your phd": "education",
    "where did you get your ba": "education",
    "what have you built": "portfolio",
    "what apps have you built": "apps",
    "how many apps have you built": "apps",
    "how many apps have you deployed": "apps",
    "what courses have you built": "courses",
    "which courses have you built": "courses",
    "how can i contact you": "contact",
    "how do i contact you": "contact",
    "what is your email": "email",
  };
  query = directQuestions[query] ?? query;
  const topics = [query];
  for (const pattern of [
    /^(?:tell me about|describe|explain|what is|what's|what are)\s+(?:your |his |the )?(.+)$/,
    /^what does (.+) do$/,
    /^how does (.+) work$/,
    /^who is (.+) (?:for|designed for)$/,
    /^what (?:is|was) your (?:role|work|position) at (.+)$/,
    /^when did you work at (.+)$/,
  ]) {
    const match = query.match(pattern);
    if (match) topics.push(match[1]);
  }
  const passage = resumeIndex.find(item => item.aliases.some(alias => topics.includes(normalize(alias))));
  return passage
    ? { answer: passage.text, sources: [passage.source] }
    : { answer: RESUME_UNKNOWN, sources: [] };
}
