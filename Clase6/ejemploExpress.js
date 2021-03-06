//Traemos la libreria
const express = require("express");

//creamos la app - Inicializamos
const app = express();

//Configuracion peticion GET (rutas)
app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/llegada", (req, res) => {
  res.send("Hola mundito");
});

app.get("/salida", (req, res) => {
  console.log(req.url);
  res.send("Chauu mundito");
});

//Conexion con el puerto
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
//Manejo de errores de conexion
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
