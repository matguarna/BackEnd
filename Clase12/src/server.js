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

io.on("connection", (socket) => {
  console.log(`User conectado. Socket ID: ${socket.id}`);
});

const server = httpServer.listen(8080, () => {
  console.log(`Server conectado en puerto: ${server.address().port}`);
});
