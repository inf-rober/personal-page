// Código para los tooltips de las tecnologías

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

// Código para icono que hace scroll hacia arriba

const desplazarArriba = document.querySelector("#top-scroll");

desplazarArriba.addEventListener("click", () => {
window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
});

// Selecciones para barra de navegación hamburguesa

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
ul.classList.toggle("show");
});

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  
// Seleccionar enlaces de navegación

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
  ul.classList.remove("show");
})
);
