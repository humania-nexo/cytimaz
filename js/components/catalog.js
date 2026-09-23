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

      // Estado de color seleccionado para esta tarjeta
      let selectedColor = (product.colors && product.colors.length > 0) ? product.colors[0] : null;

      // Determinar clase de badge
      let badgeClass = "badge-primary";
      if (product.badge.toLowerCase().includes("vendido") || product.badge.toLowerCase().includes("suprema") || product.badge.toLowerCase().includes("premium")) {
        badgeClass = "badge-gold";
      } else if (product.badge.toLowerCase().includes("económico") || product.badge.toLowerCase().includes("compacto") || product.badge.toLowerCase().includes("eficiente")) {
        badgeClass = "badge-green";
      }

      // Función generadora de link de WhatsApp
      const getWaLink = (colorName) => {
        const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692682093";
        let text = `¡Hola Cytimaz! Me interesa cotizar el modelo: *${product.name}*`;
        if (product.capacity > 0) {
          text += ` (${product.capacity} Litros)`;
        }
        if (colorName) {
          text += ` en color *${colorName}*`;
        }
        text += `. ¿Tienen entregas en Mazatlán?`;
        return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
      };

      // HTML del selector de colores si existen variantes
      let colorsHtml = "";
      if (product.colors && product.colors.length > 1) {
        colorsHtml = `
          <div class="card-color-selector">
            <span class="color-selector-label">Color:</span>
            <div class="color-swatches-group">
              ${product.colors.map((c, i) => `
                <button type="button" 
                  class="color-swatch-btn ${i === 0 ? 'active' : ''}" 
                  style="background-color: ${c.hex};" 
                  title="${c.name}"
                  data-img="${c.img}"
                  data-name="${c.name}">
                </button>
              `).join("")}
            </div>
            <span class="color-name-text">${product.colors[0].name}</span>
          </div>
        `;
      }

      // Resumen de capacidad
      const capacityText = product.capacity > 0 ? `${product.capacity.toLocaleString()} Litros` : "Accesorios";
      const includesFreeKit = product.category.includes('tinacos') || product.category === 'cisternas';
      const freeKitHtml = includesFreeKit 
        ? `<div style="display: flex; align-items: center; gap: 6px; font-size: 0.76rem; font-weight: 800; color: #059669; background: #ECFDF5; padding: 4px 10px; border-radius: 9999px; margin-bottom: 10px; border: 1px solid #A7F3D0; width: fit-content;">🎁 ¡Incluye Kit de Accesorios GRATIS!</div>`
        : "";

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

          ${freeKitHtml}
          ${colorsHtml}

          <div class="card-quick-specs">
            <div class="spec-mini-item">
              <span class="spec-mini-label">Capacidad</span>
              <span class="spec-mini-val">${capacityText}</span>
            </div>
            <div class="spec-mini-item">
              <span class="spec-mini-label">Uso / Perfil</span>
              <span class="spec-mini-val">${product.peopleRecommended}</span>
            </div>
          </div>

          <div class="card-actions">
            <button type="button" class="btn btn-outline btn-sm btn-view-modal" data-id="${product.id}">
              📋 Ficha Técnica
            </button>
            <a href="${getWaLink(selectedColor ? selectedColor.name : null)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm card-wa-btn">
              💬 Cotizar
            </a>
          </div>
        </div>
      `;

      // Eventos interactivos de cambio de color
      if (product.colors && product.colors.length > 1) {
        const swatchBtns = card.querySelectorAll(".color-swatch-btn");
        const cardImg = card.querySelector(".card-product-img");
        const colorNameText = card.querySelector(".color-name-text");
        const waBtn = card.querySelector(".card-wa-btn");

        swatchBtns.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            swatchBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const imgSrc = btn.getAttribute("data-img");
            const colName = btn.getAttribute("data-name");

            if (cardImg && imgSrc) cardImg.src = imgSrc;
            if (colorNameText) colorNameText.textContent = colName;
            if (waBtn) waBtn.href = getWaLink(colName);

            selectedColor = product.colors.find(c => c.name === colName) || product.colors[0];
          });
        });
      }

      // Evento para abrir modal de ficha técnica
      const modalBtn = card.querySelector(".btn-view-modal");
      modalBtn.addEventListener("click", () => {
        if (window.openProductModal) {
          window.openProductModal(product.id, selectedColor ? selectedColor.name : null);
        }
      });

      container.appendChild(card);
    });
  }
}

if (typeof window !== "undefined") {
  window.initCatalog = initCatalog;
}

