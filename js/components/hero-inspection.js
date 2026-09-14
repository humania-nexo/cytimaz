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
      image: "assets/img/modelos/t1100b.png",
      badge: "★ Vista Exterior de Alta Definición",
      showHotspots: true
    },
    xray: {
      image: "assets/img/modelos/tinaco_tricapa_generic.svg",
      badge: "🔬 Radiografía de 3 Capas Sincronizadas",
      showHotspots: false
    },
    cisterna: {
      image: "assets/img/modelos/c3000b.png",
      badge: "🏗️ Cisterna Monolítica de Subsuelo",
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
