const fs = require("fs");

class Contenedor {
  constructor(archivos, id) {
    this.archivos = archivos;
    this.id = id;
    id = 0;
  }
  guardar(obj) {
    this.archivos.push(obj);
    return id + 1;
  }
  getById(id) {
    const byId = [];
    for (const dato of this.archivos) {
      byId.push(dato.id);
    }
    console.log(`El id ${id} corresponde a: ${byId}`);
  }

  getAll() {
    const all = [this.archivos];
    console.log(`(getAll) Los archivos presentes son: ${all}`);
  }
  deleteById(id) {
    this.archivos.splice(id);
  }
  deleteAll() {
    this.archivos = [];
    console.log("(deleteAll) Se han eliminado todos los archivos");
  }
}

let productos = {title: "Notebook", price: 500, thumbnail: ""}
