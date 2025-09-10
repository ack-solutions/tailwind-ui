import React from "react";
import { cn } from "./lib/cn";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0..100
}

export function Progress({ value = 0, className, ...rest }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-2 w-full bg-muted rounded-full overflow-hidden", className)} {...rest}>
      <div className="h-full bg-primary transition-[width] duration-200" style={{ width: `${clamped}%` }} />
    </div>
  );
}

