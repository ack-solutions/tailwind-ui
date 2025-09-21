import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

const typographyStyles = tv({
  base: "text-foreground leading-relaxed",
  variants: {
    variant: {
      h1: [
        "text-6xl font-bold leading-tight tracking-tight scroll-m-20",
        "bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
      ],
      h2: [
        "text-5xl font-bold leading-tight tracking-tight scroll-m-20",
        "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
      ],
      h3: "text-4xl font-semibold leading-snug tracking-tight scroll-m-20",
      h4: "text-3xl font-semibold leading-snug tracking-tight scroll-m-20",
      h5: "text-2xl font-semibold leading-normal tracking-tight",
      h6: "text-xl font-semibold leading-normal tracking-tight",
      subtitle1: "text-lg font-semibold leading-relaxed tracking-wide",
      subtitle2: "text-base font-semibold leading-relaxed tracking-wide",
      body1: "text-base leading-relaxed font-normal",
      body2: "text-sm leading-relaxed font-normal",
      caption: "text-xs leading-normal text-muted-foreground font-medium",
      overline: "text-xs uppercase tracking-widest font-semibold leading-normal text-muted-foreground",
      inherit: "",
    },
    color: {
      inherit: "",
      primary: "text-primary font-semibold",
      secondary: "text-secondary font-semibold",
      success: "text-success font-semibold",
      warning: "text-warning font-semibold",
      error: "text-error font-semibold",
      info: "text-info font-semibold",
      foreground: "text-foreground",
      muted: "text-muted-foreground",
    },
    align: {
      inherit: "",
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    gutterBottom: {
      true: "mb-4",
    },
    noWrap: {
      true: "truncate",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "inherit",
    align: "inherit",
  },
});

export type TypographyVariant = 
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "subtitle1" | "subtitle2"
  | "body1" | "body2"
  | "caption" | "overline"
  | "inherit";

export type TypographyColor = 
  | "inherit" | "primary" | "secondary" | "success" 
  | "warning" | "error" | "info" | "foreground" | "muted";

export type TypographyAlign = 
  | "inherit" | "left" | "center" | "right" | "justify";


type TypographyVariants = VariantProps<typeof typographyStyles>;

export interface TypographyOwnProps extends TypographyVariants {
  className?: string;
  children?: React.ReactNode;
}

export type TypographyProps<E extends React.ElementType = "p"> =
  PolymorphicComponentProps<E, TypographyOwnProps>;

// Default element mapping for variants
const defaultElementMapping: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2", 
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  inherit: "p",
};

const TypographyImpl = (
  {
    as,
    className,
    children,
    variant = "body1",
    color,
    align,
    gutterBottom,
    noWrap,
    ...rest
  }: TypographyProps<any>,
  ref: PolymorphicRef<any>
) => {
  const Comp = as || defaultElementMapping[variant] || "p";
  const styles = typographyStyles({ variant, color, align, gutterBottom, noWrap });

  return (
    <Comp ref={ref} className={cn(styles, className)} {...rest}>
      {children}
    </Comp>
  );
};

export const Typography = React.forwardRef(TypographyImpl) as <
  E extends React.ElementType = "p"
>(props: TypographyProps<E> & { ref?: PolymorphicRef<E> }) => React.ReactElement | null;
