import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const alertStyles = tv({
  slots: {
    root: "rounded-lg border p-4 flex gap-3",
    icon: "size-5 shrink-0 mt-0.5",
    content: "min-w-0",
    title: "font-semibold",
    description: "text-sm ack-muted mt-1",
  },
  variants: {
    tone: {
      solid: {
        root: "bg-brand text-[color:var(--ack-btn-fg)] border-brand",
        title: "text-[color:var(--ack-btn-fg)]",
        description: "text-[color:oklch(0.96_0_0)]",
        icon: "text-[color:var(--ack-btn-fg)]",
      },
      soft: {
        root: "bg-surface-2/70 text-text border-brand/40",
        icon: "text-brand",
        title: "text-text",
      },
      outline: {
        root: "bg-transparent text-text border-brand",
        icon: "text-brand",
        title: "text-text",
      },
    },
  },
  defaultVariants: { tone: "soft" },
});

export type AlertTone = "solid" | "soft" | "outline";
export type AlertColor =
  | "brand"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

type AlertVariants = VariantProps<typeof alertStyles>;

/**
 * Alert props
 * - tone: visual style (solid, soft, outline)
 * - color: semantic color to derive accent and border
 * - title: optional title row
 * - children: description/content area
 * - icon: optional leading icon
 */
export interface AlertProps extends AlertVariants {
  /** Additional class names for the root element */
  className?: string;
  /** Optional title text or node */
  title?: React.ReactNode;
  /** Description/content below the title */
  children?: React.ReactNode;
  /** Optional leading icon element */
  icon?: React.ReactNode;
  /** Semantic color key (primary, secondary, success, warning, error, info) */
  color?: AlertColor;
}

export function Alert({ tone, className, title, children, icon, color }: AlertProps) {
  const styles = alertStyles({ tone });
  const brandOverride =
    color && color !== "brand"
      ? ({ ["--ack-brand" as any]: `var(--ack-${color})` } as React.CSSProperties)
      : undefined;
  return (
    <div className={cn(styles.root(), className)} style={brandOverride}>
      {icon ? <span aria-hidden className={styles.icon()}>{icon}</span> : null}
      <div className={styles.content()}>
        {title ? <div className={styles.title()}>{title}</div> : null}
        {children ? <div className={styles.description()}>{children}</div> : null}
      </div>
    </div>
  );
}
