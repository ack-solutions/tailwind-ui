import React from "react";
import { cn } from "./lib/cn";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  inset?: boolean;
}

export function Divider({ orientation = "horizontal", inset = false, className, ...rest }: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "w-px self-stretch bg-gradient-to-b from-transparent via-border/60 to-transparent",
          inset && "mx-4",
          className
        )}
        {...(rest as any)}
      />
    );
  }
  return (
    <hr
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent border-0",
        inset && "mx-4",
        className
      )}
      {...rest}
    />
  );
}

