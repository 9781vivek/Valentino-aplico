/**
 * ══════════════════════════════════════════════
 *   LOVE EXPERIMENT — EMAIL PROXY SERVER (PRO)
 *   Keeps the API key out of the browser!
 * ══════════════════════════════════════════════
 */

require('dotenv').config(); // Loads variables from .env
const http = require('http');
const https = require('https');

// ─── CONFIG FROM ENVIRONMENT ───────────────────────────────
const SECRET = {
  resendApiKey:    process.env.RESEND_API_KEY,
  resendFromEmail: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
  resendToEmail:   process.env.RESEND_TO_EMAIL,
};

const PORT = 3001;

if (!SECRET.resendApiKey) {
  console.error("❌ ERROR: RESEND_API_KEY not found in .env file!");
  process.exit(1);
}

// ─── SERVER ───────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const origin = req.headers['origin'] || '';

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method !== 'POST' || req.url !== '/send') {
    res.writeHead(404); res.end(); return;
  }

  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    let payload;
    try { payload = JSON.parse(body); } catch { res.writeHead(400); res.end(); return; }

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
        if (proxyRes.statusCode < 300) {
          console.log(`✅ Email sent via PROXY to ${SECRET.resendToEmail}`);
        } else {
          console.error(`❌ Resend Error: ${data}`);
        }
      });
    });

    proxyReq.on('error', err => {
      res.writeHead(500); res.end();
    });

    proxyReq.write(emailData);
    proxyReq.end();
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Love Experiment Proxy RUNNING on http://localhost:${PORT}`);
  console.log(`   Using API Key: ${SECRET.resendApiKey.substring(0, 10)}... (HIDDEN)`);
  console.log(`   Sending to: ${SECRET.resendToEmail}\n`);
});
