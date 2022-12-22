/*
CONSIGNA:
13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.  
*/
const calcularEdad = (fecha) => {
    let edad = 0;
    const fechaActual = new Date();
    const fechaDeNacimiento = new Date(fecha);

    const anhoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();

    const anhoNacimiento = fechaDeNacimiento.getFullYear();
    const mesNacimiento = fechaDeNacimiento.getMonth() + 1;
    const diaNacimiento = fechaDeNacimiento.getDate();

    edad = anhoActual - anhoNacimiento;

    if (mesActual < mesNacimiento) {
        edad--;
    } else {
        if (mesActual === mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--;
            }
        }
    }
    return edad;
}

const facundo = {
    nombre: "Facundo Nicolás González",
    fechaDeNacimiento: new Date(1998, 0, 21),
    sexo: "M"
}
console.log(`Ésta persona se llama ${facundo.nombre},
nacio el ${facundo.fechaDeNacimiento.toLocaleDateString()},
y tiene ${calcularEdad(facundo.fechaDeNacimiento)} años,
de sexo ${facundo.sexo}`);