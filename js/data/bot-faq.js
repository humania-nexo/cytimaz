/**
 * ====================================================================
 * CYTIMAZ - BASE DE CONOCIMIENTO Y DIÁLOGOS DE TINA (ASESORA VIRTUAL)
 * ====================================================================
 * Capacidad real en planta Cytimaz:
 * - Tambo: 200L
 * - Tinacos Bicapa (Arena UV + Blanco Espumado): 450L, 600L, 800L, 1,100L, 1,300L
 * - Cisternas Reforzadas: 1,100L Bala Vertical, 1,100L, 1,300L, 3,000L, 5,500L, 10,000L
 * - Horizontales: 600L, 1,100L
 */

const CYTIMAZ_BOT_DATA = {
  mascot: {
    name: "Tina",
    title: "Asesora Virtual Cytimaz",
    greeting: "¡Hola! 👋 Soy Tina, tu asesora virtual en Cytimaz. Puedes preguntarme sobre **precios, capacidades (450L a 10,000L), tecnología bicapa, envíos o ubicación**.",
    statusText: "En línea | Respuesta inmediata"
  },

  quickOptions: [
    {
      id: "recomendar",
      label: "💧 ¿Qué capacidades fabrican?",
      icon: "calculator"
    },
    {
      id: "tecnologia_tinacos",
      label: "🛡️ ¿Por qué color Arena y Bicapa?",
      icon: "layers"
    },
    {
      id: "cisterna_bala",
      label: "🧱 Cisterna Vertical Bala 1,100L",
      icon: "building"
    },
    {
      id: "envios",
      label: "🚚 Envíos y entregas en Mazatlán",
      icon: "truck"
    },
    {
      id: "mayoreo",
      label: "🏗️ Precios de Mayoreo y Obras",
      icon: "building"
    },
    {
      id: "garantia",
      label: "⭐ Garantía de Fábrica (5 Años)",
      icon: "award"
    },
    {
      id: "ubicacion",
      label: "📍 Ubicación y Horarios de Planta",
      icon: "building"
    },
    {
      id: "whatsapp_directo",
      label: "💬 Hablar por WhatsApp con un Asesor",
      icon: "whatsapp",
      highlight: true
    }
  ],

  // Base de conocimientos para matching inteligente de palabras clave
  knowledgeBase: [
    {
      id: "precios_cotizar",
      keywords: ["precio", "precios", "costo", "costos", "cuanto vale", "cuanto cuesta", "cuanto sale", "cotizar", "cotizacion", "comprar", "venta", "presupuesto", "catalogo", "cuanto cobran", "promocion", "descuento", "barato", "economico"],
      text: "Al ser la **única fábrica de rotomoldeo en Mazatlán**, te ofrecemos precios directos de fábrica sin intermediarios y con **Kit de Accesorios GRATIS** incluido en cada tinaco.",
      bullets: [
        "🎁 **Incluye Kit Completo:** Válvula, flotador, multiconector, tapa rosca, capuchón y venteo.",
        "🚚 **Entrega Inmediata:** Directo en tu obra, domicilio o negocio en Mazatlán y sur de Sinaloa.",
        "📋 **Atención Personalizada:** Te compartimos la lista de precios oficial por WhatsApp."
      ],
      ctaText: "Solicitar Precios por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría consultar la lista de precios y cotizar. ¿Tienen disponible?"
    },

    {
      id: "capacidad_1100",
      keywords: ["1100", "1100l", "1100 litros", "1100lt", "mil cien", "1 100", "1.100"],
      text: "El **Tinaco Cytimaz de 1,100 Litros** es nuestro modelo más vendido y preferido por plomeros y familias:",
      bullets: [
        "👨‍👩‍👧‍👦 **Recomendación:** Ideal para familias de 4 a 5 personas.",
        "☀️ **Bicapa Térmica:** Exterior Arena Solar reflectante de calor + Interior Blanco Espumado rígido y grado alimenticio.",
        "🎁 **Kit GRATIS:** Válvula, flotador, multiconector, tapa rosca hermética y venteo.",
        "🎨 **Colores:** Arena Solar, Azul Profundo, Blanco Neutro y Negro.",
        "⭐ **5 Años de Garantía:** Respaldo directo en Mazatlán."
      ],
      ctaText: "Cotizar Tinaco 1,100L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar el Tinaco Cytimaz de 1,100 Litros. ¿Lo tienen disponible?"
    },

    {
      id: "capacidad_450",
      keywords: ["450", "450l", "450 litros", "450lt", "cuatrocientos cincuenta"],
      text: "El **Tinaco Cytimaz de 450 Litros** es compacto y ultra resistente:",
      bullets: [
        "👤 **Recomendación:** Ideal para 1 a 2 personas, departamentos, oficinas o espacios reducidos.",
        "☀️ **Bicapa con Filtro UV:** Exterior Arena reflectante y núcleo interior blanco espumado.",
        "🎁 **Kit de Accesorios GRATIS incluido.**"
      ],
      ctaText: "Cotizar Tinaco 450L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar el Tinaco de 450 Litros. ¿Lo tienen disponible?"
    },

    {
      id: "capacidad_600",
      keywords: ["600", "600l", "600 litros", "600lt", "seiscientos"],
      text: "El **Tinaco Cytimaz de 600 Litros** es perfecto para viviendas pequeñas o medianas:",
      bullets: [
        "👥 **Recomendación:** Para 2 a 3 personas con autonomía de agua limpia.",
        "🛡️ **Bicapa Grado Alimenticio:** Mantiene el agua fresca y libre de bacterias.",
        "🎁 **Kit de Accesorios GRATIS incluido.**"
      ],
      ctaText: "Cotizar Tinaco 600L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar el Tinaco de 600 Litros. ¿Lo tienen disponible?"
    },

    {
      id: "capacidad_800",
      keywords: ["800", "800l", "800 litros", "800lt", "ochocientos"],
      text: "El **Tinaco Cytimaz de 800 Litros** brinda gran equilibrio entre capacidad y espacio:",
      bullets: [
        "👨‍👩‍👧 **Recomendación:** Para 3 a 4 personas con excelente presión.",
        "☀️ **Exterior Arena UV:** Diseñado para soportar el sol y calor de Mazatlán.",
        "🎁 **Kit de Accesorios GRATIS incluido.**"
      ],
      ctaText: "Cotizar Tinaco 800L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar el Tinaco de 800 Litros. ¿Lo tienen disponible?"
    },

    {
      id: "capacidad_1300",
      keywords: ["1300", "1300l", "1300 litros", "1300lt", "mil trescientos", "1 300", "1.300"],
      text: "El **Tinaco Cytimaz de 1,300 Litros** ofrece almacenamiento ampliado:",
      bullets: [
        "👨‍👩‍👧‍👦 **Recomendación:** Para familias de 5 a 6 personas o negocios con alto consumo.",
        "🛡️ **Estructura Robusta:** Bicapa espumada para máxima durabilidad y resistencia al pandeo.",
        "🎁 **Kit de Accesorios GRATIS incluido.**"
      ],
      ctaText: "Cotizar Tinaco 1,300L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar el Tinaco de 1,300 Litros. ¿Lo tienen disponible?"
    },

    {
      id: "capacidad_3000",
      keywords: ["3000", "3000l", "3000 litros", "3000lt", "tres mil", "3 000", "3.000"],
      text: "La **Cisterna Cytimaz de 3,000 Litros** está diseñada para almacenamiento subterráneo o a superficie:",
      bullets: [
        "🏢 **Recomendación:** Para residencias grandes, complejos de departamentos o comercios.",
        "🧱 **Cuerpo Monolítico Reforzado:** Nervaduras de alta resistencia estructural contra presión de tierra.",
        "🎁 **Kit de Conexión incluido.**"
      ],
      ctaText: "Cotizar Cisterna 3,000L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar la Cisterna de 3,000 Litros. ¿La tienen disponible?"
    },

    {
      id: "capacidad_5500",
      keywords: ["5500", "5500l", "5500 litros", "5500lt", "cinco mil quinientos", "5 500", "5.500"],
      text: "La **Cisterna Industrial Cytimaz de 5,500 Litros** ofrece máxima capacidad pesada:",
      bullets: [
        "🏭 **Recomendación:** Proyectos de construcción, hoteles, condominios, agricultura e industrias.",
        "🛡️ **100% Polietileno Virgen:** Apta para agua potable y almacenamiento seguro de grado alimenticio."
      ],
      ctaText: "Cotizar Cisterna 5,500L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar la Cisterna de 5,500 Litros. ¿La tienen disponible?"
    },

    {
      id: "capacidad_10000",
      keywords: ["10000", "10000l", "10000 litros", "10000lt", "diez mil", "10 000", "10.000"],
      text: "La **Cisterna Industrial Cytimaz de 10,000 Litros** es nuestro modelo de mayor capacidad monolítica:",
      bullets: [
        "🏗️ **Uso Rudo:** Desarrollos inmobiliarios, plantas procesadoras, naves industriales y riego.",
        "🛡️ Resistencia perimetral reforzada por rotomoldeo."
      ],
      ctaText: "Cotizar Cisterna 10,000L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar la Cisterna de 10,000 Litros. ¿La tienen disponible?"
    },

    {
      id: "capacidad_200",
      keywords: ["200", "200l", "200 litros", "200lt", "doscientos", "tambo", "tambos", "barril", "barriles", "bombo", "bidon"],
      text: "Fabricamos **Tambos Industriales de 200 Litros** reforzados:",
      bullets: [
        "🪣 **Polietileno Virgen:** Gran resistencia para almacenamiento de agua, químicos ligeros o uso en obra.",
        "🔒 Tapa con cierre hermético y cinturón de seguridad.",
        "🎨 Disponible en colores Azul y Neutro."
      ],
      ctaText: "Cotizar Tambo 200L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar Tambos Industriales de 200L. ¿Tienen disponible?"
    },

    {
      id: "tecnologia_bicapa",
      keywords: ["bicapa", "tricapa", "capa", "capas", "dos capas", "tres capas", "arena", "color arena", "espumado", "espuma", "blanco", "negro", "solar", "filtro uv", "rayos uv", "uv", "sol", "calor", "temperatura", "lama", "algas", "verde", "fotosintesis"],
      text: "Nuestros tinacos cuentan con **Tecnología Bicapa Avanzada** optimizada para el clima cálido de Mazatlán:",
      bullets: [
        "☀️ **Capa Exterior Color Arena con Filtro UV:** A diferencia de tinacos negros tradicionales que absorben calor, su color arena **refleja la radiación solar evitando que el agua se caliente** y previene la degradación por la intemperie.",
        "🛡️ **Capa Interior Blanca Espumada:** Aporta gran rigidez estructural contra la deformación y el pandeo, no altera el olor ni sabor del agua (grado alimenticio) y su tono blanco facilita realizar evaluaciones de limpieza.",
        "🚫 **¿Por qué ya no fabricamos tricapa?:** La combinación Arena UV + Núcleo Blanco Espumado ofrece el mejor equilibrio térmico y estructural sin sobrecostos innecesarios."
      ],
      ctaText: "Cotizar Tinaco Bicapa",
      whatsappMessage: "¡Hola Cytimaz! Quiero cotizar un tinaco Bicapa con tecnología color Arena. ¿Lo tienen disponible?"
    },

    {
      id: "material_calidad",
      keywords: ["material", "polietileno", "virgen", "plastico", "plasticos", "alimenticio", "grado alimenticio", "resina", "calidad", "toxico", "olor", "sabor", "saludable", "bpa", "bacterias", "potable"],
      text: "Todos los productos Cytimaz están fabricados con **Polietileno 100% Virgen Grado Alimenticio**:",
      bullets: [
        "✅ **Cero plásticos reciclados:** No contiene contaminantes ni químicos nocivos (BPA Free).",
        "💧 **Agua 100% Pura:** No altera el olor, color ni sabor del agua almacenada.",
        "🛡️ **Superficie Lisa Antibacteriana:** Evita la adherencia de sarro, hongos y bacterias."
      ],
      ctaText: "Cotizar Productos Grado Alimenticio",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría consultar precios de tinacos grado alimenticio. ¿Tienen disponible?"
    },

    {
      id: "garantia",
      keywords: ["garantia", "garantias", "anos", "durabilidad", "dura", "vida util", "defecto", "falla", "confianza", "respaldo", "rotura", "cuartear"],
      text: "Nuestros productos cuentan con **5 Años de Garantía directa de fábrica**:",
      bullets: [
        "🛡️ **Respaldo Local en Mazatlán:** Al ser fabricantes locales, cualquier validación o garantía se atiende de forma directa e inmediata.",
        "✅ Cobertura total contra defectos de fabricación y porosidad.",
        "⚓ Diseñados para resistir el sol intenso y la brisa marina del puerto."
      ],
      ctaText: "Hablar con un asesor de ventas",
      whatsappMessage: "¡Hola Cytimaz! Quisiera conocer más sobre las garantías de sus productos."
    },

    {
      id: "accesorios_kit",
      keywords: ["accesorio", "accesorios", "kit", "valvula", "flotador", "multiconector", "tapa", "rosca", "capuchon", "venteo", "jarro", "incluye", "regalo", "gratis", "conexiones", "conexion"],
      text: "¡Todos nuestros tinacos y cisternas incluyen **Kit de Accesorios GRATIS**!",
      bullets: [
        "🚰 **Válvula de Llenado:** Alta presión de 3/4\" con reducción a 1/2\".",
        "🎈 **Flotador con Varilla Reforzada:** Cierre hermético de nivel.",
        "🔌 **Multiconector con Válvula de Esfera:** Conexión y purga rápida.",
        "🔒 **Tapa Roscada:** Protección hermética contra polvo e insectos.",
        "💨 **Capuchón de Venteo:** Para jarro de aire y flujo constante sin vacío."
      ],
      ctaText: "Cotizar Tinaco con Kit GRATIS",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar un tinaco con su Kit de Accesorios GRATIS. ¿Lo tienen disponible?"
    },

    {
      id: "cisternas_bala",
      keywords: ["cisterna", "cisternas", "bala", "vertical", "subsuelo", "enterrar", "enterrada", "pasillo", "estrecho", "angosto", "delgada", "esbelta"],
      text: "Nuestra **Cisterna Vertical Tipo Bala de 1,100L** es la solución ideal para ahorrar espacio:",
      bullets: [
        "📐 **Diseño Esbelto:** Apenas 86 cm de diámetro y 1.80 m de altura.",
        "🏠 **Ideal para Pasillos y Patios Angostos:** Se puede instalar en superficie o empotrar fácilmente.",
        "🎨 Colores disponibles: Arena Solar, Azul Profundo y Blanco Neutro.",
        "🧱 También fabricamos cisternas reforzadas de 1,300L, 3,000L, 5,500L y 10,000L."
      ],
      ctaText: "Cotizar Cisterna Bala 1,100L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa la Cisterna Vertical Bala de 1,100 Litros. ¿La tienen disponible?"
    },

    {
      id: "horizontales",
      keywords: ["horizontal", "horizontales", "pipa", "camioneta", "camion", "transporte", "nodriza", "redila", "remolque"],
      text: "Fabricamos **Tanques Horizontales de 600L y 1,100L** para transporte y almacenaje móvil:",
      bullets: [
        "🚚 **Diseño Aerodinámico con Rompeolas:** Perfecto para cajas de camioneta y remolques.",
        "🧱 Puntos de anclaje reforzados para cinchos de sujeción.",
        "🛡️ Polietileno virgen de alta densidad."
      ],
      ctaText: "Cotizar Tanque Horizontal",
      whatsappMessage: "¡Hola Cytimaz! Me interesa cotizar un tanque horizontal para transporte de agua. ¿Lo tienen disponible?"
    },

    {
      id: "ubicacion_horarios",
      keywords: ["ubicacion", "donde estan", "donde queda", "donde se encuentran", "direccion", "planta", "fabrica", "conchi", "bocanegra", "horario", "horarios", "abierto", "abren", "cierran", "sabado", "domingo", "visitar", "pasar a recoger", "recoger", "mapa", "maps", "telefono", "numero", "contacto", "llamar"],
      text: "Nuestra planta de fabricación está ubicada en Mazatlán:",
      bullets: [
        "📍 **Dirección:** Av. Francisco González Bocanegra #8708, Col. El Conchi II, C.P. 82134, Mazatlán, Sinaloa.",
        "⏰ **Horario:** Lunes a Viernes de 8:00 AM a 6:00 PM | Sábados de 8:00 AM a 2:00 PM.",
        "📞 **Teléfono / WhatsApp Directo:** +52 (669) 268-2093."
      ],
      ctaText: "Abrir Ubicación en Google Maps",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría visitar la fábrica o recibir la ubicación para pasar a recoger."
    },

    {
      id: "envios_flete",
      keywords: ["envio", "envios", "entrega", "entregas", "flete", "llevan", "a domicilio", "colonia", "villa union", "concordia", "rosario", "escuinapa", "cobertura", "reparto", "cuanto tardan", "tiempo de entrega", "obra"],
      text: "¡Sí! Somos la **única fábrica de tinacos en Mazatlán**, con entregas rápidas e inmediatas:",
      bullets: [
        "📍 Cobertura en **todo Mazatlán** y zonas conurbadas.",
        "🚚 Entregas a pie de calle / obra y envíos a municipios cercanos (Villa Unión, Concordia, El Rosario, Escuinapa).",
        "⏱️ Stock permanente sin demoras de fletes foráneos."
      ],
      ctaText: "Consultar entrega a mi colonia",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría consultar los tiempos de entrega a mi colonia."
    },

    {
      id: "mayoreo_constructores",
      keywords: ["mayoreo", "mayorista", "constructora", "constructor", "desarrollador", "ferreteria", "plomero", "contratista", "obra", "descuento", "volumen", "lote", "licitacion", "distribuidor"],
      text: "Al ser fabricantes directos, ofrecemos **condiciones y precios especiales de Mayoreo**:",
      bullets: [
        "🏢 Constructoras y desarrolladores inmobiliarios.",
        "🏬 Ferreterías y casas de materiales en Sinaloa.",
        "👨‍🔧 Plomeros, contratistas e instaladores profesionales.",
        "📦 Capacidad de surtido por volumen inmediato."
      ],
      ctaText: "Solicitar lista de precios de Mayoreo",
      whatsappMessage: "¡Hola Cytimaz! Me comunico como contratista/ferretería y me interesa su lista de precios de mayoreo."
    },

    {
      id: "medidas_dimensiones",
      keywords: ["medida", "medidas", "dimension", "dimensiones", "tamano", "diametro", "altura", "alto", "ancho", "peso", "cabe", "espacio", "plano"],
      text: "Contamos con una amplia variedad de dimensiones para adaptarnos a cualquier espacio:",
      bullets: [
        "🏠 **Tinacos Residenciales:** Desde 450L (0.85m diámetro) hasta 1,300L.",
        "🧱 **Cisterna Bala 1,100L:** Ultracompacta de 86 cm de diámetro y 1.80m de altura (ideal pasillos).",
        "📋 Puedes ver las medidas detalladas en la Ficha Técnica de cada producto en el catálogo."
      ],
      ctaText: "Consultar medidas en WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Quisiera consultar las medidas y dimensiones de un producto. ¿Lo tienen disponible?"
    },

    {
      id: "instalacion_limpieza",
      keywords: ["instalacion", "instalar", "mantenimiento", "lavar", "limpieza", "limpiar", "base", "azotea", "bomba", "suelo", "sarro", "desinfectar"],
      text: "Recomendaciones clave de instalación y mantenimiento Cytimaz:",
      bullets: [
        "🧱 **Base de Asiento:** Debe colocarse sobre una superficie 100% plana, lisa y sin salientes que puedan perforar la base.",
        "🧼 **Limpieza Fácil:** Su capa interior blanca ultra lisa facilita la visibilidad del agua y su lavado periódico sin químicos agresivos.",
        "🔒 Mantener siempre la tapa roscada cerrada para evitar contaminación exterior."
      ],
      ctaText: "Preguntar a un asesor",
      whatsappMessage: "¡Hola Cytimaz! Tengo dudas sobre la instalación de un tinaco/cisterna."
    },

    {
      id: "saludo",
      keywords: ["hola", "buen dia", "buenos dias", "buenas tardes", "buenas noches", "que tal", "hey", "tina", "saludos", "como estas"],
      text: "¡Hola! 👋 Mucho gusto. Soy Tina, tu asesora de Cytimaz. ¿Qué capacidad o producto estás buscando hoy? Con gusto te ayudo a cotizar o resolver tus dudas.",
      bullets: [],
      ctaText: "Hablar por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría cotizar tinacos/cisternas. ¿Tienen disponible?"
    },

    {
      id: "agradecimiento",
      keywords: ["gracias", "muchas gracias", "excelente", "perfecto", "ok", "vale", "bueno", "adios", "bye", "hasta luego", "nos vemos"],
      text: "¡Con muchísimo gusto! Quedo a tu disposición para cualquier otra consulta. Si deseas hacer tu pedido con entrega inmediata, haz clic abajo para atenderte por WhatsApp. ¡Que tengas un excelente día! 💧⚓",
      bullets: [],
      ctaText: "Abrir WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría solicitar una cotización."
    }
  ],

  // Respuestas directas asociadas a los botones de opciones rápidas
  responses: {
    recomendar: {
      text: "¡Con gusto! Fabricamos directamente por rotomoldeo en Mazatlán las siguientes capacidades (¡todas incluyen Kit de Accesorios GRATIS!):",
      bullets: [
        "🪣 **Tambos Industriales:** 200 Litros.",
        "🏠 **Tinacos Residenciales:** 450L, 600L, 800L, 1,100L y 1,300 Litros.",
        "🧱 **Cisternas Reforzadas:** 1,100L, 1,100L Bala Vertical, 1,300L, 3,000L, 5,500L y 10,000 Litros.",
        "🚚 **Horizontales:** 600L y 1,100 Litros."
      ],
      ctaText: "Cotizar por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría cotizar tinacos/cisternas. ¿Tienen disponible?"
    },

    tecnologia_tinacos: {
      text: "Nuestros tinacos están fabricados con polietileno 100% virgen grado alimenticio en dos capas sincronizadas por rotomoldeo:",
      bullets: [
        "☀️ **Capa Exterior Color Arena con Filtro UV:** A diferencia de tinacos negros tradicionales que absorben calor, su color arena **refleja la radiación solar evitando que el agua se caliente** y previene la degradación por la intemperie.",
        "🛡️ **Capa Interior Blanca Espumada:** Aporta gran rigidez estructural contra la deformación y el pandeo, no altera el olor ni sabor del agua (grado alimenticio) y su tono blanco facilita realizar evaluaciones de limpieza.",
        "🎁 **Kit de Accesorios GRATIS:** Todos nuestros tinacos incluyen válvula, flotador, multiconector, tapa rosca, capuchón y venteo sin costo adicional.",
        "⭐ **5 Años de Garantía:** Directa de fábrica con respaldo inmediato en Mazatlán."
      ],
      ctaText: "Cotizar Tinaco por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Quiero cotizar un tinaco. ¿Lo tienen disponible?"
    },

    cisterna_bala: {
      text: "Nuestra **Cisterna Vertical Tipo Bala de 1,100L** es ideal para ahorrar espacio:",
      bullets: [
        "📐 **Diseño Esbelto Vertical:** Apenas 86 cm de diámetro y 1.80 m de altura.",
        "🏠 **Ideal para Pasillos y Patios Angostos:** Disponible en colores Arena, Azul y Neutro.",
        "🛡️ **100% Polietileno Virgen:** Fabricada en una sola pieza monolítica de alta resistencia."
      ],
      ctaText: "Cotizar Cisterna Bala 1,100L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa la Cisterna Vertical Bala de 1,100 Litros. ¿La tienen disponible?"
    },

    envios: {
      text: "¡Sí! Somos la **única fábrica de tinacos en Mazatlán**, lo que nos permite ofrecer entregas inmediatas:",
      bullets: [
        "📍 Cobertura en **todo Mazatlán** y zonas conurbadas.",
        "🚚 Entregas a pie de calle / obra y envíos a municipios cercanos (Villa Unión, Concordia, El Rosario, Escuinapa).",
        "⏱️ Stock permanente sin esperas de fletes de fuera."
      ],
      ctaText: "Consultar entrega a mi colonia",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría consultar los tiempos de entrega a mi colonia."
    },

    mayoreo: {
      text: "¡Por supuesto! Al ser la única fábrica local de rotomoldeo, ofrecemos **precios directos de fábrica** para:",
      bullets: [
        "🏢 Constructoras y desarrolladores de vivienda.",
        "🏬 Ferreterías y casas de materiales de Sinaloa.",
        "👨‍🔧 Plomeros, contratistas e instaladores."
      ],
      ctaText: "Solicitar lista de precios de Mayoreo",
      whatsappMessage: "¡Hola Cytimaz! Me comunico como contratista/ferretería y me interesa su lista de precios de mayoreo."
    },

    garantia: {
      text: "Nuestros productos cuentan con garantía respaldada directamente en nuestra planta de Mazatlán:",
      bullets: [
        "🛡️ **Garantía de Fábrica:** 5 Años de garantía por defectos de fabricación.",
        "🎁 **Accesorios GRATIS:** Válvula, flotador, multiconector, tapa rosca, capuchón y venteo incluidos en cada compra.",
        "✅ **100% Polietileno Virgen:** Grado alimenticio certificado sin plásticos reciclados."
      ],
      ctaText: "Hablar con un asesor de ventas",
      whatsappMessage: "¡Hola Cytimaz! Quisiera conocer más sobre las garantías de sus productos."
    },

    ubicacion: {
      text: "Nuestra planta de fabricación está ubicada en Mazatlán:",
      bullets: [
        "📍 **Dirección:** Av. Francisco González Bocanegra #8708, Col. El Conchi II, C.P. 82134, Mazatlán, Sinaloa.",
        "⏰ **Horario:** Lunes a Viernes de 8:00 AM a 6:00 PM | Sábados de 8:00 AM a 2:00 PM.",
        "📞 **Teléfono / WhatsApp:** +52 (669) 268-2093."
      ],
      ctaText: "Abrir Ubicación en Google Maps",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría visitar la fábrica o recibir la ubicación para pasar a recoger."
    },

    whatsapp_directo: {
      text: "¡Perfecto! Te conecto directamente con nuestro equipo de atención a clientes en WhatsApp (+52 669 268-2093) para una cotización inmediata.",
      bullets: [],
      ctaText: "Abrir chat de WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría que un asesor me atienda para cotizar tinacos/cisternas."
    }
  },

  // Respuesta fallback cuando el texto ingresado no coincide con una palabra clave
  fallback: {
    text: "No estoy completamente segura de haber entendido tu consulta, pero te puedo ayudar con cualquier tema sobre nuestros productos:",
    bullets: [
      "💰 **Precios y Cotizaciones:** Venta directa de fábrica con Kit GRATIS.",
      "🏠 **Capacidades:** Tinacos de 450L a 1,300L y Cisternas hasta 10,000L.",
      "🛡️ **Tecnología Bicapa:** Exterior Arena UV + Interior Blanco Espumado.",
      "📍 **Ubicación y Entregas:** Planta en El Conchi II, Mazatlán."
    ],
    ctaText: "Hablar con un Asesor por WhatsApp",
    whatsappMessage: "¡Hola Cytimaz! Tengo una consulta sobre sus tinacos/cisternas y me gustaría que me asesoren."
  }
};

if (typeof window !== "undefined") {
  window.CYTIMAZ_BOT_DATA = CYTIMAZ_BOT_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CYTIMAZ_BOT_DATA;
}
