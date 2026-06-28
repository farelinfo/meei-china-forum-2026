import { CheckCircle2 } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { whyAttendItems } from "@/data/site-content";

export default function WhyAttendSection() {
  return (
    <section
      id="why-attend"
      className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-8"
      aria-labelledby="why-attend-heading"
    >
      <SectionEyebrow className="mb-3">Why Attend</SectionEyebrow>
      <SectionHeading id="why-attend-heading" className="mb-6 text-xl lg:text-2xl">
        Why You Should Be Part of{" "}
        <span className="text-[var(--green-bright)]">MEEI 2026</span>
      </SectionHeading>

      <ul className="flex flex-col gap-3" role="list">
        {whyAttendItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--green-bright)]"
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PrimaryButton href="/register" className="w-full sm:w-auto">
          Register Now
        </PrimaryButton>
      </div>
    </section>
  );
}
