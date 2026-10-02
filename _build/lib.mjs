import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SITE = 'https://www.tuimpresionen3d.com';
export const NAME = 'Tu Impresión en 3D';
export const PHONE = '+34 644 64 38 95';
export const TEL = '+34644643895';
export const EMAIL = 'info@tuimpresionen3d.com';
export const WA_NUM = '34644643895';
export const wa = (text = 'Hola, quiero pedir presupuesto de impresión 3D') =>
    `https://wa.me/${WA_NUM}?text=${encodeURIComponent(text)}`;
export const SOCIAL = {
    instagram: 'https://www.instagram.com/tuimpresionen3d_/',
    tiktok: 'https://www.tiktok.com/@taoir_',
    youtube: 'https://www.youtube.com/channel/UCesfxiDwZDbtwG2S4edzpUQ',
};
export const OG_DEFAULT = '/assets/img/og-impresion-3d-tarragona.jpg';
export const TODAY = '2026-10-02';

// ---------- Iconos (SVG inline) ----------
const s = (inner) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
export const icon = {
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    instagram: s('<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'),
    youtube: s('<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'),
    phone: s('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    mail: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
    pin: s('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
    menu: s('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    left: s('<path d="m15 18-6-6 6-6"/>'),
    right: s('<path d="m9 18 6-6-6-6"/>'),
    box: s('<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>'),
    pen: s('<path d="M12 20h9"/><path d="M16.38 3.62a1 1 0 0 1 3 3L7.37 18.64a2 2 0 0 1-.85.5l-2.87.84a.5.5 0 0 1-.62-.62l.84-2.87a2 2 0 0 1 .5-.85z"/>'),
    zap: s('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'),
    wrench: s('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    type: s('<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>'),
    gift: s('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>'),
    truck: s('<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>'),
    shield: s('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'),
    clock: s('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    building: s('<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>'),
    sparkles: s('<path d="M9.94 14.06 7 22l-2.94-7.94L-3.88 11 4.06 8.06 7 0l2.94 8.06L17.88 11Z" transform="translate(3 1) scale(.85)"/>'),
    hand: s('<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'),
};

// ---------- Utilidades ----------
export const esc = (str) =>
    String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const dimCache = {};
function dims(file) {
    if (!dimCache[file]) {
        const out = execSync(`identify -format "%w %h" "${path.join(ROOT, 'assets/img', file)}"`).toString().trim();
        const [w, h] = out.split(' ').map(Number);
        dimCache[file] = { w, h };
    }
    return dimCache[file];
}

// Imagen responsive: name sin extensión (usa name.webp y name-sm.webp)
export function img(name, alt, { sizes = '(max-width: 640px) 100vw, 33vw', eager = false, cls = '' } = {}) {
    const big = dims(`${name}.webp`);
    const small = dims(`${name}-sm.webp`);
    const srcset = big.w > small.w
        ? ` srcset="/assets/img/${name}-sm.webp ${small.w}w, /assets/img/${name}.webp ${big.w}w" sizes="${sizes}"`
        : '';
    const loading = eager ? ' fetchpriority="high"' : ' loading="lazy"';
    return `<img src="/assets/img/${name}-sm.webp"${srcset} width="${small.w}" height="${small.h}" alt="${esc(alt)}"${loading} decoding="async"${cls ? ` class="${cls}"` : ''}>`;
}

export const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

export const BUSINESS_ID = `${SITE}/#negocio`;
export const AREAS = ['Tarragona', 'Reus', 'Salou', 'Cambrils', 'Vila-seca', 'La Pineda', 'Torredembarra', 'Altafulla', 'Valls', 'Constantí', 'La Canonja', 'El Vendrell', 'Calafell', 'Montblanc', 'Tortosa'];

export const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: NAME,
    alternateName: ['TuImpresionEn3D', 'Tu Impresion En 3D', 'tuimpresionen3d'],
    description:
        'Servicio de impresión 3D en Tarragona: impresión 3D bajo pedido, diseño y modelado 3D, prototipado rápido, piezas de repuesto, logos y letras corpóreas y regalos personalizados. Envíos a toda España.',
    slogan: 'Convertimos tus ideas en piezas reales',
    url: `${SITE}/`,
    logo: `${SITE}/assets/img/logo-tu-impresion-en-3d.png`,
    image: [`${SITE}${OG_DEFAULT}`, `${SITE}/assets/img/logo-retroiluminado-impreso-3d.webp`],
    telephone: TEL,
    email: EMAIL,
    priceRange: '€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'PayPal',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tarragona',
        addressRegion: 'Cataluña',
        addressCountry: 'ES',
    },
    areaServed: [
        ...AREAS.map((n) => ({ '@type': 'City', name: n })),
        { '@type': 'AdministrativeArea', name: 'Provincia de Tarragona' },
        { '@type': 'Country', name: 'España' },
    ],
    knowsAbout: [
        'Impresión 3D', 'Impresión 3D FDM', 'Modelado 3D', 'Diseño 3D', 'Prototipado rápido',
        'PLA', 'PETG', 'ABS', 'Piezas de repuesto impresas en 3D', 'Letras corpóreas impresas en 3D', 'Regalos personalizados',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: TEL,
        email: EMAIL,
        contactType: 'customer service',
        availableLanguage: ['Spanish'],
        areaServed: 'ES',
    },
    sameAs: Object.values(SOCIAL),
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de impresión 3D en Tarragona',
        itemListElement: [
            'Impresión 3D bajo pedido',
            'Diseño y modelado 3D',
            'Prototipado rápido',
            'Piezas de repuesto y piezas funcionales',
            'Logos, letras y rótulos impresos en 3D',
            'Regalos y merchandising personalizado',
        ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n, areaServed: 'Tarragona' } })),
    },
};

