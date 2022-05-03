const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
//const exphbs = require("express-handlebars");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
//--------------

//app.use(express.urlencoded({ extended: true })); //Linea necesaria para codificar el formulario

// const handlebarsConfig = {
//   defaultLayout: "default.handlebars", //Es la pagina que se muestra por default
// };
// app.engine("handlebars", exphbs.engine(handlebarsConfig));
// app.set("view engine", "handlebars"); //Indica que las extensiones de las vistas son .handlebars
// app.set("views", "./views"); //Definimos la carpeta donde estan las vistas

const productos = [];

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

io.on("connection", (socket) => {
  socket.emit("prod", productos);

  socket.on("nuevoProd", (producto) => {
    productos.push(producto);
    io.sockets.emit("productos", productos);
  });
});

app.get("/cargaProductos", (req, res) => {
  res.render("formularioProductos"); //Agrega este contenido a la pagina que muestra por default
});

//va a ser una api rest
app.post("/api/productos", (req, res) => {
  const prod = req.body;
  productos.push(prod);
  console.log(productos);
  res.redirect("/"); //Enviamos una respuesta para que no se cuelgue el servidor. Redirecciona nuevamente a la pagina del formulario
});

app.get("/vistaProductos", (req, res) => {
  const hayProductos = productos.length > 0;
  res.render("vistaProductos", { hayProductos, productos });
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor conectado. Puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
