/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: COMPARADOR LADO A LADO
 * ====================================================================
 */

function initComparator() {
  const selectA = document.getElementById("comp-select-a");
  const selectB = document.getElementById("comp-select-b");
  const colA = document.getElementById("comp-col-a");
  const colB = document.getElementById("comp-col-b");

  if (!selectA || !selectB || !window.CYTIMAZ_PRODUCTS) return;

  const products = window.CYTIMAZ_PRODUCTS;

  // Llenar selects
  selectA.innerHTML = "";
  selectB.innerHTML = "";

  products.forEach((p, idx) => {
    const optA = document.createElement("option");
    optA.value = p.id;
    optA.textContent = `${p.name} (${p.categoryLabel})`;
    if (idx === 0) optA.selected = true; // Tinaco Tricapa 1100L por defecto
    selectA.appendChild(optA);

    const optB = document.createElement("option");
    optB.value = p.id;
    optB.textContent = `${p.name} (${p.categoryLabel})`;
    if (idx === 4) optB.selected = true; // Tinaco Bicapa 1100L por defecto
    selectB.appendChild(optB);
  });

  // Eventos de cambio
  selectA.addEventListener("change", renderComparison);
  selectB.addEventListener("change", renderComparison);

  function renderComparison() {
    const prodA = products.find(p => p.id === selectA.value) || products[0];
    const prodB = products.find(p => p.id === selectB.value) || products[1];

    colA.innerHTML = buildProductColHtml(prodA);
    colB.innerHTML = buildProductColHtml(prodB);
  }

  function buildProductColHtml(prod) {
    const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526699297695";
    const waText = encodeURIComponent(`¡Hola Cytimaz! Me interesa cotizar el modelo: *${prod.name}* después de compararlo en la web.`);
    const waLink = `https://wa.me/${waNumber}?text=${waText}`;

    const layerCount = prod.layers ? `${prod.layers.length} Capas (${prod.categoryLabel})` : "Monolítica";
    const uvRating = prod.category === "tinaco-tricapa" ? "⭐⭐⭐⭐⭐ (Filtro UV8 Negro)" : (prod.category === "tinaco-bicapa" ? "⭐⭐⭐⭐ (Protección Solar)" : "⭐⭐⭐⭐⭐ (Subsuelo / Pesada)");

    return `
      <img src="${prod.image}" alt="${prod.name}" class="comp-product-img">
      <h4 class="comp-product-title">${prod.name}</h4>
      <div class="comp-val-row"><strong>${prod.capacity.toLocaleString()} Litros</strong></div>
      <div class="comp-val-row">${prod.peopleRecommended}</div>
      <div class="comp-val-row">${layerCount}</div>
      <div class="comp-val-row">${uvRating}</div>
      <div class="comp-val-row">🛡️ ${prod.warranty}</div>
      <div style="margin-top: 16px;">
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="width: 100%;">
          💬 Cotizar Este
        </a>
      </div>
    `;
  }

  // Render inicial
  renderComparison();
}

if (typeof window !== "undefined") {
  window.initComparator = initComparator;
}
