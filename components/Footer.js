import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { DESTINATIONS, PACKAGES, PRIMARY_PHONE, SITE, whatsappLink } from "@/lib/site";
import { Container, Logo, WhatsAppIcon } from "./ui";
import { EnquiryButton } from "./EnquiryModal";

const FOOTER_PACKAGES = [
  "kashmir-paradise",
  "kashmir-honeymoon",
  "kashmir-family",
  "kashmir-group",
  "mata-vaishno-devi",
  "kashmir-leh-ladakh",
].map((slug) => PACKAGES.find((p) => p.slug === slug));

function ColTitle({ children }) {
  return <p className="mb-4 text-[13px] font-semibold tracking-[0.14em] text-white uppercase">{children}</p>;
}

const linkCls = "text-white/65 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep pb-24 text-[14.5px] text-white/65 lg:pb-0">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] lg:gap-12 lg:py-16">
        <div>
          <a href="#top" className="inline-flex rounded-2xl bg-white px-4 py-2.5" aria-label={`${SITE.name} – back to top`}>
            <Logo className="h-14 w-auto" />
          </a>
          <p className="mt-5 max-w-xs leading-relaxed">
            {SITE.name} is a local Kashmir travel agency offering customised Kashmir tour packages — hotels, meals,
            private transfers and sightseeing across Srinagar, Gulmarg, Pahalgam, Sonamarg and beyond.
          </p>
        </div>

        <nav aria-label="Kashmir tour packages">
          <ColTitle>Kashmir Tour Packages</ColTitle>
          <ul className="space-y-2.5">
            {FOOTER_PACKAGES.map((p) => (
              <li key={p.slug}>
                <a href={`#${p.slug}`} className={linkCls}>
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Popular destinations">
          <ColTitle>Popular Destinations</ColTitle>
          <ul className="space-y-2.5">
            {DESTINATIONS.map((d) => (
              <li key={d.slug}>
                <a href={`#guide-${d.slug}`} className={linkCls}>
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColTitle>Contact Us</ColTitle>
          <address className="space-y-3.5 not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {SITE.address.lines[0]},
                <br />
                {SITE.address.lines[1]}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="flex flex-col">
                {SITE.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className={linkCls}>
                    {p.display}
                  </a>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className={`${linkCls} break-all`}>
                {SITE.email}
              </a>
            </p>
            <p className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={whatsappLink()} target="_blank" rel="noopener" className={linkCls}>
                WhatsApp: {SITE.whatsapp.display}
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="/privacy-policy/" className={linkCls}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions/" className={linkCls}>
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="/cancellation-policy/" className={linkCls}>
                Cancellation Policy
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}

export function MobileCtaBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgb(6_59_76/0.25)] backdrop-blur lg:hidden"
    >
      <ul className="grid grid-cols-3 gap-2 p-2.5">
        <li>
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            className="flex h-12 flex-col items-center justify-center rounded-xl border border-line text-[12px] font-semibold text-navy"
            data-cta="mobile-call"
          >
            <Phone className="size-[18px] text-brand" aria-hidden="true" />
            Call
          </a>
        </li>
        <li>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="flex h-12 flex-col items-center justify-center rounded-xl bg-whatsapp text-[12px] font-semibold text-white"
            data-cta="mobile-whatsapp"
          >
            <WhatsAppIcon className="size-[18px]" />
            WhatsApp
          </a>
        </li>
        <li>
          <EnquiryButton className="flex h-12 flex-col items-center justify-center rounded-xl bg-brand text-[12px] font-semibold text-white w-full">
            <CalendarCheck className="size-[18px]" aria-hidden="true" />
            Book Now
          </EnquiryButton>
        </li>
      </ul>
    </nav>
  );
}
