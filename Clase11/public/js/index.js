// hola
const socket = io(); //Permite empezar a usar los sockets desde el cliente

socket.on("mi mensaje", (data) => {
  console.log(data);
  socket.emit("msg-cliente", "Cliente: Recibí el mensaje");
});

function saludar() {
  socket.emit("saludo", "Saludo desde el cliente");
}

const botonSaludar = document.getElementById("botonSaludar");
botonSaludar.addEventListener("click", (e) => {
  saludar();
});

socket.on("heartbeat", () => {
  console.log("Todo ok");
});
