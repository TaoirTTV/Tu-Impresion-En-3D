// Artículos del blog.
// group: 'clientes' (personas que quieren encargar) o 'makers' (imprimen en casa).
// El orden dentro de cada grupo define la navegación anterior/siguiente.
const WA = 'https://wa.me/34644643895';

export const ARTICLES = [
    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'como-encargar-impresion-3d',
        short: 'Cómo encargar una impresión 3D',
        title: 'Cómo encargar una pieza impresa en 3D paso a paso',
        seoTitle: 'Cómo encargar una impresión 3D: qué enviar y cómo pedir presupuesto',
        h1: 'Cómo encargar una pieza impresa en 3D (y qué enviar para recibir un presupuesto exacto)',
        description: 'Guía práctica para encargar una impresión 3D: qué información enviar, cómo medir una pieza, qué archivos sirven, cómo se calcula el plazo y qué esperar en cada paso.',
        category: 'Cómo encargar',
        date: '2026-10-02',
        image: 'diseno-3d-logo-fusion',
        imageAlt: 'Modelo 3D preparado para imprimir',
        summary: [
            'No necesitas saber de impresión 3D: basta con contarnos <strong>para qué es la pieza</strong>, sus <strong>medidas</strong>, la <strong>cantidad</strong> y cuándo la necesitas.',
            'Si tienes el archivo 3D (STL, 3MF, OBJ o STEP), el presupuesto es inmediato. Si no, lo diseñamos desde una foto con medidas, un boceto o la pieza original.',
            'Una foto con una regla o un metro al lado evita la mayoría de malentendidos.',
            'Recibirás un precio cerrado, el material recomendado y el plazo antes de empezar.',
        ],
        body: `
                <p>La mayoría de personas que nos escriben nunca han encargado una impresión 3D y no saben por dónde empezar. Es normal. En esta guía te explicamos exactamente qué necesitamos para darte un precio ajustado a la primera, sin idas y venidas.</p>

                <h2>1. Cuéntanos para qué es la pieza</h2>
                <p>Es la información más importante y la que más se olvida. No es lo mismo un adorno para una estantería que un soporte que va a aguantar peso, una pieza que estará al sol en el balcón o una que va dentro del coche en verano. El uso decide el material, el grosor de las paredes y la orientación de impresión, y por tanto el precio y la durabilidad.</p>
                <p>Dinos, por ejemplo:</p>
                <ul>
                    <li>¿Es decorativa o funcional?</li>
                    <li>¿Va a soportar peso, golpes o tensión?</li>
                    <li>¿Estará en exterior, al sol o cerca de una fuente de calor?</li>
                    <li>¿Tiene que encajar con otra pieza (un tornillo, un tubo, un hueco)?</li>
                </ul>

                <h2>2. Envíanos el archivo 3D (si lo tienes)</h2>
                <p>Si ya tienes el modelo, el proceso es muy rápido. Estos son los formatos que mejor funcionan:</p>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Formato</th><th>Cuándo usarlo</th></tr></thead>
                        <tbody>
                            <tr><td><strong>STL</strong></td><td>El más habitual. Es el que descargas de webs como Printables o Thingiverse.</td></tr>
                            <tr><td><strong>3MF</strong></td><td>Como el STL, pero guarda también colores, unidades y varias piezas en un solo archivo.</td></tr>
                            <tr><td><strong>STEP / STP</strong></td><td>El ideal si la pieza viene de un programa de CAD (Fusion, SolidWorks, FreeCAD) y hay que modificar medidas.</td></tr>
                            <tr><td><strong>OBJ</strong></td><td>Habitual en modelos artísticos, figuras y escaneados.</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Si has descargado el modelo de internet, mándanos también el enlace: a veces hay versiones mejores o instrucciones del autor que conviene leer.</p>

                <h2>3. Si no tienes archivo: foto, medidas o la pieza original</h2>
                <p>No pasa nada, es lo más común. Podemos diseñar la pieza a partir de:</p>
                <ul>
                    <li><strong>La pieza original</strong> (aunque esté rota): es la mejor opción para repuestos.</li>
                    <li><strong>Fotos con una referencia de tamaño:</strong> pon una regla o un metro junto a la pieza y haz fotos de frente, de lado y desde arriba.</li>
                    <li><strong>Un boceto con medidas:</strong> aunque esté hecho a mano en una servilleta, si las cotas son correctas, nos sirve.</li>
                    <li><strong>Una imagen o logo:</strong> para logos y letras, mejor en formato vectorial (SVG, PDF, AI). Si solo tienes PNG o JPG, envíalo con la mayor resolución posible.</li>
                </ul>
                <p>Para medir, lo ideal es un calibre (pie de rey). Mide dos veces cada cota importante y, si la pieza tiene que encajar en algo, mide también ese hueco.</p>

                <h2>4. Indica cantidad, color y fecha</h2>
                <ul>
                    <li><strong>Cantidad:</strong> el precio por unidad baja bastante cuando se imprimen varias a la vez.</li>
                    <li><strong>Color:</strong> si te da igual, dínoslo; usaremos el que mejor resultado dé para esa pieza.</li>
                    <li><strong>Fecha límite:</strong> si es para un evento (una boda, un torneo, una inauguración), avísanos desde el principio para planificarlo con margen.</li>
                </ul>

                <h2>5. Recibes presupuesto, plazo y recomendación de material</h2>
                <p>Con esa información te respondemos con un precio cerrado, el plazo y el material que recomendamos (y por qué). Si hay que diseñar la pieza, te enseñamos el modelo antes de imprimirlo para que lo apruebes. Nada se imprime sin tu confirmación.</p>

                <h2>6. Impresión, revisión y entrega</h2>
                <p>Imprimimos la pieza, retiramos los soportes, comprobamos las medidas importantes y la preparamos para la entrega. Te la enviamos a cualquier punto de España o acordamos la entrega en la zona de Tarragona.</p>

                <h2>Plantilla para pedir presupuesto</h2>
                <p>Copia este texto, rellénalo y envíanoslo por <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a> o a <a href="mailto:info@tuimpresionen3d.com">info@tuimpresionen3d.com</a> junto con tus fotos o archivos:</p>
                <blockquote>
                    <p><strong>Qué es y para qué sirve:</strong> …<br>
                    <strong>Medidas aproximadas:</strong> … (largo × ancho × alto)<br>
                    <strong>¿Tienes archivo 3D?</strong> Sí / No (adjunto fotos con regla)<br>
                    <strong>Cantidad:</strong> …<br>
                    <strong>Color preferido:</strong> …<br>
                    <strong>¿Interior o exterior? ¿Soporta peso o calor?</strong> …<br>
                    <strong>¿Para cuándo lo necesitas?</strong> …<br>
                    <strong>Entrega:</strong> envío a (población) / zona de Tarragona</p>
                </blockquote>`,
        faq: [
            ['¿Puedo encargar una sola pieza?', 'Sí. La impresión 3D es ideal precisamente para piezas únicas o series pequeñas, porque no necesita moldes.'],
            ['¿Qué pasa si no sé qué material necesito?', 'No te preocupes: cuéntanos el uso de la pieza y te recomendamos el material más adecuado. Puedes ver las diferencias en nuestra guía de materiales.'],
            ['¿Puedo imprimir un modelo descargado de internet?', 'Sí, siempre que la licencia del modelo lo permita para tu uso. Envíanos el archivo o el enlace y lo revisamos antes de imprimir.'],
            ['¿Puedo ver el diseño antes de que se imprima?', 'Sí. Cuando diseñamos una pieza desde cero, te enviamos una vista previa del modelo para que la apruebes antes de imprimir.'],
        ],
        related: [
            ['¿Cuánto cuesta imprimir en 3D?', '/blog/cuanto-cuesta-imprimir-en-3d.html'],
            ['PLA, PETG o ABS: qué material elegir', '/blog/que-material-elegir-pla-petg-abs.html'],
            ['Servicio de impresión 3D en Tarragona', '/info.html'],
        ],
        ctaWa: 'Hola, quiero encargar una pieza impresa en 3D. Os paso los datos:',
    },

    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'cuanto-cuesta-imprimir-en-3d',
        short: 'Precios de impresión 3D',
        title: '¿Cuánto cuesta imprimir en 3D? Guía de precios',
        seoTitle: '¿Cuánto cuesta imprimir en 3D? Precios y ejemplos reales',
        h1: '¿Cuánto cuesta imprimir en 3D? Qué determina el precio y ejemplos reales',
        description: 'Qué factores determinan el precio de una impresión 3D, por qué dos piezas del mismo tamaño pueden costar muy distinto, ejemplos reales de precios y cómo pagar menos.',
        category: 'Precios',
        date: '2026-10-02',
        image: 'llaveros-spotify-3d',
        imageAlt: 'Llaveros impresos en 3D como ejemplo de precio de impresión 3D',
        summary: [
            'El precio depende sobre todo de las <strong>horas de impresora</strong>, el <strong>material</strong>, si hay que <strong>diseñar</strong> la pieza y los <strong>acabados</strong>.',
            'El tamaño por sí solo no lo dice todo: una pieza grande y hueca puede costar menos que una pequeña, maciza y con mucho detalle.',
            'Las piezas pequeñas y sencillas cuestan pocos euros; en nuestra tienda hay productos desde 9,94 €.',
            'Imprimir varias unidades a la vez reduce el precio por unidad.',
        ],
        body: `
                <p>"¿Cuánto me costaría imprimir esto?" es la pregunta que más recibimos. Entendemos que quieras una cifra rápida, pero el precio de una impresión 3D no se calcula por centímetros como una fotocopia. En esta guía te explicamos de qué depende, con ejemplos reales, para que sepas qué esperar y cómo ahorrar.</p>

                <h2>Los 6 factores que deciden el precio</h2>
                <h3>1. Tiempo de impresora</h3>
                <p>Es el factor principal. Una impresora 3D construye la pieza capa a capa, y una pieza puede necesitar desde unos minutos hasta decenas de horas. Durante ese tiempo la máquina está ocupada, consume electricidad y se desgasta.</p>
                <h3>2. Cantidad y tipo de material</h3>
                <p>El material se mide en gramos. Una pieza no tiene por qué ser maciza: el interior se rellena con una estructura (el <em>relleno</em>) cuya densidad se ajusta según la resistencia necesaria. El PLA es el material más económico; el PETG y el ABS cuestan algo más y requieren más cuidado.</p>
                <h3>3. Nivel de detalle</h3>
                <p>Las capas más finas dan un acabado más liso y detallado, pero multiplican el tiempo de impresión. Para una pieza funcional que nadie va a mirar de cerca, no merece la pena pagar ese extra.</p>
                <h3>4. Diseño 3D</h3>
                <p>Si nos envías el archivo listo para imprimir, solo pagas la fabricación. Si hay que modelar la pieza a partir de una foto o de la pieza original, se suma el tiempo de diseño, que depende de la complejidad: no es lo mismo una arandela que un engranaje con medidas exactas.</p>
                <h3>5. Acabados y montaje</h3>
                <p>Varios colores, lijado, pintura, insertos roscados, ensamblaje de piezas grandes o iluminación LED suman trabajo manual.</p>
                <h3>6. Cantidad de unidades</h3>
                <p>Preparar el archivo y la impresora tiene un coste fijo. Si se imprimen diez unidades en lugar de una, ese coste se reparte y el precio por pieza baja.</p>

                <h2>Por qué dos piezas del mismo tamaño pueden costar muy distinto</h2>
                <p>Imagina dos piezas que caben en la palma de la mano:</p>
                <ul>
                    <li><strong>Un soporte sencillo</strong> con forma de L, impreso en PLA con relleno ligero: poco material, pocas horas, sin diseño complejo. Precio bajo.</li>
                    <li><strong>Una figura detallada</strong> con capas finas, voladizos que necesitan soportes y retirada manual de esos soportes: muchas más horas y trabajo de acabado. Precio bastante mayor.</li>
                </ul>
                <p>Por eso no damos precios "a ojo" sin ver la pieza: preferimos darte una cifra cerrada que luego no cambie.</p>

                <h2>Ejemplos reales de precios</h2>
                <p>Estos son precios de productos de nuestra <a href="/tienda.html">tienda</a>, todos con envío gratis a la España peninsular. Sirven como referencia de lo que cuesta una pieza ya diseñada:</p>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Producto</th><th>Precio</th></tr></thead>
                        <tbody>
                            <tr><td><a href="/producto-llaveros-spotify.html">Llaveros Spotify (pack de 3)</a></td><td><strong>9,94 €</strong></td></tr>
                            <tr><td><a href="/producto-bola-antiestres.html">Bola antiestrés</a></td><td><strong>9,99 €</strong></td></tr>
                            <tr><td><a href="/producto-fotos-impresas.html">Foto impresa en 3D de 10 cm</a></td><td><strong>12,95 €</strong></td></tr>
                            <tr><td><a href="/producto-pack-antiestres.html">Pack antiestrés</a></td><td><strong>14,94 €</strong></td></tr>
                            <tr><td><a href="/producto-porta-alianzas.html">Porta alianzas personalizado</a></td><td><strong>24,94 €</strong></td></tr>
                            <tr><td><a href="/producto-fotos-impresas.html">Foto impresa en 3D de 18 cm</a></td><td><strong>24,95 €</strong></td></tr>
                            <tr><td><a href="/producto-escudos-personalizados.html">Escudo de fútbol personalizado con nombre</a></td><td><strong>34,95 €</strong></td></tr>
                        </tbody>
                    </table>
                </div>
                <p>En el otro extremo están los proyectos grandes, como nuestro <a href="/Projects/Logo-150cm-impreso-en-3d.html">logo de 150 cm formado por 60 piezas</a>, con estructura de madera e iluminación, que requieren un presupuesto detallado.</p>

                <h2>Cómo pagar menos por tu impresión 3D</h2>
                <ul>
                    <li><strong>Envía el archivo 3D</strong> si lo tienes: te ahorras el diseño.</li>
                    <li><strong>Elige PLA</strong> si la pieza no va a estar al sol, cerca del calor ni sometida a esfuerzos fuertes. Consulta <a href="/blog/que-material-elegir-pla-petg-abs.html">qué material elegir</a>.</li>
                    <li><strong>No pidas más detalle del necesario</strong> en piezas funcionales.</li>
                    <li><strong>Agrupa pedidos:</strong> varias piezas o unidades a la vez salen más baratas.</li>
                    <li><strong>Pide con margen:</strong> los encargos urgentes obligan a reorganizar la producción.</li>
                    <li><strong>Cuéntanos el uso real:</strong> así no sobredimensionamos la pieza "por si acaso".</li>
                </ul>

                <h2>Cómo conseguir un precio exacto</h2>
                <p>Envíanos el archivo o una foto con medidas y cuéntanos para qué es. Te respondemos con un precio cerrado y el plazo, sin compromiso. Si no sabes qué enviar, sigue nuestra <a href="/blog/como-encargar-impresion-3d.html">guía para encargar una impresión 3D</a>.</p>`,
        faq: [
            ['¿Cuánto cuesta imprimir una pieza pequeña en 3D?', 'Una pieza pequeña y sencilla suele costar pocos euros, porque usa poco material y poco tiempo de impresora. El precio final depende del material, el acabado y de si hace falta diseñar el modelo.'],
            ['¿El diseño 3D se cobra aparte?', 'Si no tienes el archivo, el diseño se incluye en el presupuesto como una partida separada de la impresión. Depende de la complejidad de la pieza y te lo indicamos antes de empezar.'],
            ['¿Sale más barato imprimir varias unidades?', 'Sí. La preparación del archivo y de la impresora se reparte entre todas las unidades, por lo que el precio por pieza baja al aumentar la cantidad.'],
            ['¿El precio del presupuesto puede cambiar después?', 'No. Te damos un precio cerrado antes de imprimir. Solo cambiaría si tú decides modificar la pieza, el material o la cantidad.'],
        ],
        related: [
            ['Cómo encargar una pieza impresa en 3D', '/blog/como-encargar-impresion-3d.html'],
            ['¿Comprar una impresora 3D o encargar las piezas?', '/blog/comprar-impresora-3d-o-encargar.html'],
            ['Tienda de productos impresos en 3D', '/tienda.html'],
        ],
        cta: ['¿Cuánto costaría tu pieza?', 'Envíanos el archivo o una foto con medidas y te damos un precio cerrado, sin compromiso.'],
        ctaWa: 'Hola, quiero saber cuánto costaría imprimir una pieza. Os paso foto/archivo:',
    },

    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'que-material-elegir-pla-petg-abs',
        short: 'PLA, PETG o ABS',
        title: 'PLA, PETG o ABS: qué material elegir para tu pieza',
        seoTitle: 'PLA, PETG o ABS: qué material de impresión 3D elegir',
        h1: 'PLA, PETG o ABS: qué material de impresión 3D elegir según el uso de tu pieza',
        description: 'Comparativa práctica de los materiales de impresión 3D más usados: resistencia al calor, al sol y a los golpes, usos recomendados y errores típicos al elegir.',
        category: 'Materiales',
        date: '2026-10-02',
        image: 'cono-antiestres-3d-2',
        imageAlt: 'Piezas impresas en 3D en distintos colores y materiales',
        summary: [
            '<strong>PLA</strong>: el mejor acabado y el más económico. Perfecto para decoración, maquetas, prototipos y regalos. No soporta bien el calor (empieza a ablandarse hacia los 55–60 °C).',
            '<strong>PETG</strong>: más resistente a golpes, humedad y sol. El más recomendable para piezas funcionales y de exterior.',
            '<strong>ABS / ASA</strong>: aguantan más temperatura. Para piezas cerca de fuentes de calor o en el interior de un coche. El ASA, además, resiste muy bien los rayos UV.',
            '<strong>TPU</strong>: flexible como la goma. Para fundas, topes, juntas y piezas que deben absorber golpes.',
        ],
        body: `
                <p>Elegir mal el material es la causa número uno de que una pieza impresa en 3D falle: un soporte de PLA que se deforma dentro del coche en agosto, una pieza de exterior que se vuelve frágil con el sol… La buena noticia es que con cuatro preguntas sencillas se acierta casi siempre.</p>

                <h2>Comparativa rápida</h2>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th></th><th>PLA</th><th>PETG</th><th>ABS / ASA</th><th>TPU</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Acabado y detalle</strong></td><td>Excelente</td><td>Bueno</td><td>Bueno</td><td>Correcto</td></tr>
                            <tr><td><strong>Resistencia al calor</strong></td><td>Baja (≈ 55–60 °C)</td><td>Media (≈ 75–80 °C)</td><td>Alta (≈ 95–100 °C)</td><td>Media</td></tr>
                            <tr><td><strong>Resistencia a golpes</strong></td><td>Rígido, frágil ante impactos</td><td>Buena, algo flexible</td><td>Buena</td><td>Excelente (flexible)</td></tr>
                            <tr><td><strong>Exterior y sol</strong></td><td>No recomendado</td><td>Bien</td><td>ASA: muy bien</td><td>Bien</td></tr>
                            <tr><td><strong>Precio</strong></td><td>€</td><td>€€</td><td>€€</td><td>€€€</td></tr>
                            <tr><td><strong>Ideal para</strong></td><td>Decoración, regalos, maquetas, prototipos</td><td>Repuestos, soportes, piezas funcionales</td><td>Coche, piezas técnicas, cerca de calor</td><td>Fundas, topes, juntas</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Las temperaturas son orientativas: indican cuándo el material empieza a ablandarse, no cuándo se funde. Una pieza sometida a peso se deformará antes.</p>

                <h2>Cuatro preguntas para acertar con el material</h2>
                <ol class="steps-inline">
                    <li><strong>¿Va a estar cerca del calor?</strong> Dentro de un coche al sol, junto a un motor, una bombilla o un electrodoméstico caliente: descarta el PLA. Usa PETG para calor moderado o ABS/ASA para temperaturas más altas.</li>
                    <li><strong>¿Va a estar en el exterior?</strong> El sol y la humedad degradan el PLA. PETG es una buena opción; ASA es la mejor si va a estar al sol todo el año.</li>
                    <li><strong>¿Tiene que aguantar golpes o flexionarse?</strong> El PLA es rígido y puede partirse de golpe. El PETG es más tenaz. Si debe doblarse o amortiguar, TPU.</li>
                    <li><strong>¿Importa sobre todo el aspecto?</strong> Para un regalo, una figura o un logo de interior, el PLA ofrece el mejor acabado y la mayor variedad de colores al menor precio.</li>
                </ol>

                <h2>PLA: el todoterreno para interior</h2>
                <p>Es el material más usado en impresión 3D. Es de origen vegetal, se imprime con mucha precisión y existe en infinidad de colores y acabados (mate, seda, metalizado, translúcido). Es la elección por defecto para decoración, regalos personalizados, maquetas, prototipos visuales, logos y letras de interior.</p>
                <p><strong>Su punto débil:</strong> el calor. Una pieza de PLA olvidada en el salpicadero en verano puede deformarse.</p>

                <h2>PETG: el más equilibrado para piezas funcionales</h2>
                <p>Es el mismo tipo de plástico que el de muchas botellas (PET) modificado para imprimirse bien. Aguanta mejor los golpes, la humedad, los productos químicos suaves y el sol. Es nuestra recomendación habitual para piezas de repuesto, soportes, ganchos, piezas de jardín o de baño.</p>
                <p><strong>Su punto débil:</strong> el acabado es algo menos fino que el del PLA y tiende a "hilar" en piezas muy detalladas.</p>

                <h2>ABS y ASA: cuando hay temperatura</h2>
                <p>El ABS es el plástico de los bloques de construcción de juguete y de muchas carcasas de electrodomésticos. Soporta temperaturas más altas y se puede lijar y tratar con facilidad. El ASA es similar, pero con una resistencia a los rayos UV mucho mejor, por lo que es el preferido para piezas exteriores de coche o de fachada.</p>
                <p><strong>Su punto débil:</strong> son más difíciles de imprimir (tienden a contraerse y agrietarse en piezas grandes), por lo que suelen costar algo más.</p>

                <h2>TPU: piezas flexibles</h2>
                <p>Un material elástico, parecido a la goma. Sirve para fundas, topes de puerta, pies antideslizantes, juntas o piezas que deben absorber vibraciones. Se imprime más despacio, lo que encarece algo la pieza.</p>

                <h2>Errores típicos al elegir material</h2>
                <ul>
                    <li><strong>Usar PLA para el coche.</strong> Es el fallo más habitual. Dentro de un coche cerrado al sol se superan con facilidad los 60 °C.</li>
                    <li><strong>Pensar que más relleno siempre es más resistente.</strong> El número de paredes (perímetros) y la orientación de impresión influyen tanto o más que el relleno.</li>
                    <li><strong>Olvidar la orientación de las capas.</strong> Las piezas impresas son más débiles entre capas. Si una pieza va a soportar esfuerzo, la orientamos para que trabaje en su dirección más fuerte.</li>
                    <li><strong>Usar piezas impresas para contacto continuo con alimentos.</strong> Las capas dejan pequeñas ranuras donde pueden acumularse bacterias. Para cortadores de galletas de un solo uso puede valer; para un vaso o un táper, no lo recomendamos.</li>
                </ul>

                <p>¿Sigues con dudas? Es normal. Cuéntanos para qué es la pieza y te recomendamos el material más adecuado al hacerte el presupuesto.</p>`,
        faq: [
            ['¿Qué material de impresión 3D aguanta más el calor?', 'De los materiales habituales, el ABS y el ASA son los que mejor soportan el calor, aproximadamente hasta 95–100 °C antes de ablandarse. El PETG aguanta alrededor de 75–80 °C y el PLA solo unos 55–60 °C.'],
            ['¿Puedo usar PLA en el exterior?', 'No es lo ideal. El PLA se degrada con el sol y la humedad y puede deformarse con el calor. Para exterior recomendamos PETG o, si va a estar al sol de forma permanente, ASA.'],
            ['¿Qué material es mejor para una pieza del coche?', 'Para el interior del coche recomendamos ABS o ASA, porque en verano la temperatura dentro del vehículo puede superar fácilmente los 60 °C. El PLA se deformaría.'],
            ['¿Las piezas impresas en 3D son resistentes?', 'Sí, si se elige bien el material y se diseña y orienta la pieza para el esfuerzo que va a soportar. Muchas piezas de repuesto impresas en PETG o ABS duran años.'],
        ],
        related: [
            ['Piezas de repuesto impresas en 3D', '/blog/piezas-de-repuesto-impresas-en-3d.html'],
            ['¿Cuánto cuesta imprimir en 3D?', '/blog/cuanto-cuesta-imprimir-en-3d.html'],
            ['Cómo encargar una pieza impresa en 3D', '/blog/como-encargar-impresion-3d.html'],
        ],
        cta: ['¿No sabes qué material necesitas?', 'Cuéntanos para qué es la pieza y te recomendamos el material adecuado al hacerte el presupuesto.'],
        ctaWa: 'Hola, tengo dudas sobre qué material usar para una pieza:',
    },

    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'piezas-de-repuesto-impresas-en-3d',
        short: 'Piezas de repuesto en 3D',
        title: 'Piezas de repuesto impresas en 3D: qué se puede fabricar y qué no',
        seoTitle: 'Piezas de repuesto impresas en 3D: qué se puede y qué no',
        h1: 'Piezas de repuesto impresas en 3D: qué se puede fabricar, qué no y cómo pedirlas',
        description: 'Cómo la impresión 3D puede salvar ese electrodoméstico, mueble o juguete al que se le ha roto una pieza descatalogada: ejemplos, límites y cómo pedir tu repuesto.',
        category: 'Repuestos',
        date: '2026-10-02',
        image: 'logo-150cm-primera-mitad',
        imageAlt: 'Piezas impresas en 3D listas para montar',
        summary: [
            'Si se ha roto una pieza de plástico que ya no venden, casi siempre se puede <strong>replicar e incluso mejorar</strong> con impresión 3D.',
            'Ejemplos habituales: clips, tapas, ruedas, soportes, pomos, engranajes, embellecedores y adaptadores.',
            '<strong>No</strong> imprimimos piezas de las que dependa la seguridad de personas (frenos, sujeciones de carga, sistemas de gas o presión).',
            'Lo ideal es enviarnos la pieza original o fotos con una regla y las medidas tomadas con calibre.',
        ],
        body: `
                <p>A todos nos ha pasado: se rompe una pieza de plástico de diez céntimos y el aparato entero deja de funcionar. El fabricante ya no la vende, o solo vende el conjunto completo por un precio absurdo. En muchos de esos casos, la impresión 3D es la solución más rápida y económica.</p>

                <h2>Qué piezas se pueden imprimir en 3D</h2>
                <p>Estos son encargos típicos que se resuelven bien con impresión 3D:</p>
                <ul>
                    <li><strong>Hogar:</strong> clips y guías de persianas, ruedas de cajones y muebles, soportes de estanterías, tapas de pilas, pomos y tiradores, ganchos, tapones, pies de muebles.</li>
                    <li><strong>Electrodomésticos:</strong> pestañas de cierre, botones, soportes de filtros, tapas y carcasas de aspiradoras, accesorios de robots de cocina que no estén en contacto con alimentos.</li>
                    <li><strong>Coche (interior):</strong> embellecedores, clips de paneles, soportes, tapas, portavasos. Para estas piezas usamos materiales resistentes al calor.</li>
                    <li><strong>Juguetes y ocio:</strong> engranajes, piezas de juegos de mesa, accesorios de modelismo, piezas de bicicletas que no sean estructurales.</li>
                    <li><strong>Negocios:</strong> recambios de expositores, soportes de maquinaria ligera, plantillas y utillaje.</li>
                </ul>

                <h2>Qué no se debe imprimir en 3D</h2>
                <p>Hay piezas que, por seguridad, no fabricamos aunque técnicamente se pudieran imprimir:</p>
                <ul>
                    <li>Piezas de las que dependa la <strong>seguridad de personas</strong>: frenos, dirección, sujeciones de sillas infantiles, arneses, anclajes que soporten a una persona.</li>
                    <li>Piezas de sistemas de <strong>gas, presión o combustible</strong>.</li>
                    <li>Piezas que trabajen a <strong>temperaturas muy altas</strong> (dentro de hornos, junto a resistencias, en el motor).</li>
                    <li>Recipientes para <strong>contacto continuo con alimentos</strong>.</li>
                </ul>
                <p>Si tienes dudas sobre si tu pieza es adecuada, pregúntanos. Te diremos con sinceridad si la impresión 3D es una buena solución o no.</p>

                <h2>Replicar o mejorar: la ventaja de diseñar de nuevo</h2>
                <p>Muchas piezas originales se rompen siempre por el mismo punto porque el fabricante las diseñó con lo justo. Al modelarlas de nuevo podemos reforzar esa zona, engrosar paredes o redondear esquinas donde se concentran las tensiones. Además, elegimos un material más adecuado: por ejemplo, PETG en lugar del plástico rígido original para que un clip flexione sin partirse.</p>

                <h2>Cómo pedir tu pieza de repuesto</h2>
                <ol class="steps-inline">
                    <li><strong>Busca primero el modelo.</strong> Si el aparato es conocido, puede que ya exista un archivo 3D en internet. Si lo encuentras, envíanos el enlace.</li>
                    <li><strong>Haz fotos con referencia de tamaño.</strong> Pon una regla junto a la pieza y fotografíala desde varios ángulos, también la zona rota.</li>
                    <li><strong>Mide con calibre</strong> las cotas importantes: diámetros de agujeros, grosores, distancias entre pestañas. Si encaja en algo, mide también el hueco.</li>
                    <li><strong>Si puedes, haznos llegar la pieza original</strong> (aunque esté rota). Es la forma más fiable de acertar a la primera.</li>
                    <li><strong>Cuéntanos qué esfuerzo soporta</strong> y si está expuesta a calor, sol o humedad.</li>
                </ol>
                <p>Con eso te damos un presupuesto que incluye el diseño y la impresión. En piezas que deben encajar con precisión, a veces conviene imprimir una primera prueba para comprobar el ajuste antes de la versión definitiva.</p>

                <h2>¿Cuánto cuesta un repuesto impreso en 3D?</h2>
                <p>En la mayoría de repuestos pequeños, el coste principal es el diseño de la pieza, no la impresión. Una vez diseñada, imprimir unidades adicionales es mucho más barato, así que si crees que se volverá a romper, pide dos. Más detalles en nuestra <a href="/blog/cuanto-cuesta-imprimir-en-3d.html">guía de precios de impresión 3D</a>.</p>`,
        faq: [
            ['¿Se puede imprimir en 3D una pieza que ya no fabrican?', 'Sí, en la mayoría de piezas de plástico. A partir de la pieza original o de fotos con medidas, la modelamos en 3D y la imprimimos en el material adecuado.'],
            ['¿Qué necesito para pedir un repuesto impreso en 3D?', 'Lo ideal es la pieza original (aunque esté rota). Si no es posible, fotos desde varios ángulos con una regla al lado y las medidas principales tomadas con calibre.'],
            ['¿Es tan resistente como la pieza original?', 'Con el material y el diseño adecuados, puede serlo e incluso más, porque podemos reforzar el punto donde se rompió la original.'],
            ['¿Imprimís piezas para el coche?', 'Sí, piezas de interior como embellecedores, clips, tapas o soportes, en materiales resistentes al calor. No fabricamos piezas relacionadas con la seguridad del vehículo.'],
        ],
        related: [
            ['PLA, PETG o ABS: qué material elegir', '/blog/que-material-elegir-pla-petg-abs.html'],
            ['Cómo encargar una pieza impresa en 3D', '/blog/como-encargar-impresion-3d.html'],
            ['Servicio de piezas de repuesto', '/info.html#repuestos'],
        ],
        cta: ['¿Se te ha roto una pieza?', 'Mándanos fotos con una regla al lado y te decimos si se puede imprimir y cuánto costaría.'],
        ctaWa: 'Hola, se me ha roto una pieza y quiero saber si se puede imprimir en 3D. Os paso fotos:',
    },

    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'logos-y-letras-3d-para-negocios',
        short: 'Logos y letras 3D para negocios',
        title: 'Logos y letras 3D para tu negocio: tipos, tamaños y montaje',
        seoTitle: 'Logos y letras corpóreas 3D para negocios en Tarragona',
        h1: 'Logos y letras 3D para tu negocio: tipos, tamaños, montaje y qué archivo enviar',
        description: 'Guía para pedir el logo de tu negocio en 3D: logos en relieve, letras corpóreas y logos retroiluminados, cómo se fabrican piezas de más de un metro y qué archivo necesitamos.',
        category: 'Empresas',
        date: '2026-10-02',
        image: 'logo-retroiluminado-impreso-3d',
        imageAlt: 'Logo retroiluminado impreso en 3D en la pared de un gimnasio',
        summary: [
            'Un logo en 3D da presencia a la recepción, el mostrador o la pared principal de cualquier local, gimnasio, tienda u oficina.',
            'Tres opciones: <strong>logo en relieve</strong> sobre base, <strong>letras corpóreas</strong> sueltas para pared y <strong>logo retroiluminado</strong> con LED.',
            'No hay límite real de tamaño: las piezas grandes se dividen y se ensamblan. Hemos fabricado un logo de <strong>150 cm en 60 piezas</strong>.',
            'Lo ideal es enviar el logo en formato vectorial (SVG, PDF o AI).',
        ],
        body: `
                <p>El logo de tu negocio en 3D, colgado en la pared o encima del mostrador, cambia por completo la imagen de un local. Y gracias a la impresión 3D, ya no hace falta encargar un rótulo industrial carísimo para conseguirlo, ni conformarse con un vinilo plano.</p>

                <h2>Tres formas de llevar tu logo al 3D</h2>
                <h3>Logo en relieve sobre base</h3>
                <p>El logo con volumen, montado sobre una placa o una peana. Es la opción más sencilla y económica, perfecta para mostradores, recepciones, escaparates, stands de ferias o como regalo corporativo.</p>
                <h3>Letras y logos corpóreos para pared</h3>
                <p>Piezas sueltas que se fijan directamente a la pared, dando la sensación de que el logo "flota". Funcionan especialmente bien sobre paredes lisas de color contrastado. Se pueden separar unos centímetros de la pared para crear sombra y profundidad.</p>
                <h3>Logo retroiluminado</h3>
                <p>Se monta separado de la pared con una tira LED detrás, de forma que la luz se refleja en la pared y crea un halo alrededor del logo. Es el efecto más llamativo y el que hicimos para Scorpii Calisthenics: un logo de 150 cm con luz rosa.</p>

                <h2>¿De qué tamaño puede ser?</h2>
                <p>Una impresora 3D tiene un volumen de impresión limitado, pero eso no limita el tamaño final. Las piezas grandes se dividen en partes que se imprimen por separado y se unen después sobre una estructura. Nuestro <a href="/Projects/Logo-150cm-impreso-en-3d.html">logo de 150 cm</a> se fabricó con 60 piezas montadas sobre un soporte de madera.</p>
                <p>Para decidir el tamaño, piensa desde dónde se va a ver: un logo de recepción que se ve a 2–3 metros puede funcionar con 40–60 cm de ancho, mientras que una pared principal vista desde el otro lado de una sala pide un metro o más.</p>

                <h2>Qué archivo necesitamos</h2>
                <ul>
                    <li><strong>Ideal: archivo vectorial</strong> (SVG, PDF, AI o EPS). Es el que suele tener tu diseñador o la imprenta que hizo tus tarjetas. Permite escalar el logo a cualquier tamaño sin perder calidad.</li>
                    <li><strong>Si solo tienes una imagen</strong> (PNG o JPG), envíala con la mayor resolución posible. Si es necesario, redibujamos el logo en vectorial antes de modelarlo.</li>
                    <li><strong>Colores:</strong> indícanos los colores de tu marca. Las piezas se imprimen a varios colores separando cada parte del logo.</li>
                </ul>

                <h2>Interior o exterior</h2>
                <p>Para interior, el PLA ofrece el mejor acabado y la mayor variedad de colores. Si el logo va a estar en exterior o detrás de un escaparate al sol, usamos materiales resistentes a los rayos UV y al calor, como el ASA o el PETG. Más información en nuestra <a href="/blog/que-material-elegir-pla-petg-abs.html">guía de materiales</a>.</p>

                <h2>Montaje</h2>
                <p>Según el tamaño y la pared, el logo se puede fijar con cinta adhesiva de doble cara de alta resistencia (piezas ligeras y paredes lisas), con tornillos y tacos, o sobre una estructura de madera o separadores para los logos retroiluminados. Te explicamos la mejor opción para tu caso.</p>

                <h2>Ideas para sacarle partido</h2>
                <ul>
                    <li><strong>Gimnasios y academias:</strong> logo retroiluminado en la zona de entrenamiento y trofeos con el mismo diseño para sus competiciones (como hicimos con <a href="/producto-trofeos-personalizados.html">Scorpii Calisthenics</a>).</li>
                    <li><strong>Tiendas y restaurantes:</strong> letras corpóreas en la pared principal o tras la barra.</li>
                    <li><strong>Oficinas:</strong> logo en relieve en la recepción.</li>
                    <li><strong>Eventos y ferias:</strong> logos de mostrador y piezas para el stand.</li>
                    <li><strong>Creadores de contenido:</strong> logo luminoso de fondo para vídeos y directos.</li>
                </ul>`,
        faq: [
            ['¿Qué tamaño máximo puede tener un logo impreso en 3D?', 'Prácticamente no hay límite: las piezas grandes se dividen en partes que se ensamblan después. Hemos fabricado logos de 150 cm de alto.'],
            ['¿Qué archivo de logo tengo que enviar?', 'Lo ideal es un archivo vectorial (SVG, PDF, AI o EPS). Si solo tienes una imagen PNG o JPG, envíala con la mayor resolución posible.'],
            ['¿Se puede poner luz LED a un logo impreso en 3D?', 'Sí. Montamos el logo separado de la pared con una tira LED detrás para crear un efecto de halo retroiluminado.'],
            ['¿Un logo impreso en 3D aguanta en exterior?', 'Sí, si se fabrica con materiales resistentes a los rayos UV y al calor, como el ASA o el PETG.'],
        ],
        related: [
            ['Proyecto: logo de 150 cm impreso en 3D', '/Projects/Logo-150cm-impreso-en-3d.html'],
            ['Tu logo o imagen en 3D a cualquier tamaño', '/producto-logo-imagen.html'],
            ['Trofeos personalizados para clubes y eventos', '/blog/trofeos-personalizados-impresos-en-3d.html'],
        ],
        cta: ['¿Quieres tu logo en 3D?', 'Envíanos tu logo y el tamaño aproximado y te preparamos una propuesta sin compromiso.'],
        ctaWa: 'Hola, quiero el logo de mi negocio en 3D. Os paso el logo y el tamaño:',
    },

    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'trofeos-personalizados-impresos-en-3d',
        short: 'Trofeos personalizados',
        title: 'Trofeos personalizados impresos en 3D para clubes, torneos y empresas',
        seoTitle: 'Trofeos personalizados impresos en 3D para clubes y torneos',
        h1: 'Trofeos personalizados impresos en 3D: cómo pedirlos para tu club, torneo o empresa',
        description: 'Por qué un trofeo diseñado a medida marca la diferencia, qué información necesitamos, con cuánto margen pedirlo y ejemplos reales de trofeos impresos en 3D.',
        category: 'Eventos',
        date: '2026-10-02',
        image: 'trofeo-personalizado-3d-1',
        imageAlt: 'Trofeo personalizado impreso en 3D con el logo de una academia',
        summary: [
            'Un trofeo impreso en 3D se diseña desde cero con el <strong>logo, los colores y el nombre</strong> de tu club, torneo o empresa.',
            'Es rentable tanto para una unidad como para series de un torneo con varias categorías.',
            'Necesitamos: logo (mejor en vectorial), número de trofeos, textos de cada uno, tamaño aproximado y fecha del evento.',
            '<strong>Pídelo con margen</strong>: diseño, aprobación e impresión de una serie llevan su tiempo.',
        ],
        body: `
                <p>Los trofeos de catálogo son todos iguales: una copa dorada con una plaquita. Un trofeo diseñado con el logo y los colores de tu club o evento es otra cosa: es un recuerdo que los ganadores enseñan, fotografían y comparten. Y con impresión 3D no hace falta encargar cientos de unidades para conseguirlo.</p>

                <h2>Por qué un trofeo impreso en 3D</h2>
                <ul>
                    <li><strong>Diseño único:</strong> la forma del trofeo puede ser tu propio logo, la mascota del club o un elemento del deporte.</li>
                    <li><strong>Tus colores:</strong> combinamos varios colores en la misma pieza para respetar la identidad de tu marca.</li>
                    <li><strong>Personalización por unidad:</strong> cada trofeo puede llevar su categoría, posición o el nombre del ganador.</li>
                    <li><strong>Sin pedido mínimo:</strong> desde un único trofeo hasta toda la serie de un torneo.</li>
                    <li><strong>Coherencia de marca:</strong> el mismo diseño se puede usar en llaveros o en el <a href="/blog/logos-y-letras-3d-para-negocios.html">logo de la pared</a> de tu local.</li>
                </ul>

                <h2>Ejemplo real: trofeos para Scorpii Calisthenics</h2>
                <p>Para una competición de Scorpii Calisthenics Academy diseñamos trofeos a dos colores: el símbolo de la academia en rosa, de pie sobre una base negra con el nombre grabado en relieve. El mismo símbolo que ya presidía su sala en forma de <a href="/Projects/Logo-150cm-impreso-en-3d.html">logo retroiluminado de 150 cm</a>. Puedes ver más fotos en la <a href="/producto-trofeos-personalizados.html">página de trofeos personalizados</a>.</p>

                <h2>Qué necesitamos para el presupuesto</h2>
                <ul>
                    <li><strong>Logo</strong> del club, evento o empresa (mejor en SVG o PDF).</li>
                    <li><strong>Número de trofeos</strong> y cómo se reparten: por ejemplo, 1.º, 2.º y 3.º de tres categorías.</li>
                    <li><strong>Textos</strong> de cada trofeo: nombre del evento, año, categoría, posición.</li>
                    <li><strong>Tamaño aproximado</strong>: ¿de mesa, de unos 15 cm, o algo más grande para el campeón?</li>
                    <li><strong>Colores</strong> preferidos.</li>
                    <li><strong>Fecha del evento</strong> y dónde los necesitas.</li>
                </ul>

                <h2>Con cuánto tiempo pedirlos</h2>
                <p>Una serie de trofeos pasa por diseño, aprobación por tu parte, impresión de todas las unidades y acabado. Cuanto antes nos escribas, más fácil será ajustar el diseño con calma. Como orientación, si tu evento tiene fecha fija, contacta con nosotros en cuanto la tengas: te confirmaremos el plazo exacto al darte el presupuesto.</p>

                <h2>Ideas de trofeos personalizados</h2>
                <ul>
                    <li>Torneos de fútbol, pádel, baloncesto o artes marciales.</li>
                    <li>Competiciones de gimnasios, crossfit o calistenia.</li>
                    <li>Torneos de videojuegos y eSports.</li>
                    <li>Premios de empresa: mejor equipo, ventas, antigüedad.</li>
                    <li>Concursos escolares, carreras populares y eventos solidarios.</li>
                </ul>`,
        faq: [
            ['¿Cuántos trofeos tengo que pedir como mínimo?', 'No hay mínimo. Podemos fabricar un único trofeo o la serie completa de un torneo.'],
            ['¿Puede cada trofeo llevar un texto distinto?', 'Sí. Cada unidad puede llevar su categoría, posición, año o el nombre del ganador.'],
            ['¿Con cuánta antelación debo pedir los trofeos?', 'Cuanto antes, mejor, sobre todo en series grandes. Escríbenos en cuanto tengas la fecha del evento y te confirmaremos el plazo exacto con el presupuesto.'],
            ['¿Necesito tener el diseño del trofeo?', 'No. Con tu logo y una idea de lo que te gustaría, diseñamos el trofeo y te enviamos una vista previa para que la apruebes.'],
        ],
        related: [
            ['Trofeos personalizados: fotos y presupuesto', '/producto-trofeos-personalizados.html'],
            ['Logos y letras 3D para tu negocio', '/blog/logos-y-letras-3d-para-negocios.html'],
            ['¿Cuánto cuesta imprimir en 3D?', '/blog/cuanto-cuesta-imprimir-en-3d.html'],
        ],
        cta: ['¿Organizas un torneo o un evento?', 'Envíanos tu logo, el número de trofeos y la fecha, y te preparamos una propuesta.'],
        ctaWa: 'Hola, quiero presupuesto de trofeos personalizados para un evento:',
    },

    // ------------------------------------------------------------------
    {
        group: 'clientes',
        slug: 'comprar-impresora-3d-o-encargar',
        short: '¿Comprar impresora o encargar?',
        title: '¿Comprar una impresora 3D o encargar las piezas?',
        seoTitle: '¿Merece la pena comprar una impresora 3D o es mejor encargar?',
        h1: '¿Merece la pena comprar una impresora 3D o es mejor encargar las piezas?',
        description: 'Comparativa honesta entre comprar tu propia impresora 3D y encargar las piezas a un servicio: costes reales, tiempo de aprendizaje y en qué casos compensa cada opción.',
        category: 'Guías',
        date: '2024-01-31',
        modified: '2026-10-02',
        image: 'impresora-3d-trabajando-poster',
        imageAlt: 'Impresora 3D trabajando',
        summary: [
            '<strong>Compra una impresora</strong> si vas a imprimir a menudo, te gusta trastear y quieres aprender diseño 3D.',
            '<strong>Encarga las piezas</strong> si solo necesitas algo de vez en cuando, necesitas un resultado fiable a la primera o no tienes el archivo 3D.',
            'El precio de la impresora es solo el principio: hay que sumar filamento, recambios, tiempo de aprendizaje e impresiones fallidas.',
            'La mayor barrera no es imprimir, sino <strong>diseñar</strong> la pieza que necesitas.',
        ],
        body: `
                <p>Como taller de impresión 3D, podríamos decirte que no compres una impresora. Pero no sería honesto: para mucha gente es un hobby fantástico y una herramienta muy útil. La pregunta correcta no es si merece la pena en general, sino si merece la pena <em>para ti</em>.</p>

                <h2>Lo que cuesta de verdad tener una impresora 3D</h2>
                <ul>
                    <li><strong>La máquina:</strong> las impresoras de iniciación rondan aproximadamente los 200–400 €, y las de gama media-alta, con más velocidad, multicolor o mayor tamaño, pueden superar los 600–1.000 €.</li>
                    <li><strong>Material:</strong> una bobina de 1 kg de PLA cuesta habitualmente entre 15 y 30 €. Otros materiales son más caros.</li>
                    <li><strong>Recambios y mantenimiento:</strong> boquillas, superficies de impresión, correas y, tarde o temprano, alguna avería.</li>
                    <li><strong>Espacio y entorno:</strong> un lugar estable, con ventilación si vas a imprimir ABS, y donde el ruido no moleste.</li>
                    <li><strong>Tiempo:</strong> el coste más infravalorado. Aprender a calibrar, elegir parámetros y resolver fallos lleva semanas.</li>
                    <li><strong>Impresiones fallidas:</strong> al principio, una parte del material acaba en la basura.</li>
                </ul>

                <h2>La parte que nadie te cuenta: el diseño</h2>
                <p>Imprimir modelos descargados de internet es relativamente fácil. Pero cuando necesitas una pieza concreta (el repuesto de tu lavavajillas, un soporte a medida, el logo de tu negocio), alguien tiene que diseñarla en un programa de CAD con las medidas exactas. Esa es la habilidad que más tiempo cuesta aprender y la razón por la que muchas impresoras acaban cogiendo polvo.</p>

                <h2>Cuándo compensa comprar una impresora</h2>
                <ul>
                    <li>Vas a imprimir de forma habitual, no una vez al año.</li>
                    <li>Disfrutas del proceso: ajustar, probar, mejorar.</li>
                    <li>Quieres aprender diseño 3D (o ya sabes).</li>
                    <li>Haces maquetas, cosplay, modelismo o prototipos de forma continua.</li>
                    <li>Eres docente o tienes hijos interesados en tecnología: es una gran herramienta educativa.</li>
                </ul>

                <h2>Cuándo compensa encargar las piezas</h2>
                <ul>
                    <li>Necesitas piezas de forma puntual.</li>
                    <li>No tienes el archivo y necesitas que alguien diseñe la pieza.</li>
                    <li>Necesitas que salga bien a la primera y con plazo (un regalo, un evento, un prototipo para un cliente).</li>
                    <li>La pieza es grande, va en un material difícil (ABS, ASA, TPU) o requiere acabados y montaje.</li>
                    <li>Eres una empresa y prefieres no dedicar a nadie del equipo a aprender a imprimir.</li>
                </ul>

                <h2>Si decides comprar: consejos para elegir</h2>
                <ul>
                    <li><strong>Prioriza la fiabilidad y la facilidad de uso</strong> frente a la velocidad máxima o el tamaño.</li>
                    <li><strong>Busca nivelación automática de la cama:</strong> te ahorrará la mayoría de problemas de primera capa.</li>
                    <li><strong>Elige una marca con buena comunidad y recambios fáciles</strong> de conseguir.</li>
                    <li><strong>Empieza con PLA</strong>, el material más sencillo.</li>
                    <li>Y cuando tengas problemas de calidad, revisa nuestra <a href="/blog/como-calibrar-impresora-3d.html">guía de calibración</a>.</li>
                </ul>

                <h2>Lo mejor de los dos mundos</h2>
                <p>Tener impresora propia no impide encargar piezas, y mucha gente combina ambas cosas: imprime en casa lo sencillo y encarga lo que necesita diseño, las piezas demasiado grandes, las de materiales técnicos o las que tienen que estar listas para una fecha.</p>`,
        faq: [
            ['¿Cuánto cuesta una impresora 3D para empezar?', 'Las impresoras de iniciación cuestan aproximadamente entre 200 y 400 €. A eso hay que sumar el material, los recambios y el tiempo de aprendizaje.'],
            ['¿Es difícil aprender a imprimir en 3D?', 'Imprimir modelos descargados es asequible con las impresoras actuales. Lo que más cuesta es aprender a diseñar piezas propias con medidas exactas.'],
            ['¿Sale más barato imprimir en casa que encargar?', 'Por pieza, sí, si ya tienes la impresora y sabes usarla. Pero si solo necesitas piezas de vez en cuando, la inversión inicial, el tiempo y las impresiones fallidas hacen que encargar suela compensar más.'],
        ],
        related: [
            ['¿Cuánto cuesta imprimir en 3D?', '/blog/cuanto-cuesta-imprimir-en-3d.html'],
            ['Cómo calibrar una impresora 3D', '/blog/como-calibrar-impresora-3d.html'],
            ['Cómo encargar una pieza impresa en 3D', '/blog/como-encargar-impresion-3d.html'],
        ],
    },

    // ------------------------------------------------------------------
    {
        group: 'makers',
        slug: 'como-calibrar-impresora-3d',
        short: 'Cómo calibrar tu impresora',
        title: 'Cómo calibrar una impresora 3D paso a paso',
        seoTitle: '¿Por qué mis piezas salen mal? Cómo calibrar una impresora 3D',
        h1: 'Cómo calibrar una impresora 3D paso a paso (en el orden correcto)',
        description: 'El orden de calibración que usamos en el taller: nivelación, primera capa, extrusor (e-steps), temperatura, flujo, retracción y medidas. Con valores de referencia y cómo detectar cada problema.',
        category: 'Calibración',
        date: '2024-02-02',
        modified: '2026-10-02',
        image: 'logo-150cm-despiece-60-piezas',
        imageAlt: 'Piezas impresas en 3D con una impresora bien calibrada',
        ads: true,
        summary: [
            'Calibra <strong>en orden</strong>: cada paso depende del anterior. Empezar por las medidas sin haber calibrado el extrusor lleva a corregir el problema equivocado.',
            'La mayoría de fallos se resuelven con tres cosas: <strong>cama nivelada, primera capa correcta y flujo bien ajustado</strong>.',
            'Si las piezas salen un poco más grandes o más pequeñas, casi nunca hay que tocar los pasos de los ejes X/Y: suele ser el flujo o la compensación de contracción.',
            'Recalibra cada vez que cambies de boquilla, de material o de marca de filamento.',
        ],
        body: `
                <p>Si tus impresiones no se pegan a la cama, tienen huecos, hilos, capas que se separan o medidas que no cuadran, el problema casi siempre es de calibración. Este es el orden que seguimos en nuestro taller cada vez que ponemos a punto una impresora.</p>

                <h2>0. Antes de empezar: revisión mecánica</h2>
                <p>Ninguna calibración arregla un problema mecánico. Comprueba que:</p>
                <ul>
                    <li>Las correas están tensas (suenan como una cuerda grave al pulsarlas, sin estar extremadamente rígidas).</li>
                    <li>Las ruedas o rodamientos no tienen holgura: el cabezal y la cama no deben bailar al moverlos con la mano.</li>
                    <li>Los tornillos del marco están apretados y la boquilla está limpia.</li>
                </ul>

                <h2>1. Nivelación de la cama</h2>
                <p>Con la cama y la boquilla <strong>a temperatura de impresión</strong> (el metal se dilata), lleva la boquilla a cada esquina y ajusta la altura hasta que un folio normal pase rozando con una ligera resistencia. Repite la vuelta dos veces, porque al ajustar una esquina se mueven las demás. Si tu impresora tiene nivelación automática, ejecútala con la cama caliente y guarda la malla.</p>

                <h2>2. Primera capa (Z-offset)</h2>
                <p>Imprime un cuadrado o un patrón de primera capa de una sola capa y obsérvalo:</p>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Lo que ves</th><th>Causa</th><th>Solución</th></tr></thead>
                        <tbody>
                            <tr><td>Líneas redondas separadas, se despegan</td><td>Boquilla demasiado alta</td><td>Baja el Z-offset 0,02–0,05 mm</td></tr>
                            <tr><td>Superficie rugosa, transparente o con crestas; la boquilla arrastra</td><td>Boquilla demasiado baja</td><td>Sube el Z-offset 0,02–0,05 mm</td></tr>
                            <tr><td>Líneas ligeramente aplastadas que se unen formando una superficie lisa</td><td>Correcto</td><td>¡Listo!</td></tr>
                        </tbody>
                    </table>
                </div>

                <h2>3. Pasos del extrusor (e-steps)</h2>
                <p>Comprueba que cuando la impresora pide 100 mm de filamento, empuja realmente 100 mm:</p>
                <ol class="steps-inline">
                    <li>Calienta el hotend a la temperatura de impresión.</li>
                    <li>Marca el filamento a 120 mm de la entrada del extrusor.</li>
                    <li>Extruye 100 mm a baja velocidad.</li>
                    <li>Mide la distancia que queda hasta la marca. Si quedan 20 mm, está perfecto.</li>
                    <li>Si no, calcula: <code>nuevos pasos = pasos actuales × 100 / mm realmente extruidos</code> y guarda el valor.</li>
                </ol>
                <p>Muchas impresoras modernas con extrusor directo vienen bien calibradas de fábrica; aun así, comprobarlo lleva cinco minutos.</p>
                <div class="ad-slot">
                    <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-9463405593849277" data-ad-slot="9228660705"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>

                <h2>4. Temperatura</h2>
                <p>Cada marca y color de filamento se comporta distinto. Imprime una <strong>torre de temperatura</strong> (un modelo que cambia la temperatura cada pocos milímetros) y elige el tramo con mejores puentes, menos hilos y buena adhesión entre capas. Como referencia: PLA 190–220 °C, PETG 230–250 °C, ABS 240–260 °C. Si las capas se separan con facilidad al doblar la pieza, sube la temperatura.</p>

                <h2>5. Flujo (multiplicador de extrusión)</h2>
                <p>Imprime un cubo hueco de una sola pared (modo jarrón) y mide el grosor de la pared con un calibre en varios puntos. Ajusta el flujo así: <code>nuevo flujo = flujo actual × ancho de línea configurado / grosor medido</code>. Muchos laminadores (OrcaSlicer, PrusaSlicer, Bambu Studio) incluyen sus propias pruebas de flujo, que son aún más cómodas.</p>
                <p>Un flujo excesivo produce piezas más grandes de lo esperado, superficies con "granos" y agujeros más estrechos; uno escaso deja huecos entre líneas y capas superiores con agujeros.</p>

                <h2>6. Retracción y avance de presión</h2>
                <p>Si aparecen hilos entre partes de la pieza, ajusta la retracción con una prueba de retracción. Valores orientativos: 0,5–2 mm con extrusor directo y 4–7 mm con extrusor Bowden. Si tu firmware lo permite, calibra también el <strong>pressure advance / linear advance</strong>: mejora mucho las esquinas y reduce los abultamientos.</p>

                <h2>7. Medidas de la pieza</h2>
                <p>Ahora sí, imprime un cubo de calibración de 20 mm y mídelo. Si X e Y salen con una diferencia pequeña (por ejemplo, 20,1 mm), <strong>no toques los pasos de los ejes</strong>: en las impresoras con correas suelen ser correctos de fábrica y la diferencia viene del flujo o de la contracción del material. Ajusta la compensación de tamaño en el laminador. En el eje Z, comprueba que la altura total es correcta; si no, revisa la primera capa.</p>
                <p>Recuerda que los agujeros suelen salir algo más pequeños de lo diseñado: si una pieza debe encajar, deja una holgura de 0,2–0,4 mm en el diseño.</p>

                <h2>Consejos extra</h2>
                <ul>
                    <li><strong>Seca el filamento</strong> si cruje, hace burbujas o deja muchos hilos: la humedad arruina la calidad, sobre todo en PETG y TPU.</li>
                    <li>Haz una <strong>calibración PID</strong> del hotend y de la cama si la temperatura oscila.</li>
                    <li>Guarda un <strong>perfil por cada filamento</strong>: lo que funciona con un PLA de una marca no tiene por qué funcionar con otra.</li>
                    <li>Calibra en un ambiente sin corrientes de aire y con temperatura estable.</li>
                </ul>
                <div class="ad-slot">
                    <ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-9463405593849277" data-ad-slot="5401381743"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>`,
        faq: [
            ['¿En qué orden se calibra una impresora 3D?', 'Primero la revisión mecánica, después nivelación de cama, primera capa (Z-offset), pasos del extrusor, temperatura, flujo, retracción y avance de presión, y por último las medidas de la pieza.'],
            ['¿Por qué mis piezas no se pegan a la cama?', 'Las causas más habituales son una cama mal nivelada, la boquilla demasiado alta, una superficie sucia (límpiala con alcohol isopropílico) o una temperatura de cama demasiado baja.'],
            ['¿Por qué mis piezas salen más grandes de lo que deberían?', 'Normalmente por exceso de flujo o por la contracción del material, no por los pasos de los ejes. Calibra el flujo y, si hace falta, ajusta la compensación de tamaño en el laminador.'],
        ],
        related: [
            ['Imprime más rápido con boquillas grandes', '/blog/imprimir-mas-rapido-boquillas-grandes.html'],
            ['PLA, PETG o ABS: qué material elegir', '/blog/que-material-elegir-pla-petg-abs.html'],
            ['¿Comprar una impresora 3D o encargar las piezas?', '/blog/comprar-impresora-3d-o-encargar.html'],
        ],
        cta: ['¿Tu pieza no sale ni calibrando?', 'Si necesitas una pieza ya y bien hecha, la imprimimos por ti. Presupuesto gratis.'],
    },

    // ------------------------------------------------------------------
    {
        group: 'makers',
        slug: 'imprimir-mas-rapido-boquillas-grandes',
        short: 'Imprime más rápido',
        title: 'Imprime más rápido sin perder calidad: boquillas de 0,6 y 0,8 mm',
        seoTitle: 'Imprimir más rápido en 3D con boquillas de 0,6 y 0,8 mm',
        h1: 'Imprime más rápido sin perder calidad: cuándo usar boquillas de 0,6 y 0,8 mm',
        description: 'Cuánto tiempo ahorras con una boquilla de 0,6 u 0,8 mm, qué parámetros cambiar, el límite de flujo de tu hotend y en qué piezas compensa (y en cuáles no).',
        category: 'Consejos',
        date: '2024-02-21',
        modified: '2026-10-02',
        image: 'cono-antiestres-3d-1',
        imageAlt: 'Pieza impresa en 3D con boquilla de mayor tamaño',
        ads: true,
        summary: [
            'Una boquilla de 0,6 mm puede <strong>reducir el tiempo de impresión a la mitad</strong> en piezas funcionales; una de 0,8 mm, aún más.',
            'La velocidad real la limita el <strong>flujo volumétrico</strong> que es capaz de fundir tu hotend, no la velocidad en mm/s.',
            'Ajusta altura de capa (hasta ~75 % del diámetro) y ancho de línea (~100–120 % del diámetro).',
            'Compensa en piezas grandes y funcionales; no en figuras ni en piezas con detalles finos o textos pequeños.',
        ],
        body: `
                <p>La boquilla estándar de casi todas las impresoras es de 0,4 mm. Es un buen compromiso entre detalle y velocidad, pero para muchas piezas es innecesariamente fina. Cambiarla por una de 0,6 u 0,8 mm es una de las formas más baratas de multiplicar la productividad de tu impresora.</p>

                <h2>Por qué una boquilla más grande imprime más rápido</h2>
                <p>Lo que limita la velocidad de una impresora es la cantidad de plástico que puede fundir y depositar por segundo: el <strong>flujo volumétrico</strong>, que se calcula así:</p>
                <p><code>flujo (mm³/s) = altura de capa × ancho de línea × velocidad</code></p>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Boquilla</th><th>Capa</th><th>Ancho de línea</th><th>Plástico por cada mm recorrido</th></tr></thead>
                        <tbody>
                            <tr><td>0,4 mm</td><td>0,20 mm</td><td>0,45 mm</td><td>0,09 mm³</td></tr>
                            <tr><td>0,6 mm</td><td>0,30 mm</td><td>0,65 mm</td><td>0,195 mm³ (≈ 2,2×)</td></tr>
                            <tr><td>0,8 mm</td><td>0,40 mm</td><td>0,85 mm</td><td>0,34 mm³ (≈ 3,8×)</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>A la misma velocidad de movimiento, una boquilla de 0,6 mm deposita más del doble de material. Además, al ser las capas más gruesas, hay menos capas, menos cambios de capa y menos retracciones.</p>

                <h2>El límite real: tu hotend</h2>
                <p>Hay un tope: el hotend solo puede fundir cierta cantidad de plástico por segundo. Como orientación, un hotend estándar ronda los 10–15 mm³/s con PLA y los de alto flujo pueden superar los 25–30 mm³/s. Si lo sobrepasas, aparecerán huecos y líneas débiles (subextrusión). Con una boquilla grande, en lugar de subir la velocidad en mm/s, aprovechas mejor ese límite.</p>
                <p>Para encontrar el máximo de tu hotend, usa la prueba de flujo volumétrico máximo que incluyen laminadores como OrcaSlicer y fija ese valor como límite en tu perfil.</p>
                <div class="ad-slot">
                    <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-9463405593849277" data-ad-slot="9228660705"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>

                <h2>Qué parámetros cambiar</h2>
                <ul>
                    <li><strong>Diámetro de boquilla</strong> en el perfil de la impresora (si no, el laminador calculará mal todo lo demás).</li>
                    <li><strong>Altura de capa:</strong> entre el 25 % y el 75 % del diámetro. Con 0,6 mm, entre 0,15 y 0,45 mm; 0,3 mm es un buen punto de partida.</li>
                    <li><strong>Ancho de línea:</strong> en torno al 100–120 % del diámetro.</li>
                    <li><strong>Temperatura:</strong> súbela 5–10 °C para fundir más material por segundo.</li>
                    <li><strong>Retracción:</strong> recalíbrala; con boquillas grandes suele bastar con un poco menos.</li>
                    <li><strong>Paredes:</strong> con líneas más anchas, dos perímetros dan la misma resistencia que tres o cuatro con 0,4 mm.</li>
                </ul>

                <h2>Cuándo compensa y cuándo no</h2>
                <div class="table-wrap">
                    <table>
                        <thead><tr><th>Usa boquilla grande</th><th>Mejor 0,4 mm o menor</th></tr></thead>
                        <tbody>
                            <tr><td>Piezas funcionales, soportes, cajas</td><td>Figuras y miniaturas</td></tr>
                            <tr><td>Piezas grandes y prototipos rápidos</td><td>Textos pequeños y logos con detalle fino</td></tr>
                            <tr><td>Macetas, jarrones en modo espiral</td><td>Piezas con encajes muy precisos</td></tr>
                            <tr><td>Piezas que deben ser muy resistentes</td><td>Superficies curvas muy visibles</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Un truco: algunos laminadores permiten usar capas más gruesas en el relleno interior que en las paredes visibles, combinando velocidad y buen acabado exterior.</p>

                <h2>Un detalle importante: materiales abrasivos</h2>
                <p>Si vas a imprimir filamentos con fibra de carbono, fibra de vidrio o partículas que brillan en la oscuridad, usa una boquilla de <strong>acero endurecido</strong>. Esos materiales desgastan una boquilla de latón en muy poco tiempo, y suelen imprimirse mejor precisamente con 0,6 mm.</p>

                <h2>Conclusión</h2>
                <p>Para piezas funcionales, una boquilla de 0,6 mm es probablemente la mejora más rentable que puedes hacer en tu impresora: cuesta unos pocos euros y puede reducir los tiempos de impresión a la mitad. Guarda un perfil para cada boquilla y cambia según la pieza.</p>`,
        faq: [
            ['¿Cuánto más rápido imprime una boquilla de 0,6 mm?', 'En piezas funcionales, una boquilla de 0,6 mm puede reducir el tiempo de impresión aproximadamente a la mitad respecto a una de 0,4 mm, siempre que el hotend sea capaz de fundir el flujo necesario.'],
            ['¿Se pierde calidad con una boquilla más grande?', 'Se pierde detalle fino y las capas se ven más, pero las piezas suelen ser más resistentes. Para piezas funcionales es una gran opción; para figuras o textos pequeños, mejor 0,4 mm.'],
            ['¿Qué altura de capa usar con una boquilla de 0,6 mm?', 'Entre 0,15 y 0,45 mm. Un buen punto de partida es 0,3 mm.'],
        ],
        related: [
            ['Cómo calibrar una impresora 3D', '/blog/como-calibrar-impresora-3d.html'],
            ['PLA, PETG o ABS: qué material elegir', '/blog/que-material-elegir-pla-petg-abs.html'],
            ['¿Cuánto cuesta imprimir en 3D?', '/blog/cuanto-cuesta-imprimir-en-3d.html'],
        ],
        cta: ['¿Necesitas una pieza grande y rápido?', 'Si no quieres pasar horas ajustando perfiles, la imprimimos por ti en Tarragona.'],
    },
];
