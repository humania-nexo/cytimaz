/**
 * ====================================================================
 * CYTIMAZ - CATÁLOGO MODULAR DE PRODUCTOS (CAPACIDADES REALES DE FÁBRICA)
 * ====================================================================
 * Líneas oficiales de fabricación en planta Cytimaz Mazatlán:
 * - Tambo: 200L
 * - Tinacos (Tricapa y Bicapa): 450L, 600L, 800L, 1,100L
 * - Cisternas: 1,100L, 1,100L Vertical/Bala, 1,300L, 3,000L, 5,500L, 10,000L
 */

const CYTIMAZ_PRODUCTS = [
  // ==========================================
  // LÍNEA TINACOS TRICAPA (MÁXIMA PROTECCIÓN UV8)
  // ==========================================
  {
    id: "tinaco-tricapa-1100",
    name: "Tinaco Tricapa 1,100 Litros",
    shortName: "Tricapa 1,100L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Más Vendido",
    tagline: "El estándar preferido para hogares y familias medianas en Mazatlán.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía de fábrica",
    layers: [
      { name: "Capa 1 (Exterior)", desc: "Polietileno con filtro UV-8 para máxima durabilidad ante el sol de Mazatlán.", color: "#D4B996" },
      { name: "Capa 2 (Intermedia)", desc: "Polietileno Negro fotoprotector: bloquea 100% la luz evitando algas y lama verde.", color: "#1E293B" },
      { name: "Capa 3 (Interior)", desc: "Polietileno Espumado antibacterial grado alimenticio (aislante térmico).", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.10 m aprox.",
      "Altura": "1.40 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca hermética 18\" con venteo",
      "Material": "Polietileno Virgen de Alta Densidad (HDPE)"
    },
    benefits: [
      "No genera bacterias, lama ni olores",
      "Filtro UV grado 8 especial para el calor del puerto",
      "Capa espumada que conserva el agua más fresca",
      "Incluye tapa roscada hermética de alta seguridad"
    ]
  },
  {
    id: "tinaco-tricapa-800",
    name: "Tinaco Tricapa 800 Litros",
    shortName: "Tricapa 800L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 800,
    peopleRecommended: "3 a 4 personas",
    featured: false,
    badge: "Excelente Capacidad",
    tagline: "Capacidad intermedia óptima para familias pequeñas y techos medianos.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía",
    layers: [
      { name: "Capa Exterior", desc: "Polietileno resistente al sol y brisa marina de Mazatlán.", color: "#D4B996" },
      { name: "Capa Intermedia", desc: "Filtro negro anti-fotosíntesis (cero formación de algas).", color: "#1E293B" },
      { name: "Capa Interior", desc: "Blanco antibacterial y aislante térmico celular.", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "800 Litros",
      "Diámetro": "1.05 m aprox.",
      "Altura": "1.18 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca hermética con venteo",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Excelente equilibrio entre volumen y peso en azotea",
      "Triple protección contra el sol",
      "Agua limpia, inodora e incolora"
    ]
  },
  {
    id: "tinaco-tricapa-600",
    name: "Tinaco Tricapa 600 Litros",
    shortName: "Tricapa 600L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 600,
    peopleRecommended: "2 a 3 personas",
    featured: false,
    badge: "Ideal Departamentos",
    tagline: "Diseñado para espacios compactos, departamentos y casas pequeñas.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía",
    layers: [
      { name: "Capa Exterior", desc: "Protección solar UV-8.", color: "#D4B996" },
      { name: "Capa Intermedia", desc: "Barrera negra anti-algas.", color: "#1E293B" },
      { name: "Capa Interior", desc: "Interior liso blanco antibacterial.", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "600 Litros",
      "Diámetro": "0.95 m aprox.",
      "Altura": "1.05 m aprox.",
      "Conexión de salida": '1" / 1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad hermética",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Fácil de maniobrar e instalar",
      "Máxima higiene para casas de 2 a 3 habitantes",
      "Misma tecnología tricapa de los modelos grandes"
    ]
  },
  {
    id: "tinaco-tricapa-450",
    name: "Tinaco Tricapa 450 Litros",
    shortName: "Tricapa 450L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 450,
    peopleRecommended: "1 a 2 personas",
    featured: false,
    badge: "Compacto",
    tagline: "El modelo más compacto, ideal para viviendas individuales o apoyo de boiler solar.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía",
    layers: [
      { name: "Capa Exterior", desc: "Protección solar UV.", color: "#D4B996" },
      { name: "Capa Intermedia", desc: "Filtro negro anti-fotosíntesis.", color: "#1E293B" },
      { name: "Capa Interior", desc: "Blanco espumado grado alimenticio.", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "450 Litros",
      "Diámetro": "0.85 m aprox.",
      "Altura": "0.98 m aprox.",
      "Conexión de salida": '1" NPT',
      "Tipo de Tapa": "Rosca estándar con sello",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Ultra ligero para subir a azoteas sin grúa",
      "Ideal para casas de campo, bodegas o departamentos",
      "Protección tricapa completa"
    ]
  },

  // ==========================================
  // LÍNEA TINACOS BICAPA (50% PE + 50% ESPUMADO)
  // ==========================================
  {
    id: "tinaco-bicapa-1100",
    name: "Tinaco Bicapa 1,100 Litros",
    shortName: "Bicapa 1,100L",
    category: "tinaco-bicapa",
    categoryLabel: "Tinaco Bicapa",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Mejor Precio / Calidad",
    tagline: "La opción más económica y durable para almacenar agua potable en casa.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Claro",
    colorInterior: "Blanco Espumado Aislante",
    warranty: "15 años de garantía",
    layers: [
      { name: "50% Capa Exterior", desc: "Polietileno virgen color arena de alta resistencia con aditivo anti-UV.", color: "#D4B996" },
      { name: "50% Capa Interior", desc: "Polietileno espumado color blanco: rigidez y aislamiento térmico.", color: "#FFFFFF" }
    ],
    specs: {
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.10 m aprox.",
      "Altura": "1.40 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca 18\"",
      "Material": "Polietileno Rotomoldeado Bicapa 50/50"
    },
    benefits: [
      "Excelente costo-beneficio directo de fábrica",
      "Interior blanco que permite ver la claridad del agua",
      "Fácil de lavar e higienizar"
    ]
  },
  {
    id: "tinaco-bicapa-800",
    name: "Tinaco Bicapa 800 Litros",
    shortName: "Bicapa 800L",
    category: "tinaco-bicapa",
    categoryLabel: "Tinaco Bicapa",
    capacity: 800,
    peopleRecommended: "3 a 4 personas",
    featured: false,
    badge: "Económico",
    tagline: "Respaldo confiable y rendidor para familias medianas.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Claro",
    colorInterior: "Blanco Espumado",
    warranty: "15 años de garantía",
    layers: [
      { name: "50% Exterior", desc: "Polietileno Virgen Arena", color: "#D4B996" },
      { name: "50% Interior", desc: "Polietileno Espumado Blanco", color: "#FFFFFF" }
    ],
    specs: {
      "Capacidad": "800 Litros",
      "Diámetro": "1.05 m aprox.",
      "Altura": "1.18 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Estructura robusta bicapa 50/50",
      "Inversión inteligente y duradera"
    ]
  },
  {
    id: "tinaco-bicapa-600",
    name: "Tinaco Bicapa 600 Litros",
    shortName: "Bicapa 600L",
    category: "tinaco-bicapa",
    categoryLabel: "Tinaco Bicapa",
    capacity: 600,
    peopleRecommended: "2 a 3 personas",
    featured: false,
    badge: "Compacto",
    tagline: "Ligero y resistente para azoteas de poco espacio.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Claro",
    colorInterior: "Blanco Espumado",
    warranty: "15 años de garantía",
    layers: [
      { name: "50% Exterior", desc: "Polietileno Virgen Arena", color: "#D4B996" },
      { name: "50% Interior", desc: "Polietileno Espumado Blanco", color: "#FFFFFF" }
    ],
    specs: {
      "Capacidad": "600 Litros",
      "Diámetro": "0.95 m aprox.",
      "Altura": "1.05 m aprox.",
      "Conexión de salida": '1" / 1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Diseño práctico y funcional",
      "Capa espumada para rigidez estructural"
    ]
  },
  {
    id: "tinaco-bicapa-450",
    name: "Tinaco Bicapa 450 Litros",
    shortName: "Bicapa 450L",
    category: "tinaco-bicapa",
    categoryLabel: "Tinaco Bicapa",
    capacity: 450,
    peopleRecommended: "1 a 2 personas",
    featured: false,
    badge: "Práctico",
    tagline: "El más pequeño y económico de la línea bicapa.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Claro",
    colorInterior: "Blanco Espumado",
    warranty: "15 años de garantía",
    layers: [
      { name: "50% Exterior", desc: "Polietileno Virgen Arena", color: "#D4B996" },
      { name: "50% Interior", desc: "Polietileno Espumado Blanco", color: "#FFFFFF" }
    ],
    specs: {
      "Capacidad": "450 Litros",
      "Diámetro": "0.85 m aprox.",
      "Altura": "0.98 m aprox.",
      "Conexión de salida": '1" NPT',
      "Tipo de Tapa": "Rosca hermética",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Ultra compacto",
      "Fácil transportación"
    ]
  },

  // ==========================================
  // LÍNEA CISTERNAS (1100, 1100 BALA, 1300, 3000, 5500, 10000)
  // ==========================================
  {
    id: "cisterna-1100",
    name: "Cisterna Rotomoldeada 1,100 Litros",
    shortName: "Cisterna 1,100L",
    category: "cisterna",
    categoryLabel: "Cisterna Reforzada",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: false,
    badge: "Subsuelo / Superficie",
    tagline: "Cisterna de cuerpo reforzado para enterrar o colocar a nivel de piso.",
    image: "assets/img/modelos/c3000b.png",
    colorExterior: "Azul Industrial",
    colorInterior: "Polietileno Virgen Grado Sanitario",
    warranty: "30 años de vida útil",
    layers: [
      { name: "Estructura Monolítica Reforzada", desc: "100% Polietileno virgen en 2 cargas continuas (18 kg PE) sin soldaduras.", color: "#0284C7" }
    ],
    specs: {
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.12 m aprox.",
      "Altura": "1.35 m aprox.",
      "Resistencia": "Soporta presión de tierra y mantos freáticos",
      "Instalación": "Enterrada o sobre base plana",
      "Material": "Polietileno Virgen de Alto Impacto"
    },
    benefits: [
      "Cero fisuras: no se quiebra como los aljibes de cemento tradicionales",
      "Fácil instalación y mantenimiento mínimo",
      "Paredes lisas que evitan adherencia de sedimentos"
    ]
  },
  {
    id: "cisterna-1100-bala",
    name: "Cisterna Vertical Tipo Bala 1,100 Litros",
    shortName: "Cisterna 1,100L Bala",
    category: "cisterna",
    categoryLabel: "Cisterna Vertical / Bala",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Formato Vertical Bala",
    tagline: "Diseño esbelto vertical tipo bala, ideal para pasillos estrechos o excavaciones reducidas.",
    image: "assets/img/modelos/c3000b.png",
    colorExterior: "Azul Industrial / Negro",
    colorInterior: "Sanitario Virgen",
    warranty: "30 años de vida útil",
    layers: [
      { name: "Cuerpo Vertical Reforzado", desc: "Geometría cilíndrica vertical con hombros reforzados para resistir compactación.", color: "#0369A1" }
    ],
    specs: {
      "Capacidad": "1,100 Litros",
      "Formato": "Vertical / Tipo Bala",
      "Diámetro": "0.95 m aprox.",
      "Altura": "1.75 m aprox.",
      "Aplicación": "Espacios angostos, cocheras o aljibes verticales",
      "Material": "100% Polietileno Virgen"
    },
    benefits: [
      "Aprovecha la altura ocupando mucho menos área de suelo",
      "Fácil excavación y colocación en patios o pasillos",
      "Estructura monolítica indeformable"
    ]
  },
  {
    id: "cisterna-1300",
    name: "Cisterna Rotomoldeada 1,300 Litros",
    shortName: "Cisterna 1,300L",
    category: "cisterna",
    categoryLabel: "Cisterna Reforzada",
    capacity: 1300,
    peopleRecommended: "5 a 6 personas",
    featured: false,
    badge: "Mayor Reserva",
    tagline: "Un plus de capacidad para familias que buscan mayor tranquilidad hídrica.",
    image: "assets/img/modelos/c3000b.png",
    colorExterior: "Azul Industrial",
    colorInterior: "Sanitario Virgen",
    warranty: "30 años de garantía",
    layers: [
      { name: "Doble Carga Reforzada", desc: "Polietileno virgen de pared gruesa (21 kg PE total).", color: "#0284C7" }
    ],
    specs: {
      "Capacidad": "1,300 Litros",
      "Diámetro": "1.18 m aprox.",
      "Altura": "1.45 m aprox.",
      "Instalación": "Subterránea o Superficie",
      "Material": "Polietileno de Alta Resistencia"
    },
    benefits: [
      "200 litros adicionales sobre la cisterna estándar",
      "Ideal para casas con hidroneumático",
      "Paredes lisas antibacteriales"
    ]
  },
  {
    id: "cisterna-3000",
    name: "Cisterna Rotomoldeada 3,000 Litros",
    shortName: "Cisterna 3,000L",
    category: "cisterna",
    categoryLabel: "Cisterna Residencial",
    capacity: 3000,
    peopleRecommended: "10 a 14 personas",
    featured: true,
    badge: "Uso Rudo / Residencial",
    tagline: "La cisterna preferida por constructores y fraccionamientos en Mazatlán.",
    image: "assets/img/modelos/c3000b.png",
    colorExterior: "Azul Cytimaz",
    colorInterior: "Blanco / Azul Sanitario",
    warranty: "Garantía de por vida contra defectos de fábrica",
    layers: [
      { name: "Cuerpo Doble Carga Pesada (45 kg PE)", desc: "Paredes ultra gruesas con venas y hombros de refuerzo geométrico.", color: "#0369A1" }
    ],
    specs: {
      "Capacidad": "3,000 Litros",
      "Diámetro": "1.65 m aprox.",
      "Altura": "1.80 m aprox.",
      "Tipo de tapa": 'Registro hermético con aro de venteo 24"',
      "Aplicación": "Residencial, Hotelería, Albercas y Edificios"
    },
    benefits: [
      "Respaldo de agua para varios días de autonomía",
      "Nervaduras circulares que disipan la carga del subsuelo",
      "Aprobada para sistemas hidroneumáticos y bombas sumergibles"
    ]
  },
  {
    id: "cisterna-5500",
    name: "Cisterna Industrial 5,500 Litros",
    shortName: "Cisterna 5,500L",
    category: "cisterna",
    categoryLabel: "Cisterna Industrial",
    capacity: 5500,
    peopleRecommended: "Proyectos Industriales / Hoteles",
    featured: false,
    badge: "Industrial Pesada",
    tagline: "Máxima capacidad para hoteles, desarrollos inmobiliarios, granjas y naves.",
    image: "assets/img/modelos/c5500a.png",
    colorExterior: "Azul Industrial Pesado",
    colorInterior: "Sanitario Virgen",
    warranty: "Garantía Industrial Cytimaz",
    layers: [
      { name: "Cuádruple Carga de Resina (100 kg HDPE)", desc: "Fabricada en 4 cargas rotomoldeadas de 25 kg cada una para máxima densidad.", color: "#0F3D69" }
    ],
    specs: {
      "Capacidad": "5,500 Litros",
      "Diámetro": "2.00 m aprox.",
      "Altura": "2.20 m aprox.",
      "Peso de material": "100 kg de polietileno virgen",
      "Uso": "Agua potable, purificadoras, obras y hoteles"
    },
    benefits: [
      "Pared estructural de calibre extra grueso",
      "Soporta las condiciones más exigentes de terreno",
      "Ahorro significativo frente a aljibes de concreto"
    ]
  },
  {
    id: "cisterna-10000",
    name: "Cisterna Mega Industrial 10,000 Litros",
    shortName: "Cisterna 10,000L",
    category: "cisterna",
    categoryLabel: "Cisterna Mega Industrial",
    capacity: 10000,
    peopleRecommended: "Grandes Desarrollos y Agricultura",
    featured: false,
    badge: "Mega Capacidad",
    tagline: "Almacenamiento masivo para complejos turísticos, agroindustria y plantas.",
    image: "assets/img/modelos/c10000a.png",
    colorExterior: "Azul Marino Industrial",
    colorInterior: "Blanco Sanitario",
    warranty: "Garantía de Fábrica Cytimaz",
    layers: [
      { name: "Estructura Reforzada de Carga Masiva", desc: "Paredes de alto espesor y nervaduras de contención de volumen masivo.", color: "#0A2540" }
    ],
    specs: {
      "Capacidad": "10,000 Litros",
      "Diámetro": "2.40 m aprox.",
      "Altura": "2.80 m aprox.",
      "Uso": "Agroindustria, Hoteles, Constructoras y Almacenamiento Masivo"
    },
    benefits: [
      "Máximo volumen por metro cuadrado",
      "Alta resistencia química y mecánica",
      "Grado alimenticio y sanitario"
    ]
  },

  // ==========================================
  // LÍNEA CONTENEDORES Y TAMBOS (200L)
  // ==========================================
  {
    id: "tambo-200",
    name: "Tambo Rotomoldeado 200 Litros",
    shortName: "Tambo 200L",
    category: "tambo",
    categoryLabel: "Contenedores / Tambos",
    capacity: 200,
    peopleRecommended: "Uso general / Taller / Obra",
    featured: false,
    badge: "Multiusos",
    tagline: "Tambo multiusos de alta resistencia para almacenamiento y transporte de líquidos.",
    image: "assets/img/modelos/tamboBlanco.png",
    colorExterior: "Blanco / Azul Virgen",
    colorInterior: "Blanco Sanitario",
    warranty: "10 años",
    layers: [
      { name: "Triple Carga Reforzada (6 kg)", desc: "Fabricado con 3 cargas de polietileno virgen (2.5kg + 2.5kg + 1kg de refuerzo de base).", color: "#0284C7" }
    ],
    specs: {
      "Capacidad": "200 Litros (55 Galones)",
      "Diámetro": "0.60 m aprox.",
      "Altura": "0.95 m aprox.",
      "Tipo": "Boca ancha o tapones roscados",
      "Material": "Polietileno de Alta Resistencia"
    },
    benefits: [
      "Base y anillos reforzados para rodar y transportar sin dañarse",
      "No se oxida ni corroe como los tambos metálicos",
      "Excelente para agua potable, talleres, obras y químicos ligeros"
    ]
  }
];

if (typeof window !== "undefined") {
  window.CYTIMAZ_PRODUCTS = CYTIMAZ_PRODUCTS;
}
