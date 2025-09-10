import React from "react";
import { cn } from "./lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...rest }: SkeletonProps) {
  return <div className={cn("animate-pulse bg-muted rounded-md", className)} {...rest} />;
}

