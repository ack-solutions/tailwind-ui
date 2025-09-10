import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox, type CheckboxProps } from "./checkbox";

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { label: "Accept terms", hint: "You can unsubscribe anytime" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Invalid: Story = { args: { invalid: true } };

