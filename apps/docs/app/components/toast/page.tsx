"use client";
import { ToastProvider, ToastViewport, useToast, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => toast({ title: "Saved", description: "Your changes were saved.", variant: "success" })}>Success</Button>
      <Button variant="outline" onClick={() => toast({ title: "Warning", description: "Check your input.", variant: "warning" })}>Warning</Button>
      <Button variant="outline" onClick={() => toast({ title: "Error", description: "Something went wrong.", variant: "error" })}>Error</Button>
    </div>
  );
}

export default function ToastPage() {
  return (
    <ComponentPage
      title="Toast"
      description="Global feedback messages via a provider and hook."
      apiReference={{ title: "API", items: [{ name: "ToastProvider", href: "#toast-api" }] }}
    >
      <Example
        title="Basic"
        description="Wrap your app with ToastProvider and render ToastViewport near the root."
        code={`<ToastProvider>\n  <App/>\n  <ToastViewport />\n</ToastProvider>`}
      >
        <ToastProvider>
          <Demo />
          <ToastViewport />
        </ToastProvider>
      </Example>
    </ComponentPage>
  );
}

