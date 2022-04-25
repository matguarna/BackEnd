const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const handlebarsConfig = {
  extname: "hbs",
  defaultLayout: "index.hbs",
};
//hbs son las extensiones y van a ser utilizadas con el motor exphbs(handlebarsConfig)
app.engine("hbs", exphbs(handlebarsConfig));

//Definimos la carpeta donde estan las vistas
app.set("views", "./views");

//Le pasamos la ruta y el contexto/datos con los que vamos a rellenar la plantilla
app.get("/", (req, res) => {
  res.render("datos.hbs", {
    nombre: "matias",
    apellido: "guarna",
    edad: 28,
    email: "asd@asd.com",
    telefono: "12345678",
  });
});

app.listen(8080);
