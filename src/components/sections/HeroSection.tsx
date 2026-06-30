"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Lightbulb, Handshake, ArrowRight } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";

const BENEFITS = [
  { icon: Users, label: "High-Level\nNetworking" },
  { icon: Lightbulb, label: "Insightful\nConnections" },
  { icon: Handshake, label: "Strategic\nPartnerships" },
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#041A0F]"
      aria-label="MEEI China Business Forum 2026, hero"
    >
      {/* ── Full-bleed background: Dr Daniel ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/Dr%20Daniel.png"
          alt="Dr Daniel, Keynote Speaker, MEEI China Business Forum 2026"
          fill
          className="object-cover"
          style={{ objectPosition: "35% center" }}
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Gradient overlay: left = visible image, right = dark readable panel ── */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, rgba(4,26,15,0) 0%, rgba(4,26,15,0) 32%, rgba(4,26,15,0.70) 50%, rgba(4,26,15,0.93) 62%, rgba(4,26,15,0.97) 100%)",
        }}
      />

      {/* ── Mobile: additional darkening so text is always readable ── */}
      <div
        className="absolute inset-0 bg-[#041A0F]/60 lg:hidden"
        aria-hidden="true"
      />

      {/* ── Subtle top-to-bottom vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,26,15,0.15) 0%, transparent 18%, transparent 80%, rgba(4,26,15,0.4) 100%)",
        }}
      />

      {/* ── All content: right side ── */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-8xl pl-4 pr-0 sm:pl-6 sm:pr-0 lg:pl-8 lg:pr-2 xl:pl-12 xl:pr-4">
          {/*
            On desktop: content floats to the right 50%
            On mobile:  content is full-width (image is behind with dark overlay)
          */}
          <div className="ml-auto w-full max-w-lg pt-28 pb-16 md:py-0 md:mt-24 lg:mt-32 lg:max-w-[520px]">

            {/* Eyebrow */}
            <motion.div
              {...fadeUp(0.1)}
              className="mb-5 flex items-center gap-3"
            >
              <div
                className="h-px w-8 shrink-0"
                style={{ background: "#D2A74F" }}
                aria-hidden="true"
              />
              <span
                className="font-body text-[10px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#D2A74F" }}
              >
                MEEI China Business Forum 2026
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              {...fadeUp(0.18)}
              className="mb-4 font-bold leading-[1.05] text-white"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)", fontFamily: "var(--font-lora)" }}
            >
              Connect.
              <br />
              Collaborate.
              <br />
              <span style={{ color: "#2FD07A" }}>Grow in China.</span>
            </motion.h1>

            {/* Chinese supporting line */}
            <motion.p
              {...fadeUp(0.25)}
              className="mb-6 text-sm tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.42)", fontFamily: "var(--font-lora)" }}
              lang="zh"
              aria-label="Connect opportunities · Collaborate for win-win · Co-create the future"
            >
              连接机遇 · 协作共赢 · 共创未来
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.32)}
              className="mb-8 font-body text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Join global leaders, entrepreneurs, innovators, and investors
              shaping the future of business and international cooperation in
              China.
            </motion.p>

            {/* ── Benefit items ── */}
            <motion.div
              {...fadeUp(0.38)}
              className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              {BENEFITS.map(({ icon: Icon, label }, i) => (
                <Fragment key={label}>
                  {i > 0 && (
                    <div
                      className="hidden h-8 w-px shrink-0 sm:block"
                      style={{ background: "rgba(255,255,255,0.14)" }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                      style={{
                        background: "rgba(47,208,122,0.12)",
                        borderColor: "rgba(47,208,122,0.30)",
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        style={{ color: "#2FD07A" }}
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      className="whitespace-pre-line font-body text-xs font-medium leading-tight"
                      style={{ color: "rgba(255,255,255,0.70)" }}
                    >
                      {label}
                    </span>
                  </div>
                </Fragment>
              ))}
            </motion.div>

            {/* ── CTA ── */}
            <motion.div
              {...fadeUp(0.44)}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/register"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:w-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #078442 0%, #00A85A 100%)",
                  boxShadow: "0 8px 32px rgba(7,132,66,0.40)",
                }}
              >
                Join the Summit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p
                className="font-body text-xs sm:ml-1"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                Secure your spot today.
              </p>
            </motion.div>

            {/* ── Countdown ── */}
            <motion.div {...fadeUp(0.52)} className="mt-2">
              <CountdownTimer />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
