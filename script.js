// navbar transition on scroll
document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
});

// open navbar menu on mobile screen
const hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", () => {
  document.body.classList.add("menu-open");
  document.getElementById("nav-menu").style.transform = "translateY(100vh)";
});
// close navbar menu on mobile screen
const closeMenuButton = document.getElementById("close-menu");
closeMenuButton.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
  document.getElementById("nav-menu").style.transform = "translateY(0)";
});
