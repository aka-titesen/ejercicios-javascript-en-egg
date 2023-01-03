/*
CONSIGNA:
15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.
*/

//Clase circulo
class Circulo {
    constructor(radio, area, perimetro){
        this.radio = radio;
        this.area = area; //Se obtendrá después de hacer los cálculos
        this.perimetro = perimetro; //Se obrendrá después de hacer los cálculos
    }
    //Método
    presentar(){
        console.log(`Radio: ${this.radio} | Area: ${this.area} cm² | Perímetro: ${this.perimetro} cm`);
    }
}

//Función para cálcular el area
const calcularArea = (radio) => {
    return Math.round(Math.PI * Math.pow(radio, 2));
}
//Función para cálcular el perimetro
const calcularPerimetro = (radio) => {
    return Math.round(2 * Math.PI * radio);
}

const crearCirculo = () => {
    let radio = 0;
    radio = prompt("Ingrese el radio para el circulo"); //Ingresa un valor para el radio
    radio = parseFloat(radio);
    try {

        if (isNaN(radio)) {
            throw new TypeError("El valor ingresado para el radio no es un número");  
        } 

        return new Circulo(radio, calcularArea(radio), calcularPerimetro(radio));
    } catch (err) {
        if (err instanceof TypeError) {
            console.warn(err.message);
          } else {
            console.error("Ocurrio un error genérico");
          }
    }finally{
        console.log("Operación finalizada");
    }
}

let nuevoCirculo = crearCirculo();
nuevoCirculo.presentar();