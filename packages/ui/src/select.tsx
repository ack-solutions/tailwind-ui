import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const sel = tv({
  slots: {
    root: "space-y-2",
    label: "text-sm font-semibold text-foreground block",
    control: [
      "relative rounded border-2 bg-background text-foreground",
      "border-border/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-0",
      "transition-all duration-200 ease-in-out",
      "hover:border-border shadow-sm"
    ],
    select: [
      "appearance-none w-full bg-transparent outline-none disabled:cursor-not-allowed",
      "text-sm font-medium pr-10"
    ],
    chevron: [
      "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
      "text-muted-foreground/70 transition-colors duration-200"
    ],
    hint: "text-xs text-muted-foreground mt-1",
  },
  variants: {
    size: {
      sm: {
        control: "py-1.5 px-3",
        select: "text-xs py-1.5",
        chevron: "size-4"
      },
      md: {
        control: "py-2.5 px-4",
        select: "text-sm py-2.5",
        chevron: "size-5"
      },
      lg: {
        control: "py-3 px-5",
        select: "text-base py-3",
        chevron: "size-6"
      },
    },
    fullWidth: { true: { root: "w-full" } },
    invalid: {
      true: {
        control: "border-error focus-within:ring-error/20 focus-within:border-error",
        hint: "text-error"
      }
    },
    disabled: {
      true: {
        control: "opacity-50 pointer-events-none bg-muted/40 cursor-not-allowed border-border/40",
        select: "cursor-not-allowed"
      }
    },
  },
  defaultVariants: { size: "md" },
});

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">, VariantProps<typeof sel> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, className, label, hint, size, fullWidth, invalid, disabled, children, ...rest },
  ref
) {
  const styles = sel({ size, fullWidth, invalid, disabled });
  const selectId = id ?? React.useId();
  const describedBy = hint ? `${selectId}-hint` : undefined;
  return (
    <div className={cn(styles.root(), className)}>
      {label ? (
        <label htmlFor={selectId} className={styles.label()}>
          {label}
        </label>
      ) : null}
      <div className={styles.control()}>
        <select id={selectId} ref={ref} aria-invalid={invalid || undefined} aria-describedby={describedBy} disabled={disabled} className={styles.select()} {...rest}>
          {children}
        </select>
        <span className={styles.chevron()} aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>
      {hint ? (
        <div id={describedBy} className={styles.hint()}>
          {hint}
        </div>
      ) : null}
    </div>
  );
});
