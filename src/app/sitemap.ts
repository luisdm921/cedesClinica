import type { MetadataRoute } from "next";
import consueloChapa from "@/content/doctor/consuelo-chapa";
import { publishedTreatments } from "@/content/treatments/catalog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    ...(consueloChapa.status === "published" && consueloChapa.editorial.reviewed
      ? [{ url: `${SITE_URL}/${consueloChapa.slug}` }]
      : []),
    ...publishedTreatments.map(({ slug }) => ({
      url: `${SITE_URL}/${slug}`,
    })),
  ];
}
