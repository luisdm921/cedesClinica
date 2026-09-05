import type { TreatmentContent } from "./types";

/**
 * Agrega aquí cada archivo de contenido cuando haya sido revisado.
 * Solo los tratamientos con status "published" generan una URL en el build.
 */
export const treatmentCatalog: TreatmentContent[] = [];

export const publishedTreatments = treatmentCatalog.filter(
  (treatment) => treatment.status === "published",
);

export function getTreatment(slug: string) {
  return publishedTreatments.find((treatment) => treatment.slug === slug);
}
