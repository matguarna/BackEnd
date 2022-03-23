class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    console.log(`La cantidad de mascotas es: ${this.mascotas.length}`);
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    const nameBooks = [];
    for (const dato of this.libros) {
      nameBooks.push(dato.nombre);
    }
    console.log(`Libros: ${nameBooks}`);
  }
}

const usuario1 = new Usuario("Matias", "Guarna", [], ["Michel"]);
usuario1.getFullName();
usuario1.addMascota("Octavio");
console.log(usuario1.mascotas);
usuario1.countMascotas();
usuario1.addBook("Moby Dick", "Herman Melville");
usuario1.addBook("IT", "Stephen King");
console.log(usuario1.libros);
usuario1.getBookNames();
