"use client";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function PopoverPage() {
  return (
    <ComponentPage
      title="Popover"
      description="A non-modal floating panel with contextual content."
      apiReference={{ title: "API", items: [{ name: "Popover", href: "#popover-api" }] }}
    >
      <Example
        title="Basic"
        description="Click the trigger to toggle content; click outside or press Esc to close."
        code={`<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>Content</PopoverContent>\n</Popover>`}
      >
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="text-sm">This is popover content</div>
          </PopoverContent>
        </Popover>
      </Example>
    </ComponentPage>
  );
}
