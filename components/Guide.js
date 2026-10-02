import { CalendarCheck, CalendarDays, Check, ChevronDown, Phone, Plane } from "lucide-react";
import { FAQS, PRIMARY_PHONE, whatsappLink } from "@/lib/site";
import { Container, Eyebrow, Section, SectionHeading, WhatsAppIcon, btn } from "./ui";
import { EnquiryButton } from "./EnquiryModal";

const PLACES = [
  {
    slug: "srinagar",
    name: "Srinagar",
    text: "The base for most Kashmir trips. Ride a shikara on Dal Lake, stay on a houseboat, and visit the Nishat, Shalimar and Chashme Shahi Mughal gardens. In spring, the Indira Gandhi Tulip Garden is a highlight.",
  },
  {
    slug: "gulmarg",
    name: "Gulmarg",
    text: "About two hours from Srinagar. Known for the Gulmarg Gondola, flower-filled meadows in summer and India's best-known ski slopes in winter.",
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    text: "A riverside town on the Lidder, with day trips to Betaab Valley, Aru Valley and Chandanwari. Ideal for an overnight stay on any Kashmir holiday package.",
  },
  {
    slug: "sonamarg",
    name: "Sonamarg",
    text: "The 'Meadow of Gold' on the Srinagar–Leh highway, with views of Thajiwas glacier. Usually covered as a day trip from Srinagar.",
  },
  {
    slug: "doodhpathri",
    name: "Doodhpathri",
    text: "A quieter meadow destination in Budgam district with open grasslands and streams — a peaceful add-on for families and couples.",
  },
  {
    slug: "yusmarg",
    name: "Yusmarg",
    text: "Pine-ringed pastures that feel far from the crowds. Perfect for picnics, pony rides and short walks.",
  },
];

const SEASONS = [
  ["March – May", "Spring blossoms, tulip season in Srinagar and pleasant days for sightseeing."],
  ["June – August", "Green meadows, cool weather and the best window for Kashmir and Ladakh road trips."],
  ["September – November", "Clear skies and golden chinar trees — a calm, beautiful time to travel."],
  ["December – February", "Snowfall, skiing in Gulmarg and classic winter Kashmir holidays."],
];

