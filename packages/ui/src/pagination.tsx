"use client";
import React from "react";
import { cn } from "./lib/cn";

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  page: number;
  count: number; // total pages
  onChange?: (page: number) => void;
  siblingCount?: number;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function Pagination({ page, count, onChange, siblingCount = 1, className, ...rest }: PaginationProps) {
  const start = Math.max(1, page - siblingCount);
  const end = Math.min(count, page + siblingCount);
  const pages = range(start, end);
  const showStartEllipsis = start > 2;
  const showEndEllipsis = end < count - 1;

  const go = (p: number) => {
    if (p < 1 || p > count) return;
    onChange?.(p);
  };

  return (
    <div className={cn("inline-flex items-center gap-1", className)} {...rest}>
      <button
        className={cn(
          "inline-flex py-2.5 px-3 items-center justify-center rounded-md border min-w-10 text-sm",
          "transition-all duration-200",
          page <= 1
            ? "bg-muted/50 text-muted-foreground/50 cursor-not-allowed"
            : "bg-background border-border/60 text-foreground hover:bg-muted hover:border-border"
        )}
        aria-label="Previous"
        onClick={() => go(page - 1)}
        disabled={page <= 1}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <PageButton n={1} active={page === 1} onClick={() => go(1)} />
      {showStartEllipsis ? <Ellipsis /> : null}
      {pages.map((n) => (n === 1 || n === count ? null : <PageButton key={n} n={n} active={n === page} onClick={() => go(n)} />))}
      {showEndEllipsis ? <Ellipsis /> : null}
      {count > 1 ? <PageButton n={count} active={page === count} onClick={() => go(count)} /> : null}
      <button
        className={cn(
          "inline-flex py-2.5 px-3 items-center justify-center rounded-md border min-w-10 text-sm",
          "transition-all duration-200",
          page >= count
            ? "bg-muted/50 text-muted-foreground/50 cursor-not-allowed"
            : "bg-background border-border/60 text-foreground hover:bg-muted hover:border-border"
        )}
        aria-label="Next"
        onClick={() => go(page + 1)}
        disabled={page >= count}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

function PageButton({ n, active, onClick }: { n: number; active: boolean; onClick: () => void }) {
  return (
    <button
      className={cn(
        "inline-flex py-2.5 px-3 items-center justify-center rounded-md border min-w-10 text-sm font-medium",
        "transition-all duration-200",
        active
          ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/25"
          : "bg-background border-border/60 text-foreground hover:bg-muted hover:border-border hover:shadow-sm"
      )}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      {n}
    </button>
  );
}

function Ellipsis() {
  return <span className="px-2 text-muted-foreground font-medium">…</span>;
}
