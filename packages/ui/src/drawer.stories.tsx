import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "./drawer";

const meta: Meta = {
  title: "Components/Drawer",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger className="rounded-md border border-border bg-background px-3 py-1.5 text-sm">Open Drawer</DrawerTrigger>
      <DrawerContent>
        <div className="p-4 text-sm">
          Drawer content
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

