// ==========================================================
// Cake Coven Services
// Navigation + small UI helpers
// ==========================================================

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
