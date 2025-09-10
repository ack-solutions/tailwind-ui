import type { Preview } from "@storybook/react";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    // Use CSS variables from tokens for backgrounds; disable addon background
    backgrounds: { disable: true },
  },
};

export default preview;

// Global theme toolbar (light/dark) and decorator to apply data-theme
export const globalTypes = {
  theme: {
    description: "Global theme",
    defaultValue: "light",
    toolbar: {
      title: "Theme",
      icon: "contrast",
      items: [
        { value: "light", title: "Light", icon: "sun" },
        { value: "dark", title: "Dark", icon: "moon" },
      ],
      dynamicTitle: true,
    },
  },
} as const;

export const decorators = [
  (Story, context) => {
    const theme = (context.globals as any).theme || "light";
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }
    return Story();
  },
];
