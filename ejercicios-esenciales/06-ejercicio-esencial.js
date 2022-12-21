const esParOImpar = () => {
  try {
    let numero = prompt("Ingrese el número");
    numero = parseInt(numero);
    if (!isNaN(numero)) {
      if (numero < 0) {
        throw new TypeError("El número ingresado debe ser 1 o mayor que éste");
      } else {
        if (numero === 0) {
          console.log(`El número ${0} no es par ni impar`);
        } else {
          if (numero % 2 === 0) {
            console.log(`El número ${numero} es par`);
          } else {
            console.log(`El número ${numero} es impar`);
          }
        }
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
esParOImpar();
