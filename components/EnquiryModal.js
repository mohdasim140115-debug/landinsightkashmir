"use client";

import { useEffect, useRef, useState } from "react";
import { Clock3, MessageSquareText, X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { btn } from "./ui";

const EVENT = "open-package-enquiry";
const AUTO_KEY = "lik-enquiry-popup-shown";
const AUTO_DELAY_MS = 2500;

/** Button that opens the shared enquiry modal for a specific package. */
export function EnquiryButton({ pkg = null, className, onClick, children }) {
  return (
    <button
      type="button"
      className={className || btn("primary", "md", "w-full gap-1.5 px-3 whitespace-nowrap")}
      aria-haspopup="dialog"
      onClick={(e) => {
        // If launched from inside the package-details dialog, close that first.
        e.currentTarget.closest("dialog")?.close();
        onClick?.(e);
        window.dispatchEvent(new CustomEvent(EVENT, { detail: pkg }));
      }}
    >
      {children || (
        <>
          <MessageSquareText className="size-4" aria-hidden="true" />
          Enquiry Now
        </>
      )}
    </button>
  );
}

/** One modal shared by every package card. Rendered once on the page. */
export default function EnquiryModal({ autoOpen = false }) {
  const ref = useRef(null);
  const [pkg, setPkg] = useState(null);
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    const onOpen = (e) => {
      setPkg(e.detail);
      setOpenCount((n) => n + 1); // fresh form each time it opens
      ref.current?.showModal();
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  // Auto-open the enquiry form shortly after the page loads — once per browser
  // session, and never on top of another open dialog.
  useEffect(() => {
    if (!autoOpen) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(AUTO_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      if (document.querySelector("dialog[open]")) return;
      try {
        sessionStorage.setItem(AUTO_KEY, "1");
      } catch {}
      window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
    }, AUTO_DELAY_MS);
    return () => clearTimeout(t);
  }, [autoOpen]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-modal-title"
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-md overflow-hidden rounded-[22px] bg-ivory p-0 text-ink shadow-2xl"
    >
      <div className="max-h-[92dvh] overflow-y-auto overscroll-contain">
        <div className="relative bg-navy px-5 pt-5 pb-4 text-white sm:px-6">
          <form method="dialog" className="absolute top-3 right-3">
            <button
              aria-label="Close enquiry form"
              className="grid size-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-4.5" />
            </button>
          </form>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
            {pkg ? "Package enquiry" : "Book now"}
          </p>
          <p id="enquiry-modal-title" className="mt-1 pr-10 font-serif text-[22px] leading-snug font-semibold">
            {pkg?.name ? `${pkg.name} Tour Package` : "Book Your Kashmir Tour Package"}
          </p>
          {!pkg ? (
            <p className="mt-1.5 text-[13px] text-white/75">Hotels · Meals · Private transfers · Sightseeing</p>
          ) : null}
          {pkg?.duration ? (
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] text-white/75">
              <Clock3 className="size-3.5" aria-hidden="true" />
              {pkg.duration}
              {pkg.route ? ` · ${pkg.route}` : ""}
            </p>
          ) : null}
        </div>

        <div className="p-5 sm:p-6">
          <p className="mb-4 text-[14px] text-ink/70">
            Share your details and our Kashmir travel expert will send you the best price and itinerary.
          </p>
          <EnquiryForm
            key={openCount}
            variant="hero"
            source={pkg ? "package-modal" : "book-now-modal"}
            packageName={pkg?.fullName}
            submitLabel={pkg ? "Send Enquiry" : "Book Now"}
          />
        </div>
      </div>
    </dialog>
  );
}
