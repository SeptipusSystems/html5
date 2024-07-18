"use strict";
var apiUrl = "https://pokeapi.co/api/v2/";
function consultar(detalle) {
    fetch("".concat(apiUrl, "pokemon/").concat(detalle.toLowerCase()))
        .then(function (response) {
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.statusText);
        }
        // Convertir la respuesta a JSON
        return response.json();
    })
        .then(function (data) {
        // Aquí puedes hacer algo con los datos recibidos
        console.log(data);
        var body = document.getElementById("content");
        if (body) {
            body.innerHTML = data.name;
        }
    })
        .catch(function (error) {
        // Manejo de errores
        console.error("Hubo un problema con la solicitud Fetch:", error);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var boton = document.getElementById("consultar");
    if (boton) {
        boton.addEventListener("click", function () {
            var campo = document.getElementById("detalle");
            if (campo) {
                var detalle = campo.value;
                consultar(detalle);
            }
        });
    }
});
