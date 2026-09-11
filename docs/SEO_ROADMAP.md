# SEO Roadmap - Fundación Uriel

> **Fecha:** 2026-09-10  
> **Objetivo:** Mejorar posicionamiento orgánico para `fundación uriel`, `quemaduras niños México`, `tratamiento láser CO2`, `prevención quemaduras`.  
> **Enfoque:** Fases incrementales P0 (crítico) → P1 (alto) → P2 (medio). Este documento guía la ejecución paso a paso.

---

## Estado Inicial (Auditoría 2026-09-10)

| Área | Hallazgo Crítico | Severidad |
|------|------------------|-----------|
| `lang` | 6 HTML con `lang="en"` siendo contenido `es` | Alta |
| Meta description | Ausente en 7/7 páginas | Alta |
| Title | `index.html` y `transparencia.html` duplicado `Fundación Uriel`; typo `sómos` | Alta |
| Open Graph / Twitter / Canonical | 0/7 páginas | Alta |
| Sitemap / Robots | No existen | Alta |
| Headings | `index.html` 7× H1, `donateCard` H1 duplicado en 5 páginas, H2 antes de H1 | Alta |
| Imágenes | ~70% `alt=""`, `logo-head.svg` 1.3MB, `apoyo-comunidades.png` 1.3MB, sin `loading="lazy"` | Alta |
| Nav | `<li onclick="window.location.href='..."><a>` sin `href` no rastreable, rutas `../img/` rotas desde root | Alta |
| Perf | TTF/OTF sin `font-display:swap`, scripts sin `defer`, videos 52MB, `bg-banner.jpg` 558KB sin WebP | Alta |
| Schema | 0 JSON-LD | Alta |
| Footer Boilerplate | Texto idéntico en 6 páginas + `donateCard` duplicado | Media |
| PayPal IDs | `js/index.js` CQYKVESADGHPW vs `index.html` EFHsZBE... inconsistente | Media |

---

## Fase P0 - Crítico (Semana 1) - COMPLETADO ✅ 2026-09-10

> Impacto Alto, Esfuerzo Bajo-Medio. Sin esto Google no entiende idioma, no hay snippets, ni rastreo de menú.

### P0-1. Idioma `lang="es"` ✅ COMPLETADO
- **Archivos:** `index.html:2`, `galeria.html:2`, `quienes-somos.html:2`, `transparencia.html:2`, `tratamiento-laser-co2.html:2`, `cursos-y-tutoriales.html:2`
- **Cambio:** `<html lang="en">` → `<html lang="es">` (o `es-MX`)
- **Verificación:** `grep -rn 'lang=' *.html`
- **Estado:** ⏳

### P0-2. Meta Description únicas (150-160 chars) ✅ COMPLETADO
- **Archivos:** todos los `<head>` (`index.html:3-14` etc.)
- **Propuestas:**
  - `index.html`: `Fundación Uriel ayuda a niños con quemaduras en México. Prevención, atención médica especializada y láser CO2. Dona y cambia una vida hoy.`
  - `quienes-somos.html`: `Conoce a Fundación Uriel IAP, 15+ años previniendo quemaduras en niños y apoyando su recuperación. Estatus Consultivo ONU, rehabilitación integral.`
  - `transparencia.html`: `Portal de Transparencia Fundación Uriel: informes anuales, donataria autorizada SAT, estados financieros y cumplimiento. Confianza y rendición de cuentas.`
  - `galeria.html`: `Galería Fundación Uriel: fotos de programas de prevención, apoyo a comunidades vulnerables y testimonios de niños rehabilitados.`
  - `tratamiento-laser-co2.html`: `Tratamiento láser CO2 para secuelas de quemaduras en México. Fundación Uriel ofrece rehabilitación avanzada, fisioterapia y apoyo integral.`
  - `cursos-y-tutoriales.html`: `Cursos gratuitos de prevención de quemaduras y primeros auxilios psicológicos. Manuales y talleres de Fundación Uriel para familias y escuelas.`
- **Validación:** longitud 150-160, keywords + CTA, única por URL
- **Estado:** ⏳

### P0-3. Sitemap + Robots ✅ COMPLETADO
- **Crear:** `/sitemap.xml` (6 URLs principales, `lastmod` 2026-09-10, `priority` index 1.0, resto 0.8) + `/robots.txt`
- **robots.txt:**
  ```
  User-agent: *
  Allow: /
  Disallow: /undercons/
  Sitemap: https://fundacionuriel.org/sitemap.xml
  ```
- **Verificación:** `cat sitemap.xml`, `cat robots.txt`, submit Search Console
- **Estado:** ⏳

