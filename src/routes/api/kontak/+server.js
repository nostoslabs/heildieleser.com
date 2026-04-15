import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const prerender = false;

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 10_000;
const MIN_FILL_MS = 2000; // humans take at least 2 s to fill the form
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST({ request }) {
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;
  const apiKey = env.RESEND_API_KEY;

  if (!toEmail || !fromEmail || !apiKey) {
    return json(
      { error: 'Die kontakvorm is nog nie op die bediener ingestel nie.' },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Ongeldige versoek.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const fromAddr = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim() || '’n Briefie oor Heil die Leser';
  const message = String(body.message ?? '').trim();
  const honey = String(body.website ?? '').trim();
  const ts = Number(body.ts ?? 0);

  // Silent traps — pretend success so the bot moves on.
  if (honey.length > 0) return json({ ok: true });
  if (ts > 0 && Date.now() - ts < MIN_FILL_MS) return json({ ok: true });

  if (!name || name.length > MAX_NAME) {
    return json({ error: 'Die naam-veld is leeg of te lank.' }, { status: 400 });
  }
  if (fromAddr.length > MAX_EMAIL || !EMAIL_RE.test(fromAddr)) {
    return json({ error: 'Die e-pos adres lyk nie reg nie.' }, { status: 400 });
  }
  if (subject.length > MAX_SUBJECT) {
    return json({ error: 'Die onderwerp is te lank.' }, { status: 400 });
  }
  if (!message || message.length > MAX_MESSAGE) {
    return json({ error: 'Die boodskap is leeg of te lank.' }, { status: 400 });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(fromAddr),
    subject: escapeHtml(subject),
    message: escapeHtml(message)
  };

  const html = `
    <h2 style="font-family: Georgia, serif; margin: 0 0 1rem">Nuwe briefie via heildieleser.com</h2>
    <p style="margin: 0.3rem 0"><strong>Van:</strong> ${safe.name} &lt;${safe.email}&gt;</p>
    <p style="margin: 0.3rem 0"><strong>Onderwerp:</strong> ${safe.subject}</p>
    <hr style="margin: 1rem 0; border: 0; border-top: 1px solid #ccc" />
    <div style="white-space: pre-wrap; font-family: Georgia, serif; line-height: 1.55">${safe.message}</div>
  `;

  const text = `Nuwe briefie via heildieleser.com\n\nVan: ${name} <${fromAddr}>\nOnderwerp: ${subject}\n\n---\n\n${message}`;

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: fromAddr,
      subject: `[Heil die Leser] ${subject}`,
      html,
      text
    })
  });

  if (!resp.ok) {
    const errBody = await resp.text().catch(() => '');
    console.error('Resend API error', resp.status, errBody);
    return json(
      { error: 'Die bediener kon nie die briefie stuur nie. Probeer asseblief later weer.' },
      { status: 502 }
    );
  }

  return json({ ok: true });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
