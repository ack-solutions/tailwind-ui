import { TextField, Typography } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function TextFieldPage() {
  return (
    <ComponentPage
      title="TextField"
      description="Text inputs let users enter and edit text. Includes label, hint, invalid state, and size options."
      apiReference={{ title: "API", items: [{ name: "TextField", href: "#textfield-api" }] }}
    >
      <Example
        title="Basic usage"
        description="A labeled text field with a placeholder."
        code={`import { TextField } from "@ackplus/ui";

export function Example() {
  return <TextField label="Email" placeholder="you@example.com" />;
}`}
      >
        <TextField label="Email" placeholder="you@example.com" />
      </Example>

      <Example
        title="Sizes"
        description="Adjust input height and padding using the size prop."
        code={`<>
  <TextField size="sm" label="Small" placeholder="Type..." />
  <TextField size="md" label="Medium" placeholder="Type..." />
  <TextField size="lg" label="Large" placeholder="Type..." />
</>`}
      >
        <TextField size="sm" label="Small" placeholder="Type..." />
        <TextField size="md" label="Medium" placeholder="Type..." />
        <TextField size="lg" label="Large" placeholder="Type..." />
      </Example>

      <Example
        title="Hint and invalid"
        description="Provide helpful hints and show validation errors using the invalid prop."
        code={`<>
  <TextField label="Username" hint="Use 3-16 characters" />
  <TextField label="Username" invalid hint="This field is required" />
</>`}
      >
        <TextField label="Username" hint="Use 3-16 characters" />
        <TextField label="Username" invalid hint="This field is required" />
      </Example>
    </ComponentPage>
  );
}

