"use client";

import Link from "next/link";
import { TrendingUp, Factory, Globe, ArrowRight } from "lucide-react";

const FEATURED = [
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description:
      "Explore high-potential sectors, emerging markets, and cross-border investment opportunities.",
  },
  {
    icon: Factory,
    title: "Manufacturing Partnerships",
    description:
      "Connect with manufacturers, industrial operators, suppliers, and strategic production partners.",
  },
  {
    icon: Globe,
    title: "Trade & Export Development",
    description:
      "Gain practical insight into export readiness, market entry, and access to new international markets.",
  },
] as const;

export default function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden"
      aria-labelledby="highlights-heading"
      style={{ backgroundColor: "#EEF8F3" }}
    >
      <div className="mx-auto max-w-8xl px-4 pt-24 pb-40 sm:px-6 lg:pt-32 lg:pb-52 lg:px-8 xl:px-12">

        {/* ── Two-column header ── */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-16 lg:items-end">

          {/* Left: eyebrow + heading */}
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-2.5">
              <span
                className="block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: "#B7DF19" }}
                aria-hidden="true"
              />
              <span
                className="font-body text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#003F35" }}
              >
                Summit Opportunities
              </span>
            </div>
            <h2
              id="highlights-heading"
              className="font-body font-bold leading-[1.08]"
              style={{
                color: "#003F35",
                fontSize: "clamp(1.9rem, 4vw, 3.5rem)",
              }}
            >
              Unlock Opportunities.<br />
              Build Lasting Partnerships.
            </h2>
          </div>

          {/* Right: supporting paragraph */}
          <div className="lg:col-span-5">
            <p
              className="font-body text-base leading-relaxed lg:text-lg"
              style={{ color: "#637A73" }}
            >
              Explore high-value investment, manufacturing, trade, and
              market-access opportunities designed to strengthen collaboration
              between Africa and China.
            </p>
          </div>
        </div>

        {/* ── Three featured cards ── */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURED.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-xl focus-within:ring-2 focus-within:ring-[#006B5E]/25"
              style={{ border: "1px solid #E3EEE8" }}
            >
              {/* Lime icon container */}
              <div
                className="mb-7 flex h-[62px] w-[62px] items-center justify-center rounded-xl transition-all duration-300 group-hover:brightness-95"
                style={{ backgroundColor: "#B7DF19" }}
                aria-hidden="true"
              >
                <Icon
                  className="h-7 w-7"
                  style={{ color: "#003F35" }}
                  strokeWidth={1.75}
                />
              </div>

              {/* Title */}
              <h3
                className="mb-3 font-body text-xl font-bold leading-snug"
                style={{ color: "#003F35" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="font-body text-[15px] leading-relaxed"
                style={{ color: "#637A73" }}
              >
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="#all-opportunities"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006B5E]"
            style={{ backgroundColor: "#006B5E" }}
          >
            Explore All Opportunities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-white/60 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075E52]"
            style={{ borderColor: "#075E52", color: "#075E52" }}
          >
            Attend the Summit
          </Link>
        </div>
      </div>

      {/* ── Organic curved bottom edge → transitions into dark site background ── */}
      <div
        className="absolute bottom-0 left-0 right-0 leading-[0]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          style={{ height: "clamp(56px, 6vw, 88px)" }}
        >
          <path
            d="M0,88 L0,52 C240,88 480,18 720,44 C960,70 1200,28 1440,44 L1440,88 Z"
            fill="#050806"
          />
        </svg>
      </div>
    </section>
  );
}
