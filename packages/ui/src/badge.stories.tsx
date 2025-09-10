import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge, type BadgeProps } from "./badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge as any,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: { type: "select" }, options: ["solid", "soft", "outline"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "warning", "error", "info"] },
  },
  args: { children: "Badge", variant: "soft", size: "md", color: "primary" },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-3 flex-wrap">
      <Badge {...args} color="primary">Primary</Badge>
      <Badge {...args} color="secondary">Secondary</Badge>
      <Badge {...args} color="success">Success</Badge>
      <Badge {...args} color="warning">Warning</Badge>
      <Badge {...args} color="error">Error</Badge>
      <Badge {...args} color="info">Info</Badge>
    </div>
  ),
};
