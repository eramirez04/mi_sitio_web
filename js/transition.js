let boton =  document.getElementById("btn");
let toggle = document.getElementById("toggle");

boton.addEventListener("click", function(){
    if (toggle.classList.contains("box-4-1")){
        toggle.classList.add("box-4-1-2");
        toggle.classList.remove("box-4-1"); 
        boton.classList.add("box-4-4")
        boton.classList.remove("box-4")
    }
    else{
        toggle.classList.remove("box-4-1-2");
        toggle.classList.add("box-4-1");
        boton.classList.remove("box-4-4")
        boton.classList.add("box-4")
    }
});