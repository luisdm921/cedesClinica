"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const tabs = [
  "Especialidades Dentales",
  "Armonización Orofacial",
  "Medicina Estética y Bienestar",
] as const;
type Tab = (typeof tabs)[number];

export default function SlideSwitch() {
  const [active, setActive] = useState<Tab>("Armonización Orofacial");
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const idx = tabs.indexOf(active);
    const btn = container.children[idx + 1] as HTMLElement; // +1 to skip the pill span
    if (btn) {
      setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [active]);

  useEffect(() => {
    const container = mobileRef.current;
    if (!container) return;
    const idx = tabs.indexOf(active);
    if (idx === 0) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else if (idx === tabs.length - 1) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      const btn = container.children[idx] as HTMLElement;
      if (btn) {
        const scrollLeft =
          btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [active]);

  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-24">
      <Image
        src="/images/hero/LogoIndivudalTitulo.png"
        alt="Cedes Clínica"
        width={1136}
        height={350}
        className="mx-auto -mb-3 h-auto w-56 object-contain md:w-72"
      />
      <h2 className="mb-12 text-center text-[clamp(2.5rem,5vw,4rem)] font-bold text-black">
        Nuestras especialidades
      </h2>

      {/* Toggle — Desktop */}
      <div
        ref={containerRef}
        className="relative mx-auto mb-14 hidden w-fit rounded-full bg-ivory p-1 shadow-inner md:flex"
      >
        {/* Sliding pill */}
        <span
          className="absolute top-1 bottom-1 rounded-full bg-champagne shadow-md transition-all duration-300 ease-in-out"
          style={{ left: pill.left, width: pill.width }}
        />
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative z-10 flex cursor-pointer items-center gap-2 rounded-full px-10 py-3.5 text-sm font-semibold transition-colors duration-300 md:px-16 md:text-base ${
              active === tab
                ? "text-white"
                : "text-taupe-light hover:text-champagne-dark"
            }`}
          >
            <Image
              src="/images/hero/logoIndividual.png"
              alt=""
              width={318}
              height={209}
              className={`h-8 w-12 object-contain transition-all duration-300 ${
                active === tab
                  ? "brightness-0 invert"
                  : "brightness-0 opacity-40"
              }`}
            />
            {tab}
          </button>
        ))}
      </div>

      {/* Toggle — Mobile (segmented control) */}
      <div
        ref={mobileRef}
        className="mx-auto mb-10 flex w-full overflow-x-auto rounded-full bg-ivory p-1 shadow-inner md:hidden"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`flex-1 whitespace-nowrap rounded-full px-3 py-3 text-[11px] font-semibold transition-all duration-300 ${
              active === tab
                ? "bg-champagne text-white shadow-md"
                : "text-taupe-light"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl">
        {active === "Especialidades Dentales" && (
          <div className="animate-fade-in flex flex-wrap justify-center gap-6">
            <ServiceCard
              title="Odontología General y Restauradora"
              description="Resinas dentales, limpieza dental y blanqueamiento dental."
              icon="🦷"
              image="/images/services/odontologia.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Endodoncia"
              description="Tratamiento de conductos para salvar tus dientes."
              icon="🩺"
              image="/images/services/endodoncia.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Ortodoncia"
              description="Ortodoncia tradicional e invisible (Invisalign) para una sonrisa alineada."
              icon="😁"
              image="/images/services/ortodoncia.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Implantes Dentales"
              description="Implantes unitarios y rehabilitación de piezas perdidas."
              icon="🔩"
              image="/images/services/implantes.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Prótesis Dentales"
              description="Placas totales y parciales para restaurar tu sonrisa."
              icon="🦾"
              image="/images/services/protesis.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Odontopediatría"
              description="Atención dental para niños: limpiezas, coronas, pulpotomías y mantenedores de espacio."
              icon="👶"
              image="/images/services/odontopediatria.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Cirugía Oral"
              description="Extracción de muelas del juicio y gingivectomía."
              icon="🏥"
              image="/images/services/cirugia.png"
              color="bg-sage-dark"
            />
          </div>
        )}

        {active === "Armonización Orofacial" && (
          <div className="animate-fade-in flex flex-wrap justify-center gap-6">
            <ServiceCard
              title="Ácido Hialurónico"
              description="Relleno de labios, proyección de mentón, rinomodelación sin cirugía, corrección de líneas de marioneta y perfilado facial."
              icon=""
              image="/images/services/acido.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Toxina Botulínica (Botox)"
              description="Frente, patas de gallo, bunny lines, maseteros (bruxismo y afinamiento facial) y temporal."
              icon=""
              image="/images/services/botox.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Bioestimuladores de Colágeno"
              description="Sculptra y Radiesse para estimular la producción natural de colágeno."
              icon=""
              image="/images/services/colageno.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Técnica Real 360°"
              description="Armonización integral del rostro para un resultado natural y equilibrado."
              icon=""
              image="/images/services/tecnica_360.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Cirugía Estética Menor"
              description="Bichectomía para afinamiento y definición del contorno facial."
              icon=""
              image="/images/services/cirugia_menor.png"
              color="bg-sage-dark"
            />
          </div>
        )}

        {active === "Medicina Estética y Bienestar" && (
          <div className="animate-fade-in flex flex-wrap justify-center gap-6">
            <ServiceCard
              title="Rejuvenecimiento Facial"
              description="PDRN de salmón, Hollywood Peel y faciales personalizados."
              icon=""
              image="/images/services/rejuvenecimiento.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Rejuvenecimiento de Manos y Cuello"
              description="Tratamientos combinados para devolver juventud y firmeza."
              icon=""
              image="/images/services/rev_manos_cuello.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Tratamientos Corporales"
              description="Reducción de papada, grasa localizada, Ultracool, presoterapia y HIFU facial y corporal."
              icon=""
              image="/images/services/trata_corporal.png"
              color="bg-sage-dark"
            />
            <ServiceCard
              title="Terapias Complementarias"
              description="Auriculoterapia para control de peso, ansiedad y energía."
              icon=""
              image="/images/services/terapia.png"
              color="bg-sage-dark"
            />
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  image,
  color = "bg-champagne",
}: {
  title: string;
  description: string;
  icon: string;
  image?: string;
  color?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] h-52 w-full cursor-pointer sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl ${color} p-6 shadow-sm [backface-visibility:hidden]`}
        >
          {image && (
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="mb-3 h-16 w-16 object-contain"
            />
          )}
          <h3 className="text-center text-xl font-bold text-white">{title}</h3>
          <span className="mt-3 flex items-center gap-1 text-xs font-medium text-white/70">
            Ver más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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
          </span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-ivory p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="mb-3 text-center text-xl font-bold text-petroleum">
            {title}
          </h3>
          <p className="text-center text-sm leading-relaxed text-taupe-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
