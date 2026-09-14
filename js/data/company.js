/**
 * ====================================================================
 * CYTIMAZ - DATOS CENTRALIZADOS DE LA EMPRESA
 * ====================================================================
 * Modifica teléfonos, textos, redes sociales o dirección en este archivo
 * y se actualizarán automáticamente en toda la web.
 */

const CYTIMAZ_COMPANY = {
  // Nombre y lema comercial
  name: "Cytimaz",
  fullName: "Cisternas y Tinacos Mazatlán",
  slogan: "Fabricación por Rotomoldeo con Polietileno 100% Virgen",
  description: "Especialistas en la fabricación y venta directa de tinacos bicapa, tricapa y cisternas industriales en Mazatlán, Sinaloa. Calidad, durabilidad y máxima resistencia al sol del puerto.",

  // Contacto principal (WhatsApp de ventas / atención directa)
  whatsapp: {
    number: "526699297695", // <-- Número directo oficial de atención
    displayNumber: "+52 (669) 929-7695",
    defaultMessage: "¡Hola Cytimaz! Me comunico desde la página web, me gustaría solicitar una cotización.",
    advisorName: "Ventas Cytimaz"
  },

  // Teléfonos de contacto
  phone: {
    direct: "(669) 929-7695",
    plant: "(669) 929-7695"
  },

  // Ubicación física de la fábrica y cobertura
  location: {
    city: "Mazatlán, Sinaloa, México",
    coverage: "Entregas en todo Mazatlán, Villa Unión, Concordia y el sur de Sinaloa",
    address: "Mazatlán, Sinaloa, México",
    googleMapsUrl: "https://maps.google.com/?q=Mazatlan+Sinaloa"
  },

  // Horarios de atención
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    saturdays: "Sábados: 8:00 AM - 2:00 PM",
    sundays: "Domingos: Atención por WhatsApp"
  },

  // Redes sociales
  social: {
    facebook: "https://facebook.com/cytimaz",
    instagram: "https://instagram.com/cytimaz",
    tiktok: "https://tiktok.com/@cytimaz"
  },

  // Beneficios de marca
  highlights: [
    {
      title: "Directo de Fábrica",
      desc: "Mejor precio garantizado sin intermediarios ni costos inflados.",
      icon: "factory"
    },
    {
      title: "Rotomoldeo de Alta Densidad",
      desc: "Una sola pieza sin uniones ni costuras, imposible que se filtre.",
      icon: "shield"
    },
    {
      title: "Protección UV Extrema",
      desc: "Resiste los rayos solares y el calor intenso de Mazatlán sin cuartearse.",
      icon: "sun"
    },
    {
      title: "Polietileno 100% Virgen",
      desc: "Grado alimenticio certificado: agua siempre limpia, sin olor ni sabor plástico.",
      icon: "droplet"
    }
  ]
};

if (typeof window !== "undefined") {
  window.CYTIMAZ_COMPANY = CYTIMAZ_COMPANY;
}
