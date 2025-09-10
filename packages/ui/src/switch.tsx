import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const sw = tv({
  slots: {
    root: "inline-flex items-center gap-3",
    control: "relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border border-border bg-muted transition-colors data-[state=checked]:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    thumb: "pointer-events-none inline-block size-5 rounded-full bg-background shadow transition-transform data-[state=checked]:translate-x-5 translate-x-0.5",
    label: "text-sm text-foreground select-none",
    hint: "text-xs text-muted-foreground",
  },
  variants: {
    disabled: { true: { control: "opacity-50 cursor-not-allowed", label: "opacity-70" } },
    invalid: { true: { control: "ring-2 ring-error", hint: "text-error" } },
  },
});

type SwitchVariants = VariantProps<typeof sw>;

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">, SwitchVariants {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  hint?: React.ReactNode;
}

export function Switch({ className, disabled, invalid, label, hint, checked, defaultChecked, onCheckedChange, ...rest }: SwitchProps) {
  const styles = sw({ disabled, invalid });
  const [isChecked, setChecked] = React.useState<boolean>(Boolean(defaultChecked));
  React.useEffect(() => {
    if (typeof checked === "boolean") setChecked(checked);
  }, [checked]);

  return (
    <label className={cn(styles.root(), className)}>
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        data-state={isChecked ? "checked" : "unchecked"}
        className={styles.control()}
        onClick={() => {
          const next = !isChecked;
          setChecked(next);
          onCheckedChange?.(next);
        }}
        {...rest}
      >
        <span className={styles.thumb()} data-state={isChecked ? "checked" : "unchecked"} />
      </button>
      <div className="space-y-0.5">
        {label ? <div className={styles.label()}>{label}</div> : null}
        {hint ? <div className={styles.hint()}>{hint}</div> : null}
      </div>
    </label>
  );
}

