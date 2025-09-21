import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

const cardStyles = tv({
  base: [
    "bg-card text-card-foreground",
    "shadow-xs hover:shadow-sm transition-all duration-300 ease-in-out",
    "border border-border/20"
  ],
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
    elevated: {
      true: "shadow-md hover:shadow-lg",
      false: "shadow-xs hover:shadow-sm",
    },
    variant: {
      default: "rounded-md border-border/20",
      outlined: "rounded-md border-2 border-border/30",
      elevated: "rounded-lg shadow-sm hover:shadow-md",
      filled: "rounded-md bg-surface/50 border-transparent",
    },
    color: {
      default: "",
      primary: "border-primary/20 bg-primary/5",
      secondary: "border-secondary/20 bg-secondary/5",
      success: "border-success/20 bg-success/5",
      warning: "border-warning/20 bg-warning/5",
      error: "border-error/20 bg-error/5",
      info: "border-info/20 bg-info/5",
    },
  },
  defaultVariants: {
    padding: "md",
    elevated: false,
    variant: "default",
    color: "default",
  },
});

type CardVariants = VariantProps<typeof cardStyles>;

export interface CardOwnProps extends CardVariants {
  className?: string;
  variant?: "default" | "outlined" | "elevated" | "filled";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "info";
}

export type CardProps<E extends React.ElementType = "div"> =
  PolymorphicComponentProps<E, CardOwnProps>;

const CardImpl = (
  { as, className, padding, elevated, variant, color, ...rest }: CardProps<any>,
  ref: PolymorphicRef<any>
) => {
  const Comp = (as || "div") as React.ElementType;
  return <Comp ref={ref} className={cn(cardStyles({ padding, elevated, variant, color }), className)} {...rest} />;
};

export const Card = React.forwardRef(CardImpl) as <
  E extends React.ElementType = "div"
>(props: CardProps<E> & { ref?: PolymorphicRef<E> }) => React.ReactElement | null;

