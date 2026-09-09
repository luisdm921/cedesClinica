---
description: Crea y valida una página individual de tratamiento CEDES a partir de contenido clínico recibido.
---

# Crear una página de tratamiento

Analiza el documento o texto que te proporcionaré y crea una nueva página de tratamiento usando la arquitectura existente de CEDES Clínica.

## Antes de editar

1. Lee `docs/content-pages.md`.
2. Revisa `src/content/treatments/types.ts`, `catalog.ts` y `planned.ts`.
3. Confirma que el tratamiento pertenece a la lista planificada y utiliza exactamente su `TreatmentSlug`.
4. Revisa los componentes actuales para conservar el tono visual del sitio.

## Implementación

- No crees otro `page.tsx` ni dupliques componentes visuales.
- Crea únicamente `src/content/treatments/entries/<slug>.ts`.
- Exporta un objeto que satisfaga `TreatmentContent`.
- Registra el objeto en `src/content/treatments/catalog.ts`.
- Déjalo con `status: "draft"` hasta que el usuario confirme la revisión editorial.
- No dupliques el estado editorial en otras configuraciones: `publishedTreatments` es la fuente de verdad para rutas, sitemap y enlaces visibles.
- Si existe una correspondencia clara con un card de servicios, agrega su slug exacto a `treatmentSlugs` en `src/app/components/services/SlideSwitch.tsx`; no inventes relaciones ni URLs. Los tratamientos en `draft` quedarán sin enlace visible automáticamente.
- Si no existe una correspondencia clara con un card, déjalo sin `treatmentSlugs`.
- Si todavía no existe `src/app/(tratamientos)/[slug]/page.tsx`, no lo crees mientras el contenido siga en `draft`.
- Al publicar el primer tratamiento, copia sin alterar `src/templates/treatment-route-page.tsx.template` a `src/app/(tratamientos)/[slug]/page.tsx`.
- No modifiques otros tratamientos.
- Si la fuente es un PDF y contiene imágenes autorizadas, extráelas conservando su calidad y formato siempre que sea posible.
- Guarda las imágenes extraídas en `public/images/tratamientos/<slug>/` con nombres descriptivos y estables.
- Si una imagen contiene claramente una composición de Antes y Después, conserva el original y genera recortes separados solo cuando la división sea inequívoca; usa esos recortes en `cases`.
- Registra en `cases` únicamente imágenes cuya relación Antes/Después sea verificable en la fuente. Usa textos alternativos descriptivos sin inventar datos clínicos.
- Si existen fotografías autorizadas del tratamiento, pero no forman una relación Antes/Después verificable, regístralas en `images` como galería ilustrativa. No las registres en `cases`.
- Si no existen imágenes autorizadas, omite `hero.image`, `images` y `cases`.
- Usa rutas de imágenes dentro de `public/images/`.

### Procedimiento para imágenes en PDF

Cuando la fuente sea un PDF con imágenes autorizadas:

1. Inspecciona el documento página por página e identifica las imágenes embebidas, su formato y sus dimensiones.
2. Prefiere la extracción nativa de las imágenes embebidas sobre capturar páginas completas como screenshots o rasterizar todo el PDF.
3. Usa `PyMuPDF` como primera opción para inspeccionar el PDF y extraer sus imágenes embebidas. Si es necesario dividir o recortar una composición, usa `Pillow`. Si no están instaladas, instálalas en un entorno temporal aislado; no agregues esas dependencias al `package.json` del proyecto solo para esta tarea.
4. Exporta cada imagen original a `public/images/tratamientos/<slug>/` conservando su extensión y calidad siempre que sea posible.
5. Si una imagen es una composición vertical u horizontal con etiquetas visibles de Antes y Después, conserva el archivo original y crea dos recortes: uno para Antes y otro para Después. Respeta la línea divisoria o el margen entre ambas partes y no mezcles contenido de una con otra.
6. Usa los recortes en `cases.before` y `cases.after`, y conserva el original como respaldo de la fuente. No registres la composición completa como las dos imágenes del caso.
7. Comprueba dimensiones, formato y existencia de todos los archivos antes de registrar sus rutas en el contenido.
8. Si la separación no es inequívoca, conserva la imagen original en `images` solo como fotografía ilustrativa cuando exista autorización; no inventes una división para `cases`.

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
4. Confirma que las imágenes extraídas existen en `public/images/tratamientos/<slug>/` y que las rutas registradas en `cases` coinciden con archivos reales.
5. Confirma que cualquier relación declarada en `treatmentSlugs` no muestra enlaces mientras el tratamiento siga en `draft`.
6. Cuando el usuario apruebe el contenido, usa el prompt de publicación general para cambiar el estado a `published`, activar la ruta dinámica si es el primer tratamiento, repetir el build y confirmar la salida equivalente generada por Next.js.

Al finalizar, informa:

- qué contenido conservaste;
- qué contenido resumiste o fusionaste;
- qué omitiste y por qué;
- qué afirmaciones requieren revisión humana;
- resultado de lint y build.
