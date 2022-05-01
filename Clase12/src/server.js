const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.send("OK");
});

//Lista donde se acumulan los msjs
const arrayMensajes = [];

io.on("connection", (socket) => {
  console.log(`User conectado. Socket ID: ${socket.id}`);
  socket.emit("mensajesActualizados", arrayMensajes); //Envia el array guardado a nuevas conexiones

  socket.on("nuevoMensaje", (mensaje) => {
    mensaje.fecha = new Date().toLocaleString(); //Agrega fecha y hora a los mensajes
    arrayMensajes.push(mensaje);
    console.log(arrayMensajes);
    io.sockets.emit("mensajesActualizados", arrayMensajes); //Envia el array a todos los sockets
  });
});

const server = httpServer.listen(8080, () => {
  console.log(`Server conectado en puerto: ${server.address().port}`);
});
