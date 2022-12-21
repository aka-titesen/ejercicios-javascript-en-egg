/*
CONSIGNA:
1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.  
*/
const clima = () => {
  try {
    let climaUsuario = prompt("Ingrese como está el clima");

    if (typeof climaUsuario === "string" && isNaN(climaUsuario)) {
      console.log(`El clima es: ${climaUsuario}`);
    } else {
      throw new TypeError("Los valores ingresados no son carácteres");
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

clima();
