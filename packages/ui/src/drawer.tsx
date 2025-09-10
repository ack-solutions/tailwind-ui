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
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div
          className={cn(
            "absolute top-0 h-full w-80 bg-popover text-popover-foreground border border-border shadow-xl",
            fromLeft ? "left-0" : "right-0",
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

