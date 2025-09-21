import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center gap-2",
    "border font-semibold transition-all duration-200 ease-in-out",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "active:scale-[0.98]",
    "select-none"
  ],
  variants: {
    variant: {
      solid: "shadow-sm",
      outline: "bg-transparent shadow-sm",
      ghost: "border-transparent shadow-none",
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
      sm: "h-9 px-3 text-sm rounded-md",
      md: "h-10 px-4 text-sm rounded-lg",
      lg: "h-12 px-6 text-base rounded-lg",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  compoundVariants: [
    // Solid - Enhanced with better shadows and hover effects
    { variant: "solid", color: "primary", class: "bg-primary text-primary-foreground border-primary shadow-primary/25 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30" },
    { variant: "solid", color: "secondary", class: "bg-secondary text-secondary-foreground border-secondary shadow-secondary/25 hover:bg-secondary/90 hover:shadow-md hover:shadow-secondary/30" },
    { variant: "solid", color: "success", class: "bg-success text-success-foreground border-success shadow-success/25 hover:bg-success/90 hover:shadow-md hover:shadow-success/30" },
    { variant: "solid", color: "warning", class: "bg-warning text-warning-foreground border-warning shadow-warning/25 hover:bg-warning/90 hover:shadow-md hover:shadow-warning/30" },
    { variant: "solid", color: "error", class: "bg-error text-error-foreground border-error shadow-error/25 hover:bg-error/90 hover:shadow-md hover:shadow-error/30" },
    { variant: "solid", color: "info", class: "bg-info text-info-foreground border-info shadow-info/25 hover:bg-info/90 hover:shadow-md hover:shadow-info/30" },

    // Outline - Enhanced with better hover states
    { variant: "outline", color: "primary", class: "border-primary text-primary bg-transparent hover:bg-primary/5 hover:border-primary/80 hover:text-primary/90" },
    { variant: "outline", color: "secondary", class: "border-secondary text-secondary bg-transparent hover:bg-secondary/5 hover:border-secondary/80 hover:text-secondary/90" },
    { variant: "outline", color: "success", class: "border-success text-success bg-transparent hover:bg-success/5 hover:border-success/80 hover:text-success/90" },
    { variant: "outline", color: "warning", class: "border-warning text-warning bg-transparent hover:bg-warning/5 hover:border-warning/80 hover:text-warning/90" },
    { variant: "outline", color: "error", class: "border-error text-error bg-transparent hover:bg-error/5 hover:border-error/80 hover:text-error/90" },
    { variant: "outline", color: "info", class: "border-info text-info bg-transparent hover:bg-info/5 hover:border-info/80 hover:text-info/90" },

    // Ghost - Enhanced with better background effects
    { variant: "ghost", color: "primary", class: "text-primary hover:bg-primary/8 hover:text-primary/90" },
    { variant: "ghost", color: "secondary", class: "text-secondary hover:bg-secondary/8 hover:text-secondary/90" },
    { variant: "ghost", color: "success", class: "text-success hover:bg-success/8 hover:text-success/90" },
    { variant: "ghost", color: "warning", class: "text-warning hover:bg-warning/8 hover:text-warning/90" },
    { variant: "ghost", color: "error", class: "text-error hover:bg-error/8 hover:text-error/90" },
    { variant: "ghost", color: "info", class: "text-info hover:bg-info/8 hover:text-info/90" },

    // Link - Enhanced with better hover effects
    { variant: "link", color: "primary", class: "text-primary hover:text-primary/80 hover:underline" },
    { variant: "link", color: "secondary", class: "text-secondary hover:text-secondary/80 hover:underline" },
    { variant: "link", color: "success", class: "text-success hover:text-success/80 hover:underline" },
    { variant: "link", color: "warning", class: "text-warning hover:text-warning/80 hover:underline" },
    { variant: "link", color: "error", class: "text-error hover:text-error/80 hover:underline" },
    { variant: "link", color: "info", class: "text-info hover:text-info/80 hover:underline" },
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
