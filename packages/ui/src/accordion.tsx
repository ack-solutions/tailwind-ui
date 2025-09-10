"use client";
import React from "react";
import { cn } from "./lib/cn";

type Key = string;

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  value?: Key | Key[];
  defaultValue?: Key | Key[];
  onValueChange?: (value: Key | Key[]) => void;
}

interface CtxValue {
  type: "single" | "multiple";
  value: Set<Key>;
  toggle: (key: Key) => void;
  isOpen: (key: Key) => boolean;
}

const Ctx = React.createContext<CtxValue | null>(null);

export function Accordion({ type = "single", value, defaultValue, onValueChange, className, children, ...rest }: AccordionProps) {
  const [internal, setInternal] = React.useState<Set<Key>>(() => {
    const v = defaultValue;
    if (!v) return new Set();
    return new Set(Array.isArray(v) ? v : [v]);
  });
  const controlled = value !== undefined;
  const current = controlled
    ? new Set(Array.isArray(value) ? (value as Key[]) : value ? [value as Key] : [])
    : internal;

  const emit = (next: Set<Key>) => {
    if (!controlled) setInternal(new Set(next));
    onValueChange?.(type === "single" ? Array.from(next)[0] : Array.from(next));
  };

  const toggle = (key: Key) => {
    const next = new Set(current);
    const opened = next.has(key);
    if (type === "single") {
      next.clear();
      if (!opened) next.add(key);
    } else {
      if (opened) next.delete(key);
      else next.add(key);
    }
    emit(next);
  };

  const isOpen = (key: Key) => current.has(key);

  return (
    <div className={cn("divide-y divide-border rounded-md border border-border", className)} {...rest}>
      <Ctx.Provider value={{ type, value: current, toggle, isOpen }}>{children}</Ctx.Provider>
    </div>
  );
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> { value: Key }
export function AccordionItem({ value, className, children, ...rest }: AccordionItemProps) {
  return (
    <div data-item="" className={cn("bg-background", className)} {...rest}>
      {React.Children.map(children, (child: any) => React.isValidElement(child) ? (React.cloneElement(child as any, { __ak: value } as any)) : child)}
    </div>
  );
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { __ak?: Key; }
export function AccordionTrigger({ __ak, className, children, ...rest }: AccordionTriggerProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("AccordionTrigger must be used within <Accordion>");
  const open = ctx.isOpen(__ak!);
  const id = `acc-${__ak}`;
  const panelId = `${id}-panel`;
  return (
    <button
      type="button"
      role="button"
      aria-expanded={open}
      aria-controls={panelId}
      className={cn(
        "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium",
        open ? "bg-muted/40" : "hover:bg-muted/30",
        className
      )}
      onClick={(e) => { rest.onClick?.(e); ctx.toggle(__ak!); }}
      {...rest}
    >
      <span className="min-w-0 flex-1 truncate">{children}</span>
      <svg className={cn("h-4 w-4 shrink-0 transition-transform", open ? "rotate-180" : "rotate-0")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> { __ak?: Key; }
export function AccordionContent({ __ak, className, children, ...rest }: AccordionContentProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("AccordionContent must be used within <Accordion>");
  const open = ctx.isOpen(__ak!);
  const id = `acc-${__ak}-panel`;
  return (
    <div id={id} hidden={!open} className={cn("px-4 py-3 text-sm text-foreground/90", className)} {...rest}>
      {children}
    </div>
  );
}
