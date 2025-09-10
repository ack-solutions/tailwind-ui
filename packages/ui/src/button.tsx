import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center gap-2",
    "border font-semibold transition-colors",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  ],
  variants: {
    variant: {
      solid: "",
      outline: "bg-transparent",
      ghost: "border-transparent",
      link: "border-0 shadow-none p-0 h-auto underline underline-offset-4",
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
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-11 px-6 text-base",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  compoundVariants: [
    // Solid
    { variant: "solid", color: "primary", class: "bg-primary text-primary-foreground border-primary hover:bg-primary/90" },
    { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90" },
    { variant: "solid", color: "success", class: "bg-success text-success-foreground border-success hover:bg-success/90" },
    { variant: "solid", color: "warning", class: "bg-warning text-warning-foreground border-warning hover:bg-warning/90" },
    { variant: "solid", color: "error", class: "bg-error text-error-foreground border-error hover:bg-error/90" },
    { variant: "solid", color: "info", class: "bg-info text-info-foreground border-info hover:bg-info/90" },

    // Outline
    { variant: "outline", color: "primary", class: "border-primary text-primary hover:bg-primary hover:text-primary-foreground" },
    { variant: "outline", color: "secondary", class: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" },
    { variant: "outline", color: "success", class: "border-success text-success hover:bg-success hover:text-success-foreground" },
    { variant: "outline", color: "warning", class: "border-warning text-warning hover:bg-warning hover:text-warning-foreground" },
    { variant: "outline", color: "error", class: "border-error text-error hover:bg-error hover:text-error-foreground" },
    { variant: "outline", color: "info", class: "border-info text-info hover:bg-info hover:text-info-foreground" },

    // Ghost
    { variant: "ghost", color: "primary", class: "text-primary hover:bg-primary/10" },
    { variant: "ghost", color: "secondary", class: "text-secondary hover:bg-secondary/10" },
    { variant: "ghost", color: "success", class: "text-success hover:bg-success/10" },
    { variant: "ghost", color: "warning", class: "text-warning hover:bg-warning/10" },
    { variant: "ghost", color: "error", class: "text-error hover:bg-error/10" },
    { variant: "ghost", color: "info", class: "text-info hover:bg-info/10" },

    // Link
    { variant: "link", color: "primary", class: "text-primary hover:opacity-80" },
    { variant: "link", color: "secondary", class: "text-secondary hover:opacity-80" },
    { variant: "link", color: "success", class: "text-success hover:opacity-80" },
    { variant: "link", color: "warning", class: "text-warning hover:opacity-80" },
    { variant: "link", color: "error", class: "text-error hover:opacity-80" },
    { variant: "link", color: "info", class: "text-info hover:opacity-80" },
  ],
  defaultVariants: {
    variant: "solid",
    size: "md",
    color: "primary",
  },
});

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "primary" | "secondary" | "success" | "warning" | "error" | "info";

type ButtonVariants = VariantProps<typeof buttonStyles>;

/**
 * Button component props
 * - variant: visual style (solid, outline, ghost, link)
 * - size: control size (sm, md, lg)
 * - fullWidth: stretches button to 100% width
 * - color: semantic color (primary, secondary, success, warning, error, info)
 */
export interface ButtonOwnProps extends ButtonVariants {
  className?: string;
  children?: React.ReactNode;
  color?: ButtonColor;
}

export type ButtonProps<E extends React.ElementType = "button"> =
  PolymorphicComponentProps<E, ButtonOwnProps>;

const ButtonImpl = (
  {
    as,
    className,
    children,
    variant,
    size,
    fullWidth,
    color = "primary",
    ...rest
  }: ButtonProps<any>,
  ref: PolymorphicRef<any>
) => {
  const Comp = (as || "button") as React.ElementType;
  return (
    <Comp 
      ref={ref} 
      className={cn(buttonStyles({ variant, size, fullWidth, color }), className)} 
      {...rest}
    >
      {children}
    </Comp>
  );
};

export const Button = React.forwardRef(ButtonImpl) as <
  E extends React.ElementType = "button"
>(props: ButtonProps<E> & { ref?: PolymorphicRef<E> }) => React.ReactElement | null;
