/*
CONSIGNA:
9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un espacio  entre  cada  letra.  La  frase  se  mostrara  así:  H  o  l  a.  Nota:  recordar  el funcionamiento de la función Substring().  
*/

const fraseConEspacio = () => {
    try {
        let frase = prompt("Ingrese una frase");
        if (typeof frase !== "string") {
            throw new TypeError("La frase ingresada no es un String");
        }
        frase = frase.split("");
        frase = frase.join(" ");
        console.log(`La frase con espacios es: ${frase}`);
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

fraseConEspacio();