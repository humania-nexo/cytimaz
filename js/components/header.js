/**
 * ====================================================================
 * CYTIMAZ - COMPONENTE JS: HEADER & NAVEGACIÓN
 * ====================================================================
 */

function initHeader() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Efecto de sombra al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Toggle Menú Móvil
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
}

if (typeof window !== "undefined") {
  window.initHeader = initHeader;
}
