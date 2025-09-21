"use client";
import React from "react";
import { cn } from "./lib/cn";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: React.ReactNode;
  placement?: TooltipPlacement;
  open?: boolean;
  defaultOpen?: boolean;
  className?: string;
  children: React.ReactElement;
}

export function Tooltip({ content, placement = "top", open, defaultOpen, className, children }: TooltipProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const isControlled = open !== undefined;
  const isOpen = isControlled ? Boolean(open) : internal;

  const show = () => !isControlled && setInternal(true);
  const hide = () => !isControlled && setInternal(false);

  const pos = placementStyles(placement);

  return (
    <span className="relative inline-block" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 rounded-lg border border-border/20",
          "bg-popover text-popover-foreground text-xs px-3 py-2 shadow-lg",
          "backdrop-blur-sm transition-all duration-200 ease-in-out",
          "font-medium max-w-xs text-center",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
          pos,
          className
        )}
      >
        {content}
        <span
          className={cn(
            "absolute border-4 border-transparent",
            placement === "top" && "top-full left-1/2 -translate-x-1/2 border-t-border/20",
            placement === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-border/20",
            placement === "left" && "left-full top-1/2 -translate-y-1/2 border-l-border/20",
            placement === "right" && "right-full top-1/2 -translate-y-1/2 border-r-border/20"
          )}
          aria-hidden
        />
      </span>
    </span>
  );
}

function placementStyles(p: TooltipPlacement) {
  switch (p) {
    case "bottom":
      return "left-1/2 -translate-x-1/2 top-[calc(100%+8px)]";
    case "left":
      return "right-[calc(100%+8px)] top-1/2 -translate-y-1/2";
    case "right":
      return "left-[calc(100%+8px)] top-1/2 -translate-y-1/2";
    case "top":
    default:
      return "left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)]";
  }
}

