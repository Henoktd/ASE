import type { Metadata } from "next";
import { site } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: SeoInput): Metadata {
  const canonical = path || "/";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: `${site.url}${canonical}`,
      title: `${title} | ${site.name}`,
      description,
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
      title: `${title} | ${site.name}`,
      description,
      images: [site.ogImage],
    },
  };
}
