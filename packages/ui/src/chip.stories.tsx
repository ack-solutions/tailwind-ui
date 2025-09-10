import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Chip } from "./chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip as any,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: { type: "select" }, options: ["solid", "soft", "outline"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "warning", "error", "info"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
  args: { variant: "soft", color: "primary", size: "md" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Chip {...args}>Chip</Chip>,
};

export const Closable: Story = {
  render: (args) => <Chip {...args} onClose={() => alert("Closed")}>Closable</Chip>,
};

