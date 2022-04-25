// https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js

const fs = require("fs");

const motorDePlantillas = require("./motorDePlantillas");

const contexto = {
  nombre: "matias",
};

//Lee el archivo plantilla
const textoPlantilla = fs.readFileSync("Clase9/ejemploCrearPlantilla/index.plantilla", "utf-8");

const templateString = motorDePlantillas.compilar(textoPlantilla, contexto);
console.log(templateString);

//Crea un archivo index.html y lo escribe con los datos de templateString
fs.writeFileSync("Clase9/ejemploCrearPlantilla/index.html", templateString);

