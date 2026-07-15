import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Cursor from "@/components/fx/Cursor";
import ScrollFX from "@/components/fx/ScrollFX";
import SmoothScroll from "@/components/fx/SmoothScroll";
import { site } from "@/lib/site";

const dmSans = localFont({
  src: "./fonts/dm-sans-var.woff2",
  style: "normal",
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ASE | Engineering Better Ways to Build",
    template: "%s | ASE",
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    "ASE",
    "ASE International",
    "ASE Building Systems",
    "engineered construction systems",
    "structural systems",
    "post-tensioning systems",
    "housing systems",
    "digital engineering",
    "value engineering",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    siteName: site.fullName,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.fullName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.fullName,
        alternateName: site.name,
        url: site.url,
        logo: `${site.url}${site.ogImage}`,
        description: site.description,
      },
      {
        "@type": "WebSite",
        name: site.fullName,
        url: site.url,
        description: site.description,
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScroll />
        <ScrollFX />
        <Cursor />
        <div className="min-h-screen bg-ase-paper text-ase-black">
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
