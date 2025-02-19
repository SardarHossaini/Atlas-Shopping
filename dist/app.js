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
