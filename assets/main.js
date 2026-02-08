const navToggle = document.querySelector(".nav-toggle");
const navDrawer = document.querySelector(".nav-drawer");

if (navToggle && navDrawer) {
  navToggle.addEventListener("click", () => {
    navDrawer.classList.toggle("open");
    navToggle.setAttribute(
      "aria-expanded",
      navDrawer.classList.contains("open")
    );
  });

  navDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navDrawer.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearTarget = document.querySelector("[data-year]");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
document.querySelectorAll(".nav-links a, .nav-drawer a").forEach((link) => {
  const linkPath = link.getAttribute("href");
  if (!linkPath || linkPath.startsWith("http")) return;
  if (currentPath === linkPath || (currentPath.startsWith("/shop/") && linkPath === "/shop/")) {
    link.classList.add("active");
  }
});
