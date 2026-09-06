---
name: Visitor counter cutover
description: Why the anonymous visitor total includes a fixed historical baseline.
---

The cumulative visitor count must preserve the 249 unique visitors recorded before
the anonymous browser-ID counter replaced the old analytics tracking.

**Why:** starting the new counter at zero made the public total incorrectly appear
to represent the site's entire history.

**How to apply:** keep the 249 cutover baseline when changing visitor-count storage
or presentation. Add new anonymous browser IDs to that baseline; do not restore
ongoing IP, geography, authentication, or administrative analytics tracking.