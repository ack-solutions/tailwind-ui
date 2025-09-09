# ackplus-ui

Monorepo for AckPlus UI components, built with pnpm, Turborepo, and shared tooling.


## Documentation & Links

An interactive docs site and Storybook are published to GitHub Pages from [`apps/docs`](apps/docs).

- **Docs:** https://ack-solutions.github.io/tailwind-ui/
- **Storybook:** https://ack-solutions.github.io/tailwind-ui/storybook/
- **Develop docs:** `pnpm --filter docs... run dev`
- **Build docs:** `pnpm --filter docs... run build`

Deployment is handled by [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on pushes to `main`.


## Prerequisites

- Node.js ≥18
- pnpm
- git

## Installation

Install dependencies:

```bash
pnpm install
```

Add AckPlus UI to your app:

```bash
pnpm add @ackplus/ui
```

Import Tailwind v4 and the UI styles in your global CSS (for example, `app/globals.css`):

```css
@import "tailwindcss";
@import "@ackplus/ui/tokens.css";
@import "@ackplus/ui/styles.css";
```

Use components:

```tsx
import { Button, Alert, Badge } from "@ackplus/ui";

export default function Example() {
  return (
    <div className="space-y-3">
      <Button color="primary">Get Started</Button>
      <Alert color="success" title="All set!">You're ready to go.</Alert>
      <Badge variant="soft">New</Badge>
    </div>
  );
}
```

## Scripts

- `pnpm dev`: run dev servers (filter with `--filter`).
- `pnpm build`: build all packages.
- `pnpm lint`: run ESLint across the repo.
- `pnpm test`: run tests (if present).

Note: the docs app uses a `basePath` of `/tailwind-ui` for GitHub Pages. Links and assets are prefixed automatically both in dev and production.

## Project structure

- `packages/ui` – shared UI component library.
- `apps/*` – optional applications that consume the packages.

## Contributing

This repository uses `lint-staged`, `eslint`, and `prettier` to keep a consistent code style. Run `pnpm lint` and make sure your commits pass the pre-commit checks before submitting a pull request.
See [CONTRIBUTING.md](CONTRIBUTING.md) for setup instructions and guidelines.


## License

MIT License. For questions or feedback, open an issue or contact support@ack.plus.
