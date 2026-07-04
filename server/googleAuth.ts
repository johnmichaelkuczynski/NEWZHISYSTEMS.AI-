import type { Express, Request, Response, NextFunction } from "express";
import crypto from "crypto";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { OAuth2Client } from "google-auth-library";
import { db, pool } from "./db";
import { users, visits } from "@shared/schema";
import { eq } from "drizzle-orm";

export const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";

declare module "express-session" {
  interface SessionData {
    user?: {
      id: string;
      googleId: string;
      email: string;
      name: string | null;
      avatar: string | null;
    };
    oauthState?: string;
  }
}

function getClientId(): string {
  const id = process.env.GOOGLE_CLIENT_ID?.trim();
  if (!id) throw new Error("GOOGLE_CLIENT_ID is not set");
  return id;
}

function getClientSecret(): string {
  const secret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  if (!secret) throw new Error("GOOGLE_CLIENT_SECRET is not set");
  return secret;
}

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error("SESSION_SECRET must be set in production");
  }
  console.warn("SESSION_SECRET not set; using a temporary secret (development only)");
  return crypto.randomBytes(32).toString("hex");
}

function callbackUrl(req: Request): string {
  return `https://${req.get("host")}/api/auth/google/callback`;
}

export function setupGoogleAuth(app: Express) {
  app.set("trust proxy", 1);

  const PgStore = connectPgSimple(session);
  app.use(
    session({
      store: new PgStore({
        pool: pool as any,
        tableName: "session",
        createTableIfMissing: true,
      }),
      secret: getSessionSecret(),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    }),
  );

  // Click 1: straight to Google's account chooser
  app.get("/api/auth/google", (req, res) => {
    const state = crypto.randomBytes(16).toString("hex");
    req.session.oauthState = state;
    const params = new URLSearchParams({
      client_id: getClientId(),
      redirect_uri: callbackUrl(req),
      response_type: "code",
      scope: "openid email profile",
      prompt: "select_account",
      state,
    });
    req.session.save(() => {
      res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`);
    });
  });

  // Click 2 lands here: exchange code, verify ID token, upsert user, record login event
  app.get("/api/auth/google/callback", async (req, res) => {
    try {
      const { code, state, error } = req.query as Record<string, string | undefined>;
      if (error) {
        console.error("Google OAuth error:", error);
        return res.redirect("/");
      }
      if (!code || !state || state !== req.session.oauthState) {
        console.error("OAuth state mismatch or missing code");
        return res.redirect("/");
      }
      delete req.session.oauthState;

      const client = new OAuth2Client(getClientId(), getClientSecret(), callbackUrl(req));
      const { tokens } = await client.getToken(code);
      if (!tokens.id_token) {
        console.error("No ID token returned from Google");
        return res.redirect("/");
      }
      const ticket = await client.verifyIdToken({
        idToken: tokens.id_token,
        audience: getClientId(),
      });
      const payload = ticket.getPayload();
      if (!payload?.sub || !payload.email) {
        console.error("ID token missing sub/email");
        return res.redirect("/");
      }

      const googleId = payload.sub;
      const email = payload.email;
      const name = payload.name || null;
      const avatar = payload.picture || null;

      const [existing] = await db.select().from(users).where(eq(users.googleId, googleId));
      let user;
      if (existing) {
        [user] = await db
          .update(users)
          .set({ email, name, avatar, lastSignInAt: new Date() })
          .where(eq(users.googleId, googleId))
          .returning();
      } else {
        [user] = await db
          .insert(users)
          .values({ googleId, email, name, avatar })
          .returning();
      }

      // Login event for the admin graphs
      await db.insert(visits).values({
        userId: user.id,
        email,
        name,
      });

      req.session.regenerate((err) => {
        if (err) {
          console.error("Session regenerate failed:", err);
          return res.redirect("/");
        }
        req.session.user = {
          id: user.id,
          googleId,
          email,
          name,
          avatar,
        };
        req.session.save(() => res.redirect("/"));
      });
    } catch (e) {
      console.error("Google OAuth callback failed:", e);
      res.redirect("/");
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  });

  app.get("/api/auth/me", (req, res) => {
    if (!req.session.user) {
      return res.status(401).json({ error: "Not signed in" });
    }
    const u = req.session.user;
    res.json({
      id: u.id,
      email: u.email,
      name: u.name,
      avatar: u.avatar,
      isAdmin: u.email.toLowerCase() === ADMIN_EMAIL,
    });
  });
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.user) {
    return res.status(401).json({ error: "Not signed in" });
  }
  next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.session.user) {
    return res.status(401).json({ error: "Not signed in" });
  }
  if (req.session.user.email.toLowerCase() !== ADMIN_EMAIL) {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
}
