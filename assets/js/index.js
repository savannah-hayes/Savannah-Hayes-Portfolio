const menu = document.querySelector(".nav-toggle");
const ul = document.querySelector(".nav__list");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__item");

menu.addEventListener( "click", () => {
  ul.classList.toggle("show")
  menu.classList.toggle("show")
})

navLink.forEach(link => {
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
})
