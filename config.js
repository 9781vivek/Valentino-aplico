/**
 * ══════════════════════════════════════════════
 *   LOVE EXPERIMENT — CONFIGURATION FILE
 *   Safe to edit — no secrets here!
 *   API key lives in proxy.js (server-side only)
 * ══════════════════════════════════════════════
 */
const CONFIG = {

  /* ── Names ─────────────────────────────────── */
  recipientName: "RECIPIENT_PLACEHOLDER", // Managed via .env / Render Env Vars
  senderName:    "SENDER_PLACEHOLDER",    // Managed via .env / Render Env Vars

  /* ── Theme ──────────────────────────────────── */
  themeColor: "#e91e8c",             // Main brand/accent color (CSS hex)

  /* ── Game ───────────────────────────────────── */
  gameDuration: 20,                  // Heart-catching game duration in seconds

  /* ── Background Music ───────────────────────── */
  backgroundMusic: null,             // Set to an MP3 URL string to enable music

  /* ── Email Proxy ─────────────────────────────── */
  // Auto-detects if running locally or on a server
  emailProxyUrl: window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3001/send" 
    : "/send",

  /* ── Quiz Data ───────────────────────────────── */
  // Make the journey more lovable and mind-blowing!
  quizData: [
    {
      question: "Calibration Phase: Heart Frequency Check",
      sub: "We need to ensure your emotional receptors are functioning at 100%.",
      options: [
        { label: "My heart is racing! 💓", response: "Excellent. High frequency detected. Proceeding to Phase 1." },
        { label: "I'm ready for science! 🧪", response: "Intellect and emotion balanced. Perfect. Let's begin." },
        { label: "Who is Vivek? 🤔", response: "System Error: Sarcasm detected. Calibrating humor sensors... Proceeding anyway!" }
      ]
    },
    {
      question: "Hypothetical Scenario: The Moon Trip",
      sub: "If Vivek offered to take you to the moon for a picnic, what would you pack?",
      options: [
        { label: "Just us and some snacks 🧺", response: "Romantic and practical. Science approves of this picnic." },
        { label: "A spacesuit (safety first!) 👨‍🚀", response: "A cautious romantic. Vivek will bring the oxygen... and the love." },
        { label: "I'd stay on Earth with him 🌍", response: "Awww. This answer actually broke our cuteness meter." }
      ]
    },
    {
      question: "The Mystery Box",
      sub: "Vivek hands you a small, glowing box. Inside is one thing that represents your bond. What is it?",
      options: [
        { label: "An infinite supply of smiles 😊", response: "Smiling bandwidth: UNLIMITED. Connection status: STRONG." },
        { label: "A map of all our future trips ✈️", response: "Adventure coefficient: MAXIMUM. Prepare for takeoff." },
        { label: "A mirror reflecting 'US' 🪞", response: "The mirror shows a 100% compatibility match. Truly scientific." }
      ]
    },
    {
      question: "The Time Capsule",
      sub: "If you could freeze one single moment between you and Vivek forever, which would it be?",
      options: [
        { label: "Our first laughter together 😂", response: "Joy levels: Perpetual. That laughter is now backed up in our cloud." },
        { label: "The quiet moments of peace ☕", response: "Soul-to-soul connection: 100%. Silence speaks volumes in science." },
        { label: "Every future second ⏳", response: "Time Dilation detected. You've officially broken the laws of physics with love." }
      ]
    },
    {
      question: "The Dream Architect",
      sub: "If you were building a secret garden representing your future, what's the centerpiece?",
      options: [
        { label: "A fountain of infinite travel ✈️", response: "Adventure coefficient: Infinite. Pack your bags for a lifetime." },
        { label: "A tree for our growing memories 🌳", response: "Growth status: Organic and robust. Deep roots detected." },
        { label: "An bench meant only for 'US' 🫂", response: "Intimacy level: Off the charts. The world just faded away." }
      ]
    },
    {
      question: "Superpower Selection",
      sub: "If you could have one silly superpower only when you're with Vivek, what would it be?",
      options: [
        { label: "Telepathy (Knowing his thoughts) 🧠", response: "Reading: 'I am so lucky to have her.' (That was easy!)" },
        { label: "Freezing time during hugs ⏱️", response: "Temporal distortion found. Hug duration: Eternal." },
        { label: "Generating infinite snacks 🍕", response: "Survival strategy: Excellent. Love is sweet, but pizza is life." }
      ]
    },
    {
      question: "The Music of 'US'",
      sub: "If your journey together was a soundtrack, what would be the main theme?",
      options: [
        { label: "A wild, happy adventure 🎸", response: "Rhythm: Upbeat. Harmony: Perfect. We're turning the volume to 11." },
        { label: "A soft, romantic melody 🎻", response: "Soundscape: Serene. You've created a masterpiece together." },
        { label: "A song that never ends 🔁", response: "Looped detected. This is a classic that will top the charts forever." }
      ]
    },
    {
      question: "Final Analysis: The Soulmate Factor",
      sub: "Our supercomputers are crunching the numbers. Is it possible that you two are meant to be?",
      options: [
        { label: "Mathematically certain ♾️", response: "Physics, Math, and Love align. Error 404: Logic not found, only Love." },
        { label: "Science says YES! 🧪", response: "Official Lab Report: You are officially the best thing that ever happened to Vivek." },
        { label: "I just feel it... ❤️", response: "The purest form of data. We are closing the experiment now." }
      ]
    }
  ]
};
