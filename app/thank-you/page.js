import { CheckCircle2, Clock3, FileText, Phone, PhoneCall } from "lucide-react";
import { Container, Logo, Ornament, WhatsAppIcon, btn } from "@/components/ui";
import { PRIMARY_PHONE, SITE, whatsappLink } from "@/lib/site";
import ConversionPing from "./ConversionPing";

export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

const STEPS = [
  { icon: FileText, title: "We review your details", text: "Our local Kashmir team checks your dates, group size and package." },
  { icon: PhoneCall, title: "We call or WhatsApp you", text: "Our team reaches out to understand exactly what you want." },
  { icon: Clock3, title: "You get your itinerary & price", text: "A clear day-by-day plan and quote — change anything you like." },
];

function first(value) {
  return (Array.isArray(value) ? value[0] : value || "").toString().slice(0, 80);
}

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const name = first(params.name);
  const pkg = first(params.package);
  const waText = pkg
    ? `Hi, I just sent an enquiry for the ${pkg}${name ? ` (name: ${name})` : ""}.`
    : `Hi, I just sent a Kashmir tour enquiry${name ? ` (name: ${name})` : ""}.`;

  return (
    <div className="min-h-screen bg-mist">
      <ConversionPing />
      <header className="border-b border-line bg-white">
        <Container className="flex h-[76px] items-center justify-between">
          <a href={SITE.pagePath} aria-label={`${SITE.name} – home`}>
            <Logo className="h-[58px] w-auto" />
          </a>
          <a href={`tel:${PRIMARY_PHONE.tel}`} className="flex items-center gap-2 text-[15px] font-semibold text-navy">
            <Phone className="size-4 text-brand" aria-hidden="true" />
            <span className="hidden sm:inline">{PRIMARY_PHONE.display}</span>
          </a>
        </Container>
      </header>

      <main className="py-12 sm:py-20">
        <Container className="max-w-2xl">
          <div className="overflow-hidden rounded-[24px] border border-line bg-white text-center shadow-lift">
            <div className="bg-navy px-6 pt-10 pb-8 text-white sm:px-10">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-white/10 ring-1 ring-gold/60">
                <CheckCircle2 className="size-9 text-gold" aria-hidden="true" />
              </span>
              <h1 className="mt-5 font-serif text-[30px] leading-tight font-semibold sm:text-[38px]">
                Thank you{name ? `, ${name}` : ""}!
              </h1>
              <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-relaxed text-white/80">
                {pkg ? (
                  <>
                    Your enquiry for the <strong className="text-white">{pkg}</strong> has been sent to our Kashmir travel
                    team.
                  </>
                ) : (
                  "Your Kashmir tour enquiry has been sent to our travel team."
                )}{" "}
                We&apos;ll be in touch with you shortly.
              </p>
            </div>

            <div className="px-6 py-8 sm:px-10">
              <Ornament />
              <h2 className="mt-4 text-[13px] font-semibold tracking-[0.16em] text-brand uppercase">What happens next</h2>
              <ol className="mt-5 grid gap-4 text-left sm:grid-cols-3">
                {STEPS.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className="rounded-2xl border border-line bg-mist/60 p-4">
                    <span className="flex items-center gap-2">
                      <span className="grid size-9 place-items-center rounded-full border border-gold/60 bg-ivory text-navy">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="text-[12px] font-semibold text-ink/70">Step {i + 1}</span>
                    </span>
                    <p className="mt-3 text-[14.5px] font-semibold text-navy">{title}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink/70">{text}</p>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-[14.5px] text-ink/70">Want a faster reply? Message or call us now:</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a href={whatsappLink(waText)} target="_blank" rel="noopener" className={btn("whatsapp", "lg", "w-full")}>
                  <WhatsAppIcon className="size-5" />
                  WhatsApp Us
                </a>
                <a href={`tel:${PRIMARY_PHONE.tel}`} className={btn("secondary", "lg", "w-full")}>
                  <Phone className="size-4" aria-hidden="true" />
                  Call {PRIMARY_PHONE.display}
                </a>
              </div>
              <a href={`${SITE.pagePath}#packages`} className="mt-6 inline-block text-[14px] font-semibold text-brand hover:underline">
                ← Back to Kashmir tour packages
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-[13px] text-ink/70">
            {SITE.email} · {SITE.phones.map((p) => p.display).join(" · ")}
          </p>
        </Container>
      </main>
    </div>
  );
}
