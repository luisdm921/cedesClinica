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
  id: string;
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
 *   {nombre}-before.webp
 *   {nombre}-after.webp
 *
 * Imagen única:
 *   {nombre}.webp
 *
 * Ejemplo:
 *   /public/images/cases/dental/ortodoncia-roberta-before.webp
 *   /public/images/cases/dental/ortodoncia-roberta-after.webp
 *   /public/images/cases/wellness/enzimas-reductivas.webp
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
    "ortodoncia-por-apiñamiento",
  ]),
  ...buildCases("dental", ["placa-dental-superior"], "portrait"),
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

  // WELLNESS
  ...buildSingleCases(
    "wellness",
    ["enzimas-reductivas", "enzimas-reductivas-2"],
    "portrait",
  ),

  ...buildSingleCases("facial", ["PDRN-de-salmon-con-dermapeen"], "landscape"),

  ...buildSingleCases("dental", ["gingivectomia"], "portrait"),
];

function buildCases(
  category: BeforeAfter["category"],
  names: string[],
  aspect: BeforeAfter["aspect"] = "landscape",
): BeforeAfter[] {
  return names.map((name) => ({
    id: name,
    before: `/images/cases/${category}/${name}-before.webp`,
    after: `/images/cases/${category}/${name}-after.webp`,
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
    id: name,
    before: `/images/cases/${category}/${name}.webp`,
    after: `/images/cases/${category}/${name}.webp`,
    image: `/images/cases/${category}/${name}.webp`,
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

  if (name === "PDRN-de-salmon-con-dermapeen") {
    return "PDRN de Salmón con Dermapeen";
  }

  return label.replace(/\s2$/, "");
}

const filterTabs = [
  { label: "Especialidades Dentales", category: "dental" as const },
  { label: "Armonización Facial", category: "facial" as const },
  { label: "Medicina Estética y Bienestar", category: "wellness" as const },
];

const compareCalibration: Record<
  string,
  {
    beforeScale?: number;
    afterScale?: number;
    beforePosition?: string;
    afterPosition?: string;
    mobileFit?: "contain" | "cover";
  }
> = {
  // Ajuste fino para igualar la percepción de escala entre ambos lados.
  "ortodoncia-separacion-entre-dientes": {
    afterScale: 0.92,
  },
  "ortodoncia-mordida-abierta": {
    beforeScale: 1.24,
    afterScale: 0.99,
    beforePosition: "70% 52%",
    afterPosition: "45% 53%",
  },
  "ortodoncia-por-apiñamiento": {
    beforeScale: 1.34,
    afterScale: 1.07,
    beforePosition: "58% 54%",
    afterPosition: "46% 57%",
  },
  "PDRN-de-salmon-con-dermapeen": {
    mobileFit: "cover",
  },
  bichectomia: {
    beforeScale: 1.28,
    afterScale: 1.18,
    beforePosition: "48% 45%",
    afterPosition: "52% 45%",
  },
};

export default function BeforeAfterCarousel() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [mobileFade, setMobileFade] = useState({ left: false, right: false });
  const swiperRef = useRef<SwiperType | null>(null);
  const mobileTabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobileViewport(isMobile);
    setActiveFilter(isMobile ? "facial" : "dental");
    setMounted(true);

    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = mobileTabsRef.current;
    if (!container) return;

    const updateFade = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;
      const canScroll = maxScrollLeft > 1;

      setMobileFade({
        left: canScroll && scrollLeft > 1,
        right: canScroll && scrollLeft < maxScrollLeft - 1,
      });
    };

    updateFade();
    container.addEventListener("scroll", updateFade, { passive: true });
    window.addEventListener("resize", updateFade);

    return () => {
      container.removeEventListener("scroll", updateFade);
      window.removeEventListener("resize", updateFade);
    };
  }, [mounted]);

  useEffect(() => {
    const container = mobileTabsRef.current;
    if (!container || !isMobileViewport || !activeFilter) return;

    const idx = filterTabs.findIndex((tab) => tab.category === activeFilter);
    if (idx < 0) return;

    if (idx === 0) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (idx === filterTabs.length - 1) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      return;
    }

    const btn = container.children[idx] as HTMLElement;
    if (!btn) return;

    const targetLeft =
      btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeFilter, isMobileViewport]);

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
              onClick={() => setActiveFilter(tab.category)}
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

        <div className="relative mx-auto mb-10 md:hidden">
          <div
            ref={mobileTabsRef}
            className="flex w-full overflow-x-auto rounded-full bg-ivory p-1 shadow-inner"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.category}
                onClick={() => setActiveFilter(tab.category)}
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

          {mobileFade.left && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 rounded-l-full bg-linear-to-r from-ivory to-transparent" />
          )}
          {mobileFade.right && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-full bg-linear-to-l from-ivory to-transparent" />
          )}
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
                      {(() => {
                        const calibration = compareCalibration[item.id] || {};
                        const mobileCalibration = isMobileViewport
                          ? calibration
                          : {};
                        const useContain =
                          item.aspect === "portrait" || isMobileViewport;
                        const objectFit = isMobileViewport
                          ? mobileCalibration.mobileFit || "contain"
                          : item.aspect === "portrait"
                            ? "contain"
                            : "cover";
                        const defaultPosition =
                          item.aspect === "portrait" ? "center top" : "center";

                        return (
                          <div className="px-2 pb-4">
                            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-taupe-light">
                              {item.label}
                            </p>

                            <div
                              className="relative overflow-hidden rounded-2xl bg-ivory-dark"
                              onPointerDown={(e) => e.stopPropagation()}
                              onTouchStart={(e) => e.stopPropagation()}
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-2 bg-linear-to-b from-white/10 to-transparent" />
                              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2 bg-linear-to-t from-white/10 to-transparent" />

                              {item.variant === "compare" ? (
                                <ReactCompareSlider
                                  itemOne={
                                    <ReactCompareSliderImage
                                      src={item.before}
                                      alt={`${item.label} — Antes`}
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit,
                                        objectPosition:
                                          mobileCalibration.beforePosition ||
                                          defaultPosition,
                                        transform: `scale(${mobileCalibration.beforeScale || 1})`,
                                        transformOrigin: "center",
                                      }}
                                    />
                                  }
                                  itemTwo={
                                    <ReactCompareSliderImage
                                      src={item.after}
                                      alt={`${item.label} — Después`}
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit,
                                        objectPosition:
                                          mobileCalibration.afterPosition ||
                                          defaultPosition,
                                        transform: `scale(${mobileCalibration.afterScale || 1})`,
                                        transformOrigin: "center",
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
                                    className={`h-full w-full ${
                                      item.id === "PDRN-de-salmon-con-dermapeen" && isMobileViewport
                                        ? "object-cover object-center"
                                        : item.aspect === "portrait" || isMobileViewport
                                          ? "object-contain object-top"
                                          : "object-cover object-center"
                                    }`}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </SwiperSlide>
                  ))}

                  {/* CTA Redes Sociales — último slide */}
                  <SwiperSlide>
                    <div className="px-2 pb-4">
                      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-taupe-light">
                        Síguenos
                      </p>
                      <div className="relative flex h-90 w-full items-center justify-center overflow-hidden rounded-2xl shadow-xl">
                        {/* Gradient background: Facebook blue → Instagram rose */}
                        <div className="absolute inset-0 bg-linear-to-r from-[#1877F2] via-[#833ab4] to-[#E1306C]" />
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
                          <p className="text-2xl font-bold text-white">
                            Ve más
                          </p>

                          <div className="flex gap-1 md:gap-4">
                            {/* Instagram */}
                            <a
                              href="https://www.instagram.com/cedesclinica"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#E1306C]/40"
                            >
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                              </svg>
                              Instagram
                            </a>

                            {/* Facebook */}
                            <a
                              href="https://www.facebook.com/share/1Py2tsFh44/?mibextid=wwXIfr"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#1877F2]/40"
                            >
                              <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                              Facebook
                            </a>
                          </div>

                          <p className="text-xs text-white/40">@cedesclinica</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
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

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-8 z-20 -translate-y-1/2 p-1 text-black transition-colors hover:text-black md:hidden"
                aria-label="Anterior"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.25}
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
                className="absolute top-1/2 -right-8 z-20 -translate-y-1/2 p-1 text-black transition-colors hover:text-black md:hidden"
                aria-label="Siguiente"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.25}
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
