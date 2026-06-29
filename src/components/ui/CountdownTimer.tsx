"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-17T09:00:00+08:00"); // Opening, Guangzhou time

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  / 60_000),
    seconds: Math.floor((diff % 60_000)     / 1_000),
  };
}

function Bubble({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 sm:h-[72px] sm:w-[72px]"
        style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
      >
        <span
          className="font-heading font-bold leading-none text-white tabular-nums"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        className="font-body text-[9px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end gap-3 sm:gap-4" aria-label="Countdown to summit opening">
      <Bubble value={time.days}    label="Days"    />
      <Bubble value={time.hours}   label="Hours"   />
      <Bubble value={time.minutes} label="Min"     />
      <Bubble value={time.seconds} label="Sec"     />
    </div>
  );
}
