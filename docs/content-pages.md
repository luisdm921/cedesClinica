# Páginas individuales de CEDES

Esta infraestructura permite crear páginas individuales sin duplicar diseño ni publicar contenido incompleto.

## Tratamientos

La ruta visual se prepara en `src/templates/treatment-route-page.tsx.template`. Cuando se publique el primer tratamiento, Copilot la copia a `src/app/(tratamientos)/[slug]/page.tsx`. El grupo `(tratamientos)` no forma parte de la URL, por lo que un contenido con slug `implantes-dentales` genera `/implantes-dentales`.

Next.js 16 no permite exportar una ruta dinámica con `output: "export"` cuando `generateStaticParams()` no produce ninguna página. Por eso la ruta permanece como plantilla mientras el catálogo está vacío; así este andamiaje no publica URLs ficticias.

Los datos pertenecen en `src/content/treatments/entries/`. Cada archivo debe exportar un objeto que satisfaga `TreatmentContent` y luego importarse en `catalog.ts`.

Solo los registros con `status: "published"` son devueltos por `generateStaticParams()` y generan HTML durante `next build`. Un registro en `draft` puede revisarse en código sin crear una URL en la exportación estática.

## Reglas de contenido

- La fuente principal es la información entregada por la doctora.
- Se permite resumir, ordenar y fusionar repeticiones.
- No se permite inventar afirmaciones clínicas, credenciales, precios o resultados.
- `process`, `images`, `cases` y `relatedTreatmentSlugs` son opcionales. `images` es una galería de fotografías ilustrativas y no sustituye a `cases`.
- `cases` se reserva para pares Antes/Después cuya relación sea verificable en la fuente.
- Las fotografías de pacientes solo se agregan cuando existe autorización para utilizarlas.
- La revisión humana debe completarse antes de cambiar `status` a `published`.

## Perfil profesional

`DoctorProfilePage` es una plantilla separada porque su intención es presentar trayectoria, formación y enfoque profesional. No existe una ruta pública hasta que se reciba, revise y publique su contenido.

## Flujo con Copilot

1. Adjuntar o referenciar el nuevo documento.
2. Ejecutar `.github/prompts/create-treatment-page.prompt.md`.
3. Revisar el resumen editorial de Copilot.
4. Validar el contenido clínico y las imágenes.
5. Cambiar el estado a `published`.
6. Ejecutar lint y build antes de integrar.
