/*
CONSIGNA:
7. Escriba  un  programa  en  el  cual  se  ingrese  un  valor  límite  positivo,  y  a  continuación solicite  números  al  usuario  hasta  que  la  suma  de  los  números  introducidos  supere  el límite inicial.  
*/

const valorLimite = () => {
  try {
    let acumulador = 0;
    let aux = 0;
    let valorLimite = prompt("Ingrese el valor límite");
    valorLimite = parseInt(valorLimite);
    if (!isNaN(valorLimite)) {
      if (acumulador !== 0) {
        console.log(`El acumulador es ${acumulador + aux}`);
      }
      while (acumulador <= valorLimite) {
        aux = prompt("Ingrese un número para acumular");
        aux = parseInt(aux);
        if (isNaN(aux)) {
          throw new TypeError("El valor ingresado no es un número");
        }
        acumulador = acumulador + aux;
      }
    } else {
      throw new TypeError("El valor ingresado no es un número");
    }

    if (acumulador > valorLimite) {
      aux = acumulador - valorLimite;
      acumulador = acumulador - aux;
      console.log(
        `El acumulador ${acumulador} alcanzó el valor límite ${valorLimite}`
      );
    } else {
      console.log(
        `El acumulador ${acumulador} alcanzó el valor límite ${valorLimite}`
      );
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
valorLimite();
