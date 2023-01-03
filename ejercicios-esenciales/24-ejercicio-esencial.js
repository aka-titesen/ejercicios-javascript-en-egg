document.getElementById("boton-para-calcular").addEventListener("click", calcularRadio);

function calcularRadio() {
  // Obtengo el diámetro del formulario
  var diametro = document.getElementById("diametro").value;
  
  // Calculo el radio
  var radio = diametro / 2;
  
  // Muestro el resultado en el HTML
  document.getElementById("resultado").innerHTML = `Radio: ${radio}`;
}
