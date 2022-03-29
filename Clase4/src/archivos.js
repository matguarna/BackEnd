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

// try {
//   fs.writeFileSync("prueba.txt", "probando...".repeat(100));
//   console.log("terminé de escribir");
//   const result = fs.readFileSync("prueba.txt", "utf-8");
//   console.log("terminé de leer");
//   console.log(result);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("terminé finally"); //Se ejecuta siempre, independientemente de si se realizó la tarea o entró en el catch
// }

console.log("terminé ultimo");

//PROMESAS. devuelven un resultado a futuro
// const promesa = fs.writeFile("prueba.txt", "probando...".repeat(100));
// promesa
//   .then(() => {
//     const promesa2 = fs.readFile("prueba.txt", "utf-8");
//     return promesa2;
//   })
//   .then(() => {
//     console.log("terminé promesa");
//   });

//Otro ej
// fs.promises
//   .writeFile("prueba.txt", "probando...".repeat(10))
//   .then(() => {
//     return fs.promises.readFile("prueba.txt", "utf-8");
//   })
//   .then((datos) => {
//     console.log(datos);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Terminé finally");
//   });

//AWAIT hace que la promesa espere a que se resuelva antes de seguir con la proxima linea de codigo.
async function trabajarConArchivos() {
  try {
    await fs.promises.writeFile("prueba.txt", "probando...".repeat(10));
    const datos = await fs.promises.readFile("prueba.txt", "utf-8");
    console.log(datos);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Terminé finally async");
  }
}
trabajarConArchivos();

console.log(10 + 10);
