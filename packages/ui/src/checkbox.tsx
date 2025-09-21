import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const cb = tv({
  slots: {
    root: "flex items-start gap-3",
    control: [
      "relative mt-0.5 inline-flex size-6 items-center justify-center rounded-md",
      "border-2 border-border/60 bg-background text-background",
      "transition-all duration-200 ease-in-out",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
      "hover:border-border shadow-sm hover:shadow-md",
      "data-[state=checked]:shadow-md data-[state=checked]:shadow-primary/25"
    ],
    input: "peer absolute inset-0 opacity-0 cursor-pointer",
    icon: "pointer-events-none opacity-0 data-[state=checked]:opacity-100 transition-opacity duration-200",
    label: "text-sm font-medium text-foreground select-none cursor-pointer",
    hint: "text-xs text-muted-foreground mt-1",
  },
  variants: {
    disabled: {
      true: {
        control: "opacity-50 cursor-not-allowed border-border/40",
        label: "opacity-70 cursor-not-allowed"
      }
    },
    invalid: {
      true: {
        control: "border-error focus-visible:ring-error/20",
        hint: "text-error"
      }
    },
  },
});

type CheckboxVariants = VariantProps<typeof cb>;

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, CheckboxVariants {
  label?: React.ReactNode;
  hint?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, className, label, hint, disabled, invalid, checked, defaultChecked, ...rest },
  ref
) {
  const styles = cb({ disabled, invalid });
  const inputId = id ?? React.useId();
  const [isChecked, setChecked] = React.useState<boolean>(Boolean(defaultChecked));
  React.useEffect(() => {
    if (typeof checked === "boolean") setChecked(checked);
  }, [checked]);

  const describedBy = hint ? `${inputId}-hint` : undefined;
  const stateAttr = isChecked ? "checked" : "unchecked";

  return (
    <label className={cn(styles.root(), className)} htmlFor={inputId}>
      <span className={styles.control()} data-state={stateAttr}>
        <input
          id={inputId}
          ref={ref}
          type="checkbox"
          className={styles.input()}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
          {...rest}
        />
        <svg className={styles.icon()} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <div className="space-y-0.5">
        {label ? <div className={styles.label()}>{label}</div> : null}
        {hint ? (
          <div id={describedBy} className={styles.hint()}>
            {hint}
          </div>
        ) : null}
      </div>
    </label>
  );
});

