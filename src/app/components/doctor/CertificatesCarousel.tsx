"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

type Certificate = {
  filename: string;
  title: string;
};

const certificates: Certificate[] = [
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.01 PM.jpeg",
    title: "Especialidad en Estética Facial y Corporal · Universidad Kirei",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.01 PM (1).jpeg",
    title:
      "Apostilla y registro de la especialización en Armonización Orofacial",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.01 PM (2).jpeg",
    title: "Especialización en Armonización Orofacial · UNINGÁ · 2,655 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.56 PM.jpeg",
    title: "Afiliación al Colegio de Cirujanos Dentistas Mexicanos AOF",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.58 PM.jpeg",
    title: "Diplomado en Medicina Estética · Secretaría de Educación Pública",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM.jpeg",
    title: "Diplomado en Estetocosmetología · FES Zaragoza, UNAM · 580 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (7).jpeg",
    title: "Diplomado en Implantología y Rehabilitación Oral · 120 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (9).jpeg",
    title: "Diplomado en Endodoncia · 200 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.56 PM (1).jpeg",
    title: "Certificado de competencias en células troncales mesenquimales",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (1).jpeg",
    title:
      "NYU/Biomet 3i Global Forum on Advanced Implant Dentistry · 30 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (10).jpeg",
    title:
      "Reconocimiento en cirugía maxilofacial y casos clínicos con implantes",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (4).jpeg",
    title:
      "XIII Congreso Multidisciplinario · Colegio de Odontólogos de Nuevo León",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (12).jpeg",
    title: "Segundo Congreso de Cirugía Bucal y Maxilofacial · UANL",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (5).jpeg",
    title: "Odontología adhesiva indirecta · IPS Empress 2",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (11).jpeg",
    title: "Estética Dental Avanzada · Dentsply Clinical Education",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM.jpeg",
    title: "Congreso Mundial de Medicina Antienvejecimiento",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (2).jpeg",
    title: "CISMM · Congreso Internacional SPA, Médico y Micropigmentación",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (3).jpeg",
    title: "Curso-taller de Lipopapada · 6 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (6).jpeg",
    title: "Curso-taller de Bichectomía · 8 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.58 PM (1).jpeg",
    title: "Diploma en Mesoterapia Estética · 8 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (4).jpeg",
    title:
      "Actualización en complicaciones quirúrgicas y prostodónticas en implantología",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (5).jpeg",
    title: "Hilos PDO y enzimas · 30 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (6).jpeg",
    title: "Anestesiología, control y tratamiento del dolor · Dentsply",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (8).jpeg",
    title: "Ciclo de conferencias del Posgrado de Odontología Infantil",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.39.59 PM (7).jpeg",
    title: "Workshop Noninvasive · Mesoterapia transdérmica",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (1).jpeg",
    title: "VI Jornada Científica de Colegios Filiales · 12 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (2).jpeg",
    title: "Aparatología y cosmecéutica · 5 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (3).jpeg",
    title: "Bioestimulación con plasma rico en plaquetas · 6 horas",
  },
  {
    filename: "WhatsApp Image 2026-10-14 at 8.40.00 PM (8).jpeg",
    title: "Láser Nd:YAG en la práctica diaria",
  },
];

export default function CertificatesCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      aria-label="Certificados y diplomas de la Dra. Consuelo Chapa Garza"
      className="bg-ivory px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sage-dark">
              Formación profesional
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold text-petroleum">
              Certificados y diplomas
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p
              aria-live="polite"
              className="min-w-16 text-center text-sm font-semibold tabular-nums text-taupe-light"
            >
              {activeIndex + 1} / {certificates.length}
            </p>
            <button
              aria-label="Certificado anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-petroleum/20 text-petroleum transition-colors hover:bg-petroleum hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === 0}
              onClick={() => swiperRef.current?.slidePrev()}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              aria-label="Siguiente certificado"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-petroleum/20 text-petroleum transition-colors hover:bg-petroleum hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === certificates.length - 1}
              onClick={() => swiperRef.current?.slideNext()}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          allowTouchMove
          modules={[]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
        >
          {certificates.map((certificate, index) => {
            const src = `/images/certificados/${encodeURI(certificate.filename)}`;

            return (
              <SwiperSlide key={certificate.filename}>
                <figure className="overflow-hidden rounded-2xl border border-petroleum/10 bg-white shadow-[0_18px_50px_rgba(31,77,70,0.1)]">
                  <a
                    aria-label={`Abrir documento: ${certificate.title}`}
                    className="block focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-petroleum"
                    href={src}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="relative aspect-3/4 bg-white md:aspect-16/10">
                      <Image
                        alt={certificate.title}
                        className="object-contain p-2 md:p-4"
                        fill
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 90vw, 800px"
                        src={src}
                        unoptimized
                      />
                    </div>
                  </a>
                  <figcaption className="border-t border-petroleum/10 px-5 py-4 text-center text-sm font-medium leading-relaxed text-petroleum md:text-base">
                    {certificate.title}
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
