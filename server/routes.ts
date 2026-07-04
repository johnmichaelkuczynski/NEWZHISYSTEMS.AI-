import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import { storage } from "./storage";
import { insertJournalIssueSchema, insertOfficeDocumentSchema, insertHigherEdReportSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import type { TextProcessingRequest, TestResult } from "@shared/ai-services";
import { 
  rewriteText, 
  generateStudyGuide, 
  generateTest, 
  generatePodcast, 
  generateCognitiveMap, 
  generateSummaryThesis, 
  generateThesisDeepDive, 
  generateSuggestedReadings 
} from "./ai-services";
import { generateAudio, VOICE_OPTIONS } from "./speech-services";
import { clerkMiddleware, getAuth, clerkClient } from "@clerk/express";
import { db } from "./db";
import { visits } from "@shared/schema";
import { desc as descOrder, sql as sqlExpr } from "drizzle-orm";

async function getClerkUserInfo(req: any): Promise<{ userId: string; email: string; name: string } | null> {
  const { userId } = getAuth(req);
  if (!userId) return null;
  const user = await clerkClient.users.getUser(userId);
  const email =
    user.primaryEmailAddress?.emailAddress ||
    user.emailAddresses[0]?.emailAddress ||
    "";
  const name = [user.firstName, user.lastName].filter(Boolean).join(" ");
  return { userId, email, name };
}

const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";

// requireAuth: session must exist (cookie-based via clerkMiddleware)
async function requireAuth(req: any, res: any, next: any) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ error: "Not signed in" });
  }
  next();
}

