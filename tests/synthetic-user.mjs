import crypto from "crypto";
import ws from "ws";
import { Pool, neonConfig } from "@neondatabase/serverless";

neonConfig.webSocketConstructor = ws;

const BASE = `https://${process.env.REPLIT_DEV_DOMAIN}`;
const SECRET = process.env.SESSION_SECRET;
const ADMIN_EMAIL = "johnmichaelkuczynski@gmail.com";
const RUN = "synthtest-" + crypto.randomBytes(6).toString("hex");
const pool = new Pool({ connectionString: process.env.EXTERNAL_DATABASE_URL });

// Everything created this run is tracked by exact ID and deleted by exact ID.
const created = { userIds: [], sessionSids: [], journalIds: [], officeIds: [], higherEdIds: [] };

let pass = 0, fail = 0;
const failures = [];
function check(name, ok, detail = "") {
  if (ok) { pass++; console.log(`  PASS  ${name}`); }
  else { fail++; failures.push(name); console.log(`  FAIL  ${name}${detail ? " — " + detail : ""}`); }
}

function signCookie(sid) {
  const sig = crypto.createHmac("sha256", SECRET).update(sid).digest("base64").replace(/=+$/, "");
  return `connect.sid=${encodeURIComponent(`s:${sid}.${sig}`)}`;
}

async function createSession(user) {
  const sid = `${RUN}-sid-` + crypto.randomBytes(12).toString("hex");
  const expires = new Date(Date.now() + 60 * 60 * 1000);
  const sess = {
    cookie: { originalMaxAge: 3600000, expires: expires.toISOString(), secure: true, httpOnly: true, path: "/", sameSite: "lax" },
    user,
  };
  await pool.query("insert into session (sid, sess, expire) values ($1, $2, $3)", [sid, JSON.stringify(sess), expires]);
  created.sessionSids.push(sid);
  return { sid, cookie: signCookie(sid) };
}

async function createUser(googleId, email, name) {
  const r = await pool.query(
    "insert into users (google_id, email, name, avatar) values ($1,$2,$3,null) returning id",
    [googleId, email, name]);
  created.userIds.push(r.rows[0].id);
  return r.rows[0].id;
}

async function api(path, { method = "GET", cookie, body } = {}) {
  const headers = {};
  if (cookie) headers.cookie = cookie;
  if (body !== undefined) headers["content-type"] = "application/json";
  const res = await fetch(BASE + path, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined, redirect: "manual" });
  let json = null;
  try { json = await res.clone().json(); } catch {}
  return { status: res.status, headers: res.headers, json };
}

async function cleanup() {
  if (created.journalIds.length) await pool.query("delete from journal_issues where id = any($1)", [created.journalIds]);
  if (created.officeIds.length) await pool.query("delete from office_documents where id = any($1)", [created.officeIds]);
  if (created.higherEdIds.length) {
    try { await pool.query("delete from higher_ed_documents where id = any($1)", [created.higherEdIds]); } catch {}
  }
  if (created.userIds.length) {
    await pool.query("delete from visits where user_id = any($1)", [created.userIds]);
    await pool.query("delete from users where id = any($1)", [created.userIds]);
  }
  if (created.sessionSids.length) await pool.query("delete from session where sid = any($1)", [created.sessionSids]);
}

