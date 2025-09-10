"use client";
import React from "react";
import { cn } from "./lib/cn";

interface PopoverCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
  id: string;
}
const Ctx = React.createContext<PopoverCtx | null>(null);

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ open, defaultOpen, onOpenChange, className, children, ...rest }: PopoverProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const isControlled = open !== undefined;
  const isOpen = isControlled ? Boolean(open) : internal;
  const setOpen = (v: boolean) => {
    if (!isControlled) setInternal(v);
    onOpenChange?.(v);
  };
  const id = React.useId();

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    function onDoc(e: MouseEvent) {
      const el = e.target as Node;
      const root = document.getElementById(id);
      if (root && !root.contains(el)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isOpen, id]);

  return (
    <div id={id} className={cn("relative inline-block", className)} {...rest}>
      <Ctx.Provider value={{ open: isOpen, setOpen, id }}>{children}</Ctx.Provider>
    </div>
  );
}

export interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function PopoverTrigger({ className, children, ...rest }: PopoverTriggerProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("PopoverTrigger must be used within <Popover>");
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded={ctx.open}
      className={cn("inline-flex items-center gap-2", className)}
      onClick={(e) => {
        rest.onClick?.(e);
        ctx.setOpen(!ctx.open);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export function PopoverContent({ className, children, ...rest }: PopoverContentProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("PopoverContent must be used within <Popover>");
  return (
    <div
      role="dialog"
      hidden={!ctx.open}
      className={cn(
        "absolute left-0 top-[calc(100%+6px)] z-40 min-w-48 rounded-md border border-border bg-popover text-popover-foreground p-3 shadow-md",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

