const express = require("express");
const { Router } = express;

const app = express();
const router = Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const arrayPersonas = [{ nombre: "juan", apellido: "perez", edad: "35" }];

router.get("/personas", (req, res) => {
  res.send(`get ok, ${JSON.stringify(arrayPersonas)}`);
});

router.post("/personas", (req, res) => {
  const { body } = req;
  arrayPersonas.push(body);
  res.send(`POST Ok \nBody: ${JSON.stringify(body)} \nArray: ${JSON.stringify(arrayPersonas)}`);
});

app.use("/api", router);

app.listen(8080);
