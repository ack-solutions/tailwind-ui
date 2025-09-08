import { Typography, Button, Alert, Badge } from "@ackplus/ui";
import { CodeViewer } from "../../components/CodeViewer";

export default function GettingStartedPage() {
  return (
    <article className="space-y-8">
      <div>
        <Typography variant="h1" gutterBottom>
          Getting Started
        </Typography>
        <Typography variant="subtitle1" color="muted">
        AckPlus UI is a Tailwind v4-first React component library. It ships runtime
        CSS tokens and minimal base styles so you can compose modern, themeable UIs
        without heavy configuration.
        </Typography>
      </div>

      <Alert color="info" title="Prerequisites">
        Make sure you have React 18+ and a bundler like Vite, Next.js, or Create React App.
        Tailwind CSS v4 is recommended but not required for basic usage.
      </Alert>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Quick Start
        </Typography>
        
        <div className="grid gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <Typography variant="h4">Install the package</Typography>
            </div>
            <Typography variant="body1" color="muted">
              Add AckPlus UI to your project using your preferred package manager.
            </Typography>
            <CodeViewer code={`# Using pnpm (recommended)
pnpm add @ackplus/ui

# Using npm
npm install @ackplus/ui

# Using yarn
yarn add @ackplus/ui`} language="shell" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <Typography variant="h4">Import styles</Typography>
            </div>
            <Typography variant="body1" color="muted">
              Import the runtime tokens and base component styles in your global CSS file.
              These work with Tailwind v4 and are compatible with v3 as plain CSS.
            </Typography>
            <CodeViewer code={`/* app/globals.css or src/index.css */
@import "tailwindcss";
@import "@ackplus/ui/tokens.css";
@import "@ackplus/ui/styles.css";`} language="css" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <Typography variant="h4">Start using components</Typography>
            </div>
            <Typography variant="body1" color="muted">
              Import and use components in your React application. Optionally wrap with ThemeProvider for theme control.
            </Typography>
            <CodeViewer language="typescript" code={`import { Button, Alert, Badge, ThemeProvider } from "@ackplus/ui";

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div className="p-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Welcome to AckPlus UI</h1>
          
          <div className="flex gap-3">
            <Button color="primary">Get Started</Button>
            <Button color="secondary" variant="outline">Learn More</Button>
            <Button variant="ghost">Documentation</Button>
          </div>
          
          <Alert color="success" title="Ready to go!">
            Your AckPlus UI setup is complete. Start building amazing UIs.
          </Alert>
          
          <div className="flex gap-2">
            <Badge color="primary">New</Badge>
            <Badge color="success" variant="solid">Ready</Badge>
            <Badge color="info" variant="outline">v1.0</Badge>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}`} />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          What's Next?
        </Typography>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-border rounded-lg space-y-3">
            <Typography variant="h5" color="primary" gutterBottom>
              Explore Components
            </Typography>
            <Typography variant="body2" color="muted">
              Browse our comprehensive component library with interactive examples and API documentation.
            </Typography>
            <Button as="a" href="/components" variant="outline" size="sm">
              View Components →
            </Button>
          </div>
          
          <div className="p-6 border border-border rounded-lg space-y-3">
            <Typography variant="h5" color="secondary" gutterBottom>
              Customization Guide
            </Typography>
            <Typography variant="body2" color="muted">
              Learn how to customize themes, colors, and component variants to match your design system.
            </Typography>
            <Button as="a" href="/theming" variant="outline" size="sm">
              Learn Theming →
            </Button>
          </div>
          
          <div className="p-6 border border-border rounded-lg space-y-3">
            <Typography variant="h5" color="success" gutterBottom>
              Storybook Playground
            </Typography>
            <Typography variant="body2" color="muted">
              Experiment with component props and see all possible variations in our interactive Storybook.
            </Typography>
            <Button as="a" href="/storybook/index.html" variant="outline" size="sm">
              Open Storybook →
            </Button>
          </div>
          
          <div className="p-6 border border-border rounded-lg space-y-3">
            <Typography variant="h5" color="info" gutterBottom>
              Installation Details
            </Typography>
            <Typography variant="body2" color="muted">
              Detailed setup instructions, configuration options, and troubleshooting guide.
            </Typography>
            <Button as="a" href="/installation" variant="outline" size="sm">
              View Details →
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h3" gutterBottom>
          Key Features
        </Typography>
        
        <div className="grid gap-4">
          <div className="flex gap-4 p-4 border border-border rounded-lg">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <Typography variant="subtitle2" gutterBottom>
                Runtime Theming
              </Typography>
              <Typography variant="body2" color="muted">
                Switch themes instantly without rebuilding. CSS custom properties enable dynamic theming.
              </Typography>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-border rounded-lg">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <Typography variant="subtitle2" gutterBottom>
                TypeScript Ready
              </Typography>
              <Typography variant="body2" color="muted">
                Full TypeScript support with excellent IntelliSense and type safety out of the box.
              </Typography>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-border rounded-lg">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <div>
              <Typography variant="subtitle2" gutterBottom>
                Polymorphic Components
              </Typography>
              <Typography variant="body2" color="muted">
                Render components as any HTML element or React component using the 'as' prop.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
