import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const badgeStyles = tv({
  base: [
    "inline-flex items-center gap-1.5 rounded-full",
    "font-semibold leading-none transition-all duration-200",
    "select-none"
  ],
  variants: {
    variant: {
      solid: "shadow-sm",
      soft: "shadow-sm",
      outline: "bg-transparent shadow-none",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      error: "",
      info: "",
    },
    size: {
      sm: "h-5 text-[10px] px-2.5 py-0.5",
      md: "h-6 text-xs px-3 py-1",
      lg: "h-7 text-sm px-3.5 py-1.5",
    },
  },
  compoundVariants: [
    // Solid - Enhanced with better shadows and contrast
    { variant: "solid", color: "primary", class: "bg-primary text-primary-foreground border-primary shadow-primary/25" },
    { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-foreground border-secondary shadow-secondary/25" },
    { variant: "solid", color: "success", class: "bg-success text-success-foreground border-success shadow-success/25" },
    { variant: "solid", color: "warning", class: "bg-warning text-warning-foreground border-warning shadow-warning/25" },
    { variant: "solid", color: "error", class: "bg-error text-error-foreground border-error shadow-error/25" },
    { variant: "solid", color: "info", class: "bg-info text-info-foreground border-info shadow-info/25" },

    // Soft - Enhanced with better colors and borders
    { variant: "soft", color: "primary", class: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/15" },
    { variant: "soft", color: "secondary", class: "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/15" },
    { variant: "soft", color: "success", class: "bg-success/10 text-success border-success/20 hover:bg-success/15" },
    { variant: "soft", color: "warning", class: "bg-warning/10 text-warning border-warning/20 hover:bg-warning/15" },
    { variant: "soft", color: "error", class: "bg-error/10 text-error border-error/20 hover:bg-error/15" },
    { variant: "soft", color: "info", class: "bg-info/10 text-info border-info/20 hover:bg-info/15" },

    // Outline - Enhanced with better hover states
    { variant: "outline", color: "primary", class: "text-primary border-primary hover:bg-primary/5 hover:border-primary/80" },
    { variant: "outline", color: "secondary", class: "text-secondary border-secondary hover:bg-secondary/5 hover:border-secondary/80" },
    { variant: "outline", color: "success", class: "text-success border-success hover:bg-success/5 hover:border-success/80" },
    { variant: "outline", color: "warning", class: "text-warning border-warning hover:bg-warning/5 hover:border-warning/80" },
    { variant: "outline", color: "error", class: "text-error border-error hover:bg-error/5 hover:border-error/80" },
    { variant: "outline", color: "info", class: "text-info border-info hover:bg-info/5 hover:border-info/80" },
  ],
  defaultVariants: {
    variant: "soft",
    size: "md",
    color: "primary",
  },
});

export type BadgeVariant = "solid" | "soft" | "outline";
export type BadgeSize = "sm" | "md" | "lg";
export type BadgeColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";

type BadgeVariants = VariantProps<typeof badgeStyles>;

/**
 * Badge component props
 * - variant: visual style (solid, soft, outline)
 * - size: badge size (sm, md, lg)
 * - color: semantic color (primary, secondary, success, warning, error, info)
 */
export interface BadgeProps extends BadgeVariants {
  className?: string;
  children?: React.ReactNode;
  color?: BadgeColor;
}

export function Badge({ variant, size, className, children, color = "primary", ...props }: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ variant, size, color }), className)} {...props}>
      {children}
    </span>
  );
}
