"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-3 rounded-sm border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-xl"
    >
      <div className="flex-1">
        <p className="text-sm text-[var(--text-primary)]">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="shrink-0 rounded p-0.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--green-bright)]"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
