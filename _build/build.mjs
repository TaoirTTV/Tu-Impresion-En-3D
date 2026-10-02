import fs from 'node:fs';
import path from 'node:path';
import {
    ROOT, SITE, NAME, PHONE, TEL, EMAIL, wa, icon, esc, img, layout, redirectPage, contactSection, ctaBand,
    businessLd, websiteLd, breadcrumbLd, breadcrumbs, faqLd, faqHtml, AREAS, BUSINESS_ID, ADSENSE, TODAY, SOCIAL,
} from './lib.mjs';
import { PRODUCTS, bySlug, fmt, priceLabel } from './products.mjs';
import { ARTICLES } from './articles.mjs';
import { LANDINGS, CA } from './landings.mjs';

const pages = [];
const add = (p, priority = '0.6', lastmod = TODAY) => pages.push({ ...p, priority, lastmod });

// ======================================================================
// FAQ principal (se reutiliza en inicio, servicios y llms.txt)
// ======================================================================
export const FAQ_HOME = [
    ['¿Dónde puedo imprimir en 3D en Tarragona?',
        `En <strong>${NAME}</strong> ofrecemos servicio de impresión 3D en Tarragona para particulares y empresas. Imprimimos tu archivo 3D o diseñamos la pieza desde cero a partir de una foto, un boceto o una pieza rota. Escríbenos por WhatsApp al ${PHONE} o por email a ${EMAIL} y te damos presupuesto sin compromiso. Si es tu primera vez, lee <a href="/blog/como-encargar-impresion-3d.html">cómo encargar una pieza impresa en 3D</a>.`],
    ['¿Cuánto cuesta imprimir una pieza en 3D?',
        'Depende sobre todo del tamaño, la cantidad de material, el tiempo de impresión, el material elegido y si hace falta diseñar el modelo. Las piezas pequeñas pueden costar solo unos pocos euros. Como referencia, en nuestra tienda los llaveros Spotify cuestan 9,94 € el pack de 3 y una foto impresa en 3D de 10 cm, 12,95 €. Te damos un precio cerrado antes de imprimir. Más detalles en nuestra <a href="/blog/cuanto-cuesta-imprimir-en-3d.html">guía de precios de impresión 3D</a>.'],
    ['¿Necesito tener el archivo 3D para encargar una impresión?',
        'No. Si tienes el archivo (STL, 3MF, OBJ o STEP) lo imprimimos directamente. Si no lo tienes, nuestro servicio de diseño y modelado 3D crea el modelo a partir de una foto, un boceto con medidas o la pieza original.'],
    ['¿Qué materiales utilizáis?',
        'Trabajamos principalmente con PLA, PETG y ABS, en una amplia gama de colores. El PLA es ideal para piezas decorativas y prototipos, el PETG para piezas resistentes y de exterior y el ABS para piezas que soportan más temperatura. Si necesitas otro material, consúltanos. Más detalles en nuestra <a href="/blog/que-material-elegir-pla-petg-abs.html">guía de materiales</a>.'],
    ['¿Cuánto se tarda en imprimir un pedido?',
        'Depende del tamaño y la cantidad. Una pieza pequeña puede imprimirse en pocas horas y los pedidos sencillos suelen estar listos en pocos días. Al darte el presupuesto te indicamos el plazo exacto; si tienes prisa, dínoslo.'],
    ['¿Hacéis envíos fuera de Tarragona?',
        'Sí. Damos servicio en Tarragona, <a href="/impresion-3d-reus.html">Reus</a>, <a href="/impresion-3d-salou.html">Salou</a>, <a href="/impresion-3d-cambrils.html">Cambrils</a>, Vila-seca, Valls, Torredembarra, El Vendrell y todo el Camp de Tarragona, y enviamos a toda España. Los productos de nuestra tienda online tienen envío gratuito a la España peninsular.'],
    ['¿Podéis imprimir piezas grandes?',
        'Sí. Las piezas que no caben en la impresora se dividen en partes que se imprimen por separado y se unen después. Por ejemplo, hicimos un logo de 150 cm de alto formado por 60 piezas para Scorpii Calisthenics.'],
    ['¿Trabajáis con empresas?',
        'Sí. Hacemos prototipos, piezas funcionales, utillaje, series cortas, logos corpóreos, trofeos y merchandising para empresas, clubes, academias y comercios.'],
    ['¿Hacéis llaveros y merchandising personalizado en Tarragona?',
        'Sí. Fabricamos <a href="/producto-llaveros-personalizados.html">llaveros personalizados</a> con tu logo o nombre, trofeos, imanes, expositores y regalos de empresa, desde una unidad hasta series para ferias y eventos. Mira todas las opciones en <a href="/merchandising-personalizado-tarragona.html">merchandising personalizado</a>.'],
];

