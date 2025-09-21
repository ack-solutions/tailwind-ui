import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const ta = tv({
  slots: {
    root: "space-y-2",
    label: "text-sm font-semibold text-foreground block",
    control: [
      "rounded border-2 bg-background text-foreground",
      "placeholder:text-muted-foreground/70 border-border/60",
      "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-0",
      "transition-all duration-200 ease-in-out",
      "hover:border-border shadow-sm"
    ],
    textarea: [
      "w-full bg-transparent outline-none resize-y min-h-24 disabled:cursor-not-allowed",
      "text-sm font-medium p-4"
    ],
    hint: "text-xs text-muted-foreground mt-1",
  },
  variants: {
    size: {
      sm: { control: "min-h-20", textarea: "text-xs" },
      md: { control: "min-h-24", textarea: "text-sm" },
      lg: { control: "min-h-32", textarea: "text-base" },
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
        textarea: "cursor-not-allowed"
      }
    },
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

