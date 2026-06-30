"use client";

import { useState } from "react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Toast from "@/components/ui/Toast";
import { speakerPlaceholders } from "@/data/site-content";
import { User } from "lucide-react";
import Image from "next/image";

export default function SpeakersSection() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section id="speakers" className="py-20 lg:py-28" aria-labelledby="speakers-heading">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow className="mb-3">Featured Speakers</SectionEyebrow>
            <SectionHeading id="speakers-heading">
              Meet the Visionaries{" "}
              <span className="text-[var(--green-bright)]">Driving Change</span>
            </SectionHeading>
          </div>
          <SecondaryButton
            onClick={() => setShowToast(true)}
            className="shrink-0"
            ariaLabel="View all speakers"
          >
            View All Speakers
          </SecondaryButton>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {speakerPlaceholders.map((speaker) => (
            <article
              key={speaker.id}
              className="flex flex-col rounded-sm border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
            >
              {/* Speaker photo */}
              <div
                className="relative bg-gradient-to-b from-[var(--surface-secondary)] to-[var(--background-elevated)]"
                style={{ aspectRatio: "3/4", maxHeight: "280px" }}
              >
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={speaker.name ?? "Speaker"}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
                      <User className="h-8 w-8 text-[var(--text-secondary)]" aria-hidden="true" />
                    </div>
                    <span className="inline-block rounded-full border border-[var(--green-dark)] bg-[var(--green-dark)]/30 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-[var(--green-bright)]">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Speaker info */}
              <div className="border-t border-[var(--border)] p-4">
                <p className="font-body text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
                  {speaker.name ?? "Speaker to be announced"}
                </p>
                {(speaker.role ?? speaker.organization ?? (!speaker.image ? "Official profile coming soon" : null)) && (
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {speaker.role ?? speaker.organization ?? "Official profile coming soon"}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {showToast && (
        <Toast
          message="The full speaker lineup will be announced soon. Check back for updates."
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
}
