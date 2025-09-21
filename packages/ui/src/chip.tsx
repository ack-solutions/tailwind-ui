import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const chipStyles = tv({
  slots: {
    root: [
      "inline-flex items-center gap-2 rounded-lg",
      "text-sm font-medium leading-none transition-all duration-200",
      "border shadow-sm hover:shadow-md"
    ],
    label: "truncate",
    close: [
      "ml-1 -mr-1 inline-flex items-center justify-center rounded-full",
      "hover:bg-black/10 transition-colors duration-200",
      "opacity-70 hover:opacity-100"
    ],
  },
  variants: {
    variant: {
      filled: { root: "", close: "" },
      outlined: { root: "bg-transparent", close: "" },
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
      sm: { root: "h-7 text-xs px-3", close: "size-4" },
      md: { root: "h-8 text-sm px-3", close: "size-5" },
      lg: { root: "h-10 text-base px-4", close: "size-6" },
    },
    withClose: { true: {} },
  },
  compoundVariants: [
    // Filled
    { variant: "filled", color: "primary", class: { root: "bg-primary text-primary-foreground border-primary shadow-primary/25", close: "text-primary-foreground hover:bg-white/20" } },
    { variant: "filled", color: "secondary", class: { root: "bg-secondary text-secondary-foreground border-secondary shadow-secondary/25", close: "text-secondary-foreground hover:bg-white/20" } },
    { variant: "filled", color: "success", class: { root: "bg-success text-success-foreground border-success shadow-success/25", close: "text-success-foreground hover:bg-white/20" } },
    { variant: "filled", color: "warning", class: { root: "bg-warning text-warning-foreground border-warning shadow-warning/25", close: "text-warning-foreground hover:bg-black/10" } },
    { variant: "filled", color: "error", class: { root: "bg-error text-error-foreground border-error shadow-error/25", close: "text-error-foreground hover:bg-white/20" } },
    { variant: "filled", color: "info", class: { root: "bg-info text-info-foreground border-info shadow-info/25", close: "text-info-foreground hover:bg-white/20" } },

    // Outlined
    { variant: "outlined", color: "primary", class: { root: "bg-transparent text-primary border-primary/40", close: "text-primary hover:bg-primary/10" } },
    { variant: "outlined", color: "secondary", class: { root: "bg-transparent text-secondary border-secondary/40", close: "text-secondary hover:bg-secondary/10" } },
    { variant: "outlined", color: "success", class: { root: "bg-transparent text-success border-success/40", close: "text-success hover:bg-success/10" } },
    { variant: "outlined", color: "warning", class: { root: "bg-transparent text-warning border-warning/40", close: "text-warning hover:bg-warning/10" } },
    { variant: "outlined", color: "error", class: { root: "bg-transparent text-error border-error/40", close: "text-error hover:bg-error/10" } },
    { variant: "outlined", color: "info", class: { root: "bg-transparent text-info border-info/40", close: "text-info hover:bg-info/10" } },
  ],
  defaultVariants: {
    variant: "filled",
    size: "md",
    color: "primary",
  },
});

type ChipVariants = VariantProps<typeof chipStyles>;

export type ChipVariant = "filled" | "outlined";
export type ChipSize = "sm" | "md" | "lg";
export type ChipColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";

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

