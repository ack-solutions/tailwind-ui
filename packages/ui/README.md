# @ackplus/ui

UI components for Ackplus.

## API Notes

- Prefer the `variant` prop for visual style on components.
  - Button: `variant` = "solid" | "outline" | "ghost" | "link"
  - Alert: `variant` = "solid" | "soft" | "outline"
- The older props are deprecated but still supported:
  - Button: `intent` (deprecated) → use `variant`
  - Alert: `tone` (deprecated) → use `variant`
- For semantic colors, use the `color` prop with values from `SemanticColor`.
  - You can import the type: `import type { SemanticColor } from '@ackplus/ui'`.

## Theming

Tailwind v4 tokens are provided via `@ackplus/ui/tokens.css` and a runtime theme using CSS variables. Use `text-muted`, `text-text`, `bg-surface`, etc. The legacy `.ack-muted` class has been removed in favor of `text-muted`.

## Documentation

Component documentation is available in the [docs/components](../../docs/components) directory.
