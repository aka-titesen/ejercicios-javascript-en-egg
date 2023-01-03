/*
CONSIGNA:
17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado
*/

//Ésta función permitirá un numéro aleatorio a partir un mínimo y un máximo, extremos incluidos
const sortearNumerosInclusivo = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const rellenarDosVectores = () => {
    let arrOne = new Array();
    let arrTwo = new Array();
    let min = 0;
    let max = 0;

    min = prompt("Ingresar el mínimo número para el sorteo");
    max = prompt("Ingresar el máximo número para el sorteo");
    min = parseInt(min);
    max = parseInt(max);

    try {

        if (isNaN(min) || isNaN(max)) {
            throw new TypeError("Uno o ambos valores ingresados para el sorteo no son números");
        }

        for (let i = 0; i < 5; i++) {
            arrOne.push(sortearNumerosInclusivo(min, max));
            arrTwo.push(sortearNumerosInclusivo(min, max));
        }

        console.log(`Vectores`);
        console.log(arrOne);
        console.log(arrTwo);

        for (let i = 0; i < 2; i++) {
            arrOne.pop();
            arrTwo.pop();
        }
        
        console.log(`Vectores sin los dos últimos carácteres`);
        console.log(arrOne);
        console.log(arrTwo);

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
rellenarDosVectores();