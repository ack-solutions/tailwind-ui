import React from "react";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";

export interface BoxOwnProps {
  className?: string;
  style?: React.CSSProperties;
}

export type BoxProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, BoxOwnProps>;

const BoxImpl = ({ as, className, style, children, ...rest }: BoxProps<any>, ref: PolymorphicRef<any>) => {
  const Comp = (as || "div") as React.ElementType;
  return (
    <Comp ref={ref} className={cn(className)} style={style} {...(rest as any)}>
      {children}
    </Comp>
  );
};

export const Box = React.forwardRef(BoxImpl) as <E extends React.ElementType = "div">(
  props: BoxProps<E> & { ref?: PolymorphicRef<E> }
) => React.ReactElement | null;

