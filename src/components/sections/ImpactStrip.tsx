import { impactFacts } from "@/data/site-content";

export default function ImpactStrip() {
  return (
    <div
      className="border-y border-[var(--border)] bg-[var(--surface-secondary)]"
      aria-label="Summit at a glance"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 divide-x divide-[var(--border)] lg:grid-cols-4">
          {impactFacts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-6 py-10 text-center"
            >
              <span className="font-body text-4xl font-bold uppercase tracking-tight text-[var(--green-bright)] sm:text-5xl">
                {fact.value}
              </span>
              <span className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                {fact.label}
              </span>
              <span className="mt-1 text-xs text-[var(--text-secondary)]">
                {fact.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
