import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

const meta: Meta = {
  title: "Components/Accordion",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Accordion defaultValue="one">
      <AccordionItem value="one">
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          Nulla facilisi. Integer lacinia sollicitudin massa.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

