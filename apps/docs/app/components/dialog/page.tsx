"use client";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function DialogPage() {
  return (
    <ComponentPage
      title="Dialog"
      description="A modal window that overlays the page content."
      apiReference={{ title: "API", items: [{ name: "Dialog", href: "#dialog-api" }] }}
    >
      <Example
        title="Basic"
        description="Opens on trigger click; closes on backdrop click or Esc."
        code={`<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>...content</DialogContent>\n</Dialog>`}
      >
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="text-base font-semibold">Delete item</div>
              <div className="text-sm text-muted-foreground">This action cannot be undone.</div>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Example>
    </ComponentPage>
  );
}
