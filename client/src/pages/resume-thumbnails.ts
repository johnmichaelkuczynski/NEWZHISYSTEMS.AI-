// Capture provenance: real Chromium browser captures of public live URLs.
// Run capture-resume-thumbnails.mjs to refresh; no artwork or app UI is fabricated.
export const thumbnailNotes: Record<string, string> = {
  treatise: "Screenshot unavailable: the live site returned HTTP 404 during capture.",
  reader: "Screenshot unavailable: the live site returned HTTP 404 during capture.",
  forex: "Public sign-in screen shown; the signed-in application was not captured.",
  goals: "Public sign-in screen shown; the signed-in application was not captured.",
  books: "This live URL currently presents “DocMath AI”; screenshot reflects the site as served.",
};
