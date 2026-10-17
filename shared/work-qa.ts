export interface WorkAnswer {
  answer: string;
  sources: { label: string; url: string; evidence: string }[];
}

export const WORK_QUESTION_LIMIT = 500;
export const WORK_UNKNOWN = "I don't have that detail — email John-Michael at jmkuczynski@yahoo.com.";
export const WORK_TEST_QUESTIONS = [
  "What does Text Surgeon do?",
  "Has he built anything for lawyers?",
  "What finance tools has he built?",
  "What has he published on AI?",
  "Can he build a custom tool for my firm?",
  "What is Genius 101?",
] as const;
