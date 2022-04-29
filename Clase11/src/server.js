const { resolveMx } = require("dns");
const express = require("express");
const { Server: HttpServer } = require("http"); //Extrae un servidor basico http porque el servidor de socket.io necesita un servidor nativo de Node.js, el de express es distinto, por lo tanto no le sirve a socket.io
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app); //Se le carga la aplicacion express al servidor http y quedan interconectadas
const io = new IOServer(httpServer); //Se le pasa el servidor http a socket io y se interconectan las 3 partes. Este "io" es el socket del lado del servidor

app.use(express.static("public")); //Indicamos que queremos cargar los archivos estaticos que se muestran en la carpeta "public"

app.get("/", (req, res) => {
  res.send("OK");
});

io.on("connection", (socket) => {
  //"connection" se ejecuta la primera vez que se abre una nueva conexión.
  console.log(`User conectado. Socket ID: ${socket.id}`);
  //Se ejecuta el codigo dentro solo la primera vez que se ha abierto la conexión.
  socket.emit("mi mensaje", "Soy el servidor");

  //Recibe los mensajes del cliente
  socket.on("msg-cliente", (data) => {
    console.log(data);
  });

  socket.on("saludo", (data) => {
    console.log(data);
  });

  //Envia este emit cada 3 segundos
  setInterval(() => {
    socket.emit("heartbeat", "estoy vivo");
  }, 3000);
});

const server = httpServer.listen(8080, () => {
  console.log(`Server conectado en puerto: ${server.address().port}`);
});
