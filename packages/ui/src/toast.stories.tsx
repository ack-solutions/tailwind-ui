import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ToastProvider, ToastViewport, useToast } from "./toast";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

function Demo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-2">
      <button
        className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
        onClick={() => toast({ title: "Saved", description: "Your changes were saved.", variant: "success" })}
      >
        Show success
      </button>
      <button
        className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
        onClick={() => toast({ title: "Warning", description: "Check your input.", variant: "warning" })}
      >
        Show warning
      </button>
    </div>
  );
}

export const Playground: Story = {
  render: () => (
    <ToastProvider>
      <Demo />
      <ToastViewport />
    </ToastProvider>
  ),
};

