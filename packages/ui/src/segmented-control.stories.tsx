import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SegmentedControl, Segment } from "./segmented-control";

const meta: Meta = {
  title: "Components/SegmentedControl",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <SegmentedControl defaultValue="monthly">
      <Segment value="monthly">Monthly</Segment>
      <Segment value="yearly">Yearly</Segment>
    </SegmentedControl>
  ),
};

