import React from "react";
import { cn } from "./lib/cn";

export interface AppBarProps extends React.HTMLAttributes<HTMLElement> {}
export function AppBar({ className, children, ...rest }: AppBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      {...rest}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-3 px-4 sm:px-6">{children}</div>
    </header>
  );
}

export interface AppBarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}
export function AppBarBrand({ className, ...rest }: AppBarBrandProps) {
  return <div className={cn("flex items-center gap-2 font-semibold", className)} {...rest} />;
}

export interface AppBarSpacerProps extends React.HTMLAttributes<HTMLDivElement> {}
export function AppBarSpacer(props: AppBarSpacerProps) {
  return <div className="flex-1" {...props} />;
}

export interface AppBarActionsProps extends React.HTMLAttributes<HTMLDivElement> {}
export function AppBarActions({ className, ...rest }: AppBarActionsProps) {
  return <div className={cn("flex items-center gap-2", className)} {...rest} />;
}

