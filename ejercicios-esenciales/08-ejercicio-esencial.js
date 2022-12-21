/*
CONSIGNA:
8. Escribir  un  programa  que  lea  números  enteros  hasta  teclear  0(cero).Al  finalizar  el programa se debe mostrar  el  máximo número  ingresado, el  mínimo, y el promedio de todos ellos.  
*/
const numeros = () => {
    try {
        let aux = 0;
        let acumulador = [null];
        let contador = 0;
        do {
            aux = prompt("Ingrese un número");
            aux = parseInt(aux);
            if (isNaN(aux)) {
                throw new TypeError("El valor ingresado no es un número");
            }
            if (aux !== 0) {
                acumulador.push(aux);
                contador++;
            }
        } while (aux !== 0);
        console.log(`Se ingresó números la cantidad de veces de ${contador}`)
        console.log(`El promedio fue de ${getPromedio(acumulador, contador)}`)
        console.log(`El máximo número de ${getMaxArr(acumulador)}`)
        console.log(`El minimo número de ${getMinArr(acumulador)}`)
    } catch (err) {
        if (err instanceof TypeError) {
            console.warn(err.message);
        } else {
            console.error("Ocurrio un error genérico");
        }
    } finally {
        console.log("Operación finalizada");
    }
}
numeros();
function getPromedio(arr, contador) {
    let total = 0;
    let promedio = 0;
    total = arr.reduce((a, b) => a + b);
    promedio = total / contador;
    return promedio;
}
function getMaxArr(arr) {
    var max = arr.reduce((a, b) => {
        return Math.max(a, b);
    });
    return max;
}
function getMinArr(arr) {
    var min = arr.reduce((a, b) => {
        return Math.min(a, b);
    });
    return min;
}
