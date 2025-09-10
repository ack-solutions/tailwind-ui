import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

const meta: Meta = {
  title: "Components/Popover",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger className="rounded-md border border-border bg-background px-3 py-1.5 text-sm">Open Popover</PopoverTrigger>
      <PopoverContent>
        <div className="text-sm">Popover content</div>
      </PopoverContent>
    </Popover>
  ),
};

