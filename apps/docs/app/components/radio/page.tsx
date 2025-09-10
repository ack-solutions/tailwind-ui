"use client";
import { Radio } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function RadioPage() {
  return (
    <ComponentPage
      title="Radio"
      description="Radio buttons allow the user to select one option from a set."
      apiReference={{ title: "API", items: [{ name: "Radio", href: "#radio-api" }] }}
    >
      <Example
        title="Group"
        description="Radios grouped by the same name."
        code={`<>
  <Radio name="plan" label="Basic" defaultChecked />
  <Radio name="plan" label="Pro" />
  <Radio name="plan" label="Enterprise" />
</>`}
      >
        <Radio name="plan" label="Basic" defaultChecked />
        <Radio name="plan" label="Pro" />
        <Radio name="plan" label="Enterprise" />
      </Example>
    </ComponentPage>
  );
}
