import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const tf = tv({
  slots: {
    root: "space-y-2",
    label: "text-sm font-semibold text-foreground block",
    control: [
      "flex items-center gap-3 rounded-lg border-2 bg-background text-foreground",
      "placeholder:text-muted-foreground/70 border-border/60",
      "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-0",
      "transition-all duration-200 ease-in-out",
      "hover:border-border"
    ],
    input: [
      "w-full bg-transparent outline-none disabled:cursor-not-allowed",
      "text-sm font-medium"
    ],
    hint: "text-xs text-muted-foreground mt-1",
    leading: "text-muted-foreground/80 flex items-center justify-center",
    trailing: "text-muted-foreground/80 flex items-center justify-center",
  },
  variants: {
    size: {
      sm: {
        control: "h-10 px-3",
        input: "text-xs",
        leading: "size-4",
        trailing: "size-4"
      },
      md: {
        control: "h-12 px-4",
        input: "text-sm",
        leading: "size-5",
        trailing: "size-5"
      },
      lg: {
        control: "h-14 px-5",
        input: "text-base",
        leading: "size-6",
        trailing: "size-6"
      },
    },
    fullWidth: { true: { root: "w-full" } },
    invalid: {
      true: {
        control: "border-error focus-within:ring-error/20 focus-within:border-error",
        hint: "text-error"
      },
    },
    disabled: {
      true: { control: "opacity-50 pointer-events-none bg-muted/40 cursor-not-allowed" },
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
        {leading ? <span aria-hidden className={styles.leading()}>{leading}</span> : null}
        <input id={inputId} ref={ref} aria-invalid={invalid || undefined} aria-describedby={describedBy} disabled={disabled} className={styles.input()} {...rest} />
        {trailing ? <span aria-hidden className={styles.trailing()}>{trailing}</span> : null}
      </div>
      {hint ? (
        <div id={describedBy} className={styles.hint()}>
          {hint}
        </div>
      ) : null}
    </div>
  );
});
