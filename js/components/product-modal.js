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

  function openProductModal(productId) {
    const product = window.CYTIMAZ_PRODUCTS?.find(p => p.id === productId);
    if (!product || !modalContentContainer) return;

    const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526691234567";
    const waText = encodeURIComponent(`¡Hola Cytimaz! Me interesa ordenar el modelo: *${product.name}* (Capacidad: ${product.capacity}L). ¿Tienen disponibilidad y entrega en Mazatlán?`);
    const waLink = `https://wa.me/${waNumber}?text=${waText}`;

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

    // Construir lista de beneficios
    let benefitsHtml = "";
    if (product.benefits && product.benefits.length > 0) {
      benefitsHtml = `
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--color-dark); margin-bottom: 8px;">Ventajas Destacadas:</h4>
          <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--color-text-main);">
            ${product.benefits.map(b => `<li style="margin-bottom: 4px;">${b}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    modalContentContainer.innerHTML = `
      <div class="modal-header-info">
        <span class="badge badge-primary">${product.categoryLabel}</span>
        <h2 style="font-size: 1.7rem; font-weight: 900; color: var(--color-dark); margin-top: 6px;">${product.name}</h2>
        <p style="color: var(--color-text-muted); font-size: 0.95rem;">${product.tagline}</p>
      </div>

      <div class="modal-grid">
        <div class="modal-image-preview">
          <img src="${product.image}" alt="${product.name}">
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

      ${layersHtml}
      ${benefitsHtml}

      <div class="modal-footer-actions">
        <button type="button" class="btn btn-outline" id="modal-btn-back">Cerrar</button>
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          💬 Cotizar este Modelo por WhatsApp
        </a>
      </div>
    `;

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
