import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article" | "aside";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
