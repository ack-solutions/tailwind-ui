"use client";
import React from "react";
import { cn } from "./lib/cn";
import { Drawer, DrawerContent } from "./drawer";

interface NavbarCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
}
const Ctx = React.createContext<NavbarCtx | null>(null);

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}
export function Navbar({ className, children, ...rest }: NavbarProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className={cn(
      "w-full h-16 border-b border-border/20 bg-background/95 backdrop-blur-md",
      "shadow-sm sticky top-0 z-40",
      className
    )} {...rest}>
      <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Ctx.Provider value={{ open, setOpen }}>{children}</Ctx.Provider>
      </div>
    </nav>
  );
}

export function NavbarBrand({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3 font-bold text-lg", className)} {...rest} />;
}

export function NavbarSpacer(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="flex-1" {...props} />;
}

export function NavbarLinks({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("hidden md:flex items-center gap-6", className)} {...rest} />;
}

export function NavbarLink({ className, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200",
        "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
        "after:bg-primary after:transition-all after:duration-200",
        "hover:after:w-full",
        className
      )}
      {...rest}
    />
  );
}

export function NavbarActions({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("hidden md:flex items-center gap-3", className)} {...rest} />;
}

export function NavbarMobileToggle({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("NavbarMobileToggle must be used within <Navbar>");
  return (
    <button
      type="button"
      className={cn(
        "md:hidden inline-flex items-center gap-2 rounded-md border border-border/40",
        "px-3 py-2 text-sm font-medium transition-all duration-200",
        "hover:bg-muted/80 hover:border-border/60 hover:shadow-sm",
        "focus-visible:ring-2 focus-visible:ring-primary/20",
        className
      )}
      onClick={(e) => { rest.onClick?.(e); ctx.setOpen(true); }}
      {...rest}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <span className="sr-only">Open menu</span>
    </button>
  );
}

export function NavbarMobileDrawer({ className, children }: { className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("NavbarMobileDrawer must be used within <Navbar>");
  return (
    <Drawer open={ctx.open} onOpenChange={ctx.setOpen}>
      <DrawerContent className={cn("md:hidden", className)}>
        <div className="p-4 space-y-2">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

