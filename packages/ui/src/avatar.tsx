import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const avatarStyles = tv({
  slots: {
    root: "inline-flex items-center justify-center rounded-full bg-muted text-muted-foreground overflow-hidden select-none",
    image: "size-full object-cover",
    fallback: "text-xs font-medium",
  },
  variants: {
    size: {
      sm: { root: "size-8", fallback: "text-xs" },
      md: { root: "size-10", fallback: "text-sm" },
      lg: { root: "size-12", fallback: "text-base" },
    },
  },
  defaultVariants: { size: "md" },
});

type AvatarVariants = VariantProps<typeof avatarStyles>;

export interface AvatarProps extends AvatarVariants {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode; // fallback content
}

export function Avatar({ src, alt, className, size, children, ...rest }: AvatarProps) {
  const styles = avatarStyles({ size });
  return (
    <span className={cn(styles.root(), className)} {...rest}>
      {src ? <img src={src} alt={alt} className={styles.image()} /> : <span className={styles.fallback()}>{children}</span>}
    </span>
  );
}

