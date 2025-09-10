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
          "pointer-events-none absolute z-40 rounded-md border border-border bg-popover text-popover-foreground text-xs px-2 py-1 shadow-md",
          "transition-opacity duration-100",
          isOpen ? "opacity-100" : "opacity-0",
          pos,
          className
        )}
      >
        {content}
      </span>
    </span>
  );
}

function placementStyles(p: TooltipPlacement) {
  switch (p) {
    case "bottom":
      return "left-1/2 -translate-x-1/2 top-[calc(100%+6px)]";
    case "left":
      return "right-[calc(100%+6px)] top-1/2 -translate-y-1/2";
    case "right":
      return "left-[calc(100%+6px)] top-1/2 -translate-y-1/2";
    case "top":
    default:
      return "left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)]";
  }
}

