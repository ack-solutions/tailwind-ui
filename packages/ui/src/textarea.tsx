import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const ta = tv({
  slots: {
    root: "space-y-1",
    label: "text-sm font-medium text-foreground",
    control: "rounded-md border bg-background text-foreground placeholder:text-muted-foreground border-border focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
    textarea: "w-full bg-transparent outline-none resize-y min-h-24 disabled:cursor-not-allowed",
    hint: "text-xs text-muted-foreground",
  },
  variants: {
    size: {
      sm: { control: "px-3 py-2 text-sm" },
      md: { control: "px-3.5 py-2.5 text-sm" },
      lg: { control: "px-4 py-3 text-base" },
    },
    fullWidth: { true: { root: "w-full" } },
    invalid: { true: { control: "border-error focus-within:ring-error", hint: "text-error" } },
    disabled: { true: { control: "opacity-50 pointer-events-none bg-muted/40" } },
  },
  defaultVariants: { size: "md" },
});

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof ta> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, className, label, hint, size, fullWidth, invalid, disabled, ...rest },
  ref
) {
  const styles = ta({ size, fullWidth, invalid, disabled });
  const textareaId = id ?? React.useId();
  const describedBy = hint ? `${textareaId}-hint` : undefined;
  return (
    <div className={cn(styles.root(), className)}>
      {label ? (
        <label htmlFor={textareaId} className={styles.label()}>
          {label}
        </label>
      ) : null}
      <div className={styles.control()}>
        <textarea id={textareaId} ref={ref} aria-invalid={invalid || undefined} aria-describedby={describedBy} disabled={disabled} className={styles.textarea()} {...rest} />
      </div>
      {hint ? (
        <div id={describedBy} className={styles.hint()}>
          {hint}
        </div>
      ) : null}
    </div>
  );
});

