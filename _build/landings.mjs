// Páginas de aterrizaje por servicio y por municipio.
// Cada página tiene contenido propio (nada de copiar y cambiar el nombre de la ciudad).
import { NAME, PHONE, EMAIL } from './lib.mjs';

export const LANDINGS = [
    // ------------------------------------------------------------------
    // MERCHANDISING
    // ------------------------------------------------------------------
    {
        slug: 'merchandising-personalizado-tarragona',
        crumb: 'Merchandising personalizado',
        active: '/merchandising-personalizado-tarragona.html',
        title: 'Merchandising personalizado en Tarragona | Llaveros, trofeos y regalos 3D',
        description: 'Merchandising personalizado impreso en 3D en Tarragona: llaveros con logo, trofeos, imanes, expositores y regalos de empresa para negocios, clubes y eventos. Desde 1 unidad. Presupuesto gratis.',
        h1: 'Merchandising personalizado en Tarragona',
        lead: 'Llaveros con logo, trofeos, imanes, soportes, figuras y regalos corporativos impresos en 3D con la imagen de tu marca. Diseñados y fabricados en nuestro taller de Tarragona, desde una unidad hasta series para ferias y eventos.',
        serviceType: 'Merchandising personalizado',
        waText: 'Hola, quiero presupuesto de merchandising personalizado',
        intro: {
            heading: 'Merchandising que no se parece al de nadie',
            text: 'El merchandising de catálogo es igual para todas las empresas: el mismo bolígrafo con otro logo. Con la impresión 3D el producto tiene la forma de tu marca. Modelamos tu logo, tu mascota o tu producto en 3D y lo convertimos en objetos útiles que tus clientes se quedan.',
            points: [
                'Diseño a partir de tu logo (PNG, SVG o PDF) incluido en el presupuesto.',
                'Formas, colores y textos totalmente a medida.',
                'Pedidos pequeños sin mínimos absurdos: desde 1 unidad.',
                'Precio por unidad más bajo cuanto mayor es la serie.',
                'Fabricación local en Tarragona: hablas con quien lo diseña e imprime.',
            ],
            image: ['llaveros-personalizados-3d', 'Caja de madera con llaveros personalizados con logo impresos en 3D en Tarragona'],
        },
        cardsHeading: 'Qué merchandising podemos fabricar',
        cardsLead: 'Algunas ideas de productos personalizados con tu marca. Si tienes otra en mente, pregúntanos.',
        cards: [
            ['gift', 'Llaveros con logo', 'El clásico que siempre funciona: con la forma de tu logo, en varios colores y con texto.', '/producto-llaveros-personalizados.html'],
            ['sparkles', 'Trofeos y medallas', 'Para torneos, competiciones internas, premios escolares o eventos de empresa.', '/producto-trofeos-personalizados.html'],
            ['type', 'Logos y letras de mostrador', 'Tu logo en 3D para el mostrador, el escaparate, un stand o la recepción.', '/producto-logo-imagen.html'],
            ['box', 'Expositores y soportes', 'Soportes de producto, porta folletos, porta tarjetas y displays con tu marca.', null],
            ['pin', 'Imanes y posavasos', 'Detalles económicos para repartir en ferias, hostelería y comercios.', null],
            ['hand', 'Antiestrés con logo', 'Conos y bolas antiestrés personalizados: un regalo de oficina que no acaba en el cajón.', '/producto-pack-antiestres.html'],
        ],
        works: [
            ['/producto-llaveros-personalizados.html', 'llaveros-personalizados-3d', 'Llaveros personalizados impresos en 3D', 'Llaveros personalizados'],
            ['/producto-trofeos-personalizados.html', 'trofeo-personalizado-3d-1', 'Trofeo personalizado con logo de academia impreso en 3D', 'Trofeos con logo'],
            ['/producto-logo-imagen.html', 'letras-personalizadas-3d', 'Letras corpóreas de un club impresas en 3D', 'Letras y logos 3D'],
            ['/producto-llaveros-spotify.html', 'llaveros-spotify-3d', 'Llaveros con código de Spotify impresos en 3D', 'Llaveros Spotify'],
        ],
        audience: {
            heading: 'Para quién hacemos merchandising',
            items: [
                ['Empresas y comercios', 'Regalos para clientes, kits de bienvenida para empleados, ferias, inauguraciones y aniversarios.'],
                ['Clubes y academias', 'Llaveros y trofeos con el escudo para jugadores, socios, campus y torneos.'],
                ['Eventos', 'Bodas, comuniones, congresos, despedidas y fiestas: detalles para invitados con nombres y fecha.'],
                ['Turismo y hostelería', 'Recuerdos con la imagen de tu restaurante, hotel o apartamento, y llaveros identificativos para llaves.'],
            ],
        },
        faqs: [
            ['¿Cuál es el pedido mínimo de merchandising?', 'No hay un mínimo estricto: podemos fabricar desde una sola unidad para validar el diseño. En series de 25, 50, 100 o más unidades el precio por pieza baja bastante.'],
            ['¿Cuánto cuesta el merchandising impreso en 3D?', 'Depende del tamaño, el número de colores, la cantidad y si hay que diseñar el modelo. Un llavero pequeño en serie cuesta mucho menos que una pieza única. Pásanos el logo, la cantidad y la fecha y te damos un precio cerrado sin compromiso. Más información en nuestra <a href="/blog/cuanto-cuesta-imprimir-en-3d.html">guía de precios de impresión 3D</a>.'],
            ['¿Qué necesito para encargar merchandising con mi logo?', 'Tu logo en la mejor calidad que tengas (SVG o PDF vectorial es ideal; PNG con fondo transparente también sirve), la cantidad, el tamaño aproximado, los colores y la fecha en la que lo necesitas.'],
            ['¿En cuánto tiempo está listo?', 'Los pedidos pequeños suelen estar en pocos días. Para series grandes o fechas fijas (ferias, eventos, bodas) te damos un plazo concreto con el presupuesto; avísanos con antelación y lo planificamos.'],
            ['¿Entregáis fuera de Tarragona?', 'Sí. Entregamos en Tarragona, Reus, Salou, Cambrils y el resto del Camp de Tarragona, y enviamos a cualquier punto de España.'],
        ],
        related: [
            ['Llaveros personalizados', '/producto-llaveros-personalizados.html'],
            ['Trofeos personalizados', '/producto-trofeos-personalizados.html'],
            ['Logos y letras corpóreas para negocios', '/blog/logos-y-letras-3d-para-negocios.html'],
            ['Cómo pedir trofeos para tu club o evento', '/blog/trofeos-personalizados-impresos-en-3d.html'],
        ],
        priority: '0.9',
    },

    // ------------------------------------------------------------------
    // REUS
    // ------------------------------------------------------------------
    {
        slug: 'impresion-3d-reus',
        crumb: 'Impresión 3D en Reus',
        city: 'Reus',
        title: 'Impresión 3D en Reus | Piezas a medida, llaveros y merchandising',
        description: 'Servicio de impresión 3D para Reus: piezas a medida, repuestos, prototipos, llaveros, trofeos y merchandising con tu logo. Taller a 15 minutos, en Tarragona. Presupuesto gratis por WhatsApp.',
        h1: 'Impresión 3D en Reus',
        lead: `Si buscas dónde imprimir en 3D en Reus, nuestro taller está en Tarragona, a unos 15 minutos. Imprimimos tus archivos, diseñamos piezas desde una foto y fabricamos merchandising para comercios, empresas y clubes de Reus.`,
        serviceType: 'Impresión 3D',
        waText: 'Hola, soy de Reus y quiero presupuesto de impresión 3D',
        intro: {
            heading: 'Un taller de impresión 3D cerca de Reus',
            text: 'Reus tiene mucho comercio, mucha pequeña empresa y mucho club deportivo, y eso es justo lo que más nos piden: piezas que ya no se venden, prototipos, rótulos y detalles con logo. Lo hablamos todo por WhatsApp, así que no hace falta que te desplaces: nos mandas fotos o el archivo y te damos precio y plazo.',
            points: [
                'Presupuesto por WhatsApp con fotos o archivo, sin desplazarte.',
                'Entrega acordada en Reus o envío a domicilio.',
                'Piezas sueltas y series cortas para negocios.',
                'Diseño 3D incluido si no tienes el modelo.',
            ],
            image: ['logo-personalizado-impreso-3d', 'Logo de empresa impreso en 3D en blanco sobre pared, similar a los que hacemos para negocios de Reus'],
        },
        cardsHeading: 'Lo que más nos piden desde Reus',
        cards: [
            ['wrench', 'Repuestos y piezas a medida', 'Clips, soportes, tapas, ruedas o piezas de maquinaria ligera que ya no se fabrican.', '/blog/piezas-de-repuesto-impresas-en-3d.html'],
            ['building', 'Piezas para comercios', 'Expositores, porta precios, señalética y soportes para el escaparate de tu tienda.', '/info.html#repuestos'],
            ['type', 'Logos y letras corpóreas', 'Rótulos 3D para locales, gimnasios y oficinas, también retroiluminados.', '/producto-logo-imagen.html'],
            ['gift', 'Llaveros y merchandising', 'Llaveros con logo y regalos de empresa para clientes, ferias y eventos.', '/merchandising-personalizado-tarragona.html'],
            ['sparkles', 'Trofeos para clubes', 'Trofeos con el escudo del club para torneos, campus y fiestas de final de temporada.', '/producto-trofeos-personalizados.html'],
            ['zap', 'Prototipos', 'Prototipos funcionales para emprendedores e industria antes de fabricar en serie.', '/info.html#prototipos'],
        ],
        faqs: [
            ['¿Tenéis tienda física en Reus?', `No: nuestro taller está en Tarragona, a unos 15 minutos de Reus. Trabajamos por WhatsApp (${PHONE}) y email (${EMAIL}), así que puedes encargarlo todo sin desplazarte. La entrega la acordamos contigo o te lo enviamos.`],
            ['¿Cuánto cuesta imprimir en 3D en Reus?', 'Lo mismo que en Tarragona: depende del tamaño, el material, la cantidad y si hay que diseñar el modelo. Te damos un precio cerrado antes de empezar. Consulta nuestra <a href="/blog/cuanto-cuesta-imprimir-en-3d.html">guía de precios</a>.'],
            ['¿Podéis replicar una pieza rota si no tengo el archivo?', 'Sí. Nos envías fotos con medidas (o la pieza) y la modelamos en 3D. Muchas veces la reforzamos para que no se vuelva a romper.'],
            ['¿Hacéis llaveros o trofeos para clubes de Reus?', 'Sí, para clubes, escuelas, academias y asociaciones. Desde pocas unidades hasta series para torneos.'],
        ],
        priority: '0.7',
    },

    // ------------------------------------------------------------------
    // SALOU
    // ------------------------------------------------------------------
    {
        slug: 'impresion-3d-salou',
        crumb: 'Impresión 3D en Salou',
        city: 'Salou',
        title: 'Impresión 3D en Salou | Merchandising, llaveros y piezas a medida',
        description: 'Impresión 3D para Salou y La Pineda: merchandising y llaveros para hoteles, apartamentos y hostelería, señalética, piezas a medida y regalos personalizados. Taller en Tarragona. Presupuesto gratis.',
        h1: 'Impresión 3D en Salou',
        lead: 'Damos servicio de impresión 3D a Salou y La Pineda desde nuestro taller en Tarragona. Trabajamos mucho con negocios turísticos: llaveros para apartamentos, señalética, soportes para cartas y recuerdos con la imagen de tu marca.',
        serviceType: 'Impresión 3D',
        waText: 'Hola, tengo un negocio en Salou y quiero presupuesto de impresión 3D',
        intro: {
            heading: 'Impresión 3D pensada para negocios turísticos',
            text: 'En Salou la temporada lo marca todo: hay que tener las cosas listas antes de que lleguen los visitantes. Con la impresión 3D no dependes de pedidos mínimos enormes ni de fábricas lejanas: diseñamos tu pieza, te la enseñamos y la fabricamos en Tarragona en pocos días.',
            points: [
                'Llaveros identificativos para apartamentos turísticos y hoteles.',
                'Señalética, números y soportes para mesas y cartas.',
                'Recuerdos y merchandising con la imagen de tu negocio.',
                'Repuestos para equipamiento que ya no se encuentra.',
            ],
            image: ['llaveros-spotify-3d', 'Llaveros de colores impresos en 3D, como los que hacemos para negocios de Salou'],
        },
        cardsHeading: 'Qué imprimimos para Salou y La Pineda',
        cards: [
            ['gift', 'Llaveros para alojamientos', 'Llaveros con el nombre del apartamento, el número de habitación o tu logo, fáciles de identificar.', '/producto-llaveros-personalizados.html'],
            ['type', 'Logos y rótulos', 'Logos 3D para la fachada interior, la recepción o la barra, también con luz LED.', '/producto-logo-imagen.html'],
            ['building', 'Hostelería', 'Números de mesa, soportes para códigos QR, porta cartas y expositores.', null],
            ['sparkles', 'Merchandising y recuerdos', 'Detalles con tu marca para clientes y eventos, en pocas unidades o en serie.', '/merchandising-personalizado-tarragona.html'],
            ['wrench', 'Piezas y repuestos', 'Piezas para mobiliario, persianas, electrodomésticos o maquinaria ligera.', '/blog/piezas-de-repuesto-impresas-en-3d.html'],
            ['hand', 'Regalos personalizados', 'Fotos en relieve, escudos con nombre, porta alianzas y más en nuestra tienda.', '/tienda.html'],
        ],
        faqs: [
            ['¿Dónde puedo imprimir en 3D cerca de Salou?', `Nuestro taller está en Tarragona, a unos 15 minutos de Salou. Encargas por WhatsApp (${PHONE}) o email y acordamos la entrega o te lo enviamos.`],
            ['¿Hacéis llaveros para apartamentos turísticos?', 'Sí. Llaveros con el nombre o número del apartamento, el logo de la empresa gestora o el color que elijas. Desde pocas unidades.'],
            ['¿Podéis tenerlo listo antes de la temporada?', 'Sí, si nos avisas con tiempo. Al darte el presupuesto te indicamos el plazo exacto; para series grandes, mejor encargarlas con unas semanas de margen.'],
            ['¿Qué material aguanta mejor al sol y la humedad?', 'Para exterior o zonas húmedas recomendamos PETG, que resiste mejor los rayos UV y la humedad que el PLA. Más detalles en nuestra <a href="/blog/que-material-elegir-pla-petg-abs.html">guía de materiales</a>.'],
        ],
        priority: '0.7',
    },

    // ------------------------------------------------------------------
    // CAMBRILS
    // ------------------------------------------------------------------
    {
        slug: 'impresion-3d-cambrils',
        crumb: 'Impresión 3D en Cambrils',
        city: 'Cambrils',
        title: 'Impresión 3D en Cambrils | Piezas, repuestos, trofeos y regalos 3D',
        description: 'Servicio de impresión 3D para Cambrils: piezas de repuesto, accesorios náuticos sencillos, trofeos para regatas y clubes, logos 3D y regalos personalizados. Taller en Tarragona. Presupuesto gratis.',
        h1: 'Impresión 3D en Cambrils',
        lead: 'Imprimimos en 3D para particulares, restaurantes, clubes y empresas de Cambrils desde nuestro taller de Tarragona. Repuestos, piezas a medida, trofeos, logos y regalos personalizados, con diseño 3D incluido si no tienes el archivo.',
        serviceType: 'Impresión 3D',
        waText: 'Hola, soy de Cambrils y quiero presupuesto de impresión 3D',
        intro: {
            heading: 'De la idea a la pieza, sin salir de Cambrils',
            text: 'Nos mandas fotos, medidas o el archivo por WhatsApp, te enviamos el diseño y el precio, y cuando la pieza está lista acordamos la entrega o te la enviamos. Así de sencillo. Nos encargan desde un clip roto de una persiana hasta trofeos para una competición entera.',
            points: [
                'Diseño desde fotos, bocetos o la pieza original.',
                'PETG para piezas de exterior y ambiente marino.',
                'Trofeos y llaveros para clubes deportivos y náuticos.',
                'Envío o entrega acordada en Cambrils.',
            ],
            image: ['trofeo-personalizado-3d-3', 'Trofeo personalizado impreso en 3D con el nombre del club en la base'],
        },
        cardsHeading: 'Encargos habituales desde Cambrils',
        cards: [
            ['wrench', 'Repuestos del hogar', 'Piezas de persianas, muebles, electrodomésticos y jardín que ya no se encuentran.', '/blog/piezas-de-repuesto-impresas-en-3d.html'],
            ['zap', 'Accesorios a medida', 'Soportes, ganchos, tapas y adaptadores, también para la embarcación (piezas no estructurales).', '/info.html'],
            ['sparkles', 'Trofeos para clubes', 'Trofeos para regatas, torneos y competiciones con el logo del club.', '/producto-trofeos-personalizados.html'],
            ['building', 'Restaurantes y comercios', 'Números de mesa, soportes para QR, expositores y logos para el local.', '/producto-logo-imagen.html'],
            ['gift', 'Llaveros y merchandising', 'Llaveros con logo y detalles de empresa para clientes y eventos.', '/merchandising-personalizado-tarragona.html'],
            ['hand', 'Regalos personalizados', 'Fotos en relieve, escudos de fútbol con nombre, porta alianzas y más.', '/tienda.html'],
        ],
        faqs: [
            ['¿Hay servicio de impresión 3D en Cambrils?', `Damos servicio a Cambrils desde nuestro taller de Tarragona, a unos 20 minutos. Escríbenos por WhatsApp al ${PHONE} con fotos o el archivo y te damos presupuesto sin compromiso.`],
            ['¿Las piezas impresas en 3D aguantan el ambiente marino?', 'Para exterior y humedad usamos PETG, que resiste mejor el agua, la sal y el sol que el PLA. Para piezas que soportan cargas importantes o de seguridad no recomendamos la impresión 3D; te lo diremos con sinceridad.'],
            ['¿Hacéis trofeos para clubes de Cambrils?', 'Sí. Diseñamos trofeos con el logo y los colores del club, para unidades sueltas o series de varios premios.'],
            ['¿Cuánto tarda un repuesto?', 'Una pieza sencilla puede estar en pocos días. Si hay que modelarla desde cero, te enseñamos el diseño antes de imprimir y te damos fecha concreta.'],
        ],
        priority: '0.7',
    },
];