async function main() {
  console.log(`Synthetic user test against ${BASE}  (run id: ${RUN})\n`);

  // ---- 1. Credentials present ----
  console.log("1. Credentials");
  check("GOOGLE_OAUTH_CLIENT_ID set", !!process.env.GOOGLE_OAUTH_CLIENT_ID?.trim());
  check("GOOGLE_OAUTH_CLIENT_SECRET set", !!process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim());
  check("SESSION_SECRET set", !!SECRET);
  check("client ID looks like a Google client ID", /\.apps\.googleusercontent\.com$/.test(process.env.GOOGLE_OAUTH_CLIENT_ID?.trim() || ""));

  // ---- 2. Public endpoints ----
  console.log("\n2. Public pages & APIs (anonymous)");
  check("GET / is 200", (await api("/")).status === 200);
  check("GET /api/journal is 200", (await api("/api/journal")).status === 200);
  check("GET /api/journal/search is 200", (await api("/api/journal/search?keyword=test")).status === 200);
  check("GET /api/voice-options is 200", (await api("/api/voice-options")).status === 200);

  // ---- 3. Anonymous is locked out of EVERY protected endpoint ----
  console.log("\n3. Anonymous lockout (every protected endpoint)");
  const protectedEndpoints = [
    ["GET", "/api/auth/me"],
    ["POST", "/api/journal"], ["PUT", "/api/journal/x"], ["DELETE", "/api/journal/x"],
    ["POST", "/api/ai/generate-audio"], ["POST", "/api/ai/rewrite"], ["POST", "/api/ai/study-guide"],
    ["POST", "/api/ai/test"], ["POST", "/api/ai/test/submit"], ["POST", "/api/ai/podcast"],
    ["POST", "/api/ai/cognitive-map"], ["POST", "/api/ai/summary-thesis"],
    ["POST", "/api/ai/thesis-deep-dive"], ["POST", "/api/ai/suggested-readings"],
    ["GET", "/api/higher-ed"], ["POST", "/api/higher-ed"], ["PUT", "/api/higher-ed/x"], ["DELETE", "/api/higher-ed/x"],
    ["GET", "/api/office"], ["POST", "/api/office"], ["PUT", "/api/office/x"], ["DELETE", "/api/office/x"],
    ["GET", "/api/admin/visits"],
  ];
  for (const [method, path] of protectedEndpoints) {
    const r = await api(path, { method, body: method === "GET" ? undefined : {} });
    check(`${method} ${path} → 401`, r.status === 401, `got ${r.status}`);
  }

  // ---- 4. Google login flow (redirect + credential validity at Google) ----
  console.log("\n4. Google login flow");
  const oauth = await api("/api/auth/google");
  check("GET /api/auth/google → 302", oauth.status === 302);
  const loc = oauth.headers.get("location") || "";
  check("redirects to accounts.google.com", loc.startsWith("https://accounts.google.com/o/oauth2/v2/auth?"));
  const u = loc ? new URL(loc) : null;
  check("client_id matches secret exactly", u?.searchParams.get("client_id") === process.env.GOOGLE_OAUTH_CLIENT_ID?.trim());
  check("redirect_uri is this app's callback", u?.searchParams.get("redirect_uri") === `${BASE}/api/auth/google/callback`);
  check("CSRF state param present", (u?.searchParams.get("state") || "").length >= 32);
  check("scope is openid email profile", u?.searchParams.get("scope") === "openid email profile");
  check("account chooser forced", u?.searchParams.get("prompt") === "select_account");
  check("session cookie set on OAuth start", (oauth.headers.get("set-cookie") || "").includes("connect.sid="));

  // Ask Google itself whether it accepts our client_id + redirect_uri.
  // Follow redirects to the final page; a healthy flow lands on a sign-in page,
  // a broken one lands on an "Access blocked / Authorization Error" page.
  if (u) {
    const g = await fetch(loc, { redirect: "follow" });
    const gBody = await g.text();
    check("Google authorize URL reachable (HTTP 200 page)", g.status === 200, `got ${g.status}`);
    const hasError = gBody.includes("invalid_client") || gBody.includes("redirect_uri_mismatch") || gBody.includes("Authorization Error");
    check("Google accepts client_id + redirect_uri (no auth error page)", g.status === 200 && !hasError,
      `Google shows an error — check credentials / register ${BASE}/api/auth/google/callback`);
    const looksLikeSignIn = /identifier|signin|ServiceLogin|Choose an account|Sign in/i.test(gBody);
    check("Google shows account sign-in/chooser page", looksLikeSignIn);
  }

  // Forged/bad callbacks must NOT sign anyone in
  const badCb = await api("/api/auth/google/callback?code=fake&state=wrongstate");
  check("callback rejects forged state (redirect home)", badCb.status === 302 && badCb.headers.get("location") === "/");
  const noCode = await api("/api/auth/google/callback");
  check("callback rejects missing code (redirect home)", noCode.status === 302 && noCode.headers.get("location") === "/");
  // NOTE: the full success path (real Google account chooser → code exchange → signed-in)
  // requires a human clicking a real Google account; verified manually in the browser.

  // ---- 5. Synthetic REGULAR user ----
  console.log("\n5. Synthetic regular user (full session)");
  const regId = await createUser(`${RUN}-regular`, "synthetic.tester@example.com", "Synthetic Tester");
  const reg = await createSession({ id: regId, googleId: `${RUN}-regular`, email: "synthetic.tester@example.com", name: "Synthetic Tester", avatar: null });

  const me = await api("/api/auth/me", { cookie: reg.cookie });
  check("signed-in /api/auth/me → 200", me.status === 200);
  check("me returns correct email", me.json?.email === "synthetic.tester@example.com");
  check("regular user is NOT admin", me.json?.isAdmin === false);

  // Journal CRUD as signed-in user (cleaned up by exact ID)
  const jc = await api("/api/journal", { method: "POST", cookie: reg.cookie,
    body: { title: `${RUN} journal issue (safe to delete)`, body: "Created by automated synthetic-user test.", volume: 9999, issue: 9999, year: 2026, tags: [RUN] } });
  check("create journal issue → 201", jc.status === 201, `got ${jc.status}`);
  if (jc.json?.id) {
    created.journalIds.push(jc.json.id);
    const upd = await api(`/api/journal/${jc.json.id}`, { method: "PUT", cookie: reg.cookie, body: { title: `${RUN} journal issue (updated)` } });
    check("update journal issue → 200", upd.status === 200);
    check("public can read the new issue", (await api("/api/journal/9999/9999")).status === 200);
    const del = await api(`/api/journal/${jc.json.id}`, { method: "DELETE", cookie: reg.cookie });
    check("delete journal issue → 204", del.status === 204);
    if (del.status === 204) created.journalIds.pop();
  }

  // Higher-ed CRUD as signed-in user
  check("GET /api/higher-ed → 200 signed in", (await api("/api/higher-ed", { cookie: reg.cookie })).status === 200);
  const hc = await api("/api/higher-ed", { method: "POST", cookie: reg.cookie,
    body: { title: `${RUN} higher-ed doc (safe to delete)`, body: "Created by synthetic-user test." } });
  check("create higher-ed doc → 201", hc.status === 201, `got ${hc.status}`);
  if (hc.json?.id) {
    created.higherEdIds.push(hc.json.id);
    check("read higher-ed doc → 200", (await api(`/api/higher-ed/${hc.json.id}`, { cookie: reg.cookie })).status === 200);
    check("update higher-ed doc → 200", (await api(`/api/higher-ed/${hc.json.id}`, { method: "PUT", cookie: reg.cookie, body: { title: `${RUN} updated` } })).status === 200);
    const hd = await api(`/api/higher-ed/${hc.json.id}`, { method: "DELETE", cookie: reg.cookie });
    check("delete higher-ed doc → 204", hd.status === 204);
    if (hd.status === 204) created.higherEdIds.pop();
  }

  // Every AI endpoint must be PAST the auth gate for a signed-in user
  // (empty body → validation/processing error is fine; 401/403 is not)
  const aiEndpoints = ["/api/ai/generate-audio", "/api/ai/rewrite", "/api/ai/study-guide", "/api/ai/test",
    "/api/ai/test/submit", "/api/ai/podcast", "/api/ai/cognitive-map", "/api/ai/summary-thesis",
    "/api/ai/thesis-deep-dive", "/api/ai/suggested-readings"];
  for (const p of aiEndpoints) {
    const r = await api(p, { method: "POST", cookie: reg.cookie, body: {} });
    check(`${p} past auth gate (not 401/403)`, r.status !== 401 && r.status !== 403, `got ${r.status}`);
  }

  // Regular user must NOT reach admin surfaces
  check("GET /api/office → 403 for regular user", (await api("/api/office", { cookie: reg.cookie })).status === 403);
  check("POST /api/office → 403 for regular user", (await api("/api/office", { method: "POST", cookie: reg.cookie, body: { title: "x", body: "x" } })).status === 403);
  check("GET /api/admin/visits → 403 for regular user", (await api("/api/admin/visits", { cookie: reg.cookie })).status === 403);

  // ---- 6. Synthetic ADMIN user ----
  console.log("\n6. Synthetic admin user");
  const admId = await createUser(`${RUN}-admin`, ADMIN_EMAIL, "Synthetic Admin");
  const adm = await createSession({ id: admId, googleId: `${RUN}-admin`, email: ADMIN_EMAIL, name: "Synthetic Admin", avatar: null });

  const meAdm = await api("/api/auth/me", { cookie: adm.cookie });
  check("admin /api/auth/me → 200 with isAdmin", meAdm.status === 200 && meAdm.json?.isAdmin === true);
  check("GET /api/admin/visits → 200 for admin", (await api("/api/admin/visits", { cookie: adm.cookie })).status === 200);

  // Office CRUD as admin
  check("GET /api/office → 200 for admin", (await api("/api/office", { cookie: adm.cookie })).status === 200);
  const oc = await api("/api/office", { method: "POST", cookie: adm.cookie,
    body: { title: `${RUN} office doc (safe to delete)`, body: "Created by synthetic-user test." } });
  check("create office doc → 201 for admin", oc.status === 201, `got ${oc.status}`);
  if (oc.json?.id) {
    created.officeIds.push(oc.json.id);
    check("read office doc → 200", (await api(`/api/office/${oc.json.id}`, { cookie: adm.cookie })).status === 200);
    check("update office doc → 200", (await api(`/api/office/${oc.json.id}`, { method: "PUT", cookie: adm.cookie, body: { title: `${RUN} updated` } })).status === 200);
    const od = await api(`/api/office/${oc.json.id}`, { method: "DELETE", cookie: adm.cookie });
    check("delete office doc → 204", od.status === 204);
    if (od.status === 204) created.officeIds.pop();
  }

  // ---- 7. Logout & cookie integrity ----
  console.log("\n7. Logout & cookie integrity");
  const out = await api("/api/auth/logout", { method: "POST", cookie: reg.cookie });
  check("POST /api/auth/logout → 302 home", out.status === 302);
  check("session dead after logout (me → 401)", (await api("/api/auth/me", { cookie: reg.cookie })).status === 401);
  const tampered = reg.cookie.slice(0, -4) + "AAAA";
  check("tampered cookie rejected", (await api("/api/auth/me", { cookie: tampered })).status === 401);
  check("unsigned/garbage cookie rejected", (await api("/api/auth/me", { cookie: "connect.sid=garbage" })).status === 401);

  // ---- 8. Cleanup (exact IDs only) ----
  console.log("\n8. Cleanup");
  await cleanup();
  const left = await pool.query(
    "select (select count(*) from users where id = any($1)) + (select count(*) from session where sid = any($2)) as n",
    [created.userIds, created.sessionSids]);
  check("synthetic data fully removed", left.rows[0].n === "0" || left.rows[0].n === 0);

  console.log(`\n==== RESULT: ${pass} passed, ${fail} failed ====`);
  if (fail) console.log("Failed: " + failures.join("; "));
  await pool.end();
  process.exit(fail ? 1 : 0);
}

main().catch(async (e) => {
  console.error("Test run crashed:", e);
  try { await cleanup(); await pool.end(); } catch {}
  process.exit(1);
});
