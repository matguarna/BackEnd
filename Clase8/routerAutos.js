const express = require("express");
const { Router } = express;
const routerAutos = new Router();

routerAutos.get("/corsa", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "get"' });
});

routerAutos.post("/", (req, res) => {
  res.json({ mensaje: 'recibí una petición con método "post"' });
});

module.exports = routerAutos;
