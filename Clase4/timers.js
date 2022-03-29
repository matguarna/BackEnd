//Luego del tiempo dado (1000 = 1 segundo), realiza una unica vez la funcion recibida
let i = 0;
setTimeout(() => console.log(i), 1000);

//Realiza la funcion reiteradas veces cada 1 segundo
//setInterval(() => console.log(i++), 1000);

const timer = setInterval(() => {
  console.log(i++);
  if (i > 10) {
    clearInterval(timer);
  }
}, 500);


