"use client";
import { Button, Typography } from "@ackplus/ui";
import { ComponentPage, Example, PropsTable } from "../../../components/ComponentLayout";

export default function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take and are typically placed throughout your UI."
      apiReference={{
        title: "API",
        items: [
          { name: "Button", href: "#button-api" }
        ]
      }}
    >
      {/* Basic Button */}
      <Example
        title="Basic button"
        description="The Button comes with four variants: solid (default), outline, ghost, and link."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function BasicButtons() {
  return (
    <>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </>
  );
}`}
      >
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </Example>

      {/* Solid Button */}
      <Example
        title="Solid button"
        description="Solid buttons are high-emphasis, distinguished by their use of fill color. They contain actions that are primary to your app."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function SolidButtons() {
  return (
    <>
      <Button variant="solid">Primary</Button>
      <Button variant="solid" disabled>Disabled</Button>
      <Button variant="solid" as="a" href="#solid-buttons">Link</Button>
    </>
  );
}`}
      >
        <Button variant="solid">Primary</Button>
        <Button variant="solid" disabled>Disabled</Button>
        <Button variant="solid" as="a" href="#solid-buttons">Link</Button>
      </Example>

      {/* Outline Button */}
      <Example
        title="Outline button"
        description="Outline buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function OutlineButtons() {
  return (
    <>
      <Button variant="outline">Primary</Button>
      <Button variant="outline" disabled>Disabled</Button>
      <Button variant="outline" as="a" href="#outline-buttons">Link</Button>
    </>
  );
}`}
      >
        <Button variant="outline">Primary</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" as="a" href="#outline-buttons">Link</Button>
      </Example>

      {/* Ghost Button */}
      <Example
        title="Ghost button"
        description="Ghost buttons are low-emphasis buttons. They are typically used for less-pronounced actions."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function GhostButtons() {
  return (
    <>
      <Button variant="ghost">Primary</Button>
      <Button variant="ghost" disabled>Disabled</Button>
      <Button variant="ghost" as="a" href="#ghost-buttons">Link</Button>
    </>
  );
}`}
      >
        <Button variant="ghost">Primary</Button>
        <Button variant="ghost" disabled>Disabled</Button>
        <Button variant="ghost" as="a" href="#ghost-buttons">Link</Button>
      </Example>

      {/* Colors */}
      <Example
        title="Color"
        description="Use the color prop to apply semantic colors from your theme palette."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function ColorButtons() {
  return (
    <>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="solid" color="success">Success</Button>
      <Button variant="outline" color="warning">Warning</Button>
      <Button variant="ghost" color="error">Error</Button>
      <Button color="info">Info</Button>
    </>
  );
}`}
      >
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="solid" color="success">Success</Button>
        <Button variant="outline" color="warning">Warning</Button>
        <Button variant="ghost" color="error">Error</Button>
        <Button color="info">Info</Button>
      </Example>

      {/* Sizes */}
      <Example
        title="Sizes"
        description="For larger or smaller buttons, use the size prop."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function ButtonSizes() {
  return (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  );
}`}
      >
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Example>

      {/* Full Width */}
      <Example
        title="Full width"
        description="The fullWidth prop makes the button take up the full width of its container."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function FullWidthButton() {
  return (
    <div className="w-full max-w-md">
      <Button fullWidth>Full width button</Button>
    </div>
  );
}`}
      >
        <div className="w-full max-w-md">
          <Button fullWidth>Full width button</Button>
        </div>
      </Example>

      {/* Handling clicks */}
      <Example
        title="Handling clicks"
        description="All components accept an onClick handler that is applied to the root DOM element."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function ClickableButton() {
  return (
    <Button
      onClick={() => {
        alert('Button clicked!');
      }}
    >
      Click me
    </Button>
  );
}`}
      >
        <Button
          onClick={() => {
            alert('Button clicked!');
          }}
        >
          Click me
        </Button>
      </Example>

      {/* Polymorphic Usage */}
      <Example
        title="Polymorphic usage"
        description="Use the 'as' prop to render the button as any HTML element or React component."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function PolymorphicButtons() {
  return (
    <>
      <Button as="a" href="https://example.com" target="_blank">
        External Link
      </Button>
      <Button as="div" role="button" tabIndex={0}>
        Div Button
      </Button>
    </>
  );
}`}
      >
        <Button as="a" href="https://example.com" target="_blank">
          External Link
        </Button>
        <Button as="div" role="button" tabIndex={0}>
          Div Button
        </Button>
      </Example>

      {/* Color Combinations */}
      <Example
        title="Variant and color combinations"
        description="Combine different variants with semantic colors for various use cases."
        code={`import { Button } from "@ackplus/tailwind-ui";

