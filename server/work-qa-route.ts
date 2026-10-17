import express, { type Express, type RequestHandler } from "express";
import { z } from "zod";
import { WORK_QUESTION_LIMIT } from "../shared/work-qa";
import { answerWorkQuestion, configuredCompletion, WorkQaError, type Complete } from "./work-qa";

const requestSchema = z.object({ question: z.string().trim().min(1).max(WORK_QUESTION_LIMIT) }).strict();

export function registerWorkQa(app: Express, getCompletion: () => Complete = configuredCompletion, options: {
  perMinute?: number; globalPerHour?: number; concurrency?: number;
} = {}) {
  const clients = new Map<string, { count: number; reset: number }>();
  let active = 0;
  let globalCount = 0;
  let globalReset = 0;
  const handler: RequestHandler = async (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    const parsed = requestSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: `Enter a question between 1 and ${WORK_QUESTION_LIMIT} characters; send only the question field.` });
      return;
    }
    const now = Date.now();
    clients.forEach((entry, key) => { if (entry.reset <= now) clients.delete(key); });
    const ip = req.ip || req.socket.remoteAddress || "unknown";
    // Do not trust caller-controlled X-Forwarded-For. Express's configured
    // trust-proxy policy owns req.ip; the global cap also bounds shared proxies.
    const entry = clients.get(ip) ?? { count: 0, reset: now + 60_000 };
    if (globalReset <= now) { globalCount = 0; globalReset = now + 3_600_000; }
    if (entry.count >= (options.perMinute ?? 6) || globalCount >= (options.globalPerHour ?? 120) || clients.size >= 5000 && !clients.has(ip)) {
      res.setHeader("Retry-After", String(Math.max(1, Math.ceil((entry.count >= (options.perMinute ?? 6) ? entry.reset - now : globalReset - now) / 1000))));
      res.status(429).json({ error: "The question limit has been reached. Please try again later or email John-Michael." });
      return;
    }
    if (active >= (options.concurrency ?? 3)) {
      res.setHeader("Retry-After", "10");
      res.status(429).json({ error: "Ask about my work is busy. Please try again shortly." });
      return;
    }
    // Missing configuration is a 503, never a fabricated answer/refusal.
    let complete: Complete;
    try { complete = getCompletion(); }
    catch (error) {
      res.status(error instanceof WorkQaError ? error.status : 503).json({ error: error instanceof WorkQaError ? error.message : "The answer service is not configured." });
      return;
    }
    clients.set(ip, { ...entry, count: entry.count + 1 });
    globalCount++;
    active++;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45_000);
    const disconnected = () => { if (!res.writableEnded) controller.abort(); };
    res.on("close", disconnected);
    try {
      const result = await answerWorkQuestion(parsed.data.question, complete, controller.signal);
      if (!res.destroyed) res.json(result);
    } catch (error) {
      if (!res.destroyed) {
        const status = error instanceof WorkQaError ? error.status : controller.signal.aborted ? 504 : 502;
        res.status(status).json({ error: error instanceof WorkQaError ? error.message :
          controller.signal.aborted ? "The answer request timed out. Please try again." :
            "The AI answer provider is unavailable or rejected the request. Please try again later." });
      }
    } finally {
      clearTimeout(timeout);
      res.off("close", disconnected);
      active--;
    }
  };
  // Mounted before the app's general JSON parser, so large bodies are rejected
  // before parsing or calling the provider. No authentication is required.
  app.post("/api/work-question", express.json({ limit: "2kb", strict: true }), handler);
  app.use("/api/work-question", (error: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (error?.type === "entity.too.large") { res.status(413).json({ error: "The question request is too large." }); return; }
    if (error instanceof SyntaxError) { res.status(400).json({ error: "Send a valid JSON question." }); return; }
    next(error);
  });
}
