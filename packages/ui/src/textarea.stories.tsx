import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Textarea, type TextareaProps } from "./textarea";

const meta: Meta<TextareaProps> = {
  title: "Components/Textarea",
  component: Textarea as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    fullWidth: { control: { type: "boolean" } },
    invalid: { control: { type: "boolean" } },
  },
  args: { size: "md", label: "Message", placeholder: "Write something..." },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithHint: Story = {
  args: { hint: "Keep it concise" },
};

export const Invalid: Story = {
  args: { invalid: true, hint: "Please provide more details" },
};
