"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "swiper/css";

interface BeforeAfter {
  before: string;
  after: string;
  label: string;
  category: "dental" | "facial" | "wellness";
  aspect: "landscape" | "portrait";
  variant: "compare" | "single";
  image?: string;
}

/*
 * NOMENCLATURA DE IMÁGENES:
 * ─────────────────────────
 * Carpeta: /public/images/cases/{categoria}/
 *   - dental/
 *   - facial/
 *   - wellness/
 *
 * Nombre de archivos (par):
 *   {nombre}-before.jpeg
 *   {nombre}-after.jpeg
 *
 * Imagen única:
 *   {nombre}.jpeg
 *
 * Ejemplo:
 *   /public/images/cases/dental/ortodoncia-roberta-before.jpeg
 *   /public/images/cases/dental/ortodoncia-roberta-after.jpeg
 *   /public/images/cases/wellness/enzimas-reductivas.jpeg
 *
 * El "label" se genera del nombre: guiones → espacios, capitalizado.
 * Solo agrega pares de imágenes aquí abajo y aparecen automáticamente.
 */

const cases: BeforeAfter[] = [
  // DENTAL
  ...buildCases("dental", [
    "ortodoncia-separacion-entre-dientes",
    "ortodoncia-mordida-abierta",
    "resina",
  ]),
  ...buildCases("dental", ["limpieza", "placa-dental-superior"], "portrait"),
  // FACIAL
  ...buildCases(
    "facial",
    [
      "proyeccion-de-menton-con-acido-hialuronico",
      "rinomodelacion-con-acido-hialuronico",
      "rinomodelacion-acido-hialuronico",
      "perfiloplastia-con-acido-hialuronico",
      "aumento-de-menton-con-acido-hialuronico",
      "bichectomia",
    ],
    "portrait",
  ),
  ...buildCases("facial", ["labios-con-acido-hialuronico"], "landscape"),
  // WELLNESS
  ...buildSingleCases(
    "wellness",
    ["enzimas-reductivas", "enzimas-reductivas-2"],
    "portrait",
  ),
];

function buildCases(
  category: BeforeAfter["category"],
  names: string[],
  aspect: BeforeAfter["aspect"] = "landscape",
): BeforeAfter[] {
  return names.map((name) => ({
    before: `/images/cases/${category}/${name}-before.jpeg`,
    after: `/images/cases/${category}/${name}-after.jpeg`,
    label: formatCaseLabel(name),
    category,
    aspect,
    variant: "compare",
  }));
}

function buildSingleCases(
  category: BeforeAfter["category"],
  names: string[],
  aspect: BeforeAfter["aspect"] = "landscape",
): BeforeAfter[] {
  return names.map((name) => ({
    before: `/images/cases/${category}/${name}.jpeg`,
    after: `/images/cases/${category}/${name}.jpeg`,
    image: `/images/cases/${category}/${name}.jpeg`,
    label: formatCaseLabel(name),
    category,
    aspect,
    variant: "single",
  }));
}

function formatCaseLabel(name: string): string {
  const label = name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return label.replace(/\s2$/, "");
}

const filterTabs = [
  { label: "Especialidades Dentales", category: "dental" as const },
  { label: "Armonización Facial", category: "facial" as const },
  { label: "Medicina Estética y Bienestar", category: "wellness" as const },
];

export default function BeforeAfterCarousel() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setActiveFilter(isMobile ? "facial" : "dental");
    setMounted(true);
  }, []);

  const filtered = activeFilter
    ? cases.filter((c) => c.category === activeFilter)
    : cases;

  if (!mounted) return null;

  return (
    <section className="bg-ivory-dark px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.5rem)] font-bold text-petroleum">
            Resultados Reales
          </h2>
          <p className="text-lg text-taupe-light">
            Desliza para comparar el antes y después
          </p>
        </div>

        <div className="mx-auto mb-12 hidden w-fit rounded-full bg-ivory p-1 shadow-inner md:flex">
          {filterTabs.map((tab) => (
            <button
              key={tab.category}
              onClick={() =>
                setActiveFilter(
                  activeFilter === tab.category ? null : tab.category,
                )
              }
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.category
                  ? "bg-champagne text-white shadow-md"
                  : "text-taupe-light hover:text-champagne-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mb-10 flex w-full overflow-x-auto rounded-full bg-ivory p-1 shadow-inner md:hidden">
          {filterTabs.map((tab) => (
            <button
              key={tab.category}
              onClick={() =>
                setActiveFilter(
                  activeFilter === tab.category ? null : tab.category,
                )
              }
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] font-semibold transition-all duration-300 ${
                activeFilter === tab.category
                  ? "bg-champagne text-white shadow-md"
                  : "text-taupe-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <>
            <div className="relative flex items-center gap-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-petroleum text-white transition-colors hover:bg-petroleum-light md:flex"
                aria-label="Anterior"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="min-w-0 flex-1">
                <Swiper
                  key={activeFilter || "all"}
                  modules={[]}
                  allowTouchMove={false}
                  simulateTouch={false}
                  touchStartPreventDefault={false}
                  loop={filtered.length > 1}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  className="before-after-swiper"
                >
                  {filtered.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="px-2 pb-4">
                        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-taupe-light">
                          {item.label}
                        </p>
                        <div
                          className="relative overflow-hidden rounded-2xl shadow-xl"
                          onPointerDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          {item.aspect === "portrait" && (
                            <img
                              src={item.before}
                              aria-hidden
                              alt=""
                              className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-75"
                              style={{ transform: "scaleX(-1) scale(1.1)" }}
                            />
                          )}

                          {item.variant === "compare" ? (
                            <ReactCompareSlider
                              itemOne={
                                <ReactCompareSliderImage
                                  src={item.before}
                                  alt={`${item.label} — Antes`}
                                  style={{
                                    objectFit:
                                      item.aspect === "portrait"
                                        ? "contain"
                                        : "cover",
                                  }}
                                />
                              }
                              itemTwo={
                                <ReactCompareSliderImage
                                  src={item.after}
                                  alt={`${item.label} — Después`}
                                  style={{
                                    objectFit:
                                      item.aspect === "portrait"
                                        ? "contain"
                                        : "cover",
                                  }}
                                />
                              }
                              style={{
                                width: "100%",
                                height:
                                  item.aspect === "portrait"
                                    ? "460px"
                                    : "360px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                          ) : (
                            <div
                              className="relative flex items-center justify-center"
                              style={{
                                width: "100%",
                                height:
                                  item.aspect === "portrait"
                                    ? "460px"
                                    : "360px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            >
                              <img
                                src={item.image || item.before}
                                alt={item.label}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-petroleum text-white transition-colors hover:bg-petroleum-light md:flex"
                aria-label="Siguiente"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-petroleum text-white transition-colors hover:bg-petroleum-light"
                aria-label="Anterior"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-petroleum text-white transition-colors hover:bg-petroleum-light"
                aria-label="Siguiente"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <p className="py-16 text-center text-taupe-light">
            Próximamente casos en esta categoría
          </p>
        )}
      </div>

      <style jsx global>{`
        .before-after-swiper .swiper-wrapper {
          align-items: center;
        }
      `}</style>
    </section>
  );
}
