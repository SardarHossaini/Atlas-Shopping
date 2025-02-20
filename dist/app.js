const menu = document.getElementById("mobile-menu");
const menuToggle = document.getElementById("menu-toggle");

// toggle menu
menuToggle.addEventListener("click", function () {
  if (menu.classList.contains("max-h-0")) {
    menu.classList.replace("max-h-0", "max-h-40");
  } else {
    menu.classList.replace("max-h-40", "max-h-0");
  }
});

// close menu with mobile nav-links
[...menu.children].forEach((el) =>
  el.addEventListener("click", function () {
    if (menu.classList.contains("max-h-40")) {
      menu.classList.replace("max-h-40", "max-h-0");
    } else {
      menu.classList.replace("max-h-0", "max-h-40");
    }
  })
);

// Initialize swipper.js in home page
if (isHomePage()) {
  new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// Initialize swipper.js in product-details page
if (window.location.pathname.includes("product-details")) {
  const thumbsSwiper = new Swiper(".thumbs-container", {
    slidesPerView: 3,
    spaceBetween: 10,
  });
  new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
}