// ----------------------------------------------------------------------
// Portada en catalán (/ca/)
// ----------------------------------------------------------------------
export const CA = {
    title: 'Impressió 3D a Tarragona | Peces a mida, clauers i marxandatge',
    description: "Servei d'impressió 3D a Tarragona: peces a mida, recanvis, prototips, clauers personalitzats, trofeus i marxandatge amb el teu logo. Disseny 3D inclòs. Pressupost gratuït per WhatsApp.",
    h1: 'Impressió 3D a Tarragona',
    lead: "Convertim les teves idees en peces reals: prototips, recanvis, logos, trofeus, clauers i regals personalitzats impresos en 3D. Si no tens l'arxiu, el dissenyem nosaltres.",
    services: [
        ['box', 'Impressió 3D per encàrrec', "Envia'ns el teu arxiu STL, 3MF o OBJ i l'imprimim amb el material i el color que necessitis."],
        ['pen', 'Disseny i modelatge 3D', 'Sense arxiu? El dissenyem a partir d’una foto, un esbós amb mides o la peça original.'],
        ['wrench', 'Peces de recanvi', 'Si s’ha trencat una peça que ja no venen, la repliquem o la millorem perquè torni a funcionar.'],
        ['zap', 'Prototipatge ràpid', 'Prototips funcionals i sèries curtes per a empreses i emprenedors.'],
        ['gift', 'Clauers i marxandatge', 'Clauers amb logo, trofeus i regals d’empresa per a negocis, clubs i esdeveniments.'],
        ['type', 'Logos i lletres corpòries', 'Rètols 3D per a locals, gimnasos i esdeveniments, fins i tot de més d’un metre i retroil·luminats.'],
    ],
    faqs: [
        ['On puc imprimir en 3D a Tarragona?', `A <strong>${NAME}</strong> oferim servei d'impressió 3D a Tarragona per a particulars i empreses. Escriu-nos per WhatsApp al ${PHONE} o per correu a ${EMAIL} i et donem pressupost sense compromís.`],
        ['Quant costa imprimir una peça en 3D?', 'Depèn de la mida, el material, el temps d’impressió, la quantitat i si cal dissenyar el model. Les peces petites poden costar pocs euros. Et donem un preu tancat abans d’imprimir.'],
        ['Feu clauers i marxandatge personalitzat?', 'Sí. Fem clauers amb logo o nom, trofeus, imants i regals d’empresa, des d’una unitat fins a sèries per a fires i esdeveniments.'],
        ['Necessito tenir l’arxiu 3D?', 'No. Si el tens (STL, 3MF, OBJ o STEP) l’imprimim directament; si no, el dissenyem a partir d’una foto, un esbós o la peça original.'],
        ['Feu enviaments fora de Tarragona?', 'Sí. Donem servei a Tarragona, Reus, Salou, Cambrils, Vila-seca, Valls, Torredembarra, el Vendrell i tot el Camp de Tarragona, i enviem a tot Espanya.'],
    ],
};
