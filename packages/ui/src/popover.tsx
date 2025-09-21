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
        "absolute left-0 top-[calc(100%+8px)] z-50 min-w-48 rounded-lg",
        "border border-border/20 bg-popover text-popover-foreground p-4 shadow-lg",
        "backdrop-blur-sm transition-all duration-200 ease-in-out",
        "transform scale-95 opacity-0 animate-in fade-in-0 zoom-in-95",
        ctx.open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        className
      )}
      {...rest}
    >
      <div
        className="absolute -top-2 left-4 w-4 h-2 bg-popover border-l border-t border-border/20 rotate-45"
        aria-hidden
      />
      {children}
    </div>
  );
}

