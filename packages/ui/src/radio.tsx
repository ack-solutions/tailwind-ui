import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const rd = tv({
  slots: {
    root: "flex items-start gap-3",
    control: [
      "relative mt-0.5 inline-flex size-6 items-center justify-center rounded-full",
      "border-2 border-border/60 bg-background",
      "transition-all duration-200 ease-in-out",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary/5",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
      "hover:border-border shadow-sm hover:shadow-md",
      "data-[state=checked]:shadow-md"
    ],
    input: "peer absolute inset-0 opacity-0 cursor-pointer",
    dot: [
      "size-3 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-all duration-200",
      "peer-checked:shadow-sm"
    ],
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

type RadioVariants = VariantProps<typeof rd>;

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, RadioVariants {
  label?: React.ReactNode;
  hint?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { id, className, label, hint, disabled, invalid, checked, defaultChecked, name, ...rest },
  ref
) {
  const styles = rd({ disabled, invalid });
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
          type="radio"
          name={name}
          className={styles.input()}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
          {...rest}
        />
        <span className={styles.dot()} />
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

