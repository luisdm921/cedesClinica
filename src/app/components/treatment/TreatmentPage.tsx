import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/site";
import { getTreatment } from "@/content/treatments/catalog";
import type { TreatmentContent } from "@/content/treatments/types";

type TreatmentPageProps = {
  treatment: TreatmentContent;
};

export default function TreatmentPage({ treatment }: TreatmentPageProps) {
  const whatsappUrl = getWhatsAppUrl(treatment.whatsappMessage);
  const relatedTreatments = (treatment.relatedTreatmentSlugs ?? [])
    .map(getTreatment)
    .filter((item): item is TreatmentContent => Boolean(item));

  return (
    <main className="min-w-0 bg-ivory pt-37.5 max-md:pt-25">
      <section className="bg-petroleum text-ivory">
        <div className="mx-auto flex max-w-190 flex-col items-center px-6 py-12 text-center md:px-10 md:py-14">
          <nav className="mb-6 text-sm text-ivory/70" aria-label="Breadcrumb">
            <Link className="transition-colors hover:text-champagne" href="/">
              Inicio
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{treatment.name}</span>
          </nav>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-champagne-light">
            {treatment.hero.eyebrow ?? "Tratamientos CEDES"}
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.98]">
            {treatment.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/85">
            {treatment.hero.summary}
          </p>
          <a
            className="mt-7 inline-flex rounded-full bg-champagne px-7 py-3.5 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-champagne-dark"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar valoración
          </a>
        </div>
      </section>

      {treatment.images && treatment.images.length > 0 && (
        <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto min-w-0 max-w-6xl">
            <h2 className="mb-10 text-center text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
              Atención dental infantil en CEDES
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {treatment.images.map((image) => (
                <figure
                  className="overflow-hidden rounded-3xl bg-ivory"
                  key={image.src}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid min-w-0 max-w-6xl gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-champagne-dark">
              Conoce el tratamiento
            </p>
            <h2 className="mb-7 text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
              ¿Qué es {treatment.name.toLocaleLowerCase("es-MX")}?
            </h2>
            <div className="space-y-5 text-base leading-8 text-taupe-light md:text-lg">
              {treatment.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="h-fit min-w-0 rounded-3xl bg-white p-7 shadow-[0_18px_50px_rgba(31,77,70,0.1)] md:p-9">
            <h2 className="mb-6 text-3xl font-semibold text-petroleum">
              Atención CEDES
            </h2>
            <ul className="space-y-5">
              {treatment.differentiators.map((item) => (
                <li
                  className="flex gap-3 leading-relaxed text-taupe-light"
                  key={item}
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-champagne"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {treatment.process && treatment.process.length > 0 && (
        <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
          <div className="mx-auto min-w-0 max-w-6xl">
            <h2 className="mb-10 text-center text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
              ¿Cómo es el proceso?
            </h2>
            <ol className="grid gap-6 md:grid-cols-3">
              {treatment.process.map((step, index) => (
                <li className="rounded-2xl bg-ivory p-7" key={step.title}>
                  <span className="text-sm font-bold text-champagne-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-petroleum">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-taupe-light">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {treatment.cases && treatment.cases.length > 0 && (
        <section className="px-6 py-20 md:px-12 lg:px-24">
          <div className="mx-auto min-w-0 max-w-6xl">
            <h2 className="mb-10 text-center text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
              Casos y resultados
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {treatment.cases.map((item) => (
                <article
                  className="overflow-hidden rounded-3xl bg-white shadow-lg"
                  key={item.title}
                >
                  <div className="grid grid-cols-2">
                    {[item.before, item.after].map((image, index) => (
                      <figure key={image.src}>
                        <div className="relative aspect-2/1">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <figcaption className="bg-petroleum px-3 py-2 text-center text-sm text-ivory">
                          {index === 0 ? "Antes" : "Después"}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <h3 className="p-5 text-center text-2xl font-semibold text-petroleum">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {treatment.faq.map((item) => (
              <details
                className="group rounded-2xl bg-ivory p-6"
                key={item.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-petroleum">
                  {item.question}
                  <span className="text-2xl font-light text-champagne transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-taupe-light">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedTreatments.length > 0 && (
        <section className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-7 text-3xl font-semibold text-petroleum">
              Tratamientos relacionados
            </h2>
            <div className="flex flex-wrap gap-4">
              {relatedTreatments.map((item) => (
                <Link
                  className="rounded-full border border-petroleum/20 bg-white px-6 py-3 font-semibold text-petroleum transition-colors hover:border-champagne hover:text-champagne-dark"
                  href={`/${item.slug}`}
                  key={item.slug}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-petroleum px-6 py-20 text-center text-ivory md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold">
            Da el siguiente paso con una valoración
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Nuestro equipo revisará tu caso y te explicará las alternativas de
            atención disponibles.
          </p>
          <a
            className="mt-8 inline-flex rounded-full bg-champagne px-8 py-3.5 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-champagne-dark"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
