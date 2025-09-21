"use client";
import React from "react";
import { cn } from "./lib/cn";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

export interface DropdownMenuProps extends React.ComponentProps<typeof Popover> {}
export function DropdownMenu(props: DropdownMenuProps) {
  return <Popover {...props} />;
}

export interface DropdownMenuTriggerProps extends React.ComponentProps<typeof PopoverTrigger> {}
export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <PopoverTrigger {...props} />;
}

export interface DropdownMenuContentProps extends React.ComponentProps<typeof PopoverContent> {}
export function DropdownMenuContent({ className, children, ...rest }: DropdownMenuContentProps) {
  return (
    <PopoverContent
      className={cn(
        "p-2 min-w-48 rounded-lg border border-border/20 shadow-lg",
        "bg-popover text-popover-foreground backdrop-blur-sm",
        className
      )}
      role="menu"
      {...rest}
    >
      <div className="flex flex-col gap-1">{children}</div>
    </PopoverContent>
  );
}

export interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
}
export function DropdownMenuItem({ className, inset, children, ...rest }: DropdownMenuItemProps) {
  return (
    <button
      role="menuitem"
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium",
        "text-foreground transition-all duration-200",
        "hover:bg-muted/80 hover:shadow-sm focus:bg-muted/80 focus:outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary/20",
        inset && "pl-9",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return (
    <div
      className="my-2 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"
      role="separator"
    />
  );
}

