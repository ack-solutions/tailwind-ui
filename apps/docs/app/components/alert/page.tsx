"use client";

import { useMemo, useState } from "react";
import { Alert } from "@ackplus/ui";
import { CodeViewer } from "../../../components/CodeViewer";

type Variant = "solid" | "soft" | "outline";
type Color = "primary" | "secondary" | "success" | "warning" | "error" | "info";

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default function AlertPlaygroundPage() {
  const [title, setTitle] = useState("Update available");
  const [desc, setDesc] = useState("A new version of the app is ready to install.");
  const [variant, setVariant] = useState<Variant>("soft");
  const [color, setColor] = useState<Color>("info");
  const [withIcon, setWithIcon] = useState(true);

  const code = useMemo(() => {
    const props: string[] = [];
    if (variant !== "soft") props.push(`variant=\"${variant}\"`);
    if (color !== "info") props.push(`color=\"${color}\"`);
    if (withIcon) props.push(`icon={<Icon />}`);
    return `import { Alert } from \"@ackplus/ui\";\n${withIcon ? `\nfunction Icon() {\n  return (\n    <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" aria-hidden>\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\" />\n      <line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\" />\n    </svg>\n  );\n}\n` : ""}\nexport default function Example() {\n  return (\n    <Alert ${props.join(" ")} title=\"${title || "Update available"}\">${desc || "A new version of the app is ready to install."}</Alert>\n  );\n}`;
  }, [variant, color, withIcon, title, desc]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Alert</h1>
      <p className="text-muted mt-2 max-w-2xl">Play with tone, color, title, icon, and description.</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="border rounded p-4">
          <h2 className="font-semibold mb-3">Controls</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-muted mb-1">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded px-3 h-9" />
            </div>
            <div>
              <label className="block text-sm text-muted mb-1">Description</label>
              <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full border rounded px-3 py-2 min-h-[90px]" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm text-muted mb-1">Variant</label>
                <select value={variant} onChange={(e) => setVariant(e.target.value as Variant)} className="w-full border rounded px-2 h-9">
                  <option value="solid">solid</option>
                  <option value="soft">soft</option>
                  <option value="outline">outline</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-muted mb-1">Color</label>
                <select value={color} onChange={(e) => setColor(e.target.value as Color)} className="w-full border rounded px-2 h-9">
                  <option value="primary">primary</option>
                  <option value="secondary">secondary</option>
                  <option value="success">success</option>
                  <option value="warning">warning</option>
                  <option value="error">error</option>
                  <option value="info">info</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={withIcon} onChange={(e) => setWithIcon(e.target.checked)} />
                  <span>icon</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-2">
          <div className="border rounded p-6 bg-surface">
            <Alert variant={variant} color={color} title={title || "Update available"} icon={withIcon ? <InfoIcon /> : undefined}>
              {desc || "A new version of the app is ready to install."}
            </Alert>
          </div>
          <div className="mt-4">
            <CodeViewer code={code} language="typescript" />
          </div>
        </section>
      </div>
    </div>
  );
}
