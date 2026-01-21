import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "BSS LogisQ | Warehouse Execution System for Automated Logistics",
  description: "Modular Warehouse Execution System for fully automated warehouses. Shorter project runtimes, Digital Twin, and no vendor lock-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {/* Footer will go here */}
      </body>
    </html>
  );
}
