import Link from "next/link";
import { Check, Star } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { ticketPackages } from "@/data/site-content";

export default function RegistrationSection() {
  return (
    <section
      id="registration"
      className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-8"
      aria-labelledby="registration-heading"
    >
      <SectionEyebrow className="mb-3">Registration</SectionEyebrow>
      <SectionHeading id="registration-heading" className="mb-2 text-xl lg:text-2xl">
        Choose Your Pass
      </SectionHeading>
      <p className="mb-6 text-xs text-[var(--text-secondary)]">
        Package details and pricing will be announced by MEEI Program.
      </p>

      <div className="flex flex-col gap-4">
        {ticketPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-sm border p-4 transition-all ${
              pkg.highlighted
                ? "border-[var(--green-primary)] bg-[var(--green-dark)]/15 glow-green"
                : "border-[var(--border)] bg-[var(--background-elevated)]"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full border border-[var(--gold)] bg-[var(--background)] px-2.5 py-0.5">
                <Star className="h-2.5 w-2.5 text-[var(--gold)]" aria-hidden="true" />
                <span className="font-body text-[9px] font-bold uppercase tracking-wider text-[var(--gold)]">
                  {pkg.badge}
                </span>
              </div>
            )}

            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
                {pkg.name}
              </h3>
            </div>

            <p className="mb-1 font-body text-xs font-medium text-[var(--gold)]">
              {pkg.priceLabel}
            </p>
            <p className="mb-3 text-xs leading-relaxed text-[var(--text-secondary)]">
              {pkg.description}
            </p>

            <ul className="mb-4 flex flex-col gap-1.5" role="list">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-3 w-3 shrink-0 text-[var(--green-bright)]"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/register?pass=${pkg.passSlug}`}
              className={`block w-full rounded-sm px-4 py-2.5 text-center font-body text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-bright)] ${
                pkg.highlighted
                  ? "bg-[var(--green-primary)] text-white hover:bg-[var(--green-dark)]"
                  : "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--green-bright)] hover:text-[var(--green-bright)]"
              }`}
              aria-label={`Register interest for ${pkg.name}`}
            >
              Register Interest
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-[var(--text-secondary)]">
        Official pricing and package inclusions will be announced by MEEI Program.
      </p>
    </section>
  );
}
