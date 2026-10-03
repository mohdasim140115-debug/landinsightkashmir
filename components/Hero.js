import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { CalendarCheck, ArrowRight,
  BadgeIndianRupee,
  Clock3,
  Flower2,
  Headset,
  Hotel,
  MapPinned,
  Plane,
  Route,
  ShieldCheck,
  UsersRound, } from "lucide-react";
import { Container, Ornament, btn } from "./ui";
import { EnquiryButton } from "./EnquiryModal";
import EnquiryForm from "./EnquiryForm";
import { img } from "@/lib/site";

// Drop a clean banner photo into public/images as banner.(jpg|jpeg|png|webp)
// and it is picked up automatically at build time. Falls back to Dal Lake.
const BANNER_FILE = ["banner.jpg", "banner.jpeg", "banner.png", "banner.webp"].find((f) =>
  fs.existsSync(path.join(process.cwd(), "public", "images", f))
);
const HERO_IMAGE = BANNER_FILE
  ? { src: `/images/${BANNER_FILE}`, alt: "Kashmir tour package – houseboat view over Dal Lake, Srinagar" }
  : {
      src: img("Snowy Mountain Lake Village at Golden Hour.png"),
      alt: "Kashmir tour package – houseboats and shikara on Dal Lake, Srinagar",
    };

const POINTS = [
  { icon: UsersRound, label: "Local Kashmir Experts" },
  { icon: Route, label: "Custom Itineraries" },
  { icon: Hotel, label: "Hotel + Sightseeing" },
  { icon: Headset, label: "24×7 Trip Support" },
];

const FORM_TRUST = [
  { icon: BadgeIndianRupee, label: "Transparent Pricing" },
  { icon: Route, label: "Customised Itineraries" },
  { icon: Headset, label: "24×7 Support" },
];

