import React from "react";
import { cn } from "./lib/cn";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

export function Breadcrumbs({ className, children, separator: _separator = "/", ...rest }: BreadcrumbsProps) {
  const items = React.Children.toArray(children).filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className={className} {...rest}>
      <ol className="flex items-center gap-1 text-sm">
        {items.map((child, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              {!isLast ? (
                <>
                  <span className="text-muted-foreground hover:text-foreground transition-colors">
                    {child}
                  </span>
                  <svg
                    className="h-4 w-4 text-muted-foreground/60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </>
              ) : (
                <span className="text-foreground font-semibold" aria-current="page">{child}</span>
              )}
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
    <Comp
      className={cn(
        "hover:text-foreground transition-colors duration-200",
        "font-medium underline-offset-4 hover:underline",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}

