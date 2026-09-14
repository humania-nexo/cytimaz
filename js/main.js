/**
 * ====================================================================
 * CYTIMAZ - CONTROLADOR PRINCIPAL (BOOTSTRAP)
 * ====================================================================
 * Este archivo inicializa todos los módulos y sincroniza los datos
 * de la empresa en la cabecera, botones de WhatsApp y pie de página.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Cytimaz Web App iniciada correctamente.");

  // 1. Sincronizar información de la empresa
  syncCompanyData();

  // 2. Inicializar componentes
  if (window.initHeader) window.initHeader();
  if (window.initCatalog) window.initCatalog();
  if (window.initProductModal) window.initProductModal();
  if (window.initCalculator) window.initCalculator();
  if (window.initMascotBot) window.initMascotBot();
});

/**
 * Inserta automáticamente los números de teléfono, enlaces de WhatsApp
 * y redes sociales desde `js/data/company.js` a todos los elementos.
 */
function syncCompanyData() {
  const company = window.CYTIMAZ_COMPANY;
  if (!company) return;

  // Teléfonos visibles
  document.querySelectorAll(".company-phone-display").forEach(el => {
    el.textContent = company.whatsapp.displayNumber;
  });

  // Enlaces directos a WhatsApp general
  document.querySelectorAll(".company-whatsapp-link").forEach(el => {
    const waUrl = `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(company.whatsapp.defaultMessage)}`;
    el.href = waUrl;
  });

  // Nombre de la empresa y lema
  document.querySelectorAll(".company-slogan-text").forEach(el => {
    el.textContent = company.slogan;
  });

  // Dirección y horarios
  const addressEl = document.getElementById("footer-address-text");
  if (addressEl) addressEl.textContent = company.location.address;

  const coverageEl = document.getElementById("footer-coverage-text");
  if (coverageEl) coverageEl.textContent = company.location.coverage;

  const scheduleEl = document.getElementById("footer-schedule-text");
  if (scheduleEl) scheduleEl.textContent = `${company.schedule.weekdays} | ${company.schedule.saturdays}`;

  // Redes sociales
  const fbEl = document.getElementById("footer-fb-link");
  if (fbEl) fbEl.href = company.social.facebook;

  const igEl = document.getElementById("footer-ig-link");
  if (igEl) igEl.href = company.social.instagram;

  const ttEl = document.getElementById("footer-tt-link");
  if (ttEl) ttEl.href = company.social.tiktok;

  // Año actual en copyright
  const yearEl = document.getElementById("current-year-text");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
