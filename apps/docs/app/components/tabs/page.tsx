"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function TabsPage() {
  return (
    <ComponentPage
      title="Tabs"
      description="Organize content into multiple sections where only one is visible at a time."
      apiReference={{ title: "API", items: [{ name: "Tabs", href: "#tabs-api" }] }}
    >
      <Example
        title="Basic"
        description="Default controlled by internal state via defaultValue."
        code={`<Tabs defaultValue="one">
  <TabsList>
    <TabsTrigger value="one">One</TabsTrigger>
    <TabsTrigger value="two">Two</TabsTrigger>
  </TabsList>
  <TabsContent value="one">Tab one</TabsContent>
  <TabsContent value="two">Tab two</TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="one">
          <TabsList>
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
          </TabsList>
          <TabsContent value="one">Tab one</TabsContent>
          <TabsContent value="two">Tab two</TabsContent>
        </Tabs>
      </Example>
    </ComponentPage>
  );
}

