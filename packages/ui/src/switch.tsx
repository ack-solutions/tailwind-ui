import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const sw = tv({
  slots: {
    root: "inline-flex items-center gap-3",
    control: [
      "relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full",
      "border-2 border-border/60 bg-muted/60",
      "transition-all duration-300 ease-in-out",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
      "hover:border-border active:scale-[0.98]",
      "shadow-sm hover:shadow-md"
    ],
    thumb: [
      "pointer-events-none inline-block size-5 rounded-full",
      "bg-background shadow-sm transition-all duration-300 ease-in-out",
      "data-[state=checked]:translate-x-5 data-[state=checked]:shadow-md",
      "translate-x-0.5 border border-border/20",
      "hover:shadow-md"
    ],
    label: "text-sm font-medium text-foreground select-none cursor-pointer",
    hint: "text-xs text-muted-foreground mt-1",
  },
  variants: {
    disabled: {
      true: {
        control: "opacity-50 cursor-not-allowed bg-muted/40",
        label: "opacity-70 cursor-not-allowed",
        thumb: "opacity-70"
      }
    },
    invalid: {
      true: {
        control: "ring-2 ring-error/20 border-error",
        hint: "text-error"
      }
    },
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

