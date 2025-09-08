import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { Sidebar } from "../components/Sidebar";

export const metadata = {
  title: "AckPlus UI - Modern React Components",
  description: "A comprehensive Tailwind v4-first React component library with runtime tokens and variants",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-text antialiased">
        <SiteHeader />
        <div className="flex">
          <Sidebar className="hidden lg:block" />
          <main className="flex-1 max-w-none min-w-0">
            <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
              {children}
            </div>
          </main>
        </div>
        
        {/* Mobile menu overlay for future enhancement */}
        <div id="mobile-sidebar-overlay" className="hidden"></div>
      </body>
    </html>
  );
}
