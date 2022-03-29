const fs = require("fs");

//Funcion q permite escribir un archivo en mi sistema de archivos.
//Esta funcion es asincronica, porque no espera a que termine para seguir con la prox instruccion.

// fs.writeFile("prueba.txt", "probando...".repeat(100), () => {});
// fs.readFile("prueba.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

//writeFileSync es sincronico y bloqueante, espera a que termine para seguir
// fs.writeFileSync("prueba.txt", "probando...".repeat(100), () => {
//   if (err) {
//     console.log(err);
//     console.log("terminé sync");
//   } else {
//     fs.readFile("prueba.txt", "utf-8", (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//       console.log("terminé sync 2");
//     });
//   }
// });

//Misma operacion de arriba pero mas corta
try {
  fs.writeFileSync("prueba.txt", "probando...".repeat(100));
  console.log("terminé de escribir");
  const result = fs.readFileSync("prueba.txt", "utf-8");
  console.log("terminé de leer");
  console.log(result);
} catch (err) {
  console.log(err);
} finally {
  console.log("terminé finally"); //Se ejecuta siempre, independientemente de si se realizó la tarea o entró en el catch
}

console.log("terminé ultimo");

//PROMESAS. devuelven un resultado a futuro
const promesa = fs.writeFile("prueba.txt", "probando...".repeat(100));
promesa
  .then(() => {
    const promesa2 = fs.readFile("prueba.txt", "utf-8");
    return promesa2;
  })
  .then(() => {
    console.log("terminé promesa");
  });

//Otro ej
fs.writeFile("prueba.txt", "probando...".repeat(100))
  .then(() => {
    return fs.readFile("prueba.txt", "utf-8");
  })
  .then(() => {
    console.log("terminé ej 2");
  })
  .catch((err) => {
    console.log(err);
  });
