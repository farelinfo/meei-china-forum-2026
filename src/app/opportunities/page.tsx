import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, Factory, Globe, Users,
  MessageSquare, Building2, MapPin, ArrowRight, ArrowLeft,
} from "lucide-react";
import { summitHighlights, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: `Summit Opportunities — ${siteConfig.metaTitle}`,
  description:
    "Explore the seven interconnected opportunity areas at the MEEI China–Africa Business & Investment Summit 2026 in Guangzhou.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  TrendingUp, Factory, Globe,
  Handshake: Users,
  MessageSquare, Building2, MapPin,
};

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-[#050806]">
      {/* ── Top bar ── */}
      <header className="border-b border-white/10 bg-[#050806]">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#9DA89F] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 focus-visible:rounded"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Summit
          </Link>
          <Link href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--green-primary,#2ca640)] px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400">
            Register Now
          </Link>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="border-b border-white/8 py-20 lg:py-28" aria-labelledby="opp-page-heading">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <p className="mb-4 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#47c34f]">
              Summit Opportunities
            </p>
            <h1
              id="opp-page-heading"
              className="mb-6 font-heading font-bold leading-[1.05] text-[#F4F4EF]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
            >
              Seven Focus Areas.{" "}
              <span className="text-[#47c34f]">One Mission.</span>
            </h1>
            <p className="max-w-2xl font-body text-base leading-relaxed text-[#9DA89F] lg:text-lg">
              The summit is structured around seven interconnected areas designed
              to deliver practical, actionable value for every delegate — from
              cross-border investment and manufacturing to trade, matchmaking,
              and government dialogue.
            </p>
          </div>
        </section>

        {/* ── All seven opportunities ── */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {summitHighlights.map(({ id, icon, title, description, tagline }) => {
                const Icon = iconMap[icon] ?? Globe;
                return (
                  <Link
                    key={id}
                    href={`/opportunities/${id}`}
                    className="group flex flex-col rounded-2xl p-8 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                    style={{
                      background: "#0B1710",
                      border: "1px solid rgba(53,194,74,0.14)",
                    }}
                  >
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200 group-hover:bg-[#2ca640]"
                      style={{ background: "rgba(44,166,64,0.12)" }}
                      aria-hidden="true"
                    >
                      <Icon
                        className="h-5 w-5 transition-colors duration-200 group-hover:text-white"
                        style={{ color: "#47c34f" }}
                        strokeWidth={1.75}
                      />
                    </div>
                    <h2 className="mb-1 font-heading text-base font-bold text-[#F4F4EF]">
                      {title}
                    </h2>
                    {tagline && (
                      <p className="mb-3 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#47c34f]">
                        {tagline}
                      </p>
                    )}
                    <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-[#9DA89F]">
                      {description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#47c34f] transition-all duration-200 group-hover:gap-3">
                      Explore this area
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Register CTA ── */}
        <section className="border-t border-white/8 py-16 lg:py-20">
          <div className="mx-auto max-w-8xl px-4 text-center sm:px-6 lg:px-8 xl:px-12">
            <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-[#47c34f]">
              Join Us in Guangzhou
            </p>
            <h2
              className="mb-6 font-heading font-bold text-[#F4F4EF]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
            >
              Ready to Attend MEEI 2026?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base leading-relaxed text-[#9DA89F]">
              Register your interest today and secure your place at the
              China–Africa Business &amp; Investment Summit, 17–20 October 2026,
              Guangzhou.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              style={{
                background: "linear-gradient(135deg, #078442 0%, #00A85A 100%)",
              }}
            >
              Register Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
