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
      label: "⭐ Garantías de Fábrica (10 y 5 Años)",
      icon: "award"
    },
    {
      id: "ubicacion",
      label: "📍 Dirección de la Fábrica en Mazatlán",
      icon: "building"
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
      text: "¡Con gusto! Fabricamos directamente por rotomoldeo en Mazatlán las siguientes capacidades (¡todas incluyen Kit de Accesorios GRATIS!):",
      bullets: [
        "🪣 **Tambos Industriales:** 200 Litros.",
        "🏠 **Tinacos (Tricapa y Bicapa):** 450L, 600L, 800L, 1,100L y 1,300 Litros.",
        "🧱 **Cisternas Reforzadas:** 1,100L, 1,100L Bala Vertical, 1,300L, 3,000L, 5,500L y 10,000 Litros.",
        "🚚 **Horizontales:** 600L y 1,100 Litros."
      ],
      ctaText: "Cotizar por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría cotizar tinacos/cisternas con entrega en Mazatlán."
    },

    bicapa_vs_tricapa: {
      text: "¡Excelente pregunta! Ambos son de polietileno 100% virgen grado alimenticio, pero con estas diferencias:",
      bullets: [
        "⚪ **Línea Esencial (Bicapa - 5 Años Garantía):** Exterior virgen con aditivo reflectante + capa interna blanca lisa. Muy económica y durable.",
        "⭐ **Línea Suprema (Tricapa - 10 Años Garantía):** Incluye **capa intermedia negra espumada con filtro UV-8** que bloquea la luz del sol al 100% (cero lama/algas) e interior antibacterial activo. Es la opción ideal para el calor y sol de Mazatlán."
      ],
      ctaText: "Cotizar Línea Suprema",
      whatsappMessage: "¡Hola Cytimaz! Quiero informes y precios de la Línea Suprema Tricapa."
    },

    cisterna_bala: {
      text: "Nuestra **Cisterna Vertical Tipo Bala de 1,100L** es ideal para ahorrar espacio:",
      bullets: [
        "📐 **Diseño Esbelto Vertical:** Apenas 86 cm de diámetro y 1.80 m de altura.",
        "🏠 **Ideal para Pasillos y Patios Angostos:** Disponible en colores Arena, Azul y Neutro.",
        "🛡️ **100% Polietileno Virgen:** Fabricada en una sola pieza monolítica de alta resistencia."
      ],
      ctaText: "Cotizar Cisterna Bala 1,100L",
      whatsappMessage: "¡Hola Cytimaz! Me interesa la Cisterna Vertical Bala de 1,100 Litros."
    },

    envios: {
      text: "¡Sí! Somos la **única fábrica de tinacos en Mazatlán**, lo que nos permite ofrecer entregas inmediatas:",
      bullets: [
        "📍 Cobertura en **todo Mazatlán** y zonas conurbadas.",
        "🚚 Entregas a pie de calle / obra y envíos a municipios cercanos (Villa Unión, Concordia, El Rosario, Escuinapa).",
        "⏱️ Stock permanente sin esperas de fletes de fuera."
      ],
      ctaText: "Consultar entrega a mi colonia",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría saber el tiempo de entrega a mi colonia en Mazatlán."
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
        "⭐ **Línea Suprema (Tricapa):** 10 Años de garantía por defectos de fábrica.",
        "🛡️ **Línea Esencial (Bicapa):** 5 Años de garantía por defectos de fábrica.",
        "🎁 **Accesorios GRATIS:** Válvula, flotador, multiconector, tapa rosca, capuchón y venteo incluidos.",
        "✅ **100% Polietileno Virgen:** Grado alimenticio certificado."
      ],
      ctaText: "Hablar con un asesor de ventas",
      whatsappMessage: "¡Hola Cytimaz! Quisiera conocer más sobre las garantías de sus productos."
    },

    ubicacion: {
      text: "Nuestra planta de fabricación está ubicada en Mazatlán:",
      bullets: [
        "📍 **Dirección:** Av. Francisco González Bocanegra #8708, Col. El Conchi II, C.P. 82134, Mazatlán, Sinaloa.",
        "⏰ **Horario:** Lunes a Viernes de 8:00 AM a 6:00 PM | Sábados de 8:00 AM a 2:00 PM.",
        "📞 **Teléfono / WhatsApp:** +52 (669) 251-6688."
      ],
      ctaText: "Abrir Ubicación en Google Maps",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría visitar la fábrica o recibir la ubicación para pasar a recoger."
    },

    whatsapp_directo: {
      text: "¡Perfecto! Te conecto directamente con nuestro equipo de atención a clientes en WhatsApp (+52 669 251-6688) para una cotización inmediata.",
      bullets: [],
      ctaText: "Abrir chat de WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Me gustaría que un asesor me atienda para cotizar tinacos/cisternas."
    }
  }
};

if (typeof window !== "undefined") {
  window.CYTIMAZ_BOT_DATA = CYTIMAZ_BOT_DATA;
}

