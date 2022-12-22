/*
CONSIGNA: 
11. Escribir una función que reciba un String y devuelva la palabra más larga.  String Ejemplo: “Guia de JavaScript” Resultado esperado : “JavaScript” 
*/
const palabraMasLarga = () => {
    try {
        let frases = prompt("Ingrese una frase");
        if (typeof frases !== "string") {
            throw new TypeError("La frase ingresada no es un String");
        }
        let fraseMasLarga = frases.split(" ").sort((a, b) => {
            return b.length - a.length;
        });
        fraseMasLarga = fraseMasLarga[0]
        console.log(`La palabra más larga es: ${fraseMasLarga}`);
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
palabraMasLarga();