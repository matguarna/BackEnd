const { log } = require("console");
const fs = require("fs");

//object
const info = {
  contenidoString: "Hola soy el contenido",
  contenidoObj: { nombre: "Matias", apellido: "Guarna" },
  size: 50,
};

async function leerPackage() {
  try {
    await fs.promises.readFile("package.json", "utf-8");
  } catch (err) {
    console.log(err);
  } finally {
    console.log(info);
  }
}
leerPackage();

console.log(typeof info);

//JSON.stringify(info) convierte objeto a string
//console.log(JSON.stringify(info));

//Pasar de objeto a string
let unObjeto = { nombre: "matias", edad: 28 };
console.log(JSON.stringify(unObjeto));

//Pasar de string a objeto JSON.parse()
let unString = '{"nombre":"marian","edad":35}';
console.log(JSON.parse(unString));

async function guardarInfo() {
  try {
    await fs.promises.writeFile("info.txt", JSON.stringify(info, null, 2));
  } catch (err) {
    console.log(err);
  } finally {
    console.table(info);
  }
}
guardarInfo();
