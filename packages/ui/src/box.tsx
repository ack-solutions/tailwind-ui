import React from "react";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

export interface BoxOwnProps {
  className?: string;
  style?: React.CSSProperties;
  p?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  m?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  bg?: "default" | "primary" | "secondary" | "muted";
}

export type BoxProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, BoxOwnProps>;

const BoxImpl = ({ as, className, style, children, p, m, border, borderRadius, shadow, bg, ...rest }: BoxProps<any>, ref: PolymorphicRef<any>) => {
  const Comp = (as || "div") as React.ElementType;

  const paddingClasses = {
    none: "",
    xs: "p-1",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
    xl: "p-8"
  };

  const marginClasses = {
    none: "",
    xs: "m-1",
    sm: "m-2",
    md: "m-4",
    lg: "m-6",
    xl: "m-8"
  };

  const backgroundClasses = {
    default: "",
    primary: "bg-primary",
    secondary: "bg-secondary",
    muted: "bg-muted"
  };

  return (
    <Comp
      ref={ref}
      className={cn(
        paddingClasses[p || "none"],
        marginClasses[m || "none"],
        border && "border border-border",
        borderRadius === "none" && "rounded-none",
        borderRadius === "sm" && "rounded-sm",
        borderRadius === "md" && "rounded-md",
        borderRadius === "lg" && "rounded-lg",
        borderRadius === "xl" && "rounded-xl",
        borderRadius === "full" && "rounded-full",
        shadow === "xs" && "shadow-xs",
        shadow === "sm" && "shadow-sm",
        shadow === "md" && "shadow-md",
        shadow === "lg" && "shadow-lg",
        shadow === "xl" && "shadow-xl",
        backgroundClasses[bg || "default"],
        className
      )}
      style={style}
      {...(rest as any)}
    >
      {children}
    </Comp>
  );
};

export const Box = React.forwardRef(BoxImpl) as <E extends React.ElementType = "div">(
  props: BoxProps<E> & { ref?: PolymorphicRef<E> }
) => React.ReactElement | null;

