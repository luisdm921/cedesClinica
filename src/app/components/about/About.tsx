export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-ivory-light px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-champagne/30 to-transparent" />

      {/* Decorative background accent */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sage-light/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-5 inline-flex items-center rounded-full border border-sage-light/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-sage-dark shadow-sm">
            Nosotros
          </span>
          <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-tight text-petroleum">
            Cuidamos tu sonrisa con un enfoque humano y elegante.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-taupe-light md:text-lg">
            En CEDES Clínica creemos que la belleza, la salud y el bienestar
            comienzan con la confianza en uno mismo.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 - Intro */}
          <div className="group rounded-2xl border border-champagne/40 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage-light/20">
              <svg
                className="h-5 w-5 text-sage-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-semibold text-petroleum">
              Nuestra Esencia
            </h3>
            <p className="text-sm leading-relaxed text-taupe-light md:text-base">
              Somos una clínica especializada en odontología y armonización
              orofacial, enfocada en brindar una atención integral,
              personalizada y de alta calidad. Combinamos experiencia médica,
              tecnología de vanguardia y tratamientos diseñados a la medida de
              cada paciente, todo en un ambiente elegante, seguro y de absoluta
              confianza.
            </p>
          </div>

          {/* Card 2 - Salud Dental */}
          <div className="group rounded-2xl border border-champagne/40 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage-light/20">
              <svg
                className="h-5 w-5 text-sage-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-semibold text-petroleum">
              Salud Dental Familiar
            </h3>
            <p className="text-sm leading-relaxed text-taupe-light md:text-base">
              Ofrecemos servicios odontológicos integrales que van desde la
              odontopediatría e implantes dentales, hasta cirugía de terceros
              molares, prótesis, rehabilitación oral, estética dental,
              ortodoncia tradicional y ortodoncia invisible. Priorizamos siempre
              la funcionalidad y la salud de tu sonrisa.
            </p>
          </div>

          {/* Card 3 - Armonización */}
          <div className="group rounded-2xl border border-champagne/40 bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage-light/20">
              <svg
                className="h-5 w-5 text-sage-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-semibold text-petroleum">
              Armonización Orofacial de Autor
            </h3>
            <p className="text-sm leading-relaxed text-taupe-light md:text-base">
              Nos distinguimos por aplicar la técnica exclusiva REAL 360° de la
              Dra. Consuelo Chapa, creada para lograr resultados armónicos,
              naturales y equilibrados, respetando siempre la esencia única de
              tu rostro.
            </p>
          </div>
        </div>

        {/* Compromiso banner */}
        <div className="mt-10 rounded-2xl bg-petroleum/5 px-8 py-6 text-center">
          <p className="text-base leading-relaxed text-petroleum md:text-lg">
            <strong>Nuestro Compromiso:</strong> Brindar una atención
            profesional, segura y humana, ayudando a cada paciente a
            reencontrarse con su mejor versión.
          </p>
        </div>

        {/* Nuestro Equipo */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <span className="mb-5 inline-flex items-center rounded-full border border-sage-light/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-sage-dark shadow-sm">
              Nuestro Equipo
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight text-petroleum">
              Profesionales comprometidos con tu bienestar
            </h2>
          </div>

          {/* Dra. Consuelo Chapa — Card Principal */}
          <div className="mb-12">
            <div className="group flex flex-col items-center md:flex-row md:items-start md:text-left gap-8 rounded-3xl bg-white/60 p-8 shadow-lg ring-1 ring-champagne/40 w-full">
              <div className="shrink-0 h-64 w-64 overflow-hidden rounded-2xl border-2 border-champagne/50 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/images/team/Dra. Consuelo Chapa.webp"
                  alt="Dra. Consuelo Chapa"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-petroleum/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-petroleum">
                  Directora &amp; Fundadora
                </span>
                <h4 className="text-xl font-bold text-petroleum">
                  Dra. Consuelo Chapa
                </h4>
                <p className="mt-1 text-sm font-medium text-sage-dark">
                  Implantología Oral | Cirugía Bucal | Armonización Orofacial
                </p>
                <div className="mt-4 text-sm leading-relaxed text-taupe-light">
                  <p>
                    Más de 34 años de experiencia. Directora y Fundadora de
                    CEDES Clínica.
                  </p>
                  <p className="mt-2">
                    Formación avanzada: Implantología, Cirugía Bucal,
                    Periodoncia, Endodoncia y ATM.
                  </p>
                  <p className="mt-2">
                    Especialización internacional: Estética Facial (México) y
                    Armonización Orofacial (Brasil).
                  </p>
                  <p className="mt-2">
                    Tratamiento de Bruxismo y ATM. Creadora del protocolo
                    exclusivo RELAX 360:
                  </p>
                  <ul className="mt-1 list-disc list-inside">
                    <li>Guarda oclusal personalizada.</li>
                    <li>Toxina botulínica terapéutica en maseteros.</li>
                    <li>Auriculoterapia antiestrés.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Dr. Gilberto Zamarrón */}
            <div className="group flex flex-col items-center text-center rounded-2xl bg-white/60 p-6 shadow-lg ring-1 ring-champagne/40">
              <div className="mb-5 h-56 w-56 overflow-hidden rounded-2xl border-2 border-champagne/50 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/images/team/Dr. Gilberto Zmarron.webp"
                  alt="Dr. Gilberto Zamarrón"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h4 className="text-lg font-semibold text-petroleum">
                Dr. Gilberto Zamarrón
              </h4>
              <p className="mt-1 text-sm font-medium text-sage-dark">
                Ortodoncia &middot; Ortopedia Maxilar &middot; Invisalign&reg;
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-taupe-light">
                Especialista en ortodoncia y ortopedia maxilar, certificado en
                tratamientos Invisalign® y con amplia experiencia desde 1998,
                ofreciendo soluciones innovadoras y personalizadas para sonrisas
                funcionales, estéticas y saludables.
              </p>
            </div>

            {/* Dra. Alejandra Pineda Chávez */}
            <div className="group flex flex-col items-center text-center rounded-2xl bg-white/60 p-6 shadow-lg ring-1 ring-champagne/40">
              <div className="mb-5 h-56 w-56 overflow-hidden rounded-2xl border-2 border-champagne/50 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/images/team/Dra. Alejandra Pineda.webp"
                  alt="Dra. Alejandra Pineda Chávez"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h4 className="text-lg font-semibold text-petroleum">
                Dra. Alejandra Pineda Chávez
              </h4>
              <p className="mt-1 text-sm font-medium text-sage-dark">
                Endodoncia
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-taupe-light">
                Especialista en endodoncia, con amplia experiencia desde 1991,
                enfocada en preservar la salud dental mediante tratamientos
                precisos, profesionales y de alta calidad.
              </p>
            </div>

            {/* Dra. Denisse Torres */}
            <div className="group flex flex-col items-center text-center rounded-2xl bg-white/60 p-6 shadow-lg ring-1 ring-champagne/40">
              <div className="mb-5 h-56 w-56 overflow-hidden rounded-2xl border-2 border-champagne/50 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/images/team/Dra. Denisse Torres.webp"
                  alt="Dra. Denisse Torres"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h4 className="text-lg font-semibold text-petroleum">
                Dra. Denisse Torres
              </h4>
              <p className="mt-1 text-sm font-medium text-sage-dark">
                Odontología General &middot; Rehabilitación Oral &middot;
                Estética
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-taupe-light">
                Odontóloga general con formación en rehabilitación oral,
                especializada en operatoria, estética y atención de trastornos
                de la ATM. Brinda una atención de calidad priorizando la salud,
                función y estética de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
