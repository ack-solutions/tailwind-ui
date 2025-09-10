import React from "react";
import { cn } from "./lib/cn";

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  size?: "sm" | "md" | "lg";
}

const sizeClass = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export function Spinner({ className, size = "md", ...rest }: SpinnerProps) {
  return (
    <svg className={cn("animate-spin", sizeClass[size], className)} viewBox="0 0 24 24" aria-hidden {...rest}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}

