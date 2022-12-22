/*
10. Escribir una función flecha que reciba una palabra y la devuelva al revés.  
*/

const palabraAlReves = () => {

    try {
        let frase = prompt("Ingrese una frase");
        if (typeof frase !== "string") {
            throw new TypeError("La frase ingresada no es un String");
        }
        frase = frase.split("");
        frase = frase.reverse();
        frase = frase.join("");
        console.log(`Frase al revés es: ${frase}`);
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

palabraAlReves();