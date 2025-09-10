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
    <PopoverContent className={cn("p-1 min-w-40", className)} role="menu" {...rest}>
      <div className="flex flex-col">{children}</div>
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
        "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-foreground",
        "hover:bg-muted focus:bg-muted focus:outline-none",
        inset && "pl-8",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border" role="separator" />;
}

