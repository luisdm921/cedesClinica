import type { TreatmentContent } from "./types";
import endodoncia from "./entries/endodoncia";
import invisalign from "./entries/invisalign";
import odontopediatria from "./entries/odontopediatria";
import ortodoncia from "./entries/ortodoncia";
import resinasCarillasDentales from "./entries/resinas-carillas-dentales";
import acidoHialuronicoFacial from "./entries/acido-hialuronico-facial";
import cirugiaTercerosMolares from "./entries/cirugia-terceros-molares";
import implantesDentales from "./entries/implantes-dentales";
import toxinaBotulinicaFacial from "./entries/toxina-botulinica-facial";

/**
 * Agrega aquí cada archivo de contenido cuando haya sido revisado.
 * Solo los tratamientos con status "published" generan una URL en el build.
 */
export const treatmentCatalog: TreatmentContent[] = [
  resinasCarillasDentales,
  odontopediatria,
  ortodoncia,
  invisalign,
  endodoncia,
  acidoHialuronicoFacial,
  cirugiaTercerosMolares,
  implantesDentales,
  toxinaBotulinicaFacial,
];

export const publishedTreatments = treatmentCatalog.filter(
  (treatment) => treatment.status === "published",
);

export function getTreatment(slug: string) {
  return publishedTreatments.find((treatment) => treatment.slug === slug);
}
