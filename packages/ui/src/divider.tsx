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
        className={cn("w-px self-stretch bg-border", inset && "mx-3", className)}
        {...(rest as any)}
      />
    );
  }
  return <hr className={cn("h-px w-full bg-border border-0", inset && "mx-3", className)} {...rest} />;
}

