import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { SideNav } from "@/components/side-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UTOSS Dashboard",
  description: "University of Toronto Open Source Society prototype dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <Header />
          <div className="flex min-h-screen gap-6">
            <SideNav />
            <main className="w-full flex-1 pb-16 pt-6 lg:pt-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
