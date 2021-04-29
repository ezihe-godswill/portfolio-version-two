// MAIN script variables
const menu = document.querySelector(".menu");
const sideMenu = document.querySelector(".side-menu");
const sideMenuLinks = document.querySelectorAll(".side-menu-link");


menu.addEventListener("click", (e) => {
    menu.classList.toggle("active");
    sideMenu.classList.toggle("active");
});

sideMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.toggle("active");
        sideMenu.classList.toggle("active");
    });
});