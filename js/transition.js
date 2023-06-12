let boton =  document.getElementById("btn");
let btn = document.getElementById("toggle");

boton.addEventListener("click", function(){
    if (btn.classList.contains("box-4-1")){
        btn.classList.add("box-4-1-2");
        btn.classList.remove("box-4-1"); 
    }
    else{
        btn.classList.remove("box-4-1-2");
        btn.classList.add("box-4-1");
    }
});