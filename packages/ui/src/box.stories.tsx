import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Box } from "./box";

const meta: Meta = {
  title: "Components/Box",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Box className="rounded-md border border-border p-4 bg-card text-card-foreground">Box content</Box>
  ),
};

