import type { Preview } from "@storybook/react";

// Global preview imports: bring in Tailwind tokens and base styles
import "@ackplus/ui/tokens.css";
import "@ackplus/ui/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "oklch(0.98 0 0)" },
        { name: "dark", value: "oklch(0.17 0 0)" },
      ],
    },
  },
};

export default preview;

