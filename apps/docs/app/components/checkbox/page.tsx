"use client";
import { Checkbox } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function CheckboxPage() {
  return (
    <ComponentPage
      title="Checkbox"
      description="Checkboxes allow the user to select one or more items from a set."
      apiReference={{ title: "API", items: [{ name: "Checkbox", href: "#checkbox-api" }] }}
    >
      <Example
        title="Basic"
        description="A checkbox with label and hint."
        code={`<Checkbox label="Accept terms" hint="You can unsubscribe anytime" />`}
      >
        <Checkbox label="Accept terms" hint="You can unsubscribe anytime" />
      </Example>

      <Example
        title="Invalid"
        description="Use invalid to show an error state."
        code={`<Checkbox label="Accept terms" invalid hint="You must accept the terms" />`}
      >
        <Checkbox label="Accept terms" invalid hint="You must accept the terms" />
      </Example>
    </ComponentPage>
  );
}
