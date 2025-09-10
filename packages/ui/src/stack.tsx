import React from "react";
import { cn } from "./lib/cn";

export type StackDirection = "row" | "column";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: string | number; // Tailwind gap class or scale number
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  inline?: boolean;
  divider?: React.ReactNode;
}

function gapClass(gap?: string | number) {
  if (gap === undefined) return undefined;
  if (typeof gap === "number") return `gap-${gap}`;
  return gap; // pass-through e.g. "gap-4" or "gap-x-2 gap-y-4"
}

function alignClass(a?: StackProps["align"]) {
  switch (a) {
    case "start":
      return "items-start";
    case "center":
      return "items-center";
    case "end":
      return "items-end";
    case "stretch":
      return "items-stretch";
    case "baseline":
      return "items-baseline";
    default:
      return undefined;
  }
}

function justifyClass(j?: StackProps["justify"]) {
  switch (j) {
    case "start":
      return "justify-start";
    case "center":
      return "justify-center";
    case "end":
      return "justify-end";
    case "between":
      return "justify-between";
    case "around":
      return "justify-around";
    case "evenly":
      return "justify-evenly";
    default:
      return undefined;
  }
}

export function Stack({
  direction = "column",
  gap,
  align,
  justify,
  wrap,
  inline,
  divider,
  className,
  children,
  ...rest
}: StackProps) {
  const base = cn(
    inline ? "inline-flex" : "flex",
    direction === "row" ? "flex-row" : "flex-col",
    wrap && "flex-wrap",
    gapClass(gap),
    alignClass(align),
    justifyClass(justify),
    className
  );

  if (!divider) {
    return (
      <div className={base} {...rest}>
        {children}
      </div>
    );
  }

  const kids = React.Children.toArray(children).filter(Boolean);
  return (
    <div className={base} {...rest}>
      {kids.map((child, i) => (
        <React.Fragment key={(child as any)?.key ?? i}>
          {i > 0 ? divider : null}
          {child}
        </React.Fragment>
      ))}
    </div>
  );
}

