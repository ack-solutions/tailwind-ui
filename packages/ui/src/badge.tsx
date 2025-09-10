import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const badgeStyles = tv({
  base: "inline-flex items-center gap-1.5 rounded-md border text-xs font-medium leading-none",
  variants: {
    variant: {
      solid: "",
      soft: "",
      outline: "bg-transparent",
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
      sm: "h-5 text-[11px] px-2",
      md: "h-6 text-xs px-2.5", 
      lg: "h-7 text-sm px-3",
    },
  },
  compoundVariants: [
    { variant: "solid", color: "primary", class: "bg-primary text-primary-foreground border-primary" },
    { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-foreground border-secondary" },
    { variant: "solid", color: "success", class: "bg-success text-success-foreground border-success" },
    { variant: "solid", color: "warning", class: "bg-warning text-warning-foreground border-warning" },
    { variant: "solid", color: "error", class: "bg-error text-error-foreground border-error" },
    { variant: "solid", color: "info", class: "bg-info text-info-foreground border-info" },

    { variant: "soft", color: "primary", class: "bg-muted/70 text-primary border-primary/30" },
    { variant: "soft", color: "secondary", class: "bg-muted/70 text-secondary border-secondary/30" },
    { variant: "soft", color: "success", class: "bg-muted/70 text-success border-success/30" },
    { variant: "soft", color: "warning", class: "bg-muted/70 text-warning border-warning/30" },
    { variant: "soft", color: "error", class: "bg-muted/70 text-error border-error/30" },
    { variant: "soft", color: "info", class: "bg-muted/70 text-info border-info/30" },

    { variant: "outline", color: "primary", class: "text-primary border-primary" },
    { variant: "outline", color: "secondary", class: "text-secondary border-secondary" },
    { variant: "outline", color: "success", class: "text-success border-success" },
    { variant: "outline", color: "warning", class: "text-warning border-warning" },
    { variant: "outline", color: "error", class: "text-error border-error" },
    { variant: "outline", color: "info", class: "text-info border-info" },
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
