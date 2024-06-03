document.addEventListener("DOMContentLoaded", function () {
  const juicySec = document.querySelector(".juicy");
  const cosySec = document.querySelector(".cosy");
  const navBar = document.querySelector("nav");

  function updateNavColor() {
    const juicyRect = juicySec.getBoundingClientRect();
    const cosyRect = cosySec.getBoundingClientRect();
    const navHeight = navBar.offsetHeight;

    const isJuicyInView =
      juicyRect.top < window.innerHeight && juicyRect.bottom > navHeight;

    const isCosyInView =
      cosyRect.top < window.innerHeight && cosyRect.bottom > navHeight;

    if (isJuicyInView) {
      navBar.classList.add("juicy");
      navBar.classList.remove("cosy");
    } else if (isCosyInView) {
      navBar.classList.add("cosy");
      navBar.classList.remove("juicy");
    } else {
      navBar.classList.remove("juicy");
      navBar.classList.remove("cosy");
    }
  }

  window.addEventListener("scroll", updateNavColor);

  updateNavColor();
});
