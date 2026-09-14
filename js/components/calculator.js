/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: CALCULADORA DE CAPACIDAD PARA EL HOGAR
 * ====================================================================
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
          liters = "450L - 750L";
          desc = "Ideal para departamentos o casas de 1 a 2 personas con consumo moderado de agua.";
          waProduct = "Tinaco de 750 Litros";
          break;
        case "3-4":
          title = "Tinaco Tricapa Mazatlán";
          liters = "1,100 Litros";
          desc = "Nuestra capacidad más vendida. Brinda de 2 a 3 días de autonomía garantizada para familias medianas.";
          waProduct = "Tinaco Tricapa de 1,100 Litros";
          break;
        case "5-6":
          title = "Tinaco Tricapa Grande o Doble Sistema";
          liters = "1,100L a 2,500L";
          desc = "Recomendamos un tinaco de 2,500L o 2 tinacos de 1,100L interconectados para evitar desabasto.";
          waProduct = "Tinaco Tricapa de 2,500 Litros";
          break;
        case "7+":
          title = "Tinaco Tricapa 2,500L + Cisterna";
          liters = "2,500L +";
          desc = "Para familias numerosas o residencias grandes, lo ideal es combinar un tinaco de 2,500L con una cisterna en planta baja.";
          waProduct = "Paquete Tinaco 2,500L y Cisterna";
          break;
      }
    } else {
      // Cisternas / Subsuelo
      switch (selectedPeople) {
        case "1-2":
        case "3-4":
          title = "Cisterna Rotomoldeada Reforzada";
          liters = "1,100L a 1,300L";
          desc = "Excelente respaldo en planta baja que alimenta el sistema hidroneumático o bomba.";
          waProduct = "Cisterna de 1,100 Litros";
          break;
        case "5-6":
          title = "Cisterna Residencial Cytimaz";
          liters = "3,000 Litros";
          desc = "Autonomía completa para varios días sin depender del suministro directo de la red pública.";
          waProduct = "Cisterna Residencial de 3,000 Litros";
          break;
        case "7+":
          title = "Cisterna Industrial Cytimaz";
          liters = "3,000L a 5,500L";
          desc = "Capacidad pesada monolítica de alta durabilidad para residencias grandes, negocios o edificios.";
          waProduct = "Cisterna Industrial de 5,500 Litros";
          break;
      }
    }

    // Actualizar UI
    resultTitle.textContent = title;
    resultLiters.textContent = liters;
    resultDesc.textContent = desc;

    // Actualizar botón de WhatsApp
    const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526691234567";
    const waMsg = encodeURIComponent(`¡Hola Cytimaz! Calculé en la web la capacidad para ${selectedPeople} personas (${selectedType}) y me recomendó: *${waProduct}*. ¿Me pueden dar precio con entrega en Mazatlán?`);
    resultWaBtn.href = `https://wa.me/${waNumber}?text=${waMsg}`;
  }

  // Inicializar primer cálculo
  calculateRecommendation();
}

if (typeof window !== "undefined") {
  window.initCalculator = initCalculator;
}
