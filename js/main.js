/**
 * ====================================================================
 * CYTIMAZ - CONTROLADOR PRINCIPAL (BOOTSTRAP)
 * ====================================================================
 * Inicializa todos los módulos, hotspots e inspección técnica.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Cytimaz Avant-Garde Web App iniciada.");

  // 1. Sincronizar información de contacto
  syncCompanyData();

  // 2. Inicializar componentes
  if (window.initHeader) window.initHeader();
  if (window.initHeroInspection) window.initHeroInspection();
  if (window.initCatalog) window.initCatalog();
  if (window.initProductModal) window.initProductModal();
  if (window.initCalculator) window.initCalculator();
  if (window.initComparator) window.initComparator();
  if (window.initMascotBot) window.initMascotBot();
});

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

  // Slogan
  document.querySelectorAll(".company-slogan-text").forEach(el => {
    el.textContent = company.slogan;
  });

  // Dirección y cobertura
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

  // Año actual
  const yearEl = document.getElementById("current-year-text");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
