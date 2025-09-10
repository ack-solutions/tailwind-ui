import React from "react";
import { cn } from "./lib/cn";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

export function Breadcrumbs({ className, children, separator = "/", ...rest }: BreadcrumbsProps) {
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className={className} {...rest}>
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {items.map((child, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              {!isLast ? child : (
                <span className="text-foreground font-medium" aria-current="page">{child}</span>
              )}
              {!isLast ? <span className="opacity-60" aria-hidden>{separator}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export interface BreadcrumbItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: React.ElementType;
}

export function BreadcrumbItem({ as, className, children, ...rest }: BreadcrumbItemProps) {
  const Comp = (as || "a") as any;
  return (
    <Comp className={cn("hover:text-foreground transition-colors", className)} {...rest}>
      {children}
    </Comp>
  );
}

