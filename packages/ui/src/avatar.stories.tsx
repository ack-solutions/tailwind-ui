import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar as any,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
  args: { size: "md" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args} src="https://avatars.githubusercontent.com/u/9919?v=4" alt="Avatar" />
  ),
};

export const WithFallback: Story = {
  render: (args) => <Avatar {...args}>AP</Avatar>,
};

