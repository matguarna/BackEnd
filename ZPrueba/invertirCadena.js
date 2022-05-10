//Metodo 1
const palabra = "JavaScript";
let reversa = "";

// i = 8; 8 >= 0; 8--
for (i = palabra.length - 1; i >= 0; i--) {
  reversa += palabra[i]; //El + adelante del = concatena el resultado en cada iteracion
}
console.log(reversa);

//Metodo 2

//split("") Separa cada caracter del array; reverse() posiciona al revez los caracteres; join("") junta todos los caracteres nuevamente
//split crea un nuevo array asi que es necesario crear una nueva variable.

let lenguaje = "JavaScript";
let lenguajeInvertido = lenguaje.split("").reverse().join("");
console.log(lenguajeInvertido);
