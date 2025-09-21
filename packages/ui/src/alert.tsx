import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const alertStyles = tv({
  slots: {
    root: [
      "rounded-lg border p-4 flex gap-3 items-start",
      "shadow-sm transition-all duration-200",
      "hover:shadow-md"
    ],
    icon: "size-5 shrink-0 mt-0.5",
    content: "min-w-0 flex-1",
    title: "font-semibold text-base leading-tight",
    description: "text-sm leading-relaxed",
  },
  variants: {
    variant: {
      solid: { root: "border-2", title: "", description: "", icon: "" },
      soft: { root: "border", title: "text-foreground", description: "text-muted-foreground", icon: "" },
      outline: { root: "bg-transparent border-2", title: "text-foreground", description: "text-muted-foreground", icon: "" },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
  },
  compoundVariants: [
    // Solid - Enhanced with better shadows and contrast
    {
      variant: "solid", color: "primary",
      class: {
        root: "bg-primary text-primary-foreground border-primary shadow-primary/25",
        title: "text-primary-foreground",
        description: "text-primary-foreground/90",
        icon: "text-primary-foreground"
      }
    },
    {
      variant: "solid", color: "secondary",
      class: {
        root: "bg-secondary text-secondary-foreground border-secondary shadow-secondary/25",
        title: "text-secondary-foreground",
        description: "text-secondary-foreground/90",
        icon: "text-secondary-foreground"
      }
    },
    {
      variant: "solid", color: "success",
      class: {
        root: "bg-success text-success-foreground border-success shadow-success/25",
        title: "text-success-foreground",
        description: "text-success-foreground/90",
        icon: "text-success-foreground"
      }
    },
    {
      variant: "solid", color: "warning",
      class: {
        root: "bg-warning text-warning-foreground border-warning shadow-warning/25",
        title: "text-warning-foreground",
        description: "text-warning-foreground/90",
        icon: "text-warning-foreground"
      }
    },
    {
      variant: "solid", color: "error",
      class: {
        root: "bg-error text-error-foreground border-error shadow-error/25",
        title: "text-error-foreground",
        description: "text-error-foreground/90",
        icon: "text-error-foreground"
      }
    },
    {
      variant: "solid", color: "info",
      class: {
        root: "bg-info text-info-foreground border-info shadow-info/25",
        title: "text-info-foreground",
        description: "text-info-foreground/90",
        icon: "text-info-foreground"
      }
    },

    // Soft - Enhanced with better colors and borders
    { variant: "soft", color: "primary", class: { root: "bg-primary/10 border-primary/30", icon: "text-primary" } },
    { variant: "soft", color: "secondary", class: { root: "bg-secondary/10 border-secondary/30", icon: "text-secondary" } },
    { variant: "soft", color: "success", class: { root: "bg-success/10 border-success/30", icon: "text-success" } },
    { variant: "soft", color: "warning", class: { root: "bg-warning/10 border-warning/30", icon: "text-warning" } },
    { variant: "soft", color: "error", class: { root: "bg-error/10 border-error/30", icon: "text-error" } },
    { variant: "soft", color: "info", class: { root: "bg-info/10 border-info/30", icon: "text-info" } },

    // Outline - Enhanced with better borders
    { variant: "outline", color: "primary", class: { root: "border-primary/40", icon: "text-primary" } },
    { variant: "outline", color: "secondary", class: { root: "border-secondary/40", icon: "text-secondary" } },
    { variant: "outline", color: "success", class: { root: "border-success/40", icon: "text-success" } },
    { variant: "outline", color: "warning", class: { root: "border-warning/40", icon: "text-warning" } },
    { variant: "outline", color: "error", class: { root: "border-error/40", icon: "text-error" } },
    { variant: "outline", color: "info", class: { root: "border-info/40", icon: "text-info" } },
  ],
  defaultVariants: { variant: "soft", color: "primary" },
});

export type AlertVariant = "solid" | "soft" | "outline";
export type AlertColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";

type AlertVariants = VariantProps<typeof alertStyles>;

/**
 * Alert component props
 * - variant: visual style (solid, soft, outline) 
 * - color: semantic color (primary, secondary, success, warning, error, info)
 * - title: optional title text or node
 * - children: description/content below the title
 * - icon: optional leading icon element
 */
export interface AlertProps extends AlertVariants {
  className?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  color?: AlertColor;
}

export function Alert({ variant, className, title, children, icon, color = "primary", ...props }: AlertProps) {
  const styles = alertStyles({ variant, color });
  return (
    <div className={cn(styles.root(), className)} {...props}>
      {icon ? <span aria-hidden className={styles.icon()}>{icon}</span> : null}
      <div className={styles.content()}>
        {title ? <div className={styles.title()}>{title}</div> : null}
        {children ? <div className={styles.description()}>{children}</div> : null}
      </div>
    </div>
  );
}
