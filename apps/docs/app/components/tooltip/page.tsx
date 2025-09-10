"use client";
import { Tooltip, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function TooltipPage() {
  return (
    <ComponentPage
      title="Tooltip"
      description="Contextual labels that appear on hover or focus."
      apiReference={{ title: "API", items: [{ name: "Tooltip", href: "#tooltip-api" }] }}
    >
      <Example
        title="Basic"
        description="Wrap any element; tooltip shows on hover and focus."
        code={`<Tooltip content="More info"><button>Hover me</button></Tooltip>`}
      >
        <Tooltip content="More info">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
      </Example>
    </ComponentPage>
  );
}

