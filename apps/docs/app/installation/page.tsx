import { CodeViewer } from "../../components/CodeViewer";

export default function InstallationPage() {
  return (
    <article>
      <h1>Installation</h1>
      <p>
        AckPlus UI targets Tailwind CSS v4 and React 18+. It exports CSS tokens and
        styles that also work as plain CSS (no Tailwind plugin required), so you can
        adopt it incrementally.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>React 18+ and a bundler (Vite, Next.js, etc.)</li>
        <li>Tailwind CSS v4 for full utility parity (optional for basic usage)</li>
      </ul>

      <h2 className="mt-6 text-2xl font-semibold">Install Package</h2>
      <CodeViewer code={`pnpm add @ackplus/ui`} language="shell" />

      <h2 className="mt-6 text-2xl font-semibold">Add Styles</h2>
      <p>Import tokens and base styles once in your global stylesheet.</p>
      <CodeViewer language="css" code={`/* app/globals.css or src/index.css */\n@import "@ackplus/ui/tokens.css";\n@import "@ackplus/ui/styles.css";`} />

      <h2 className="mt-6 text-2xl font-semibold">Configure Theme (Optional)</h2>
      <p>
        Theme is controlled via <code>document.documentElement.dataset.theme</code>.
        Use the provided <code>ThemeProvider</code> or set the attribute yourself.
      </p>
      <CodeViewer language="typescript" code={`import { ThemeProvider } from "@ackplus/ui";\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <ThemeProvider theme=\"light\">{children}</ThemeProvider>\n      </body>\n    </html>\n  );\n}`} />

      <h2 className="mt-6 text-2xl font-semibold">Using Components</h2>
      <CodeViewer language="typescript" code={`import { Button } from "@ackplus/ui";\n\nexport function Toolbar() {\n  return (\n    <div className=\"flex gap-3\">\n      <Button>Save</Button>\n      <Button variant=\"outline\">Cancel</Button>\n      <Button variant=\"ghost\" size=\"sm\">Help</Button>\n    </div>\n  );\n}`} />

      <h2>Tailwind v4 Notes</h2>
      <ul>
        <li>
          Components rely on CSS variables from <code>tokens.css</code>. Ensure it is
          imported before your app styles.
        </li>
        <li>
          You can layer your own utilities and design tokens on top — the library
          plays nicely with existing Tailwind setup.
        </li>
      </ul>
    </article>
  );
}
