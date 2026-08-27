---
name: No auth by owner order
description: Every page, tab, and API must remain public; never reinstall auth without an explicit owner request.
---

Rule: This site has no authentication. Every page, tab, and API is intentionally public. Never add Google OAuth, Clerk, sessions, password gates, login screens, or auth middleware unless the owner explicitly asks again.

**Why:** Authentication was repeatedly reintroduced after earlier removals and blocked access to tabs, including Living Books. On 2026-08-27, the owner again explicitly ordered every login and gate removed.

**How to apply:** Keep all existing routes and API endpoints open, including Living Books, Reports, and AI in Higher Ed. The Administrative analytics feature was removed. Environment secrets may remain configured but must not be used for authentication.
