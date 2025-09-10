import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    padding: { control: { type: "select" }, options: ["none", "sm", "md", "lg"] },
    elevated: { control: { type: "boolean" } },
  },
  args: { padding: "md", elevated: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <div className="space-y-2">
        <div className="text-base font-semibold">Card title</div>
        <div className="text-sm text-muted-foreground">Some supporting content goes here.</div>
      </div>
    </Card>
  ),
};

