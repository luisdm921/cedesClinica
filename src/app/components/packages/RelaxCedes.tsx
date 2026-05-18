"use client";

import { useRef, useState } from "react";

type PackageCard = {
  id: string;
  badge: string;
  title: string;
  includes: string[];
  idealFor: string[];
  whatsappMessage: string;
  imageSrc: string;
  imageAlt: string;
};

const packageCards: PackageCard[] = [
  {
    id: "relax-cedes",
    badge: "Más popular",
    title: "Relax CEDES",
    includes: [
      "Botox en maseteros",
      "Acupuntura",
      "Guarda personalizada",
      "Medicamento antiinflamatorio y relajante muscular",
    ],
    idealFor: [
      "Bruxismo",
      "Dolor mandibular",
      "Dolor de cabeza",
      "Tensión facial",
      "Hipertrofia de maseteros",
    ],
    whatsappMessage: "Hola, me interesa el paquete Relax CEDES",
    imageSrc: "/images/services/CedexRelax.webp",
    imageAlt: "Relax CEDES - Tratamiento de bienestar facial",
  },
  {
    id: "metabolic-reset",
    badge: "Protocolo inyectable",
    title: "Real 360 Metabolic Reset",
    includes: [
      "Regulación metabólica",
      "Control de apetito",
      "Auriculoterapia",
      "Apoyo neuromodulador",
      "Acompañamiento personalizado",
    ],
    idealFor: [
      "No bajas de peso",
      "Inflamación constante",
      "Ansiedad por comer",
      "Resistencia al cambio",
      "Fatiga",
    ],
    whatsappMessage: "Hola, me interesa el paquete Metabolic Reset",
    imageSrc: "/images/services/metabolic-reset.webp",
    imageAlt: "Metabolic Reset - Programa de bienestar metabolico",
  },
];

export default function RelaxCedes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activePackage = packageCards[currentSlide];

  const goToPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? packageCards.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) =>
      prev === packageCards.length - 1 ? 0 : prev + 1,
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchEndX === undefined) return;

    const swipeDistance = touchEndX - touchStartX.current;
    const swipeThreshold = 50;

    if (swipeDistance <= -swipeThreshold) {
      goToNext();
    } else if (swipeDistance >= swipeThreshold) {
      goToPrev();
    }

    touchStartX.current = null;
  };

  return (
    <section className="bg-ivory px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.5rem)] font-bold text-petroleum">
            Paquetes Especiales
          </h2>
          <p className="text-lg text-taupe-light">
            Tratamientos integrales diseñados para tu bienestar
          </p>
        </div>

        {/* Controles del carrusel */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="text-sm font-medium text-taupe">
            {currentSlide + 1} / {packageCards.length}
          </div>
        </div>

        {/* Slide activo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Paquete anterior"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-petroleum shadow-lg transition-all hover:scale-105 hover:bg-sand/10 md:flex"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="min-w-0 flex-1 overflow-hidden rounded-3xl bg-white shadow-xl md:flex"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Lado izquierdo — Info */}
            <div className="flex flex-col justify-center p-10 md:flex-1 md:p-14">
              <span className="mb-2 inline-block w-fit rounded-full bg-champagne/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-champagne-dark">
                {activePackage.badge}
              </span>
              <h3 className="mb-6 text-3xl font-bold text-petroleum md:text-4xl">
                {activePackage.title}
              </h3>

              {/* Incluye */}
              <div className="mb-8">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-sage-dark">
                  Incluye
                </h4>
                <ul className="space-y-3">
                  {activePackage.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/30 text-xs text-sage-dark">
                        ✓
                      </span>
                      <span className="text-sm text-taupe">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal para */}
              <div className="mb-10">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-sage-dark">
                  Ideal para
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activePackage.idealFor.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sand-light bg-sand/10 px-4 py-1.5 text-xs font-medium text-taupe"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/528114110318?text=${encodeURIComponent(activePackage.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit self-center items-center gap-2.5 rounded-full bg-petroleum px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-petroleum-light md:self-start"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero este paquete
              </a>
            </div>

            {/* Lado derecho — Visual */}
            <div className="relative min-h-80 md:min-h-145 md:flex-1">
              <img
                src={activePackage.imageSrc}
                alt={activePackage.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Siguiente paquete"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-petroleum shadow-lg transition-all hover:scale-105 hover:bg-sand/10 md:flex"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {packageCards.map((pkg, idx) => (
            <button
              key={pkg.id}
              type="button"
              aria-label={`Ir a ${pkg.title}`}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide
                  ? "w-8 bg-petroleum"
                  : "w-2.5 bg-sand-dark/40 hover:bg-sand-dark/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
