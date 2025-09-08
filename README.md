# ackplus-ui

Monorepo for AckPlus UI components, built with pnpm, Turborepo, and shared tooling.

## Prerequisites

- Node.js ≥18
- pnpm
- git

## Installation

Install dependencies:

```bash
pnpm install
```

## Scripts

Common scripts are available through pnpm:

- `pnpm dev` – start the development server.
- `pnpm build` – build all packages.
- `pnpm lint` – run ESLint across the project.
- `pnpm test` – run the test suite.

## Project structure

- `packages/ui` – shared UI component library.
- `apps/*` – optional applications that consume the packages.

## Contributing

This repository uses `lint-staged`, `eslint`, and `prettier` to keep a consistent code style. Run `pnpm lint` and make sure your commits pass the pre-commit checks before submitting a pull request.

## License

MIT License. For questions or feedback, open an issue or contact support@ack.plus.
