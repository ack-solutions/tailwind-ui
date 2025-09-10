"use client";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function DropdownMenuPage() {
  return (
    <ComponentPage
      title="Dropdown Menu"
      description="A contextual menu for actions. Built on the Popover primitive."
      apiReference={{ title: "API", items: [{ name: "DropdownMenu", href: "#dropdown-api" }] }}
    >
      <Example
        title="Basic"
        description="Click the trigger to open the menu."
        code={`<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuItem>Settings</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>Sign out</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-error">Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>
    </ComponentPage>
  );
}

