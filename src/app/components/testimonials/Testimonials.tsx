const reviews = [
  {
    name: "Sely Chrz.",
    rating: 5,
    text: "Me encanto el trato, mis expectativas fueron superadas al 100 la doctora un amor y al pendiente siempre, ya no la voy a dejar.",
  },
  {
    name: "Moises Jair Garcia Miss A.",
    rating: 5,
    text: "Muy buenas instalaciones, y el trato es muy amable.",
  },
  {
    name: "Edith Carvajal.",
    rating: 5,
    text: "Me hice limpieza dental, me encanto el servico",
  },
] as const;

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-linear-to-br from-ivory via-white to-sand-light/25 px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute -top-20 -left-24 h-56 w-56 rounded-full bg-champagne/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-20 h-64 w-64 rounded-full bg-petroleum/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-champagne/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-champagne-dark shadow-sm backdrop-blur">
              Testimonios
            </span>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-none text-petroleum">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-taupe-light md:text-lg">
              Una experiencia clínica pensada para que cada visita se sienta
              clara, cuidadosa y confiable.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={`group relative overflow-hidden rounded-4xl border border-white/80 bg-white/90 p-6 shadow-[0_14px_38px_rgba(52,46,41,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${
                index === 0 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white via-transparent to-champagne/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petroleum text-sm font-bold text-white shadow-sm">
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-taupe-dark">
                      {review.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-champagne-dark">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} />
                  ))}
                </div>
              </div>

              <p className="relative mt-5 text-sm leading-7 text-taupe-light md:text-[0.98rem]">
                <span className="absolute -left-1 -top-1 text-4xl leading-none text-champagne/30">
                  “
                </span>
                <span className="relative">{review.text}</span>
              </p>

              <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                <span className="h-2 w-2 rounded-full bg-sage-dark" />
                Reseña verificada
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://share.google/Eu9zco1KbwAPYiuKk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-taupe-light underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-petroleum"
            aria-label="Ver más reseñas en Google"
          >
            Ver más reseñas en Google
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M12 2.25l2.906 5.888 6.494.944-4.7 4.582 1.109 6.467L12 17.943l-5.809 3.188 1.109-6.467-4.7-4.582 6.494-.944L12 2.25z" />
    </svg>
  );
}
