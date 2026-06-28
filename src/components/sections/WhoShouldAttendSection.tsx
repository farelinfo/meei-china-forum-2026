import {
  TrendingUp,
  Lightbulb,
  Factory,
  Package,
  Landmark,
  Globe,
  Users,
  Building,
  Wrench,
  Briefcase,
} from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { attendeeTypes } from "@/data/site-content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Lightbulb,
  Factory,
  Package,
  Landmark,
  Globe,
  Users,
  Building,
  Wrench,
  Briefcase,
};

export default function WhoShouldAttendSection() {
  return (
    <section
      id="who-attends"
      className="bg-[var(--surface)] py-20 lg:py-28"
      aria-labelledby="who-attends-heading"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-12 text-center">
          <SectionEyebrow className="mb-3">Delegate Profile</SectionEyebrow>
          <SectionHeading id="who-attends-heading">
            Who Should Attend
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {attendeeTypes.map((type) => {
            const Icon = iconMap[type.icon] ?? Globe;
            return (
              <div
                key={type.id}
                className="flex flex-col items-center rounded-sm border border-[var(--border)] bg-[var(--background-elevated)] p-5 text-center"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)]">
                  <Icon className="h-5 w-5 text-[var(--green-bright)]" aria-hidden="true" />
                </div>
                <h3 className="mb-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  {type.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-[var(--text-secondary)]">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
