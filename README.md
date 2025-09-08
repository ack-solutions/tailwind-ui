# ackplus-ui

Monorepo for AckPlus UI components, built with pnpm, Turborepo, and shared tooling.

## Documentation

An interactive demo is provided via a Next.js app in [`apps/docs`](apps/docs). The site is automatically exported as a static bundle and deployed to GitHub Pages.

- **Demo:** https://ackplus.github.io/tailwind-ui/
- **Develop:** `pnpm --filter docs... run dev`
- **Build:** `pnpm --filter docs... run build`

The GitHub Actions workflow at [`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml) builds and publishes the demo on every push to `main`.
