const socket = io();

function mostrarMensajes(mensajes) {
  const mensajesParaMostrar = mensajes.map(({ autor, fecha, texto }) => {
    return `<li>${fecha} - ${autor}: ${texto}</li>`;
  });
  console.table(mensajesParaMostrar);

  const mensajesHtml = `
  <ul>
  ${mensajesParaMostrar.join("\n")}
  </ul>`; //join() concatena cada mensaje el parametro dado

  const listaMensajes = document.getElementById("listaMensajes");
  listaMensajes.innerHTML = mensajesHtml;
}

socket.on("mensajesActualizados", (mensajes) => {
  mostrarMensajes(mensajes);
});

const botonSaludar = document.getElementById("botonEnviar");
botonSaludar.addEventListener("click", (e) => {
  const inputAutor = document.getElementById("inputAutor");
  const inputMensaje = document.getElementById("inputMensaje");
  if (inputMensaje.value && inputAutor.value) {
    const mensaje = {
      autor: inputAutor.value,
      texto: inputMensaje.value,
    };
    socket.emit("nuevoMensaje", mensaje);
    inputMensaje.value = ""; //Limpia el contenido del mensaje luego de enviar un mensaje
  } else {
    alert("Ingrese un autor y un mensaje");
  }
});
