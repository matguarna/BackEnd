const express = require("express");

const app = express();

//CRUD
/*
create  : crear         ==> post
read    : leer          ==> get
update  : actualizar    ==> put 
delete  : borrar        ==> delete
*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", ({ query }, res) => {
  // const { query } = req // Descontracturamos req y le sacamos la query
  console.log(query);
  res.json({ mensaje: 'recibí una petición con método "get"' });
});

app.get("/:id", ({ params }, res) => {
  // const { params } = req  // Descontracturamos req y le sacamos el objeto params
  console.log(params);
  res.json({ mensaje: 'recibí una petición con método "get :id"' });
});

app.get("/frase/:frase", ({ params }, res) => {
  console.log(params);
  let frasesita = JSON.stringify(params.frase);
  res.json({ mensaje: `La frase recibida fue: ${frasesita}` });
});

app.post("/", ({ body }, res) => {
  // const { body } = req // Descontracturamos req y le sacamos el body
  console.log(body);
  res.json({ mensaje: 'recibí una petición con método "post"' });
});

app.put("/:id", ({ body, params }, res) => {
  // const { body, params } = req
  console.log(params, body);
  res.json({ mensaje: 'recibí una petición con método "put"', result: "ok", id: params.id, nuevo: body });
});

app.delete("/:id", ({ params }, res) => {
  //const { params } = req;
  console.log(params);
  res.json({ mensaje: 'recibí una petición con método "delete"', result: "ok", id: params.id });
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
