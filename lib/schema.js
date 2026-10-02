import { DESTINATIONS, FAQS, PACKAGES, PAGE_URL, SITE } from "./site";

// JSON-LD for the Kashmir tour package landing page. Uses only real business
// data — no ratings or reviews; a price Offer is added only for packages with a confirmed price.
export function landingPageSchema() {
  const orgId = `${SITE.url}/#travelagency`;
  const websiteId = `${SITE.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": orgId,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/images/logo.png`,
        image: `${SITE.url}/og-kashmir-tour-package.jpg`,
        description:
          "Local Kashmir travel agency offering customised Kashmir tour packages with hotels, meals, private transfers and sightseeing.",
        telephone: SITE.phones.map((p) => p.tel),
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.country,
        },
        areaServed: [
          { "@type": "State", name: "Jammu and Kashmir" },
          { "@type": "AdministrativeArea", name: "Ladakh" },
        ],
        contactPoint: SITE.phones.map((p) => ({
          "@type": "ContactPoint",
          telephone: p.tel,
          contactType: "reservations",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
        })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": orgId },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Kashmir Tour Package | Kashmir Tour Packages & Holiday Packages",
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        primaryImageOfPage: `${SITE.url}/og-kashmir-tour-package.jpg`,
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Kashmir Tour Package", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#packages`,
        name: "Popular Kashmir Tour Packages",
        itemListElement: PACKAGES.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "TouristTrip",
            name: p.fullName,
            description: p.summary,
            url: `${PAGE_URL}#${p.slug}`,
            image: `${SITE.url}${p.image}`,
            touristType: p.idealFor,
            provider: { "@id": orgId },
            ...(p.price
              ? {
                  offers: {
                    "@type": "Offer",
                    price: p.price,
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url: `${PAGE_URL}#${p.slug}`,
                    description: "Starting price per person",
                  },
                }
              : {}),
            itinerary: {
              "@type": "ItemList",
              itemListElement: p.route.map((place, j) => ({
                "@type": "ListItem",
                position: j + 1,
                item: { "@type": "Place", name: place },
              })),
            },
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Best Destinations in Kashmir",
        itemListElement: DESTINATIONS.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "TouristDestination", name: d.name, description: d.text },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
