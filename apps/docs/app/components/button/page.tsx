"use client";

import { useMemo, useState } from "react";
import { Button } from "@ackplus/ui";
import { CodeViewer } from "../../../components/CodeViewer";

type Intent = "solid" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg";
type Color = "primary" | "secondary" | "success" | "warning" | "error" | "info";

export default function ButtonPlaygroundPage() {
  const [label, setLabel] = useState("Click me");
  const [intent, setIntent] = useState<Intent>("solid");
  const [size, setSize] = useState<Size>("md");
  const [fullWidth, setFullWidth] = useState(false);
  const [asEl, setAsEl] = useState<"button" | "a">("button");
  const [withIcon, setWithIcon] = useState(false);
  const [color, setColor] = useState<Color>("primary");

  const code = useMemo(() => {
    const props: string[] = [];
    if (intent !== "solid") props.push(`intent=\"${intent}\"`);
    if (size !== "md") props.push(`size=\"${size}\"`);
    if (fullWidth) props.push("fullWidth");
    if (asEl === "a") props.push("as=\"a\" href=\"#\"");
    if (withIcon) props.push("icon={<Icon />}\n  ");
    const openTag = `<Button ${props.join(" ")}>`;
    const inner = label || "Click me";
    const closeTag = `</Button>`;
    const importIcon = withIcon ? `\nfunction Icon() {\n  return (\n    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\n      <path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\" />\n      <polyline points=\"22 4 12 14.01 9 11.01\" />\n    </svg>\n  );\n}\n` : "";
    const colorProp = color !== "primary" ? ` color=\"${color}\"` : "";
    return `import { Button } from \"@ackplus/ui\";\n${importIcon}\nexport default function Example() {\n  return (\n    ${openTag.replace("<Button", `<Button${colorProp}`)}${inner}${closeTag}\n  );\n}`;
  }, [intent, size, fullWidth, asEl, withIcon, label, color]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Button</h1>
      <p className="ack-muted mt-2 max-w-2xl">
        Configure the props below to see the Button update live. Copy the code
        snippet for quick usage.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="border rounded p-4">
          <h2 className="font-semibold mb-3">Controls</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm ack-muted mb-1">Label</label>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full border rounded px-3 h-9"
                placeholder="Button label"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm ack-muted mb-1">Intent</label>
                <select
                  value={intent}
                  onChange={(e) => setIntent(e.target.value as Intent)}
                  className="w-full border rounded px-2 h-9"
                >
                  <option value="solid">solid</option>
                  <option value="outline">outline</option>
                  <option value="ghost">ghost</option>
                  <option value="link">link</option>
                </select>
              </div>
              <div>
                <label className="block text-sm ack-muted mb-1">Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value as Size)}
                  className="w-full border rounded px-2 h-9"
                >
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label className="block text-sm ack-muted mb-1">Color</label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value as Color)}
                  className="w-full border rounded px-2 h-9"
                >
                  <option value="primary">primary</option>
                  <option value="secondary">secondary</option>
                  <option value="success">success</option>
                  <option value="warning">warning</option>
                  <option value="error">error</option>
                  <option value="info">info</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={fullWidth} onChange={(e) => setFullWidth(e.target.checked)} />
                <span>fullWidth</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={withIcon} onChange={(e) => setWithIcon(e.target.checked)} />
                <span>icon</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <span>as</span>
                <select value={asEl} onChange={(e) => setAsEl(e.target.value as any)} className="border rounded px-2 h-8">
                  <option value="button">button</option>
                  <option value="a">a</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <section className="lg:col-span-2">
          <div className="border rounded p-6 bg-surface">
            <div className="flex flex-wrap gap-3">
              <Button
                {...(asEl === "a" ? ({ as: "a", href: "#" } as any) : {})}
                intent={intent}
                size={size}
                fullWidth={fullWidth}
                color={color}
                icon={withIcon ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ) : undefined}
              >
                {label || "Click me"}
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <CodeViewer code={code} language="typescript" />
            <div className="mt-3 text-sm ack-muted">
              Tip: open in Storybook to explore more states
              {" "}
              <a className="text-brand underline underline-offset-4" href="/storybook/index.html?path=/story/button--primary">here</a>.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
