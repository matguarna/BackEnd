const express = require("express");
const { Router } = express;
const routerBicicletas = new Router();

routerBicicletas.get("/corsa", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "get"' });
});

routerBicicletas.post("/", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "post"' });
});

module.exports = routerBicicletas;
