import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/dm-sans-var.ttf",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans-italic-var.ttf",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ASE | Engineering Systems Platform",
    template: "%s | ASE",
  },
  description:
    "ASE is the engineering systems platform advancing infrastructure design, optimization, and delivery across complex projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <div className="min-h-screen bg-ase-white text-ase-black">
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
