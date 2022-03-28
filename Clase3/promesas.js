//Promesas
function dividir(dividendo, divisor) {
  if (divisor == 0) {
    throw new Error("No se puede dividir por 0");
  }
  return dividendo / divisor;
}
console.log(dividir(10, 2));
const resultado = dividir(4, 2);

//fetch es una operacion que se le pide al sistema operativo que haga por nosotros, osea, es algo que se conecta con los recursos de red.
fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then(function (res) {
    return res.json();
  })
  .then(function (obj) {
    console.log(obj);
  });

//await : Si queremos guardar el resultado en una variable podemos utilizar await, pero solo funciona en funciones async. Es bloqueante utilizar await porque espera a que se resuelva y luego sigue ejecutando la siguiente linea de codigo.
async function main() {
  const resultadoDePromesa = await fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then(function (res) {
      return res.json();
    })
    .then(function (obj) {
      console.log(obj);
    });
}
