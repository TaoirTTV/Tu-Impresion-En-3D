// Catálogo de la tienda. price = número en euros o null (consultar).
export const PRODUCTS = [
    {
        slug: 'producto-escudos-personalizados',
        name: 'Escudo de fútbol personalizado con nombre',
        short: 'Escudo de tu equipo en 3D con tu nombre. Un regalo perfecto para cualquier aficionado.',
        category: 'Regalos',
        price: 34.95,
        buy: 'https://py.pl/6rNbLkxo2ne',
        images: [['escudo-futbol-personalizado-3d', 'Escudo de fútbol personalizado con el nombre Miguel impreso en 3D']],
        description:
            '¿Estás orgulloso de tu equipo? Imprimimos en 3D el escudo de tu club con relieve y colores, sobre una base con el nombre que elijas. Ideal para decorar la habitación, la estantería o como regalo de cumpleaños para un aficionado al fútbol.',
        details: [
            'Personalizado con el nombre o texto que quieras.',
            'Escudo en relieve y a varios colores.',
            'Fabricado bajo pedido en nuestro taller de Tarragona.',
            'Indícanos el equipo y el nombre después de la compra (por WhatsApp o email).',
        ],
        related: ['producto-fotos-impresas', 'producto-nike-jordan', 'producto-llaveros-spotify'],
    },
    {
        slug: 'producto-porta-alianzas',
        name: 'Porta alianzas personalizado',
        short: 'Porta alianzas para tu boda con vuestros nombres y la frase que elijáis.',
        category: 'Bodas',
        price: 24.94,
        buy: 'https://py.pl/AVckKVDRVKT',
        images: [
            ['porta-alianzas-personalizado-1', 'Porta alianzas de boda personalizado con los nombres David y Ángela'],
            ['porta-alianzas-personalizado-2', 'Detalle del porta alianzas personalizado con los anillos de boda'],
        ],
        description:
            'Presenta los anillos de tu boda de una forma única con este porta alianzas personalizado con vuestros nombres y la frase que elijáis. Un recuerdo que os acompañará siempre.',
        details: [
            'Personalizado con vuestros nombres, fecha o frase.',
            'Pensado para presentar las alianzas el día de la boda.',
            'Fabricado bajo pedido en Tarragona.',
            'Envíanos los textos tras la compra por WhatsApp o email.',
        ],
        related: ['producto-fotos-impresas', 'producto-escudos-personalizados', 'producto-trofeos-personalizados'],
    },
    {
        slug: 'producto-fotos-impresas',
        name: 'Foto impresa en 3D (litofanía en relieve)',
        short: 'Convierte tu foto favorita en una imagen en relieve impresa en 3D.',
        category: 'Regalos',
        price: 12.95,
        priceFrom: true,
        variants: [
            { label: '10 cm', price: 12.95, url: 'https://www.paypal.com/instantcommerce/checkout/AFB77RH6WTK9Y' },
            { label: '18 cm', price: 24.95, url: 'https://www.paypal.com/instantcommerce/checkout/SJC9UBRPPDKW2' },
        ],
        images: [
            ['foto-impresa-3d-relieve-1', 'Fotografía familiar impresa en 3D con relieve sobre un caballete'],
            ['foto-impresa-3d-relieve-2', 'Foto de una mascota impresa en 3D envuelta para regalo'],
        ],
        description:
            'Mándanos tu foto favorita y la convertimos en una fotografía con relieve impresa en 3D. Un regalo original para cumpleaños, aniversarios o para sorprender a tus invitados.',
        details: [
            'Disponible en 10 cm y 18 cm.',
            'Funciona mejor con fotos nítidas y bien iluminadas.',
            'Envíanos la foto tras la compra por WhatsApp o email.',
            'Fabricada bajo pedido en Tarragona.',
        ],
        related: ['producto-porta-alianzas', 'producto-escudos-personalizados', 'producto-llaveros-spotify'],
    },
    {
        slug: 'producto-trofeos-personalizados',
        name: 'Trofeos personalizados',
        short: 'Trofeos a medida para torneos, eventos, clubes y empresas.',
        category: 'Eventos',
        price: null,
        images: [
            ['trofeo-personalizado-3d-1', 'Trofeo personalizado impreso en 3D en rosa y negro con logo de academia'],
            ['trofeo-personalizado-3d-2', 'Vista lateral de trofeo personalizado impreso en 3D'],
            ['trofeo-personalizado-3d-3', 'Trofeo impreso en 3D con el nombre del club en la base'],
            ['trofeo-personalizado-3d-4', 'Detalle de la base grabada de un trofeo impreso en 3D'],
        ],
        description:
            'Diseñamos e imprimimos trofeos únicos con el logo de tu club, empresa o evento. Perfectos para torneos deportivos, competiciones, eventos de empresa o premios escolares, tanto unidades sueltas como series.',
        details: [
            'Diseño a medida con tu logo, colores y texto.',
            'Unidades sueltas o series para torneos.',
            'Ejemplo real: trofeos para Scorpii Calisthenics Academy.',
            'Pide presupuesto indicando cantidad, tamaño y fecha del evento.',
        ],
        related: ['producto-logo-imagen', 'producto-escudos-personalizados', 'producto-llaveros-personalizados'],
        guide: ['Guía: cómo pedir trofeos personalizados para tu club o evento', '/blog/trofeos-personalizados-impresos-en-3d.html'],
    },
    {
        slug: 'producto-logo-imagen',
        name: 'Tu logo, letras o imagen en 3D a cualquier tamaño',
        short: 'Logos corpóreos, letras y rótulos 3D para negocios, locales y eventos.',
        category: 'Empresas',
        price: null,
        images: [
            ['logo-retroiluminado-impreso-3d', 'Logo retroiluminado con LED rosa impreso en 3D'],
            ['logo-personalizado-impreso-3d', 'Logo de empresa impreso en 3D en blanco sobre pared rosa'],
            ['letras-personalizadas-3d', 'Letras corpóreas Scorpii Calisthenics Academy impresas en 3D'],
        ],
        description:
            'Imprimimos tu logo o imagen en 3D en el tamaño que necesites: desde pequeñas piezas para el mostrador hasta logos de pared de más de un metro, como el de 150 cm que hicimos para Scorpii Calisthenics. También letras corpóreas, rótulos y logos retroiluminados.',
        details: [
            'Partimos de tu logo en imagen (PNG, SVG, PDF) y lo modelamos en 3D.',
            'Grandes formatos divididos en piezas y montados sobre estructura.',
            'Opción de retroiluminación LED.',
            'Ideal para gimnasios, tiendas, oficinas, stands y eventos.',
        ],
        related: ['producto-trofeos-personalizados', 'producto-llaveros-personalizados', 'producto-escudos-personalizados'],
        guide: ['Guía: tipos de logos 3D, tamaños, montaje y qué archivo enviar', '/blog/logos-y-letras-3d-para-negocios.html'],
    },
    {
        slug: 'producto-llaveros-personalizados',
        name: 'Llaveros personalizados',
        short: 'Llaveros con tu logo, nombre o diseño. Por unidades o en cantidad para empresas.',
        category: 'Merchandising',
        price: null,
        images: [['llaveros-personalizados-3d', 'Caja de madera con llaveros personalizados impresos en 3D']],
        description:
            'Llaveros únicos con el diseño que elijas: nombre, logo, forma o mensaje especial. Perfectos como merchandising para tu empresa o club, detalles para bodas y eventos o regalos.',
        details: [
            'Cualquier forma, texto y combinación de colores.',
            'Precio según cantidad y tamaño: cuantas más unidades, más económico.',
            'Ideal para merchandising, bodas, comuniones y eventos.',
            'Fabricados en Tarragona.',
        ],
        related: ['producto-llaveros-spotify', 'producto-logo-imagen', 'producto-fotos-impresas'],
    },
    {
        slug: 'producto-llaveros-spotify',
        name: 'Llaveros Spotify (pack de 3)',
        short: 'Tu canción favorita convertida en un llavero con código de Spotify escaneable.',
        category: 'Regalos',
        price: 9.94,
        priceNote: 'pack de 3',
        buy: 'https://www.paypal.com/instantcommerce/checkout/JYNM4BHY97MX8',
        images: [['llaveros-spotify-3d', 'Llaveros con código de Spotify impresos en 3D en varios colores']],
        description:
            'Envíanos el enlace de tu canción o playlist favorita de Spotify y la convertimos en un llavero con su código de Spotify. Un regalo original para parejas, amigos o para llevar tu música siempre contigo.',
        details: [
            'Pack de 3 llaveros.',
            'Incluye el código de Spotify de la canción o playlist que elijas.',
            'Envíanos los enlaces tras la compra por WhatsApp o email.',
            'Fabricados en Tarragona.',
        ],
        related: ['producto-llaveros-personalizados', 'producto-fotos-impresas', 'producto-escudos-personalizados'],
    },
    {
        slug: 'producto-nike-jordan',
        name: 'Zapatilla Jordan en miniatura',
        short: 'Réplica en miniatura ultrarrealista de las míticas zapatillas Jordan.',
        category: 'Decoración',
        price: null,
        buy: 'https://www.paypal.com/instantcommerce/checkout/MJ2KVFJ24DEDG',
        images: [
            ['zapatilla-jordan-impresa-3d-1', 'Zapatilla Jordan roja, blanca y negra en miniatura impresa en 3D'],
            ['zapatilla-jordan-impresa-3d-2', 'Vista lateral de la zapatilla en miniatura impresa en 3D'],
        ],
        description:
            'Una réplica en miniatura ultrarrealista de las míticas zapatillas de baloncesto. Disponible en rojo y azul para lucirla en tu estantería o escritorio.',
        details: [
            'Disponible en rojo y azul.',
            'Pieza decorativa para coleccionistas y sneakerheads.',
            'Fabricada bajo pedido en Tarragona.',
        ],
        related: ['producto-escudos-personalizados', 'producto-fotos-impresas', 'producto-llaveros-spotify'],
    },
    {
        slug: 'producto-cono-antiestres',
        name: 'Cono antiestrés (2x1)',
        short: 'Juguete antiestrés en espiral impreso en 3D. Llévate dos.',
        category: 'Antiestrés',
        price: 9.99,
        priceNote: '2 unidades',
        buy: 'https://www.paypal.com/instantcommerce/checkout/FEA3N3DUAGJCA',
        images: [
            ['cono-antiestres-3d-1', 'Cono antiestrés en espiral impreso en 3D en rosa y amarillo'],
            ['cono-antiestres-3d-2', 'Dos conos antiestrés impresos en 3D'],
        ],
        description:
            '¿Estás aburrido o nervioso? Este cono antiestrés en espiral te mantendrá entretenido durante horas. Muy útil para estudiar, trabajar o durante viajes largos. Promoción 2x1.',
        details: [
            'Incluye 2 conos.',
            'Diseño en espiral que se estira y se recoge.',
            'Colores variados.',
        ],
        related: ['producto-bola-antiestres', 'producto-pack-antiestres', 'producto-llaveros-spotify'],
    },
    {
        slug: 'producto-bola-antiestres',
        name: 'Bola antiestrés',
        short: 'Bola en espiral impresa en 3D para mantener las manos ocupadas.',
        category: 'Antiestrés',
        price: 9.99,
        buy: 'https://www.paypal.com/instantcommerce/checkout/RH2KTX86D2V3J',
        images: [
            ['bola-antiestres-3d-1', 'Bolas antiestrés en espiral impresas en 3D en rojo y amarillo'],
            ['bola-antiestres-3d-2', 'Bola antiestrés impresa en 3D en espiral roja y amarilla'],
        ],
        description:
            '¿Te cuesta concentrarte? Utiliza esta bola antiestrés en espiral para entretenerte durante horas. Muy útil para estudiantes, en la oficina o durante largos viajes.',
        details: ['Diseño en espiral que gira entre los dedos.', 'Colores variados.', 'Fabricada en Tarragona.'],
        related: ['producto-cono-antiestres', 'producto-pack-antiestres', 'producto-llaveros-spotify'],
    },
    {
        slug: 'producto-pack-antiestres',
        name: 'Pack antiestrés pequeño',
        short: 'Combinación de conos y bolas antiestrés impresas en 3D.',
        category: 'Antiestrés',
        price: 14.94,
        buy: 'https://www.paypal.com/instantcommerce/checkout/64C2JESS84UMJ',
        images: [['pack-antiestres-3d', 'Pack de conos y bolas antiestrés impresos en 3D']],
        description:
            'Combina conos y bolas antiestrés para entretenerte durante horas. El regalo perfecto para estudiantes, para la oficina o para los viajes largos.',
        details: ['Incluye conos y bolas antiestrés.', 'Colores variados.', 'Fabricado en Tarragona.'],
        related: ['producto-cono-antiestres', 'producto-bola-antiestres', 'producto-escudos-personalizados'],
    },
];

export const bySlug = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p]));

export const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';
export const priceLabel = (p) =>
    p.price == null ? 'Consultar precio' : `${p.priceFrom ? 'Desde ' : ''}${fmt(p.price)}${p.priceNote ? ` (${p.priceNote})` : ''}`;
