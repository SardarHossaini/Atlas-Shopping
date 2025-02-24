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
  el.addEventListener("click", () => {
    menu.classList.replace("max-h-40", "max-h-0");
  })
);

function isHomePage() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path === "" || path === "/";
}

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

// Handle accordion behavior in FAQ page
if (window.location.pathname.includes("faq")) {
  function toggleFaq(id) {
    const faq = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const isOpen = !faq.classList.contains("max-h-0");
    document
      .querySelectorAll('[id^="faq-"]')
      .forEach((item) => item.classList.replace("max-h-36", "max-h-0"));
    document
      .querySelectorAll('[id^="icon-"]')
      .forEach((item) => (item.style.transform = ""));
    if (!isOpen) {
      faq.classList.replace("max-h-0", "max-h-36");
      icon.style.transform = "rotate(180deg)";
    }
  }
}

// Form toggle in Login page
if (window.location.pathname.includes("login")) {
  document.querySelectorAll(".form-toggle").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("login-form").classList.toggle("hidden");
      document.getElementById("register-form").classList.toggle("hidden");
    })
  );
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
