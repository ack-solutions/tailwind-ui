import { Select } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function SelectPage() {
  return (
    <ComponentPage
      title="Select"
      description="Native select input styled with Tailwind tokens. Supports label, hint, invalid state, and sizes."
      apiReference={{ title: "API", items: [{ name: "Select", href: "#select-api" }] }}
    >
      <Example
        title="Basic usage"
        description="A labeled select with placeholder option."
        code={`import { Select } from "@ackplus/ui";

export function Example() {
  return (
    <Select label="Country" defaultValue="">
      <option value="" disabled>Select a country</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </Select>
  );
}`}
      >
        <Select label="Country" defaultValue="">
          <option value="" disabled>
            Select a country
          </option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
        </Select>
      </Example>

      <Example
        title="Sizes"
        description="Adjust height and spacing using the size prop."
        code={`<>
  <Select size="sm" label="Small" defaultValue="">
    <option value="" disabled>Select an option</option>
    <option>One</option>
    <option>Two</option>
  </Select>
  <Select size="md" label="Medium" defaultValue="">
    <option value="" disabled>Select an option</option>
    <option>One</option>
    <option>Two</option>
  </Select>
  <Select size="lg" label="Large" defaultValue="">
    <option value="" disabled>Select an option</option>
    <option>One</option>
    <option>Two</option>
  </Select>
</>`}
      >
        <Select size="sm" label="Small" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>One</option>
          <option>Two</option>
        </Select>
        <Select size="md" label="Medium" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>One</option>
          <option>Two</option>
        </Select>
        <Select size="lg" label="Large" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>One</option>
          <option>Two</option>
        </Select>
      </Example>
    </ComponentPage>
  );
}

