import type { WorkAnswer } from "@shared/work-qa";

export async function askWorkQuestion(question: string, signal: AbortSignal): Promise<WorkAnswer> {
  const response = await fetch("/api/work-question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
    signal,
  });
  let body: any;
  try { body = await response.json(); }
  catch { throw new Error("The answer service returned an unreadable response. Please try again."); }
  if (!response.ok) throw new Error(typeof body?.error === "string" ? body.error : "The answer service is unavailable. Please try again.");
  if (typeof body?.answer !== "string" || !Array.isArray(body.sources) || body.sources.some((source: any) =>
    typeof source?.label !== "string" || typeof source?.url !== "string" || !/^(https:\/\/|mailto:)/.test(source.url) || typeof source?.evidence !== "string"
  )) throw new Error("The answer service returned an invalid response. Please try again.");
  return body;
}
