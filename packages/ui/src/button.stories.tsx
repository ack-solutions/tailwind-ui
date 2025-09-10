import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button as any,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: "Polymorphic Button with variants and slots." } },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "error", "info"],
      description: "Semantic color palette",
    },
    fullWidth: { control: { type: "boolean" } },
    as: { control: { type: "text" } },
    className: { control: { type: "text" } },
    intent: { control: false },
    icon: { control: false },
    slots: { control: false },
    slotProps: { control: false },
  },
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    color: "primary",
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Intents: Story = {
  render: (args) => (
    <div className="flex gap-3 flex-wrap">
      <Button {...args} variant="solid">Solid</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-3 items-center">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex gap-3 flex-wrap">
      <Button {...args} color="primary">Primary</Button>
      <Button {...args} color="secondary">Secondary</Button>
      <Button {...args} color="success">Success</Button>
      <Button {...args} color="warning">Warning</Button>
      <Button {...args} color="error">Error</Button>
      <Button {...args} color="info">Info</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  render: (args) => (
    <div className="w-80">
      <Button {...args}>Full width</Button>
    </div>
  ),
};

export const WithClassName: Story = {
  args: { className: "rounded-xl shadow-lg" },
};

export const WithSlots: Story = {
  args: {
    slots: { root: "rounded-xl", label: "tracking-wide" },
  },
};

export const WithSlotProps: Story = {
  args: {
    slotProps: {
      root: { className: "border-2" },
      label: { className: "uppercase" },
      icon: { className: "size-5" },
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
      </svg>
    ),
  },
};

export const AsAnchor: Story = {
  render: (args) => (
    <Button {...args} as="a" href="#" variant="link">
      As link
    </Button>
  ),
};

export const Loading: Story = {
  render: (args) => (
    <Button {...args} disabled aria-busy="true">
      <svg className="mr-2 size-4 animate-spin" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
        <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
      Loading...
    </Button>
  ),
};
