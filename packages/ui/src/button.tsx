import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "./lib/cn";

const buttonStyles = tv({
  slots: {
    root:
      "inline-flex items-center gap-2 justify-center select-none border font-semibold leading-none shadow-sm transition-[filter,box-shadow,transform] duration-150 disabled:opacity-50 disabled:pointer-events-none",
    label: "truncate",
    icon: "size-4 shrink-0",
  },
  variants: {
    intent: {
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
      md: { root: "h-10 text-[0.95rem] px-3.5", icon: "size-4.5" },
      lg: { root: "h-11 text-base px-4", icon: "size-5" },
    },
    fullWidth: {
      true: { root: "w-full" },
    },
  },
  defaultVariants: {
    intent: "solid",
    size: "md",
  },
});

export type ButtonIntent = "solid" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

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

// Polymorphic helpers
type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

export type PolymorphicComponentProps<E extends React.ElementType, P> =
  React.PropsWithChildren<P & AsProp<E>> &
    Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>["ref"];

export interface ButtonOwnProps extends ButtonVariants {
  className?: string;
  icon?: React.ReactNode;
  slots?: ButtonSlots;
  slotProps?: ButtonSlotProps;
}

export type ButtonProps<E extends React.ElementType = "button"> =
  PolymorphicComponentProps<E, ButtonOwnProps>;

const ButtonImpl = (
  {
    as,
    className,
    children,
    intent,
    size,
    fullWidth,
    icon,
    slots,
    slotProps,
    ...rest
  }: ButtonProps<any>,
  ref: PolymorphicRef<any>
) => {
  const Comp = (as || "button") as React.ElementType;
  const styles = buttonStyles({ intent, size, fullWidth });

  const rootClass = cn(styles.root, slots?.root, className, slotProps?.root?.className);
  const labelClass = cn(styles.label, slots?.label, slotProps?.label?.className);
  const iconClass = cn(styles.icon, slots?.icon, slotProps?.icon?.className);

  const rootProps = { ...slotProps?.root };
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
