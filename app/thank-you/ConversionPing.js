"use client";

import { useEffect } from "react";

// Fires once per thank-you page view. In Google Tag Manager, trigger your
// Google Ads conversion tag on the custom event "thank_you_page_view" (or on
// Page URL contains "/thank-you/").
export default function ConversionPing() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "thank_you_page_view" });
  }, []);
  return null;
}
