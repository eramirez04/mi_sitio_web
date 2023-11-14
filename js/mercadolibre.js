let boxProductos = document.getElementById("boxProductos");

let boxProducto = document.createElement("div");
boxProductos.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-producto");

/* Contenedor que contiene la imagen */
let boxImagen = document.createElement("div");
boxProducto.appendChild(boxImagen);
boxImagen.setAttribute("class", "box-imagen");

/* imagen creada */
let imagenPro = document.createElement("img");
boxImagen.appendChild(imagenPro);
imagenPro.setAttribute("src", "img/supra.webp");
imagenPro.setAttribute("class", "box-imagen");

/* contenedor para la infomacion */
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class", "box-info-producto");

/* marca de del producto */
let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaPdto = document.createTextNode("Toyota ");
marcaProducto.appendChild(nodoMarcaPdto);
marcaProducto.setAttribute("class", "marca-producto");

/* Modelo del producto */
let modeloProducto = document.createElement("label");
infoProducto.appendChild(modeloProducto);
let nodoModeloPdto = document.createTextNode("Supra Mk 04 ");
modeloProducto.appendChild(nodoModeloPdto);
modeloProducto.setAttribute("class", "modelo-producto");

/* precio del producto */
let precioProducto = document.createElement("label");
infoProducto.appendChild(precioProducto);
let nodoprecioPdto = document.createTextNode("$200.000.000 ");
precioProducto.appendChild(nodoprecioPdto);
precioProducto.setAttribute("class", "precio-producto");

/* Año */
let yearProducto = document.createElement("label");
infoProducto.appendChild(yearProducto);
let nodoyeatPdto = document.createTextNode(" 1999 ");
yearProducto.appendChild(nodoyeatPdto);
yearProducto.setAttribute("class", "anyo-producto")

/* Kilometraje */
let kmPdto = document.createElement("label");
infoProducto.appendChild(kmPdto);
let nodoKmPdto = document.createTextNode("12654 Km");
kmPdto.appendChild(nodoKmPdto);
kmPdto.setAttribute("class", "kilometraje")

/* ciudad del producto */
let cityPdto = document.createElement("label");
infoProducto.appendChild(cityPdto);
let nodoCityPdto = document.createTextNode("Pitalito");
cityPdto.appendChild(nodoCityPdto);
cityPdto.setAttribute("class", "ciudad")
