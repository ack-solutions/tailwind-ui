import type React from "react";

// Shared semantic color keys used across components
export type SemanticColor =
  | "brand"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

// Returns an inline style that remaps --ack-brand to a chosen semantic color
export function brandStyle(color?: SemanticColor): React.CSSProperties | undefined {
  if (!color || color === "brand") return undefined;
  return { ["--ack-brand" as any]: `var(--ack-${color})` } as React.CSSProperties;
}

