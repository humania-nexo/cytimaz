/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: HERO CINEMÁTICO & MODO DE INSPECCIÓN
 * ====================================================================
 */

function initHeroInspection() {
  const modeButtons = document.querySelectorAll(".mode-pill");
  const mainImage = document.getElementById("hero-main-tank");
  const hotspotsContainer = document.getElementById("hero-hotspots-container");
  const heroBadge = document.getElementById("hero-dynamic-badge");

  if (!modeButtons.length || !mainImage) return;

  const modes = {
    showcase: {
      image: "assets/img/productos/T1100Estandar/1100Estandar.png",
      badge: "★ Tinaco Línea Suprema 1100L (Tricapa Antibacterial)",
      showHotspots: true
    },
    xray: {
      image: "assets/img/productos/RadiografiaTricapa/RadiografiaTricapa.png",
      badge: "🔬 Radiografía Oficial de 3 Capas Sincronizadas",
      showHotspots: false
    },
    cisterna: {
      image: "assets/img/productos/C3000L/C3000LAzul.png",
      badge: "🏗️ Cisterna Monolítica Reforzada de Subsuelo 3000L",
      showHotspots: false
    }
  };

  modeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedMode = btn.getAttribute("data-mode");
      const config = modes[selectedMode];

      if (config) {
        // Transición suave de imagen
        mainImage.style.opacity = "0";
        mainImage.style.transform = "scale(0.96)";

        setTimeout(() => {
          mainImage.src = config.image;
          if (heroBadge) heroBadge.textContent = config.badge;
          if (hotspotsContainer) {
            hotspotsContainer.style.display = config.showHotspots ? "block" : "none";
          }
          mainImage.style.opacity = "1";
          mainImage.style.transform = "scale(1)";
        }, 180);
      }
    });
  });

  // Hotspots táctiles para móviles
  const hotspotPins = document.querySelectorAll(".hotspot-pin");
  hotspotPins.forEach(pin => {
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = pin.classList.contains("active");
      hotspotPins.forEach(p => p.classList.remove("active"));
      if (!isActive) pin.classList.add("active");
    });
  });

  document.addEventListener("click", () => {
    hotspotPins.forEach(p => p.classList.remove("active"));
  });
}

if (typeof window !== "undefined") {
  window.initHeroInspection = initHeroInspection;
}
