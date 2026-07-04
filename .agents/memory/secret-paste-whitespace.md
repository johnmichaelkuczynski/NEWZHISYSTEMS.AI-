---
name: Secret paste whitespace
description: Pasted secrets can carry invisible whitespace (e.g. non-breaking space) that breaks OAuth/API calls.
---

Rule: always `.trim()` env-var credentials (client IDs, secrets, API keys) before using them.

**Why:** The owner's pasted GOOGLE_OAUTH_CLIENT_ID contained a leading non-breaking space (U+00A0), producing a malformed `client_id=%C2%A0...` in the Google OAuth redirect that would have failed with invalid_client. JS `String.trim()` removes U+00A0.

**How to apply:** Any code reading a credential from `process.env` should trim it at the read site (see the getter pattern in the Google auth module).
