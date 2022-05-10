//Cuenta las veces que se repite un caracter
let texto = "asdsadsa";
let caracter = "a";
let contador = 0;

texto.split("").forEach((e, index, array) => {
  //El split("") se necesita para crear un array y separar los caracteres
  console.log(e); //Imprime el primer caracter del string
  console.log(index); //Imprime la posicion de cada caracter
  console.log(array); //Imprime un array con cada caracter por separado

  if (e == caracter) {
    contador = contador + 1; //Tambien puede ser contador++ si suma 1
  }
});

console.log(`Hay ${contador} caracteres "${caracter}" en el string "${texto}"`);

//Cuenta las veces que se repite un caracter

let texto2 = [9, "b", 7, "asd", 8, 9, 9, 10, "q"];
let caracter2 = 9;
let contador2 = 0;

texto2.forEach((e) => {
  if (e == caracter2) {
    contador2++;
  }
});

console.log(`Hay ${contador2} caracteres "${caracter2}" en el array "${texto2}"`);
