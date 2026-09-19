const boton = document.getElementById("btnSaludo");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "¡Hola Ricardo! Este texto lo generó JavaScript.";
});