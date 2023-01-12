function hola(nombre, miCallback) {
  //console.log('Hola soy una funcion asincrona');
  setTimeout(function () {
    console.log("Hola", nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios", nombre);
    otroCallback();
  }, 2500);
}

console.log("Iniciando proceso...");
hola("Armando", function (nombre) {
  adios(nombre, function () {
    console.log("Terminando proceso...");
  });
});

// hola("Armando", function () {});
// adios("Armando", function () {});