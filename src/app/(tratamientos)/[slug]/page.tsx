import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TreatmentPage from "@/app/components/treatment/TreatmentPage";
import {
  getTreatment,
  publishedTreatments,
} from "@/content/treatments/catalog";
import { SITE_URL } from "@/lib/site";

type TreatmentRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedTreatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {};
  }

  const canonical = `${SITE_URL}/${treatment.slug}`;

  return {
    title: treatment.seo.title,
    description: treatment.seo.description,
    alternates: { canonical },
    openGraph: {
      title: treatment.seo.title,
      description: treatment.seo.description,
      url: canonical,
      type: "website",
      locale: "es_MX",
      images: treatment.hero.image ? [treatment.hero.image.src] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.seo.title,
      description: treatment.seo.description,
      images: treatment.hero.image ? [treatment.hero.image.src] : undefined,
    },
  };
}

export default async function TreatmentRoute({ params }: TreatmentRouteProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: treatment.name,
    description: treatment.seo.description,
    url: `${SITE_URL}/${treatment.slug}`,
    provider: {
      "@type": "Dentist",
      name: "CEDES Clínica",
      url: SITE_URL,
      telephone: "+52 81 1411 0318",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Aramberri 1828 Pte.",
        addressLocality: "Monterrey",
        addressRegion: "Nuevo León",
        postalCode: "64000",
        addressCountry: "MX",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <TreatmentPage treatment={treatment} />
    </>
  );
}
