const express = require("express");
const { Router } = express; //Extrae la clase Router para poder utilizarla
const routerBicicletas = new Router();
//Router es una funcion que devuelve un objeto tipo router, puede usarse con new o sin new

routerBicicletas.get("/mtb", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "get" Bicicletas' });
});

routerBicicletas.post("/", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "post" Biciletas' });
});

//module: representa al archivo que estamos mirando
//exports: es un objeto donde se pueden guardar cosas, y lo que se ponga dentro de exports va a ser lo que se pueda usar desde afuera de este archivo, importandolo desde otro archivo. Si es una sola cosa, no hace falta poner llaves.

module.exports = routerBicicletas;
