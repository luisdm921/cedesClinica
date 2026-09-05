import Image from "next/image";
import Link from "next/link";
import { getTreatment } from "@/content/treatments/catalog";
import type { DoctorProfileContent } from "@/content/doctor/types";
import type { TreatmentContent } from "@/content/treatments/types";
import { getWhatsAppUrl } from "@/lib/site";

type DoctorProfilePageProps = {
  profile: DoctorProfileContent;
};

export default function DoctorProfilePage({ profile }: DoctorProfilePageProps) {
  const treatments = profile.treatmentSlugs
    .map(getTreatment)
    .filter((item): item is TreatmentContent => Boolean(item));

  return (
    <main className="bg-ivory pt-37.5 max-md:pt-25">
      <section className="bg-petroleum text-ivory">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-105 md:min-h-155">
            <Image
              src={profile.hero.image.src}
              alt={profile.hero.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top"
              unoptimized
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-champagne-light">
              Perfil profesional
            </p>
            <h1 className="text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-none">
              {profile.hero.name}
            </h1>
            <p className="mt-5 text-lg text-champagne-light">
              {profile.hero.specialties.join(" · ")}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/85">
              {profile.hero.summary}
            </p>
            <a
              href={getWhatsAppUrl(profile.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-fit rounded-full bg-champagne px-7 py-3.5 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-champagne-dark"
            >
              Agendar valoración
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <article>
            <h2 className="mb-7 text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
              Trayectoria profesional
            </h2>
            <div className="space-y-5 text-lg leading-8 text-taupe-light">
              {profile.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="h-fit rounded-3xl bg-white p-8 shadow-[0_18px_50px_rgba(31,77,70,0.1)]">
            <h2 className="mb-5 text-3xl font-semibold text-petroleum">
              Formación
            </h2>
            <ul className="space-y-4">
              {profile.education.map((item) => (
                <li className="flex gap-3 leading-relaxed text-taupe-light" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-champagne" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
            Filosofía de atención
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-taupe-light">
            {profile.approach.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {profile.featuredTechnique && (
        <section className="bg-sage-dark px-6 py-20 text-ivory md:px-12 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold">
              {profile.featuredTechnique.name}
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-ivory/85">
              {profile.featuredTechnique.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {treatments.length > 0 && (
        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-7 text-3xl font-semibold text-petroleum">
              Tratamientos
            </h2>
            <div className="flex flex-wrap gap-4">
              {treatments.map((treatment) => (
                <Link
                  className="rounded-full border border-petroleum/20 bg-white px-6 py-3 font-semibold text-petroleum transition-colors hover:border-champagne hover:text-champagne-dark"
                  href={`/${treatment.slug}`}
                  key={treatment.slug}
                >
                  {treatment.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
