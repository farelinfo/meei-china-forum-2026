import {
  TrendingUp,
  Factory,
  Globe,
  Users,
  MessageSquare,
  Building2,
  MapPin,
} from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { summitHighlights } from "@/data/site-content";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  TrendingUp,
  Factory,
  Globe,
  Handshake: Users,
  MessageSquare,
  Building2,
  MapPin,
};

export default function AllOpportunitiesSection() {
  return (
    <section
      id="all-opportunities"
      className="py-20 lg:py-28"
      aria-labelledby="all-opp-heading"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-12 max-w-2xl">
          <SectionEyebrow className="mb-3">All Summit Opportunities</SectionEyebrow>
          <SectionHeading id="all-opp-heading">
            Seven Focus Areas.{" "}
            <span className="text-[var(--green-bright)]">One Mission.</span>
          </SectionHeading>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
            The summit is structured around seven interconnected areas designed
            to deliver practical, actionable value for every delegate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {summitHighlights.map((highlight) => {
            const Icon = iconMap[highlight.icon] ?? Globe;
            return (
              <article
                key={highlight.id}
                className="card-hover group flex flex-col rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6 transition-all"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--background-elevated)] transition-colors group-hover:border-[var(--green-dark)] group-hover:bg-[var(--green-dark)]/20">
                  <Icon
                    className="h-5 w-5 text-[var(--green-bright)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 font-body text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
                  {highlight.title}
                </h3>
                <p className="flex-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {highlight.description}
                </p>
                <div
                  className="mt-5 h-px w-8 bg-[var(--green-primary)] opacity-40 transition-all group-hover:w-full group-hover:opacity-60"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
