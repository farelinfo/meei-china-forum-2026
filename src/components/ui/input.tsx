import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-white/15 bg-white/8 px-3 py-2 text-sm text-[#F4F4EF] placeholder:text-[#9DA89F] transition-colors focus-visible:border-[#2ca640] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2ca640] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
