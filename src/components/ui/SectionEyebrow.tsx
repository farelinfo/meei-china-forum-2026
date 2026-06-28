interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-bright)] ${className}`}
    >
      {children}
    </p>
  );
}
