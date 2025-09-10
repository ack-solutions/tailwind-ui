import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./breadcrumbs";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <span>Data</span>
    </Breadcrumbs>
  ),
};

