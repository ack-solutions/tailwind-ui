import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Table, THead, TBody, Tr, Th, Td } from "./table";

const meta: Meta = {
  title: "Components/Table",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Table>
      <THead>
        <Tr>
          <Th>Name</Th>
          <Th>Status</Th>
          <Th>Role</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Alice</Td>
          <Td>Active</Td>
          <Td>Admin</Td>
        </Tr>
        <Tr>
          <Td>Bob</Td>
          <Td>Invited</Td>
          <Td>Member</Td>
        </Tr>
      </TBody>
    </Table>
  ),
};

