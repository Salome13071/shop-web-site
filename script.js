document
  .getElementById("burgerButton")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    let menu = document.getElementById("navMenu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  });

document.addEventListener("click", function (event) {
  let menu = document.getElementById("navMenu");
  let isClickInsideMenu = menu.contains(event.target);
  let isClickOnBurgerButton = document
    .getElementById("burgerButton")
    .contains(event.target);
  if (!isClickInsideMenu && !isClickOnBurgerButton) {
    menu.classList.remove("active");
  }
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
