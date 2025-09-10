import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const sel = tv({
  slots: {
    root: "space-y-1",
    label: "text-sm font-medium text-foreground",
    control: "relative rounded-md border bg-background text-foreground border-border focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
    select: "appearance-none w-full bg-transparent outline-none disabled:cursor-not-allowed placeholder:text-muted-foreground",
    chevron: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground",
    hint: "text-xs text-muted-foreground",
  },
  variants: {
    size: {
      sm: { control: "h-9 px-3 text-sm", select: "h-full" },
      md: { control: "h-10 px-3.5 text-sm", select: "h-full" },
      lg: { control: "h-11 px-4 text-base", select: "h-full" },
    },
    fullWidth: { true: { root: "w-full" } },
    invalid: { true: { control: "border-error focus-within:ring-error", hint: "text-error" } },
    disabled: { true: { control: "opacity-50 pointer-events-none bg-muted/40" } },
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
