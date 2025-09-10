import { Breadcrumbs, BreadcrumbItem } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function BreadcrumbsPage() {
  return (
    <ComponentPage
      title="Breadcrumbs"
      description="Show the user's current location within a hierarchy and navigate back."
      apiReference={{ title: "API", items: [{ name: "Breadcrumbs", href: "#breadcrumbs-api" }] }}
    >
      <Example
        title="Basic"
        description="Provide items as children; the last is marked current."
        code={`<Breadcrumbs>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Library</BreadcrumbItem>
  <span>Data</span>
</Breadcrumbs>`}
      >
        <Breadcrumbs>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Library</BreadcrumbItem>
          <span>Data</span>
        </Breadcrumbs>
      </Example>
    </ComponentPage>
  );
}

