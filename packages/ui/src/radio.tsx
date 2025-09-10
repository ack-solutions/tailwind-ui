import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const rd = tv({
  slots: {
    root: "flex items-start gap-3",
    control: "relative mt-0.5 inline-flex size-5 items-center justify-center rounded-full border border-border bg-background ring-offset-background transition-colors data-[state=checked]:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    input: "peer absolute inset-0 opacity-0 cursor-pointer",
    dot: "size-2.5 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform",
    label: "text-sm text-foreground select-none",
    hint: "text-xs text-muted-foreground",
  },
  variants: {
    disabled: { true: { control: "opacity-50", label: "opacity-70" } },
    invalid: { true: { control: "border-error", hint: "text-error" } },
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

