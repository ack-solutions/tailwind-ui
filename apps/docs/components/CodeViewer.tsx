"use client";

import dynamic from "next/dynamic";
import { CopyButton } from "./CopyButton";
import { useMemo, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const Editor = dynamic(() => import("@monaco-editor/react").then(m => m.Editor), {
  ssr: false,
  loading: () => (
    <div className="relative border border-border/20 rounded-lg overflow-hidden">
      <div className="absolute right-2 top-2 z-10">
        <span className="border border-border/20 rounded px-3 h-8 text-sm inline-flex items-center bg-background text-muted-foreground">Loading…</span>
      </div>
      <pre className="m-0 p-4 overflow-auto bg-background text-sm text-muted-foreground">Loading…</pre>
    </div>
  ),
});

interface CodeViewerProps {
  code: string;
  language?: string;
  className?: string;
  height?: number;
  expandable?: boolean;
  preview?: React.ReactNode;
  title?: string;
  description?: string;
}

export function CodeViewer({
  code,
  language = "typescript",
  className,
  height = 260,
  expandable = false,
  preview,
  title,
  description
}: CodeViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  if (!expandable) {
    return (
      <div className={`relative border border-border/20 rounded-lg overflow-hidden ${className ?? ""}`.trim()}>
        <div className="absolute right-2 top-2 z-10">
          <CopyButton text={code} />
        </div>
        <Editor height={height} defaultLanguage={language} value={code} options={options} theme="vs-light" />
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Preview Section */}
      {preview && (
        <div className="space-y-3">
          {title && (
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          )}
          <div className="p-6 border border-border/20 rounded-lg bg-background shadow-sm">
            {preview}
          </div>
        </div>
      )}

      {/* Code Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            {title && !preview && (
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            )}
            {description && !preview && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-border/20 rounded-md bg-background hover:bg-muted/50 transition-colors"
          >
            <svg
              className={cn("w-4 h-4 transition-transform", isExpanded ? "rotate-90" : "rotate-0")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isExpanded ? "Collapse" : "Expand"} code
          </button>
        </div>

        {isExpanded && (
          <div className="relative border border-border/20 rounded-lg overflow-hidden">
            <div className="absolute right-2 top-2 z-10">
              <CopyButton text={code} />
            </div>
            <Editor height={height} defaultLanguage={language} value={code} options={options} theme="vs-light" />
          </div>
        )}
      </div>
    </div>
  );
}