// ======================================================================
// INICIO
// ======================================================================
{
    const services = [
        [icon.box, 'Impresión 3D bajo pedido', 'Envíanos tu archivo STL, 3MF u OBJ y lo imprimimos con la calidad, el material y el color que necesites.', '/info.html'],
        [icon.pen, 'Diseño y modelado 3D', '¿No tienes el archivo? Lo diseñamos desde una foto, un boceto con medidas o la pieza original.', '/info.html#diseno'],
        [icon.zap, 'Prototipado rápido', 'Valida tu producto antes de fabricarlo: prototipos funcionales y series cortas en poco tiempo.', '/info.html#prototipos'],
        [icon.wrench, 'Piezas de repuesto', '¿Se ha roto una pieza que ya no venden? La replicamos o la mejoramos para que vuelva a funcionar.', '/info.html#repuestos'],
        [icon.type, 'Logos, letras y rótulos', 'Logos corpóreos y letras 3D para locales, gimnasios y eventos, incluso de más de un metro y retroiluminados.', '/producto-logo-imagen.html'],
        [icon.gift, 'Merchandising y llaveros', 'Llaveros con logo, trofeos y regalos de empresa para negocios, clubes y eventos, desde 1 unidad.', '/merchandising-personalizado-tarragona.html'],
    ];
    const works = [
        ['/Projects/Logo-150cm-impreso-en-3d.html', 'logo-retroiluminado-impreso-3d', 'Logo retroiluminado de 150 cm impreso en 3D', 'Proyecto', 'Logo de 150 cm para un gimnasio', '60 piezas impresas, estructura de madera y retroiluminación LED.'],
        ['/producto-trofeos-personalizados.html', 'trofeo-personalizado-3d-1', 'Trofeo personalizado impreso en 3D', 'Eventos', 'Trofeos personalizados', 'Diseñados con el logo del club para su competición.'],
        ['/producto-escudos-personalizados.html', 'escudo-futbol-personalizado-3d', 'Escudo de fútbol personalizado impreso en 3D', 'Regalos', 'Escudos con nombre', 'El escudo de tu equipo en relieve y a color.'],
        ['/producto-porta-alianzas.html', 'porta-alianzas-personalizado-2', 'Porta alianzas personalizado impreso en 3D', 'Bodas', 'Porta alianzas', 'Con los nombres de los novios y su frase.'],
        ['/producto-fotos-impresas.html', 'foto-impresa-3d-relieve-1', 'Foto familiar impresa en 3D en relieve', 'Regalos', 'Fotos en relieve', 'Tu foto favorita convertida en una pieza 3D.'],
        ['/producto-nike-jordan.html', 'zapatilla-jordan-impresa-3d-1', 'Zapatilla en miniatura impresa en 3D', 'Decoración', 'Zapatillas en miniatura', 'Réplicas detalladas para coleccionistas.'],
        ['/producto-llaveros-spotify.html', 'llaveros-spotify-3d', 'Llaveros con código de Spotify impresos en 3D', 'Merchandising', 'Llaveros Spotify', 'Tu canción favorita, siempre contigo.'],
        ['/producto-logo-imagen.html', 'letras-personalizadas-3d', 'Letras corpóreas impresas en 3D', 'Empresas', 'Letras corpóreas', 'Rótulos y letras 3D para tu negocio.'],
    ];

    const body = `
        <section class="hero">
            <div class="hero-bg">
                <img src="/assets/img/mascara-impresa-3d-taller-tarragona-sm.webp" srcset="/assets/img/mascara-impresa-3d-taller-tarragona-sm.webp 960w, /assets/img/mascara-impresa-3d-taller-tarragona.webp 1920w" sizes="100vw" width="1920" height="1071" alt="Máscara roja y negra impresa en 3D sobre el banco de trabajo de nuestro taller en Tarragona" fetchpriority="high">
            </div>
            <div class="container">
                <div class="hero-content">
                    <span class="eyebrow">${icon.pin.replace('<svg', '<svg width="16" height="16"')} Tarragona · Envíos a toda España</span>
                    <h1>Impresión 3D en <span class="hl">Tarragona</span></h1>
                    <p class="lead">Convertimos tus ideas en piezas reales: prototipos, piezas de repuesto, logos, trofeos, llaveros, merchandising y regalos personalizados impresos en 3D. Diseño 3D incluido si no tienes el archivo.</p>
                    <div class="btn-row">
                        <a class="btn btn-primary" href="#contacto">Pedir presupuesto gratis</a>
                        <a class="btn btn-ghost" href="${wa()}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
                    </div>
                    <ul class="hero-points">
                        <li>Presupuesto sin compromiso</li>
                        <li>PLA, PETG, ABS y más</li>
                        <li>Diseño y modelado 3D</li>
                        <li>Particulares y empresas</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section" id="servicios">
            <div class="container">
                <div class="section-head">
                    <span class="kicker">Servicios</span>
                    <h2>Servicio de impresión 3D en Tarragona para particulares y empresas</h2>
                    <p>Somos un taller de impresión 3D en Tarragona. Imprimimos tus archivos, diseñamos piezas a medida y fabricamos productos personalizados en una gran variedad de materiales y colores.</p>
                </div>
                <div class="grid grid-3">
                    ${services.map(([ic, t, d, href]) => `
                    <article class="card">
                        <div class="icon">${ic}</div>
                        <h3><a href="${href}" style="color:inherit;text-decoration:none">${t}</a></h3>
                        <p>${d}</p>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        <section class="section section-alt" id="como-funciona">
            <div class="container">
                <div class="section-head center">
                    <span class="kicker">Cómo funciona</span>
                    <h2>De la idea a la pieza en 4 pasos</h2>
                    <p>Sin complicaciones: nos cuentas lo que necesitas y nosotros nos encargamos del resto.</p>
                </div>
                <ol class="steps grid grid-4">
                    <li><h3>Cuéntanos tu idea</h3><p>Envíanos el archivo 3D, una foto, un boceto o la pieza que quieras replicar.</p></li>
                    <li><h3>Presupuesto gratis</h3><p>Te proponemos material, color, acabado, precio y plazo. Sin compromiso.</p></li>
                    <li><h3>Diseño e impresión</h3><p>Modelamos la pieza si hace falta, la imprimimos y revisamos su calidad.</p></li>
                    <li><h3>Entrega</h3><p>Te la enviamos a casa o acordamos la entrega en la zona de Tarragona.</p></li>
                </ol>
            </div>
        </section>

        <section class="section" id="trabajos">
            <div class="container">
                <div class="section-head">
                    <span class="kicker">Trabajos realizados</span>
                    <h2>Algunas piezas que hemos impreso en 3D</h2>
                    <p>Cada proyecto es diferente. Estos son algunos ejemplos reales salidos de nuestras impresoras en Tarragona.</p>
                </div>
                <div class="grid grid-4">
                    ${works.map(([href, im, alt, tag, t, d]) => `
                    <a class="media-card" href="${href}">
                        <div class="media">${img(im, alt, { sizes: '(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw' })}</div>
                        <div class="body"><span class="tag">${tag}</span><h3>${t}</h3><p>${d}</p></div>
                    </a>`).join('')}
                </div>
            </div>
        </section>

        <section class="section section-alt" id="por-que">
            <div class="container split">
                <div>
                    <span class="kicker" style="color:var(--accent);font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:.85rem">Por qué elegirnos</span>
                    <h2>Tu taller de impresión 3D de confianza en el Camp de Tarragona</h2>
                    <p class="text-muted">Somos un pequeño taller local: hablas directamente con la persona que diseña e imprime tu pieza. Eso significa respuestas rápidas, asesoramiento honesto y cuidado en cada detalle.</p>
                    <ul class="check-list">
                        <li><strong>Atención personalizada</strong> de principio a fin, por WhatsApp, teléfono o email.</li>
                        <li><strong>Calidad profesional:</strong> calibramos y revisamos cada impresión para lograr acabados limpios y precisos.</li>
                        <li><strong>Precios competitivos</strong> y presupuesto cerrado antes de empezar.</li>
                        <li><strong>Del diseño a la pieza final:</strong> modelado 3D, impresión, montaje e incluso retroiluminación.</li>
                        <li><strong>Grandes formatos:</strong> piezas divididas y ensambladas de más de un metro.</li>
                    </ul>
                </div>
                <div class="split-media" style="max-width:420px;justify-self:center">
                    <video src="/assets/video/impresora-3d-trabajando.mp4" poster="/assets/img/impresora-3d-trabajando-poster.jpg" width="406" height="720" autoplay muted loop playsinline preload="none" aria-label="Impresora 3D imprimiendo una pieza en nuestro taller de Tarragona"></video>
                </div>
            </div>
        </section>

        <section class="section" id="materiales">
            <div class="container">
                <div class="section-head">
                    <span class="kicker">Materiales</span>
                    <h2>¿Qué material necesita tu pieza?</h2>
                    <p>Te asesoramos para elegir el material adecuado según el uso, la resistencia y el acabado que buscas.</p>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Material</th><th>Ideal para</th><th>Características</th></tr></thead>
                        <tbody>
                            <tr><td><strong>PLA</strong></td><td>Decoración, maquetas, prototipos, regalos, logos</td><td>Gran detalle, muchos colores, acabado excelente. Material de origen vegetal, fácil de imprimir.</td></tr>
                            <tr><td><strong>PETG</strong></td><td>Piezas funcionales, repuestos, uso exterior</td><td>Más resistente a golpes, a la humedad y a los rayos UV que el PLA.</td></tr>
                            <tr><td><strong>ABS</strong></td><td>Piezas técnicas y con temperatura (coche, electrodomésticos)</td><td>Resiste mejor el calor; se puede lijar y posprocesar.</td></tr>
                            <tr><td><strong>Otros</strong></td><td>Necesidades específicas</td><td>Consúltanos si buscas materiales flexibles u otras opciones especiales.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section class="section section-alt" id="zona">
            <div class="container split">
                <div>
                    <span class="kicker" style="color:var(--accent);font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:.85rem">Zona de servicio</span>
                    <h2>Impresión 3D en Tarragona, Reus y todo el Camp de Tarragona</h2>
                    <p class="text-muted">Estamos en Tarragona y trabajamos con clientes de toda la provincia. Si no eres de la zona, no pasa nada: enviamos tus piezas a cualquier punto de España.</p>
                    <ul class="chips mt-2">
                        ${AREAS.map((a) => {
                            const page = LANDINGS.find((l) => l.city === a);
                            return `<li>${page ? `<a href="/${page.slug}.html">${a}</a>` : a}</li>`;
                        }).join('')}
                        <li>Toda España</li>
                    </ul>
                </div>
                <div class="split-media" style="max-width:420px;justify-self:center">
                    ${img('logo-150cm-resultado-final', 'Logo de 150 cm retroiluminado impreso en 3D instalado en un gimnasio de Tarragona', { sizes: '(max-width: 860px) 100vw, 45vw' })}
                </div>
            </div>
        </section>

        <section class="section" id="preguntas">
            <div class="container">
                <div class="section-head center">
                    <span class="kicker">Preguntas frecuentes</span>
                    <h2>Dudas sobre impresión 3D en Tarragona</h2>
                </div>
                ${faqHtml(FAQ_HOME)}
            </div>
        </section>

        <section class="section section-alt" id="tienda">
            <div class="container">
                <div class="cta-band">
                    <div>
                        <h2>¿Buscas un regalo original?</h2>
                        <p>Descubre nuestra tienda de productos impresos en 3D con envío gratis a la España peninsular.</p>
                    </div>
                    <a class="btn btn-primary" href="/tienda.html">Ir a la tienda</a>
                </div>
            </div>
        </section>
${contactSection()}`;

    add(layout({
        file: 'index.html',
        url: '/',
        active: '/',
        title: 'Impresión 3D en Tarragona | Piezas a medida, llaveros y merchandising',
        description: 'Servicio de impresión 3D en Tarragona: piezas a medida, prototipos, repuestos, logos 3D, llaveros personalizados, trofeos y merchandising. Diseño 3D incluido. Presupuesto gratis por WhatsApp.',
        alternates: { es: '/', ca: '/ca/' },
        jsonld: [businessLd, websiteLd, faqLd(FAQ_HOME)],
        preload: '\n    <link rel="preload" as="image" href="/assets/img/mascara-impresa-3d-taller-tarragona-sm.webp" imagesrcset="/assets/img/mascara-impresa-3d-taller-tarragona-sm.webp 960w, /assets/img/mascara-impresa-3d-taller-tarragona.webp 1920w" imagesizes="100vw" fetchpriority="high">',
        body,
    }), '1.0');
}

// ======================================================================
// SERVICIOS (info.html)
// ======================================================================
{
    const FAQ_SERV = [
        ['¿Qué archivos aceptáis para imprimir en 3D?', 'Aceptamos STL, 3MF, OBJ y STEP. Si tu diseño está en otro formato, envíanoslo igualmente y lo revisamos. También podemos partir de una imagen, un plano o un boceto con medidas.'],
        ['¿Qué tamaño máximo podéis imprimir?', 'Cada impresión tiene un volumen limitado, pero dividimos las piezas grandes en partes que se unen después. Así hemos fabricado logos de 150 cm de alto.'],
        ['¿Qué precisión tiene la impresión 3D FDM?', 'En impresión FDM se suele trabajar con alturas de capa de entre 0,1 y 0,3 mm, según el detalle que necesite la pieza. Si tu pieza tiene que encajar con otra, indícanos las tolerancias y las ajustamos en el diseño.'],
        ['¿Podéis hacer series de varias unidades?', 'Sí. Imprimimos desde una sola unidad hasta series cortas. En cantidades mayores el precio por unidad baja.'],
    ];
    const body = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs([['Inicio', '/'], ['Servicios de impresión 3D', '/info.html']])}
                <h1>Servicio de impresión 3D en Tarragona</h1>
                <p class="lead">Impresión 3D bajo pedido, diseño y modelado 3D, prototipado rápido y piezas de repuesto para particulares, empresas, estudiantes y creadores de Tarragona y alrededores.</p>
                <div class="btn-row mt-2">
                    <a class="btn btn-primary" href="#contacto">Pedir presupuesto</a>
                    <a class="btn btn-ghost" href="${wa()}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
                </div>
            </div>
        </section>

        <section class="section" id="impresion">
            <div class="container split">
                <div>
                    <h2>Impresión 3D bajo pedido</h2>
                    <p class="text-muted">Diseñamos y fabricamos objetos tridimensionales a medida con tecnología de impresión 3D FDM (modelado por deposición fundida). Envíanos tu modelo y lo imprimimos con el material, color, resistencia y acabado que necesites, desde una sola unidad.</p>
                    <ul class="check-list">
                        <li>Archivos STL, 3MF, OBJ y STEP.</li>
                        <li>Revisión del modelo antes de imprimir: te avisamos si algo puede fallar.</li>
                        <li>Amplia gama de colores en PLA, PETG y ABS.</li>
                        <li>Unidades sueltas y series cortas.</li>
                    </ul>
                    <p class="mt-2"><a href="/blog/como-encargar-impresion-3d.html">Guía: cómo encargar una impresión 3D y qué enviar</a> · <a href="/blog/que-material-elegir-pla-petg-abs.html">Qué material elegir</a></p>
                </div>
                <div class="split-media" style="max-width:420px;justify-self:center">
                    <video src="/assets/video/impresora-3d-trabajando.mp4" poster="/assets/img/impresora-3d-trabajando-poster.jpg" width="406" height="720" autoplay muted loop playsinline preload="none" aria-label="Impresora 3D trabajando"></video>
                </div>
            </div>
        </section>

        <section class="section section-alt" id="diseno">
            <div class="container split reverse">
                <div>
                    <h2>Diseño y modelado 3D</h2>
                    <p class="text-muted">¿Tienes una idea pero no el archivo? Trabajamos contigo para crear un diseño a medida, desde modelos simples hasta estructuras complejas. Partimos de una foto, un boceto, un plano o la pieza original y te enseñamos el modelo antes de imprimir.</p>
                    <ul class="check-list">
                        <li>Modelado de piezas técnicas a partir de medidas.</li>
                        <li>Logos y letras en 3D a partir de tu imagen.</li>
                        <li>Adaptación y reparación de modelos descargados.</li>
                        <li>Despiece de piezas grandes para imprimirlas por partes.</li>
                    </ul>
                </div>
                <div class="split-media">
                    ${img('diseno-3d-logo-fusion', 'Diseño 3D de un logo en el programa de modelado antes de imprimirlo', { sizes: '(max-width: 860px) 100vw, 45vw' })}
                </div>
            </div>
        </section>

        <section class="section" id="prototipos">
            <div class="container split">
                <div>
                    <h2>Prototipado rápido para empresas y emprendedores</h2>
                    <p class="text-muted">Transforma tus ideas en prototipos funcionales de forma rápida y económica. Comprueba medidas, ergonomía y encajes antes de invertir en moldes o en producción, e itera tantas veces como necesites.</p>
                    <ul class="check-list">
                        <li>Prototipos funcionales y maquetas de presentación.</li>
                        <li>Utillaje, soportes y plantillas para tu negocio.</li>
                        <li>Series cortas y merchandising con tu marca.</li>
                    </ul>
                </div>
                <div class="split-media">
                    ${img('logo-150cm-despiece-60-piezas', 'Despiece en 60 piezas de un logo de gran formato preparado para impresión 3D', { sizes: '(max-width: 860px) 100vw, 45vw' })}
                </div>
            </div>
        </section>

        <section class="section section-alt" id="repuestos">
            <div class="container">
                <div class="section-head">
                    <h2>Piezas de repuesto impresas en 3D</h2>
                    <p>¿Se ha roto un clip, una rueda, un soporte o una tapa que ya no se fabrica? Medimos la pieza original, la modelamos en 3D y la imprimimos en un material resistente. Muchas veces la mejoramos para que no vuelva a romperse. <a href="/blog/piezas-de-repuesto-impresas-en-3d.html">Qué se puede fabricar y cómo pedirlo</a>.</p>
                </div>
                <div class="grid grid-3">
                    <article class="card"><div class="icon">${icon.wrench}</div><h3>Hogar</h3><p>Soportes, tapas, ganchos, ruedas de muebles, piezas de electrodomésticos y organizadores.</p></article>
                    <article class="card"><div class="icon">${icon.building}</div><h3>Negocios</h3><p>Expositores, soportes de producto, plantillas, recambios de maquinaria ligera y señalética.</p></article>
                    <article class="card"><div class="icon">${icon.sparkles}</div><h3>Hobby y maquetas</h3><p>Maquetas de arquitectura, piezas de modelismo, cosplay, accesorios para juegos de mesa y figuras.</p></article>
                </div>
            </div>
        </section>

        <section class="section" id="calidad">
            <div class="container">
                <div class="section-head">
                    <h2>Garantía de calidad</h2>
                    <p>Nos comprometemos a entregar piezas de la máxima calidad. Cada impresión se revisa antes de la entrega para asegurar que cumple lo acordado.</p>
                </div>
                <div class="grid grid-3">
                    <article class="card"><div class="icon">${icon.shield}</div><h3>Revisión de cada pieza</h3><p>Comprobamos medidas, acabado y resistencia antes de entregarla.</p></article>
                    <article class="card"><div class="icon">${icon.clock}</div><h3>Plazos claros</h3><p>Te damos una fecha realista con el presupuesto y te mantenemos informado.</p></article>
                    <article class="card"><div class="icon">${icon.truck}</div><h3>Entrega o envío</h3><p>Entrega en la zona de Tarragona o envío a cualquier punto de España.</p></article>
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                <div class="section-head center"><h2>Preguntas sobre el servicio</h2></div>
                ${faqHtml(FAQ_SERV)}
            </div>
        </section>
${contactSection({ heading: 'Cuéntanos tu proyecto', subject: 'Consulta de servicios desde la web' })}`;

    add(layout({
        file: 'info.html',
        url: '/info.html',
        active: '/info.html',
        title: 'Servicios de impresión 3D en Tarragona: piezas, diseño 3D y prototipos',
        description: 'Impresión 3D bajo pedido en Tarragona: imprimimos tus archivos STL, diseñamos piezas a medida, hacemos prototipos y piezas de repuesto en PLA, PETG y ABS. Presupuesto gratis.',
        jsonld: [
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Servicio de impresión 3D en Tarragona',
                serviceType: 'Impresión 3D',
                provider: { '@id': BUSINESS_ID },
                areaServed: [{ '@type': 'City', name: 'Tarragona' }, { '@type': 'Country', name: 'España' }],
                url: `${SITE}/info.html`,
                description: 'Impresión 3D bajo pedido, diseño y modelado 3D, prototipado rápido y piezas de repuesto.',
            },
            breadcrumbLd([['Inicio', '/'], ['Servicios de impresión 3D', '/info.html']]),
            faqLd(FAQ_SERV),
        ],
        body,
    }), '0.9');
}

