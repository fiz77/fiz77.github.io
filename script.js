const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

function go() {
  window.location = 'https://www.instagram.com/fiz_zz/profilecard/?igsh=eXVwanhwMTN1a243'
}

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});