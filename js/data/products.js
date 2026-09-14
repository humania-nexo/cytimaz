/**
 * ====================================================================
 * CYTIMAZ - CATÁLOGO MODULAR DE PRODUCTOS
 * ====================================================================
 * Para agregar un nuevo producto, modificar capacidades o actualizar
 * características, solo edita este archivo.
 */

const CYTIMAZ_PRODUCTS = [
  // ==========================================
  // LÍNEA TINACOS TRICAPA (MÁXIMA PROTECCIÓN UV)
  // ==========================================
  {
    id: "tinaco-tricapa-1100",
    name: "Tinaco Tricapa 1,100 Litros",
    shortName: "Tricapa 1100L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Más Vendido",
    tagline: "El tinaco estándar para familias medianas en Mazatlán.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía de fábrica",
    layers: [
      { name: "Capa 1 (Exterior)", desc: "Polietileno con filtro UV y acabado liso para máxima durabilidad solar.", color: "#D4B996" },
      { name: "Capa 2 (Intermedia)", desc: "Polietileno Negro de alta opacidad: bloquea 100% la luz solar evitando fotosíntesis y algas.", color: "#1E293B" },
      { name: "Capa 3 (Interior)", desc: "Polietileno Espumado antibacterial grado alimenticio, aislante térmico que mantiene el agua fresca.", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.10 m aprox.",
      "Altura": "1.40 m aprox.",
      "Conexión de salida": '1½" y 1" NPT',
      "Tipo de Tapa": "Rosca hermética 18\" con venteo",
      "Material": "Polietileno Virgen de Alta Densidad (HDPE)"
    },
    benefits: [
      "No genera bacterias, lama ni olores",
      "Filtro UV grado 8 especial para el calor de Mazatlán",
      "Capa espumada que amortigua la temperatura del agua",
      "Incluye tapa hermética roscada de alta seguridad"
    ]
  },
  {
    id: "tinaco-tricapa-750",
    name: "Tinaco Tricapa 750 Litros",
    shortName: "Tricapa 750L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 750,
    peopleRecommended: "2 a 3 personas",
    featured: false,
    badge: "Ideal Departamentos",
    tagline: "Excelente para espacios reducidos, techos pequeños o departamentos.",
    image: "assets/img/modelos/tinaco_tricapa_generic.svg",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía",
    layers: [
      { name: "Capa 1 (Exterior)", desc: "Polietileno resistente a intemperie y salinidad del puerto.", color: "#D4B996" },
      { name: "Capa 2 (Intermedia)", desc: "Filtro negro anti-algas (bloqueo solar completo).", color: "#1E293B" },
      { name: "Capa 3 (Interior)", desc: "Blanco antibacterial y aislante espumado.", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "750 Litros",
      "Diámetro": "1.02 m aprox.",
      "Altura": "1.10 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca hermética con filtro de aire",
      "Material": "Polietileno 100% Virgen"
    },
    benefits: [
      "Tamaño compacto y fácil maniobrabilidad",
      "Triple protección contra el sol",
      "Agua limpia y sin proliferación biológica"
    ]
  },
  {
    id: "tinaco-tricapa-2500",
    name: "Tinaco Tricapa 2,500 Litros",
    shortName: "Tricapa 2500L",
    category: "tinaco-tricapa",
    categoryLabel: "Tinaco Tricapa",
    capacity: 2500,
    peopleRecommended: "8 a 10 personas",
    featured: false,
    badge: "Gran Capacidad",
    tagline: "Para residencias grandes, negocios, restaurantes o condominios.",
    image: "assets/img/modelos/tinaco_tricapa_generic.svg",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía",
    layers: [
      { name: "Capa Exterior", desc: "Resina con máxima carga de aditivos UV.", color: "#D4B996" },
      { name: "Capa Intermedia", desc: "Barrera negra fotoprotectora contra algas verdes.", color: "#1E293B" },
      { name: "Capa Interior", desc: "Capa lisa blanca espumada antibacterial.", color: "#E0F2FE" }
    ],
    specs: {
      "Capacidad": "2,500 Litros",
      "Diámetro": "1.55 m aprox.",
      "Altura": "1.65 m aprox.",
      "Conexión de salida": '2" y 1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "HDPE Rotomoldeado reforzado"
    },
    benefits: [
      "Reserva hídrica masiva para contingencias y sequías",
      "Estructura reforzada con cinturones de resistencia",
      "Apto para agua potable y uso comercial"
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
    tagline: "El modelo más compacto para viviendas individuales o apoyo de boiler.",
    image: "assets/img/modelos/tinaco_tricapa_generic.svg",
    colorExterior: "Arena / Beige Claro",
    colorInterior: "Blanco Espumado Antibacterial",
    warranty: "30 años de garantía",
    layers: [
      { name: "Capa 1 (Exterior)", desc: "Protección solar UV.", color: "#D4B996" },
      { name: "Capa 2 (Intermedia)", desc: "Filtro negro anti-fotosíntesis.", color: "#1E293B" },
      { name: "Capa 3 (Interior)", desc: "Interior liso espumado antibacterial.", color: "#E0F2FE" }
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
      "Ideal para casas de campo o bodegas",
      "Misma tecnología tricapa de los modelos grandes"
    ]
  },

  // ==========================================
  // LÍNEA TINACOS BICAPA (50% PE + 50% ESPUMADO)
  // ==========================================
  {
    id: "tinaco-bicapa-1100",
    name: "Tinaco Bicapa 1,100 Litros",
    shortName: "Bicapa 1100L",
    category: "tinaco-bicapa",
    categoryLabel: "Tinaco Bicapa",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: true,
    badge: "Mejor Precio",
    tagline: "La opción más económica y durable para almacenar agua potable en casa.",
    image: "assets/img/modelos/t1100b.png",
    colorExterior: "Arena Claro",
    colorInterior: "Blanco Espumado Aislante",
    warranty: "15 años de garantía",
    layers: [
      { name: "50% Capa Exterior", desc: "Polietileno de alta resistencia mecánica color arena con aditivo anti-UV.", color: "#D4B996" },
      { name: "50% Capa Interior", desc: "Polietileno espumado color blanco: brinda rigidez estructural y aislamiento térmico.", color: "#FFFFFF" }
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
    id: "tinaco-bicapa-750",
    name: "Tinaco Bicapa 750 Litros",
    shortName: "Bicapa 750L",
    category: "tinaco-bicapa",
    categoryLabel: "Tinaco Bicapa",
    capacity: 750,
    peopleRecommended: "2 a 3 personas",
    featured: false,
    badge: "Económico",
    tagline: "Ligero, resistente y perfecto para casas pequeñas.",
    image: "assets/img/modelos/tinaco_bicapa_generic.svg",
    colorExterior: "Arena Claro",
    colorInterior: "Blanco Espumado",
    warranty: "15 años de garantía",
    layers: [
      { name: "Capa Exterior", desc: "Polietileno Virgen Arena 50%", color: "#D4B996" },
      { name: "Capa Interior", desc: "Polietileno Espumado Blanco 50%", color: "#FFFFFF" }
    ],
    specs: {
      "Capacidad": "750 Litros",
      "Diámetro": "1.02 m aprox.",
      "Altura": "1.10 m aprox.",
      "Conexión de salida": '1½" NPT',
      "Tipo de Tapa": "Rosca de seguridad",
      "Material": "HDPE Virgen Bicapa"
    },
    benefits: [
      "Estructura robusta bicapa",
      "Inversión inteligente y duradera"
    ]
  },

  // ==========================================
  // LÍNEA CISTERNAS (SUBSUELO Y SUPERFICIE)
  // ==========================================
  {
    id: "cisterna-1100",
    name: "Cisterna Rotomoldeada 1,100 Litros",
    shortName: "Cisterna 1100L",
    category: "cisterna",
    categoryLabel: "Cisterna Reforzada",
    capacity: 1100,
    peopleRecommended: "4 a 5 personas",
    featured: false,
    badge: "Subsuelo / Superficie",
    tagline: "Cisterna de cuerpo reforzado para enterrar o colocar a nivel de piso.",
    image: "assets/img/modelos/cisterna_generic.svg",
    colorExterior: "Azul Industrial",
    colorInterior: "Polietileno Virgen Grado Sanitario",
    warranty: "30 años de vida útil",
    layers: [
      { name: "Estructura Monolítica Reforzada", desc: "100% Polietileno virgen de pared gruesa en múltiples cargas continuas sin soldaduras.", color: "#0284C7" }
    ],
    specs: {
      "Capacidad": "1,100 Litros",
      "Diámetro": "1.12 m",
      "Altura": "1.35 m",
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
    id: "cisterna-3000",
    name: "Cisterna Rotomoldeada 3,000 Litros",
    shortName: "Cisterna 3000L",
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
      { name: "Cuerpo Doble Carga Pesada", desc: "Paredes ultra gruesas con venas y hombros de refuerzo geométrico.", color: "#0369A1" }
    ],
    specs: {
      "Capacidad": "3,000 Litros",
      "Diámetro": "1.65 m",
      "Altura": "1.80 m",
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
    shortName: "Cisterna 5500L",
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
      { name: "Cuádruple Carga de Resina (100 kg HDPE)", desc: "Fabricada en 4 cargas rotomoldeadas de 25 kg cada una para máxima densidad y resistencia.", color: "#0F3D69" }
    ],
    specs: {
      "Capacidad": "5,500 Litros",
      "Diámetro": "2.00 m aprox.",
      "Altura": "2.20 m aprox.",
      "Peso de material": "100 kg de polietileno virgen",
      "Uso": "Agua potable, químicos ligeros, purificadoras y hoteles"
    },
    benefits: [
      "Pared estructural de calibre extra grueso",
      "Soporta las condiciones más exigentes de terreno",
      "Ahorro significativo frente a construcción de aljibes de concreto"
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
      { name: "Estructura Reforzada de Carga Masiva", desc: "Paredes de alto espesor y nervaduras reforzadas para máxima contención de volumen.", color: "#0A2540" }
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
  // LÍNEA CONTENEDORES Y TAMBOS
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
      { name: "Triple Carga Reforzada", desc: "Fabricado con 3 cargas de polietileno virgen (6 kg de material total).", color: "#0284C7" }
    ],
    specs: {
      "Capacidad": "200 Litros (55 Galones)",
      "Diámetro": "0.60 m",
      "Altura": "0.95 m",
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
