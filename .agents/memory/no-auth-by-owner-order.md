---
name: No auth by owner order
description: Owner explicitly ordered ALL login removed (2026-07-04); never reinstall auth without his explicit request.
---

Rule: This site has NO authentication, by explicit owner command ("RIP OUT THE GOOGLE LOGIN. RIP IT OUT. DO NOT REINSTALL", 2026-07-04). Never add login, sessions, or auth gating unless the owner explicitly asks again.

**Why:** After Clerk and then direct Google OAuth both frustrated him (Google Cloud redirect-URI registration was the persistent blocker — `redirect_uri_mismatch` on his OAuth client), he demanded total removal.

**How to apply:** All API endpoints are intentionally public (including AI endpoints that spend API credits). If asked to protect something, prefer the existing lightweight client-side PasswordGate pattern, and confirm scope with the owner first. Unused legacy tables (users/visits/session) and GOOGLE_CLIENT_ID/SECRET, SESSION_SECRET secrets may remain in the environment.
