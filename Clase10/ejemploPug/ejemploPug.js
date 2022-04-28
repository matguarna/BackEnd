const express = require("express");

const app = express();

//Indicamos a express que views sera nuestro directorio de plantillas
app.set("views", "./views");
//Indicamos a express cual sera el motor de plantillas que va a usar
app.set("view engine", "pug");

app.get("/datos", (req, res) => {
  res.render("nivel.pug", req.query);
});

app.get("/layout", (res, req) => {
  res.render("layout.pug", { block: medidor });
});

app.listen(8080);

//localhost:8080/datos?min=5&nivel=15&max=20&titulo=<i>Medidor</i>
