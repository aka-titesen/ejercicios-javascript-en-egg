/*
CONSIGNA:
21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.
*/

var facundo = {
    nombre: "Facundo Nicolás",
    apellido: "González",
    edad: 24,
    sexo: "H"
}

var valores = new Array(facundo.nombre, facundo.edad, facundo.sexo);

console.log(valores);