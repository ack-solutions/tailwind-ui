import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const chipStyles = tv({
  slots: {
    root: "inline-flex items-center gap-1 rounded-full border text-xs font-medium leading-none px-3 h-7",
    label: "truncate",
    close: "ml-0.5 -mr-1 inline-flex items-center justify-center size-5 rounded-full hover:opacity-90",
  },
  variants: {
    variant: {
      solid: { root: "", close: "" },
      soft: { root: "", close: "" },
      outline: { root: "bg-transparent", close: "" },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
    size: {
      sm: { root: "h-6 text-[11px] px-2.5", close: "size-4" },
      md: { root: "h-7 text-xs px-3", close: "size-5" },
      lg: { root: "h-8 text-sm px-3.5", close: "size-5" },
    },
    withClose: { true: {} },
  },
  compoundVariants: [
    // Solid
    { variant: "solid", color: "primary", class: { root: "bg-primary text-primary-foreground border-primary", close: "text-primary-foreground hover:bg-white/20" } },
    { variant: "solid", color: "secondary", class: { root: "bg-secondary text-secondary-foreground border-secondary", close: "text-secondary-foreground hover:bg-white/20" } },
    { variant: "solid", color: "success", class: { root: "bg-success text-success-foreground border-success", close: "text-success-foreground hover:bg-white/20" } },
    { variant: "solid", color: "warning", class: { root: "bg-warning text-warning-foreground border-warning", close: "text-warning-foreground hover:bg-black/10" } },
    { variant: "solid", color: "error", class: { root: "bg-error text-error-foreground border-error", close: "text-error-foreground hover:bg-white/20" } },
    { variant: "solid", color: "info", class: { root: "bg-info text-info-foreground border-info", close: "text-info-foreground hover:bg-white/20" } },

    // Soft
    { variant: "soft", color: "primary", class: { root: "bg-muted/70 text-primary border-primary/30", close: "text-primary hover:bg-primary/10" } },
    { variant: "soft", color: "secondary", class: { root: "bg-muted/70 text-secondary border-secondary/30", close: "text-secondary hover:bg-secondary/10" } },
    { variant: "soft", color: "success", class: { root: "bg-muted/70 text-success border-success/30", close: "text-success hover:bg-success/10" } },
    { variant: "soft", color: "warning", class: { root: "bg-muted/70 text-warning border-warning/30", close: "text-warning hover:bg-warning/10" } },
    { variant: "soft", color: "error", class: { root: "bg-muted/70 text-error border-error/30", close: "text-error hover:bg-error/10" } },
    { variant: "soft", color: "info", class: { root: "bg-muted/70 text-info border-info/30", close: "text-info hover:bg-info/10" } },

    // Outline
    { variant: "outline", color: "primary", class: { root: "text-primary border-primary", close: "text-primary hover:bg-primary/10" } },
    { variant: "outline", color: "secondary", class: { root: "text-secondary border-secondary", close: "text-secondary hover:bg-secondary/10" } },
    { variant: "outline", color: "success", class: { root: "text-success border-success", close: "text-success hover:bg-success/10" } },
    { variant: "outline", color: "warning", class: { root: "text-warning border-warning", close: "text-warning hover:bg-warning/10" } },
    { variant: "outline", color: "error", class: { root: "text-error border-error", close: "text-error hover:bg-error/10" } },
    { variant: "outline", color: "info", class: { root: "text-info border-info", close: "text-info hover:bg-info/10" } },
  ],
  defaultVariants: {
    variant: "soft",
    size: "md",
    color: "primary",
  },
});

type ChipVariants = VariantProps<typeof chipStyles>;

export interface ChipProps extends ChipVariants {
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

export function Chip({ variant, color, size, className, children, onClose }: ChipProps) {
  const styles = chipStyles({ variant, color, size, withClose: Boolean(onClose) });
  return (
    <span className={cn(styles.root(), className)}>
      <span className={styles.label()}>{children}</span>
      {onClose ? (
        <button type="button" aria-label="Remove" className={styles.close()} onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      ) : null}
    </span>
  );
}

