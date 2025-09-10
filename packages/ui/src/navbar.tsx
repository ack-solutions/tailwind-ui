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
    <nav className={cn("w-full h-14 border-b border-border bg-background/80 backdrop-blur", className)} {...rest}>
      <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Ctx.Provider value={{ open, setOpen }}>{children}</Ctx.Provider>
      </div>
    </nav>
  );
}

export function NavbarBrand({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("font-semibold", className)} {...rest} />;
}

export function NavbarSpacer(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="flex-1" {...props} />;
}

export function NavbarLinks({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("hidden md:flex items-center gap-4", className)} {...rest} />;
}

export function NavbarLink({ className, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn("text-sm text-muted-foreground hover:text-foreground", className)} {...rest} />;
}

export function NavbarActions({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("hidden md:flex items-center gap-2", className)} {...rest} />;
}

export function NavbarMobileToggle({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("NavbarMobileToggle must be used within <Navbar>");
  return (
    <button
      type="button"
      className={cn("md:hidden inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5", className)}
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

