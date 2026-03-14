/**
 * ══════════════════════════════════════════════
 *   LOVE EXPERIMENT — CONFIGURATION FILE
 *   Edit these values to personalize everything!
 * ══════════════════════════════════════════════
 */
const CONFIG = {

  /* ── Names ─────────────────────────────────── */
  recipientName: "Meenal Chettri",   // The lucky recipient
  senderName: "Vivek Verma",      // The sender (you!)

  /* ── Theme ──────────────────────────────────── */
  themeColor: "#e91e8c",          // Main brand/accent color (CSS hex)

  /* ── Game ───────────────────────────────────── */
  gameDuration: 25,                 // Heart-catching game duration in seconds

  /* ── Background Music ───────────────────────── */
  backgroundMusic: null,              // Set to an MP3 URL string to enable music
  // e.g. "https://example.com/song.mp3"

  /* ── Resend Email API ───────────────────────── */
  // Get a free API key at https://resend.com
  // ⚠️  This key is visible in browser source — for personal/private use only.
  // For production apps, move the API call to a backend/serverless function.
  resendApiKey: "re_Ugmwhrdc_9yUAQMPeA99ZjsEsbjAEd1fL",

  // Must be from a Resend-verified sender domain.
  // Quick-start: "onboarding@resend.dev" works immediately for testing.
  resendFromEmail: "vv04148@gmail.com",

  // Where you (the sender) will receive the experiment results
  resendToEmail: "vv04148@gmail.com",

};
