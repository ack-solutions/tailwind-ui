"use client";
import { Switch } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function SwitchPage() {
  return (
    <ComponentPage
      title="Switch"
      description="Switches toggle the state of a single setting on or off."
      apiReference={{ title: "API", items: [{ name: "Switch", href: "#switch-api" }] }}
    >
      <Example
        title="Basic"
        description="A switch with label and hint."
        code={`<Switch label="Enable notifications" hint="Receive push notifications" />`}
      >
        <Switch label="Enable notifications" hint="Receive push notifications" />
      </Example>
    </ComponentPage>
  );
}
