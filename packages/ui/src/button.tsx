import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";
import { PolymorphicComponentProps, PolymorphicRef } from "./lib/polymorphic";
import { brandStyle, type SemanticColor } from "./lib/colors";

const buttonStyles = tv({
  slots: {
    root:
      "inline-flex items-center gap-2 justify-center select-none border font-semibold leading-none shadow-sm transition-[filter,box-shadow,transform] duration-150 disabled:opacity-50 disabled:pointer-events-none",
    label: "truncate",
    icon: "size-4 shrink-0",
  },
  variants: {
    variant: {
      solid: {
        root:
          "bg-brand text-[color:var(--ack-btn-fg)] border-border hover:brightness-105 active:translate-y-px active:shadow-md",
      },
      outline: {
        root:
          "bg-transparent text-brand border-brand hover:bg-surface-2/60 active:translate-y-px",
      },
      ghost: {
        root:
          "bg-transparent text-text border-transparent hover:bg-surface-2/60",
      },
      link: {
        root:
          "bg-transparent border-0 text-brand shadow-none p-0 h-auto underline underline-offset-4 hover:opacity-90",
      },
    },
    size: {
      sm: { root: "h-8 text-sm px-3", icon: "size-4" },
      md: { root: "h-10 text-[0.95rem] px-3.5", icon: "size-[18px]" },
      lg: { root: "h-11 text-base px-4", icon: "size-5" },
    },
    fullWidth: {
      true: { root: "w-full" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export type ButtonIntent = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = SemanticColor;

type ButtonVariants = VariantProps<typeof buttonStyles>;

export type ButtonSlots = {
  root?: string;
  label?: string;
  icon?: string;
};

export type ButtonSlotProps = {
  root?: React.HTMLAttributes<HTMLElement>;
  label?: React.HTMLAttributes<HTMLSpanElement>;
  icon?: React.HTMLAttributes<HTMLSpanElement>;
};

/**
 * Button props
 * - variant: visual style (solid, outline, ghost, link)
 * - size: control size (sm, md, lg)
 * - fullWidth: stretches button to 100% width
 * - color: semantic color to remap brand tokens
 *
 * @deprecated `intent` is deprecated. Use `variant` instead.
 */
export interface ButtonOwnProps extends ButtonVariants {
  className?: string;
  icon?: React.ReactNode;
  slots?: ButtonSlots;
  slotProps?: ButtonSlotProps;
  color?: ButtonColor; // semantic color; defaults to brand/primary
  /** @deprecated Use `variant` instead */
  intent?: ButtonIntent;
}

export type ButtonProps<E extends React.ElementType = "button"> =
  PolymorphicComponentProps<E, ButtonOwnProps>;

const ButtonImpl = (
  {
    as,
    className,
    children,
    intent,
    variant,
    size,
    fullWidth,
    icon,
    color,
    slots,
    slotProps,
    ...rest
  }: ButtonProps<any>,
  ref: PolymorphicRef<any>
) => {
  const Comp = (as || "button") as React.ElementType;
  const visual = (variant ?? intent) as ButtonIntent | undefined;
  const styles = buttonStyles({ variant: visual, size, fullWidth });

  const rootClass = cn(styles.root(), slots?.root, className, slotProps?.root?.className);
  const labelClass = cn(styles.label(), slots?.label, slotProps?.label?.className);
  const iconClass = cn(styles.icon(), slots?.icon, slotProps?.icon?.className);

  const brandOverride = brandStyle(color);

  const rootProps = {
    ...slotProps?.root,
    style: { ...(slotProps?.root as any)?.style, ...(brandOverride || {}) },
  } as React.HTMLAttributes<HTMLElement>;
  const labelProps = { ...slotProps?.label };
  const iconProps = { ...slotProps?.icon };

  return (
    <Comp ref={ref} className={rootClass} {...rootProps} {...(rest as any)}>
      {icon ? (
        <span aria-hidden className={iconClass} {...iconProps}>
          {icon}
        </span>
      ) : null}
      <span className={labelClass} {...labelProps}>
        {children}
      </span>
    </Comp>
  );
};

export const Button = React.forwardRef(ButtonImpl) as <
  E extends React.ElementType = "button"
>(props: ButtonProps<E> & { ref?: PolymorphicRef<E> }) => React.ReactElement | null;
