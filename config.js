/**
 * ══════════════════════════════════════════════
 *   LOVE EXPERIMENT — CONFIGURATION FILE
 *   Safe to edit — no secrets here!
 *   API key lives in proxy.js (server-side only)
 * ══════════════════════════════════════════════
 */
const CONFIG = {

  /* ── Names ─────────────────────────────────── */
  recipientName: "Meenal Chettri",   // The lucky recipient
  senderName:    "Vivek Verma",      // The sender (you!)

  /* ── Theme ──────────────────────────────────── */
  themeColor: "#e91e8c",             // Main brand/accent color (CSS hex)

  /* ── Game ───────────────────────────────────── */
  gameDuration: 25,                  // Heart-catching game duration in seconds

  /* ── Background Music ───────────────────────── */
  backgroundMusic: null,             // Set to an MP3 URL string to enable music
  // e.g. "https://example.com/song.mp3"

  /* ── Email Proxy ─────────────────────────────── */
  // The local proxy server handles API calls — key never touches the browser!
  emailProxyUrl: "http://localhost:3001/send",

};
