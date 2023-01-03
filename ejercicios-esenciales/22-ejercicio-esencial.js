/*
CONSIGNA:
22. Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.
*/

//Capturo el valor ingresados en el input
const capturarTextoInput = () => {
    return textoIngresado = document.getElementById('texto_ingresar').value;
}
//Establezco el valor capturado del input al título (h1)
let cambiarTexto = () => {
    document.getElementById('titulo').innerHTML = capturarTextoInput();
}
//Borro lo que escribió el usuario en el input
let limpiarInput = () => {
    document.getElementById('texto_ingresar').value = "";
}

//Evento que "escucha" y ejecuta la acción de cambiar el título por el valor ingresado en el input cuando el usuario pulsa el boton
document.getElementById('boton').onclick = function (){
    cambiarTexto();
    limpiarInput();
}
