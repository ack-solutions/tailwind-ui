import { Typography, Button, Badge, Alert } from "@ackplus/ui";
import { CodeViewer } from "../../components/CodeViewer";

export default function ComponentsIndexPage() {
  return (
    <article className="space-y-12">
      <div>
        <Typography variant="h1" gutterBottom>
          Components
        </Typography>
        <Typography variant="subtitle1" color="muted">
          A comprehensive set of React components built with Tailwind variants and
          TypeScript. Each component is designed to be flexible, accessible, and themeable.
        </Typography>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 border border-border rounded-lg space-y-3">
          <Typography variant="h5" color="primary" gutterBottom>
            Button
          </Typography>
          <Typography variant="body2" color="muted">
            Interactive button component with multiple variants, sizes, and semantic colors.
          </Typography>
          <Button as="a" href="/components/button" intent="outline" size="sm" fullWidth>
            View Details →
          </Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg space-y-3">
          <Typography variant="h5" color="secondary" gutterBottom>
            Badge
          </Typography>
          <Typography variant="body2" color="muted">
            Small status and taxonomy labels with semantic colors and variants.
          </Typography>
          <Button as="a" href="/components/badge" intent="outline" size="sm" fullWidth>
            View Details →
          </Button>
        </div>
        
        <div className="p-6 border border-border rounded-lg space-y-3">
          <Typography variant="h5" color="success" gutterBottom>
            Alert
          </Typography>
          <Typography variant="body2" color="muted">
            Feedback banners for success, warning, error, and informational messages.
          </Typography>
          <Button as="a" href="/components/alert" intent="outline" size="sm" fullWidth>
            View Details →
          </Button>
        </div>
      </div>

      {/* Button Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="h2" color="primary" gutterBottom>
              Button
            </Typography>
            <Typography variant="body1" color="muted">
              Versatile button component with multiple intents, sizes, and color variants.
            </Typography>
          </div>
          <Button as="a" href="/components/button" intent="outline">
            View Full API →
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" gutterBottom>
              Basic Usage
            </Typography>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button intent="outline">Outline</Button>
              <Button intent="ghost">Ghost</Button>
              <Button intent="link">Link</Button>
            </div>
            <CodeViewer language="typescript" code={`import { Button } from "@ackplus/ui";

export function ButtonExamples() {
  return (
    <div className="flex gap-3">
      <Button>Default</Button>
      <Button intent="outline">Outline</Button>
      <Button intent="ghost">Ghost</Button>
      <Button intent="link">Link</Button>
    </div>
  );
}`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Sizes & Colors
            </Typography>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
                <Button color="info">Info</Button>
              </div>
            </div>
            <CodeViewer language="typescript" code={`// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Semantic colors
<Button color="primary">Primary</Button>
<Button color="success">Success</Button>
<Button color="error">Error</Button>`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Polymorphic Usage
            </Typography>
            <Typography variant="body2" color="muted" gutterBottom>
              Use the <code className="px-1 py-0.5 bg-surface-2 rounded text-sm">as</code> prop to render as any element.
            </Typography>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Button as="a" href="#" target="_blank">
                External Link
              </Button>
              <Button as="div" role="button" tabIndex={0}>
                Div Button
              </Button>
            </div>
            <CodeViewer language="typescript" code={`<Button as="a" href="/docs" target="_blank">
  External Link
</Button>

<Button as="div" role="button" tabIndex={0}>
  Custom Element
</Button>`} />
          </div>
        </div>
      </section>

      {/* Badge Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="h2" color="secondary" gutterBottom>
              Badge
            </Typography>
            <Typography variant="body1" color="muted">
              Small status indicators and labels with semantic meaning.
            </Typography>
          </div>
          <Button as="a" href="/components/badge" intent="outline">
            View Full API →
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" gutterBottom>
              Variants
            </Typography>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="soft">Soft</Badge>
              <Badge variant="solid">Solid</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <CodeViewer language="typescript" code={`import { Badge } from "@ackplus/ui";

export function BadgeVariants() {
  return (
    <div className="flex gap-3">
      <Badge variant="soft">Soft</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Colors & Sizes
            </Typography>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="error">Error</Badge>
                <Badge color="info">Info</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge withDot>With Dot</Badge>
                <Badge withDot color="success" variant="outline">Online</Badge>
              </div>
            </div>
            <CodeViewer language="typescript" code={`// Semantic colors
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="lg">Large</Badge>

// With status dot
<Badge withDot color="success">Online</Badge>`} />
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="h2" color="success" gutterBottom>
              Alert
            </Typography>
            <Typography variant="body1" color="muted">
              Contextual feedback messages for user actions and system states.
            </Typography>
          </div>
          <Button as="a" href="/components/alert" intent="outline">
            View Full API →
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" gutterBottom>
              Tones & Colors
            </Typography>
            <div className="space-y-4">
              <Alert color="info" title="Information" tone="soft">
                This is an informational message with soft tone.
              </Alert>
              <Alert color="success" title="Success" tone="outline">
                Your changes have been saved successfully.
              </Alert>
              <Alert color="warning" title="Warning" tone="solid">
                Please review your input before continuing.
              </Alert>
              <Alert color="error" title="Error">
                Something went wrong. Please try again.
              </Alert>
            </div>
            <CodeViewer language="typescript" code={`import { Alert } from "@ackplus/ui";

export function AlertExamples() {
  return (
    <div className="space-y-4">
      <Alert color="info" title="Information" tone="soft">
        This is an informational message.
      </Alert>
      
      <Alert color="success" title="Success" tone="outline">
        Your changes have been saved.
      </Alert>
      
      <Alert color="warning" title="Warning" tone="solid">
        Please review your input.
      </Alert>
      
      <Alert color="error" title="Error">
        Something went wrong.
      </Alert>
    </div>
  );
}`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              With Icons
            </Typography>
            <div className="space-y-4">
              <Alert 
                color="success" 
                title="Success"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                Your profile has been updated successfully.
              </Alert>
              <Alert 
                color="warning" 
                title="Attention Required"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                }
              >
                Your subscription expires in 3 days.
              </Alert>
            </div>
            <CodeViewer language="typescript" code={`<Alert 
  color="success" 
  title="Success"
  icon={<CheckIcon />}
>
  Your profile has been updated.
</Alert>

<Alert 
  color="warning" 
  title="Attention Required"
  icon={<WarningIcon />}
>
  Your subscription expires soon.
</Alert>`} />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-border pt-8">
        <Typography variant="h3" gutterBottom>
          Learn More
        </Typography>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-border rounded-lg space-y-3">
            <Typography variant="h5" color="primary" gutterBottom>
              Interactive Playground
            </Typography>
            <Typography variant="body2" color="muted">
              Experiment with all component props and see live updates in our Storybook.
            </Typography>
            <Button as="a" href="/storybook/index.html" intent="outline" size="sm">
              Open Storybook →
            </Button>
          </div>
          
          <div className="p-6 border border-border rounded-lg space-y-3">
            <Typography variant="h5" color="secondary" gutterBottom>
              Theming Guide
            </Typography>
            <Typography variant="body2" color="muted">
              Learn how to customize colors, themes, and component variants.
            </Typography>
            <Button as="a" href="/theming" intent="outline" size="sm">
              View Theming →
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
