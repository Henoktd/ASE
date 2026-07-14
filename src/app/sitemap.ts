import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/solutions",
  "/industries",
  "/engineering",
  "/manufacturing",
  "/project-delivery",
  "/projects",
  "/knowledge",
  "/about",
  "/engage",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
