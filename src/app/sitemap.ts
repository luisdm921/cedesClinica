import type { MetadataRoute } from "next";
import { publishedTreatments } from "@/content/treatments/catalog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    ...publishedTreatments.map(({ slug }) => ({
      url: `${SITE_URL}/${slug}`,
    })),
  ];
}