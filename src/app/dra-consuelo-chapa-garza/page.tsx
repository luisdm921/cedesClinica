import type { Metadata } from "next";
import DoctorProfilePage from "@/app/components/doctor/DoctorProfilePage";
import consueloChapa from "@/content/doctor/consuelo-chapa";
import { SITE_URL } from "@/lib/site";

const canonical = `${SITE_URL}/${consueloChapa.slug}`;

export const metadata: Metadata = {
  title: consueloChapa.seo.title,
  description: consueloChapa.seo.description,
  alternates: { canonical },
  openGraph: {
    title: consueloChapa.seo.title,
    description: consueloChapa.seo.description,
    url: canonical,
    type: "profile",
    locale: "es_MX",
    images: [consueloChapa.hero.image.src],
  },
  twitter: {
    card: "summary_large_image",
    title: consueloChapa.seo.title,
    description: consueloChapa.seo.description,
    images: [consueloChapa.hero.image.src],
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: consueloChapa.hero.name,
    jobTitle: consueloChapa.hero.specialties,
    description: consueloChapa.hero.summary,
    image: `${SITE_URL}${consueloChapa.hero.image.src}`,
    url: canonical,
    sameAs: consueloChapa.externalProfiles.map(({ url }) => url),
    worksFor: {
      "@type": "Dentist",
      name: consueloChapa.location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: consueloChapa.location.address,
        addressLocality: "Monterrey",
        addressRegion: "Nuevo León",
        addressCountry: "MX",
      },
    },
  },
};

export default function ConsueloChapaProfileRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <DoctorProfilePage profile={consueloChapa} />
    </>
  );
}
