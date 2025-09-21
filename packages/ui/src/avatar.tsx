import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const avatarStyles = tv({
  slots: {
    root: [
      "inline-flex items-center justify-center rounded-full",
      "bg-gradient-to-br from-muted/60 to-muted/40",
      "text-muted-foreground/80 overflow-hidden select-none",
      "border-2 border-border/20 shadow-sm",
      "transition-all duration-200 ease-in-out",
      "hover:shadow-md hover:border-border/40",
      "ring-2 ring-transparent hover:ring-primary/10"
    ],
    image: "size-full object-cover transition-transform duration-200 hover:scale-110",
    fallback: "font-semibold select-none",
  },
  variants: {
    size: {
      sm: { root: "size-9", fallback: "text-xs" },
      md: { root: "size-11", fallback: "text-sm" },
      lg: { root: "size-14", fallback: "text-base" },
      xl: { root: "size-16", fallback: "text-lg" },
    },
    variant: {
      default: "bg-gradient-to-br from-muted/60 to-muted/40",
      primary: "bg-gradient-to-br from-primary/20 to-primary/10 border-primary/20",
      secondary: "bg-gradient-to-br from-secondary/20 to-secondary/10 border-secondary/20",
      success: "bg-gradient-to-br from-success/20 to-success/10 border-success/20",
      warning: "bg-gradient-to-br from-warning/20 to-warning/10 border-warning/20",
      error: "bg-gradient-to-br from-error/20 to-error/10 border-error/20",
    },
  },
  defaultVariants: { size: "md", variant: "default" },
});

type AvatarVariants = VariantProps<typeof avatarStyles>;

export interface AvatarProps extends AvatarVariants {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode; // fallback content
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
}

export function Avatar({ src, alt, className, size, variant, children, ...rest }: AvatarProps) {
  const styles = avatarStyles({ size, variant });
  return (
    <span className={cn(styles.root(), className)} {...rest}>
      {src ? <img src={src} alt={alt} className={styles.image()} /> : <span className={styles.fallback()}>{children}</span>}
    </span>
  );
}

