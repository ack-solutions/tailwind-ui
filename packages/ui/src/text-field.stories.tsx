import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TextField, type TextFieldProps } from "./text-field";

const meta: Meta<TextFieldProps> = {
  title: "Components/TextField",
  component: TextField as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    fullWidth: { control: { type: "boolean" } },
    invalid: { control: { type: "boolean" } },
  },
  args: { size: "md", label: "Label", placeholder: "Type here" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithHint: Story = {
  args: { hint: "Helpful description" },
};

export const Invalid: Story = {
  args: { invalid: true, hint: "This field is required" },
};

export const WithIcons: Story = {
  args: {
    leading: <span>$</span>,
    trailing: <span>.00</span>,
  },
};
