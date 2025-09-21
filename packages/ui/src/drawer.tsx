"use client";
import React from "react";
import { Portal } from "./portal";
import { cn } from "./lib/cn";

export type DrawerSide = "left" | "right";

interface DrawerCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
  side: DrawerSide;
}

const Ctx = React.createContext<DrawerCtx | null>(null);

export interface DrawerProps {
  side?: DrawerSide;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Drawer({ side = "left", open, defaultOpen, onOpenChange, children }: DrawerProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const controlled = open !== undefined;
  const isOpen = controlled ? Boolean(open) : internal;
  const setOpen = (v: boolean) => {
    if (!controlled) setInternal(v);
    onOpenChange?.(v);
  };

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return <Ctx.Provider value={{ open: isOpen, setOpen, side }}>{children}</Ctx.Provider>;
}

export interface DrawerTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function DrawerTrigger({ className, children, ...rest }: DrawerTriggerProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("DrawerTrigger must be used within <Drawer>");
  return (
    <button type="button" className={cn(className)} onClick={(e) => { rest.onClick?.(e); ctx.setOpen(true); }} {...rest}>
      {children}
    </button>
  );
}

export interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export function DrawerContent({ className, children, ...rest }: DrawerContentProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx || !ctx.open) return null;
  const fromLeft = ctx.side === "left";
  return (
    <Portal>
      <div className="fixed inset-0 z-50" onClick={() => ctx.setOpen(false)}>
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            ctx.open ? "opacity-100" : "opacity-0"
          )}
          aria-hidden
        />
        <div
          className={cn(
            "absolute top-0 h-full w-96 bg-popover text-popover-foreground",
            "border-r border-border/20 shadow-2xl backdrop-blur-md",
            "transition-all duration-300 ease-in-out transform",
            fromLeft
              ? ctx.open ? "left-0 translate-x-0" : "left-0 -translate-x-full"
              : ctx.open ? "right-0 translate-x-0" : "right-0 translate-x-full",
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

