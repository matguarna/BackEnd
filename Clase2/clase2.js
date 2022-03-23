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

//Crear un multiplicador
function crearMultiplicador(multip) {
  return function (n) {
    return multip * n;
  };
}

//El parametro dentro de crearMultiplicador es el numero por el cual multiplica
const doble = crearMultiplicador(2);
//El parametro que se le pasa dentro es el numero a multiplicar
imprimir(doble(3));
const triple = crearMultiplicador(3);
const cuadruple = crearMultiplicador(4);
imprimir(doble(10));
imprimir(triple(10));
imprimir(cuadruple(10));

//Ej de declarar funciones
function mostrarPalabra(p) {
  console.log(p);
}
mostrarPalabra("palabrita");

//IIFE = Inmediately Invoke Function Expression
(function mostrarPalabra2(p) {
  console.log(p);
})("chau");

//Closure ejemplo
function crearGritarNombre(nombre) {
  const signos = "!!!";
  return function () {
    console.log(`${nombre}${signos}`);
  };
}
const gritarMatias = crearGritarNombre("matias");
gritarMatias();

//Clases
class Cliente {
  constructor(nombre, fechaNacimiento, direccion) {
    this.nombre = nombre; //atributos de las instancias
    this.fechaNacimiento = fechaNacimiento; //atributos de las instancias
    this.direccion = direccion; //atributos de las instancias
  }
  //static es un atributo de la CLASE CLIENTE, no de las instancias
  static empresa = "CoderHouse"; //atributo de la CLASE

  verStringDePresentacion() {
    return `Presentacion > nombre: ${this.nombre}`;
  }
}
const cliente1 = new Cliente("Felipe", "20/01/1990", "Av. M Garcia 500");
imprimir(cliente1); //Imprime el objeto cliente1 claves y valores. Claves son nombre, fecha, direcc, y los valores son los valores dados en cliente1
imprimir(cliente1.nombre); //Imprime Felipe
imprimir(cliente1.verStringDePresentacion());
imprimir(cliente1.empresa); //indefinido, porque no es una caracteristica de cliente 1, sino de la clase en sí.
imprimir(Cliente.empresa); //CoderHouse
