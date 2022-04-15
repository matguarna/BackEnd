const express = require("express");
const app = express();

//app.use(express.static("public"));
//public es el nombre de la carpeta, necesitamos crearla

const { Router } = express;
const router = Router();

app.use("/api/productos", router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let productos = [
  { title: "Notebook", price: 500, thumbnail: "url", id: "1" },
  { title: "Tablet", price: 300, thumbnail: "url", id: "2" },
  { title: "Celular", price: 150, thumbnail: "url", id: "3" },
];

router.get("/", (req, res) => {
  const allProducts = [];
  for (const dato of productos) {
    allProducts.push(dato.title);
  }
  console.log(`Los archivos presentes son: ${allProducts}`);
  //console.log(allProducts.length);
  res.send(`Los archivos presentes son: ${allProducts}`);
});

router.get("/:id", (req, res) => {
  const { params } = req;
  const byId = productos.find((producto) => producto.id == req.params.id);
  if (byId) {
    console.log(`El producto ${byId.title} corresponde al ID: ${req.params.id}`);
    res.send(`El producto ${byId.title} corresponde al ID: ${req.params.id}`);
  } else {
    console.log(`No existe un producto con ese ID`);
    res.send(`No existe un producto con ese ID`);
  }
});

router.post("/", (req, res) => {
  productos.push(req.body);
  // const contadorId = [];
  // // let ultimoId;
  // // for (const dato of productos) {
  // //   ultimoId = contadorId.push(dato.title);
  // // }
  // ultimoId++;
  // console.log(contadorId.length);
  // console.log(ultimoId);
  // console.log(productos);
  console.log(productos);
  console.log(req.body);
  res.send(`POST Ok. El producto asignado fue: . ID: `);
});

//app.delete("/productos/:id")

app.use("/static", express.static("public"));
//app.use("/static", express.static("files"));

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
