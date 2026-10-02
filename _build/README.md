# Generador de la web

Las páginas HTML de la web se generan con estos scripts (Node 18+ e ImageMagick para `identify`).
La carpeta empieza por `_`, así que GitHub Pages no la publica.

```bash
node _build/build.mjs
```

- `lib.mjs`: datos del negocio, layout común (cabecera, pie, `<head>`, analítica), iconos, helpers (`img()`, FAQ, migas de pan, JSON-LD).
- `build.mjs`: contenido de todas las páginas, redirecciones, `sitemap.xml` y `llms.txt`.
- `products.mjs`: catálogo de la tienda (genera `producto-*.html`).
- `articles.mjs`: artículos del blog (genera `blog/*.html`). `group: 'clientes'` o `'makers'`.

Las imágenes van en `assets/img/` como `nombre.webp` + `nombre-sm.webp` (ancho máx. 1400 y 700 px).
Los estilos están en `styles.css` y el JS en `main.js` (se editan a mano).
Cambia `TODAY` en `lib.mjs` al regenerar para actualizar las fechas del sitemap.
No edites los `.html` generados a mano: se sobrescriben al ejecutar el script.
