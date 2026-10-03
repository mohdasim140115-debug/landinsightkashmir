"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CalendarDays, CheckCircle2, Compass, Loader2, Lock, User, Users, Wallet } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon, btn } from "./ui";

const TRAVELLERS = ["1", "2", "3–4", "5–8", "9–15", "16+"];
const TRIP_TYPES = ["Honeymoon", "Family", "Group / Friends", "Solo", "Mata Vaishno Devi", "Kashmir + Leh Ladakh"];
const BUDGETS = ["Budget", "Standard", "Premium", "Luxury", "Not sure yet"];

const inputCls =
  "h-[46px] w-full rounded-xl border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-ink/70 transition-colors focus:border-brand focus:ring-3 focus:ring-brand/15 focus:outline-none";
const labelCls = "mb-1.5 block text-[13px] font-medium text-ink/80";

function Field({ label, id, icon: Icon, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      <div className="relative [&>input]:pl-10 [&>select]:pl-10">
        {Icon ? (
          <Icon
            className="pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-ink/70"
            aria-hidden="true"
          />
        ) : null}
        {children}
      </div>
    </div>
  );
}

function Select({ id, name, options, placeholder, required }) {
  return (
    <select id={id} name={name} required={required} defaultValue="" className={`${inputCls} pr-8`}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

// Set when the field is used, so the prerendered page never carries a stale date.
function setMinToday(e) {
  e.currentTarget.min = new Date().toISOString().slice(0, 10);
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

/**
 * Lead form. variant="hero" is the compact 4-field card; variant="custom"
 * adds trip type and budget for the "Create Your Perfect Kashmir Trip" section.
 */
export default function EnquiryForm({ variant = "hero", submitLabel, packageName, source }) {
  const uid = useId();
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [lead, setLead] = useState(null);
  const [error, setError] = useState("");
  const isCustom = variant === "custom";

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!isValidPhone(data.phone || "")) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    setStatus("sending");

    const payload = {
      ...data,
      source: source || (isCustom ? "custom-itinerary" : "hero-quote"),
      page: window.location.href,
    };

    try {
      const res = await fetch("/api/enquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "generate_lead", form_id: payload.source });
      // Thank-you page: confirmation for the visitor + a clean URL for Google Ads conversion tracking.
      const params = new URLSearchParams({ name: (data.name || "").split(" ")[0] });
      if (data.package) params.set("package", data.package);
      router.push(`/thank-you/?${params}`);
    } catch {
      setLead(data);
      setStatus("error");
    }
  }

  if (status === "done" || status === "error") {
    const lines = [
      lead?.package ? `Hi, I'd like a quote for the ${lead.package}.` : `Hi, I'd like a Kashmir tour package quote.`,
      lead?.name && `Name: ${lead.name}`,
      lead?.date && `Travel date: ${lead.date}`,
      lead?.travellers && `Travellers: ${lead.travellers}`,
      lead?.tripType && `Trip type: ${lead.tripType}`,
      lead?.budget && `Budget: ${lead.budget}`,
    ].filter(Boolean);
    const ok = status === "done";
    return (
      <div className="py-4 text-center" role="status" aria-live="polite">
        <CheckCircle2 className={`mx-auto size-11 ${ok ? "text-whatsapp" : "text-brand"}`} aria-hidden="true" />
        <p className="mt-3 font-serif text-xl font-semibold text-navy">
          {ok ? `Thank you${lead?.name ? `, ${lead.name.split(" ")[0]}` : ""}!` : "Almost there"}
        </p>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink/70">
          {ok
            ? "Your enquiry has been received. Our Kashmir travel team will contact you shortly with your quote."
            : "We couldn't send your enquiry online. Please send it on WhatsApp or call us — it takes a few seconds."}
        </p>
        <div className="mt-5 grid gap-2.5">
          <a
            href={whatsappLink(lines.join("\n"))}
            target="_blank"
            rel="noopener"
            className={btn("whatsapp", "md", "w-full")}
            data-cta="whatsapp-after-form"
          >
            <WhatsAppIcon className="size-5" />
            {ok ? "Get a faster reply on WhatsApp" : "Send on WhatsApp"}
          </a>
          <a href={`tel:${SITE.phones[0].tel}`} className={btn("secondary", "md", "w-full")}>
            Call {SITE.phones[0].display}
          </a>
        </div>
        {ok ? (
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-3 text-[13px] font-medium text-brand hover:underline"
          >
            Send another enquiry
          </button>
        ) : null}
      </div>
    );
  }

  const id = (name) => `${uid}-${name}`;

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-3.5">
      {packageName ? <input type="hidden" name="package" value={packageName} /> : null}
      {/* Honeypot – hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {isCustom ? (
          <>
            <Field label="Travel date" id={id("date")} icon={CalendarDays}>
              <input id={id("date")} name="date" type="date" onFocus={setMinToday} required className={inputCls} />
            </Field>
            <Field label="Travellers" id={id("travellers")} icon={Users}>
              <Select id={id("travellers")} name="travellers" options={TRAVELLERS} placeholder="Select" required />
            </Field>
            <Field label="Trip type" id={id("tripType")} icon={Compass}>
              <Select id={id("tripType")} name="tripType" options={TRIP_TYPES} placeholder="Select" required />
            </Field>
            <Field label="Budget" id={id("budget")} icon={Wallet}>
              <Select id={id("budget")} name="budget" options={BUDGETS} placeholder="Select" />
            </Field>
            <Field label="Your name" id={id("name")} icon={User} className="col-span-2 sm:col-span-1">
              <input
                id={id("name")}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                required
                className={inputCls}
              />
            </Field>
            <Field label="WhatsApp number" id={id("phone")} icon={WhatsAppIcon} className="col-span-2 sm:col-span-1">
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98XXXXXXXX"
                required
                className={inputCls}
              />
            </Field>
          </>
        ) : (
          <>
            <Field label="Your name" id={id("name")} icon={User} className="col-span-2 sm:col-span-1">
              <input
                id={id("name")}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                required
                className={inputCls}
              />
            </Field>
            <Field label="Phone / WhatsApp" id={id("phone")} icon={WhatsAppIcon} className="col-span-2 sm:col-span-1">
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98XXXXXXXX"
                required
                className={inputCls}
              />
            </Field>
            <Field label="Travel date" id={id("date")} icon={CalendarDays}>
              <input id={id("date")} name="date" type="date" onFocus={setMinToday} className={inputCls} />
            </Field>
            <Field label="Travellers" id={id("travellers")} icon={Users}>
              <Select id={id("travellers")} name="travellers" options={TRAVELLERS} placeholder="Select" required />
            </Field>
          </>
        )}
      </div>

      {error ? (
        <p className="text-[13px] font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className={btn("primary", "lg", "mt-1 w-full")}>
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            {submitLabel || "Get My Free Quote"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-[12px] text-ink/70">
        <Lock className="size-3" aria-hidden="true" />
        No spam. Your details are only used to plan your trip.
      </p>
    </form>
  );
}
