/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: CALCULADORA DE CAPACIDAD PARA EL HOGAR
 * ====================================================================
 * Modelos reales:
 * - Tinacos: 450L, 600L, 800L, 1,100L
 * - Cisternas: 1,100L, 1,100L Bala, 1,300L, 3,000L, 5,500L, 10,000L
 */

function initCalculator() {
  const peopleButtons = document.querySelectorAll(".people-btn");
  const installButtons = document.querySelectorAll(".install-btn");
  const resultTitle = document.getElementById("calc-rec-title");
  const resultLiters = document.getElementById("calc-rec-liters");
  const resultDesc = document.getElementById("calc-rec-desc");
  const resultWaBtn = document.getElementById("calc-rec-wa-btn");

  if (!peopleButtons.length || !resultTitle) return;

  let selectedPeople = "3-4"; // Default
  let selectedType = "techo"; // Default: Tinaco de techo

  // Opciones de personas
  peopleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      peopleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedPeople = btn.getAttribute("data-people");
      calculateRecommendation();
    });
  });

  // Opciones de instalación
  installButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      installButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedType = btn.getAttribute("data-type");
      calculateRecommendation();
    });
  });

  function calculateRecommendation() {
    let title = "";
    let liters = "";
    let desc = "";
    let waProduct = "";

    if (selectedType === "techo") {
      // Tinacos de azotea
      switch (selectedPeople) {
        case "1-2":
          title = "Tinaco Tricapa / Bicapa";
          liters = "450L - 600L";
          desc = "Ideal para departamentos, viviendas de 1 a 2 personas o apoyo para boiler solar.";
          waProduct = "Tinaco de 600 Litros";
          break;
        case "3-4":
          title = "Tinaco Tricapa Mazatlán";
          liters = "800L - 1,100L";
          desc = "Nuestras capacidades más populares. Brindan de 2 a 3 días de autonomía garantizada para familias medianas.";
          waProduct = "Tinaco Tricapa de 1,100 Litros";
          break;
        case "5-6":
          title = "Tinaco Tricapa 1,100L o Batería Doble";
          liters = "1,100 Litros";
          desc = "Recomendamos el tinaco de 1,100L o instalar dos unidades interconectadas para mayor reserva.";
          waProduct = "Tinaco Tricapa de 1,100 Litros";
          break;
        case "7+":
          title = "Tinaco 1,100L + Cisterna en Planta Baja";
          liters = "1,100L + Cisterna";
          desc = "Para familias numerosas o residencias grandes, lo ideal es combinar un tinaco de 1,100L en azotea con una cisterna subterránea.";
          waProduct = "Paquete Tinaco 1,100L y Cisterna";
          break;
      }
    } else {
      // Cisternas
      switch (selectedPeople) {
        case "1-2":
        case "3-4":
          title = "Cisterna Reforzada / Vertical Bala";
          liters = "1,100L - 1,300L";
          desc = "Excelente respaldo en planta baja o pasillos angostos (formato bala vertical).";
          waProduct = "Cisterna de 1,100 Litros (o Bala)";
          break;
        case "5-6":
          title = "Cisterna Residencial Cytimaz";
          liters = "3,000 Litros";
          desc = "Autonomía completa para varios días sin depender del suministro directo de la red pública.";
          waProduct = "Cisterna Residencial de 3,000 Litros";
          break;
        case "7+":
          title = "Cisterna Industrial Cytimaz";
          liters = "5,500L a 10,000L";
          desc = "Capacidad pesada monolítica de alta durabilidad para residencias grandes, negocios o proyectos.";
          waProduct = "Cisterna Industrial de 5,500L o 10,000L";
          break;
      }
    }

    // Actualizar UI
    resultTitle.textContent = title;
    resultLiters.textContent = liters;
    resultDesc.textContent = desc;

    // Actualizar botón de WhatsApp
    const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692516688";
    const waMsg = encodeURIComponent(`¡Hola Cytimaz! Calculé en la web la capacidad para ${selectedPeople} personas (${selectedType}) y me recomendó: *${waProduct}*. ¿Me pueden dar precio con entrega en Mazatlán?`);
    resultWaBtn.href = `https://wa.me/${waNumber}?text=${waMsg}`;
  }

  // Inicializar primer cálculo
  calculateRecommendation();
}

if (typeof window !== "undefined") {
  window.initCalculator = initCalculator;
}
