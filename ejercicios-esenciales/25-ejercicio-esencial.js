function getFormValores() {
    //Obtengo los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    //Creo nuevas etiquetas "p" para mostrar los valores del formulario
    var nombreEtiqueta = document.createElement("p");
    var apellidoEtiqueta = document.createElement("p");

    //Asigno los valores a las nuevas etiquetas "p"
    nombreEtiqueta.innerHTML = nombre;
    apellidoEtiqueta.innerHTML = apellido;

    //Añado las nuevas etiquetas "p" al elemento "form"
    var formulario = document.getElementById("form"); //Capturo el form y añado las etiquetas con los valores al mismo
    formulario.appendChild(nombreEtiqueta);
    formulario.appendChild(apellidoEtiqueta);

    //Evito que la página se recargue
    return false;
}