'use strict'

function activarBomba() {
    let mensajeH1 = document.getElementById("cuentaRegresiva")
    let contador = 5;
    let intervalo = setInterval(function () {
        if (contador === 0) {
            mensajeH1.innerHTML = "booommmmm";
            clearInterval(intervalo);
        } else {
            contador--;
            mensajeH1.innerHTML = contador;

        }

    }, 1000)
}

let boton = document.getElementById("boton");
boton.addEventListener("click", activarBomba);


function activarBomba2() {
    let mensajeH12 = document.getElementById("cuentaRegresiva2")
    let contador2 = Number((document.getElementById("input").value));
    let intervalo2 = setInterval(function () {
        if (contador2 === 0) {
            mensajeH12.innerHTML = "booommmmm";
            clearInterval(intervalo2);
        } else {
            contador2--;
            mensajeH12.innerHTML = contador2;

        }

    }, 1000)
}

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", activarBomba2);







