"use client";

import dynamic from "next/dynamic";
import { CopyButton } from "./CopyButton";
import { useMemo } from "react";

const Editor = dynamic(() => import("@monaco-editor/react").then(m => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="relative border rounded overflow-hidden">
      <div className="absolute right-2 top-2 z-10">
        <span className="border rounded px-3 h-8 text-sm inline-flex items-center">Loading…</span>
      </div>
      <pre className="m-0 p-4 overflow-auto bg-gray-50 text-sm">Loading…</pre>
    </div>
  ),
});

export function CodeViewer({ code, language = "typescript", className, height = 260 }: { code: string; language?: string; className?: string; height?: number }) {
  const options = useMemo(
    () => ({
      readOnly: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: "on" as const,
      padding: { top: 12, bottom: 12 },
      fontSize: 13,
      wordWrap: "on" as const,
      domReadOnly: true,
      cursorStyle: "block" as const,
      renderLineHighlight: "none" as const,
      automaticLayout: true,
    }),
    []
  );

  return (
    <div className={`relative border rounded overflow-hidden ${className ?? ""}`.trim()}>
      <div className="absolute right-2 top-2 z-10">
        <CopyButton text={code} />
      </div>
      <Editor height={height} defaultLanguage={language} value={code} options={options} theme="vs-dark" />
    </div>
  );
}
