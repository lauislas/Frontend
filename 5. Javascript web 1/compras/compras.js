let miInput = document.querySelector(".form-control")
let totalh2 = document.querySelector(".total");
let misCompras = document.querySelector(".mi-lista")
let arrayCompras = [];

function agregarAcompra() {
    let nuevaCompra = Number(miInput.value);
    arrayCompras.push(nuevaCompra);
    miInput.value = "";
    actualizar();
}

function actualizar() {
    misCompras.innerHTML = "";
    for (let i = 0; i < arrayCompras.length; i++) {
        let miLi = document.createElement("li");
        miLi.innerHTML = arrayCompras[i];
        misCompras.appendChild(miLi);

    }
}

function calcularCosto() {
    let suma = 0;
    for (let i = 0; i < arrayCompras.length; i++) {
        suma += arrayCompras[i];
    }
    totalh2.innerHTML = suma;
}

function eliminarUlt() {
    arrayCompras.pop();
    actualizar();
}

function EliminarTodas(){
    arrayCompras=[];
    actualizar();
}


let botonAgregar = document.querySelector(".boton-agregar");
botonAgregar.addEventListener("click", agregarAcompra);


let botonCalcular = document.querySelector(".boton-calcular");
botonCalcular.addEventListener("click", calcularCosto);

let botoneliminar = document.querySelector(".boton-limpiar-ultima");
botoneliminar.addEventListener("click", eliminarUlt);

let botonEliminarTodas = document.querySelector(".boton-limpiar-total");
botonEliminarTodas.addEventListener("click", EliminarTodas);