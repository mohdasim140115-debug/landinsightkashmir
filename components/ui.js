import Image from "next/image";
import { Flower2 } from "lucide-react";

// Shared layout + button primitives so every section feels like one brand.

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60 disabled:cursor-not-allowed";

const BTN_VARIANTS = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-line bg-white text-navy hover:border-brand hover:text-brand",
  ghostLight: "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
  white: "bg-white text-navy hover:bg-mist",
  dark: "border border-white/70 bg-navy-deep/70 text-white backdrop-blur-sm hover:bg-navy-deep",
};

const BTN_SIZES = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[15px]",
  lg: "h-13 px-6 text-[15px]",
};

export function btn(variant = "primary", size = "md", extra = "") {
  return `${BTN_BASE} ${BTN_VARIANTS[variant]} ${BTN_SIZES[size]} ${extra}`.trim();
}

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({ id, className = "", children, ...rest }) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`} {...rest}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-xs font-semibold tracking-[0.16em] uppercase ${
        light ? "text-accent" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

// Gold divider echoing Kashmiri woodwork motifs; used under headings and in the hero form.
export function Ornament({ align = "center", className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 text-gold ${align === "center" ? "justify-center" : ""} ${className}`}
      aria-hidden="true"
    >
      <span className={`h-px w-14 ${align === "center" ? "bg-linear-to-r from-transparent" : "bg-linear-to-r from-gold/60"} to-gold/60`} />
      <Flower2 className="size-4" strokeWidth={1.5} />
      <span className="h-px w-14 bg-linear-to-l from-transparent to-gold/60" />
    </div>
  );
}

export function SectionHeading({ id, eyebrow, title, children, align = "center", light = false }) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`font-serif text-[28px] leading-tight font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <Ornament align={align} className="mt-4" />
      {children ? (
        <p className={`mt-4 text-[15px] leading-relaxed sm:text-base ${light ? "text-white/75" : "text-ink/75"}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}

export function WhatsAppIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

// Brand logo (public/images/logo.png, 137×60). Served as-is: it is already tiny.
export function Logo({ className = "h-12 w-auto" }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Land Insight Kashmir Tour logo"
      width={137}
      height={60}
      unoptimized
      loading="eager"
      className={className}
    />
  );
}
