"use client";

import { useMemo, useState } from "react";
import { Badge } from "@ackplus/ui";
import { CodeViewer } from "../../../components/CodeViewer";

type Variant = "solid" | "soft" | "outline";
type Size = "sm" | "md" | "lg";
type Color = "primary" | "secondary" | "success" | "warning" | "error" | "info";

export default function BadgePlaygroundPage() {
  const [label, setLabel] = useState("Badge");
  const [variant, setVariant] = useState<Variant>("soft");
  const [size, setSize] = useState<Size>("md");
  const [withDot, setWithDot] = useState(true);
  const [color, setColor] = useState<Color>("primary");

  const code = useMemo(() => {
    const props: string[] = [];
    if (variant !== "soft") props.push(`variant=\"${variant}\"`);
    if (size !== "md") props.push(`size=\"${size}\"`);
    if (withDot) props.push("withDot");
    if (color !== "primary") props.push(`color=\"${color}\"`);
    return `import { Badge } from \"@ackplus/ui\";\n\nexport default function Example() {\n  return (\n    <Badge ${props.join(" ")}>${label || "Badge"}</Badge>\n  );\n}`;
  }, [variant, size, withDot, color, label]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Badge</h1>
      <p className="text-muted mt-2 max-w-2xl">Interactive controls for badge variants, sizes, color, and dot.</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="border rounded p-4">
          <h2 className="font-semibold mb-3">Controls</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-muted mb-1">Label</label>
              <input value={label} onChange={(e) => setLabel(e.target.value)} className="w-full border rounded px-3 h-9" />
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
                <label className="block text-sm text-muted mb-1">Size</label>
                <select value={size} onChange={(e) => setSize(e.target.value as Size)} className="w-full border rounded px-2 h-9">
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
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
            </div>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={withDot} onChange={(e) => setWithDot(e.target.checked)} />
              <span>withDot</span>
            </label>
          </div>
        </section>

        <section className="lg:col-span-2">
          <div className="border rounded p-6 bg-surface">
            <Badge variant={variant} size={size} withDot={withDot} color={color}>{label || "Badge"}</Badge>
          </div>
          <div className="mt-4">
            <CodeViewer code={code} language="typescript" />
          </div>
        </section>
      </div>
    </div>
  );
}
