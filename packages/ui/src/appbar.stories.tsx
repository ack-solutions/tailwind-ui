import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AppBar, AppBarBrand, AppBarSpacer, AppBarActions } from "./appbar";

const meta: Meta = {
  title: "Components/AppBar",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div>
      <AppBar>
        <AppBarBrand>
          <span className="text-primary">AckPlus</span>
        </AppBarBrand>
        <AppBarSpacer />
        <AppBarActions>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#">Docs</a>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="#">GitHub</a>
        </AppBarActions>
      </AppBar>
      <div className="p-6">Content</div>
    </div>
  ),
};

