import React from "react";
import { cn } from "./lib/cn";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0..100
}

export function Progress({ value = 0, className, ...rest }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "relative h-2 w-full bg-muted/60 rounded-full overflow-hidden shadow-sm",
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          "h-full bg-gradient-to-r from-primary to-primary/90 transition-all duration-300 ease-in-out",
          "shadow-sm relative",
          value > 0 && "shadow-primary/25"
        )}
        style={{ width: `${clamped}%` }}
      >
        {clamped > 0 && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        )}
      </div>
    </div>
  );
}

