export const plannedTreatments = [
  { name: "Implantes dentales", slug: "implantes-dentales" },
  {
    name: "Cirugía de terceros molares",
    slug: "cirugia-terceros-molares",
  },
  { name: "Invisalign", slug: "invisalign" },
  { name: "Ortodoncia", slug: "ortodoncia" },
  { name: "Atención dental infantil", slug: "odontopediatria" },
  {
    name: "Toxina botulínica facial",
    slug: "toxina-botulinica-facial",
  },
  {
    name: "Ácido hialurónico facial",
    slug: "acido-hialuronico-facial",
  },
  {
    name: "Armonización orofacial",
    slug: "armonizacion-orofacial",
  },
  { name: "Endodoncia", slug: "endodoncia" },
  {
    name: "Resinas estéticas y carillas dentales",
    slug: "resinas-carillas-dentales",
  },
] as const;

export type TreatmentSlug = (typeof plannedTreatments)[number]["slug"];
