/*
CONSIGNA:
18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos
*/
const mayorOMenor = (strA, strB) => {
    if (strA.length === strB.length) {
        return null;
    } else {
        if (strA.length > strB.length) {
            return strA;
        } else {
            return strB;
        }
    }
}

const cuatroOperacionesAritmeticas = (arr) => {
    try {
        if (arr[0] === 0 || arr[1] === 0) {
            throw new TypeError("No se puede dividir por cero");
        }
        console.log(`Suma: ${arr[0] + arr[1]}`);
        console.log(`Resta: ${arr[0] - arr[1]}`);
        console.log(`Multiplicación: ${arr[0] * arr[1]}`);
        console.log(`División: ${arr[0] / arr[1]}`);
    } catch (err) {
        if (err instanceof TypeError) {
            console.warn(err.message);
        } else {
            console.error("Ocurrio un error genérico");
        }
    }
}

const main = () => {
    var valores = [true, 5, false, "hola", "adios", 2];
    var copyArr = valores;
    var numerosArr = new Array();
    var strLargo = "";
    for (let i = 0; i < copyArr.length; i++) {
        const element = copyArr[i];
        switch (typeof (element)) {
            case "string":
                strLargo = mayorOMenor(element, strLargo);
                break;
            case "number":
                numerosArr.push(element);
                copyArr[i] = "X";
                //copyArr.splice(i, i + 1);
                if (numerosArr.length === 2) {
                    console.log(" ");
                    console.log(`Las cuatro operaciones artimeticas`);
                    cuatroOperacionesAritmeticas(numerosArr);
                }
                break;
            case "boolean":
                console.log(" ");
                console.log(`El valor booleano es ${element}`);
                break;
        }
    }
    console.log(" ");
    console.log(`El carácter más largo es ${strLargo}`);

}

main();