### P0-4. Canonical + Open Graph + Twitter Cards ✅ COMPLETADO
- **Archivos:** cada `<head>`
- **Template por página:**
  ```html
  <link rel="canonical" href="https://fundacionuriel.org/index.html" />
  <meta property="og:locale" content="es_MX" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Título único | Fundación Uriel" />
  <meta property="og:description" content="Meta description de la página" />
  <meta property="og:url" content="https://fundacionuriel.org/pagina.html" />
  <meta property="og:image" content="https://fundacionuriel.org/img/og-image.jpg" />
  <meta property="og:site_name" content="Fundación Uriel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="..." />
  <meta name="twitter:description" content="..." />
  <meta name="twitter:image" content="https://fundacionuriel.org/img/og-image.jpg" />
  ```
- **Dominio canónico:** confirmar `https://fundacionuriel.org` (placeholder actual)
- **Estado:** ⏳

### P0-5. Menú rastreable ✅ COMPLETADO
- **Archivos:** `index.html:51-88` y réplicas en 5 HTML
- **Cambio:**
  ```html
  <!-- Antes -->
  <li onclick="window.location.href='quienes-somos.html'; closeSidenav();"><a>¿Quiénes somos?</a></li>
  <!-- Después -->
  <li><a href="quienes-somos.html" onclick="closeSidenav()">¿Quiénes somos?</a></li>
  ```
- **Aplica a:** `¿Quiénes somos?`, `Acerca de nosotros`, `Portal de transparencia`, `Galería`, `Reconocimientos`, `Tratamiento Laser CO2`
- **Estado:** ⏳

### P0-6. Headings: 1 H1 por página ✅ COMPLETADO
- **Archivos:** `index.html:190,255,337,413,492,571,789`, `galeria.html:169,396`, `quienes-somos.html:149,403`, `transparencia.html:145,1050`, `cursos-y-tutoriales.html:147,474`
- **Cambios:**
  - `index.html`: 1 H1 principal `Para niños con quemaduras` (`index.html:164` actualmente H2 → H1), resto H1 → H2, `donateCard h1` (`index.html:787-795`) → `<p class="... font-bold">`
  - `cursos-y-tutoriales.html:178,230` H5 → H3
  - `transparencia.html` acordeones H2 OK, mantener jerarquía
- **Estado:** ⏳

### P0-7. Alt + Rutas ✅ COMPLETADO
- **Alt críticos:**
  - `index.html:149` `img-banner-1.png` → `alt="Niño atendido por Fundación Uriel - prevención de quemaduras en México"`
  - `index.html:183` `acerca-de-fundacion-uriel.png` → `alt="Equipo Fundación Uriel brindando atención a niños con quemaduras"`
  - `index.html:324,460` etc. descriptivos; `flower.svg`, `cloud.png` → `alt="" aria-hidden="true"`
  - Social icons `index.html:698-722` corregir `alt="Tik Tok"` duplicado → `alt="YouTube Fundación Uriel"`, `alt="LinkedIn Fundación Uriel"`
  - `galeria.html:242` JS generar `alt` dinámico con título
- **Rutas:** `src="../img/` → `src="./img/` o `src="img/` verificada
- **Estado:** ⏳

### P0-8. Fix rutas `../img/` ✅ COMPLETADO
- **Archivos:** `index.html:41`, `galeria.html:59,302`, `quienes-somos.html:41,313`, `transparencia.html:36,957`, `tratamiento-laser-co2.html:36,510`, `cursos-y-tutoriales.html:37,381`, `components/*`
- **Cambio:** `../img/` → `./img/` (desde root)
- **Verificación:** `grep -rn '"\.\./img' *.html` debe dar 0
- **Estado:** ⏳

