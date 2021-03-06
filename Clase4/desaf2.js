const fs = require("fs");
const { randomUUID } = require("crypto");

class Contenedor {
  constructor(products) {
    this.products = products;
  }

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

let idProduct1 = randomUUID();
let idProduct2 = randomUUID();
let idProduct3 = randomUUID();
let idProduct4 = randomUUID();

let productosTXT = [
  { title: "Notebook", price: 500, thumbnail: "url", id: idProduct1 },
  { title: "Tablet", price: 300, thumbnail: "url", id: idProduct2 },
  { title: "Celular", price: 150, thumbnail: "url", id: idProduct3 },
];

const contenedorArchivos = new Contenedor(productosTXT);

//console.log(contenedorArchivos.products);
contenedorArchivos.saveProduct({ title: "Iphone", price: 800, thumbnail: "url", id: idProduct4 }); // ok
//console.log(contenedorArchivos.products);
contenedorArchivos.getAll(); // ok
contenedorArchivos.getById(idProduct1); //ok
//contenedorArchivos.deleteById(idProduct1); //ok
//contenedorArchivos.getById(idProduct1); // ok
//contenedorArchivos.deleteAll(); //ok

