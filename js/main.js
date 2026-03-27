// ハンバーガーメニュー

const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header-nav");
const mask = document.querySelector(".header-mask");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  mask.classList.toggle("is-active");
});

// どこを押しても消える
mask.addEventListener("click", function () {
  hamburger.classList.remove("is-active");
  nav.classList.remove("is-active");
  mask.classList.remove("is-active");
});

//メニューのリンク押してもきえる
const navLinks = document.querySelectorAll(".header-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
    mask.classList.remove("is-active");
  });
});

// トップに戻る

// id　#to-Topを探す
const toTop = document.querySelector("#to-top");

// スクロールの監視
window.addEventListener("scroll", () => {
  // 700px 以上スクロールしたら、クラスをつける
  if (window.scrollY > 700) {
    toTop.classList.add("is-show");
  } else {
    // 700px 未満ならクラスを外す
    toTop.classList.remove("is-show");
  }
});

toTop.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
