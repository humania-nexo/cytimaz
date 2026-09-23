/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: COMPARADOR MATRIZ LADO A LADO
 * ====================================================================
 * Compara claramente las características de Línea Esencial vs Línea Suprema
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
    if (idx === 0) optA.selected = true; // Tinaco Línea Suprema 1,100L por defecto
    selectA.appendChild(optA);

    const optB = document.createElement("option");
    optB.value = p.id;
    optB.textContent = `${p.name} (${p.categoryLabel})`;
    if (idx === 4) optB.selected = true; // Tinaco Línea Esencial 1,100L por defecto
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

    // Resaltar Línea Suprema
    if (prodA.line === "suprema") {
      colA.classList.add("is-suprema");
    } else {
      colA.classList.remove("is-suprema");
    }

    if (prodB.line === "suprema") {
      colB.classList.add("is-suprema");
    } else {
      colB.classList.remove("is-suprema");
    }
  }

  function buildProductColHtml(prod) {
    const waNumber = window.CYTIMAZ_COMPANY?.whatsapp?.number || "526692682093";
    const waText = encodeURIComponent(`¡Hola Cytimaz! Me interesa cotizar el modelo: *${prod.name}* tras revisarlo en el comparador.`);
    const waLink = `https://wa.me/${waNumber}?text=${waText}`;

    const isSuprema = prod.category === "tinacos-suprema";
    const isEsencial = prod.category === "tinacos-esencial";
    const isCisterna = prod.category === "cisternas";

    const badgeClass = isSuprema ? "badge-suprema-gold" : "badge-esencial-blue";
    const lineBadge = prod.categoryLabel;

    // Filas de matriz
    const virgenHtml = `<span class="comp-val-check">✓ 100% Virgen FDA</span>`;
    
    let uvHtml = "";
    if (isSuprema) {
      uvHtml = `<span class="comp-val-suprema-star">⭐ Capa Exterior Clara + Filtro UV-8</span>`;
    } else if (isEsencial) {
      uvHtml = `<span class="comp-val-check">✓ Capa Exterior Arena (Refleja el sol)</span>`;
    } else {
      uvHtml = `<span class="comp-val-check">✓ Carga Pesada UV</span>`;
    }

    let antiAlgasHtml = "";
    if (isSuprema) {
      antiAlgasHtml = `<span class="comp-val-suprema-star">⭐ Núcleo Negro Espumado (Cero Lama)</span>`;
    } else if (isEsencial) {
      antiAlgasHtml = `<span class="comp-val-cross">— Sin capa intermedia negra</span>`;
    } else {
      antiAlgasHtml = `<span class="comp-val-check">✓ Cuerpo Opaco Anti-Fotosíntesis</span>`;
    }

    let antiDeformacionHtml = "";
    if (isSuprema) {
      antiDeformacionHtml = `<span class="comp-val-suprema-star">⭐ Núcleo Espumado + Anillos Anti-Pandeo</span>`;
    } else if (isEsencial) {
      antiDeformacionHtml = `<span class="comp-val-check">✓ Capa Interna Blanca Espumada + Anillos</span>`;
    } else {
      antiDeformacionHtml = `<span class="comp-val-check">✓ Nervaduras y Hombros Reforzados</span>`;
    }

    let antibacterialHtml = "";
    if (isSuprema) {
      antibacterialHtml = `<span class="comp-val-suprema-star">⭐ Blanco Antibacterial Activo (FDA)</span>`;
    } else if (isEsencial) {
      antibacterialHtml = `<span class="comp-val-check">✓ Blanco Espumado Grado Alimenticio</span>`;
    } else {
      antibacterialHtml = `<span class="comp-val-check">✓ Sanitario Grado Alimenticio</span>`;
    }

    const accesoriosHtml = `<span class="comp-val-suprema-star" style="color: #059669; font-weight: 800;">🎁 ¡Kit Completo GRATIS!</span>`;

    const garantiaHtml = isSuprema
      ? `<strong style="color: var(--color-primary-dark); font-size: 0.92rem;">🛡️ 10 Años por Defecto de Fábrica</strong>`
      : (isEsencial ? `<strong style="color: var(--color-dark); font-size: 0.92rem;">🛡️ 5 Años por Defecto de Fábrica</strong>` : `<strong style="color: var(--color-primary-dark); font-size: 0.92rem;">🛡️ Garantía de Fábrica</strong>`);

    const enfoqueHtml = isSuprema
      ? `<span style="color: var(--color-primary-dark); font-weight: 800; font-size: 0.85rem;">🏆 Salud, Pureza y Máxima Calidad</span>`
      : (isEsencial ? `<span style="color: var(--color-text-main); font-weight: 700; font-size: 0.85rem;">💰 Económico, Seguro y Confiable</span>` : `<span style="color: var(--color-text-main); font-weight: 700; font-size: 0.85rem;">🏗️ Máxima Capacidad Hidráulica</span>`);

    return `
      <img src="${prod.image}" alt="${prod.name}" class="comp-product-img">
      <h4 class="comp-product-title">${prod.name}</h4>
      <span class="comp-line-badge ${badgeClass}">${lineBadge}</span>
      
      <div class="comp-val-row"><strong>${prod.capacity > 0 ? prod.capacity.toLocaleString() + ' Litros' : 'Accesorio'}</strong></div>
      <div class="comp-val-row">${virgenHtml}</div>
      <div class="comp-val-row">${uvHtml}</div>
      <div class="comp-val-row">${antiAlgasHtml}</div>
      <div class="comp-val-row">${antiDeformacionHtml}</div>
      <div class="comp-val-row">${antibacterialHtml}</div>
      <div class="comp-val-row">${accesoriosHtml}</div>
      <div class="comp-val-row">${garantiaHtml}</div>
      <div class="comp-val-row">${enfoqueHtml}</div>

      <div style="margin-top: 18px;">
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="width: 100%;">
          💬 Cotizar este Modelo
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
