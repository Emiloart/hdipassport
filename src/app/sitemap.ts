import type { MetadataRoute } from "next";
import { pages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hdipassport.com";
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/how-it-works`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/get-started`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...Object.keys(pages).map((path) => ({
      url: `${base}/${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path.split("/").length === 1 ? 0.8 : 0.65,
    })),
  ];
}
