import { Typography, Button, Alert, Badge } from "@ackplus/ui";
import { CodeViewer } from "../../components/CodeViewer";

export default function ThemingPage() {
  return (
    <article className="space-y-8">
      <div>
        <Typography variant="h1" gutterBottom>
          Theming & Customization
        </Typography>
        <Typography variant="subtitle1" color="muted">
          Learn how to customize colors, themes, and component variants in AckPlus UI.
          Built with runtime CSS tokens for maximum flexibility.
        </Typography>
      </div>

      <Alert color="info" title="Runtime Theming">
        AckPlus UI uses CSS custom properties for runtime theming. This means you can
        switch themes instantly without rebuilding your application.
      </Alert>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Color Palette
        </Typography>
        
        <Typography variant="body1" color="muted">
          AckPlus UI includes a comprehensive semantic color system that automatically
          adapts to light and dark themes.
        </Typography>

        <div className="grid gap-6">
          <div>
            <Typography variant="h4" gutterBottom>
              Semantic Colors
            </Typography>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Primary', value: 'primary', desc: 'Main brand color' },
                { name: 'Secondary', value: 'secondary', desc: 'Accent color' },
                { name: 'Success', value: 'success', desc: 'Success states' },
                { name: 'Warning', value: 'warning', desc: 'Warning states' },
                { name: 'Error', value: 'error', desc: 'Error states' },
                { name: 'Info', value: 'info', desc: 'Information' },
              ].map((color) => (
                <div key={color.value} className="space-y-3">
                  <div className={`h-16 rounded-lg bg-${color.value}`}></div>
                  <div>
                    <Typography variant="subtitle2" gutterBottom>
                      {color.name}
                    </Typography>
                    <Typography variant="caption" color="muted">
                      {color.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Surface Colors
            </Typography>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Surface', value: 'surface', desc: 'Background' },
                { name: 'Surface 2', value: 'surface-2', desc: 'Secondary bg' },
                { name: 'Text', value: 'text', desc: 'Primary text' },
                { name: 'Muted', value: 'muted', desc: 'Secondary text' },
              ].map((color) => (
                <div key={color.value} className="space-y-3">
                  <div className={`h-16 rounded-lg bg-${color.value} border border-border`}></div>
                  <div>
                    <Typography variant="subtitle2" gutterBottom>
                      {color.name}
                    </Typography>
                    <Typography variant="caption" color="muted">
                      {color.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Theme Configuration
        </Typography>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" gutterBottom>
              Using ThemeProvider
            </Typography>
            <Typography variant="body1" color="muted" gutterBottom>
              The ThemeProvider component controls the active theme by setting the
              <code className="mx-1 px-2 py-1 bg-surface-2 rounded text-sm">data-theme</code>
              attribute on the HTML element.
            </Typography>
            <CodeViewer language="typescript" code={`import { ThemeProvider } from "@ackplus/ui";

export function App() {
  return (
    <ThemeProvider theme="light">
      {/* Your app content */}
    </ThemeProvider>
  );
}

// Or with user preference detection
export function App() {
  return (
    <ThemeProvider theme="auto">
      {/* Automatically detects user's system preference */}
    </ThemeProvider>
  );
}`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Manual Theme Control
            </Typography>
            <Typography variant="body1" color="muted" gutterBottom>
              You can also control themes manually by setting the data attribute directly.
            </Typography>
            <CodeViewer language="typescript" code={`// Set theme programmatically
document.documentElement.dataset.theme = "dark";

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    document.documentElement.dataset.theme = e.matches ? "dark" : "light";
  });`} />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Customizing Colors
        </Typography>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" gutterBottom>
              CSS Custom Properties
            </Typography>
            <Typography variant="body1" color="muted" gutterBottom>
              Override the default color tokens by defining new values for the CSS custom properties.
            </Typography>
            <CodeViewer language="css" code={`:root {
  /* Override primary color */
  --apui-primary: oklch(0.60 0.20 280);
  
  /* Override secondary color */
  --apui-secondary: oklch(0.70 0.15 120);
  
  /* Override success color */
  --apui-success: oklch(0.65 0.18 140);
}

/* Dark theme overrides */
:where([data-theme="dark"]) {
  --apui-primary: oklch(0.75 0.18 280);
  --apui-secondary: oklch(0.80 0.12 120);
  --apui-success: oklch(0.75 0.15 140);
}`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Component Color Props
            </Typography>
            <Typography variant="body1" color="muted" gutterBottom>
              All components accept a color prop to use semantic colors from your theme.
            </Typography>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
                <Button color="info">Info</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="error">Error</Badge>
                <Badge color="info">Info</Badge>
              </div>
            </div>
            <CodeViewer language="typescript" code={`<Button color="primary">Primary Button</Button>
<Button color="success">Success Button</Button>
<Badge color="warning">Warning Badge</Badge>
<Alert color="error" title="Error">Something went wrong</Alert>`} />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Advanced Customization
        </Typography>

        <div className="space-y-6">
          <div>
            <Typography variant="h4" gutterBottom>
              Custom Color Palette
            </Typography>
            <Typography variant="body1" color="muted" gutterBottom>
              Create your own color system by extending the default tokens.
            </Typography>
            <CodeViewer language="css" code={`/* tokens.css - Add to your project */
:root {
  /* Brand colors */
  --apui-brand-50: oklch(0.98 0.02 280);
  --apui-brand-100: oklch(0.95 0.05 280);
  --apui-brand-500: oklch(0.60 0.20 280);
  --apui-brand-900: oklch(0.30 0.25 280);
  
  /* Map to semantic tokens */
  --apui-primary: var(--apui-brand-500);
  --apui-surface: var(--apui-brand-50);
}

/* Make available to Tailwind */
@theme {
  --color-brand-50: var(--apui-brand-50);
  --color-brand-100: var(--apui-brand-100);
  --color-brand-500: var(--apui-brand-500);
  --color-brand-900: var(--apui-brand-900);
}`} />
          </div>

          <div>
            <Typography variant="h4" gutterBottom>
              Component Variants
            </Typography>
            <Typography variant="body1" color="muted" gutterBottom>
              Customize component styles using Tailwind utilities and CSS custom properties.
            </Typography>
            <CodeViewer language="typescript" code={`// Custom button variant
<Button 
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
  style={{ '--apui-brand': 'oklch(0.7 0.2 300)' } as React.CSSProperties}
>
  Gradient Button
</Button>

// Custom alert styling
<Alert 
  color="primary"
  className="border-2 border-dashed"
  title="Custom Alert"
>
  This alert has custom border styling
</Alert>`} />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <Typography variant="h2" gutterBottom>
          Design Tokens Reference
        </Typography>

        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="text-left p-4">
                  <Typography variant="subtitle2">Token</Typography>
                </th>
                <th className="text-left p-4">
                  <Typography variant="subtitle2">Purpose</Typography>
                </th>
                <th className="text-left p-4">
                  <Typography variant="subtitle2">Light Value</Typography>
                </th>
                <th className="text-left p-4">
                  <Typography variant="subtitle2">Dark Value</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { token: '--apui-primary', purpose: 'Primary brand color', light: 'oklch(0.64 0.16 252)', dark: 'oklch(0.72 0.12 255)' },
                { token: '--apui-secondary', purpose: 'Secondary accent color', light: 'oklch(0.62 0.18 320)', dark: 'oklch(0.74 0.12 320)' },
                { token: '--apui-success', purpose: 'Success state color', light: 'oklch(0.70 0.16 150)', dark: 'oklch(0.76 0.13 150)' },
                { token: '--apui-surface', purpose: 'Background surface', light: 'oklch(0.98 0 0)', dark: 'oklch(0.17 0 0)' },
                { token: '--apui-text', purpose: 'Primary text color', light: 'oklch(0.21 0 0)', dark: 'oklch(0.95 0 0)' },
              ].map((row) => (
                <tr key={row.token} className="border-b border-border last:border-b-0">
                  <td className="p-4">
                    <code className="text-sm bg-surface-2 px-2 py-1 rounded">{row.token}</code>
                  </td>
                  <td className="p-4">
                    <Typography variant="body2">{row.purpose}</Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="caption" className="font-mono">{row.light}</Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="caption" className="font-mono">{row.dark}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
