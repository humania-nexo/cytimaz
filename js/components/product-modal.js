/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: MODAL DE FICHA TÉCNICA
 * ====================================================================
 */

function initProductModal() {
  const modalBackdrop = document.getElementById("product-modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalContentContainer = document.getElementById("modal-dynamic-content");

  if (!modalBackdrop) return;

  // Cerrar modal al pulsar botón de cerrar
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  // Cerrar al hacer clic fuera del diálogo
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeModal();
    }
  });

  function closeModal() {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  function openProductModal(productId, initialColorName = null) {
    const product = window.CYTIMAZ_PRODUCTS?.find(p => p.id === productId);
    if (!product || !modalContentContainer) return;

    // Determinar color seleccionado
    let activeColor = null;
    if (product.colors && product.colors.length > 0) {
      if (initialColorName) {
        activeColor = product.colors.find(c => c.name === initialColorName) || product.colors[0];
      } else {
        activeColor = product.colors[0];
      }
    }

    const currentImg = activeColor ? activeColor.img : product.image;

    const getWaLink = (colorName) => {
      const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692516688";
      let text = `¡Hola Cytimaz! Me interesa ordenar el modelo: *${product.name}*`;
      if (product.capacity > 0) {
        text += ` (Capacidad: ${product.capacity}L)`;
      }
      if (colorName) {
        text += ` en color *${colorName}*`;
      }
      text += `. ¿Tienen disponibilidad y entrega en Mazatlán?`;
      return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    };

    // Construir tabla de especificaciones
    let specsHtml = "";
    if (product.specs) {
      for (const [key, value] of Object.entries(product.specs)) {
        specsHtml += `
          <tr>
            <td>${key}</td>
            <td>${value}</td>
          </tr>
        `;
      }
    }

    // Selector de colores en el modal
    let modalColorSelectorHtml = "";
    if (product.colors && product.colors.length > 1) {
      modalColorSelectorHtml = `
        <div class="modal-color-selector">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted);">Colores:</span>
          <div class="modal-color-swatches">
            ${product.colors.map(c => `
              <button type="button" 
                class="modal-color-swatch-btn ${c.name === (activeColor ? activeColor.name : '') ? 'active' : ''}" 
                style="background-color: ${c.hex};" 
                title="${c.name}"
                data-img="${c.img}"
                data-name="${c.name}">
              </button>
            `).join("")}
          </div>
          <span class="modal-color-selected-text" style="font-size: 0.82rem; font-weight: 800; color: var(--color-dark); margin-left: auto;">
            ${activeColor ? activeColor.name : ''}
          </span>
        </div>
      `;
    }

    // Construir desglose de capas
    let layersHtml = "";
    if (product.layers && product.layers.length > 0) {
      layersHtml = `
        <div class="modal-layers-box">
          <h4 class="modal-layers-title">🔬 Radiografía de Capas y Materiales</h4>
          ${product.layers.map(l => `
            <div class="modal-layer-row">
              <span class="modal-layer-dot" style="background-color: ${l.color}; border: 1px solid #94A3B8;"></span>
              <div>
                <strong>${l.name}:</strong> ${l.desc}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // Radiografía visual si aplica
    let xrayVisualHtml = "";
    if (product.category === "tinacos-suprema") {
      xrayVisualHtml = `
        <div class="modal-xray-box">
          <div style="font-size: 0.78rem; font-weight: 800; color: var(--color-electric-cyan); text-transform: uppercase; letter-spacing: 0.5px;">
            Inspección Estructural Oficial
          </div>
          <h4 style="font-size: 1rem; font-weight: 800; margin: 4px 0 8px 0;">Radiografía Línea Suprema (Tricapa)</h4>
          <img src="assets/img/productos/RadiografiaTricapa/RadiografiaTricapa.png" alt="Radiografía Tricapa Cytimaz" class="modal-xray-img">
        </div>
      `;
    } else if (product.category === "tinacos-esencial") {
      xrayVisualHtml = `
        <div class="modal-xray-box">
          <div style="font-size: 0.78rem; font-weight: 800; color: var(--color-electric-cyan); text-transform: uppercase; letter-spacing: 0.5px;">
            Inspección Estructural Oficial
          </div>
          <h4 style="font-size: 1rem; font-weight: 800; margin: 4px 0 8px 0;">Radiografía Línea Esencial (Bicapa)</h4>
          <img src="assets/img/productos/RadiografiaTricapa/RadiografiaBicapa.png" alt="Radiografía Bicapa Cytimaz" class="modal-xray-img">
        </div>
      `;
    }

    // Construir lista de beneficios
    let benefitsHtml = "";
    if (product.benefits && product.benefits.length > 0) {
      benefitsHtml = `
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--color-dark); margin-bottom: 8px;">Ventajas Destacadas de Fábrica:</h4>
          <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--color-text-main);">
            ${product.benefits.map(b => `<li style="margin-bottom: 4px;">${b}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    modalContentContainer.innerHTML = `
      <div class="modal-header-info">
        <span class="badge badge-primary">${product.categoryLabel}</span>
        <h2 style="font-size: 1.6rem; font-weight: 900; color: var(--color-dark); margin-top: 6px;">${product.name}</h2>
        <p style="color: var(--color-text-muted); font-size: 0.92rem;">${product.tagline}</p>
      </div>

      <div class="modal-grid">
        <div>
          <div class="modal-image-preview">
            <img src="${currentImg}" alt="${product.name}" id="modal-main-product-img">
          </div>
          ${modalColorSelectorHtml}
        </div>
        <div>
          <table class="specs-table">
            <tbody>
              ${specsHtml}
            </tbody>
          </table>
          <p style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 12px;">
            🛡️ ${product.warranty}
          </p>
        </div>
      </div>

      ${xrayVisualHtml}
      ${layersHtml}
      ${benefitsHtml}

      <div class="modal-footer-actions">
        <button type="button" class="btn btn-outline" id="modal-btn-back">Cerrar</button>
        <a href="${getWaLink(activeColor ? activeColor.name : null)}" target="_blank" rel="noopener" class="btn btn-whatsapp" id="modal-wa-submit-link">
          💬 Cotizar este Modelo por WhatsApp
        </a>
      </div>
    `;

    // Asignar interactividad a los botones de color dentro del modal
    if (product.colors && product.colors.length > 1) {
      const modalSwatchBtns = modalContentContainer.querySelectorAll(".modal-color-swatch-btn");
      const modalImg = modalContentContainer.querySelector("#modal-main-product-img");
      const modalColorText = modalContentContainer.querySelector(".modal-color-selected-text");
      const modalWaLink = modalContentContainer.querySelector("#modal-wa-submit-link");

      modalSwatchBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          modalSwatchBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          const imgSrc = btn.getAttribute("data-img");
          const colName = btn.getAttribute("data-name");

          if (modalImg && imgSrc) modalImg.src = imgSrc;
          if (modalColorText) modalColorText.textContent = colName;
          if (modalWaLink) modalWaLink.href = getWaLink(colName);
        });
      });
    }

    document.getElementById("modal-btn-back")?.addEventListener("click", closeModal);

    modalBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Exponer función para que catalog.js pueda llamarla
  window.openProductModal = openProductModal;
}

if (typeof window !== "undefined") {
  window.initProductModal = initProductModal;
}

