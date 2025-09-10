import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { InputGroup, InputAddon, InputElement } from "./input-group";

const meta: Meta = {
  title: "Components/InputGroup",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <InputGroup>
      <InputAddon>https://</InputAddon>
      <InputElement placeholder="example.com" />
    </InputGroup>
  ),
};

