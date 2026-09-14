/**
 * ====================================================================
 * CYTIMAZ - BASE DE DIÁLOGOS Y PREGUNTAS FRECUENTES DEL ASISTENTE
 * ====================================================================
 * Capacidad real en planta Cytimaz:
 * - Tambo: 200L
 * - Tinacos: 450L, 600L, 800L, 1,100L
 * - Cisternas: 1,100L, 1,100L Bala, 1,300L, 3,000L, 5,500L, 10,000L
 */

const CYTIMAZ_BOT_DATA = {
  mascot: {
    name: "Tinacín",
    title: "Asistente Virtual Cytimaz",
    greeting: "¡Hola! 👋 Soy Tinacín, la mascota y asesor virtual de Cytimaz (Cisternas y Tinacos Mazatlán). ¿En qué te puedo orientar hoy?",
    statusText: "En línea | Respuesta inmediata"
  },

  quickOptions: [
    {
      id: "recomendar",
      label: "💧 ¿Qué capacidades fabrican y cuál necesito?",
      icon: "calculator"
    },
    {
      id: "bicapa_vs_tricapa",
      label: "🛡️ Diferencia entre Bicapa y Tricapa",
      icon: "layers"
    },
    {
      id: "cisterna_bala",
      label: "🧱 Cisterna Vertical Tipo Bala 1,100L",
      icon: "building"
    },
    {
      id: "envios",
      label: "🚚 Envíos y entregas en Mazatlán",
      icon: "truck"
    },
    {
      id: "mayoreo",
      label: "🏗️ Precios de Mayoreo para Obras y Ferreterías",
      icon: "building"
    },
    {
      id: "garantia",
      label: "⭐ Garantía de 30 Años",
      icon: "award"
    },
    {
      id: "whatsapp_directo",
      label: "💬 Hablar por WhatsApp con un Asesor",
      icon: "whatsapp",
      highlight: true
    }
  ],

  responses: {
    recomendar: {
      text: "¡Con gusto! Fabricamos directamente por rotomoldeo las siguientes capacidades exactas:",
      bullets: [
        "🪣 **Tambos Industriales:** 200 Litros.",
        "🏠 **Tinacos (Tricapa y Bicapa):** 450L, 600L, 800L y 1,100 Litros.",
        "🧱 **Cisternas Reforzadas:** 1,100L, 1,100L Bala Vertical, 1,300L, 3,000L, 5,500L y 10,000 Litros."
      ],
      ctaText: "Cotizar por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría cotizar tinacos/cisternas con entrega en Mazatlán."
    },

    bicapa_vs_tricapa: {
      text: "¡Excelente pregunta! Ambos son de polietileno 100% virgen, pero la diferencia está en la protección solar:",
      bullets: [
        "🟠 **Bicapa (2 Capas):** Capa exterior arena + capa interior blanca espumada aislante. Muy durable y accesible.",
        "⭐ **Tricapa (3 Capas):** Incluye una **capa intermedia negra con filtro UV-8** que bloquea la luz del sol al 100%, impidiendo totalmente la fotosíntesis y el nacimiento de lama/algas verdes. Es el más recomendado para el fuerte sol de Mazatlán."
      ],
      ctaText: "Cotizar Tinaco Tricapa",
      whatsappMessage: "¡Hola Cytimaz! Quiero más informes y precios del Tinaco Tricapa con filtro UV."
    },

    cisterna_bala: {
      text: "Nuestra **Cisterna Vertical Tipo Bala de 1,100L** es una solución innovadora:",
      bullets: [
        "📐 **Diseño Esbelto Vertical:** Ocupa mucho menos espacio en suelo (apenas 0.95m de diámetro).",
        "🏠 **Ideal para Pasillos y Cocheras:** Perfecta para casas con poco patio o excavaciones estrechas.",
        "🛡️ **100% Polietileno Virgen:** Fabricada en una sola pieza monolítica de alta resistencia."
      ],
      ctaText: "Cotizar Cisterna Bala 1,100L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa la Cisterna Vertical Bala de 1,100 Litros."
    },

    envios: {
      text: "¡Sí! Realizamos entregas directas desde nuestra planta de fabricación:",
      bullets: [
        "📍 Cobertura en **todo Mazatlán** y zonas conurbadas.",
        "🚚 Entregas a pie de calle / obra y envíos a municipios cercanos (Villa Unión, Concordia, El Rosario, etc.).",
        "⏱️ Tiempos de entrega rápidos gracias a que tenemos stock permanente de fábrica."
      ],
      ctaText: "Consultar entrega a mi colonia",
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
      text: "¡Perfecto! Te conecto directamente con nuestro equipo de atención a clientes en WhatsApp (+52 669 929-7695) para una cotización inmediata.",
      bullets: [],
      ctaText: "Abrir chat de WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría que un asesor me atienda para cotizar tinacos/cisternas."
    }
  }
};

if (typeof window !== "undefined") {
  window.CYTIMAZ_BOT_DATA = CYTIMAZ_BOT_DATA;
}
