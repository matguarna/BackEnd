function imprimir(x) {
  console.log(x);
}

const edad = 35;
imprimir(edad);

const array = [1, 2, 3, 4, 5];

//Ejemplo de mutabilidad: le agrega un valor a una variable const
array.push(6);
imprimir(array);

//Otro ejemplo, agrega valores al diccionario
const diccionario = {
  nombre: "matias", //key: "value" =====> k,v
  apellido: "guarna",
  rol: "alumno",
};

//Podemos agregar un valor asi:
diccionario["pais"] = "argentina";

//Tambien puede hacerse asi:
diccionario.provincia = "Buenos Aires";
imprimir(diccionario);

//Funciones
const hacerAlgo = () => {
  let a = 1;
  imprimir(a);
};
hacerAlgo();

function sumar(sum1, sum2) {
  return sum1 + sum2;
}

let pruebaSuma = sumar(1, 2);
imprimir(pruebaSuma);

//Ej de declarar funciones
function mostrarPalabra(p) {
  console.log(p);
}
mostrarPalabra("palabrita");

//IIFE = Inmediately Invoke Function Expression
(function mostrarPalabra2(p) {
  console.log(p);
})("chau");
