"use client";
import React from "react";
import { Typography } from "@ackplus/ui";
import { CodeViewer } from "./CodeViewer";

interface ExampleProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  language?: string;
}

export function Example({ title, description, children, code, language = "tsx" }: ExampleProps) {
  return (
    <section className="space-y-4">
      <div>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" color="muted" className="max-w-3xl">
            {description}
          </Typography>
        )}
      </div>

      <CodeViewer
        code={code}
        language={language}
        expandable={true}
        preview={
          <div className="flex flex-wrap items-center gap-4">
            {children}
          </div>
        }
        title={title}
        description={description}
      />
    </section>
  );
}

interface ComponentPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
  apiReference?: {
    title: string;
    items: Array<{
      name: string;
      href: string;
    }>;
  };
}

export function ComponentPage({ title, description, children, apiReference }: ComponentPageProps) {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div>
        <Typography variant="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="muted" className="max-w-3xl">
          {description}
        </Typography>
      </div>

      {/* Content */}
      {children}

      {/* API Reference */}
      {apiReference && (
        <section className="space-y-4 pt-8 border-t border-border/20">
          <Typography variant="h2" gutterBottom>
            {apiReference.title}
          </Typography>
          <Typography variant="body1" color="muted">
            See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.
          </Typography>
          <ul className="space-y-2">
            {apiReference.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-primary hover:underline font-mono text-sm"
                >
                  &lt;{item.name} /&gt;
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

interface PropsTableProps {
  title?: string;
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
}

export function PropsTable({ title = "Props", props }: PropsTableProps) {
  return (
    <section className="space-y-4">
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <div className="overflow-x-auto">
        <table className="w-full border border-border/20 rounded-lg">
          <thead>
            <tr className="border-b border-border/20 bg-muted/30">
              <th className="text-left p-4 font-semibold text-foreground">Name</th>
              <th className="text-left p-4 font-semibold text-foreground">Type</th>
              <th className="text-left p-4 font-semibold text-foreground">Default</th>
              <th className="text-left p-4 font-semibold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr key={prop.name} className={index % 2 === 0 ? "bg-background" : "bg-muted/10"}>
                <td className="p-4 font-mono text-sm text-primary">{prop.name}</td>
                <td className="p-4 font-mono text-sm text-foreground">{prop.type}</td>
                <td className="p-4 font-mono text-sm text-muted-foreground">{prop.default || "-"}</td>
                <td className="p-4 text-sm text-muted-foreground">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