// requireAdmin: loads the Clerk user and rejects unless it's the site owner
async function requireAdmin(req: any, res: any, next: any) {
  try {
    const info = await getClerkUserInfo(req);
    if (!info) {
      return res.status(401).json({ error: "Not signed in" });
    }
    if (info.email.toLowerCase() !== ADMIN_EMAIL) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  } catch (error) {
    console.error("Admin check failed:", error);
    res.status(500).json({ error: "Auth check failed" });
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Clerk authentication (Google sign-in), cookie-based sessions
  app.use(clerkMiddleware());

  // Record a login event (called by the client when a signed-in user loads the site)
  app.post("/api/visits", requireAuth, async (req, res) => {
    try {
      const info = await getClerkUserInfo(req);
      if (!info) {
        return res.status(401).json({ error: "Not signed in" });
      }
      await db.insert(visits).values({
        userId: info.userId,
        email: info.email || null,
        name: info.name || null,
      });
      res.json({ success: true });
    } catch (error) {
      console.error("Error recording visit:", error);
      res.status(500).json({ error: "Failed to record visit" });
    }
  });

  // Admin: visit log + per-user data (restricted to the site owner's account)
  app.get("/api/admin/visits", requireAuth, requireAdmin, async (req, res) => {
    try {
      const allVisits = await db
        .select()
        .from(visits)
        .orderBy(descOrder(visits.visitedAt))
        .limit(5000);
      const [counts] = await db
        .select({
          allTime: sqlExpr<number>`count(*)`,
          last24h: sqlExpr<number>`count(*) filter (where ${visits.visitedAt} >= now() - interval '24 hours')`,
          lastMonth: sqlExpr<number>`count(*) filter (where ${visits.visitedAt} >= now() - interval '30 days')`,
          lastYear: sqlExpr<number>`count(*) filter (where ${visits.visitedAt} >= now() - interval '365 days')`,
        })
        .from(visits);
      res.json({
        visits: allVisits,
        stats: {
          allTime: Number(counts.allTime),
          last24h: Number(counts.last24h),
          lastMonth: Number(counts.lastMonth),
          lastYear: Number(counts.lastYear),
        },
      });
    } catch (error) {
      console.error("Error fetching visits:", error);
      res.status(500).json({ error: "Failed to fetch visits" });
    }
  });

  // Journal routes
  app.get("/api/journal", async (req, res) => {
    try {
      const issues = await storage.getAllJournalIssues();
      res.json(issues);
    } catch (error) {
      console.error("Error fetching journal issues:", error);
      res.status(500).json({ error: "Failed to fetch journal issues" });
    }
  });

  app.get("/api/journal/search", async (req, res) => {
    try {
      const keyword = req.query.keyword as string;
      if (!keyword || keyword.trim() === '') {
        return res.status(400).json({ error: "Search keyword is required" });
      }

      const issues = await storage.searchJournalIssues(keyword.trim());
      res.json(issues);
    } catch (error) {
      console.error("Error searching journal issues:", error);
      res.status(500).json({ error: "Failed to search journal issues" });
    }
  });

  app.get("/api/journal/:volume/:issue", async (req, res) => {
    try {
      const volume = parseInt(req.params.volume);
      const issue = parseInt(req.params.issue);
      
      if (isNaN(volume) || isNaN(issue)) {
        return res.status(400).json({ error: "Invalid volume or issue number" });
      }
      
      const journalIssue = await storage.getJournalIssue(volume, issue);
      if (!journalIssue) {
        return res.status(404).json({ error: "Journal issue not found" });
      }
      
      res.json(journalIssue);
    } catch (error) {
      console.error("Error fetching journal issue:", error);
      res.status(500).json({ error: "Failed to fetch journal issue" });
    }
  });

  app.post("/api/journal", requireAuth, async (req, res) => {
    try {
      const result = insertJournalIssueSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: fromZodError(result.error).toString() 
        });
      }
      
      const newIssue = await storage.createJournalIssue(result.data);
      res.status(201).json(newIssue);
    } catch (error) {
      console.error("Error creating journal issue:", error);
      res.status(500).json({ error: "Failed to create journal issue" });
    }
  });

  app.put("/api/journal/:id", requireAuth, async (req, res) => {
    try {
      const result = insertJournalIssueSchema.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: fromZodError(result.error).toString() 
        });
      }
      
      const updatedIssue = await storage.updateJournalIssue(req.params.id, result.data);
      res.json(updatedIssue);
    } catch (error) {
      console.error("Error updating journal issue:", error);
      res.status(500).json({ error: "Failed to update journal issue" });
    }
  });

  app.delete("/api/journal/:id", requireAuth, async (req, res) => {
    try {
      await storage.deleteJournalIssue(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting journal issue:", error);
      res.status(500).json({ error: "Failed to delete journal issue" });
    }
  });

  // AI Processing Routes
  app.post("/api/ai/generate-audio", requireAuth, async (req, res) => {
    try {
      const { text } = req.body;
      const { generateAudio } = await import('./speech-services');
      const audioUrl = await generateAudio(text, {
        provider: "azure",
        voice: "en-US-AriaNeural",
        speed: 1.0,
        pitch: 0,
      });
      res.json({ success: true, audioUrl });
    } catch (error) {
      console.error("Error generating audio:", error);
      res.status(500).json({ success: false, error: "Failed to generate audio" });
    }
  });

  app.post("/api/ai/rewrite", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const result = await rewriteText(request);
      res.json({ result });
    } catch (error) {
      console.error("Error rewriting text:", error);
      res.status(500).json({ error: "Failed to rewrite text" });
    }
  });

  app.post("/api/ai/study-guide", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const result = await generateStudyGuide(request);
      res.json({ result });
    } catch (error) {
      console.error("Error generating study guide:", error);
      res.status(500).json({ error: "Failed to generate study guide" });
    }
  });

  app.post("/api/ai/test", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const questions = await generateTest(request);
      res.json({ questions });
    } catch (error) {
      console.error("Error generating test:", error);
      res.status(500).json({ error: "Failed to generate test" });
    }
  });

  app.post("/api/ai/test/submit", requireAuth, async (req, res) => {
    try {
      const { questions, userAnswers } = req.body;
      
      let correctCount = 0;
      const detailedFeedback: any[] = [];
      
      console.log('Grading test with', questions.length, 'questions');
      
      questions.forEach((question: any, index: number) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correctAnswer;
        
        console.log(`Question ${index + 1}:`);
        console.log(`User answer: "${userAnswer}"`);
        console.log(`Correct answer: "${correctAnswer}"`);
        
        // More flexible answer matching
        const isCorrect = userAnswer && correctAnswer && 
          (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ||
           userAnswer.trim() === correctAnswer.trim());
        
        console.log(`Is correct: ${isCorrect}`);
        
        if (isCorrect) correctCount++;
        
        detailedFeedback.push({
          question: question.question,
          userAnswer: userAnswer || "No answer provided",
          correctAnswer: correctAnswer || "No correct answer available",
          isCorrect,
          explanation: question.explanation || "No explanation available"
        });
      });

      const score = Math.round((correctCount / questions.length) * 100);
      console.log(`Final score: ${score}% (${correctCount}/${questions.length} correct)`);
      
      const result: TestResult = {
        questions: detailedFeedback,
        userAnswers,
        score,
        totalQuestions: questions.length,
        feedback: `You scored ${score}% (${correctCount}/${questions.length} correct)`
      };

      res.json(result);
    } catch (error) {
      console.error("Error grading test:", error);
      res.status(500).json({ error: "Failed to grade test" });
    }
  });

  app.post("/api/ai/podcast", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const result = await generatePodcast(request);
      
      res.json(result);
    } catch (error) {
      console.error("Error generating podcast:", error);
      res.status(500).json({ error: "Failed to generate podcast" });
    }
  });

  app.post("/api/ai/cognitive-map", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const map = await generateCognitiveMap(request);
      res.json({ map });
    } catch (error) {
      console.error("Error generating cognitive map:", error);
      res.status(500).json({ error: "Failed to generate cognitive map" });
    }
  });

  app.post("/api/ai/summary-thesis", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const result = await generateSummaryThesis(request);
      res.json({ result });
    } catch (error) {
      console.error("Error generating summary thesis:", error);
      res.status(500).json({ error: "Failed to generate summary thesis" });
    }
  });

  app.post("/api/ai/thesis-deep-dive", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const result = await generateThesisDeepDive(request);
      res.json({ result });
    } catch (error) {
      console.error("Error generating thesis deep dive:", error);
      res.status(500).json({ error: "Failed to generate thesis deep dive" });
    }
  });

  app.post("/api/ai/suggested-readings", requireAuth, async (req, res) => {
    try {
      const request: TextProcessingRequest = req.body;
      const readings = await generateSuggestedReadings(request);
      res.json({ readings });
    } catch (error) {
      console.error("Error generating suggested readings:", error);
      res.status(500).json({ error: "Failed to generate suggested readings" });
    }
  });

  // Office documents
  app.get("/api/office", requireAuth, requireAdmin, async (_req, res) => {
    try {
      const docs = await storage.getAllOfficeDocuments();
      res.json(docs);
    } catch (error) {
      console.error("Error fetching office documents:", error);
      res.status(500).json({ error: "Failed to fetch office documents" });
    }
  });

  app.get("/api/office/:id", requireAuth, requireAdmin, async (req, res) => {
    try {
      const doc = await storage.getOfficeDocument(req.params.id);
      if (!doc) return res.status(404).json({ error: "Not found" });
      res.json(doc);
    } catch (error) {
      console.error("Error fetching office document:", error);
      res.status(500).json({ error: "Failed to fetch office document" });
    }
  });

  app.post("/api/office", requireAuth, requireAdmin, async (req, res) => {
    try {
      const result = insertOfficeDocumentSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Validation failed", details: fromZodError(result.error).toString() });
      }
      const doc = await storage.createOfficeDocument(result.data);
      res.status(201).json(doc);
    } catch (error) {
      console.error("Error creating office document:", error);
      res.status(500).json({ error: "Failed to create office document" });
    }
  });

  app.put("/api/office/:id", requireAuth, requireAdmin, async (req, res) => {
    try {
      const result = insertOfficeDocumentSchema.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Validation failed", details: fromZodError(result.error).toString() });
      }
      const doc = await storage.updateOfficeDocument(req.params.id, result.data);
      res.json(doc);
    } catch (error) {
      console.error("Error updating office document:", error);
      res.status(500).json({ error: "Failed to update office document" });
    }
  });

  app.delete("/api/office/:id", requireAuth, requireAdmin, async (req, res) => {
    try {
      await storage.deleteOfficeDocument(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting office document:", error);
      res.status(500).json({ error: "Failed to delete office document" });
    }
  });

  // AI in Higher Ed reports
  app.get("/api/higher-ed", requireAuth, async (_req, res) => {
    try {
      const reports = await storage.getAllHigherEdReports();
      res.json(reports);
    } catch (error) {
      console.error("Error fetching higher ed reports:", error);
      res.status(500).json({ error: "Failed to fetch higher ed reports" });
    }
  });

  app.get("/api/higher-ed/:id", requireAuth, async (req, res) => {
    try {
      const report = await storage.getHigherEdReport(req.params.id);
      if (!report) return res.status(404).json({ error: "Not found" });
      res.json(report);
    } catch (error) {
      console.error("Error fetching higher ed report:", error);
      res.status(500).json({ error: "Failed to fetch higher ed report" });
    }
  });

  app.post("/api/higher-ed", requireAuth, async (req, res) => {
    try {
      const result = insertHigherEdReportSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Validation failed", details: fromZodError(result.error).toString() });
      }
      const report = await storage.createHigherEdReport(result.data);
      res.status(201).json(report);
    } catch (error) {
      console.error("Error creating higher ed report:", error);
      res.status(500).json({ error: "Failed to create higher ed report" });
    }
  });

  app.put("/api/higher-ed/:id", requireAuth, async (req, res) => {
    try {
      const result = insertHigherEdReportSchema.partial().safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Validation failed", details: fromZodError(result.error).toString() });
      }
      const report = await storage.updateHigherEdReport(req.params.id, result.data);
      res.json(report);
    } catch (error) {
      console.error("Error updating higher ed report:", error);
      res.status(500).json({ error: "Failed to update higher ed report" });
    }
  });

  app.delete("/api/higher-ed/:id", requireAuth, async (req, res) => {
    try {
      await storage.deleteHigherEdReport(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting higher ed report:", error);
      res.status(500).json({ error: "Failed to delete higher ed report" });
    }
  });

  app.get("/api/voice-options", (req, res) => {
    res.json(VOICE_OPTIONS);
  });

  // Note: Audio files are now served as static assets from public/audio/

  const httpServer = createServer(app);

  return httpServer;
}
