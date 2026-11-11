import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/expertise", "/projects", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, priority: 0.6 })),
  ];
}
