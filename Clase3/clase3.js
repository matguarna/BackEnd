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

//Funcion de primer orden
function mostrarMuchasVeces(cantVeces, funcionX) {
  for (let i = 0; i < cantVeces; i++) {
    funcionX(); //funcion que se ejecutará
  }
}

function mostrarLaFecha() {
  console.log(Date.now());
}
//mostrarLaFecha();
mostrarMuchasVeces(5, mostrarLaFecha);

//Funcion con argumentos/parametros
function ejMuchasVeces(funcionXX, cantidadVeces, argumentos) {
  for (let i = 0; i < cantidadVeces; i++) {
    funcionXX(argumentos);
  }
}
ejMuchasVeces(
  function (n) {
    console.log(n + 1);
  },
  3,
  5
);

//Iterar objetos
function ejParaCadaArg(fn, vals) {
  for (const val of vals) {
    fn(val);
  }
}
ejParaCadaArg(console.log, [1, 2, 3, 4, 5]);

for (let i = 0; i < 3; i++) {
  console.log(i);
}

//FOR OF
const col = [1, 2, 3, 4, 5];
for (const num of col) {
  console.log(num + 1);
}

//FOR IN
const col2 = {
  [0]: "a",
  [1]: "b",
  [2]: "c",
};

const diccionario = { nombre: "matias", apellido: "guarna", rol: "alumno" };
for (const cosa in diccionario) {
  console.log(cosa); //Imprime nombre, apellido y rol (las claves)
}

console.log(Object.keys(diccionario));
console.log(Object.values(diccionario));
console.log(Object.entries(diccionario));
console.table(Object.entries(diccionario));

for (const valor of Object.values(diccionario)) {
  console.log(valor);
}

for (const par of Object.entries(diccionario)) {
  console.log(par);
}

for (const [clave, valor] of Object.entries(diccionario)) {
  console.log(`Clave: ${clave}. Valor: ${valor}`);
}

//Otro ej para extraer un dato o datos de diccionario
const { nombre, apellido } = diccionario;
console.log(nombre, apellido);

//Ej declaracion de un array
const nums = [1, 2, 3];
nums[20]; //Indica que nums tiene 20 posiciones
nums[6] = "HOLA"; //Le da el valor HOLA en la posicion 6
console.log(nums);
console.log(nums.length); //Imprime 7

//Desestructuracion de un array
const letras = ["a", "b", "c"];
const [primeraLetra, segundaLetra, terceraLetra, cuartaLetra] = letras;

console.log(primeraLetra);//a
console.log(segundaLetra);//b
console.log(terceraLetra);//c
console.log(cuartaLetra); //Indefinido porque no existe
console.log(letras[0]); //Imprime "a" que es la posicion 0 del array

//Callbacks
function hacerAlgotresveces(algo) {
  algo();
  algo();
  algo();
  //"algo" es el callback de la funcion "hacerAlgotresveces"
}
hacerAlgotresveces(() => {
  console.log("hola");
});

//Promesas
