const apiUrl: string = "https://pokeapi.co/api/v2/";

function consultar(detalle: string): void {
  fetch(`${apiUrl}pokemon/${detalle.toLowerCase()}`)
    .then((response: Response) => {
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }
      // Convertir la respuesta a JSON
      return response.json();
    })
    .then((data: any) => {
      // Aquí puedes hacer algo con los datos recibidos
      console.log(data);
      const body = document.getElementById("content");
      if (body) {
        body.innerHTML = data.name;
      }
    })
    .catch((error: Error) => {
      // Manejo de errores
      console.error("Hubo un problema con la solicitud Fetch:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("consultar") as HTMLButtonElement;
  if (boton) {
    boton.addEventListener("click", () => {
      const campo = document.getElementById("detalle") as HTMLInputElement;
      if (campo) {
        const detalle: string = campo.value;
        consultar(detalle);
      }
    });
  }
});
