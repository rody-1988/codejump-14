const hamabuer = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header-nav");
const mask = document.querySelector(".header-mask");

hamabuer.addEventListener("click", function () {
  hamabuer.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  mask.classList.toggle("is-active");
});
mask.addEventListener("click", function () {
  hamabuer.classList.remove("is-active");
  nav.classList.remove("is-active");
  mask.classList.remove("is-active");
});
