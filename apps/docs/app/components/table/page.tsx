import { Table, THead, TBody, Tr, Th, Td } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function TablePage() {
  return (
    <ComponentPage
      title="Table"
      description="Basic styled table primitives you can compose."
      apiReference={{ title: "API", items: [{ name: "Table", href: "#table-api" }] }}
    >
      <Example
        title="Basic"
        description="Header, body, and rows."
        code={`<Table>\n  <THead>...</THead>\n  <TBody>...</TBody>\n</Table>`}
      >
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
      </Example>
    </ComponentPage>
  );
}

