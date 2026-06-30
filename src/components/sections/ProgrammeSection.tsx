"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Calendar, MapPin, ExternalLink, CircleCheckBig, ArrowRight } from "lucide-react";
import { agendaDays, whyAttendItems, siteConfig } from "@/data/site-content";

const VenueMap = dynamic(() => import("@/components/ui/VenueMap"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl"
      style={{ background: "#101E15" }}
    >
      <span className="text-xs text-[#9DA89F]">Loading map…</span>
    </div>
  ),
});

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Vienna International Hotel, No. 603, Sanyuanli Avenue, Yuexiu, Guangzhou, Guangdong, China"
)}`;

export default function ProgrammeSection() {
  const [activeDay, setActiveDay] = useState(agendaDays[0].id);
  const day = agendaDays.find((d) => d.id === activeDay) ?? agendaDays[0];

  return (
    <section
      id="agenda"
      className="relative bg-[#050806]"
      aria-labelledby="programme-heading"
    >
      <div className="mx-auto max-w-8xl px-4 pt-20 pb-40 sm:px-6 lg:pt-28 lg:pb-44 lg:px-8 xl:px-12">

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-20">

          {/* ── LEFT: header + agenda card ── */}
          <div className="lg:col-span-3">

            {/* ── Header block ── */}
            <div className="mb-9">

              {/* Eyebrow + line */}
              <div className="mb-5">
                <p className="mb-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green-bright)]">
                  Programme
                </p>
                <div
                  className="h-px w-5"
                  style={{ background: "var(--green-bright)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Main heading */}
              <h2
                id="programme-heading"
                className="mb-5 font-body font-semibold leading-[1.05] text-[#F4F4EF]"
                style={{
                  fontSize: "clamp(3rem, 5vw, 4.25rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Summit{" "}
                <span style={{ color: "var(--green-bright)" }}>Agenda</span>
              </h2>

              {/* Date + venue metadata */}
              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2">
                  <Calendar
                    className="h-4 w-4 shrink-0"
                    style={{ color: "var(--green-bright)" }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-[#9DA89F]">
                    17–20 October 2026
                  </span>
                </div>
                <div
                  className="hidden h-3.5 w-px bg-white/15 sm:block"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 shrink-0"
                    style={{ color: "var(--green-bright)" }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-[#9DA89F]">
                    Vienna International Hotel, Guangzhou
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="mb-6 max-w-[640px] font-body leading-[1.55] text-[#9DA89F] lg:text-[17px]"
              >
                Four days of strategic conversations, business matchmaking,
                market insight, and relationship-building between African and
                Chinese business leaders.
              </p>

              {/* CTA */}
              <a
                href="#agenda"
                className="group inline-flex items-center gap-2.5 rounded-full border px-6 py-3 font-body text-sm font-semibold text-[#F4F4EF] transition-all duration-200 hover:bg-white/5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-bright)]"
                style={{ borderColor: "rgba(53,194,74,0.32)" }}
              >
                View Full Programme
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* ── Agenda card ── */}
            <div
              className="overflow-hidden rounded-[20px]"
              style={{
                background: "rgba(12,17,20,0.82)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
              }}
            >
              {/* Day tab row */}
              <div
                className="grid grid-cols-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                role="tablist"
                aria-label="Summit days"
              >
                {agendaDays.map((d) => (
                  <button
                    key={d.id}
                    role="tab"
                    id={`tab-${d.id}`}
                    aria-selected={d.id === activeDay}
                    aria-controls={`panel-${d.id}`}
                    onClick={() => setActiveDay(d.id)}
                    className="relative py-4 text-center font-body text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)] focus-visible:rounded"
                    style={{
                      color:
                        d.id === activeDay ? "var(--green-bright)" : "#9DA89F",
                    }}
                  >
                    {d.id === activeDay && (
                      <span
                        className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--green-bright)]"
                        aria-hidden="true"
                      />
                    )}
                    {d.date}
                  </button>
                ))}
              </div>

              {/* Session list */}
              <div
                id={`panel-${day.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${day.id}`}
                className="px-6 py-2 lg:px-8"
              >
                {day.sessions.map((session, i) => (
                  <div key={`${day.id}-${i}`}>
                    <div
                      className="grid items-start py-5"
                      style={{
                        gridTemplateColumns: "28px 72px minmax(0,1fr)",
                        gap: "0 16px",
                      }}
                    >
                      {/* Timeline node */}
                      <div
                        className="flex justify-center pt-[3px]"
                        aria-hidden="true"
                      >
                        <div
                          className="h-3 w-3 rounded-full"
                          style={
                            i === 0
                              ? {
                                  background: "var(--green-bright)",
                                  boxShadow:
                                    "0 0 10px rgba(71,195,79,0.35)",
                                }
                              : {
                                  background: "transparent",
                                  border: "2px solid var(--green-bright)",
                                }
                          }
                        />
                      </div>

                      {/* Time */}
                      <span
                        className="font-body text-sm font-semibold leading-none tracking-[0.02em]"
                        style={{ color: "var(--green-bright)" }}
                      >
                        {session.time}
                      </span>

                      {/* Event content */}
                      <div>
                        <p className="font-body text-[15px] font-semibold leading-snug text-[#F4F4EF]">
                          {session.title}
                        </p>
                        {session.description && (
                          <p className="mt-1.5 font-body text-[13px] leading-relaxed text-[#9DA89F]">
                            {session.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row separator, offset past node + gap + time + gap */}
                    {i < day.sessions.length - 1 && (
                      <div
                        className="ml-[132px]"
                        style={{
                          height: "1px",
                          background: "rgba(255,255,255,0.08)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Summit overview panel (unchanged) ── */}
          <div
            className="rounded-2xl p-8 lg:col-span-2 lg:p-10"
            style={{
              background: "#F7F3EC",
              border: "1px solid rgba(28,46,32,0.10)",
            }}
          >
            {/* Why Attend */}
            <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--green-primary)]">
              Why Attend
            </p>
            <h3
              className="mb-7 font-body font-bold leading-snug"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", color: "#1C2E20" }}
            >
              Why You Should Be Part of{" "}
              <span className="text-[var(--green-primary)]">MEEI 2026</span>
            </h3>

            <ul className="mb-8 flex flex-col gap-3.5" role="list">
              {whyAttendItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CircleCheckBig
                    className="mt-0.5 h-[18px] w-[18px] shrink-0"
                    style={{ color: "var(--green-primary)" }}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "#4A5E4F" }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Register CTA */}
            <Link
              href="/register"
              className="mb-10 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              style={{
                background: "linear-gradient(135deg, #078442 0%, #00A85A 100%)",
              }}
            >
              Reserve Your Place
            </Link>

            {/* Divider */}
            <div
              className="mb-7 h-px"
              style={{ background: "rgba(28,46,32,0.10)" }}
              aria-hidden="true"
            />

            {/* Venue */}
            <p className="mb-3 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--green-primary)]">
              Venue
            </p>

            <p className="mb-1 font-body text-sm font-bold" style={{ color: "#1C2E20" }}>
              {siteConfig.venue}
            </p>
            <p
              className="mb-4 flex items-start gap-1.5 text-[11px] leading-relaxed"
              style={{ color: "#4A5E4F" }}
            >
              <MapPin
                className="mt-0.5 h-3 w-3 shrink-0"
                style={{ color: "var(--green-primary)" }}
                aria-hidden="true"
              />
              {siteConfig.venueAddress}
            </p>

            {/* Interactive map */}
            <div
              className="mb-3 overflow-hidden rounded-2xl"
              style={{ height: "360px", background: "#101E15" }}
            >
              <VenueMap />
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--green-primary)] focus-visible:rounded"
              style={{ color: "#4A5E4F" }}
              aria-label="Get directions to Vienna International Hotel on Google Maps (opens in new tab)"
            >
              View on Google Maps
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
