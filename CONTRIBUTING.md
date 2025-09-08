# Contributing to AckPlus UI

Thanks for your interest in contributing! This monorepo uses **pnpm** and **Turborepo** to manage packages and apps.

## Development environment setup

1. Install [Node.js](https://nodejs.org/) (use the current LTS).
2. Install [pnpm](https://pnpm.io/installation) version 10.5 or later.
3. Clone the repository and install dependencies:

   ```sh
   pnpm install
   ```
4. Start the development server:

   ```sh
   pnpm dev
   ```

## Commit and PR conventions

- Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. Commit messages are linted with **commitlint**.
- Record package changes with [Changesets](https://github.com/changesets/changesets):

  ```sh
  pnpm changeset
  ```
- Run quality checks before pushing:

  ```sh
  pnpm lint
  pnpm typecheck
  pnpm test
  ```
- Open pull requests with a clear description and link to any related issues.

## Coding standards

- All code is written in **TypeScript**.
- Lint with **ESLint** (`pnpm lint`) and format with **Prettier**.
- Components are styled using **Tailwind CSS** utility classes. Shared styles live in `packages/ui/styles.css`, and design tokens in `packages/ui/tokens.css`.

## Directory layout and naming conventions

- `packages/*` contains reusable packages such as the component library in `packages/ui`.
- `apps/*` contains applications like documentation sites or demos.
- Within a package, source code resides in `src/`. React components use `PascalCase` file names, and other files use `kebab-case`.

## Updating documentation and demo

- Update package documentation (e.g. `packages/ui/README.md`) whenever public APIs change.
- Ensure any app under `apps/` that serves as documentation or a demo is updated and builds successfully.
- Refresh examples or screenshots if applicable.

Thanks for contributing!
