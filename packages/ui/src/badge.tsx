import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { brandStyle, type SemanticColor } from "./lib/colors";

const badgeStyles = tv({
  slots: {
    root: "inline-flex items-center gap-1 rounded-md border text-xs font-medium leading-none px-2.5 h-6",
    dot: "size-1.5 rounded-full",
    label: "truncate",
  },
  variants: {
    variant: {
      solid: {
        root: "bg-brand border-brand text-[color:var(--ack-btn-fg)]",
        dot: "bg-[color:var(--ack-btn-fg)]",
      },
      soft: {
        root: "bg-surface-2/70 border-brand/30 text-brand",
        dot: "bg-brand/50",
      },
      outline: {
        root: "bg-transparent border-brand text-brand",
        dot: "bg-brand",
      },
    },
    size: {
      sm: { root: "h-5 text-[11px] px-2", dot: "size-1.5" },
      md: { root: "h-6 text-xs px-2.5", dot: "size-1.5" },
      lg: { root: "h-7 text-[13px] px-3", dot: "size-2" },
    },
    withDot: {
      true: {},
    },
  },
  defaultVariants: {
    variant: "soft",
    size: "md",
  },
});

export type BadgeVariant = "solid" | "soft" | "outline";
export type BadgeSize = "sm" | "md" | "lg";
export type BadgeColor = SemanticColor;

type BadgeVariants = VariantProps<typeof badgeStyles>;

/**
 * Badge props
 * - variant: visual style (solid, soft, outline)
 * - size: badge size (sm, md, lg)
 * - withDot: shows a small color dot when true
 * - color: semantic color to use from the design tokens
 */
export interface BadgeProps extends BadgeVariants {
  /** Additional class names for the root element */
  className?: string;
  /** Badge label content */
  children?: React.ReactNode;
  /** Semantic color key (primary, secondary, success, warning, error, info) */
  color?: BadgeColor;
}

export function Badge({ variant, size, withDot, className, children, color }: BadgeProps) {
  const styles = badgeStyles({ variant, size, withDot });
  const brandOverride = brandStyle(color);
  return (
    <span className={cn(styles.root(), className)} style={brandOverride}>
      {withDot ? <span aria-hidden className={styles.dot()} /> : null}
      <span className={styles.label()}>{children}</span>
    </span>
  );
}
