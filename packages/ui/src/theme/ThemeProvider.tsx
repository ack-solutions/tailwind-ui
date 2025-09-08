import React from "react";

export interface ThemeProviderProps {
  theme: "light" | "dark" | string;
  children: React.ReactNode;
}

/**
 * ThemeProvider sets `document.documentElement.dataset.theme` for Tailwind v4 custom variant.
 * It updates when the `theme` prop changes and cleans up on unmount.
 */
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  React.useEffect(() => {
    const el = document.documentElement;
    const prev = el.dataset.theme;
    el.dataset.theme = theme;
    return () => {
      // Restore prior theme on unmount
      if (prev) el.dataset.theme = prev;
      else delete el.dataset.theme;
    };
  }, [theme]);

  return <>{children}</>;
}
