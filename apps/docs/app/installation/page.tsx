import { Typography, Card, Badge } from "@ackplus/ui";
import { CodeViewer } from "../../components/CodeViewer";

export default function InstallationPage() {
  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Badge variant="soft" color="info">
          Installation Guide
        </Badge>
        <Typography variant="h1" gutterBottom>
          Installation
        </Typography>
        <Typography variant="subtitle1" color="muted">
          Get AckPlus UI up and running in your project with these simple steps.
        </Typography>
      </div>

      <Card padding="lg" className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Prerequisites
        </Typography>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
            <Typography variant="body1">React 18+ and a bundler (Vite, Next.js, etc.)</Typography>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
            <Typography variant="body1">Tailwind CSS v4 for full utility parity (optional for basic usage)</Typography>
          </li>
        </ul>
      </Card>

      <Card padding="lg" className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Install Package
        </Typography>
        <Typography variant="body1" color="muted" className="mb-4">
          Add AckPlus UI to your project using your preferred package manager.
        </Typography>
        <CodeViewer code={`# Using pnpm (recommended)
pnpm add @ackplus/ui

# Using npm
npm install @ackplus/ui

# Using yarn
yarn add @ackplus/ui`} language="shell" />
      </Card>

      <Card padding="lg" className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Add Styles
        </Typography>
        <Typography variant="body1" color="muted" className="mb-4">
          Import tokens and base styles once in your global stylesheet. These work with
          Tailwind v4 and are compatible with v3 as plain CSS.
        </Typography>
        <CodeViewer language="css" code={`/* app/globals.css or src/index.css */
@import "tailwindcss";
@import "@ackplus/ui/tokens.css";
@import "@ackplus/ui/styles.css";`} />
      </Card>

      <Card padding="lg" className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Configure Theme (Optional)
        </Typography>
        <Typography variant="body1" color="muted" className="mb-4">
          Theme is controlled via <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">document.documentElement.dataset.theme</code>.
          Use the provided <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">ThemeProvider</code> or set the attribute yourself.
        </Typography>
        <CodeViewer language="typescript" code={`import { ThemeProvider } from "@ackplus/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}`} />
      </Card>

      <Card padding="lg" className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Using Components
        </Typography>
        <Typography variant="body1" color="muted" className="mb-4">
          Import and use components in your React application.
        </Typography>
        <CodeViewer language="typescript" code={`import { Button } from "@ackplus/ui";

export function Toolbar() {
  return (
    <div className="flex gap-3">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost" size="sm">Help</Button>
    </div>
  );
}`} />
      </Card>

      <Card padding="lg" className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Tailwind v4 Notes
        </Typography>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
            <Typography variant="body2" color="muted">
              Components rely on CSS variables from <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">tokens.css</code>.
              Ensure it is imported before your app styles.
            </Typography>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
            <Typography variant="body2" color="muted">
              You can layer your own utilities and design tokens on top — the library
              plays nicely with existing Tailwind setup.
            </Typography>
          </li>
        </ul>
      </Card>
    </article>
  );
}
