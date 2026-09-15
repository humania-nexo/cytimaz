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
    name: "Tina",
    title: "Asesora Virtual Cytimaz",
    greeting: "¡Hola! 👋 Soy Tina, tu asesora virtual de Cytimaz (Cisternas y Tinacos Mazatlán). ¿En qué te puedo orientar hoy?",
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
      text: "¡Excelente pregunta! Ambos son de polietileno 100% virgen grado alimenticio, pero con estas funciones de ingeniería:",
      bullets: [
        "⚪ **Línea Esencial (Bicapa - 5 Años de Garantía):** Capa exterior color arena que **refleja los rayos solares** evitando que el agua se caliente (a diferencia de tinacos negros comunes) y resiste la degradación solar. Su **capa interior es blanca espumada grado alimenticio**, lo que aporta gran resistencia estructural contra la deformación, no altera el olor/sabor del agua y facilita la inspección de limpieza por su tono claro.",
        "⭐ **Línea Suprema (Tricapa - 10 Años de Garantía):** Capa exterior clara con **filtro UV-8** que refleja la radiación solar y el calor. Su **capa intermedia negra espumada** bloquea al 100% los rayos UV evitando la fotosíntesis (cero formación de algas o lama) además de reforzar la estructura contra el pandeo. Y su **capa interna blanca lisa antibacterial** previene bacterias y mantiene la máxima inocuidad."
      ],
      ctaText: "Cotizar por WhatsApp",
      whatsappMessage: "¡Hola Cytimaz! Quiero informes y cotización de la Línea Suprema / Línea Esencial."
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

