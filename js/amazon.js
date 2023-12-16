let puntaje5 = document.getElementById('puntaje5');
let puntaje4 = document.getElementById('puntaje4');
let puntaje3 = document.getElementById('puntaje3');
let puntaje2 = document.getElementById('puntaje2');
let puntaje1 = document.getElementById('puntaje1');


let porcentajeCalificacion1 = document.getElementById('porcentajeCalificacion1');
let porcentajeCalificacion2 = document.getElementById('porcentajeCalificacion2');
let porcentajeCalificacion3 = document.getElementById('porcentajeCalificacion3');
let porcentajeCalificacion4 = document.getElementById('porcentajeCalificacion4');
let porcentajeCalificacion5 = document.getElementById('porcentajeCalificacion5');

let btnGraficar = document.getElementById('Graficar')

btnGraficar.addEventListener('click', function () {
        let puntuacionUno = parseInt(puntaje5.value);
        let puntuacionDos = parseInt(puntaje4.value);
        let PuntuacionTres = parseInt(puntaje3.value);
        let puntuacionCuatro = parseInt(puntaje2.value);
        let PuntuacionCinco = parseInt(puntaje1.value);

        let sumaCalificacion = (puntuacionUno + puntuacionDos + PuntuacionTres + puntuacionCuatro + PuntuacionCinco);
        const calcualPor = (puntucion, totalPuntuacion) => {
                let valTotal = ((puntucion * 100) / totalPuntuacion)
                return valTotal
        }
        let valor1 = calcualPor(puntuacionUno, sumaCalificacion);
        let valor2 = calcualPor(puntuacionDos, sumaCalificacion);
        let valor3 = calcualPor(PuntuacionTres, sumaCalificacion);
        let valor4 = calcualPor(puntuacionCuatro, sumaCalificacion);
        let valor5 = calcualPor(PuntuacionCinco, sumaCalificacion);

        porcentajeCalificacion1.style.width = (valor1 * 2) + "px";
        porcentajeCalificacion2.style.width = (valor2 * 2) + "px";
        porcentajeCalificacion3.style.width = (valor3 * 2) + "px";
        porcentajeCalificacion4.style.width = (valor4 * 2) + "px";
        porcentajeCalificacion5.style.width = (valor5 * 2) + "px";

        let spanPorsentaje = document.createElement('span');

});