// ======================================================================
// TIENDA
// ======================================================================
const productCard = (p, sizes = '(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw') => `
                    <a class="media-card" href="/${p.slug}.html">
                        <div class="media">${img(p.images[0][0], p.images[0][1], { sizes })}</div>
                        <div class="body">
                            <span class="tag">${p.category}</span>
                            <h3>${esc(p.name)}</h3>
                            <p>${esc(p.short)}</p>
                            <span class="price">${priceLabel(p)}</span>
                        </div>
                    </a>`;
{
    const body = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs([['Inicio', '/'], ['Tienda', '/tienda.html']])}
                <h1>Tienda de regalos y productos impresos en 3D</h1>
                <p class="lead">Productos personalizados fabricados en Tarragona. <strong style="color:var(--accent)">Envío gratuito a toda la España peninsular.</strong></p>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="grid grid-3">
                    ${PRODUCTS.map((p) => productCard(p)).join('')}
                    <div class="media-card" style="justify-content:center;align-items:center;text-align:center;padding:40px 24px;min-height:320px">
                        <div class="card" style="border:0;padding:0;background:none">
                            <div class="icon" style="margin:0 auto 18px">${icon.sparkles}</div>
                            <h3>¿No encuentras lo que buscas?</h3>
                            <p>Diseñamos cualquier producto a medida. Cuéntanos tu idea.</p>
                            <a class="btn btn-primary mt-2" href="/#contacto">Pedir presupuesto</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    add(layout({
        file: 'tienda.html',
        url: '/tienda.html',
        active: '/tienda.html',
        title: 'Regalos personalizados impresos en 3D | Tienda online desde Tarragona',
        description: 'Regalos y productos personalizados impresos en 3D en Tarragona: escudos con nombre, porta alianzas, fotos en relieve, trofeos, llaveros y antiestrés. Envío gratis a la España peninsular.',
        jsonld: [
            breadcrumbLd([['Inicio', '/'], ['Tienda', '/tienda.html']]),
            {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Productos impresos en 3D',
                itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/${p.slug}.html`, name: p.name })),
            },
        ],
        body,
    }), '0.8');
}

// ======================================================================
// PRODUCTOS
// ======================================================================
for (const p of PRODUCTS) {
    const url = `/${p.slug}.html`;
    const crumbs = [['Inicio', '/'], ['Tienda', '/tienda.html'], [p.name, url]];
    const multi = p.images.length > 1;
    const gallery = `
                    <div class="gallery" data-gallery>
                        <div class="gallery-main">
                            ${p.images.map(([n, alt], i) => img(n, alt, { sizes: '(max-width: 860px) 100vw, 50vw', eager: i === 0, cls: i === 0 ? 'is-active' : '' })).join('\n                            ')}
                            ${multi ? `<button class="gallery-btn prev" type="button" aria-label="Imagen anterior">${icon.left}</button>
                            <button class="gallery-btn next" type="button" aria-label="Imagen siguiente">${icon.right}</button>` : ''}
                        </div>
                        ${multi ? `<div class="gallery-thumbs">${p.images.map(([n, alt], i) => `<button type="button" aria-label="Ver imagen ${i + 1}" aria-current="${i === 0}"><img src="/assets/img/${n}-sm.webp" alt="" width="76" height="76" loading="lazy"></button>`).join('')}</div>` : ''}
                    </div>`;

    const waText = `Hola, quiero información sobre: ${p.name}`;
    let actions;
    if (p.variants) {
        actions = `
                        <label class="product-option">Elige el tamaño
                            <select data-variant-select="buy-btn">
                                ${p.variants.map((v) => `<option data-url="${v.url}" data-price="${fmt(v.price)}">${v.label} — ${fmt(v.price)}</option>`).join('')}
                            </select>
                        </label>
                        <div class="product-actions">
                            <a id="buy-btn" class="btn btn-primary btn-block" href="${p.variants[0].url}" target="_blank" rel="noopener">Comprar ahora con PayPal</a>
                            <a class="btn btn-whatsapp btn-block" href="${wa(waText)}" target="_blank" rel="noopener">${icon.whatsapp} Preguntar por WhatsApp</a>
                        </div>`;
    } else if (p.buy) {
        actions = `
                        <div class="product-actions">
                            <a class="btn btn-primary btn-block" href="${p.buy}" target="_blank" rel="noopener">Comprar ahora con PayPal</a>
                            <a class="btn btn-whatsapp btn-block" href="${wa(waText)}" target="_blank" rel="noopener">${icon.whatsapp} Preguntar por WhatsApp</a>
                        </div>`;
    } else {
        actions = `
                        <div class="product-actions">
                            <a class="btn btn-whatsapp btn-block" href="${wa(waText)}" target="_blank" rel="noopener">${icon.whatsapp} Pedir presupuesto por WhatsApp</a>
                            <a class="btn btn-ghost btn-block" href="mailto:${EMAIL}?subject=${encodeURIComponent('Consulta: ' + p.name)}">${icon.mail} Consultar por email</a>
                        </div>`;
    }

    const priceHtml = p.variants
        ? `<p class="product-price"><span data-variant-price>${fmt(p.variants[0].price)}</span></p>`
        : `<p class="product-price">${p.price == null ? 'Precio a consultar' : fmt(p.price)}${p.priceNote ? ` <small>(${p.priceNote})</small>` : ''}</p>`;

    const perks = p.price != null
        ? [[icon.truck, 'Envío gratis a la España peninsular'], [icon.shield, 'Pago seguro con PayPal'], [icon.hand, 'Fabricado bajo pedido en Tarragona']]
        : [[icon.pen, 'Diseño a medida incluido en el presupuesto'], [icon.hand, 'Fabricado en Tarragona'], [icon.truck, 'Entrega en Tarragona o envío a toda España']];

    const body = `
        <section class="section" style="padding-top:36px">
            <div class="container">
                ${breadcrumbs(crumbs)}
                <div class="product">
${gallery}
                    <div class="product-info">
                        <span class="tag">${p.category}</span>
                        <h1 class="mt-0" style="margin-top:10px">${esc(p.name)}</h1>
                        ${priceHtml}
                        <p class="description">${esc(p.description)}</p>
${actions}
                        <h2 style="font-size:1.2rem">Detalles</h2>
                        <ul class="check-list" style="margin-bottom:24px">
                            ${p.details.map((d) => `<li>${esc(d)}</li>`).join('\n                            ')}
                        </ul>
                        ${p.guide ? `<p><a href="${p.guide[1]}">${esc(p.guide[0])} →</a></p>` : ''}
                        <ul class="perks">
                            ${perks.map(([ic, t]) => `<li>${ic}${t}</li>`).join('\n                            ')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>${p.content ? `
        <section class="section section-alt">
            <div class="container prose">
${p.content}
            </div>
        </section>` : ''}${p.faqs ? `
        <section class="section">
            <div class="container">
                <div class="section-head center"><h2>Preguntas frecuentes</h2></div>
                ${faqHtml(p.faqs)}
            </div>
        </section>` : ''}
        <section class="section section-alt">
            <div class="container">
                <div class="section-head"><h2>Productos que quizás te interesen</h2></div>
                <div class="grid grid-3">
                    ${p.related.map((s) => productCard(bySlug[s])).join('')}
                </div>
            </div>
        </section>
${ctaBand('¿Lo quieres a tu manera?', 'Personalizamos cualquier producto: tamaño, colores, textos o un diseño totalmente nuevo.')}`;

    const jsonld = [breadcrumbLd(crumbs)];
    if (p.faqs) jsonld.push(faqLd(p.faqs));
    if (p.price == null) {
        jsonld.push({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: p.name,
            serviceType: p.category,
            description: p.description,
            image: p.images.map(([n]) => `${SITE}/assets/img/${n}.webp`),
            provider: { '@id': BUSINESS_ID },
            areaServed: [{ '@type': 'City', name: 'Tarragona' }, { '@type': 'AdministrativeArea', name: 'Provincia de Tarragona' }, { '@type': 'Country', name: 'España' }],
            url: `${SITE}${url}`,
        });
    }
    if (p.price != null) {
        const offerBase = {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            url: `${SITE}${url}`,
            seller: { '@id': BUSINESS_ID },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'EUR' },
                shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'ES' },
            },
        };
        jsonld.push({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: p.name,
            description: p.description,
            image: p.images.map(([n]) => `${SITE}/assets/img/${n}.webp`),
            brand: { '@type': 'Brand', name: NAME },
            category: p.category,
            offers: p.variants
                ? { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: Math.min(...p.variants.map((v) => v.price)), highPrice: Math.max(...p.variants.map((v) => v.price)), offerCount: p.variants.length, availability: 'https://schema.org/InStock', url: `${SITE}${url}` }
                : { ...offerBase, price: p.price.toFixed(2) },
        });
    }

    add(layout({
        file: `${p.slug}.html`,
        url,
        active: '/tienda.html',
        title: p.seoTitle || `${p.name}${/en 3D/.test(p.name) ? '' : ' en 3D'} | ${p.price != null ? fmt(p.price) + ' | ' : ''}Tu Impresión en 3D`,
        description: p.seoDescription || `${p.short} ${p.price != null ? `Precio: ${priceLabel(p)}. Envío gratis a la España peninsular.` : 'Pide presupuesto sin compromiso.'} Hecho en Tarragona.`,
        ogType: 'product',
        ogImage: `/assets/img/${p.images[0][0]}.webp`,
        jsonld,
        body,
    }), '0.7');
}

// ======================================================================
// PROYECTOS
// ======================================================================
{
    const body = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs([['Inicio', '/'], ['Proyectos', '/Projects/']])}
                <h1>Nuestros proyectos de impresión 3D</h1>
                <p class="lead">Encargos reales que hemos diseñado, impreso y montado en Tarragona, explicados paso a paso.</p>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="grid grid-2">
                    <a class="media-card" href="/Projects/Logo-150cm-impreso-en-3d.html">
                        <div class="media">${img('logo-retroiluminado-impreso-3d', 'Logo de 150 cm retroiluminado impreso en 3D para Scorpii Calisthenics', { sizes: '(max-width: 640px) 100vw, 50vw' })}</div>
                        <div class="body">
                            <span class="tag">Gran formato</span>
                            <h3>Logo de 150 cm impreso en 3D para Scorpii Calisthenics</h3>
                            <p>60 piezas impresas, una estructura de madera y retroiluminación para decorar la pared de una academia de calistenia.</p>
                        </div>
                    </a>
                    <a class="media-card" href="/producto-trofeos-personalizados.html">
                        <div class="media">${img('trofeo-personalizado-3d-1', 'Trofeos personalizados impresos en 3D para una competición', { sizes: '(max-width: 640px) 100vw, 50vw' })}</div>
                        <div class="body">
                            <span class="tag">Eventos</span>
                            <h3>Trofeos para una competición de calistenia</h3>
                            <p>Trofeos a dos colores con el logo de la academia y su nombre grabado en la base.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
${ctaBand('¿Tienes un proyecto en mente?', 'Grande o pequeño, lo estudiamos contigo y te damos presupuesto sin compromiso.')}`;
    add(layout({
        file: 'Projects/index.html',
        url: '/Projects/',
        active: '/Projects/',
        title: 'Proyectos de impresión 3D en Tarragona | Tu Impresión en 3D',
        description: 'Proyectos reales de impresión 3D realizados en Tarragona: logos de gran formato de 150 cm, trofeos personalizados y más, explicados paso a paso.',
        jsonld: [breadcrumbLd([['Inicio', '/'], ['Proyectos', '/Projects/']])],
        body,
    }), '0.7');

    const url = '/Projects/Logo-150cm-impreso-en-3d.html';
    const crumbs = [['Inicio', '/'], ['Proyectos', '/Projects/'], ['Logo de 150 cm impreso en 3D', url]];
    const body2 = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs(crumbs)}
                <h1>Logo de 150 cm impreso en 3D para Scorpii Calisthenics</h1>
                <p class="lead">Creamos un logo de metro y medio para decorar una de las paredes de <a href="https://scorpiicalisthenics.com/" target="_blank" rel="noopener">Scorpii Calisthenics</a>, una academia de calistenia. Te contamos todo el proceso, del diseño a la instalación.</p>
            </div>
        </section>
        <section class="section">
            <article class="container prose">
                <div class="video-embed">
                    <iframe src="https://www.youtube-nocookie.com/embed/WhrHBzqfT3M" title="He impreso un logo enorme con mi impresora 3D" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <h2>El reto: una pieza de metro y medio</h2>
                <p>Nos contactaron para imprimir un logo de un tamaño enorme: una pieza de <strong>150 cm de alto</strong>. Una pieza así no se puede imprimir de una sola vez, así que había que dividirla en muchos trozos para imprimirlos por separado y unirlos después.</p>
                <p>Al modelar el despiece nos dimos cuenta de que el trabajo era mucho mayor de lo que parecía: la primera mitad del logo necesitaba <strong>30 piezas</strong>, y como el logo es simétrico, la segunda "C" requería otras 30. En total, <strong>60 piezas</strong>.</p>
                <figure>
                    ${img('logo-150cm-despiece-60-piezas', 'Despiece del logo en 60 piezas para impresión 3D', { sizes: '(max-width: 760px) 100vw, 760px' })}
                    <figcaption>Despiece del logo: todas las piezas que había que imprimir.</figcaption>
                </figure>

                <h2>Impresión de la primera mitad</h2>
                <p>Con el presupuesto aprobado empezamos a imprimir. Tras muchas horas de impresora llegó el momento de probar la primera mitad del logo: este fue el resultado de la primera "C".</p>
                <figure>
                    ${img('logo-150cm-primera-mitad', 'Primera mitad del logo de 150 cm montada en el suelo', { sizes: '(max-width: 760px) 100vw, 760px' })}
                    <figcaption>La primera "C" del logo, ya ensamblada.</figcaption>
                </figure>

                <h2>Estructura de madera para colgarlo en la pared</h2>
                <p>A finales de enero ya estaba todo impreso, y en febrero llegó el montaje final. Antes tocó hacer un poco de carpintería: necesitábamos colocar unas maderas detrás del logo para que se sostuviera en la pared y para dejar espacio a la iluminación.</p>
                <div class="figure-pair">
                    <figure>
                        ${img('logo-150cm-boceto-montaje', 'Esquema de montaje: logo, madera y pared', { sizes: '(max-width: 560px) 100vw, 380px' })}
                        <figcaption>Esquema de capas: logo, madera y pared.</figcaption>
                    </figure>
                    <figure>
                        <video src="/assets/video/logo-150cm-estructura-madera.mp4" poster="/assets/img/logo-150cm-estructura-madera-poster.jpg" width="1280" height="720" controls muted playsinline preload="none"></video>
                        <figcaption>Preparando la estructura de madera.</figcaption>
                    </figure>
                </div>

                <h2>Resultado final</h2>
                <p>Finalmente pegamos las piezas a la madera y colocamos el logo en la pared. Con la retroiluminación encendida, el resultado habla por sí solo.</p>
                <div class="figure-pair">
                    <figure>${img('logo-150cm-resultado-final', 'Logo de 150 cm retroiluminado instalado en la pared', { sizes: '(max-width: 560px) 100vw, 380px' })}</figure>
                    <figure>${img('logo-150cm-resultado-final-2', 'Otra vista del logo de 150 cm impreso en 3D terminado', { sizes: '(max-width: 560px) 100vw, 380px' })}</figure>
                </div>

                <div class="callout">
                    <p><strong>¿Quieres un logo así para tu negocio?</strong> Diseñamos e imprimimos logos y letras corpóreas a cualquier tamaño. <a href="/producto-logo-imagen.html">Más información</a> o <a href="/#contacto">pide presupuesto</a>.</p>
                </div>
            </article>
        </section>
${ctaBand()}`;
    add(layout({
        file: 'Projects/Logo-150cm-impreso-en-3d.html',
        url,
        active: '/Projects/',
        title: 'Logo de 150 cm impreso en 3D: proyecto paso a paso | Tu Impresión en 3D',
        description: 'Cómo diseñamos, imprimimos en 60 piezas y montamos un logo retroiluminado de 150 cm para Scorpii Calisthenics. Proyecto de impresión 3D de gran formato en Tarragona.',
        ogType: 'article',
        ogImage: '/assets/img/logo-retroiluminado-impreso-3d.webp',
        jsonld: [
            breadcrumbLd(crumbs),
            {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: 'Logo de 150 cm impreso en 3D para Scorpii Calisthenics',
                image: [`${SITE}/assets/img/logo-retroiluminado-impreso-3d.webp`, `${SITE}/assets/img/logo-150cm-resultado-final.webp`],
                datePublished: '2024-03-05',
                dateModified: TODAY,
                author: { '@id': BUSINESS_ID },
                publisher: { '@id': BUSINESS_ID },
                mainEntityOfPage: `${SITE}${url}`,
                video: {
                    '@type': 'VideoObject',
                    name: 'He impreso un logo enorme con mi impresora 3D',
                    description: 'Proceso de impresión 3D y montaje de un logo de 150 cm para Scorpii Calisthenics.',
                    thumbnailUrl: 'https://i.ytimg.com/vi/WhrHBzqfT3M/hqdefault.jpg',
                    uploadDate: '2024-03-05',
                    embedUrl: 'https://www.youtube.com/embed/WhrHBzqfT3M',
                },
            },
        ],
        body: body2,
    }), '0.7');
}

// ======================================================================
// BLOG
// ======================================================================
{
    const GROUPS = [
        ['clientes', 'Guías para encargar tu pieza', 'Todo lo que necesitas saber antes de pedir una impresión 3D: precios, materiales, qué enviar y qué se puede fabricar.'],
        ['makers', 'Si imprimes en casa', 'Consejos técnicos que usamos a diario en el taller, por si tienes tu propia impresora.'],
    ];
    const card = (a) => `
                    <a class="media-card" href="/blog/${a.slug}.html">
                        <div class="media">${img(a.image, a.imageAlt, { sizes: '(max-width: 640px) 100vw, 33vw' })}</div>
                        <div class="body">
                            <span class="tag">${a.category}</span>
                            <h3>${esc(a.title)}</h3>
                            <p>${esc(a.description)}</p>
                        </div>
                    </a>`;
    const body = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs([['Inicio', '/'], ['Blog', '/blog/']])}
                <h1>Guías de impresión 3D</h1>
                <p class="lead">Respuestas claras a las preguntas que nos hacen cada semana en nuestro taller de Tarragona: cuánto cuesta, qué material elegir, cómo pedir una pieza de repuesto o un logo para tu negocio.</p>
            </div>
        </section>
        ${GROUPS.map(([g, title, text], gi) => `
        <section class="section${gi % 2 ? ' section-alt' : ''}">
            <div class="container">
                <div class="section-head"><h2>${title}</h2><p>${text}</p></div>
                <div class="grid grid-3">
                    ${ARTICLES.filter((a) => a.group === g).map(card).join('')}
                </div>
            </div>
        </section>`).join('')}
${ctaBand()}`;
    add(layout({
        file: 'blog/index.html',
        url: '/blog/',
        active: '/blog/',
        title: 'Guías de impresión 3D: precios, materiales y cómo encargar | Tu Impresión en 3D',
        description: 'Guías prácticas de impresión 3D: cuánto cuesta imprimir en 3D, qué material elegir, cómo encargar una pieza, repuestos, logos para negocios y trofeos personalizados.',
        jsonld: [breadcrumbLd([['Inicio', '/'], ['Blog', '/blog/']])],
        body,
    }), '0.7');

    const slugify = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    ARTICLES.forEach((a) => {
        const url = `/blog/${a.slug}.html`;
        const crumbs = [['Inicio', '/'], ['Blog', '/blog/'], [a.title, url]];
        const sameGroup = ARTICLES.filter((x) => x.group === a.group);
        const i = sameGroup.indexOf(a);
        const prev = sameGroup[(i - 1 + sameGroup.length) % sameGroup.length];
        const next = sameGroup[(i + 1) % sameGroup.length];
        const readMin = Math.max(3, Math.round(a.body.replace(/<[^>]+>/g, ' ').split(/\s+/).length / 200));
        const dateText = (d) => new Date(d).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

        // Añade ids a los h2 y construye el índice
        const toc = [];
        let content = a.body.replace(/<h2>(.*?)<\/h2>/g, (_, t) => {
            const id = slugify(t);
            toc.push([id, t.replace(/<[^>]+>/g, '').replace(/^\d+\.\s*/, '')]);
            return `<h2 id="${id}">${t}</h2>`;
        });
        if (a.faq) toc.push(['preguntas-frecuentes', 'Preguntas frecuentes']);

        const cta = a.cta || ['¿Quieres que lo imprimamos por ti?', `En ${NAME} te asesoramos y fabricamos tu pieza en Tarragona, con envíos a toda España. Presupuesto gratis y sin compromiso.`];
        const ctaWa = a.ctaWa || 'Hola, he leído vuestra guía y quiero pedir presupuesto de impresión 3D';

        const body = `
        <section class="page-hero">
            <div class="container" style="max-width:840px">
                ${breadcrumbs(crumbs)}
                <span class="tag">${a.category}</span>
                <h1 style="margin-top:12px">${esc(a.h1 || a.title)}</h1>
                <p class="lead">${esc(a.description)}</p>
                <p class="article-meta">Por el equipo de ${NAME} (Tarragona) · ${a.modified ? `Actualizado el <time datetime="${a.modified}">${dateText(a.modified)}</time>` : `<time datetime="${a.date}">${dateText(a.date)}</time>`} · ${readMin} min de lectura</p>
            </div>
        </section>
        <section class="section" style="padding-top:48px">
            <article class="container prose">
                <div class="summary">
                    <h2 class="summary-title">En resumen</h2>
                    <ul>
                        ${a.summary.map((s) => `<li>${s}</li>`).join('\n                        ')}
                    </ul>
                </div>
                ${toc.length > 3 ? `<nav class="toc" aria-label="Contenido del artículo">
                    <strong>Contenido</strong>
                    <ol>${toc.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}</ol>
                </nav>` : ''}
${content}
                ${a.faq ? `<h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
                ${faqHtml(a.faq)}` : ''}
                <div class="cta-inline">
                    <h2>${cta[0]}</h2>
                    <p>${cta[1]}</p>
                    <div class="btn-row">
                        <a class="btn btn-whatsapp" href="${wa(ctaWa)}" target="_blank" rel="noopener">${icon.whatsapp} Escríbenos por WhatsApp</a>
                        <a class="btn btn-primary" href="/#contacto">Pedir presupuesto</a>
                    </div>
                </div>
                ${a.related ? `<div class="related">
                    <strong>Te puede interesar</strong>
                    <ul>${a.related.map(([t, u]) => `<li><a href="${u}">${esc(t)}</a></li>`).join('')}</ul>
                </div>` : ''}
            </article>
            <nav class="article-nav" aria-label="Más artículos">
                <a class="btn btn-ghost" href="/blog/${prev.slug}.html">${icon.left} ${esc(prev.short)}</a>
                <a class="btn btn-ghost" href="/blog/${next.slug}.html">${esc(next.short)} ${icon.right}</a>
            </nav>
        </section>`;
        const jsonld = [
            breadcrumbLd(crumbs),
            {
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: a.h1 || a.title,
                description: a.description,
                image: `${SITE}/assets/img/${a.image}.webp`,
                datePublished: a.date,
                dateModified: a.modified || a.date,
                inLanguage: 'es-ES',
                author: { '@type': 'Organization', name: NAME, url: `${SITE}/` },
                publisher: { '@id': BUSINESS_ID },
                mainEntityOfPage: `${SITE}${url}`,
                about: a.about || undefined,
            },
        ];
        if (a.faq) jsonld.push(faqLd(a.faq));
        add(layout({
            file: `blog/${a.slug}.html`,
            url,
            active: '/blog/',
            title: `${a.seoTitle || a.title} | Tu Impresión en 3D`,
            description: a.description,
            ogType: 'article',
            ogImage: `/assets/img/${a.image}.webp`,
            jsonld,
            head: a.ads ? ADSENSE : '',
            body,
        }), a.group === 'clientes' ? '0.8' : '0.5', a.modified || a.date);
    });
}

// ======================================================================
// PRIVACIDAD
// ======================================================================
{
    const body = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs([['Inicio', '/'], ['Política de privacidad', '/privacidad.html']])}
                <h1>Política de privacidad</h1>
                <p class="lead">Cómo recopilamos, utilizamos y protegemos tus datos personales cuando utilizas tuimpresionen3d.com.</p>
            </div>
        </section>
        <section class="section" style="padding-top:48px">
            <article class="container prose">
                <h2>Introducción</h2>
                <p>En tuimpresionen3d.com (en adelante, ${NAME}) nos comprometemos a proteger la privacidad y la seguridad de los datos personales de nuestros usuarios. Esta política describe cómo recopilamos, utilizamos y protegemos tu información personal cuando utilizas este sitio web.</p>
                <h2>¿Qué información recopilamos?</h2>
                <ul>
                    <li><strong>Información que nos facilitas:</strong> nombre, correo electrónico, teléfono, dirección postal, información de pago y cualquier otra información que nos proporciones voluntariamente al contactarnos o comprar.</li>
                    <li><strong>Información recopilada automáticamente:</strong> dirección IP, tipo de navegador, sistema operativo, fecha y hora de la visita, páginas visitadas y otra información sobre tu actividad en el sitio, mediante herramientas de analítica (Google Analytics y Microsoft Clarity) y publicidad (Google AdSense).</li>
                </ul>
                <h2>¿Cómo utilizamos tu información?</h2>
                <ul>
                    <li>Para prestarte los servicios y productos que solicitas: procesar pedidos, enviarte información sobre ellos y darte asistencia.</li>
                    <li>Para mejorar el sitio web y la experiencia de usuario, y realizar análisis estadísticos.</li>
                    <li>Para comunicarnos contigo sobre tus consultas y, si lo aceptas, sobre nuestros productos y ofertas.</li>
                    <li>Para cumplir con nuestras obligaciones legales.</li>
                </ul>
                <h2>¿Con quién compartimos tu información?</h2>
                <p>No compartimos tu información personal con terceros sin tu consentimiento, salvo con proveedores que nos ayudan a operar el sitio (por ejemplo, procesamiento de pagos con PayPal, envío de formularios con FormSubmit, mensajería, analítica) o cuando lo exija la ley.</p>
                <h2>¿Cómo protegemos tu información?</h2>
                <p>Tomamos medidas de seguridad razonables para proteger tu información frente a accesos no autorizados, uso indebido, divulgación, alteración o destrucción, como el cifrado SSL/TLS en la transmisión de datos y el acceso limitado a la información.</p>
                <h2>Tus derechos</h2>
                <p>Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <a href="mailto:${EMAIL}">${EMAIL}</a>. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
                <h2>Cookies</h2>
                <p>Este sitio utiliza cookies propias y de terceros con fines analíticos (Google Analytics, Microsoft Clarity) y publicitarios (Google AdSense). Puedes bloquear o eliminar las cookies desde la configuración de tu navegador.</p>
                <h2>Cambios en esta política</h2>
                <p>Podemos modificar esta política en cualquier momento. Si los cambios son sustanciales, lo indicaremos en esta página.</p>
                <h2>Contacto</h2>
                <p>Si tienes cualquier pregunta sobre esta política, escríbenos a <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
            </article>
        </section>`;
    add(layout({
        file: 'privacidad.html',
        url: '/privacidad.html',
        title: 'Política de privacidad | Tu Impresión en 3D',
        description: 'Política de privacidad y cookies de Tu Impresión en 3D, servicio de impresión 3D en Tarragona.',
        jsonld: [breadcrumbLd([['Inicio', '/'], ['Política de privacidad', '/privacidad.html']])],
        body,
    }), '0.2');
}

// ======================================================================
// 404
// ======================================================================
layout({
    file: '404.html',
    url: '/404.html',
    title: 'Página no encontrada | Tu Impresión en 3D',
    description: 'La página que buscas no existe.',
    robots: 'noindex, follow',
    body: `
        <section class="section">
            <div class="container text-center" style="max-width:640px">
                <h1>Esta página no existe</h1>
                <p class="text-muted">Puede que se haya movido o que el enlace no sea correcto. Estas páginas te pueden interesar:</p>
                <div class="btn-row mt-2" style="justify-content:center">
                    <a class="btn btn-primary" href="/">Impresión 3D en Tarragona</a>
                    <a class="btn btn-ghost" href="/tienda.html">Tienda</a>
                    <a class="btn btn-ghost" href="/blog/">Blog</a>
                </div>
            </div>
        </section>`,
});

// ======================================================================
// LANDINGS (merchandising y municipios)
// ======================================================================
for (const l of LANDINGS) {
    const url = `/${l.slug}.html`;
    const crumbs = [['Inicio', '/'], [l.crumb, url]];
    const where = l.city || 'Tarragona';
    const body = `
        <section class="page-hero">
            <div class="container">
                ${breadcrumbs(crumbs)}
                <h1>${l.h1}</h1>
                <p class="lead">${l.lead}</p>
                <div class="btn-row mt-2">
                    <a class="btn btn-primary" href="#contacto">Pedir presupuesto gratis</a>
                    <a class="btn btn-ghost" href="${wa(l.waText)}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container split">
                <div>
                    <h2>${l.intro.heading}</h2>
                    <p class="text-muted">${l.intro.text}</p>
                    <ul class="check-list">
                        ${l.intro.points.map((x) => `<li>${x}</li>`).join('\n                        ')}
                    </ul>
                </div>
                <div class="split-media" style="max-width:480px;justify-self:center">
                    ${img(l.intro.image[0], l.intro.image[1], { sizes: '(max-width: 860px) 100vw, 45vw', eager: true })}
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                <div class="section-head">
                    <h2>${l.cardsHeading}</h2>
                    ${l.cardsLead ? `<p>${l.cardsLead}</p>` : ''}
                </div>
                <div class="grid grid-3">
                    ${l.cards.map(([ic, t, d, href]) => `
                    <article class="card">
                        <div class="icon">${icon[ic]}</div>
                        <h3>${href ? `<a href="${href}" style="color:inherit;text-decoration:none">${t}</a>` : t}</h3>
                        <p>${d}</p>
                    </article>`).join('')}
                </div>
            </div>
        </section>
${l.works ? `
        <section class="section">
            <div class="container">
                <div class="section-head"><h2>Trabajos reales</h2><p>Piezas que hemos diseñado e impreso en nuestro taller de Tarragona.</p></div>
                <div class="grid grid-4">
                    ${l.works.map(([href, im, alt, t]) => `
                    <a class="media-card" href="${href}">
                        <div class="media">${img(im, alt, { sizes: '(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw' })}</div>
                        <div class="body"><h3>${t}</h3></div>
                    </a>`).join('')}
                </div>
            </div>
        </section>` : ''}${l.audience ? `
        <section class="section section-alt">
            <div class="container">
                <div class="section-head"><h2>${l.audience.heading}</h2></div>
                <div class="grid grid-4">
                    ${l.audience.items.map(([t, d]) => `<article class="card"><h3>${t}</h3><p>${d}</p></article>`).join('')}
                </div>
            </div>
        </section>` : ''}

        <section class="section">
            <div class="container">
                <div class="section-head center">
                    <h2>Cómo encargarlo${l.city ? ` desde ${l.city}` : ''}</h2>
                </div>
                <ol class="steps grid grid-4">
                    <li><h3>Escríbenos</h3><p>Por WhatsApp, email o el formulario: fotos, logo, archivo 3D o una idea.</p></li>
                    <li><h3>Diseño y precio</h3><p>Te enviamos la propuesta, el precio cerrado y el plazo. Sin compromiso.</p></li>
                    <li><h3>Fabricación</h3><p>Imprimimos en nuestro taller de Tarragona y revisamos cada pieza.</p></li>
                    <li><h3>Entrega</h3><p>Entrega acordada en ${where} o envío a cualquier punto de España.</p></li>
                </ol>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                <div class="section-head center"><h2>Preguntas frecuentes${l.city ? ` sobre impresión 3D en ${l.city}` : ''}</h2></div>
                ${faqHtml(l.faqs)}
                <p class="mt-2" style="text-align:center">${(l.related || [['Servicios de impresión 3D', '/info.html'], ['Merchandising personalizado', '/merchandising-personalizado-tarragona.html'], ['Tienda de regalos 3D', '/tienda.html'], ['Precios de impresión 3D', '/blog/cuanto-cuesta-imprimir-en-3d.html']])
                    .filter(([, href]) => href !== url).map(([t, href]) => `<a href="${href}">${t}</a>`).join(' · ')}</p>
            </div>
        </section>
${contactSection({ heading: `Pide presupuesto${l.city ? ` desde ${l.city}` : ''}`, subject: `Solicitud desde la web: ${l.crumb}` })}`;

    add(layout({
        file: `${l.slug}.html`,
        url,
        active: l.active || '',
        title: l.title,
        description: l.description,
        ogImage: `/assets/img/${l.intro.image[0]}.webp`,
        jsonld: [
            {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: l.h1,
                serviceType: l.serviceType,
                description: l.description,
                provider: { '@id': BUSINESS_ID },
                areaServed: l.city
                    ? { '@type': 'City', name: l.city }
                    : [{ '@type': 'City', name: 'Tarragona' }, { '@type': 'AdministrativeArea', name: 'Provincia de Tarragona' }, { '@type': 'Country', name: 'España' }],
                url: `${SITE}${url}`,
            },
            breadcrumbLd(crumbs),
            faqLd(l.faqs),
        ],
        body,
    }), l.priority);
}

// ======================================================================
// PORTADA EN CATALÁN (/ca/)
// ======================================================================
{
    const body = `
        <section class="page-hero">
            <div class="container">
                <span class="eyebrow">${icon.pin.replace('<svg', '<svg width="16" height="16"')} Tarragona · Enviaments a tot Espanya</span>
                <h1>${CA.h1}</h1>
                <p class="lead">${CA.lead}</p>
                <div class="btn-row mt-2">
                    <a class="btn btn-primary" href="#contacte">Demana pressupost gratuït</a>
                    <a class="btn btn-ghost" href="${wa('Hola, vull pressupost d’impressió 3D')}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
                </div>
                <p class="mt-2"><a href="/" hreflang="es" lang="es">Versión en castellano</a></p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Servei d'impressió 3D a Tarragona per a particulars i empreses</h2>
                    <p>Som un taller d'impressió 3D a Tarragona. Imprimim els teus arxius, dissenyem peces a mida i fabriquem productes personalitzats en PLA, PETG i ABS, en molts colors.</p>
                </div>
                <div class="grid grid-3">
                    ${CA.services.map(([ic, t, d]) => `
                    <article class="card">
                        <div class="icon">${icon[ic]}</div>
                        <h3>${t}</h3>
                        <p>${d}</p>
                    </article>`).join('')}
                </div>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container split">
                <div>
                    <h2>Clauers personalitzats i marxandatge amb el teu logo</h2>
                    <p class="text-muted">Fabriquem clauers amb la forma del teu logo, trofeus per a clubs i torneigs, imants, expositors i regals d'empresa. Des d'una unitat fins a sèries per a fires, casaments i esdeveniments.</p>
                    <p><a href="/merchandising-personalizado-tarragona.html" hreflang="es">Veure el marxandatge (en castellà)</a> · <a href="/producto-llaveros-personalizados.html" hreflang="es">Clauers personalitzats</a></p>
                </div>
                <div class="split-media" style="max-width:420px;justify-self:center">
                    ${img('llaveros-personalizados-3d', 'Clauers personalitzats impresos en 3D a Tarragona', { sizes: '(max-width: 860px) 100vw, 45vw' })}
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="section-head">
                    <h2>Impressió 3D a Tarragona, Reus i tot el Camp de Tarragona</h2>
                    <p>Som a Tarragona i treballem amb clients de tota la província. Si no ets de la zona, t'enviem les peces a qualsevol punt d'Espanya.</p>
                </div>
                <ul class="chips">
                    ${AREAS.map((a) => `<li>${a}</li>`).join('')}
                </ul>
            </div>
        </section>

        <section class="section section-alt">
            <div class="container">
                <div class="section-head center"><h2>Preguntes freqüents</h2></div>
                ${faqHtml(CA.faqs)}
            </div>
        </section>

        <section class="section" id="contacte">
            <div class="container">
                <div class="cta-band">
                    <div>
                        <h2>Demana el teu pressupost d'impressió 3D</h2>
                        <p>Explica'ns què necessites (mides, quantitat, ús de la peça) i envia'ns l'arxiu, una foto o un esbós. Et responem amb preu i termini sense compromís.</p>
                    </div>
                    <div class="btn-row">
                        <a class="btn btn-whatsapp" href="${wa('Hola, vull pressupost d’impressió 3D')}" target="_blank" rel="noopener">${icon.whatsapp} WhatsApp</a>
                        <a class="btn btn-primary" href="mailto:${EMAIL}">${icon.mail} ${EMAIL}</a>
                        <a class="btn btn-ghost" href="tel:${TEL}">${icon.phone} ${PHONE}</a>
                    </div>
                </div>
            </div>
        </section>`;
    add(layout({
        file: 'ca/index.html',
        url: '/ca/',
        active: '/ca/',
        lang: 'ca',
        alternates: { es: '/', ca: '/ca/' },
        title: CA.title,
        description: CA.description,
        jsonld: [
            {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: CA.title,
                inLanguage: 'ca',
                url: `${SITE}/ca/`,
                about: { '@id': BUSINESS_ID },
                isPartOf: { '@id': `${SITE}/#web` },
            },
            faqLd(CA.faqs),
        ],
        body,
    }), '0.8');
}

