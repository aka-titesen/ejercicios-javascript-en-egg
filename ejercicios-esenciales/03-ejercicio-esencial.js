/*
CONSIGNA:
Escriba  un  programa  en  donde  se  pida  la  edad  del  usuario.  Si  el  usuario  es  mayor  de edad se debe mostrar un mensaje indicándolo.  
*/

const esMayorEdad = () => {
  try {
    let edad = prompt("Ingresa tu edad");
    let conversion = parseInt(edad);
    if (!isNaN(conversion)) {
      if (conversion >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("Es menor de edad");
      }
    } else {
      throw new TypeError("El valor ingresado no es un número");
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
esMayorEdad();
