export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-ivory-light px-6 py-16 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-sage-light/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sage-dark shadow-sm">
            Nosotros
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-petroleum">
            Cuidamos tu sonrisa con un enfoque humano y elegante.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-justify text-base leading-relaxed text-taupe-light md:text-lg">
            En CEDES combinamos odontología, armonización facial y medicina
            estética para ofrecerte una experiencia integral, cómoda y diseñada
            a tu medida. Nuestro equipo te acompaña en cada etapa con atención
            cercana, diagnóstico preciso y tratamientos personalizados para que
            te sientas segura, escuchada y en confianza desde la primera
            consulta. Creemos en resultados naturales, funcionales y duraderos,
            siempre priorizando tu bienestar, tu salud y la armonía de tu
            sonrisa.
          </p>
        </div>
      </div>
    </section>
  );
}