// ======================================================================
// Redirecciones de páginas antiguas
// ======================================================================
redirectPage('shop.html', '/tienda.html', 'Tienda | Tu Impresión en 3D');
redirectPage('contactType.html', '/#contacto', 'Contacto | Tu Impresión en 3D');
redirectPage('blog/MejoresImpresoras2024.html', '/blog/comprar-impresora-3d-o-encargar.html', '¿Comprar una impresora 3D o encargar las piezas?');
redirectPage('blog/mejores-impresoras-3d-para-empezar.html', '/blog/comprar-impresora-3d-o-encargar.html', '¿Comprar una impresora 3D o encargar las piezas?');
redirectPage('blog/merece-la-pena-comprar-impresora-3d.html', '/blog/comprar-impresora-3d-o-encargar.html', '¿Comprar una impresora 3D o encargar las piezas?');
redirectPage('blog/comoCalibrarTuImpresora3D.html', '/blog/como-calibrar-impresora-3d.html', 'Cómo calibrar una impresora 3D');
redirectPage('blog/ImprimeMasRapidoSinPerderCalidad.html', '/blog/imprimir-mas-rapido-boquillas-grandes.html', 'Imprime más rápido sin perder calidad');

// ======================================================================
// sitemap.xml
// ======================================================================
fs.writeFileSync(
    path.join(ROOT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `    <url>
        <loc>${SITE}${p.url}</loc>
        <lastmod>${p.lastmod}</lastmod>
        <priority>${p.priority}</priority>
    </url>`).join('\n')}
