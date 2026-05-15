"use client";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-petroleum px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-[clamp(2rem,4vw,3.5rem)] font-bold text-ivory">
            Contáctanos
          </h2>
          <p className="text-lg text-sage-light">Estamos para atenderte</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info de contacto */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="h-6 w-6 text-sage-light"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-champagne">
                  WhatsApp
                </h3>
                <a
                  href="https://wa.me/528114110318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-ivory transition-colors hover:text-champagne-light"
                >
                  811 411 0318
                </a>
              </div>
            </div>

            {/* Teléfonos */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="h-6 w-6 text-sage-light"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-champagne">
                  Teléfonos
                </h3>
                <a
                  href="tel:8183454560"
                  className="block text-lg text-ivory transition-colors hover:text-champagne-light"
                >
                  818 345 4560
                </a>
                <a
                  href="tel:8183400098"
                  className="block text-lg text-ivory transition-colors hover:text-champagne-light"
                >
                  818 340 0098
                </a>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="h-6 w-6 text-sage-light"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-champagne">
                  Dirección
                </h3>
                <p className="text-lg text-ivory">Aramberri 1828 Pte.</p>
                <p className="text-ivory/70">
                  Centro de Monterrey, N.L. C.P. 64000
                </p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="h-6 w-6 text-sage-light"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-champagne">
                  Horario de atención
                </h3>
                <p className="text-ivory">Lunes a Viernes: 9:00 am – 7:00 pm</p>
                <p className="text-ivory">Sábados: 9:00 am – 4:00 pm</p>
                <p className="mt-1 text-sm text-sage-light">Horario corrido</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0!2d-100.316!3d25.669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfe1e7b3e5f5%3A0x0!2sAramberri%201828%20Pte%2C%20Centro%2C%2064000%20Monterrey%2C%20N.L.!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              className="min-h-100 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación CEDES Clínica - Aramberri 1828 Pte, Centro, Monterrey"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
