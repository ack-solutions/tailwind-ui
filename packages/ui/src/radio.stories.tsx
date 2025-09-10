import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Radio, type RadioProps } from "./radio";

const meta: Meta<RadioProps> = {
  title: "Components/Radio",
  component: Radio as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  render: () => (
    <div className="space-y-2">
      <Radio name="plan" label="Basic" defaultChecked />
      <Radio name="plan" label="Pro" />
      <Radio name="plan" label="Enterprise" />
    </div>
  ),
};

