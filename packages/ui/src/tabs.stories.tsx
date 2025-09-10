import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta = {
  title: "Components/Tabs",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Tabs defaultValue="one">
      <TabsList>
        <TabsTrigger value="one">One</TabsTrigger>
        <TabsTrigger value="two">Two</TabsTrigger>
        <TabsTrigger value="three">Three</TabsTrigger>
      </TabsList>
      <TabsContent value="one">Tab one content</TabsContent>
      <TabsContent value="two">Tab two content</TabsContent>
      <TabsContent value="three">Tab three content</TabsContent>
    </Tabs>
  ),
};

