import type { Metadata } from "next";
import { Manrope as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Audiophile Shop",
  description: "Audiophile Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
