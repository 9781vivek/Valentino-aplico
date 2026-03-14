/**
 * ══════════════════════════════════════════════
 *   LOVE EXPERIMENT — EMAIL PROXY SERVER
 *   Run: node proxy.js
 *   Keeps the API key out of the browser!
 * ══════════════════════════════════════════════
 */

const http = require('http');
const https = require('https');

// ─── SECRET CONFIG (never sent to the browser) ───────────────────────────────
const SECRET = {
  resendApiKey:    're_Ugmwhrdc_9yUAQMPeA99ZjsEsbjAEd1fL',
  resendFromEmail: 'onboarding@resend.dev',   // Must be a Resend-verified domain
  resendToEmail:   'vv04148@gmail.com',
};

const PORT = 3001;

// ─── ALLOWED ORIGINS ─────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:3000',
  'null',   // file:// origins appear as 'null'
];

// ─── SERVER ───────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const origin = req.headers['origin'] || '';

  // CORS headers — only allow known local origins
  if (ALLOWED_ORIGINS.includes(origin) || origin === '') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Pre-flight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Only handle POST /send
  if (req.method !== 'POST' || req.url !== '/send') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  // Collect body
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    let payload;
    try {
      payload = JSON.parse(body);
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
      return;
    }

    // Build email request to Resend
    const emailData = JSON.stringify({
      from:    SECRET.resendFromEmail,
      to:      [SECRET.resendToEmail],
      subject: payload.subject || '💘 Love Experiment Results',
      html:    payload.html    || '',
    });

    const options = {
      hostname: 'api.resend.com',
      path:     '/emails',
      method:   'POST',
      headers: {
        'Authorization': `Bearer ${SECRET.resendApiKey}`,
        'Content-Type':  'application/json',
        'Content-Length': Buffer.byteLength(emailData),
      },
    };

    const proxyReq = https.request(options, (proxyRes) => {
      let data = '';
      proxyRes.on('data', chunk => (data += chunk));
      proxyRes.on('end', () => {
        res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
        res.end(data);
        if (proxyRes.statusCode === 200 || proxyRes.statusCode === 201) {
          console.log(`✅ Email sent successfully to ${SECRET.resendToEmail}`);
        } else {
          console.error(`❌ Resend error ${proxyRes.statusCode}: ${data}`);
        }
      });
    });

    proxyReq.on('error', (err) => {
      console.error('❌ Proxy request failed:', err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Proxy error', detail: err.message }));
    });

    proxyReq.write(emailData);
    proxyReq.end();
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Love Experiment Email Proxy`);
  console.log(`   Listening on http://localhost:${PORT}`);
  console.log(`   POST http://localhost:${PORT}/send  →  Resend API`);
  console.log(`   API key is hidden server-side — never reaches the browser!\n`);
});
