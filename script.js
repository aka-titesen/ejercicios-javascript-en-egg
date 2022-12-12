// CLASE 4 - Conjuntos de datos Set y Map

//Agrega el array "numeros" con números repetidos y elimina los repetidos
//var numerosSet = new Set(numeros);

//var str = "aabbccdd".split(""); con el método split de string separao cada letra de éste string y formo un array

//var strSet = new Set("aabbccdd".split("")); //Va a generar un array tipo set pero sin las letras repetidas

//personas.reverse(); //Cambia el orden del array

//personas.forEach((e) => console.log(e.nombre)); //Itera por el array espeficando el llamado a otra función

//numeros.filter((e) => e % 2 == 0); //Permite filtrar el array pasandole una condición

//numeros.map((e) => e * 30); //Itera sobre los elementos y los modifico a cada uno, en éste multiplica cada número por 30

//Mapa
//var map = new Map();

//Con set agregamos valores al map
//map.set(1,"Facundo")

/*
personas.filter(function (e) {
  if (e.nombre == "Facundo") return e;
});
*/
// CLASE 3 - FUNCIONES EN ARRAYS

var numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

//Convierte objetos a String
//console.log(JSON.stringify(numeros));

var personas = [
  {
    nombre: "Facundo",
    apellido: "Gonzalez",
  },
  {
    nombre: "Juan",
    apellido: "Garribia",
  },
  {
    nombre: "Leonardo",
    apellido: "Miralles",
  },
];

//console.log(personas[personas.length - 1].nombre);

// CLASE 3 - ARRAYS

//Se puede crear objetos sin tener una clase definida
//Los objetos se manejan mediante la key-value
//En éste ejemplo apellido, nombre, etc. serían las keys
//Gonzalez, Facundo, etc. serían los values

var persona = {
  apellido: "Gonzalez",
  nombre: "Facundo",
  dni: 41909731,
  nacimiento: new Date("01-21-1998"), //21-enero-1998
  mascostas: [
    {
      apodo: "Tyson",
      numeroIdentificatorio: 123456789,
      nacimiento: new Date("05-01-2015"), // 01-mayo-2015
    },
    {
      apodo: "Milo",
      numeroIdentificatorio: 987654321,
      nacimiento: new Date("08-16-2019"),
    },
  ],
};

//Mostramos por consola al objeto persona y sus atributos
//console.log(persona.mascostas[0].apodo);

//Creamos la clase mascota
class Mascota {
  apodo;
  numeroIdentificatorio;
}

var m = new Mascota();

m.apodo = "Saori";
m.numeroIdentificatorio = 1209568734;

/*var mascosta = {
  apodo: "Tyson",
  numeroIdentificatorio: 123456789,
  nacimiento: new Date("05-01-2015"), // 01-mayo-2015
};*/
//console.log(mascosta);

// CLASE 2 - TIPOS DE DATOS

//var edad = prompt("Que edad tenés", 29);

//var edad = prompt("Que edad tenés?");

//Template String

//var mensaje = `La edad del sujeto es
//......
//...... ${edad}`;

//alert(mensaje);

//var mensaje = "Edad \n " + edad;

// CLASE 1 - ENTRADA Y SALIDA DE DATOS

//var number = 123;

//number = "123";

//alert("El tipo de dato de número es " + typeof number);

//alert("Hola, tu edad es: " + edad);

//console.log("Hola mundo, estoy en la consola");
