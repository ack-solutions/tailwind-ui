import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Tailwind UI Demo",
  description: "Interactive examples for AckPlus UI components",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
