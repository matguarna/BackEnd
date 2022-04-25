const express = require("express");
// app.use(express.json());
const multer = require("multer");

//Inicializamos express
const app = express();

//Middleware de express para interpretar formularios
const middlewareParaFormularios = express.urlencoded({ extended: true });
app.use(middlewareParaFormularios);
app.use(express.static("public"));

//Configuracion 2
//Se configura el tipo de almacenamiento que se va a utilizar para guardar las imagenes que llegan en las peticiones.
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads");
  },
  filename: function (req, file, callback) {
    //const nombreFinal = `${Date.now()} -foto-${file.originalname}`;
    callback(null, file.originalname);
  },
});

//multer como funcion, es ejecutada con el almacenamiento "storage" y va a devolver un objeto. Con el objeto "upload" creamos le middleware
const upload = multer({ storage });

const middlewareDeUnArchivo = upload.single("myFile"); //Extrae 1 archivo, espera a que venga un unico archivo en la peticion y lo extrae. "myFile" es el nombre del adjunto, se pone por seguridad para poder leerlo luego con ese nombre.
const middlewareDeVariosArchivos = upload.array("myFiles"); //Sirve para recibir varios archivos. Busca un adjunto con formato de array. Lee varios documentos
//const middlewareDeArchivos = upload.any(); //Es mas flexible, permite definir cosas de manera mas generica.

/*------------------------------------------*/
app.post("/uploadfile", middlewareDeUnArchivo, (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
  console.log("Se subio 1 archivo");
});

/*------------------------------------------*/
app.post("/uploadfiles", middlewareDeVariosArchivos, (req, res, next) => {
  const files = req.files;
  if (!files || files.length == 0) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
  console.log("Se subieron varios archivo");
});

//--------------Server Listen----------------//
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
