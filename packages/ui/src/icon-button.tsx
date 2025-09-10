import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const iconButtonStyles = tv({
  base: [
    "inline-flex items-center justify-center",
    "rounded-md border transition-colors",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ],
  variants: {
    variant: {
      solid: "",
      outline: "bg-transparent",
      ghost: "border-transparent",
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
      sm: "size-8 text-sm",
      md: "size-10 text-base",
      lg: "size-11 text-lg",
    },
  },
  compoundVariants: [
    { variant: "solid", color: "primary", class: "bg-primary text-primary-foreground border-primary hover:bg-primary/90" },
    { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90" },
    { variant: "solid", color: "success", class: "bg-success text-success-foreground border-success hover:bg-success/90" },
    { variant: "solid", color: "warning", class: "bg-warning text-warning-foreground border-warning hover:bg-warning/90" },
    { variant: "solid", color: "error", class: "bg-error text-error-foreground border-error hover:bg-error/90" },
    { variant: "solid", color: "info", class: "bg-info text-info-foreground border-info hover:bg-info/90" },

    { variant: "outline", color: "primary", class: "border-primary text-primary hover:bg-primary hover:text-primary-foreground" },
    { variant: "outline", color: "secondary", class: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" },
    { variant: "outline", color: "success", class: "border-success text-success hover:bg-success hover:text-success-foreground" },
    { variant: "outline", color: "warning", class: "border-warning text-warning hover:bg-warning hover:text-warning-foreground" },
    { variant: "outline", color: "error", class: "border-error text-error hover:bg-error hover:text-error-foreground" },
    { variant: "outline", color: "info", class: "border-info text-info hover:bg-info hover:text-info-foreground" },

    { variant: "ghost", color: "primary", class: "text-primary hover:bg-primary/10" },
    { variant: "ghost", color: "secondary", class: "text-secondary hover:bg-secondary/10" },
    { variant: "ghost", color: "success", class: "text-success hover:bg-success/10" },
    { variant: "ghost", color: "warning", class: "text-warning hover:bg-warning/10" },
    { variant: "ghost", color: "error", class: "text-error hover:bg-error/10" },
    { variant: "ghost", color: "info", class: "text-info hover:bg-info/10" },
  ],
  defaultVariants: {
    variant: "outline",
    size: "md",
    color: "primary",
  },
});

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;

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

