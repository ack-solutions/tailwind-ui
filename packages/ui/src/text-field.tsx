import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const tf = tv({
  slots: {
    root: "space-y-1",
    label: "text-sm font-medium text-foreground",
    control: "flex items-center gap-2 rounded-md border bg-background text-foreground placeholder:text-muted-foreground border-border focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
    input: "w-full bg-transparent outline-none disabled:cursor-not-allowed",
    hint: "text-xs text-muted-foreground",
  },
  variants: {
    size: {
      sm: { control: "h-9 px-3 text-sm" },
      md: { control: "h-10 px-3.5 text-sm" },
      lg: { control: "h-11 px-4 text-base" },
    },
    fullWidth: { true: { root: "w-full" } },
    invalid: {
      true: { control: "border-error focus-within:ring-error", hint: "text-error" },
    },
    disabled: {
      true: { control: "opacity-50 pointer-events-none bg-muted/40" },
    },
  },
  defaultVariants: { size: "md" },
});

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof tf> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { id, className, label, hint, size, fullWidth, invalid, disabled, leading, trailing, ...rest },
  ref
) {
  const styles = tf({ size, fullWidth, invalid, disabled });
  const inputId = id ?? React.useId();
  const describedBy = hint ? `${inputId}-hint` : undefined;

  return (
    <div className={cn(styles.root(), className)}>
      {label ? (
        <label htmlFor={inputId} className={styles.label()}>
          {label}
        </label>
      ) : null}
      <div className={styles.control()}>
        {leading ? <span aria-hidden className="text-muted-foreground">{leading}</span> : null}
        <input id={inputId} ref={ref} aria-invalid={invalid || undefined} aria-describedby={describedBy} disabled={disabled} className={styles.input()} {...rest} />
        {trailing ? <span aria-hidden className="text-muted-foreground">{trailing}</span> : null}
      </div>
      {hint ? (
        <div id={describedBy} className={styles.hint()}>
          {hint}
        </div>
      ) : null}
    </div>
  );
});
