import Image from "next/image";
import { CalendarCheck, ArrowRight,
  BadgeIndianRupee,
  BedDouble,
  CarFront,
  Headset,
  MapPinned,
  Quote,
  Route,
  Sparkles, } from "lucide-react";
import { DESTINATIONS, img, PRIMARY_PHONE, TESTIMONIALS, whatsappLink } from "@/lib/site";
import { Container, Eyebrow, Section, SectionHeading, WhatsAppIcon, btn } from "./ui";
import { EnquiryButton } from "./EnquiryModal";
import EnquiryForm from "./EnquiryForm";

/* ------------------------------------------------------------------ */
/* Google Ads conversion banner                                        */
/* ------------------------------------------------------------------ */
export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-14 sm:py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[20px] bg-navy px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <Image
            src={img("Snowmobile Adventure Through Alpine Peaks.png")}
            alt=""
            fill
            quality={60}
            sizes="(max-width: 1280px) 100vw, 1216px"
            className="-z-10 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/30"
          />
          <div className="max-w-xl">
            <Eyebrow light>Free trip planning</Eyebrow>
            <h2 id="cta-title" className="font-serif text-[28px] leading-tight font-semibold text-white sm:text-[38px]">
              Planning a Kashmir Trip?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80 sm:text-[17px]">
              Get a personalized Kashmir tour package designed around your travel dates, budget and preferred
              destinations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <EnquiryButton className={btn("primary", "lg", "w-full sm:w-auto")}>
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book Now
                <ArrowRight className="size-4" aria-hidden="true" />
              </EnquiryButton>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className={btn("whatsapp", "lg", "w-full sm:w-auto")}
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Destinations                                                        */
/* ------------------------------------------------------------------ */
export function Destinations() {
  return (
    <Section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-16 bg-mist">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="destinations-title"
            align="left"
            eyebrow="Places to visit in Kashmir"
            title="Explore the Best Destinations in Kashmir"
          >
            Discover the most popular places to visit in Kashmir including Srinagar, Gulmarg, Pahalgam and Sonamarg
            with our carefully planned Kashmir tour packages.
          </SectionHeading>
          <a href="#packages" className={btn("secondary", "md", "shrink-0 max-md:hidden")}>
            Explore Packages
          </a>
        </div>
      </Container>

      {/* Mobile: swipeable row. sm+: grid */}
      <div className="mx-auto mt-10 w-full max-w-7xl sm:px-6 lg:mt-12 lg:px-8">
        <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <li key={d.slug} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <a
                href={`#guide-${d.slug}`}
                className="group relative block aspect-4/3 overflow-hidden rounded-[18px] bg-mist sm:aspect-16/11"
              >
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  quality={60}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-navy-deep/90 via-navy-deep/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <h3 className="font-serif text-[22px] font-semibold">{d.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[13.5px] leading-snug text-white/80">{d.text}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                    Explore Destination
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */
const FEATURES = [
  {
    icon: MapPinned,
    title: "Local Kashmir Travel Experts",
    text: "We are based in Kashmir, so our advice on routes, weather and hotels comes from the ground — not a call centre.",
  },
  {
    icon: Route,
    title: "Customized Kashmir Itineraries",
    text: "Every Kashmir trip is planned around your dates, pace, group and budget — nothing is one-size-fits-all.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Hotel Stays",
    text: "Clean, well-located hotels and Dal Lake houseboats, from budget-friendly to premium options.",
  },
  {
    icon: CarFront,
    title: "Private Transfers",
    text: "Airport pick-up, drop and sightseeing in a private vehicle with an experienced local driver.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    text: "A clear Kashmir trip cost with inclusions and exclusions spelled out — no hidden charges.",
  },
  {
    icon: Headset,
    title: "24×7 Trip Assistance",
    text: "Support before, during and after your journey, just a call or WhatsApp message away.",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-us" aria-labelledby="why-title" className="bg-white">
      <Container>
        <SectionHeading id="why-title" eyebrow="About Land Insight Kashmir Tour" title="Why Choose Our Kashmir Tour Packages?">
          A Kashmir-based travel agency and tour operator planning stays, transport and sightseeing so your Kashmir
          holiday feels effortless.
        </SectionHeading>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group rounded-[18px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift sm:p-7"
            >
              <span className="grid size-13 place-items-center rounded-full border border-gold/60 bg-ivory text-navy transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Custom trip (split)                                                 */
/* ------------------------------------------------------------------ */
export function CustomTrip() {
  return (
    <Section id="plan-trip" aria-labelledby="plan-title" className="bg-mist">
      <Container className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-line sm:min-h-[420px]">
          <Image
            src={img("Vibrant Tulip Garden Beneath Snowy Peaks.png")}
            alt="Tulip garden beneath snowy peaks on a custom Kashmir trip"
            fill
            quality={60}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-card sm:inset-x-6 sm:bottom-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <p className="text-[13.5px] leading-snug text-ink/80">
              <span className="block font-semibold text-navy">Honeymoon, family, group or trek?</span>
              Tell us your plan — we&apos;ll design the itinerary.
            </p>
          </div>
        </div>

        <div className="rounded-[20px] border border-line bg-white p-6 shadow-card sm:p-8 lg:p-10">
          <Eyebrow>Tailor-made Kashmir holiday</Eyebrow>
          <h2 id="plan-title" className="font-serif text-[28px] leading-tight font-semibold text-navy sm:text-[34px]">
            Create Your Perfect Kashmir Trip
          </h2>
          <p className="mt-3 mb-7 text-[15px] leading-relaxed text-ink/70">
            Every traveller is different. Tell us your dates, group size, preferred destinations and budget, and our
            Kashmir travel experts will help create a personalized itinerary.
          </p>
          <EnquiryForm variant="custom" submitLabel="Create My Kashmir Itinerary" />
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials (genuine reviews from the source site, unattributed)   */
/* ------------------------------------------------------------------ */
export function Testimonials() {
  return (
    <Section id="reviews" aria-labelledby="reviews-title" className="bg-white">
      <Container>
        <SectionHeading
          id="reviews-title"
          eyebrow="Traveller reviews"
          title="What Our Travellers Say About Their Kashmir Trip"
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <li key={i}>
              <figure className="flex h-full flex-col rounded-[18px] border border-line bg-mist/50 p-6 sm:p-7">
                <Quote className="size-8 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4 text-[13.5px]">
                  <span className="block font-semibold text-navy">Traveller review</span>
                  <span className="text-ink/70">{t.trip}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Final dark CTA                                                      */
/* ------------------------------------------------------------------ */
export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="final-title" className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[480px] rounded-full bg-brand/20 blur-3xl"
      />
      <Container className="relative text-center">
        <Eyebrow light>Talk to a local expert</Eyebrow>
        <h2 id="final-title" className="font-serif text-[30px] leading-tight font-semibold text-white sm:text-[42px]">
          Your Kashmir Adventure Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[16px] text-white/75">
          Plan your Kashmir holiday with local travel experts.
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <EnquiryButton className={btn("primary", "lg", "w-full sm:w-auto")}>
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Now
          </EnquiryButton>
          <a href={whatsappLink()} target="_blank" rel="noopener" className={btn("whatsapp", "lg", "w-full sm:w-auto")}>
            <WhatsAppIcon className="size-5" />
            WhatsApp Us
          </a>
        </div>
        <p className="mt-6 text-[15px] text-white/70">
          Or call us on{" "}
          <a href={`tel:${PRIMARY_PHONE.tel}`} className="font-semibold text-white underline-offset-4 hover:underline">
            {PRIMARY_PHONE.display}
          </a>
        </p>
      </Container>
    </section>
  );
}
