import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Grid, GridItem } from "./grid";

const meta: Meta = {
  title: "Components/Grid",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Grid cols={12} gap={3}>
      <GridItem xs={12} md={6}>
        <div className="h-16 rounded bg-primary/20" />
      </GridItem>
      <GridItem xs={6} md={3}>
        <div className="h-16 rounded bg-secondary/20" />
      </GridItem>
      <GridItem xs={6} md={3}>
        <div className="h-16 rounded bg-success/20" />
      </GridItem>
    </Grid>
  ),
};

