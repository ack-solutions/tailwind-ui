"use client";

import { Typography } from "@ackplus/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    description: "Quick start guide and setup instructions",
  },
  {
    title: "Installation",
    href: "/installation", 
    description: "How to install and configure the library",
  },
  {
    title: "Components",
    href: "/components",
    description: "Component library and examples",
    items: [
      {
        title: "Button",
        href: "/components/button",
        description: "Interactive button component with variants",
      },
      {
        title: "Badge",
        href: "/components/badge",
        description: "Small status and taxonomy labels",
      },
      {
        title: "Alert",
        href: "/components/alert",
        description: "Feedback banners and notifications",
      },
      {
        title: "Tabs",
        href: "/components/tabs",
        description: "Switch between views",
      },
      {
        title: "Breadcrumbs",
        href: "/components/breadcrumbs",
        description: "Hierarchy navigation",
      },
      {
        title: "Pagination",
        href: "/components/pagination",
        description: "Page navigation",
      },
      {
        title: "Tooltip",
        href: "/components/tooltip",
        description: "Contextual label on hover/focus",
      },
      {
        title: "Popover",
        href: "/components/popover",
        description: "Non-modal floating panel",
      },
      {
        title: "Dialog",
        href: "/components/dialog",
        description: "Modal overlay",
      },
      {
        title: "Dropdown Menu",
        href: "/components/dropdown-menu",
        description: "Actions in a menu",
      },
      {
        title: "AppBar",
        href: "/components/appbar",
        description: "Top navigation bar",
      },
      {
        title: "Toast",
        href: "/components/toast",
        description: "Global feedback messages",
      },
      {
        title: "Accordion",
        href: "/components/accordion",
        description: "Expandable sections",
      },
      {
        title: "Table",
        href: "/components/table",
        description: "Data display",
      },
      {
        title: "Drawer",
        href: "/components/drawer",
        description: "Slide-in panel",
      },
      {
        title: "Checkbox",
        href: "/components/checkbox",
        description: "Single or multi-select inputs",
      },
      {
        title: "Radio",
        href: "/components/radio",
        description: "Single selection from a set",
      },
      {
        title: "Switch",
        href: "/components/switch",
        description: "On/off toggle",
      },
      {
        title: "TextField",
        href: "/components/text-field",
        description: "Text input with label and hint",
      },
      {
        title: "Select",
        href: "/components/select",
        description: "Styled native select input",
      },
    ],
  },
  {
    title: "Theming",
    href: "/theming",
    description: "Customization and theme configuration",
  },
  {
    title: "Examples",
    href: "/examples",
    description: "Real-world usage examples",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(["Components"]);

  const toggleSection = (title: string) => {
    setOpenSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const isSectionOpen = (title: string) => {
    return openSections.includes(title) || navigation.some(item => 
      item.title === title && item.items?.some(subItem => isActive(subItem.href))
    );
  };

  return (
    <aside className={`w-64 border-r border-border bg-background/50 ${className || ""}`}>
      <div className="sticky top-0 h-screen overflow-y-auto p-6">
        <nav>
          <Typography variant="overline" color="muted" gutterBottom>
            Documentation
          </Typography>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.title}>
                <div>
                  {item.items ? (
                    <button
                      onClick={() => toggleSection(item.title)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-muted"
                    >
                      <span className={isActive(item.href) ? "text-primary" : "text-foreground"}>
                        {item.title}
                      </span>
                      <svg 
                        className={`h-4 w-4 transition-transform ${isSectionOpen(item.title) ? "rotate-90" : ""}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                        isActive(item.href) 
                          ? "bg-primary/10 text-primary border-l-2 border-primary" 
                          : "text-foreground"
                      }`}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
                {item.items && isSectionOpen(item.title) && (
                  <ul className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <a
                          href={subItem.href}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted ${
                            isActive(subItem.href)
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 pt-8 border-t border-border">
          <Typography variant="overline" color="muted" gutterBottom>
            Resources
          </Typography>
          <ul className="space-y-1">
            <li>
              <Link
                href="/storybook/index.html"
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Storybook
              </Link>
            </li>
            <li>
              <a
                href="https://github.com"
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
