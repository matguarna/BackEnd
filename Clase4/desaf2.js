const fs = require("fs");
const { randomUUID } = require("crypto");

class Contenedor {
  constructor(products) {
    this.products = products;
  }
  /** @type {Array.<{title: String, price: Number, thumbnail: String, id: String}>} */
  products = [];

  async saveProduct(products) {
    this.products.push(products);
    await fs.promises.writeFile("productos.txt", JSON.stringify(this.products));
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
    //const all = [this.products.title];
    const allProducts = [];
    for (const dato of this.products) {
      allProducts.push(dato.title);
    }
    console.log(`(getAll) Los archivos presentes son: ${allProducts}`);
  }

  deleteById(id) {
    const productIndex = this.products.findIndex((product) => product.id === id);
    console.log(productIndex);
    this.products.splice(productIndex, 1);
    console.log(``);
  }
  deleteAll() {
    this.products = [];
    console.log("(deleteAll) Se han eliminado todos los archivos");
  }
}

let idProduct1 = randomUUID();
let idProduct2 = randomUUID();
let idProduct3 = randomUUID();
let idProduct4 = randomUUID();

let productosTXT = [
  { title: "Notebook", price: 500, thumbnail: "url", id: idProduct1 },
  { title: "Tablet", price: 300, thumbnail: "url", id: idProduct2 },
  { title: "Celular", price: 150, thumbnail: "url", id: idProduct3 },
];

// async function guardarArchivo() {
//   try {
//     await fs.promises.writeFile("info.txt", JSON.stringify(archivos, null, 2));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.table(info);
//   }
// }
// guardarArchivo();

//let iphone = { title: "Iphone 13", price: 800, thumbnail: "url" };

const contenedorArchivos = new Contenedor(productosTXT);

//console.log(contenedorArchivos.products);
contenedorArchivos.saveProduct({ title: "Iphone", price: 800, thumbnail: "url", id: idProduct4 }); // ok
//console.log(contenedorArchivos.products);
contenedorArchivos.getAll(); // ok
contenedorArchivos.getById(idProduct1); //ok
contenedorArchivos.deleteById(idProduct1); //ok
contenedorArchivos.getById(idProduct1); // ok
