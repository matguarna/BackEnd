//Para mostar como JSON usa res.json({fyh:fecha})
//Traemos la libreria
const express = require("express");

//creamos la app - Inicializamos
const app = express();

//Contador de visitas
let contadorVisitas = 1;

//Configuracion peticion GET (rutas)
app.get("/", (req, res) => {
  res.send(`<h1 style="color:blue"> Bienvenidos al servidor express</h1>
  <a href="/visitas">Visitar</a>`);
});

app.get("/pagina", (req, res) => {
  //sendFile sirve para enviar un archivo. process.cwd() significa current working directory y se refiere a la ruta del directorio donde estamos ejecutando el node y le suma el archivo, hay que poner / antes del nombre del archivo.
  res.sendFile(process.cwd() + `/index.html`);
});

app.get("/visitas", (req, res) => {
  const palabraFinal = contadorVisitas == 1 ? "vez" : "veces";
  res.send(`El sitio fue visitado: ${contadorVisitas++} ${palabraFinal}`);
});

app.get("/fyh", (req, res) => {
  //En una variable instanciamos Date (fecha)
  const fecha = new Date();
  //Transforma el objeto en una representacion en forma de caracteres que nos muestra la fecha en el formato que queremos mostrarlo.
  //const fechaString = fecha.toLocaleDateString; muestra la fecha
  //const fechaString = fecha.toLocaleTimeString; muestra la hora
  const fechaString = fecha.toLocaleString(); //muestra fecha y hora
  res.send({ fyh: fechaString });
});

//Conexion con el puerto
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
//Manejo de errores de conexion
server.on("error", (error) => console.log(`Error en servidor: ${error}`));
