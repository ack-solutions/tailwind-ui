import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { IconButton } from "./icon-button";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton as any,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: { type: "select" }, options: ["solid", "outline", "ghost"] },
    color: { control: { type: "select" }, options: ["primary", "secondary", "success", "warning", "error", "info"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
  args: { variant: "outline", color: "primary", size: "md" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <IconButton {...args}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </IconButton>
  ),
};

