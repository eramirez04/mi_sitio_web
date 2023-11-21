let inputBusqueda = document.getElementById("inputBusqueda");
let btnGraficar = document.getElementById("btnGraficar");

let boxEstrellas = document.getElementById("boxEstrellas");

let boxEstrella1 = document.createElement("i");
let boxEstrella2 = document.createElement("i");
let boxEstrella3 = document.createElement("i");
let boxEstrella4 = document.createElement("i");
let boxEstrella5 = document.createElement("i");

window.addEventListener("load", function () {
  boxEstrellas.appendChild(boxEstrella1);
  boxEstrellas.appendChild(boxEstrella2);
  boxEstrellas.appendChild(boxEstrella3);
  boxEstrellas.appendChild(boxEstrella4);
  boxEstrellas.appendChild(boxEstrella5);
});

btnGraficar.addEventListener("click", function () {
  let calificacion = inputBusqueda.value;
  let boxEstrella = document.createElement("i");

  if (calificacion >= 0 && calificacion <= 0.2) {
    boxEstrella.setAttribute("class", "fa-solid fa-star");
  }
});

/* <i class="fa-solid fa-star"></i> */