export const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#web`,
    url: `${SITE}/`,
    name: NAME,
    inLanguage: 'es-ES',
    publisher: { '@id': BUSINESS_ID },
};

export function breadcrumbLd(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, url], i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name,
            item: `${SITE}${url}`,
        })),
    };
}

export function breadcrumbs(items) {
    return `<nav class="breadcrumbs" aria-label="Migas de pan"><ol>${items
        .map(([name, url], i) =>
            i === items.length - 1
                ? `<li aria-current="page">${esc(name)}</li>`
                : `<li><a href="${url}">${esc(name)}</a></li>`)
        .join('')}</ol></nav>`;
}

export function faqLd(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
        })),
    };
}

export function faqHtml(faqs) {
    return `<div class="faq">${faqs
        .map(([q, a]) => `
            <details>
                <summary>${esc(q)}</summary>
                <div><p>${a}</p></div>
            </details>`)
        .join('')}
        </div>`;
}

// ---------- Layout ----------
const NAV = [
    ['Inicio', '/'],
    ['Servicios', '/info.html'],
    ['Tienda', '/tienda.html'],
    ['Proyectos', '/Projects/'],
    ['Blog', '/blog/'],
];

const ANALYTICS = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LY1S7E92S2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LY1S7E92S2');
    </script>
    <script>
        (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ktegsbj2gy");
    </script>`;

export const ADSENSE = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9463405593849277" crossorigin="anonymous"></script>`;

export function layout({
    file, // ruta relativa del archivo a escribir
    url, // ruta canónica (p. ej. "/tienda.html")
    title,
    description,
    active = '',
    ogImage = OG_DEFAULT,
    ogType = 'website',
    jsonld = [],
    head = '',
    body,
    robots = 'index, follow, max-image-preview:large',
    preload = '',
}) {
    const canonical = `${SITE}${url}`;
    const nav = NAV.map(([label, href]) =>
        `<li><a href="${href}"${href === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('\n                    ');
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <link rel="canonical" href="${canonical}">
    <meta name="robots" content="${robots}">
    <meta name="theme-color" content="#0b0e13">
    <meta name="geo.region" content="ES-T">
    <meta name="geo.placename" content="Tarragona">
    <meta property="og:locale" content="es_ES">
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="${NAME}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${SITE}${ogImage}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap">
    <link rel="stylesheet" href="/styles.css">${preload}
    ${jsonld.map(ld).join('\n    ')}${ANALYTICS}${head}
</head>
<body>
    <a class="skip-link" href="#main">Saltar al contenido</a>
    <header class="site-header">
        <div class="container">
            <a class="brand" href="/" aria-label="${NAME} — inicio">
                <img src="/assets/img/logo-96.webp" width="44" height="44" alt="">
                <span>${NAME}<small>Impresión 3D · Tarragona</small></span>
            </a>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">${icon.menu}</button>
            <nav class="main-nav" id="main-nav" aria-label="Menú principal">
                <ul>
                    ${nav}
                    <li><a class="nav-cta" href="/#contacto">Pedir presupuesto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main id="main">
${body}
    </main>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <a class="brand" href="/">
                        <img src="/assets/img/logo-96.webp" width="44" height="44" alt="" loading="lazy">
                        <span>${NAME}</span>
                    </a>
                    <p class="mt-2">Servicio de impresión 3D en Tarragona: piezas a medida, prototipos, diseño 3D y regalos personalizados. Envíos a toda España.</p>
                    <div class="social">
                        <a href="${SOCIAL.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon.instagram}</a>
                        <a href="${SOCIAL.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${icon.tiktok}</a>
                        <a href="${SOCIAL.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon.youtube}</a>
                    </div>
                </div>
                <div>
                    <h2>Servicios</h2>
                    <ul>
                        <li><a href="/info.html">Impresión 3D bajo pedido</a></li>
                        <li><a href="/info.html#diseno">Diseño y modelado 3D</a></li>
                        <li><a href="/info.html#prototipos">Prototipado rápido</a></li>
                        <li><a href="/producto-logo-imagen.html">Logos y letras 3D</a></li>
                        <li><a href="/producto-trofeos-personalizados.html">Trofeos personalizados</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Web</h2>
                    <ul>
                        <li><a href="/tienda.html">Tienda</a></li>
                        <li><a href="/Projects/">Proyectos</a></li>
                        <li><a href="/blog/">Blog</a></li>
                        <li><a href="/blog/cuanto-cuesta-imprimir-en-3d.html">Precios de impresión 3D</a></li>
                        <li><a href="/privacidad.html">Política de privacidad</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Contacto</h2>
                    <ul>
                        <li><a href="${wa()}" target="_blank" rel="noopener">WhatsApp: ${PHONE}</a></li>
                        <li><a href="tel:${TEL}">Teléfono: ${PHONE}</a></li>
                        <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
                        <li>Tarragona, Cataluña (España)</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; <span id="year">2026</span> ${NAME} · Impresión 3D en Tarragona</span>
                <span>Hecho con filamento y cariño en Tarragona</span>
            </div>
        </div>
    </footer>

    <a class="wa-float" href="${wa()}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">${icon.whatsapp}</a>
    <script src="/main.js" defer></script>
</body>
</html>
`;
    const out = path.join(ROOT, file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    return { url, file };
}

export function redirectPage(file, target, title) {
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>${esc(title)}</title>
    <link rel="canonical" href="${SITE}${target}">
    <meta name="robots" content="noindex, follow">
    <meta http-equiv="refresh" content="0; url=${target}">
    <script>location.replace(${JSON.stringify(target)});</script>
</head>
<body>
    <p>Esta página se ha movido a <a href="${target}">${SITE}${target}</a>.</p>
</body>
</html>
`;
    fs.writeFileSync(path.join(ROOT, file), html);
}

// Bloque de contacto reutilizable
export function contactSection({ id = 'contacto', heading = 'Pide tu presupuesto de impresión 3D en Tarragona', subject = 'Nueva solicitud de presupuesto desde la web' } = {}) {
    return `
        <section class="section" id="${id}">
            <div class="container contact-grid">
                <div>
                    <span class="kicker" style="color:var(--accent);font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:.85rem">Contacto</span>
                    <h2>${heading}</h2>
                    <p class="text-muted">Cuéntanos qué necesitas (medidas, cantidad, uso de la pieza) y, si lo tienes, envíanos el archivo 3D o una foto o boceto. Te respondemos con precio y plazo sin compromiso.</p>
                    <ul class="contact-list">
                        <li><a href="${wa()}" target="_blank" rel="noopener">${icon.whatsapp}<span><strong>WhatsApp</strong><small>La forma más rápida: envía fotos o archivos</small></span></a></li>
                        <li><a href="tel:${TEL}">${icon.phone}<span><strong>${PHONE}</strong><small>Llámanos</small></span></a></li>
                        <li><a href="mailto:${EMAIL}">${icon.mail}<span><strong>${EMAIL}</strong><small>Ideal para adjuntar archivos STL, 3MF u OBJ</small></span></a></li>
                        <li><span class="item">${icon.pin}<span><strong>Tarragona, Cataluña</strong><small>Servicio en el Camp de Tarragona y envíos a toda España</small></span></span></li>
                    </ul>
                </div>
                <form class="form" action="https://formsubmit.co/${EMAIL}" method="POST">
                    <input type="hidden" name="_subject" value="${esc(subject)}">
                    <input type="hidden" name="_template" value="table">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
                    <div class="row">
                        <label>Nombre
                            <input type="text" name="nombre" autocomplete="name" required>
                        </label>
                        <label>Correo electrónico
                            <input type="email" name="email" autocomplete="email" required>
                        </label>
                    </div>
                    <div class="row">
                        <label>Teléfono (opcional)
                            <input type="tel" name="telefono" autocomplete="tel">
                        </label>
                        <label>¿Qué necesitas?
                            <select name="tipo">
                                <option>Imprimir una pieza o archivo 3D</option>
                                <option>Diseñar una pieza desde cero</option>
                                <option>Prototipo para empresa</option>
                                <option>Logo, letras o rótulo</option>
                                <option>Regalo o producto personalizado</option>
                                <option>Otra consulta</option>
                            </select>
                        </label>
                    </div>
                    <label>Mensaje
                        <textarea name="mensaje" placeholder="Ej.: Necesito 10 soportes de 8 cm en PETG negro para el lunes. Te paso el STL por email." required></textarea>
                    </label>
                    <button class="btn btn-primary btn-block" type="submit">Enviar solicitud</button>
                    <p class="form-note">Al enviar aceptas nuestra <a href="/privacidad.html">política de privacidad</a>. Solo usaremos tus datos para responder a tu consulta.</p>
                </form>
            </div>
        </section>`;
}

export function ctaBand(title = '¿Tienes una idea? La imprimimos en 3D', text = 'Presupuesto gratis y sin compromiso. Escríbenos por WhatsApp o desde el formulario.') {
    return `
        <section class="section">
            <div class="container">
                <div class="cta-band">
                    <div>
                        <h2>${title}</h2>
                        <p>${text}</p>
                    </div>
                    <div class="btn-row">
                        <a class="btn btn-whatsapp" href="${wa()}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
                        <a class="btn btn-primary" href="/#contacto">Pedir presupuesto</a>
                    </div>
                </div>
            </div>
        </section>`;
}
