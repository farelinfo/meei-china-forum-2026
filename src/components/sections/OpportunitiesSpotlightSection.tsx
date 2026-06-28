import Link from "next/link";
import { TrendingUp, Factory, Globe, ArrowRight } from "lucide-react";
import { summitHighlights } from "@/data/site-content";

const FEATURED_IDS = ["investment", "manufacturing", "trade"];

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  TrendingUp,
  Factory,
  Globe,
};

const featured = summitHighlights.filter((h) => FEATURED_IDS.includes(h.id));

export default function OpportunitiesSpotlightSection() {
  return (
    <section
      id="all-opportunities"
      className="relative z-10 -mt-[110px] px-4 sm:px-6 lg:px-8 xl:px-12"
      aria-labelledby="spotlight-heading"
    >
      <div className="mx-auto max-w-8xl">
        <div
          className="rounded-2xl px-8 py-7 lg:px-12"
          style={{
            background: "#EAF3FB",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {/* ── Single-row header ── */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-1 font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[#2ca640]">
                Summit Opportunities
              </p>
              <h2
                id="spotlight-heading"
                className="font-heading font-bold leading-tight text-[#0B1A10]"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)" }}
              >
                Explore Opportunities That Move Business Forward
              </h2>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-[#2ca640] px-5 py-2 text-xs font-semibold text-[#2ca640] transition-all duration-200 hover:bg-[#2ca640] hover:text-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ca640]"
            >
              View All
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* ── Divider ── */}
          <div className="mb-5 h-px bg-[#E8F0EA]" aria-hidden="true" />

          {/* ── Three featured opportunities ── */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:divide-x sm:divide-[#E8F0EA] sm:gap-0">
            {featured.map(({ id, icon, title, description }, i) => {
              const Icon = iconMap[icon] ?? Globe;
              return (
                <Link
                  key={id}
                  href={`/opportunities/${id}`}
                  className="group flex items-start gap-4 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2ca640] focus-visible:rounded-lg sm:px-8 first:sm:pl-0 last:sm:pr-0"
                >
                  {/* Icon */}
                  <div
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 group-hover:bg-[#2ca640]"
                    style={{ background: "#EEF8F3" }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="h-4 w-4 transition-colors duration-200 group-hover:text-white"
                      style={{ color: "#2ca640" }}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="mb-1 font-heading text-sm font-bold text-[#0B1A10]">
                      {title}
                    </h3>
                    <p className="mb-2 font-body text-xs leading-relaxed text-[#637A73]">
                      {description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2ca640] transition-all duration-200 group-hover:gap-1.5">
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
