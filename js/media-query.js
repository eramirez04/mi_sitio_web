// tipos de datos primarios: son datosque nos permite ayudar hacer operciones aritmeticas
//  let var, const 
// declarar la varable es como dar un nombre 
// en una variable se puede guardar {enteros, cadenas de textos, decimales, objetos}


let logoHambuerguer = document.getElementById("logoHamburguer");
let mainMenu = document.getElementById("mainMenu");

logoHambuerguer.addEventListener("click", function () {
    if (mainMenu.classList.contains("main-menu")) {
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu");
    }
    else {
        mainMenu.classList.remove("main-menu-block");
        mainMenu.classList.add("main-menu")
    }
   
});