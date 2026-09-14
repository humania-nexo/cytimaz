/**
 * ====================================================================
 * CYTIMAZ - BASE DE DIÁLOGOS Y PREGUNTAS FRECUENTES DEL ASISTENTE
 * ====================================================================
 * La mascota virtual ("Tinacín") usa estos datos para orientar al cliente
 * y derivar la conversación al WhatsApp de la jefa con el mensaje exacto.
 */

const CYTIMAZ_BOT_DATA = {
  mascot: {
    name: "Tinacín",
    title: "Asistente Virtual Cytimaz",
    greeting: "¡Hola! 👋 Soy Tinacín, la mascota y asesor virtual de Cytimaz (Cisternas y Tinacos Mazatlán). ¿En qué te puedo ayudar hoy?",
    statusText: "En línea | Respuesta inmediata"
  },

  // Menú principal de opciones rápidas
  quickOptions: [
    {
      id: "recomendar",
      label: "💧 ¿Qué capacidad necesito para mi casa?",
      icon: "calculator"
    },
    {
      id: "bicapa_vs_tricapa",
      label: "🛡️ Diferencia entre Bicapa y Tricapa",
      icon: "layers"
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
      label: "⭐ Garantía y Calidad",
      icon: "award"
    },
    {
      id: "whatsapp_directo",
      label: "💬 Hablar por WhatsApp con un Asesor",
      icon: "whatsapp",
      highlight: true
    }
  ],

  // Respuestas del bot a cada opción
  responses: {
    recomendar: {
      text: "¡Con gusto te ayudo a calcularlo! La regla básica para un hogar promedio en Mazatlán es de aprox. 200 a 250 litros por persona al día para tener un respaldo seguro:",
      bullets: [
        "**1 a 2 personas:** Tinaco de 450L o 750L.",
        "**3 a 5 personas:** Tinaco de 1,100L (el más recomendado y vendido).",
        "**6 a 9 personas o con cisterna:** 2,500L a 3,000L.",
        "**Negocios / Edificios:** Cisterna Industrial de 3,000L a 5,500L."
      ],
      ctaText: "Cotizar tinaco para mi hogar",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría cotizar un tinaco de 1,100L / recomendarme capacidad para mi casa en Mazatlán."
    },

    bicapa_vs_tricapa: {
      text: "¡Excelente pregunta! Ambos son de polietileno 100% virgen, pero la diferencia está en la protección solar:",
      bullets: [
        "🟠 **Bicapa (2 Capas):** Capa exterior arena + capa interior blanca espumada aislante. Muy durable y económico.",
        "⭐ **Tricapa (3 Capas):** Incluye una **capa intermedia negra con filtro UV** que bloquea la luz del sol al 100%, impidiendo totalmente la fotosíntesis y el nacimiento de lama/algas verdes. Es el más recomendado para el fuerte sol del puerto de Mazatlán."
      ],
      ctaText: "Ver modelos Tricapa en WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Quiero más informes y precios del Tinaco Tricapa con filtro UV."
    },

    envios: {
      text: "¡Sí! Realizamos entregas directas desde nuestra planta de fabricación:",
      bullets: [
        "📍 Cobertura en **todo Mazatlán** y zonas conurbadas.",
        "🚚 Entregas a pie de calle / obra y envíos a municipios cercanos (Villa Unión, Concordia, El Rosario, etc.).",
        "⏱️ Tiempos de entrega rápidos gracias a que tenemos stock permanente de fábrica."
      ],
      ctaText: "Consultar flete a mi colonia",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría saber el costo de flete y tiempo de entrega a mi colonia en Mazatlán."
    },

    mayoreo: {
      text: "¡Por supuesto! Al ser fabricantes directos por rotomoldeo, ofrecemos **precios y condiciones preferenciales** para:",
      bullets: [
        "🏢 Constructoras y desarrolladores de vivienda.",
        "🏬 Ferreterías y casas de materiales.",
        "👨‍🔧 Plomeros, contratistas y purificadoras de agua."
      ],
      ctaText: "Solicitar lista de precios de Mayoreo",
      whatsappMessage: "¡Hola Cytimaz! Me comunico como contratista/ferretería y me interesa su lista de precios de mayoreo."
    },

    garantia: {
      text: "Nuestros productos cuentan con el respaldo de fabricación por rotomoldeo en una sola pieza monolítica:",
      bullets: [
        "🛡️ **Tinacos Tricapa y Cisternas:** Hasta 30 años de garantía de fábrica.",
        "🛡️ **Tinacos Bicapa:** 15 años de garantía.",
        "✅ **100% Polietileno Virgen:** Grado alimenticio, sin materiales reciclados contaminantes."
      ],
      ctaText: "Hablar con un asesor de ventas",
      whatsappMessage: "¡Hola Cytimaz! Quisiera conocer más sobre las garantías y especificaciones de sus productos."
    },

    whatsapp_directo: {
      text: "¡Perfecto! Te conecto directamente con nuestro equipo de atención a clientes en WhatsApp para una cotización inmediata y personalizada.",
      bullets: [],
      ctaText: "Abrir chat de WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría que un asesor me atienda para cotizar tinacos/cisternas."
    }
  }
};

if (typeof window !== "undefined") {
  window.CYTIMAZ_BOT_DATA = CYTIMAZ_BOT_DATA;
}
