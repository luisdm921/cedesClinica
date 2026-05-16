"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

/*
 * AGREGAR VIDEOS:
 * ───────────────
 * 1. Coloca tus archivos en /public/videos/ con extensión .mp4
 * 2. Agrega un objeto al array `videos` con:
 *    { src: "/videos/nombre.mp4", label: "Descripción breve" }
 *
 * El último slide (CTA de TikTok) se agrega automáticamente.
 */
const videos: { src: string; label: string }[] = [
  {
    src: "/videos/labios-con-acido-hialuronico.mp4",
    label: "Labios con Ácido Hialurónico",
  },
  { src: "/videos/limpieza-dental.mp4", label: "Limpieza Dental" },
  {
    src: "/videos/puente-sobre-implantes.mp4",
    label: "Puente sobre Implantes",
  },
];

const TIKTOK_URL =
  "https://www.tiktok.com/@dra.consuelochapa?_r=1&_t=ZS-96N6Kbr4O0Y";

export default function VideoCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  // Track which video is playing so only one plays at a time
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  function handlePlay(idx: number) {
    // Pause any other playing video
    videoRefs.current.forEach((v, i) => {
      if (v && i !== idx) {
        v.pause();
      }
    });
    setPlayingIdx(idx);
  }

  function handlePause() {
    setPlayingIdx(null);
  }

  const totalSlides = videos.length + 1; // +1 for TikTok CTA

  return (
    <section className="bg-ivory px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.5rem)] font-bold text-petroleum">
            Así trabajamos
          </h2>
          <p className="text-lg text-taupe-light">
            Mira nuestros procedimientos y resultados
          </p>
        </div>

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

          <div className="min-w-0 flex-1 overflow-hidden">
            <Swiper
              modules={[]}
              allowTouchMove
              grabCursor
              loop={totalSlides > 1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={() => {
                // Pause all videos on slide change
                videoRefs.current.forEach((v) => v?.pause());
                setPlayingIdx(null);
              }}
            >
              {/* Video slides */}
              {videos.map((video, idx) => (
                <SwiperSlide key={idx}>
                  <div className="px-2 pb-4">
                    <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-taupe-light">
                      {video.label}
                    </p>
                    <div className="relative overflow-hidden rounded-2xl bg-petroleum-dark shadow-xl">
                      <video
                        ref={(el) => {
                          videoRefs.current[idx] = el;
                        }}
                        src={video.src}
                        playsInline
                        controls
                        preload="metadata"
                        onPlay={() => handlePlay(idx)}
                        onPause={handlePause}
                        className="h-115 w-full object-contain"
                        style={{ background: "#0a1a22" }}
                      />
                      {/* Play overlay — shown only when not playing */}
                      {playingIdx !== idx && (
                        <button
                          className="absolute inset-0 flex items-center justify-center"
                          onClick={() => {
                            videoRefs.current[idx]?.play();
                          }}
                          aria-label="Reproducir"
                        >
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne/90 shadow-lg backdrop-blur-sm transition-transform hover:scale-105">
                            <svg
                              className="ml-1 h-7 w-7 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* CTA TikTok — último slide */}
              <SwiperSlide>
                <div className="px-2 pb-4">
                  <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-taupe-light">
                    Síguenos
                  </p>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-115 w-full items-center justify-center overflow-hidden rounded-2xl bg-petroleum-dark shadow-xl"
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#010101] via-[#1a1a2e] to-[#16213e]" />

                    {/* Decorative blurred blobs */}
                    <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#fe2c55]/20 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#25f4ee]/20 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
                      {/* TikTok logo */}
                      <svg
                        className="h-16 w-16 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.41a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.84z" />
                      </svg>

                      <div>
                        <p className="mb-2 text-3xl font-bold text-white">
                          Ve más en TikTok
                        </p>
                        <p className="text-base text-white/60">
                          @dra.consuelochapa
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                        Visitar perfil
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
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
        </div>
      </div>
    </section>
  );
}
