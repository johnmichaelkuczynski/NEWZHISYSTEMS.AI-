import { type JournalIssue, type InsertJournalIssue, type OfficeDocument, type InsertOfficeDocument, type HigherEdReport, type InsertHigherEdReport, journalIssues, officeDocuments, higherEdReports } from "@shared/schema";
import { db } from "./db";
import { eq, desc, sql, or, ilike } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Journal methods
  getAllJournalIssues(): Promise<JournalIssue[]>;
  getJournalIssue(volume: number, issue: number): Promise<JournalIssue | undefined>;
  createJournalIssue(issue: InsertJournalIssue): Promise<JournalIssue>;
  updateJournalIssue(id: string, issue: Partial<InsertJournalIssue>): Promise<JournalIssue>;
  deleteJournalIssue(id: string): Promise<void>;
  searchJournalIssues(keyword: string): Promise<JournalIssue[]>;

  // Office documents
  getAllOfficeDocuments(): Promise<OfficeDocument[]>;
  getOfficeDocument(id: string): Promise<OfficeDocument | undefined>;
  createOfficeDocument(doc: InsertOfficeDocument): Promise<OfficeDocument>;
  updateOfficeDocument(id: string, doc: Partial<InsertOfficeDocument>): Promise<OfficeDocument>;
  deleteOfficeDocument(id: string): Promise<void>;

  // AI in Higher Ed reports
  getAllHigherEdReports(): Promise<HigherEdReport[]>;
  getHigherEdReport(id: string): Promise<HigherEdReport | undefined>;
  createHigherEdReport(report: InsertHigherEdReport): Promise<HigherEdReport>;
  updateHigherEdReport(id: string, report: Partial<InsertHigherEdReport>): Promise<HigherEdReport>;
  deleteHigherEdReport(id: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // Journal methods
  async getAllJournalIssues(): Promise<JournalIssue[]> {
    return await db.select().from(journalIssues).orderBy(desc(journalIssues.createdAt));
  }

  async getJournalIssue(volume: number, issue: number): Promise<JournalIssue | undefined> {
    const [journalIssue] = await db
      .select()
      .from(journalIssues)
      .where(sql`${journalIssues.volume} = ${volume} AND ${journalIssues.issue} = ${issue}`);
    return journalIssue || undefined;
  }

  async createJournalIssue(insertIssue: InsertJournalIssue): Promise<JournalIssue> {
    const [issue] = await db
      .insert(journalIssues)
      .values(insertIssue)
      .returning();
    return issue;
  }

  async updateJournalIssue(id: string, updateData: Partial<InsertJournalIssue>): Promise<JournalIssue> {
    const [issue] = await db
      .update(journalIssues)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(journalIssues.id, id))
      .returning();
    return issue;
  }

  async deleteJournalIssue(id: string): Promise<void> {
    await db.delete(journalIssues).where(eq(journalIssues.id, id));
  }

  async searchJournalIssues(keyword: string): Promise<JournalIssue[]> {
    const searchPattern = `%${keyword}%`;
    return await db
      .select()
      .from(journalIssues)
      .where(
        or(
          ilike(journalIssues.title, searchPattern),
          ilike(journalIssues.body, searchPattern),
          sql`EXISTS (SELECT 1 FROM unnest(${journalIssues.tags}) AS tag WHERE tag ILIKE ${searchPattern})`
        )
      )
      .orderBy(desc(journalIssues.createdAt));
  }

  async getAllOfficeDocuments(): Promise<OfficeDocument[]> {
    return await db.select().from(officeDocuments).orderBy(desc(officeDocuments.createdAt));
  }

  async getOfficeDocument(id: string): Promise<OfficeDocument | undefined> {
    const [doc] = await db.select().from(officeDocuments).where(eq(officeDocuments.id, id));
    return doc || undefined;
  }

  async createOfficeDocument(insertDoc: InsertOfficeDocument): Promise<OfficeDocument> {
    const [doc] = await db.insert(officeDocuments).values(insertDoc).returning();
    return doc;
  }

  async updateOfficeDocument(id: string, updateData: Partial<InsertOfficeDocument>): Promise<OfficeDocument> {
    const [doc] = await db
      .update(officeDocuments)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(officeDocuments.id, id))
      .returning();
    return doc;
  }

  async deleteOfficeDocument(id: string): Promise<void> {
    await db.delete(officeDocuments).where(eq(officeDocuments.id, id));
  }

  async getAllHigherEdReports(): Promise<HigherEdReport[]> {
    return await db.select().from(higherEdReports).orderBy(desc(higherEdReports.createdAt));
  }

  async getHigherEdReport(id: string): Promise<HigherEdReport | undefined> {
    const [report] = await db.select().from(higherEdReports).where(eq(higherEdReports.id, id));
    return report || undefined;
  }

  async createHigherEdReport(insertReport: InsertHigherEdReport): Promise<HigherEdReport> {
    const [report] = await db.insert(higherEdReports).values(insertReport).returning();
    return report;
  }

  async updateHigherEdReport(id: string, updateData: Partial<InsertHigherEdReport>): Promise<HigherEdReport> {
    const [report] = await db
      .update(higherEdReports)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(higherEdReports.id, id))
      .returning();
    return report;
  }

  async deleteHigherEdReport(id: string): Promise<void> {
    await db.delete(higherEdReports).where(eq(higherEdReports.id, id));
  }
}

export const storage = new DatabaseStorage();
