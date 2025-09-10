import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress as any,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  args: { value: 42 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

