"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function AccordionPage() {
  return (
    <ComponentPage
      title="Accordion"
      description="Toggle sections of related content with single or multiple expansion."
      apiReference={{ title: "API", items: [{ name: "Accordion", href: "#accordion-api" }] }}
    >
      <Example
        title="Basic"
        description="Single expansion by default."
        code={`<Accordion defaultValue=\"one\">\n  <AccordionItem value=\"one\">\n    <AccordionTrigger>Heading</AccordionTrigger>\n    <AccordionContent>Content</AccordionContent>\n  </AccordionItem>\n</Accordion>`}
      >
        <Accordion defaultValue="one">
          <AccordionItem value="one">
            <AccordionTrigger>First item</AccordionTrigger>
            <AccordionContent>Item one content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Second item</AccordionTrigger>
            <AccordionContent>Item two content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Example>
    </ComponentPage>
  );
}

