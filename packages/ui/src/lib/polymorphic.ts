import React from "react";

// Polymorphic component type helpers
export type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

export type PolymorphicComponentProps<E extends React.ElementType, P> =
  React.PropsWithChildren<P & AsProp<E>> &
    Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>["ref"];
