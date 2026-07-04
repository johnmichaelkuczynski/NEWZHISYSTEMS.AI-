---
name: Clerk secret/instance drift
description: How to detect and fix CLERK_SECRET_KEY pointing at a different Clerk instance than the publishable key
---
Symptom: "/" returns 500 with a Clerk handshake jwk-kid-mismatch error — the frontend publishable key and backend secret key belong to different Clerk instances.

**Why:** A user-created CLERK_SECRET_KEY secret can shadow the managed Clerk connection's key; setupClerkWhitelabelAuth reports success but the env secret may not change immediately. It eventually synced after re-running setup.

**How to apply:**
- Verify match without printing keys: backend instance via `fetch('https://api.clerk.com/v1/instance', {headers:{Authorization:'Bearer '+process.env.CLERK_SECRET_KEY}})` → `j.id`; frontend instance via `curl https://<frontend-domain>/.well-known/jwks.json` → kid. Both must be the same `ins_...`.
- Compare secret changes with sha256 hash prefixes, never raw values.
- Google-only login is enforced by the custom UI flow (authenticateWithRedirect oauth_google), NOT by Clerk instance settings — email/password remain enabled on the instance (no public API to disable) but can never render since no hosted components are used.
- Managed Clerk auto-swaps to production pk_live/sk_live keys at publish; a republish is required after auth changes.
