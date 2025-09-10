import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Pagination } from "./pagination";

const meta: Meta = {
  title: "Components/Pagination",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [page, setPage] = React.useState(3);
    return <Pagination page={page} count={10} onChange={setPage} />;
  },
};

