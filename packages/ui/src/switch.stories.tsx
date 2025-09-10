import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch, type SwitchProps } from "./switch";

const meta: Meta<SwitchProps> = {
  title: "Components/Switch",
  component: Switch as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  args: { label: "Enable notifications" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

