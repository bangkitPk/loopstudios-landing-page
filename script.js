const hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", () => {
  document.body.classList.add("menu-open");
  document.getElementById("nav-menu").style.transform = "translateY(100vh)";
});

const closeMenuButton = document.getElementById("close-menu");
closeMenuButton.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
  document.getElementById("nav-menu").style.transform = "translateY(0)";
});