function MountainGlyph({ className = "" }) {
  return (
    <svg viewBox="0 0 48 24" aria-hidden="true" className={className}>
      <path d="M2 22 17 4l7 9 5-6 17 15Z" fill="#063b4c" />
      <path d="m17 4-4 5 4-1.5 3 2Z M29 7l-2.2 2.7 2.2-.8 2.4 1.6Z" fill="#fdf8ef" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy">
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        loading="eager"
        fetchPriority="high"
        quality={75}
        sizes="100vw"
        className="-z-10 object-cover object-[62%_80%] lg:object-[60%_center]"
      />
      {/* Readability overlays: strong on the copy side, light over the scenery */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-navy-deep/75 via-navy-deep/50 to-navy-deep/85 lg:bg-linear-to-r lg:from-navy-deep/85 lg:via-navy-deep/45 lg:to-navy-deep/5"
      />

      <Container className="grid items-center gap-10 pt-10 pb-16 sm:pt-12 lg:grid-cols-[1fr_400px] lg:gap-10 lg:pt-14 lg:pb-20 xl:grid-cols-[1fr_420px] xl:gap-14">
        <div className="max-w-[760px] text-white">
          <p className="hidden items-center gap-2.5 rounded-full border border-gold/70 sm:inline-flex bg-navy-deep/40 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase backdrop-blur-sm">
            <Flower2 className="size-4 text-gold" strokeWidth={1.75} aria-hidden="true" />
            Local Kashmir Travel Experts
          </p>
          <h1
            id="hero-title"
            className="font-serif text-[32px] sm:mt-4 leading-[1.12] font-semibold tracking-tight sm:text-[40px] lg:text-[31px] xl:text-[42px]"
          >
            Best Kashmir Tour Packages for an <br className="hidden lg:inline" />
            Unforgettable <span className="text-gold">Kashmir Trip</span>
          </h1>
          {/* Top-volume search terms (Google Keyword Planner): Kashmir tour packages, Kashmir trip,
              Kashmir holidays, Kashmir package, Kashmir trip package */}
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-white/85 sm:text-[16.5px] [&>strong]:font-semibold [&>strong]:text-white">
            Plan your <strong>Kashmir trip</strong> with local experts. Our <strong>Kashmir tour packages</strong> —
            from a short <strong>Kashmir package</strong> to a complete <strong>Kashmir trip package</strong> — cover
            Srinagar, Gulmarg, Pahalgam and Sonamarg with comfortable stays, sightseeing and private transfers for
            unforgettable <strong>Kashmir holidays</strong>.
          </p>

          <ul className="mt-6 hidden grid-cols-2 gap-x-4 gap-y-4 sm:grid sm:grid-cols-4 sm:gap-x-3">
            {POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-[13.5px] leading-snug font-medium text-white/90">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/70 bg-navy-deep/30 text-gold">
                  <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="max-w-[7.5rem]">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:gap-3">
            <a
              href="#packages"
              className={btn("primary", "lg", "w-full whitespace-nowrap shadow-lg shadow-brand/25 max-sm:gap-1.5 max-sm:px-3 max-sm:text-[14.5px] sm:w-auto")}
            >
              <Plane className="size-4 max-sm:hidden" aria-hidden="true" />
              Explore <span className="hidden sm:inline">Kashmir</span> Packages
              <ArrowRight className="size-4 max-sm:hidden" aria-hidden="true" />
            </a>
            <EnquiryButton className={btn("dark", "lg", "w-full whitespace-nowrap max-sm:gap-1.5 max-sm:px-3 max-sm:text-[14.5px] sm:w-auto")}>
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Now
            </EnquiryButton>
          </div>
        </div>

        {/* Desktop only – on mobile the enquiry form opens as a pop-up instead */}
        <div id="enquiry" className="hidden scroll-mt-24 lg:block lg:pt-4">
          <div className="relative w-full rounded-[24px] border border-gold/30 bg-ivory shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)] lg:w-full">
            {/* Arched crown, echoing Kashmiri mihrab / houseboat woodwork */}
            <svg
              viewBox="0 0 160 40"
              aria-hidden="true"
              className="absolute -top-[26px] left-1/2 h-[40px] w-[160px] -translate-x-1/2"
            >
              <path
                d="M0 40 C28 40 44 36 58 24 C68 15 74 8 80 0 C86 8 92 15 102 24 C116 36 132 40 160 40Z"
                fill="#fdf8ef"
                stroke="rgb(239 181 74 / 0.3)"
              />
            </svg>
            <MountainGlyph className="absolute -top-2 left-1/2 h-6 w-12 -translate-x-1/2" />

            <div className="p-5 pt-8 sm:px-6 sm:pt-8 sm:pb-5">
              <div className="mb-4">
                <h2 className="font-serif text-[24px] font-semibold text-navy sm:text-[26px]">Plan Your Kashmir Trip</h2>
                <p className="mt-1 text-[14px] text-ink/65">
                  Share your travel details and get a free, no-obligation Kashmir tour package quote.
                </p>
              </div>
              <EnquiryForm variant="hero" submitLabel="Get My Free Quote" />
              <div className="mt-3">
                <Ornament />
              </div>
            </div>

            <ul className="grid grid-cols-3 gap-2 rounded-b-[24px] border-t border-gold/20 bg-ivory-deep px-4 py-3 sm:px-6">
              {FORM_TRUST.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[11.5px] leading-tight font-medium text-navy/80">
                  <Icon className="size-5 shrink-0 text-navy/70" strokeWidth={1.5} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

const TRUST = [
  { icon: MapPinned, title: "Local Kashmir Experts", text: "Kashmir-based team" },
  { icon: ShieldCheck, title: "Custom Tour Packages", text: "Built around your dates" },
  { icon: Hotel, title: "Comfortable Hotel Stays", text: "Hand-picked hotels & houseboats" },
  { icon: Clock3, title: "24×7 Travel Assistance", text: "Before, during & after the trip" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why travellers book with us" className="relative z-10 bg-mist">
      <Container>
        <ul className="-mt-8 grid grid-cols-2 gap-y-1 rounded-[20px] border border-line bg-white px-3 py-4 shadow-lift sm:px-4 lg:-mt-12 lg:grid-cols-4 lg:divide-x lg:divide-line lg:px-2 lg:py-6">
          {TRUST.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center gap-3 px-1 py-2.5 sm:px-3 lg:justify-center lg:px-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/60 bg-ivory text-navy">
                <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[13.5px] leading-snug font-semibold text-navy sm:text-[14.5px]">{title}</span>
                <span className="hidden text-[13px] text-ink/60 sm:block">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
