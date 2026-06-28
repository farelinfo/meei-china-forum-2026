import { MapPin, ExternalLink } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { siteConfig } from "@/data/site-content";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Vienna International Hotel No. 603 Sanyuanli Avenue Yuexiu Guangzhou Guangdong China"
)}`;

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-8"
      aria-labelledby="venue-heading"
    >
      <SectionEyebrow className="mb-3">Venue</SectionEyebrow>
      <SectionHeading id="venue-heading" className="mb-1 text-xl lg:text-2xl">
        {siteConfig.venue}
      </SectionHeading>
      <p className="mb-4 flex items-start gap-2 text-xs text-[var(--text-secondary)]">
        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--green-primary)]" aria-hidden="true" />
        <span>{siteConfig.venueAddress}</span>
      </p>

      <MediaPlaceholder
        label="Venue photograph"
        aspectRatio="16/9"
        icon="building"
        className="mb-4"
      />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
          <MapPin className="h-3 w-3" aria-hidden="true" />
          Guangzhou, China
        </span>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm border border-[var(--border)] px-3 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] transition-colors hover:border-[var(--green-bright)] hover:text-[var(--green-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-bright)]"
          aria-label="View venue on Google Maps (opens in new tab)"
        >
          View on Map
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
