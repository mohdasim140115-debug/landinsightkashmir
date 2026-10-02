import { SITE, whatsappLink } from "@/lib/site";
import { Container } from "./ui";

// Placeholder layout for policy pages. The business has not published policy
// text, so these pages ask visitors to contact the team and are kept out of
// search results until the real content is added.
export default function PolicyPage({ title }) {
  return (
    <main className="min-h-screen bg-mist py-16 sm:py-24">
      <Container className="max-w-3xl">
        <a href={SITE.pagePath} className="text-[14px] font-semibold text-brand hover:underline">
          ← Back to Kashmir tour packages
        </a>
        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy sm:text-4xl">{title}</h1>
        <div className="mt-6 rounded-[18px] border border-line bg-white p-6 text-[15.5px] leading-relaxed text-ink/80 sm:p-8">
          <p>
            Our full {title.toLowerCase()} is being updated. For any questions about bookings, payments, changes or
            cancellations, please contact {SITE.name} directly:
          </p>
          <ul className="mt-4 space-y-1.5">
            {SITE.phones.map((p) => (
              <li key={p.tel}>
                Phone:{" "}
                <a href={`tel:${p.tel}`} className="font-medium text-brand">
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-brand">
                {SITE.email}
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener" className="font-medium text-brand">
                {SITE.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
}

export function policyMetadata(title, path) {
  return {
    title,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
  };
}
