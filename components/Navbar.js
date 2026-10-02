"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, ChevronDown, Menu, Phone, X } from "lucide-react";
import { PACKAGES, SITE } from "@/lib/site";
import { Container, Logo, btn } from "./ui";
import { EnquiryButton } from "./EnquiryModal";

export const NAV_LINKS = [
  { label: "Home", href: SITE.url + "/", active: true },
  {
    label: "Kashmir Packages",
    href: "#packages",
    children: PACKAGES.map((p) => ({ label: p.fullName, href: `#${p.slug}` })),
  },
  { label: "Honeymoon", href: "#kashmir-honeymoon" },
  { label: "About Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <Container className="flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
        <a href="#top" className="flex shrink-0 items-center" aria-label={`${SITE.name} – home`}>
          <Logo className="h-12 w-auto lg:h-[58px]" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.label} className="group relative">
                <a
                  href={l.href}
                  aria-current={l.active ? "page" : undefined}
                  className={`relative flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors hover:text-navy ${
                    l.active
                      ? "text-navy after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand"
                      : "text-ink/80"
                  }`}
                >
                  {l.label}
                  {l.children ? (
                    <ChevronDown
                      className="size-3.5 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  ) : null}
                </a>
                {l.children ? (
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-64 rounded-2xl border border-line bg-white p-2 shadow-lift">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <a
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-[14px] text-ink/80 hover:bg-mist hover:text-navy"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:gap-4">
          <a
            href={`tel:${SITE.phones[0].tel}`}
            className="flex items-center gap-2.5 text-navy transition-colors hover:text-brand"
            aria-label={`Call ${SITE.phones[0].display}`}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-mist text-brand">
              <Phone className="size-[18px]" aria-hidden="true" />
            </span>
            <span className="hidden leading-tight xl:block">
              <span className="block text-[11px] font-medium text-ink/55">Call us 24×7</span>
              <span className="block text-[15px] font-semibold">{SITE.phones[0].display}</span>
            </span>
          </a>
          <EnquiryButton className={btn("primary", "sm", "max-sm:hidden")}>
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Now
          </EnquiryButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-line text-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid border-t border-line bg-white transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          <Container className="py-4">
            <ul className="divide-y divide-line">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={close} className="block py-3 text-[15px] font-medium text-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 pb-2">
              <EnquiryButton onClick={close} className={btn("primary", "lg", "w-full")}>
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book Now
              </EnquiryButton>
              <a href={`tel:${SITE.phones[0].tel}`} className={btn("secondary", "lg", "w-full")}>
                <Phone className="size-4" aria-hidden="true" />
                Call {SITE.phones[0].display}
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
