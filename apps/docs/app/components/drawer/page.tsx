"use client";
import { Drawer, DrawerTrigger, DrawerContent, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function DrawerPage() {
  return (
    <ComponentPage
      title="Drawer"
      description="A panel that slides in from the side of the screen."
      apiReference={{ title: "API", items: [{ name: "Drawer", href: "#drawer-api" }] }}
    >
      <Example
        title="Basic"
        description="Left side drawer using DrawerTrigger and DrawerContent."
        code={`<Drawer>\n  <DrawerTrigger>Open</DrawerTrigger>\n  <DrawerContent>...</DrawerContent>\n</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger>
            <Button variant="outline">Open</Button>
          </DrawerTrigger>
        <DrawerContent>
            <div className="p-4 text-sm">Drawer content</div>
          </DrawerContent>
        </Drawer>
      </Example>
    </ComponentPage>
  );
}

