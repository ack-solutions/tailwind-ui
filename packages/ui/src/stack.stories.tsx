import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Stack } from "./stack";

const meta: Meta = {
  title: "Components/Stack",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <>
      <Stack direction="row" gap={3} className="mb-6">
        <div className="size-10 rounded bg-primary/20" />
        <div className="size-10 rounded bg-secondary/20" />
        <div className="size-10 rounded bg-success/20" />
      </Stack>
      <Stack gap="gap-y-2">
        <div className="h-8 rounded bg-muted" />
        <div className="h-8 rounded bg-muted" />
      </Stack>
    </>
  ),
};

