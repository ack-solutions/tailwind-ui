"use client";
import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "./lib/cn";

type TabsValue = string;

interface TabsContextValue {
  value: TabsValue;
  setValue: (val: TabsValue) => void;
  idBase: string;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const styles = {
  root: "w-full",
  list: tv({
    base: "flex gap-1 border-b border-border",
  }),
  trigger: tv({
    base: cn(
      "inline-flex items-center justify-center px-3 py-2 text-sm rounded-t-md",
      "border border-transparent border-b-0",
      "hover:bg-muted/50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground",
      "data-[state=active]:border-border data-[state=active]:border-b-transparent"
    ),
  }),
  content: tv({ base: "pt-4" }),
};

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: TabsValue;
  defaultValue?: TabsValue;
  onValueChange?: (val: TabsValue) => void;
}

export function Tabs({ value, defaultValue, onValueChange, className, children, ...rest }: TabsProps) {
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
    <div className={cn(styles.root, className)} {...rest}>
      <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>
    </div>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
export function TabsList({ className, children, ...rest }: TabsListProps) {
  return (
    <div role="tablist" className={styles.list({})} {...rest}>
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
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-controls={panelId}
      aria-selected={active}
      data-state={active ? "active" : "inactive"}
      className={cn(styles.trigger({}), className)}
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
  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
      hidden={!active}
      className={cn(styles.content({}), className)}
      {...rest}
    >
      {children}
    </div>
  );
}

