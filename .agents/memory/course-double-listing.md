---
name: Course double-listing sync
description: Some courses appear on two pages; changes must be applied to both.
---
The analytics courses (e.g. Basic Data Analytics, Marketing/Workforce/Operations/Revenue/Financial/Restaurant/Predictive Analytics) are listed on BOTH `client/src/pages/baby-living-courses.tsx` and `client/src/pages/johnson-wales.tsx`.

**Rule:** When adding/updating anything for a double-listed course (badge, videoUrl/tutorial link, title, removal), apply it to BOTH pages, not just one.

**Why:** The user viewed Johnson & Wales and didn't see a badge that was added only to baby-living-courses. They explicitly asked: for a double-listed course, put the badge (and by extension other changes) in both places.

**How to apply:** Before editing a course, grep both files for the exact title. If it exists in both, mirror the change. Note johnson-wales originally lacked the Badge interface + badge render block — both pages now support `badge?` on the Course interface and render it before the Tutorial/Visit buttons.