export function VariantColorCombinations() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Solid variants */}
      <Button variant="solid" color="primary">Primary Solid</Button>
      <Button variant="solid" color="success">Success Solid</Button>
      <Button variant="solid" color="warning">Warning Solid</Button>
      <Button variant="solid" color="error">Error Solid</Button>
      
      {/* Outline variants */}
      <Button variant="outline" color="primary">Primary Outline</Button>
      <Button variant="outline" color="success">Success Outline</Button>
      <Button variant="outline" color="warning">Warning Outline</Button>
      <Button variant="outline" color="error">Error Outline</Button>
      
      {/* Ghost variants */}
      <Button variant="ghost" color="primary">Primary Ghost</Button>
      <Button variant="ghost" color="success">Success Ghost</Button>
      <Button variant="ghost" color="warning">Warning Ghost</Button>
      <Button variant="ghost" color="error">Error Ghost</Button>
      
      {/* Link variants */}
      <Button variant="link" color="primary">Primary Link</Button>
      <Button variant="link" color="success">Success Link</Button>
      <Button variant="link" color="warning">Warning Link</Button>
      <Button variant="link" color="error">Error Link</Button>
    </div>
  );
}`}
      >
        <div className="grid grid-cols-4 gap-4 w-full">
          {/* Solid variants */}
          <Button variant="solid" color="primary">Primary Solid</Button>
          <Button variant="solid" color="success">Success Solid</Button>
          <Button variant="solid" color="warning">Warning Solid</Button>
          <Button variant="solid" color="error">Error Solid</Button>
          
          {/* Outline variants */}
          <Button variant="outline" color="primary">Primary Outline</Button>
          <Button variant="outline" color="success">Success Outline</Button>
          <Button variant="outline" color="warning">Warning Outline</Button>
          <Button variant="outline" color="error">Error Outline</Button>
          
          {/* Ghost variants */}
          <Button variant="ghost" color="primary">Primary Ghost</Button>
          <Button variant="ghost" color="success">Success Ghost</Button>
          <Button variant="ghost" color="warning">Warning Ghost</Button>
          <Button variant="ghost" color="error">Error Ghost</Button>
          
          {/* Link variants */}
          <Button variant="link" color="primary">Primary Link</Button>
          <Button variant="link" color="success">Success Link</Button>
          <Button variant="link" color="warning">Warning Link</Button>
          <Button variant="link" color="error">Error Link</Button>
        </div>
      </Example>

      {/* Props Table */}
      <PropsTable
        title="Button Props"
        props={[
          {
            name: "variant",
            type: "'solid' | 'outline' | 'ghost' | 'link'",
            default: "'solid'",
            description: "The variant to use for the button appearance."
          },
          {
            name: "size",
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: "The size of the button."
          },
          {
            name: "color",
            type: "'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
            default: "'primary'",
            description: "The color of the button. Uses semantic colors from theme."
          },
          {
            name: "fullWidth",
            type: "boolean",
            default: "false",
            description: "If true, the button will take up the full width of its container."
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "If true, the button will be disabled."
          },
          {
            name: "as",
            type: "React.ElementType",
            default: "'button'",
            description: "The component or element type to render as."
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes to apply to the button."
          },
          {
            name: "children",
            type: "React.ReactNode",
            description: "The content of the button."
          },
          {
            name: "onClick",
            type: "(event: React.MouseEvent) => void",
            description: "Callback fired when the button is clicked."
          }
        ]}
      />
    </ComponentPage>
  );
}
