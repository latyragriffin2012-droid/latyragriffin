import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-md bg-cream px-3.5 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-gold)]",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-28 w-full rounded-lg bg-cream px-3.5 py-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-gold)]",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
