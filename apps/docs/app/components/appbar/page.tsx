import { AppBar, AppBarBrand, AppBarActions, AppBarSpacer, Button } from "@ackplus/ui";
import { ComponentPage, Example } from "../../../components/ComponentLayout";

export default function AppBarPage() {
  return (
    <ComponentPage
      title="AppBar"
      description="A responsive application bar that stays fixed to the top."
      apiReference={{ title: "API", items: [{ name: "AppBar", href: "#appbar-api" }] }}
    >
      <Example
        title="Basic"
        description="Brand, spacer, and actions."
        code={`<AppBar>\n  <AppBarBrand>Brand</AppBarBrand>\n  <AppBarSpacer />\n  <AppBarActions>...</AppBarActions>\n</AppBar>`}
      >
        <div className="h-32">
          <AppBar>
            <AppBarBrand>Brand</AppBarBrand>
            <AppBarSpacer />
            <AppBarActions>
              <Button variant="outline" size="sm">Login</Button>
            </AppBarActions>
          </AppBar>
        </div>
      </Example>
    </ComponentPage>
  );
}