</urlset>
`);

// ======================================================================
// llms.txt (resumen para asistentes de IA)
// ======================================================================
const strip = (h) => h.replace(/<[^>]+>/g, '');
fs.writeFileSync(
    path.join(ROOT, 'llms.txt'),
    `# ${NAME}

> ${NAME} (tuimpresionen3d.com) es un servicio de impresión 3D en Tarragona (Cataluña, España). Imprime piezas bajo pedido, diseña y modela en 3D, fabrica prototipos, piezas de repuesto, logos y letras corpóreas, trofeos y regalos personalizados para particulares y empresas. Da servicio en Tarragona, Reus, Salou, Cambrils y todo el Camp de Tarragona, y envía a toda España.

## Datos clave

- Nombre: ${NAME}
- Web: ${SITE}/
- Ubicación: Tarragona, Cataluña, España
- Zona de servicio: ${AREAS.join(', ')} y envíos a toda España
- Teléfono y WhatsApp: ${PHONE}
- Email: ${EMAIL}
- Instagram: ${SOCIAL.instagram}
- TikTok: ${SOCIAL.tiktok}
- YouTube: ${SOCIAL.youtube}
- Tecnología: impresión 3D FDM
- Materiales: PLA, PETG, ABS (otros bajo consulta)
- Archivos aceptados: STL, 3MF, OBJ, STEP (o diseño desde foto, boceto o pieza original)
- Presupuesto: gratuito y sin compromiso (WhatsApp, teléfono, email o formulario web)

