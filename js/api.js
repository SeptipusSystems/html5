const apiUrl = "https://pokeapi.co/api/v2/";
function consutar(detalle){
fetch(apiUrl + "pokemon/" + detalle.toLowerCase())
  .then((response) => {
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    // Convertir la respuesta a JSON
    return response.json();
  })
  .then((data) => {
    // Aquí puedes hacer algo con los datos recibidos
    console.log(data);
    var body = document.getElementById("content");
    body.innerHTML = data.name;
  })
  .catch((error) => {
    // Manejo de errores
    console.error("Hubo un problema con la solicitud Fetch:", error);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
    const boton = document.getElementById("consultar");
    boton.addEventListener("click",()=>{
        const campo = document.getElementById("detalle");
        const detalle = campo.value;
        consutar(detalle);
    });
})
