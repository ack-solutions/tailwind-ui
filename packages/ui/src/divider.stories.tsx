import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Divider } from "./divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    orientation: { control: { type: "select" }, options: ["horizontal", "vertical"] },
    inset: { control: { type: "boolean" } },
  },
  args: { orientation: "horizontal", inset: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div>Above</div>
      <Divider {...args} />
      <div>Below</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex items-center gap-3">
      <div>Left</div>
      <Divider {...args} />
      <div>Right</div>
    </div>
  ),
};

