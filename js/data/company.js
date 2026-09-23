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
  slogan: "La Única Fábrica de Tinacos y Cisternas en Mazatlán • Polietileno 100% Virgen",
  description: "La única fábrica de tinacos y cisternas por rotomoldeo en Mazatlán, Sinaloa. Venta directa sin intermediarios, máxima calidad, grado alimenticio y resistencia al calor del puerto.",

  // Contacto principal (WhatsApp de ventas / atención directa)
  whatsapp: {
    number: "526692682093", // <-- Teléfono oficial de contacto
    displayNumber: "+52 (669) 268-2093",
    defaultMessage: "¡Hola Cytimaz! Me comunico desde la página web, me gustaría solicitar una cotización.",
    advisorName: "Ventas Cytimaz"
  },

  // Teléfonos de contacto
  phone: {
    direct: "(669) 268-2093",
    plant: "(669) 268-2093"
  },

  // Ubicación física de la fábrica y cobertura
  location: {
    city: "Mazatlán, Sinaloa, México",
    coverage: "Entregas en todo Mazatlán, Villa Unión, Concordia y el sur de Sinaloa",
    address: "Av. Francisco González Bocanegra #8708, Col. El Conchi II, C.P. 82134, Mazatlán, Sinaloa",
    postalCode: "82134",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Francisco+Gonzalez+Bocanegra+8708+El+Conchi+II+Mazatlan+Sinaloa+82134"
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

  // Datos de Webmaster / Soporte Técnico
  webmaster: {
    email: "antropoware@gmail.com",
    whatsapp: "+52 (55) 1375-0569",
    whatsappRaw: "525513750569",
    whatsappUrl: "https://wa.me/525513750569?text=%C2%A1Hola!%20Contacto%20con%20el%20Webmaster%20de%20Cytimaz."
  },

  // Beneficios de marca
  highlights: [
    {
      title: "Única Fábrica en Mazatlán",
      desc: "Fabricación 100% local en Mazatlán: sin fletes costosos, entrega inmediata y garantía directa de fábrica.",
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
