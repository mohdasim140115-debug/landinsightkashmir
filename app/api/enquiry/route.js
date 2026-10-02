// Receives lead-form submissions and e-mails them to the business inbox
// (reservationslandsinsight@gmail.com). SMTP settings: see lib/mailer.js.
// Optionally also forwards each lead as JSON to ENQUIRY_WEBHOOK_URL
// (Google Sheet, Zapier, CRM…).

import { mailerConfigured, sendLeadEmail } from "@/lib/mailer";

const FIELDS = ["name", "phone", "date", "travellers", "tripType", "budget", "package", "source", "page"];

function clean(value, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function forwardToWebhook(lead) {
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) return;
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without delivering them.
  if (clean(body.company)) {
    return Response.json({ ok: true });
  }

  const lead = Object.fromEntries(FIELDS.map((f) => [f, clean(body[f], f === "page" ? 500 : 200)]));
  const digits = lead.phone.replace(/\D/g, "");
  if (!lead.name || digits.length < 10 || digits.length > 13) {
    return Response.json({ ok: false, error: "Name and a valid phone number are required" }, { status: 422 });
  }
  lead.receivedAt = new Date().toISOString();

  if (!mailerConfigured()) {
    console.warn("[enquiry] SMTP_USER / SMTP_PASS not set – lead NOT e-mailed:", lead);
    // In development, let the flow continue so the thank-you page can be tested.
    // In production, fail so the visitor is offered WhatsApp / call instead of losing the lead.
    if (process.env.NODE_ENV === "production") {
      return Response.json({ ok: false, error: "E-mail delivery is not configured" }, { status: 503 });
    }
    return Response.json({ ok: true, emailed: false });
  }

  const results = await Promise.allSettled([sendLeadEmail(lead), forwardToWebhook(lead)]);
  const [mail, hook] = results;
  if (hook.status === "rejected") console.error("[enquiry] Webhook failed:", hook.reason);
  if (mail.status === "rejected") {
    console.error("[enquiry] E-mail failed:", mail.reason, lead);
    return Response.json({ ok: false, error: "Could not deliver enquiry" }, { status: 502 });
  }
  return Response.json({ ok: true, emailed: true });
}
