import React from "react";
import { cn } from "./lib/cn";

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  size?: "sm" | "md" | "lg";
}

const sizeClass = {
  sm: "size-5",
  md: "size-8",
  lg: "size-12",
};

export function Spinner({ className, size = "md", ...rest }: SpinnerProps) {
  return (
    <svg
      className={cn(
        "animate-spin text-primary",
        sizeClass[size],
        className
      )}
      viewBox="0 0 24 24"
      aria-hidden
      {...rest}
    >
      <defs>
        <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="url(#spinner-gradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

