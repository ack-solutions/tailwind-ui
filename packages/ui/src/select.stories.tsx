import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Select, type SelectProps } from "./select";

const meta: Meta<SelectProps> = {
  title: "Components/Select",
  component: Select as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    fullWidth: { control: { type: "boolean" } },
    invalid: { control: { type: "boolean" } },
  },
  args: { size: "md", label: "Country" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Select {...args} defaultValue="">
      <option value="" disabled>
        Select a country
      </option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </Select>
  ),
};

export const Invalid: Story = {
  args: { invalid: true, hint: "Please select a value" },
  render: Playground.render,
};
