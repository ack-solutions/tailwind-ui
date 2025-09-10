import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

const cardStyles = tv({
  base: "bg-card text-card-foreground border border-border rounded-lg shadow-sm",
  variants: {
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },
    elevated: {
      true: "shadow-md",
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

type CardVariants = VariantProps<typeof cardStyles>;

export interface CardOwnProps extends CardVariants {
  className?: string;
}

export type CardProps<E extends React.ElementType = "div"> =
  PolymorphicComponentProps<E, CardOwnProps>;

const CardImpl = (
  { as, className, padding, elevated, ...rest }: CardProps<any>,
  ref: PolymorphicRef<any>
) => {
  const Comp = (as || "div") as React.ElementType;
  return <Comp ref={ref} className={cn(cardStyles({ padding, elevated }), className)} {...rest} />;
};

export const Card = React.forwardRef(CardImpl) as <
  E extends React.ElementType = "div"
>(props: CardProps<E> & { ref?: PolymorphicRef<E> }) => React.ReactElement | null;

