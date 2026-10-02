"use client";

import { useRef } from "react";
import { X } from "lucide-react";
import { btn } from "./ui";

// Thin client wrapper around a native <dialog>. The dialog body is passed in
// as server-rendered children so the itinerary stays in the HTML for SEO.
export default function PackageDialog({ id, label, title, buttonClassName, children }) {
  const ref = useRef(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className={buttonClassName || btn("secondary", "md", "w-full")}
        aria-haspopup="dialog"
        aria-controls={id}
      >
        {label}
      </button>
      <dialog
        ref={ref}
        id={id}
        aria-label={title}
        onClick={(e) => {
          // Close on backdrop click, or when an in-page link (e.g. #enquiry) is followed.
          if (e.target === ref.current || e.target.closest('a[href^="#"]')) ref.current.close();
        }}
        className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-2xl overflow-hidden rounded-[20px] p-0 text-ink shadow-2xl"
      >
        <div className="relative max-h-[92dvh] overflow-y-auto overscroll-contain">
          <form method="dialog" className="absolute top-3 right-3 z-10">
            <button
              aria-label="Close package details"
              className="grid size-9 place-items-center rounded-full bg-white/95 text-navy shadow-md hover:bg-white"
            >
              <X className="size-4.5" />
            </button>
          </form>
          {children}
          <form method="dialog" className="px-5 pb-5 sm:px-7 sm:pb-7">
            <button className="w-full text-center text-[13px] font-medium text-ink/55 hover:text-navy">Close</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
