/*
CONSIGNA:
4. Realiza  un  programa  que  sólo  permita  introducir  los  caracteres  ‘S’  y  ‘N’.  Si  el  usuario ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.  
*/
const unSoloCaracter = () => {
  try {
    let unaLetra = prompt("Ingresa S/N");
    unaLetra = unaLetra.charAt(0).toUpperCase();

    if (unaLetra === "S" || unaLetra === "N") {
      console.log("CORRECTO");
    } else {
      console.log("INCORRECTO");
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

unSoloCaracter();
