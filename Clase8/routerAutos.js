const express = require("express");
const { Router } = express; //Extrae la clase Router para poder utilizarla
const routerAutos = new Router();
//Router es una funcion que devuelve un objeto tipo router, puede usarse con new o sin new

routerAutos.get("/corsa", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "get" corsa routerAutos' });
});

routerAutos.post("/", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "post" routerAutos' });
});

module.exports = routerAutos;
