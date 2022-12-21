/*
CONSIGNA:
5. Construir  un  programa  que  simule  un  menú de  opciones  para  realizar  las  cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores numéricos  enteros.  El  usuario,  además,  debe  especificar  la  operación  con  el  primer carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.  
*/

const aritmeticaBasica = () => {
  try {
    let a = prompt("Ingrese el primer valor");
    a = parseFloat(a);
    let b = prompt("Ingrese el segundo valor");
    b = parseFloat(b);
    let opc = null;
    do {
      opc = prompt(
        "Ingrese S(Suma) o R(Resta) o M(Multiplicacion) o D(Division)"
      );
      opc = opc.toUpperCase();
      if (typeof opc !== "string") {
        throw new TypeError("El valor ingresado no es una letra");
      }
      if (opc.length > 1) {
        opc = opc.charAt(0);
      }
    } while (opc !== "S" && opc !== "R" && opc !== "M" && opc !== "D");
    if (isNaN(a) || isNaN(b)) {
      throw new TypeError("Los valores no son números");
    }
    if (opc === "D" && (a === 0 || b === 0)) {
      throw new TypeError("No se puede dividir un número por cero");
    }
    switch (opc) {
      case "S":
        console.log(`La suma es: ${a + b}`);
        break;
      case "R":
        console.log(`La resta es: ${a - b}`);
        break;
      case "M":
        console.log(`La multiplicación es: ${a * b}`);
        break;
      case "D":
        console.log(`La división es: ${a / b}`);
        break;
    }
  } catch (err) {
    if (err instanceof TypeError) {
      console.warn(err.message);
    } else {
      console.error("Ocurrio un error genérico");
    }
  } finally {
    console.log("Operación finalizada");
  }
};
aritmeticaBasica();
