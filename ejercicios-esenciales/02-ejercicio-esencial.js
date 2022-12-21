/*
CONSIGNA:
2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para calcular el área y el perímetro se utilizan las siguientes fórmulas:  area = PI * radio 2  perimetro = 2 * PI * radio  
*/
const calcularAreaPerimetro = () => {
  let area = null;
  let perimetro = null;
  try {
    let radio = prompt("Ingrese el radio");
    let conversion = parseFloat(radio);
    if (!isNaN(conversion)) {
      area = Math.PI * Math.pow(conversion, 2);
      area = Math.round(area);
      console.log(`La superficie es : ${area} cm²`);
      perimetro = 2 * Math.PI * conversion;
      perimetro = Math.round(perimetro);
      console.log(`El perimetro es : ${perimetro} cm`);
    } else {
      throw new TypeError("El radio ingresado no es un número");
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

calcularAreaPerimetro();
