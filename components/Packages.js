import Image from "next/image";
import { ArrowRight, BedDouble, Camera, Car, Clock3, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { PACKAGES, PRIMARY_PHONE, whatsappLink } from "@/lib/site";
import { Container, Section, SectionHeading, WhatsAppIcon, btn } from "./ui";
import PackageDialog from "./PackageDialog";
import { EnquiryButton } from "./EnquiryModal";

const INCLUDES = [
  { icon: BedDouble, label: "Hotel Stay", short: "Hotel" },
  { icon: UtensilsCrossed, label: "Meals", short: "Meals" },
  { icon: Car, label: "Private Transfers", short: "Transfers" },
  { icon: Camera, label: "Sightseeing", short: "Sightseeing" },
];

function duration(p) {
  return `${p.nights} Nights / ${p.days} Days`;
}

// Plain, serialisable package info passed to the client-side enquiry modal.
function modalInfo(p) {
  return { name: p.name, fullName: p.fullName, duration: duration(p), route: p.route.join(" • ") };
}

function PackageDetails({ p }) {
  return (
    <div>
      <div className="relative aspect-16/8 bg-mist">
        <Image src={p.image} alt="" fill sizes="(max-width: 672px) 100vw, 672px" quality={70} className="object-cover" />
      </div>
      <div className="p-5 sm:p-7">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-brand uppercase">{duration(p)}</p>
        <p className="mt-1 font-serif text-2xl font-semibold text-navy">{p.fullName}</p>
        <p className="mt-2 flex items-start gap-1.5 text-[14px] text-ink/70">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
          {p.route.join(" • ")}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{p.summary}</p>

        <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-mist p-4 text-[14px] sm:grid-cols-4">
          {INCLUDES.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-navy">
              <Icon className="size-4 text-brand" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <h4 className="mt-6 text-[15px] font-semibold text-navy">Indicative day-wise plan</h4>
        <ol className="mt-3 space-y-3 border-l border-line pl-5">
          {p.itinerary.map(([title, text], i) => (
            <li key={title + i} className="relative">
              <span className="absolute top-1 -left-[25px] size-2.5 rounded-full border-2 border-white bg-brand ring-1 ring-brand" />
              <p className="text-[14px] font-semibold text-navy">
                Day {i + 1}: {title}
              </p>
              <p className="text-[14px] leading-relaxed text-ink/70">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[12.5px] text-ink/55">
          {p.note ? `${p.note} ` : ""}Every itinerary is customised to your dates, hotels and pace.
        </p>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
          <EnquiryButton pkg={modalInfo(p)} />
          <a
            href={whatsappLink(`Hi, I'm interested in the ${p.fullName} (${duration(p)}). Please share details.`)}
            target="_blank"
            rel="noopener"
            className={btn("whatsapp", "md", "w-full")}
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function PriceTag({ p }) {
  if (!p.price) {
    return (
      <div>
        <p className="text-[11.5px] font-medium text-ink/55">Price per person</p>
        <p className="text-[17px] font-bold text-navy">On request</p>
      </div>
    );
  }
  return (
    <div>
      <p className="text-[11.5px] font-medium text-ink/55">Starting from</p>
      <p className="flex items-baseline gap-2">
        <span className="text-[24px] leading-tight font-extrabold text-brand">{inr.format(p.price)}</span>
        {p.mrp ? <span className="text-[13px] text-ink/45 line-through">{inr.format(p.mrp)}</span> : null}
        <span className="text-[12.5px] font-medium text-ink/60">/ person</span>
      </p>
    </div>
  );
}

function PackageCard({ p }) {
  return (
    <article
      id={p.slug}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-mist">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          quality={70}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3.5">
          <span className="rounded-lg bg-white/95 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-navy uppercase shadow-sm">
            {p.tag}
          </span>
          {p.discount ? (
            <span className="rounded-lg bg-brand px-2.5 py-1 text-[12px] font-bold text-white shadow-sm">
              {p.discount}% OFF
            </span>
          ) : null}
        </div>
        <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-lg bg-navy-deep/80 px-2.5 py-1 text-[12.5px] font-medium text-white backdrop-blur-sm">
          <Clock3 className="size-3.5" aria-hidden="true" />
          {duration(p)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[20px] leading-snug font-semibold text-navy">{p.name}</h3>
        <p className="mt-1 flex items-start gap-1.5 text-[13px] font-medium text-brand">
          <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {p.route.join(" • ")}
        </p>
        <p className="mt-2.5 line-clamp-2 text-[13.5px] leading-relaxed text-ink/70">{p.summary}</p>

        <ul className="mt-3.5 flex flex-wrap gap-x-3.5 gap-y-1.5 text-[12.5px] font-medium text-ink/75" aria-label="Inclusions">
          {INCLUDES.map(({ icon: Icon, label, short }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Icon className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
              {short}
            </li>
          ))}
        </ul>

        <div className="min-h-4 flex-1" aria-hidden="true" />
        <div className="flex items-end justify-between gap-3 border-t border-line pt-3.5">
          <PriceTag p={p} />
          <PackageDialog
            id={`${p.slug}-details`}
            label={
              <>
                View details
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </>
            }
            title={p.fullName}
            buttonClassName="mb-1 inline-flex shrink-0 items-center gap-1 text-[13.5px] font-semibold text-brand hover:underline"
          >
            <PackageDetails p={p} />
          </PackageDialog>
        </div>

        <div className="mt-3.5 grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            className={btn("secondary", "md", "w-full gap-1.5 px-3 whitespace-nowrap")}
            aria-label={`Call about the ${p.fullName}`}
            data-cta="package-call"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <EnquiryButton pkg={modalInfo(p)} />
        </div>
      </div>
    </article>
  );
}

export default function Packages() {
  return (
    <Section id="packages" aria-labelledby="packages-title" className="bg-mist pt-14! sm:pt-16!">
      <Container>
        <SectionHeading id="packages-title" eyebrow="Kashmir holiday packages" title="Popular Kashmir Tour Packages">
          Choose from our popular Kashmir tour packages designed for couples, families, groups and travellers looking
          to explore the best of Kashmir.
        </SectionHeading>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {PACKAGES.map((p) => (
            <PackageCard key={p.slug} p={p} />
          ))}
        </div>

        <p className="mt-8 text-center text-[14px] text-ink/65">
          Every package includes hotels, meals, transfers and sightseeing — and can be fully customised.{" "}
          <a href="#plan-trip" className="font-semibold text-brand hover:underline">
            Build your own Kashmir itinerary →
          </a>
        </p>
      </Container>
    </Section>
  );
}
