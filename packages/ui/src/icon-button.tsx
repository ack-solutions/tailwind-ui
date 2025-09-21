import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const iconButtonStyles = tv({
  base: [
    "inline-flex items-center justify-center",
    "rounded-md transition-all duration-200 ease-in-out",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
    "active:scale-95 shadow-sm hover:shadow-md",
    "border border-transparent"
  ],
  variants: {
    variant: {
      filled: "shadow-sm",
      outlined: "bg-transparent border-2",
      standard: "bg-transparent shadow-none",
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
      sm: "size-9",
      md: "size-10",
      lg: "size-12",
    },
  },
  compoundVariants: [
    // Filled variants - MUI-inspired
    { variant: "filled", color: "primary", class: "bg-primary text-primary-foreground shadow-primary/25 hover:bg-primary/90 hover:shadow-md" },
    { variant: "filled", color: "secondary", class: "bg-secondary text-secondary-foreground shadow-secondary/25 hover:bg-secondary/90 hover:shadow-md" },
    { variant: "filled", color: "success", class: "bg-success text-success-foreground shadow-success/25 hover:bg-success/90 hover:shadow-md" },
    { variant: "filled", color: "warning", class: "bg-warning text-warning-foreground shadow-warning/25 hover:bg-warning/90 hover:shadow-md" },
    { variant: "filled", color: "error", class: "bg-error text-error-foreground shadow-error/25 hover:bg-error/90 hover:shadow-md" },
    { variant: "filled", color: "info", class: "bg-info text-info-foreground shadow-info/25 hover:bg-info/90 hover:shadow-md" },

    // Outlined variants - MUI-inspired
    { variant: "outlined", color: "primary", class: "border-primary text-primary hover:bg-primary/5 hover:border-primary/80" },
    { variant: "outlined", color: "secondary", class: "border-secondary text-secondary hover:bg-secondary/5 hover:border-secondary/80" },
    { variant: "outlined", color: "success", class: "border-success text-success hover:bg-success/5 hover:border-success/80" },
    { variant: "outlined", color: "warning", class: "border-warning text-warning hover:bg-warning/5 hover:border-warning/80" },
    { variant: "outlined", color: "error", class: "border-error text-error hover:bg-error/5 hover:border-error/80" },
    { variant: "outlined", color: "info", class: "border-info text-info hover:bg-info/5 hover:border-info/80" },

    // Standard variants - MUI-inspired
    { variant: "standard", color: "primary", class: "text-primary hover:bg-primary/10 hover:text-primary/90" },
    { variant: "standard", color: "secondary", class: "text-secondary hover:bg-secondary/10 hover:text-secondary/90" },
    { variant: "standard", color: "success", class: "text-success hover:bg-success/10 hover:text-success/90" },
    { variant: "standard", color: "warning", class: "text-warning hover:bg-warning/10 hover:text-warning/90" },
    { variant: "standard", color: "error", class: "text-error hover:bg-error/10 hover:text-error/90" },
    { variant: "standard", color: "info", class: "text-info hover:bg-info/10 hover:text-info/90" },
  ],
  defaultVariants: {
    variant: "standard",
    size: "md",
    color: "primary",
  },
});

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;

export type IconButtonVariant = "filled" | "outlined" | "standard";
export type IconButtonSize = "sm" | "md" | "lg";
export type IconButtonColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";

export interface IconButtonProps extends IconButtonVariants {
  className?: string;
  children?: React.ReactNode; // icon
}

export function IconButton({ variant, size, color, className, children, ...rest }: IconButtonProps) {
  return (
    <button type="button" className={cn(iconButtonStyles({ variant, size, color }), className)} {...rest}>
      {children}
    </button>
  );
}

