import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/applications",
  "/capabilities",
  "/contact",
  "/engage",
  "/engineering-environment",
  "/engineering-systems",
  "/insights",
  "/platform",
  "/projects",
  "/systems",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
