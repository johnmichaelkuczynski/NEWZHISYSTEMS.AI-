---
name: Bundled dependency engine warnings
description: How to evaluate patched browser-only transitive packages whose declared Node engine is newer than the server runtime.
---

A patched transitive dependency used only in bundled frontend code may declare a newer Node engine than the project runtime. Do not assume either safety or incompatibility from the install warning alone.

**Why:** The only advisory-free release available for one browser-bundled transitive dependency declared Node 22 while the project runs Node 20. Type-checking, production bundling, dependency-tree validation, dev startup, HTTP probing, and browser rendering all succeeded on Node 20.

**How to apply:** Prefer a compatible parent upgrade first. If none exists, use a narrow override and accept the engine warning only when the package is not executed by the server and both production and live-runtime verification pass. Revisit the override when the parent publishes a compatible patched dependency range.