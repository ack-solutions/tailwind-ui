"use client";
import React from "react";
import { cn } from "./lib/cn";

type Value = string;

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: Value | Value[];
  defaultValue?: Value | Value[];
  onValueChange?: (value: Value | Value[]) => void;
  multiple?: boolean;
}

const Ctx = React.createContext<{
  selected: Set<Value>;
  toggle: (v: Value) => void;
  multiple: boolean;
} | null>(null);

export function SegmentedControl({ value, defaultValue, onValueChange, multiple = false, className, children, ...rest }: SegmentedControlProps) {
  const [internal, setInternal] = React.useState<Set<Value>>(() => new Set(Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []));
  const controlled = value !== undefined;
  const selected = controlled ? new Set(Array.isArray(value) ? value : value ? [value] : []) : internal;
  const emit = (next: Set<Value>) => {
    if (!controlled) setInternal(new Set(next));
    onValueChange?.(multiple ? Array.from(next) : Array.from(next)[0]);
  };
  const toggle = (v: Value) => {
    const next = new Set(selected);
    if (multiple) {
      next.has(v) ? next.delete(v) : next.add(v);
    } else {
      next.clear();
      next.add(v);
    }
    emit(next);
  };
  return (
    <div className={cn("inline-flex items-center gap-0.5 rounded-md border border-border p-0.5 bg-background", className)} {...rest}>
      <Ctx.Provider value={{ selected, toggle, multiple }}>{children}</Ctx.Provider>
    </div>
  );
}

export interface SegmentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { value: Value }
export function Segment({ value, className, children, ...rest }: SegmentProps) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("Segment must be used within <SegmentedControl>");
  const active = ctx.selected.has(value);
  return (
    <button
      type="button"
      className={cn(
        "px-3 py-1.5 text-sm rounded-[6px] border border-transparent",
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
        className
      )}
      aria-pressed={active}
      onClick={(e) => { rest.onClick?.(e); ctx.toggle(value); }}
      {...rest}
    >
      {children}
    </button>
  );
}

