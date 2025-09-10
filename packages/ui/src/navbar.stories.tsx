import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Navbar, NavbarBrand, NavbarLinks, NavbarLink, NavbarSpacer, NavbarActions, NavbarMobileToggle, NavbarMobileDrawer } from "./navbar";
import { Button } from "./button";

const meta: Meta = {
  title: "Components/Navbar",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div>
      <Navbar>
        <NavbarBrand>Brand</NavbarBrand>
        <NavbarMobileToggle />
        <NavbarLinks>
          <NavbarLink href="#">Docs</NavbarLink>
          <NavbarLink href="#">Blog</NavbarLink>
          <NavbarLink href="#">GitHub</NavbarLink>
        </NavbarLinks>
        <NavbarSpacer />
        <NavbarActions>
          <Button variant="outline" size="sm">Login</Button>
        </NavbarActions>
        <NavbarMobileDrawer>
          <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Docs</a>
          <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Blog</a>
          <a className="block rounded px-3 py-2 hover:bg-muted" href="#">GitHub</a>
        </NavbarMobileDrawer>
      </Navbar>
      <div className="p-6">Page content…</div>
    </div>
  ),
};

