const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header-nav");
const mask = document.querySelector(".header-mask");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  mask.classList.toggle("is-active");
});
mask.addEventListener("click", function () {
  hamburger.classList.remove("is-active");
  nav.classList.remove("is-active");
  mask.classList.remove("is-active");
});

const navLinks = document.querySelectorAll(".header-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
    mask.classList.remove("is-active");
  });
});
