function compilar(plantilla, contexto) {
  //   const separados = plantilla.split("%");
  //   console.log(separados);

  return `<h1>hola, me llamo ${contexto.nombre}</h1>`;
}

module.exports = {
  compilar,
};
