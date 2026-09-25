import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
