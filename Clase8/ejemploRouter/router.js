const express = require("express");
const app = express(); //Se utiliza express como funcion para crear el servidor.

//const { Router } = express; //Igual a la opcion de abajo
//const Router = express.Router;
//Estas lineas ya no se necesitarian en este archivo porque se utilizan en los routers de routerAutos y routerBicicletas

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routerAutos = require("./routers/routerAutos.js");
const routerBicicletas = require("./routers/routerBicicletas.js");

app.use("/api/autos", routerAutos);
app.use("/api/bicicletas", routerBicicletas);

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

//CRUD
/*
create  : crear         ==> post
read    : leer          ==> get
update  : actualizar    ==> put 
delete  : borrar        ==> delete
*/
