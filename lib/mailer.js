import nodemailer from "nodemailer";
import { SITE } from "./site";

// Lead e-mails are sent through SMTP. For Gmail, create an App Password
// (Google Account → Security → 2-Step Verification → App passwords) and set:
//   SMTP_USER=reservationslandsinsight@gmail.com
//   SMTP_PASS=<16-character app password>
// Optional: SMTP_HOST (default smtp.gmail.com), SMTP_PORT (default 465),
//           ENQUIRY_TO_EMAIL (default: the business e-mail below).

export function mailerConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

let transporter;
function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

const LABELS = {
  package: "Package",
  name: "Name",
  phone: "Phone / WhatsApp",
  date: "Travel date",
  travellers: "Travellers",
  tripType: "Trip type",
  budget: "Budget",
  source: "Form",
  page: "Page",
  receivedAt: "Received",
};

const SOURCES = {
  "hero-quote": "Hero quote form",
  "custom-itinerary": "Create your Kashmir trip form",
  "package-modal": "Package enquiry pop-up",
  "book-now-modal": "Book Now pop-up",
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function rows(lead) {
  const istTime = new Date(lead.receivedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return Object.entries(LABELS)
    .map(([key, label]) => {
      let value = lead[key];
      if (key === "source") value = SOURCES[value] || value;
      if (key === "receivedAt") value = `${istTime} IST`;
      return value ? [label, value] : null;
    })
    .filter(Boolean);
}

export async function sendLeadEmail(lead) {
  const data = rows(lead);
  const digits = lead.phone.replace(/\D/g, "");
  const waNumber = digits.length === 10 ? `91${digits}` : digits;
  const subject = `New Kashmir tour enquiry – ${lead.name}${lead.package ? ` – ${lead.package}` : ""}`;

  const text = [`New enquiry from ${SITE.name} website`, "", ...data.map(([k, v]) => `${k}: ${v}`)].join("\n");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#18343d">
    <div style="background:#063b4c;color:#fff;padding:18px 22px;border-radius:12px 12px 0 0">
      <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#5bc0eb">New website enquiry</div>
      <div style="font-size:20px;font-weight:bold;margin-top:4px">${escapeHtml(lead.package || "Kashmir Tour Package")}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #d9eaf0;border-top:0">
      ${data
        .map(
          ([k, v], i) => `<tr style="background:${i % 2 ? "#f3fafd" : "#fff"}">
            <td style="padding:10px 14px;font-size:13px;color:#5b7279;width:38%">${escapeHtml(k)}</td>
            <td style="padding:10px 14px;font-size:14px;font-weight:bold">${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>
    <div style="padding:16px 0">
      <a href="tel:${escapeHtml(lead.phone)}" style="display:inline-block;background:#1597c5;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:bold;margin-right:8px">Call ${escapeHtml(lead.name)}</a>
      <a href="https://wa.me/${waNumber}" style="display:inline-block;background:#1da851;color:#fff;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:bold">WhatsApp</a>
    </div>
  </div>`;

  await getTransporter().sendMail({
    from: `"${SITE.name} Website" <${process.env.SMTP_USER}>`,
    to: process.env.ENQUIRY_TO_EMAIL || SITE.email,
    subject,
    text,
    html,
  });
}
