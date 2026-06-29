import type { CSSProperties } from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
  style?: CSSProperties;
}

export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
  id,
  style,
}: SectionHeadingProps) {
  return (
    <Tag
      id={id}
      style={style}
      className={`section-heading font-body font-semibold uppercase tracking-tight text-[var(--text-primary)] ${className}`}
    >
      {children}
    </Tag>
  );
}
