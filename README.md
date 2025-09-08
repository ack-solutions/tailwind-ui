# ackplus-ui

Monorepo for AckPlus UI components, built with pnpm, Turborepo, and shared tooling.

## Development

1. Install [Node.js](https://nodejs.org/) and enable pnpm via [Corepack](https://nodejs.org/api/corepack.html):
   ```bash
   corepack enable pnpm
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```

## Building

```bash
pnpm -w build
```

## Testing

```bash
pnpm test
```

## Releasing

1. Create a changeset:
   ```bash
   pnpm changeset
   ```
2. Apply version bumps:
   ```bash
   pnpm changeset:version
   ```
3. Publish packages:
   ```bash
   pnpm release
   ```

## Deployment

Run the build, then publish packages to npm with the release workflow above and deploy any apps that consume them.
