import Header from "@/components/Header";
import { Hero, TrustStrip } from "@/components/Hero";
import Packages from "@/components/Packages";
import { CtaBanner, CustomTrip, Destinations, FinalCta, Testimonials, WhyChooseUs } from "@/components/Sections";
import { Faq, SeoGuide, TrustedAgency } from "@/components/Guide";
import { Footer, MobileCtaBar } from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import { JsonLd, landingPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const TITLE = "Kashmir Tour Package | Kashmir Tour Packages & Holiday Packages";
const DESCRIPTION =
  "Book a Kashmir tour package with local experts. Customised Kashmir trip packages covering Srinagar, Gulmarg, Pahalgam & Sonamarg with hotels, meals, private transfers and sightseeing. Get a free quote.";
const OG_IMAGE = {
  url: "/og-kashmir-tour-package.jpg",
  width: 1200,
  height: 630,
  alt: "Shikaras on Dal Lake, Srinagar – Kashmir tour package",
};

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Kashmir tour package",
    "Kashmir tour packages",
    "Kashmir trip package",
    "Kashmir holiday package",
    "Kashmir honeymoon package",
    "Kashmir family tour package",
    "Kashmir group tour package",
    "Kashmir travel agency",
  ],
  alternates: { canonical: SITE.pagePath },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.pagePath,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function KashmirTourPackagePage() {
  return (
    <>
      <JsonLd data={landingPageSchema()} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Packages />
        <CtaBanner />
        <Destinations />
        <WhyChooseUs />
        <CustomTrip />
        <Testimonials />
        <SeoGuide />
        <Faq />
        <TrustedAgency />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
      <EnquiryModal autoOpen />
    </>
  );
}
