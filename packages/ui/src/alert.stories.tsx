import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert, type AlertProps } from "./alert";

const meta: Meta<AlertProps> = {
  title: "Components/Alert",
  component: Alert as any,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: { type: "select" }, options: ["solid", "soft", "outline"] },
    tone: { control: false },
    color: { control: { type: "select" }, options: ["brand", "primary", "secondary", "success", "warning", "error", "info"] },
  },
  args: {
    title: "Update available",
    children: "A new version of the app is ready to install.",
    variant: "soft",
    color: "info",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Playground: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12 }}>
      <Alert {...args} color="primary" title="Primary">Info tone alert</Alert>
      <Alert {...args} color="secondary" title="Secondary">Info tone alert</Alert>
      <Alert {...args} color="success" title="Success">Action was successful</Alert>
      <Alert {...args} color="warning" title="Warning">Please review your inputs</Alert>
      <Alert {...args} color="error" title="Error">Something went wrong</Alert>
      <Alert {...args} color="info" title="Info">FYI about this feature</Alert>
    </div>
  ),
};
