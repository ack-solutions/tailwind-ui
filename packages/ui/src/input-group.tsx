import React from "react";
import { cn } from "./lib/cn";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
export function InputGroup({ className, children, ...rest }: InputGroupProps) {
  return (
    <div className={cn(
      "flex items-stretch rounded-lg border border-border/40 bg-background",
      "shadow-sm hover:border-border/60 transition-colors duration-200",
      "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
      className
    )} {...rest}>
      {children}
    </div>
  );
}

export interface InputAddonProps extends React.HTMLAttributes<HTMLSpanElement> {}
export function InputAddon({ className, ...rest }: InputAddonProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-4 text-sm font-medium text-muted-foreground",
      "bg-muted/50 border-r border-border/30",
      className
    )} {...rest} />
  );
}

export interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export function InputElement({ className, ...rest }: InputElementProps) {
  return (
    <input className={cn(
      "min-w-0 flex-1 bg-transparent px-4 py-2 outline-none",
      "text-foreground placeholder:text-muted-foreground/70",
      "text-sm font-medium",
      className
    )} {...rest} />
  );
}

