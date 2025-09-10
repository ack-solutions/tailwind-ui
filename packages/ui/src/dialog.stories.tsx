import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "./dialog";

const meta: Meta = {
  title: "Components/Dialog",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="rounded-md border border-border bg-background px-3 py-1.5 text-sm">Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="text-base font-semibold">Confirm action</div>
          <div className="text-sm text-muted-foreground">Are you sure you want to proceed?</div>
        </DialogHeader>
        <DialogFooter>
          <button className="rounded-md border border-border bg-background px-3 py-1.5 text-sm" onClick={() => alert("Cancelled")}>Cancel</button>
          <button className="rounded-md border border-primary bg-primary px-3 py-1.5 text-sm text-primary-foreground" onClick={() => alert("Confirmed")}>Confirm</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

