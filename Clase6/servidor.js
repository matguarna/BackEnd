const http = require("http");

const server = http.createServer((peticion, respuesta) => {
  console.log("llegó un evento");
  //console.log(peticion);
  const { url: ruta } = peticion;
  switch (ruta) {
    case "/llegada":
      respuesta.end("Hola clientito");
      break;
    case "/salida":
      respuesta.end("Chau clientitooo");
      break;
    default:
      respuesta.end("ta bien");
      break;
  }
  //respuesta.end("<h1>hola cliente</h1>");
});

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor HTTP escuchando el puerto ${connectedServer.address().port}`);
});
