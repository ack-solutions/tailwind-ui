import React from "react";
import { cn } from "./lib/cn";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: string | number;
  rowGap?: string | number;
  colGap?: string | number;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end";
}

function gapCls(prefix: "gap" | "row-gap" | "col-gap", v?: string | number) {
  if (!v && v !== 0) return undefined;
  if (typeof v === "number") return `${prefix}-${v}`;
  // allow raw classes e.g. "gap-4" or custom like "gap-x-3 gap-y-2"
  if (prefix === "gap") return v;
  if (prefix === "row-gap") return v;
  if (prefix === "col-gap") return v;
  return undefined;
}

export function Grid({ cols = 12, gap, rowGap, colGap, align, justify, className, children, ...rest }: GridProps) {
  const alignCls = align ? (align === "stretch" ? "items-stretch" : align === "center" ? "items-center" : align === "end" ? "items-end" : "items-start") : undefined;
  const justifyCls = justify ? (justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : "justify-start") : undefined;
  const base = cn(
    "grid",
    `grid-cols-${cols}`,
    gapCls("gap", gap),
    gapCls("row-gap", rowGap),
    gapCls("col-gap", colGap),
    alignCls,
    justifyCls,
    className
  );
  return (
    <div className={base} {...rest}>
      {children}
    </div>
  );
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

function spanCls(prefix: string, n?: number) {
  if (!n) return undefined;
  return `${prefix}col-span-${n}`;
}

export function GridItem({ xs, sm, md, lg, xl, className, children, ...rest }: GridItemProps) {
  const cls = cn(
    spanCls("", xs),
    spanCls("sm:", sm),
    spanCls("md:", md),
    spanCls("lg:", lg),
    spanCls("xl:", xl),
    className
  );
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}