### P0-9. 404 + JSON-LD ✅ COMPLETADO
- **Crear:** `/404.html` con branding, buscador, links a `index.html`, `quienes-somos.html`, `contacto`
- **JSON-LD Organization** en todas las páginas:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Fundación Uriel IAP",
    "url": "https://fundacionuriel.org",
    "logo": "https://fundacionuriel.org/img/logo-head.svg",
    "sameAs": ["https://www.facebook.com/Fundacionquemaduras", "https://www.instagram.com/urieliap", "https://x.com/URIELIAP", "https://www.tiktok.com/@fundacionurielstiches", "https://www.youtube.com/@urieliap7931", "https://www.linkedin.com/company/fundaci%C3%B3n-uriel-iap/"],
    "address": [
      {"@type":"PostalAddress","streetAddress":"Trompeleros 231, Villa de las Flores","addressLocality":"Coacalco","addressRegion":"Estado de México","postalCode":"55710","addressCountry":"MX"},
      {"@type":"PostalAddress","streetAddress":"Carlos Pichardo Cruz 82, San Rafael Coacalco (Eje 8)","addressLocality":"Coacalco","addressRegion":"Estado de México","postalCode":"55719","addressCountry":"MX"}
    ],
    "telephone": "+52-55-5885-1426",
    "email": "contacto@fundacionuriel.org"
  }
  ```
- **BreadcrumbList** en páginas internas (`quienes-somos`, `transparencia`, etc.)
- **Estado:** ⏳

---

### ✅ Verificación P0 (2026-09-10)
- `lang=es` en 7/7 HTML (6 principales + 404)
- 7 meta description únicas + titles corregidos (sómos→somos, Mision→Misión)
- sitemap.xml (6 URLs) + robots.txt creados
- 6 canonical + OG + Twitter Cards con og:image logo-head.svg
- Menú 36 enlaces `onclick` → `<a href>` rastreable (0 window.location.href restantes)
- H1 unificado: 1 por página (index: H1 Para niños + 6 H2, donate H1→p), H5→H3, H4→H3
- Alts críticos (hero, acerca, labor, internacional, contacto, cards), youtube/linkedin alt fix, tiktok href space fix, rel=noopener
- Rutas `../img/` → `./img/` en 6 HTML principales (5 restantes solo en components/)
- 404.html creado + JSON-LD NGO + BreadcrumbList en 6 páginas (12 scripts ld+json)
- Typos: atreves→a través (5), sómos→somos, Mision→Misión

## Fase P1 - Alto (Sprint 2)

10. **Imágenes WebP + `width/height` + `loading="lazy"`**: `img/` 28.4MB → WebP, `srcset`, comprimir `logo-head.svg` 1.3MB → <50KB, hero `fetchpriority="high"`
11. **Fonts WOFF2**: TTF/OTF → WOFF2 + `font-display:swap` + `preload` (`css/input.css:10-63`, `css/output.css:1598-1639`)
12. **Scripts defer + preconnect**: `index.html:833-842` FontAwesome/Flowbite/SweetAlert2 con `defer`, `preconnect` a `cdnjs.cloudflare.com`, `cdn.jsdelivr.net`, `kit.fontawesome.com`
13. **Videos**: 52MB → <3MB c/u, `poster`, `preload="metadata"`, `playsinline`, considerar YouTube embed lazy (`video/promo-video.mp4` 9.2MB, `cursos-y-tutoriales` 5 videos)
14. **Seguridad links**: `rel="noopener noreferrer"` + fix `href=" https://..."` espacio (`index.html:711`)
15. **Titles únicos + typo**: `transparencia.html:6` vs `index.html:7` duplicado, `sómos` → `somos`
16. **JSON-LD específico**: `MedicalProcedure` (láser CO2), `Course` (cursos), `VideoObject`, `ImageGallery`

---

## Fase P2 - Medio (Mejora continua)

17. **URLs pretty**: `.html` → `/quienes-somos/` con 301, breadcrumbs visibles
18. **Formularios**: `<label>`, `autocomplete`, `required`, `type="tel"` (no `phone`), values select distintos (`index.html:583`, `tratamiento-laser-co2.html:191`)
19. **Accesibilidad**: `aria-label` menú, `aria-hidden` icons, `skip link`, focus trap sidenav, contraste
20. **DRY + Contenido**: reducir boilerplate footer/donateCard duplicado, `galeria.html` añadir 300 palabras indexables
21. **PWA/Brand**: `manifest.json`, `theme-color`, `apple-touch-icon`, Search Console verification
22. **PDFs**: `docs/` 23MB + 4.4MB → <5MB, título metadata, landing HTML
23. **Perf fino**: `background-attachment: fixed` → `scroll` móvil, purge `output.css`, `dns-prefetch`, `fetchpriority`
24. **PayPal**: unificar IDs `CQYKVESADGHPW` vs `EFHsZBE...`
25. **Extras**: `humans.txt`, `security.txt`

---

## Checklist de Verificación por Fase

- [ ] P0: `grep lang` = `es-MX`, `grep description` = 6 únicas, `sitemap.xml` + `robots.txt` existen, OG tags presentes, menú con `href`, 1 H1 por URL, `alt` con contenido, rutas sin `../`, 404 + JSON-LD válido (validator.schema.org)
- [ ] P1: Lighthouse Performance >90, Images WebP, Fonts WOFF2, no CLS, videos <3MB
- [ ] P2: URLs pretty 301, forms accesibles, WCAG AA, DRY componentes

---

## Cómo usar este roadmap

1. Completar P0 secuencialmente, marcar `[x]` en cada sub-tarea.
2. Verificar con `grep`, LightHouse, validator.
3. Commitear por fase: `git commit -m "SEO P0-1: fix lang es-MX"`
4. Al terminar P0, volver aquí y planificar P1.

> **Nota dominio:** Todas las URLs canónicas usan placeholder `https://fundacionuriel.org`. Actualizar si el dominio real es distinto (ej `fundacionuriel.org.mx`).

