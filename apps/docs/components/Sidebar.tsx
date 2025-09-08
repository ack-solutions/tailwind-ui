"use client";

import { Typography } from "@ackplus/ui";
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
    <aside className={`w-64 border-r border-border bg-surface/50 ${className || ""}`}>
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
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-surface-2"
                    >
                      <span className={isActive(item.href) ? "text-primary" : "text-text"}>
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
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-2 ${
                        isActive(item.href) 
                          ? "bg-primary/10 text-primary border-l-2 border-primary" 
                          : "text-text"
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
                          className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-surface-2 ${
                            isActive(subItem.href)
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted hover:text-text"
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
              <a
                href="/storybook/index.html"
                className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-text"
              >
                Storybook
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="block rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-text"
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
