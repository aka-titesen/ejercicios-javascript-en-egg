/*
CONSIGNA: 
23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo)
*/

// Obtengo el párrafo del documento HTML
var parrafo = document.getElementById("parrafo");

// Obtengo el texto del párrafo
var texto = parrafo.textContent;

// Divido el texto en palabras, es decir creo un arreglo a partir de cada palabra del texto
var palabras = texto.split(" ");

// Itero a través del arreglo de palabras
for (var i = 0; i < palabras.length; i++) {
  // Obtengo la longitud de la palabra
  var longitud = palabras[i].length;

  // Si la palabra tiene más de 8 caracteres
  if (longitud > 8) {
    // Añado la palabra a un span y con el stilo de marcado amarillo, y finalmente la reemplazo
    palabras[i] = `<span style="background-color: yellow">${palabras[i]}</span>`;
  }
}

// Uno el arreglo de palabras de nuevo en un solo texto; es decir un String
texto = palabras.join(" ");

// Actualizo el texto del párrafo con los cambios realizados; es decir con las parrafos de más de 8 caracteres encerrados en un span con el estilo amarillo marcado
parrafo.innerHTML = texto;
