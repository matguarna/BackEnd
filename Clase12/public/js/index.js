const socket = io();

function mostrarMensajes(mensajes) {
  const mensajesParaMostrar = mensajes.map(({ autor, fecha, texto }) => {
    return `${fecha} - ${autor}: ${texto}`;
  });
  console.log(mensajesParaMostrar);
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
  } else {
    alert("Ingrese un autor y un mensaje");
  }
});
