import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const alertStyles = tv({
  slots: {
    root: "rounded-lg border p-4 flex gap-3",
    icon: "size-5 shrink-0 mt-0.5",
    content: "min-w-0",
    title: "font-semibold",
    description: "text-sm mt-1",
  },
  variants: {
    variant: {
      solid: { root: "", title: "", description: "", icon: "" },
      soft: { root: "", title: "text-foreground", description: "text-muted-foreground", icon: "" },
      outline: { root: "bg-transparent text-foreground", title: "text-foreground", description: "text-muted-foreground", icon: "" },
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
    // Solid per color
    { variant: "solid", color: "primary", class: { root: "bg-primary text-primary-foreground border-primary", title: "text-primary-foreground", description: "text-primary-foreground/90", icon: "text-primary-foreground" } },
    { variant: "solid", color: "secondary", class: { root: "bg-secondary text-secondary-foreground border-secondary", title: "text-secondary-foreground", description: "text-secondary-foreground/90", icon: "text-secondary-foreground" } },
    { variant: "solid", color: "success", class: { root: "bg-success text-success-foreground border-success", title: "text-success-foreground", description: "text-success-foreground/90", icon: "text-success-foreground" } },
    { variant: "solid", color: "warning", class: { root: "bg-warning text-warning-foreground border-warning", title: "text-warning-foreground", description: "text-warning-foreground/90", icon: "text-warning-foreground" } },
    { variant: "solid", color: "error", class: { root: "bg-error text-error-foreground border-error", title: "text-error-foreground", description: "text-error-foreground/90", icon: "text-error-foreground" } },
    { variant: "solid", color: "info", class: { root: "bg-info text-info-foreground border-info", title: "text-info-foreground", description: "text-info-foreground/90", icon: "text-info-foreground" } },

    // Soft per color
    { variant: "soft", color: "primary", class: { root: "bg-muted/70 border-primary/40", icon: "text-primary" } },
    { variant: "soft", color: "secondary", class: { root: "bg-muted/70 border-secondary/40", icon: "text-secondary" } },
    { variant: "soft", color: "success", class: { root: "bg-muted/70 border-success/40", icon: "text-success" } },
    { variant: "soft", color: "warning", class: { root: "bg-muted/70 border-warning/40", icon: "text-warning" } },
    { variant: "soft", color: "error", class: { root: "bg-muted/70 border-error/40", icon: "text-error" } },
    { variant: "soft", color: "info", class: { root: "bg-muted/70 border-info/40", icon: "text-info" } },

    // Outline per color
    { variant: "outline", color: "primary", class: { root: "border-primary", icon: "text-primary" } },
    { variant: "outline", color: "secondary", class: { root: "border-secondary", icon: "text-secondary" } },
    { variant: "outline", color: "success", class: { root: "border-success", icon: "text-success" } },
    { variant: "outline", color: "warning", class: { root: "border-warning", icon: "text-warning" } },
    { variant: "outline", color: "error", class: { root: "border-error", icon: "text-error" } },
    { variant: "outline", color: "info", class: { root: "border-info", icon: "text-info" } },
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
