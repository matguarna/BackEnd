class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `Nombre: ${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
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

//libros: object []
//mascotas: string[]

const usuario1 = new Usuario("Matias", "Guarna", [], ["Michel"]);
usuario1.addMascota("Octavio"); //ok
console.log(usuario1.mascotas); //ok
console.log(usuario1.getFullName()); //ok
usuario1.addBook("Moby Dick", "Herman Melville"); //ok
usuario1.addBook("IT", "Stephen King"); //ok
console.log(usuario1.libros); //ok
usuario1.getBookNames(); // ok