function Bullet({ children }) {
  return (
    <li className="flex gap-2.5">
      <Check className="mt-1 size-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export function SeoGuide() {
  return (
    <Section id="kashmir-guide" aria-labelledby="guide-title" className="bg-white">
      <Container className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
        <article className="max-w-3xl text-[15.5px] leading-[1.75] text-ink/80">
          <Eyebrow>Kashmir travel guide</Eyebrow>
          <h2 id="guide-title" className="font-serif text-[28px] leading-tight font-semibold text-navy sm:text-4xl">
            Kashmir Tour Packages for an Unforgettable Holiday
          </h2>
          <p className="mt-5">
            Kashmir is one of India&apos;s most loved holiday destinations — snow-capped peaks, alpine meadows, calm
            lakes and warm Kashmiri hospitality. A well-planned Kashmir tour package takes care of hotels, transfers
            and sightseeing so you can simply enjoy the journey. As a local Kashmir travel agency, we plan every
            Kashmir trip around how you like to travel.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-navy">Top places to include in your Kashmir trip</h3>
          <ul className="mt-4 space-y-4">
            {PLACES.map((p) => (
              <li key={p.slug} id={`guide-${p.slug}`} className="scroll-mt-28 rounded-2xl border border-line p-4 sm:p-5">
                <p className="font-semibold text-navy">{p.name}</p>
                <p className="mt-1 text-[15px] leading-relaxed">{p.text}</p>
                <a href="#packages" className="mt-2 inline-block text-[14px] font-semibold text-brand hover:underline">
                  See {p.name} tour packages →
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-navy">What a Kashmir tour package usually includes</h3>
          <ul className="mt-4 space-y-2">
            <Bullet>Hotel or houseboat stays in Srinagar, Gulmarg, Pahalgam or Sonamarg</Bullet>
            <Bullet>Meals as per the selected plan</Bullet>
            <Bullet>Private transfers, including Srinagar airport pick-up and drop</Bullet>
            <Bullet>Kashmir sightseeing by private vehicle as per the itinerary</Bullet>
            <Bullet>Trip support from our local team throughout your holiday</Bullet>
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-navy">Choosing the right Kashmir holiday package</h3>
          <p className="mt-3">
            <strong className="font-semibold text-navy">Kashmir honeymoon packages</strong> focus on romantic stays —
            a houseboat night on Dal Lake, snow in Gulmarg and quiet time in Pahalgam.{" "}
            <strong className="font-semibold text-navy">Kashmir family tour packages</strong> keep drives short and
            sightseeing relaxed for children and elders.{" "}
            <strong className="font-semibold text-navy">Kashmir group tour packages</strong> use larger vehicles and
            coordinated hotel blocks so friends, colleagues and large families travel together smoothly.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-navy">Best time for Kashmir sightseeing</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {SEASONS.map(([when, what]) => (
              <li key={when} className="rounded-2xl bg-mist p-4">
                <p className="flex items-center gap-2 text-[14px] font-semibold text-navy">
                  <CalendarDays className="size-4 text-brand" aria-hidden="true" />
                  {when}
                </p>
                <p className="mt-1 text-[14.5px] leading-relaxed">{what}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-navy">
            Kashmir packages from Delhi, Mumbai, Bangalore and Hyderabad
          </h3>
          <p className="mt-3">
            Most travellers fly into Srinagar, which has regular flights from Delhi, Mumbai, Bangalore, Hyderabad and
            other major cities. Travellers coming by train can reach Jammu or Katra and continue by road or rail. We
            plan your Kashmir itinerary around your arrival, with airport pick-up and drop included in every package.
          </p>
          <p className="mt-4 flex items-start gap-2.5 rounded-2xl border border-line p-4 text-[14.5px]">
            <Plane className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
            <span>
              Already booked your flights? Share them with us and we&apos;ll build your Jammu Kashmir tour package
              around your timings.{" "}
              <a href="#plan-trip" className="font-semibold text-brand hover:underline">
                Plan my itinerary →
              </a>
            </span>
          </p>
        </article>

        <aside className="lg:pt-10">
          <div className="rounded-[20px] border border-line bg-mist p-6 lg:sticky lg:top-28">
            <p className="font-serif text-xl font-semibold text-navy">Need help choosing?</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">
              Talk to a local Kashmir travel expert about routes, hotels and the best time for your trip.
            </p>
            <div className="mt-5 grid gap-2.5">
              <EnquiryButton className={btn("primary", "md", "w-full")}>
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book Now
              </EnquiryButton>
              <a href={whatsappLink()} target="_blank" rel="noopener" className={btn("whatsapp", "md", "w-full")}>
                <WhatsAppIcon className="size-5" />
                WhatsApp Us
              </a>
              <a href={`tel:${PRIMARY_PHONE.tel}`} className={btn("secondary", "md", "w-full")}>
                <Phone className="size-4" aria-hidden="true" />
                {PRIMARY_PHONE.display}
              </a>
            </div>
            <nav aria-label="Packages" className="mt-6 border-t border-line pt-5">
              <p className="text-[12px] font-semibold tracking-[0.14em] text-ink/55 uppercase">Popular packages</p>
              <ul className="mt-3 space-y-2 text-[14px]">
                {[
                  ["kashmir-paradise", "Kashmir Paradise"],
                  ["kashmir-honeymoon", "Kashmir Honeymoon"],
                  ["kashmir-family", "Kashmir Family"],
                  ["kashmir-group", "Kashmir Group"],
                ].map(([slug, name]) => (
                  <li key={slug}>
                    <a href={`#${slug}`} className="font-medium text-navy hover:text-brand">
                      {name} Tour Package
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </Container>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-title" className="bg-mist">
      <Container className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
        <div>
          <SectionHeading id="faq-title" align="left" eyebrow="FAQ" title="Kashmir Tour Package FAQs">
            Quick answers to the questions travellers ask us most before booking a Kashmir trip.
          </SectionHeading>
          <a href={`tel:${PRIMARY_PHONE.tel}`} className={btn("secondary", "md", "mt-7")}>
            <Phone className="size-4" aria-hidden="true" />
            Still have questions? Call us
          </a>
        </div>

        <div className="divide-y divide-line overflow-hidden rounded-[18px] border border-line bg-white">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-mist/60 sm:px-6 sm:py-5">
                <h3 className="text-[15.5px] font-semibold text-navy sm:text-[16.5px]">{f.q}</h3>
                <ChevronDown
                  className="size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/75 sm:px-6">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Keyword-rich "Trusted travel agency" copy below the FAQ.            */
/* Built from the top non-brand Kashmir terms in Google Keyword        */
/* Planner. Competitor brand terms are intentionally excluded.         */
/* ------------------------------------------------------------------ */
function K({ children, href }) {
  const text = <strong className="font-semibold text-navy">{children}</strong>;
  return href ? (
    <a href={href} className="underline decoration-brand/40 underline-offset-[3px] hover:decoration-brand">
      {text}
    </a>
  ) : (
    text
  );
}

export function TrustedAgency() {
  return (
    <section aria-labelledby="trusted-title" className="bg-mist pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="rounded-[20px] border border-line bg-white px-5 py-10 shadow-card sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <h2
            id="trusted-title"
            className="text-center font-serif text-[24px] leading-tight font-semibold tracking-[0.04em] text-navy uppercase sm:text-[32px]"
          >
            Trusted Travel Agency for Kashmir Tours
          </h2>

          <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-[15px] leading-[1.8] text-ink/75 sm:text-[15.5px]">
            <p>
              Plan your perfect <K>Kashmir vacation</K> with Land Insight Kashmir Tour — a Kashmir-based travel company
              offering <K href="#packages">Kashmir tour packages</K> for every kind of traveller. As local{" "}
              <K>Kashmir tour operators</K>, we put together <K>Kashmir holiday packages</K> at a fair price, whether you
              want <K href="#kashmir-honeymoon">Kashmir tour packages for couples</K>, a{" "}
              <K href="#kashmir-family">Kashmir tour package for family</K> holidays or{" "}
              <K href="#kashmir-group">Kashmir group tour packages</K>. Every <K>Kashmir trip package</K> is a
              customised <K>Kashmir itinerary</K> covering Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg
              &amp; Verinag.
            </p>
            <p>
              Get a clear <K>Kashmir trip cost</K> with no hidden charges and support before, during and after your
              journey. From houseboat stays on Dal Lake to <K>Gulmarg tour packages</K> with the Gondola and the
              meadows of Pahalgam, we handle the stays, transport and route so your <K>Kashmir holidays</K> feel
              effortless — a <K>Kashmir travel</K> experience worth remembering.
            </p>
          </div>

          <hr className="mx-auto my-9 max-w-4xl border-line" />

          <div className="mx-auto grid max-w-4xl gap-x-12 gap-y-6 text-[15px] leading-[1.8] text-ink/75 md:grid-cols-2">
            <p>
              Looking for the <K>cheapest tour packages for Kashmir</K> or a <K>Kashmir trip on a budget</K>? We build
              value itineraries with clean stays that still cover every highlight — plus premium and luxury options
              when you want to upgrade, including <K href="#kashmir-honeymoon">Kashmir honeymoon packages</K> for
              newlyweds.
            </p>
            <p>
              We plan <K>Kashmir trips</K> for travellers from Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata,
              Pune and Ahmedabad. Ask us about the best <K>Srinagar tour packages</K>, a{" "}
              <K>Kashmir package from Srinagar</K>, <K>Jammu Kashmir tour package</K> options or a combined{" "}
              <K href="#mata-vaishno-devi">Vaishno Devi and Kashmir tour package</K>.
            </p>
            <p>
              Not sure how many days you need? A <K>Kashmir itinerary for 5 days</K> covers Srinagar, Gulmarg and
              Pahalgam, while a <K>7-day Kashmir itinerary</K> adds Sonamarg and Doodhpathri. Short on time? A{" "}
              <K>Srinagar package for 4 nights</K> is a relaxed first <K>Kashmir tour plan</K>.
            </p>
            <p>
              Searching for the <K>best travel agency for a Kashmir tour</K>? Compare the{" "}
              <K href="#packages">best Kashmir tour packages</K> above, then share your dates — our{" "}
              <K>Kashmir tours and travels</K> team will send a day-by-day <K>Kashmir trip plan</K> and quote for{" "}
              <K>Jammu and Kashmir tour packages</K> built around you.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <EnquiryButton className={btn("primary", "md", "w-full sm:w-auto")}>
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Now
            </EnquiryButton>
            <a href={whatsappLink()} target="_blank" rel="noopener" className={btn("whatsapp", "md", "w-full sm:w-auto")}>
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
