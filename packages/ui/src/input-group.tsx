import React from "react";
import { cn } from "./lib/cn";

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
export function InputGroup({ className, children, ...rest }: InputGroupProps) {
  return (
    <div className={cn("flex items-stretch rounded-md border border-border overflow-hidden", className)} {...rest}>
      {children}
    </div>
  );
}

export interface InputAddonProps extends React.HTMLAttributes<HTMLSpanElement> {}
export function InputAddon({ className, ...rest }: InputAddonProps) {
  return (
    <span className={cn("inline-flex items-center px-3 text-sm bg-muted/40 border-r border-border", className)} {...rest} />
  );
}

export interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export function InputElement({ className, ...rest }: InputElementProps) {
  return (
    <input className={cn("min-w-0 flex-1 bg-background px-3 outline-none text-foreground placeholder:text-muted-foreground", className)} {...rest} />
  );
}

