---
name: DB URL drift between drizzle and server
description: Why `db:push` can succeed yet the running app still gets "relation does not exist".
---

The server connects with `EXTERNAL_DATABASE_URL || DATABASE_URL`, but `drizzle.config.ts`
uses only `DATABASE_URL`. When both are set to different databases, `npm run db:push`
applies the schema to `DATABASE_URL`'s database while the app reads from
`EXTERNAL_DATABASE_URL` — so new tables appear "missing" at runtime (`42P01`).

**Why:** the two configs resolve the connection string independently and can diverge.

**How to apply:** to push schema to the database the app actually uses, run
`DATABASE_URL="$EXTERNAL_DATABASE_URL" npm run db:push`. After adding any new table,
verify via an API call, not just the push "Changes applied" message.

**Push prompt hazard:** legacy orphan tables (`visits`, `users`, `session`) still exist
in the DB, so `db:push` for any new table opens an interactive "create or rename?"
prompt that hangs non-interactive shells (even with `--force`). Workaround: create the
table with direct SQL (`CREATE TABLE IF NOT EXISTS ...`) matching the Drizzle schema,
via a small node script using `@neondatabase/serverless`.
