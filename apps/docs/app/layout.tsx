"use client";

import { ThemeProvider } from "@ackplus/ui";
import { SiteHeader } from "../components/SiteHeader";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider theme="light">
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-8 max-w-5xl mx-auto w-full">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}