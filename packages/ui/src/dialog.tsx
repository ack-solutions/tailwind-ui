"use client";
import React from "react";
import { cn } from "./lib/cn";
import { Portal } from "./portal";

interface DialogCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
}
const Ctx = React.createContext<DialogCtx | null>(null);

export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, defaultOpen, onOpenChange, children }: DialogProps) {
  const [internal, setInternal] = React.useState(Boolean(defaultOpen));
  const isControlled = open !== undefined;
  const isOpen = isControlled ? Boolean(open) : internal;
  const triggerRef = React.useRef<HTMLElement>(null);
  const setOpen = (v: boolean) => {
    if (!isControlled) setInternal(v);
    onOpenChange?.(v);
  };

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen && triggerRef.current) {
      (triggerRef.current as HTMLElement)?.focus?.();
    }
  }, [isOpen]);

  return <Ctx.Provider value={{ open: isOpen, setOpen, triggerRef }}>{children}</Ctx.Provider>;
}

export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function DialogTrigger({ className, children, ...rest }: DialogTriggerProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("DialogTrigger must be used within <Dialog>");
  return (
    <button
      ref={ctx.triggerRef as any}
      type="button"
      aria-haspopup="dialog"
      aria-expanded={ctx.open}
      className={cn(className)}
      onClick={(e) => { rest.onClick?.(e); ctx.setOpen(true); }}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export function DialogContent({ className, children, ...rest }: DialogContentProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("DialogContent must be used within <Dialog>");
  if (!ctx.open) return null;
  return (
    <Portal>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={() => ctx.setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" aria-hidden />
        <div
          className={cn(
            "relative z-10 w-[min(90vw,560px)] rounded-2xl border border-border/50",
            "bg-popover text-popover-foreground p-8 shadow-2xl",
            "backdrop-blur-md transition-all duration-300 ease-out",
            "transform scale-95 opacity-0 animate-in fade-in-0 zoom-in-95",
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

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export function DialogHeader({ className, ...rest }: DialogHeaderProps) {
  return <div className={cn("mb-6 space-y-2", className)} {...rest} />;
}

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export function DialogFooter({ className, ...rest }: DialogFooterProps) {
  return <div className={cn("mt-8 flex justify-end gap-3", className)} {...rest} />;
}

