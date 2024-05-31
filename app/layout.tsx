import type { Metadata } from "next";
import { Manrope as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer } from "../components/sections/footer";

import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <div className="flex flex-col min-h-screen">
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
