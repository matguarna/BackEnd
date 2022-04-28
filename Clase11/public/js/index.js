// hola
const socket = io(); //Permite empezar a usar los sockets desde el cliente

socket.on("mi mensaje", (data) => {
  console.log(data);
  socket.emit("msg-cliente", "Cliente: Recibí el mensaje");
});
