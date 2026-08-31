# Zhi Systems promotional video

- **Artifact:** `dist/videos/zhi-systems-promo-16x9.mp4`
- **Aspect ratio:** 16:9 (1920 × 1080), persisted as the authoritative composition format.
- **Runtime:** 46.7 seconds
- **Audio:** Spoken voice-over from `voiceover.txt`

The film is separate from the web application and does not alter its authentication or publishing behavior.

To render again, generate `dist/videos/zhi_promo_work/voiceover.mp3` from `voiceover.txt` with a neural TTS voice, then run `python video_artifact/render_zhi_promo.py`.

## Revised, site-led cut

- **Artifact:** `dist/videos/zhi-systems-promo-light-site-16x9.mp4`
- **Runtime:** 47.64 seconds, 1920 × 1080 H.264/AAC
- **Narration:** Ava Multilingual Neural — selected after auditioning the available warm conversational US voices (Ava, Andrew, Brian, Emma, Jenny, and Michelle).
- **Visual source:** Captures of the running public site at `/main-page`, `/microcertifications`, and `/courses`, composited into the film; no UI was invented or changed.

Render it with `python video_artifact/render_zhi_promo_bright.py` after creating `dist/videos/zhi_promo_bright_work/ava-voiceover.mp3` from `voiceover-light.txt`.

## Short custom-apps cut

- **Artifact:** `dist/videos/zhi-systems-custom-apps-short-16x9.mp4`
- **Runtime / delivery:** 21.168 seconds, 1920 × 1080 H.264/AAC, approximately 745 KB.
- **Narration:** Warm Ava Multilingual Neural voice, with conversational pacing.
- **Message:** The public site captures are explicitly identified as real examples of applications Zhi Systems has already made—not a fixed-product menu.