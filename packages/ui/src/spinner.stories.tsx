import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Spinner } from "./spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner as any,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
  },
  args: { size: "md" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

