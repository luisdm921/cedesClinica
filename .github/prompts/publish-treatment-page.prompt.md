---
description: Publica un tratamiento CEDES aprobado, activa su ruta estática y valida la salida de producción.
---

# Publicar una página de tratamiento

Publica el tratamiento aprobado cuyo slug te proporcionaré usando la arquitectura existente de CEDES Clínica.

## Antes de editar

1. Lee `docs/content-pages.md`.
2. Revisa `src/content/treatments/catalog.ts` y localiza la entrada en `src/content/treatments/entries/<slug>.ts`.
3. Revisa `src/content/treatments/planned.ts` y confirma que el slug solicitado coincide exactamente con su `TreatmentSlug`.
4. Revisa si existe `src/app/(tratamientos)/[slug]/page.tsx`.
5. Revisa `src/app/components/services/SlideSwitch.tsx` para identificar relaciones `treatmentSlugs` ya declaradas.
6. Lee los archivos actuales antes de editarlos y conserva cualquier cambio existente que no sea necesario para esta publicación.

## Implementación

- Cambia únicamente el tratamiento solicitado de `status: "draft"` a `status: "published"`.
- Cambia `editorial.reviewed` a `true`.
- Si la ruta dinámica todavía no existe, copia sin alterar `src/templates/treatment-route-page.tsx.template` a `src/app/(tratamientos)/[slug]/page.tsx`.
- Si la ruta ya existe, no la reemplaces ni la modifiques salvo que sea estrictamente necesario para activar la publicación.
- No modifiques el contenido clínico, las imágenes, otros tratamientos, el catálogo ni las URLs.
- No inventes datos ni cambies el slug.
- No dupliques `published` en los cards: `publishedTreatments` controla automáticamente qué enlaces aparecen.
- Si el tratamiento ya está relacionado mediante `treatmentSlugs`, su enlace se mostrará automáticamente al publicar. Si no existe una relación clara, no inventes una ni construyas una URL manual.
- El sitemap se genera automáticamente desde `publishedTreatments`; no mantengas una lista manual de URLs.

## Verificación

1. Ejecuta `npm run build`.
2. Confirma en la salida de Next.js que el tratamiento aparece como página SSG/prerenderizada.
3. Confirma que la URL `/<slug>` fue generada.
4. Revisa la salida de exportación real según `next.config.ts`: puede ser `out/<slug>/index.html`, `out/<slug>.html` u otra salida equivalente de Next.js.
5. Confirma que, si existe un card relacionado, ahora muestra únicamente el enlace hacia el tratamiento publicado y que no hay enlaces anidados dentro de botones.
6. Confirma que el sitemap incluye el tratamiento publicado y no incluye tratamientos que sigan en `draft`.
7. Si el build falla, informa el error exacto y no marques la publicación como validada.

Al finalizar, informa:

- el slug y la URL publicados;
- si se creó la ruta dinámica o ya existía;
- el resultado de `npm run build`;
- la ubicación exacta del archivo HTML generado;
- cualquier advertencia o limitación encontrada.
