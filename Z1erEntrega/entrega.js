const express = require("express");
const app = express();
const fs = require("fs");

const { Router } = express;
const router = Router();

app.use("/api", router);
app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Convierte a objeto (parsea) los productos del archivo productos.txt
// let productosObj;
// async function leerProductos() {
//     try {
//         productosObj = JSON.parse(await fs.promises.readFile(process.cwd() + "/productos.txt", "utf-8"));
//     } catch (err) {
//         console.log(err);
//     }
// }

////////////////////////

//Lista de productos
let productos = [
  { title: "Notebook", price: 500, thumbnail: "url", id: "1" },
  { title: "Tablet", price: 300, thumbnail: "url", id: "2" },
  { title: "Celular", price: 150, thumbnail: "url", id: "3" },
];

class Producto {
  constructor(id, nombre, descripcion, url, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.url = url;
    this.precio = precio;
    this.stock = stock;
  }
}



//Muestra la lista de productos
router.get("/productos", (req, res) => {
  const allProducts = [];
  for (const dato of productos) {
    allProducts.push(dato.title);
  }
  console.log(`Los productos son: ${allProducts}`);
  res.send(`Los productos son: ${allProducts}`);
});

//Trae producto por su id
router.get("/productos/:id", (req, res) => {
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

//Agrega un nuevo producto
router.post("/productos", (req, res) => {
  const { body } = req;
  productos.push(body);
  // const contadorId = [];
  // let ultimoId;
  // for (const dato of productos) {
  //   ultimoId = contadorId.push(dato.title);
  // }
  // ultimoId++;
  // console.log(contadorId.length);
  // console.log(ultimoId);

  console.log(productos);
  //console.log(req);
  console.log(body);
  res.send(`POST Ok. El producto asignado fue: . ID: `);
});

//Actualiza el precio de un producto
router.put("/productos/:id/:price", (req, res) => {
  const { params } = req;
  const byId = productos.find((producto) => producto.id == req.params.id);
  if (byId) {
    const elementIndex = productos.findIndex((obj) => obj.id == req.params.id);
    console.log("Antes: ", productos[elementIndex]);
    productos[elementIndex].price = req.params.price;
    console.log("despues: ", productos[elementIndex]);
    console.log(`El producto ${byId.title} corresponde al ID: ${req.params.id}. El nuevo precio es ${req.params.price}`);
    console.log(productos);
    res.send(`El producto ${byId.title} corresponde al ID: ${req.params.id}. El nuevo precio es ${req.params.price}`);
  } else {
    console.log(`No existe un producto con ese ID`);
    res.send(`No existe un producto con ese ID`);
  }
});

//Elimina un producto por ID
router.delete("/productos/:id", (req, res) => {
  const { params } = req;
  const deleteId = productos.find((producto) => producto.id == req.params.id);
  if (deleteId) {
    const deleteIndex = productos.findIndex((producto) => producto.id == req.params.id);
    productos.splice(deleteIndex, 1);
    console.log(`El producto ${deleteId.title} ha sido eliminado`);
    console.log(productos);
    res.send(`El producto ${deleteId.title} ha sido eliminado`);
  } else {
    console.log(`No existe un producto con ese ID`);
    res.send(`No existe un producto con ese ID`);
  }
});

//////////////////////// CARRITOS
//let carritos = [{ idCarrito, prodCarrito: [{ id, nombre, descripcion, foto, precio, stock }] }];
const carritosID = 0;

class Carrito {
  constructor(products, id) {
    this.products = products;
    this.id = id;
  }

  idCarrito = carritosID;
  products = [];

  async saveProduct(products) {
    this.products.push(products);
    await fs.promises.writeFile("productos.txt", JSON.stringify(this.products, null, 2));
    return `El producto fue asignado al ID: ${this.products.id}.`;
  }

  getById(id) {
    const byId = this.products.find((product) => product.id === id);
    if (byId) {
      console.log(`El producto ${byId.title} corresponde al ID: ${id}`);
    } else {
      console.log(`No existe un producto con ese ID`);
    }
  }

  getAll() {
    const allProducts = [];
    for (const dato of this.products) {
      allProducts.push(dato.title);
    }
    console.log(`Los archivos presentes son: ${allProducts}`);
  }

  async deleteById(id) {
    try {
      const delId = this.products.find((producto) => producto.id === id);
      await fs.promises.readFile("productos.txt", "utf-8");
      const deleteIndex = this.products.findIndex((producto) => producto.id == id);
      this.products.splice(deleteIndex, 1);
      await fs.promises.writeFile("productos.txt", JSON.stringify(this.products, null, 2));
      console.log(`El producto ${delId.title} ha sido eliminado`);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteAll() {
    try {
      this.products = [];
      await fs.promises.writeFile("productos.txt", JSON.stringify(this.products, null, 2));
      console.log("Se han eliminado todos los productos");
    } catch (err) {
      console.log(err);
    }
  }
}

//Crea un carrito y devuelve su id
router.post("/carritos", (req, res) => {
  const nuevoCarrito = new Carrito();
  console.log(`Creaste un carrito. Tu carrito es el ID: ${allProducts}`);
  res.send(`Creaste un carrito. Tu carrito es el ID: ${allProducts}`);
});

//Agrega productos al carrito
router.post("/carritos/:id/productos", (req, res) => {
  res.send(`No existe un producto con ese ID`);
});

//Permite listar los productos guardados en el carrito
router.get("/carritos/:id/productos", (req, res) => {
  res.send(`POST Ok. El producto asignado fue: . ID: `);
});

//Elimina un producto del carrito por su ID de carrito y ID de producto.
router.delete("/carritos/:id/productos/:id_prod", (req, res) => {
  res.send(`No existe un producto con ese ID`);
});

//Vacia el carrito
router.delete("/carritos/:id", (req, res) => {
  const botonVaciar = document.getElementById("boton-vaciar");
  botonVaciar.addEventListener("click", (e) => {
    if (inputMensaje.value && inputAutor.value) {
      const mensaje = {
        autor: inputAutor.value,
        texto: inputMensaje.value,
      };
      socket.emit("nuevoMensaje", mensaje);
      inputMensaje.value = ""; //Limpia el contenido del mensaje luego de enviar un mensaje
    } else {
      alert("Ingrese un autor y un mensaje");
    }
  });
  res.send(`El carrito ID:x fue vaciado`);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
