const express = require("express");
const app = express();

//app.use(express.static("public"));
//public es el nombre de la carpeta, necesitamos crearla

const { Router } = express;
const router = Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Personas = [];

router.get("/personas", (req, res) => {
  res.send(`get ok, ${JSON.stringify(Personas)}`);
});

router.post("/personas", (req, res) => {
  Personas.push(req.body);
  res.send(`POST Ok \nArray: ${JSON.stringify(Personas)}`);
});

app.use("/static", express.static("public"));
app.use("/static", express.static("files"));
app.use("/api", router);

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
