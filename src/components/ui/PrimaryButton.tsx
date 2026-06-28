"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  external = false,
  ariaLabel,
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-heading text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-bright)] disabled:opacity-50 disabled:cursor-not-allowed bg-[var(--green-primary)] hover:bg-[var(--green-dark)] active:scale-95";

  const allClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={allClasses}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
