let punUno = document.getElementById("punUno")
let punDos = document.getElementById("punDos")
let punTres = document.getElementById("punTres")
let punCuatro = document.getElementById("punCuatro")
let punCinco = document.getElementById("punCinco")

let btnGraficar = document.getElementById("graficar");

btnGraficar.addEventListener("click", function () {
    
        let puntuacionUno = parseInt(punUno.value)
        let puntuacionDos = parseInt(punDos.value)
        let puntuacionTres = parseInt(punTres.value)
        let puntuacionCuatro = parseInt(punCuatro.value)
        let puntuacionCinco = parseInt(punCinco.value)

        let sumaCalificacion = (puntuacionUno + puntuacionDos + puntuacionTres + puntuacionCuatro + puntuacionCinco) ;

        const calcualPor = (puntucion, totalPuntuacion) =>{
              let valTotal = ((puntucion * 100) / totalPuntuacion)
              return valTotal
        }

        let valor = calcualPor(puntuacionUno,sumaCalificacion);
        let valor2 = calcualPor(puntuacionDos,sumaCalificacion);
        let valor3 = calcualPor(puntuacionTres,sumaCalificacion);
        let valor4 = calcualPor(puntuacionCuatro,sumaCalificacion);
        let valor5 = calcualPor(puntuacionCinco,sumaCalificacion);

        alert(valor2)

});

                      