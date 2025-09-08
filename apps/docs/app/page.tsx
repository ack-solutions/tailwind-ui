import { Typography, Button, Badge, Alert } from "@ackplus/ui";
import { CodeViewer } from "../components/CodeViewer";

export default function Page() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <Badge variant="soft" color="primary">
            v1.0.0 - Tailwind v4 Ready
          </Badge>
          
          <Typography variant="h1" className="max-w-4xl mx-auto">
            Modern React Components for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tailwind v4
            </span>
          </Typography>
          
          <Typography variant="subtitle1" color="muted" className="max-w-2xl mx-auto">
            A comprehensive component library built with runtime CSS tokens, 
            tailwind-variants, and full TypeScript support. Create beautiful, 
            themeable UIs with minimal configuration.
          </Typography>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="a" href="/getting-started" size="lg">
            Get Started
          </Button>
          <Button as="a" href="/components" intent="outline" size="lg">
            Browse Components
          </Button>
          <Button as="a" href="https://github.com" intent="ghost" size="lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Button>
        </div>
      </section>

      {/* Quick Example */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <Typography variant="h2" gutterBottom>
            Quick Example
          </Typography>
          <Typography variant="body1" color="muted">
            Get started with AckPlus UI in seconds
          </Typography>
        </div>
        
        <CodeViewer 
          language="typescript" 
          code={`import { Button, Alert, Badge } from "@ackplus/ui";

export function Example() {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <Button color="primary">Primary</Button>
        <Button color="secondary" intent="outline">Secondary</Button>
        <Button color="success" intent="ghost">Success</Button>
      </div>
      
      <Alert color="info" title="Welcome!">
        AckPlus UI is ready to use with full TypeScript support.
      </Alert>
      
      <div className="flex gap-2">
        <Badge color="primary">New</Badge>
        <Badge color="success" variant="solid">Active</Badge>
        <Badge color="warning" variant="outline">Beta</Badge>
      </div>
    </div>
  );
}`}
        />
      </section>

      {/* Features */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <Typography variant="h2" gutterBottom>
            Why Choose AckPlus UI?
          </Typography>
          <Typography variant="body1" color="muted">
            Built for modern React applications with developer experience in mind
          </Typography>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Typography variant="h5" gutterBottom>
              Tailwind v4 First
            </Typography>
            <Typography variant="body2" color="muted">
              Built specifically for Tailwind CSS v4 with runtime CSS tokens and modern @theme syntax.
            </Typography>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <Typography variant="h5" gutterBottom>
              Runtime Theming
            </Typography>
            <Typography variant="body2" color="muted">
              Dynamic theme switching with CSS custom properties. No build-time compilation needed.
            </Typography>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Typography variant="h5" gutterBottom>
              TypeScript Native
            </Typography>
            <Typography variant="body2" color="muted">
              Full TypeScript support with polymorphic components, variant props, and excellent IntelliSense.
            </Typography>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <Typography variant="h5" gutterBottom>
              Composable Design
            </Typography>
            <Typography variant="body2" color="muted">
              Build complex UIs with simple, composable components that follow React best practices.
            </Typography>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <Typography variant="h5" gutterBottom>
              Customizable
            </Typography>
            <Typography variant="body2" color="muted">
              Easily customize colors, spacing, and variants through CSS tokens and Tailwind utilities.
            </Typography>
          </div>
          
          <div className="space-y-3">
            <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Typography variant="h5" gutterBottom>
              Developer Friendly
            </Typography>
            <Typography variant="body2" color="muted">
              Comprehensive documentation, Storybook integration, and excellent debugging experience.
            </Typography>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-16 border-t border-border">
        <div className="space-y-4">
          <Typography variant="h2" gutterBottom>
            Ready to get started?
          </Typography>
          <Typography variant="body1" color="muted" className="max-w-2xl mx-auto">
            Install AckPlus UI and start building beautiful React applications with Tailwind v4.
          </Typography>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="a" href="/installation" size="lg">
            View Installation Guide
          </Button>
          <Button as="a" href="/components" intent="outline" size="lg">
            Explore Components
          </Button>
        </div>
      </section>
    </div>
  );
}
