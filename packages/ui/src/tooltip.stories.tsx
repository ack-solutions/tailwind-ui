import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tooltip } from "./tooltip";

const meta: Meta = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Tooltip content="More info">
      <button className="rounded-md border border-border bg-background px-3 py-1.5 text-sm">Hover me</button>
    </Tooltip>
  ),
};

