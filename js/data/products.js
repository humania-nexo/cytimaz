/**
 * ====================================================================
 * CYTIMAZ - CATÁLOGO MODULAR DE PRODUCTOS
 * ====================================================================
 * 2 LÍNEAS DE TINACOS:
 * 1. LÍNEA SUPREMA (TRICAPA):
 *    - Capa Exterior: Reflectante solar con filtro UV-8.
 *    - Capa Intermedia: Negra espumada (bloqueo total de luz, neutraliza algas/lama y estructura anti-pandeo).
 *    - Capa Interior: Grado alimenticio con componente antibacterial activo (salud y máxima pureza).
 * 
 * 2. LÍNEA ESENCIAL (BICAPA):
 *    - Capa Exterior: Polietileno virgen reflectante y resistente a la degradación solar.
 *    - Capa Interior: Polietileno virgen grado alimenticio.
 */

const CYTIMAZ_PRODUCTS = [
  // ==========================================
  // LÍNEA SUPREMA (TRICAPA - SALUD Y MÁXIMA CALIDAD)
  // ==========================================
  {
    id: "tinaco-suprema-1100",
    name: "Tinaco Línea Suprema 1,100L",
    shortName: "Suprema 1,100L",
    line: "suprema",
    category: "tinaco-tricapa",
    categoryLabel: "Línea Suprema (Tricapa)",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Línea Suprema ★ Más Vendido",
    tagline: "La opción premium para quien prioriza la salud de su familia, agua fresca y máxima durabilidad.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena / Beige Reflectante",
    colorInterior: "Blanco Antibacterial Grado Alimenticio",
    warranty: "30 años de garantía de fábrica",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Filtro UV-8 Avanzado",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Salud, Pureza y Calidad Premium"
    },
    layers: [
      { name: "Capa 1 Exterior (Reflectante UV-8)", desc: "Polietileno virgen con filtro UV-8 de máxima duración; reflecta los rayos solares y evita la degradación térmica.", color: "#D4B996" },
      { name: "Capa 2 Intermedia (Negra Espumada)", desc: "Barrera negra espumada: bloquea 100% el paso de la luz, neutraliza el crecimiento de algas y lama, y brinda estructura celular anti-pandeo.", color: "#1E293B" },
      { name: "Capa 3 Interior (Antibacterial Activo)", desc: "Polietileno grado alimenticio con aditivo antibacterial activo; cuida la salud y conserva el agua pura e inodora.", color: "#E0F2FE" }
    ],
    specs: {
      "Línea": "Línea Suprema (Tricapa)",
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.10 m aprox.",
      "Altura": "1.40 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca hermética 18\" con venteo",
      "Material": "Polietileno 100% Virgen de Alta Densidad"
    },
    benefits: [
      "Componente antibacterial activo que cuida la salud familiar",
      "Capa intermedia negra espumada anti-pandeo",
      "Cero paso de luz: neutraliza totalmente algas y moho",
      "Filtro UV-8 especial para el calor extremo de Mazatlán"
    ]
  },
  {
    id: "tinaco-suprema-800",
    name: "Tinaco Línea Suprema 800L",
    shortName: "Suprema 800L",
    line: "suprema",
    category: "tinaco-tricapa",
    categoryLabel: "Línea Suprema (Tricapa)",
    capacity: 800,
    peopleRecommended: "3 a 4 personas",
    featured: false,
    badge: "Línea Suprema ★",
    tagline: "Protección total de 3 capas en capacidad intermedia para familias medianas.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Antibacterial",
    warranty: "30 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Filtro UV-8 Avanzado",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Salud, Pureza y Calidad Premium"
    },
    layers: [
      { name: "Capa 1 Exterior", desc: "Reflectante de rayos solares con aditivo UV-8.", color: "#D4B996" },
      { name: "Capa 2 Intermedia", desc: "Negra espumada anti-algas y refuerzo estructural.", color: "#1E293B" },
      { name: "Capa 3 Interior", desc: "Grado alimenticio con componente antibacterial.", color: "#E0F2FE" }
    ],
    specs: {
      "Línea": "Línea Suprema (Tricapa)",
      "Capacidad": "800 Litros",
      "Diámetro": "1.05 m aprox.",
      "Altura": "1.18 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca hermética",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Protección antibacterial activa",
      "Barrera celular negra espumada",
      "Garantía de 30 años"
    ]
  },
  {
    id: "tinaco-suprema-600",
    name: "Tinaco Línea Suprema 600L",
    shortName: "Suprema 600L",
    line: "suprema",
    category: "tinaco-tricapa",
    categoryLabel: "Línea Suprema (Tricapa)",
    capacity: 600,
    peopleRecommended: "2 a 3 personas",
    featured: false,
    badge: "Línea Suprema ★",
    tagline: "Máxima pureza y tecnología tricapa en tamaño compacto para departamentos.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Antibacterial",
    warranty: "30 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Filtro UV-8 Avanzado",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Salud, Pureza y Calidad Premium"
    },
    layers: [
      { name: "Capa 1 Exterior", desc: "Protección solar UV-8.", color: "#D4B996" },
      { name: "Capa 2 Intermedia", desc: "Negra espumada anti-pandeo y anti-lama.", color: "#1E293B" },
      { name: "Capa 3 Interior", desc: "Antibacterial grado alimenticio.", color: "#E0F2FE" }
    ],
    specs: {
      "Línea": "Línea Suprema (Tricapa)",
      "Capacidad": "600 Litros",
      "Diámetro": "0.95 m aprox.",
      "Altura": "1.05 m aprox.",
      "Conexión de salida": '1" / 1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Tamaño ideal para departamentos",
      "Agua 100% limpia y fresca sin algas",
      "Garantía de 30 años"
    ]
  },
  {
    id: "tinaco-suprema-450",
    name: "Tinaco Línea Suprema 450L",
    shortName: "Suprema 450L",
    line: "suprema",
    category: "tinaco-tricapa",
    categoryLabel: "Línea Suprema (Tricapa)",
    capacity: 450,
    peopleRecommended: "1 a 2 personas",
    featured: false,
    badge: "Línea Suprema ★",
    tagline: "El modelo más compacto con la máxima tecnología de 3 capas antibacteriales.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Antibacterial",
    warranty: "30 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Filtro UV-8 Avanzado",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Salud, Pureza y Calidad Premium"
    },
    layers: [
      { name: "Capa Exterior", desc: "Reflectante solar UV-8.", color: "#D4B996" },
      { name: "Capa Intermedia", desc: "Negra espumada anti-algas.", color: "#1E293B" },
      { name: "Capa Interior", desc: "Antibacterial grado alimenticio.", color: "#E0F2FE" }
    ],
    specs: {
      "Línea": "Línea Suprema (Tricapa)",
      "Capacidad": "450 Litros",
      "Diámetro": "0.85 m aprox.",
      "Altura": "0.98 m aprox.",
      "Conexión de salida": '1" NPT',
      "Tipo de Tapa": "Rosca hermética",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Ultra ligero y de fácil subida",
      "Máxima tecnología tricapa",
      "Protección antibacterial"
    ]
  },

  // ==========================================
  // LÍNEA ESENCIAL (BICAPA - ECONÓMICA Y CONFIABLE)
  // ==========================================
  {
    id: "tinaco-esencial-1100",
    name: "Tinaco Línea Esencial 1,100L",
    shortName: "Esencial 1,100L",
    line: "esencial",
    category: "tinaco-bicapa",
    categoryLabel: "Línea Esencial (Bicapa)",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Línea Esencial • Mejor Precio",
    tagline: "La opción confiable, económica y duradera para almacenar agua limpia en casa.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Grado Alimenticio",
    warranty: "15 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Reflectante Solar Estándar",
      antiAlgas: false,
      espumadoAntiDeformacion: false,
      antibacterialActivo: false,
      garantia: "15 Años",
      enfoque: "Económico, Duradero y Confiable"
    },
    layers: [
      { name: "50% Capa Exterior", desc: "Polietileno virgen reflectante resistente a la degradación solar.", color: "#D4B996" },
      { name: "50% Capa Interior", desc: "Polietileno virgen blanco grado alimenticio: agua limpia, sin olor ni sabor plástico.", color: "#FFFFFF" }
    ],
    specs: {
      "Línea": "Línea Esencial (Bicapa)",
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.10 m aprox.",
      "Altura": "1.40 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca 18\"",
      "Material": "Polietileno Rotomoldeado Bicapa 50/50"
    },
    benefits: [
      "100% Polietileno virgen grado alimenticio",
      "Capa exterior reflectante contra el sol",
      "Excelente relación calidad-precio directo de fábrica"
    ]
  },
  {
    id: "tinaco-esencial-800",
    name: "Tinaco Línea Esencial 800L",
    shortName: "Esencial 800L",
    line: "esencial",
    category: "tinaco-bicapa",
    categoryLabel: "Línea Esencial (Bicapa)",
    capacity: 800,
    peopleRecommended: "3 a 4 personas",
    featured: false,
    badge: "Línea Esencial",
    tagline: "Respaldo hídrico eficiente a un precio muy accesible.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Grado Alimenticio",
    warranty: "15 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Reflectante Solar Estándar",
      antiAlgas: false,
      espumadoAntiDeformacion: false,
      antibacterialActivo: false,
      garantia: "15 Años",
      enfoque: "Económico, Duradero y Confiable"
    },
    layers: [
      { name: "50% Exterior", desc: "Polietileno virgen arena reflectante", color: "#D4B996" },
      { name: "50% Interior", desc: "Polietileno virgen blanco grado alimenticio", color: "#FFFFFF" }
    ],
    specs: {
      "Línea": "Línea Esencial (Bicapa)",
      "Capacidad": "800 Litros",
      "Diámetro": "1.05 m aprox.",
      "Altura": "1.18 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Polietileno virgen certificado",
      "Inversión inteligente y económica"
    ]
  },
  {
    id: "tinaco-esencial-600",
    name: "Tinaco Línea Esencial 600L",
    shortName: "Esencial 600L",
    line: "esencial",
    category: "tinaco-bicapa",
    categoryLabel: "Línea Esencial (Bicapa)",
    capacity: 600,
    peopleRecommended: "2 a 3 personas",
    featured: false,
    badge: "Línea Esencial",
    tagline: "Compacto y rendidor para casas pequeñas.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Grado Alimenticio",
    warranty: "15 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Reflectante Solar Estándar",
      antiAlgas: false,
      espumadoAntiDeformacion: false,
      antibacterialActivo: false,
      garantia: "15 Años",
      enfoque: "Económico, Duradero y Confiable"
    },
    layers: [
      { name: "50% Exterior", desc: "Polietileno virgen arena reflectante", color: "#D4B996" },
      { name: "50% Interior", desc: "Polietileno virgen blanco grado alimenticio", color: "#FFFFFF" }
    ],
    specs: {
      "Línea": "Línea Esencial (Bicapa)",
      "Capacidad": "600 Litros",
      "Diámetro": "0.95 m aprox.",
      "Altura": "1.05 m aprox.",
      "Conexión de salida": '1" / 1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Práctico para espacios reducidos",
      "Grado alimenticio garantizado"
    ]
  },
  {
    id: "tinaco-esencial-450",
    name: "Tinaco Línea Esencial 450L",
    shortName: "Esencial 450L",
    line: "esencial",
    category: "tinaco-bicapa",
    categoryLabel: "Línea Esencial (Bicapa)",
    capacity: 450,
    peopleRecommended: "1 a 2 personas",
    featured: false,
    badge: "Línea Esencial",
    tagline: "La opción más compacta y accesible de la fábrica.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Reflectante",
    colorInterior: "Blanco Grado Alimenticio",
    warranty: "15 años de garantía",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Reflectante Solar Estándar",
      antiAlgas: false,
      espumadoAntiDeformacion: false,
      antibacterialActivo: false,
      garantia: "15 Años",
      enfoque: "Económico, Duradero y Confiable"
    },
    layers: [
      { name: "50% Exterior", desc: "Polietileno virgen arena reflectante", color: "#D4B996" },
      { name: "50% Interior", desc: "Polietileno virgen blanco grado alimenticio", color: "#FFFFFF" }
    ],
    specs: {
      "Línea": "Línea Esencial (Bicapa)",
      "Capacidad": "450 Litros",
      "Diámetro": "0.85 m aprox.",
      "Altura": "0.98 m aprox.",
      "Conexión de salida": '1" NPT',
      "Tipo de Tapa": "Rosca hermética",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Máximo ahorro",
      "Polietileno virgen 100%"
    ]
  },

  // ==========================================
  // LÍNEA CISTERNAS REFORZADAS
  // ==========================================
  {
    id: "cisterna-1100",
    name: "Cisterna Rotomoldeada 1,100L",
    shortName: "Cisterna 1,100L",
    line: "cisterna",
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
    featuresMatrix: {
      virgen: true,
      uvReflect: "Cuerpo Industrial Pesado",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Alta Resistencia Hidráulica Subsuelo"
    },
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
    name: "Cisterna Vertical Tipo Bala 1,100L",
    shortName: "Cisterna 1,100L Bala",
    line: "cisterna",
    category: "cisterna",
    categoryLabel: "Cisterna Vertical / Bala",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Formato Vertical Bala ⭐",
    tagline: "Diseño esbelto vertical tipo bala, ideal para pasillos estrechos o excavaciones reducidas.",
    image: "assets/img/modelos/c3000b.png",
    colorExterior: "Azul Industrial / Negro",
    colorInterior: "Sanitario Virgen",
    warranty: "30 años de vida útil",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Cuerpo Vertical Esbelto",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Espacios Angostos y Pasillos"
    },
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
    name: "Cisterna Rotomoldeada 1,300L",
    shortName: "Cisterna 1,300L",
    line: "cisterna",
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
    featuresMatrix: {
      virgen: true,
      uvReflect: "Cuerpo Reforzado",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "30 Años",
      enfoque: "Respaldo Residencial Plus"
    },
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
    name: "Cisterna Rotomoldeada 3,000L",
    shortName: "Cisterna 3,000L",
    line: "cisterna",
    category: "cisterna",
    categoryLabel: "Cisterna Residencial",
    capacity: 3000,
    peopleRecommended: "10 a 14 personas",
    featured: true,
    badge: "Uso Rudo Residencial",
    tagline: "La cisterna preferida por constructores y fraccionamientos en Mazatlán.",
    image: "assets/img/modelos/c3000b.png",
    colorExterior: "Azul Cytimaz",
    colorInterior: "Blanco / Azul Sanitario",
    warranty: "Garantía de por vida contra defectos de fábrica",
    featuresMatrix: {
      virgen: true,
      uvReflect: "Carga Pesada 45 kg PE",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "Por Vida",
      enfoque: "Residencial Pesada & Fraccionamientos"
    },
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
    name: "Cisterna Industrial 5,500L",
    shortName: "Cisterna 5,500L",
    line: "cisterna",
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
    featuresMatrix: {
      virgen: true,
      uvReflect: "Cuádruple Carga 100 kg PE",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "Industrial Cytimaz",
      enfoque: "Industrial, Hoteles y Desarrollos"
    },
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
    name: "Cisterna Mega Industrial 10,000L",
    shortName: "Cisterna 10,000L",
    line: "cisterna",
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
    featuresMatrix: {
      virgen: true,
      uvReflect: "Carga Masiva Ultra Pesada",
      antiAlgas: true,
      espumadoAntiDeformacion: true,
      antibacterialActivo: true,
      garantia: "Industrial Cytimaz",
      enfoque: "Megaproyectos, Agricultura y Plantas"
    },
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
    line: "tambo",
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
    featuresMatrix: {
      virgen: true,
      uvReflect: "Triple Carga 6 kg",
      antiAlgas: false,
      espumadoAntiDeformacion: false,
      antibacterialActivo: false,
      garantia: "10 Años",
      enfoque: "Transporte y Almacenamiento Multiusos"
    },
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

