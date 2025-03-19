const form = document.querySelector(".formularios form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const motivo = document.getElementById('motivo').value;
    const correo = document.getElementById('correo').value;

    console.log("Nombre:", nombre);
    console.log("Motivo:", motivo);
    console.log("Correo:", correo);

    alert("Hola " + nombre + ", su correo es " + correo + " y su motivo de contacto es: \n" + motivo);
});