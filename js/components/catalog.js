/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: CATÁLOGO DINÁMICO DE PRODUCTOS
 * ====================================================================
 */

function initCatalog() {
  const container = document.getElementById("products-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!container || !window.CYTIMAZ_PRODUCTS) return;

  // Renderizar todos los productos inicialmente
  renderProducts("all");

  // Asignar eventos a los botones de filtro
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProducts(category);
    });
  });

  // Función de renderizado
  function renderProducts(categoryFilter) {
    container.innerHTML = "";

    const filtered = categoryFilter === "all"
      ? window.CYTIMAZ_PRODUCTS
      : window.CYTIMAZ_PRODUCTS.filter(p => p.category === categoryFilter);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      // Determinar clase de badge
      let badgeClass = "badge-primary";
      if (product.badge.toLowerCase().includes("vendido") || product.badge.toLowerCase().includes("calidad")) {
        badgeClass = "badge-gold";
      } else if (product.badge.toLowerCase().includes("económico") || product.badge.toLowerCase().includes("compacto")) {
        badgeClass = "badge-green";
      }

      // Mensaje de WhatsApp pre-llenado
      const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526691234567";
      const waText = encodeURIComponent(`¡Hola Cytimaz! Me interesa cotizar el modelo: *${product.name}* (${product.capacity} Litros).`);
      const waLink = `https://wa.me/${waNumber}?text=${waText}`;

      card.innerHTML = `
        <div class="card-header-visual">
          <span class="badge ${badgeClass} card-badge-top">${product.badge}</span>
          <span class="card-warranty-pill">🛡️ ${product.warranty}</span>
          <img src="${product.image}" alt="${product.name}" class="card-product-img" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-category-label">${product.categoryLabel}</span>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-tagline">${product.tagline}</p>

          <div class="card-quick-specs">
            <div class="spec-mini-item">
              <span class="spec-mini-label">Capacidad</span>
              <span class="spec-mini-val">${product.capacity.toLocaleString()} Litros</span>
            </div>
            <div class="spec-mini-item">
              <span class="spec-mini-label">Recomendado</span>
              <span class="spec-mini-val">${product.peopleRecommended}</span>
            </div>
          </div>

          <div class="card-actions">
            <button type="button" class="btn btn-outline btn-sm btn-view-modal" data-id="${product.id}">
              📋 Ficha Técnica
            </button>
            <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
              💬 Cotizar
            </a>
          </div>
        </div>
      `;

      // Evento para abrir modal de ficha técnica
      const modalBtn = card.querySelector(".btn-view-modal");
      modalBtn.addEventListener("click", () => {
        if (window.openProductModal) {
          window.openProductModal(product.id);
        }
      });

      container.appendChild(card);
    });
  }
}

if (typeof window !== "undefined") {
  window.initCatalog = initCatalog;
}
