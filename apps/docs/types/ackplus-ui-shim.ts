import * as UI from "@ackplus/__real__";
import type * as React from "react";

// Re-export everything for good typings
export * from "@ackplus/__real__";

// Locally relax Button's type to accommodate React 18 type checker in docs.
export const Button = UI.Button as unknown as React.ComponentType<any>;
export const Typography = UI.Typography as unknown as React.ComponentType<any>;
export const Alert = UI.Alert as unknown as React.ComponentType<any>;
export const Badge = UI.Badge as unknown as React.ComponentType<any>;
