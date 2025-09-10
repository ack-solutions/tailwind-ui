import { Badge, Button } from "@ackplus/ui";
import { ComponentPage, Example, PropsTable } from "../../../components/ComponentLayout";

export default function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      description="Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other characters, that appears in proximity to another object."
      apiReference={{
        title: "API",
        items: [
          { name: "Badge", href: "#badge-api" }
        ]
      }}
    >
      {/* Basic Badge */}
      <Example
        title="Basic badge"
        description="The Badge comes with three variants: soft (default), solid, and outline."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function BasicBadges() {
  return (
    <>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
    </>
  );
}`}
      >
        <Badge variant="soft">Soft</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge variant="outline">Outline</Badge>
      </Example>

      {/* Soft Badge */}
      <Example
        title="Soft badge"
        description="Soft badges have a subtle background color and are the default variant."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function SoftBadges() {
  return (
    <>
      <Badge variant="soft">Default</Badge>
      <Badge variant="soft" color="success">Success</Badge>
      <Badge variant="soft" color="warning">Warning</Badge>
      <Badge variant="soft" color="error">Error</Badge>
    </>
  );
}`}
      >
        <Badge variant="soft">Default</Badge>
        <Badge variant="soft" color="success">Success</Badge>
        <Badge variant="soft" color="warning">Warning</Badge>
        <Badge variant="soft" color="error">Error</Badge>
      </Example>

      {/* Solid Badge */}
      <Example
        title="Solid badge"
        description="Solid badges have a strong background color and white text."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function SolidBadges() {
  return (
    <>
      <Badge variant="solid">Default</Badge>
      <Badge variant="solid" color="success">Success</Badge>
      <Badge variant="solid" color="warning">Warning</Badge>
      <Badge variant="solid" color="error">Error</Badge>
    </>
  );
}`}
      >
        <Badge variant="solid">Default</Badge>
        <Badge variant="solid" color="success">Success</Badge>
        <Badge variant="solid" color="warning">Warning</Badge>
        <Badge variant="solid" color="error">Error</Badge>
      </Example>

      {/* Outline Badge */}
      <Example
        title="Outline badge"
        description="Outline badges have a transparent background with a colored border and text."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function OutlineBadges() {
  return (
    <>
      <Badge variant="outline">Default</Badge>
      <Badge variant="outline" color="success">Success</Badge>
      <Badge variant="outline" color="warning">Warning</Badge>
      <Badge variant="outline" color="error">Error</Badge>
    </>
  );
}`}
      >
        <Badge variant="outline">Default</Badge>
        <Badge variant="outline" color="success">Success</Badge>
        <Badge variant="outline" color="warning">Warning</Badge>
        <Badge variant="outline" color="error">Error</Badge>
      </Example>

      {/* Colors */}
      <Example
        title="Color"
        description="Use the color prop to apply semantic colors from your theme palette."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function ColorBadges() {
  return (
    <>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="info">Info</Badge>
    </>
  );
}`}
      >
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="info">Info</Badge>
      </Example>

      {/* Sizes */}
      <Example
        title="Sizes"
        description="For larger or smaller badges, use the size prop."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function BadgeSizes() {
  return (
    <>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </>
  );
}`}
      >
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </Example>

      {/* Status Examples */}
      <Example
        title="Status indicators"
        description="Common use cases for badges as status indicators in your application."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function StatusBadges() {
  return (
    <>
      <Badge variant="solid" color="success">Active</Badge>
      <Badge variant="soft" color="warning">Pending</Badge>
      <Badge variant="outline" color="error">Inactive</Badge>
      <Badge variant="soft" color="info">Beta</Badge>
      <Badge variant="solid" color="secondary">New</Badge>
    </>
  );
}`}
      >
        <Badge variant="solid" color="success">Active</Badge>
        <Badge variant="soft" color="warning">Pending</Badge>
        <Badge variant="outline" color="error">Inactive</Badge>
        <Badge variant="soft" color="info">Beta</Badge>
        <Badge variant="solid" color="secondary">New</Badge>
      </Example>

      {/* With Components */}
      <Example
        title="Combined with other components"
        description="Badges work well when combined with other components like buttons and text."
        code={`import { Badge, Button } from "@ackplus/tailwind-ui";

export function BadgeWithComponents() {
  return (
    <div className="space-y-4">
      {/* With Button */}
      <div className="flex items-center gap-2">
        <Button variant="outline">Messages</Button>
        <Badge variant="solid" color="error">3</Badge>
      </div>
      
      {/* As part of a list */}
      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 border rounded">
          <span>Task 1</span>
          <Badge variant="soft" color="success">Complete</Badge>
        </div>
        <div className="flex items-center justify-between p-3 border rounded">
          <span>Task 2</span>
          <Badge variant="soft" color="warning">In Progress</Badge>
        </div>
        <div className="flex items-center justify-between p-3 border rounded">
          <span>Task 3</span>
          <Badge variant="outline" color="error">Blocked</Badge>
        </div>
      </div>
    </div>
  );
}`}
      >
        <div className="space-y-4 w-full">
          {/* With Button */}
          <div className="flex items-center gap-2">
            <Button variant="outline">Messages</Button>
            <Badge variant="solid" color="error">3</Badge>
          </div>
          
          {/* As part of a list */}
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border rounded">
              <span>Task 1</span>
              <Badge variant="soft" color="success">Complete</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span>Task 2</span>
              <Badge variant="soft" color="warning">In Progress</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span>Task 3</span>
              <Badge variant="outline" color="error">Blocked</Badge>
            </div>
          </div>
        </div>
      </Example>

      {/* Variant Color Combinations */}
      <Example
        title="All variant and color combinations"
        description="A comprehensive overview of all possible badge combinations."
        code={`import { Badge } from "@ackplus/tailwind-ui";

export function AllBadgeCombinations() {
  const colors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;
  const variants = ['soft', 'solid', 'outline'] as const;
  
  return (
    <div className="space-y-6">
      {variants.map(variant => (
        <div key={variant} className="space-y-2">
          <h4 className="text-sm font-semibold capitalize">{variant}</h4>
          <div className="flex flex-wrap gap-2">
            {colors.map(color => (
              <Badge key={color} variant={variant} color={color}>
                {color}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}`}
      >
        <div className="space-y-6 w-full">
          {(['soft', 'solid', 'outline'] as const).map(variant => (
            <div key={variant} className="space-y-2">
              <h4 className="text-sm font-semibold capitalize">{variant}</h4>
              <div className="flex flex-wrap gap-2">
                {(['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const).map(color => (
                  <Badge key={color} variant={variant} color={color}>
                    {color}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Example>

      {/* Props Table */}
      <PropsTable
        title="Badge Props"
        props={[
          {
            name: "variant",
            type: "'soft' | 'solid' | 'outline'",
            default: "'soft'",
            description: "The variant to use for the badge appearance."
          },
          {
            name: "size",
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: "The size of the badge."
          },
          {
            name: "color",
            type: "'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
            default: "'primary'",
            description: "The color of the badge. Uses semantic colors from theme."
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes to apply to the badge."
          },
          {
            name: "children",
            type: "React.ReactNode",
            description: "The content of the badge."
          }
        ]}
      />
    </ComponentPage>
  );
}