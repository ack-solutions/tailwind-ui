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
      <button className={btn(false)} aria-label="Previous" onClick={() => go(page - 1)} disabled={page <= 1}>
        ‹
      </button>
      <PageButton n={1} active={page === 1} onClick={() => go(1)} />
      {showStartEllipsis ? <Ellipsis /> : null}
      {pages.map((n) => (n === 1 || n === count ? null : <PageButton key={n} n={n} active={n === page} onClick={() => go(n)} />))}
      {showEndEllipsis ? <Ellipsis /> : null}
      {count > 1 ? <PageButton n={count} active={page === count} onClick={() => go(count)} /> : null}
      <button className={btn(false)} aria-label="Next" onClick={() => go(page + 1)} disabled={page >= count}>
        ›
      </button>
    </div>
  );
}

function btn(active: boolean) {
  return cn(
    "inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm",
    active ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:bg-muted"
  );
}

function PageButton({ n, active, onClick }: { n: number; active: boolean; onClick: () => void }) {
  return (
    <button className={btn(active)} aria-current={active || undefined} onClick={onClick}>
      {n}
    </button>
  );
}

function Ellipsis() {
  return <span className="px-1 text-muted-foreground">…</span>;
}
