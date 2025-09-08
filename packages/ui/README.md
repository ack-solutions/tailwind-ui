# @ackplus/ui

React UI components for AckPlus.

## Installation

```bash
pnpm add @ackplus/ui react react-dom
```

## Usage

```tsx
import { Button, ThemeProvider } from "@ackplus/ui";
import "@ackplus/ui/styles.css";

export function App() {
  return (
    <ThemeProvider>
      <Button>Hello</Button>
    </ThemeProvider>
  );
}
```
