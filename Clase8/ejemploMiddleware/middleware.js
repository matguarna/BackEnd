const express = require("express");
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//Inicializamos express
const app = express();

//Middleware. Se ejecuta siempre
app.use(function (req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

//Creamos los middlewares
app.use((req, res, next) => {
  console.log("Llegó una peticion: ");
  next();
});

app.use((req, res, next) => {
  console.log(`APP USE - Método: ${req.method}. URL: ${req.url}`);
  next();
});

app.use((req, res, next) => {
  req.saludito = { hola: "holaaa" };
  next();
});
//Al utilizar app.use, responde siempre que se cumpla la ruta especificada.
app.get("/", (req, res) => {
  console.log(req.saludito);
  res.send("APP USE - GET ok");
});

//Middleware para verificar el metodo
app.use((req, res, next) => {
  if (req.method == "POST") {
    res.send("Mandaste un POST kpo");
  } else {
    res.send("Mandaste otra cosa");
  }
});

//Creamos un router para por ejemplo, aplicarle un middleware solo a ese router
const router = express.Router();
//Le da la ruta /r a todas las peticiones router.use
app.use("/r", router);

router.use((req, res, next) => {
  console.log("Llegó una peticion: ");
  next();
});

router.use((req, res, next) => {
  console.log(`ROUTER USE - Método: ${req.method}. URL: ${req.url}`);
  next();
});

router.use((req, res, next) => {
  req.saludito = { hola: "holaaa" };
  next();
});

router.get("/", (req, res) => {
  console.log(req.saludito);
  res.send("ROUTER USE - GET ok");
});

//Otra ruta, con un middleware cargado previamente
function miMiddleware(req, res, next) {
  console.log("Soy el middleware especial pa");
  next();
}

app.get("/middle", miMiddleware, (req, res) => {
  res.send("MIDDLEWARE - APP USE - GET ok");
});

//--------------Server Listen----------------//
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
