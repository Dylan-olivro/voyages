/* Sélection des éléments HTML */
let hamburger = document.getElementById("hamburger");
let burger = document.getElementById("burger");
let ul = document.querySelector("ul");

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});