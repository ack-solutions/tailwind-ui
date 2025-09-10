"use client";
import { Pagination } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";
import React from "react";

export default function PaginationPage() {
  return (
    <ComponentPage
      title="Pagination"
      description="Split content into multiple pages and navigate between them."
      apiReference={{ title: "API", items: [{ name: "Pagination", href: "#pagination-api" }] }}
    >
      <Example
        title="Basic"
        description="Controlled with page and onChange."
        code={`function Demo() {\n  const [page, setPage] = React.useState(3);\n  return <Pagination page={page} count={10} onChange={setPage} />;\n}`}
      >
        <ControlledPagination />
      </Example>
    </ComponentPage>
  );
}

function ControlledPagination() {
  const [page, setPage] = React.useState(3);
  return <Pagination page={page} count={10} onChange={setPage} />;
}

