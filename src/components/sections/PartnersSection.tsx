"use client";

import Link from "next/link";

// Partner logos will be replaced with confirmed partner assets when announced by MEEI Program.
// These placeholder names represent the categories of expected supporting organizations.
const PLACEHOLDER_ORGS = [
  { id: "p1",  name: "Trade Council",        font: "var(--font-oswald)", weight: 700, size: "1.3rem",  spacing: "0.04em" },
  { id: "p2",  name: "Development Fund",      font: "var(--font-inter)",  weight: 600, size: "1rem",    spacing: "0.01em" },
  { id: "p3",  name: "Business Chamber",      font: "var(--font-oswald)", weight: 800, size: "1.15rem", spacing: "0.06em" },
  { id: "p4",  name: "Export Authority",      font: "var(--font-inter)",  weight: 700, size: "0.95rem", spacing: "0.02em" },
  { id: "p5",  name: "Investment Agency",     font: "var(--font-oswald)", weight: 700, size: "1.25rem", spacing: "0.05em" },
  { id: "p6",  name: "Industrial Forum",      font: "var(--font-inter)",  weight: 600, size: "1.05rem", spacing: "0.01em" },
  { id: "p7",  name: "Trade Federation",      font: "var(--font-oswald)", weight: 800, size: "1.1rem",  spacing: "0.07em" },
  { id: "p8",  name: "Finance Institute",     font: "var(--font-inter)",  weight: 700, size: "1rem",    spacing: "0.02em" },
  { id: "p9",  name: "Economic Council",      font: "var(--font-oswald)", weight: 700, size: "1.2rem",  spacing: "0.04em" },
  { id: "p10", name: "Industry Association",  font: "var(--font-inter)",  weight: 600, size: "0.9rem",  spacing: "0.01em" },
];

// Duplicate for seamless infinite loop (translateX -50% reveals the copy)
const ITEMS = [...PLACEHOLDER_ORGS, ...PLACEHOLDER_ORGS];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-20 lg:py-24"
      style={{ background: "#FAFCFA" }}
      aria-labelledby="partners-heading"
    >
      {/* ── Centered heading ── */}
      <div className="mb-8 px-4 text-center">
        <p
          className="font-body text-2xl leading-snug md:text-3xl"
          style={{ color: "#7A907E" }}
        >
          Connected by opportunity.
        </p>
        <p
          id="partners-heading"
          className="font-body text-2xl font-bold leading-snug md:text-3xl"
          style={{ color: "#071B13" }}
        >
          Built through partnerships.
        </p>
      </div>

      {/* ── Thin divider ── */}
      <div
        className="mx-auto mb-10 max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12"
        aria-hidden="true"
      >
        <div className="h-px" style={{ background: "rgba(7,27,19,0.08)" }} />
      </div>

      {/* ── Scrolling marquee, full viewport width ── */}
      <div
        className="relative overflow-hidden"
        aria-label="Supporting organizations"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        <div
          className="marquee-left flex items-center whitespace-nowrap"
          aria-hidden="true"
        >
          {ITEMS.map((org, i) => (
            <div
              key={`${org.id}-${i}`}
              className="mx-10 inline-flex shrink-0 items-center transition-opacity duration-200"
              style={{ opacity: 0.55 }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.opacity = "0.55")
              }
            >
              <span
                style={{
                  fontFamily: org.font,
                  fontWeight: org.weight,
                  fontSize: org.size,
                  letterSpacing: org.spacing,
                  color: "#071B13",
                  textTransform: "uppercase" as const,
                }}
              >
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Placeholder note ── */}
      <p
        className="mt-10 px-4 text-center text-xs"
        style={{ color: "rgba(7,27,19,0.38)" }}
      >
        Partner and supporting organization logos will be announced by MEEI
        Program.
      </p>

      {/* ── Subtle CTA ── */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold transition-colors duration-200 hover:opacity-80"
          style={{ color: "#2ca640" }}
        >
          Interested in partnering?
          <span className="underline underline-offset-4 transition-transform duration-200 group-hover:translate-x-0.5">
            Contact us
          </span>
          <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </Link>
      </div>
    </section>
  );
}
