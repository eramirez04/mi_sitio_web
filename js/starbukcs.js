/* function cambiarImg(anything) {
    document.querySelector('.star').src = anything;
} */

let iceGreen = document.getElementById("iceGreen");
let iceRose  = document.getElementById("iceRose");
let mainCircle  = document.getElementById("mainCircle")
let mainImg = document.getElementById("mainImg")
let icePink = document.getElementById("icePink")

iceGreen.addEventListener("mouseover", function(){
    mainCircle.classList.add("main-circle-green")
    mainCircle.classList.remove("main-circle-rose")
    mainCircle.classList.remove("main-circle-pink")
    mainImg.setAttribute("src", "img/img1.png")
})
iceRose.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green")
    mainCircle.classList.add("main-circle-rose")
    mainCircle.classList.remove("main-circle-pink")
    mainImg.setAttribute("src", "img/img2.png")

})
icePink.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green")
    mainCircle.classList.remove("main-circle-rose")
    mainCircle.classList.add("main-circle-pink")
    mainImg.setAttribute("src", "img/img3.png")

})  
