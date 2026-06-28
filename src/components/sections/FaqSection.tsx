"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site-content";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ background: "#F7F3EC" }}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">

          {/* ── Left: sticky heading block ── */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-2 font-body text-sm font-medium" style={{ color: "var(--green-primary)" }}>
              FAQ&apos;s
            </p>
            <h2
              id="faq-heading"
              className="mb-4 font-heading font-semibold leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#1C2E20" }}
            >
              Looking for an answer?
            </h2>
            <p className="font-body text-sm leading-relaxed" style={{ color: "#6B7E72" }}>
              Proactively answering your questions about the MEEI China Business
              Forum 2026 — venue, dates, who can attend, and how to get in touch.
            </p>
          </div>

          {/* ── Right: accordion list ── */}
          <div className="flex flex-col">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="cursor-pointer border-b py-4"
                  style={{ borderColor: "#D6E4D9" }}
                  onClick={() => toggle(faq.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className="font-body text-base font-medium"
                      style={{ color: "#1C2E20" }}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-[18px] w-[18px] shrink-0 transition-all duration-500 ease-in-out`}
                      style={{ color: "#1C2E20" }}
                      aria-hidden="true"
                      strokeWidth={1.5}
                      data-open={isOpen}
                      {...(isOpen ? { style: { color: "#1C2E20", transform: "rotate(180deg)" } } : {})}
                    />
                  </div>
                  <p
                    className={`font-body text-sm leading-relaxed transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] translate-y-0 pt-4 opacity-100"
                        : "-translate-y-2 max-h-0 opacity-0"
                    }`}
                    style={{ color: "#6B7E72", overflow: "hidden" }}
                    id={`faq-answer-${faq.id}`}
                    aria-hidden={!isOpen}
                  >
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
