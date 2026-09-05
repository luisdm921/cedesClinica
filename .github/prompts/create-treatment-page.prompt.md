---
description: Crea y valida una página individual de tratamiento CEDES a partir de contenido clínico recibido.
---

# Crear una página de tratamiento

Analiza el documento o texto que te proporcionaré y crea una nueva página de tratamiento usando la arquitectura existente de CEDES Clínica.

## Antes de editar

1. Lee `docs/content-pages.md`.
2. Revisa `src/content/treatments/types.ts`, `catalog.ts` y `planned.ts`.
3. Confirma que el tratamiento pertenece a la lista planificada y utiliza exactamente su slug.
4. Revisa los componentes actuales para conservar el tono visual del sitio.

## Implementación

- No crees otro `page.tsx` ni dupliques componentes visuales.
- Crea únicamente `src/content/treatments/entries/<slug>.ts`.
- Exporta un objeto que satisfaga `TreatmentContent`.
- Registra el objeto en `src/content/treatments/catalog.ts`.
- Déjalo con `status: "draft"` hasta que el usuario confirme la revisión editorial.
- Si todavía no existe `src/app/(tratamientos)/[slug]/page.tsx`, no lo crees mientras el contenido siga en `draft`.
- Al publicar el primer tratamiento, copia sin alterar `src/templates/treatment-route-page.tsx.template` a `src/app/(tratamientos)/[slug]/page.tsx`.
- No modifiques otros tratamientos.
- Si no existen imágenes autorizadas, omite `hero.image` y `cases`.
- Usa rutas de imágenes dentro de `public/images/`.

## Criterios editoriales

- Conserva toda la información clínicamente útil para el paciente.
- Reduce introducciones extensas y fusiona ideas repetidas sin perder significado.
- Convierte los diferenciadores de CEDES en puntos breves y escaneables.
- Conserva las preguntas con intención de búsqueda o utilidad real.
- Fusiona preguntas que respondan esencialmente lo mismo.
- No inventes procedimientos, beneficios, riesgos, tiempos, precios, credenciales ni características de CEDES.
- No presentes resultados como garantizados.
- Mantén el lenguaje prudente y condicionado a la valoración individual.
- Optimiza title, description y encabezados para búsquedas en Monterrey sin añadir la ciudad al slug.
- El contenido visible debe respaldar cualquier dato estructurado generado por la plantilla.

## Verificación

1. Ejecuta `npm run lint`.
2. Ejecuta `npm run build`.
3. Confirma que el tratamiento en estado `draft` no aparece dentro de `out/`.
4. Cuando el usuario apruebe el contenido, cambia el estado a `published`, activa la ruta dinámica si es el primer tratamiento, repite el build y confirma que existe `out/<slug>/index.html` o la salida equivalente generada por Next.js.

Al finalizar, informa:

- qué contenido conservaste;
- qué contenido resumiste o fusionaste;
- qué omitiste y por qué;
- qué afirmaciones requieren revisión humana;
- resultado de lint y build.
