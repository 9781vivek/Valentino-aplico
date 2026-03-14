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

  /* ── Email Proxy ─────────────────────────────── */
  // Auto-detects if running locally or on a server
  emailProxyUrl: window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3001/send" 
    : "/send",

};
