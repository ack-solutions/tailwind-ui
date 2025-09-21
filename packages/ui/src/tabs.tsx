"use client";
import React from "react";
import { cn } from "./lib/cn";

type TabsValue = string;

interface TabsContextValue {
  value: TabsValue;
  setValue: (val: TabsValue) => void;
  idBase: string;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);


export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: TabsValue;
  defaultValue?: TabsValue;
  onValueChange?: (val: TabsValue) => void;
}

export function Tabs({  value, defaultValue, onValueChange, className, children, ...rest }: TabsProps) {
  const [internal, setInternal] = React.useState<TabsValue>(defaultValue ?? "");
  const isControlled = value !== undefined;
  const current = isControlled ? (value as TabsValue) : internal;
  const idBase = React.useId();

  const setValue = (val: TabsValue) => {
    if (!isControlled) setInternal(val);
    onValueChange?.(val);
  };

  const ctx: TabsContextValue = { value: current, setValue, idBase };

  return (
    <div className={cn("w-full", className)} {...rest}>
      <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>
    </div>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "contained";
}
export function TabsList({ variant = "default", className, children, ...rest }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex",
        variant === "contained"
          ? "gap-2 p-1 bg-muted/30 rounded-lg border border-border/20 shadow-sm"
          : "gap-8 border-b border-border/20",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: TabsValue;
}

export function TabsTrigger({ value, className, children, ...rest }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used within <Tabs>");
  const active = ctx.value === value;
  const id = `${ctx.idBase}-tab-${value}`;
  const panelId = `${ctx.idBase}-panel-${value}`;
  // Check if parent TabsList has contained variant
  const tabsListElement = document.querySelector(`[role="tablist"]`);
  const isContained = tabsListElement?.classList.contains("bg-muted/30");

  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-controls={panelId}
      aria-selected={active}
      className={cn(
        "inline-flex items-center justify-center text-sm font-medium",
        "transition-all duration-200 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
        isContained
          ? [
              "px-4 py-2.5 rounded-md border",
              active
                ? "bg-background text-foreground shadow-sm border-border/40"
                : "text-muted-foreground hover:bg-background/80 hover:text-foreground border-transparent"
            ]
          : [
              "relative px-1 py-3",
              "text-muted-foreground hover:text-foreground",
              active && "text-foreground",
              active && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
            ],
        className
      )}
      onClick={(e) => {
        rest.onClick?.(e);
        ctx.setValue(value);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: TabsValue;
}

export function TabsContent({ value, className, children, ...rest }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used within <Tabs>");
  const active = ctx.value === value;
  const id = `${ctx.idBase}-panel-${value}`;
  const tabId = `${ctx.idBase}-tab-${value}`;

  // Check if parent TabsList has contained variant
  const tabsListElement = document.querySelector(`[role="tablist"]`);
  const isContained = tabsListElement?.classList.contains("bg-muted/30");

  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
      hidden={!active}
      className={cn(
        "transition-all duration-200 ease-in-out",
        isContained
          ? "mt-4 p-6 rounded-lg bg-background border border-border/20 shadow-sm"
          : "mt-6",
        active ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