## Servicios

- [Impresión 3D bajo pedido en Tarragona](${SITE}/info.html): impresión de archivos 3D de clientes, desde una unidad hasta series cortas.
- [Diseño y modelado 3D](${SITE}/info.html#diseno): creación del modelo a partir de una foto, boceto o pieza.
- [Prototipado rápido](${SITE}/info.html#prototipos): prototipos funcionales para empresas y emprendedores.
- [Piezas de repuesto](${SITE}/info.html#repuestos): réplica y mejora de piezas rotas o descatalogadas.
- [Logos, letras y rótulos 3D](${SITE}/producto-logo-imagen.html): incluidos grandes formatos (más de 1 m) y retroiluminados.
- [Trofeos personalizados](${SITE}/producto-trofeos-personalizados.html): para clubes, torneos, eventos y empresas.
- [Merchandising personalizado](${SITE}/merchandising-personalizado-tarragona.html): llaveros con logo, trofeos, imanes, expositores y regalos de empresa, desde 1 unidad.
- [Llaveros personalizados](${SITE}/producto-llaveros-personalizados.html): con logo, nombre o diseño, por unidades o en cantidad.

## Zonas

- [Impresión 3D en Reus](${SITE}/impresion-3d-reus.html)
- [Impresión 3D en Salou](${SITE}/impresion-3d-salou.html)
- [Impresión 3D en Cambrils](${SITE}/impresion-3d-cambrils.html)
- [Impressió 3D a Tarragona (català)](${SITE}/ca/)

## Tienda (envío gratis a la España peninsular)

${PRODUCTS.map((p) => `- [${p.name}](${SITE}/${p.slug}.html): ${priceLabel(p)}. ${p.short}`).join('\n')}

## Proyectos destacados

- [Logo de 150 cm impreso en 3D para Scorpii Calisthenics](${SITE}/Projects/Logo-150cm-impreso-en-3d.html): 60 piezas impresas, estructura de madera y retroiluminación.

## Guías

${ARTICLES.map((a) => `- [${a.title}](${SITE}/blog/${a.slug}.html): ${a.description}`).join('\n')}

## Preguntas frecuentes

${FAQ_HOME.map(([q, a]) => `### ${q}\n\n${strip(a)}`).join('\n\n')}
`);

console.log(`OK: ${pages.length} páginas indexables`);
