//Declara funcion
function ppp(n) {
  return n + 1;
}
console.log(ppp(5));
//Asigna la funcion a una variable
const fun = ppp;
console.log(fun(10));

function crearSaludar() {
  return function (nombre) {
    console.log(`Hola, ` + nombre);
  };
}
const saludito = crearSaludar();
saludito("capo");
