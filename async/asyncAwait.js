async function hola(nombre) {
    return new Promise(function(resolve, reject) {
    setTimeout(function () {
      console.log("Hola", nombre);
      resolve('Armando');
    }, 1500);
    });
  }
  
  async function hablar(nombre) {
    return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
       resolve(nombre);
       //reject("Hay un error");
    }, 1000);
    });
  }
  
  async function adios(nombre) {
    return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
    });
  }
async function main(){
    let nombre = await hola('Armando');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Terminado el proceso");

}

console.log("Iniciando proceso...");
main();
console.log("Va a ser la segunda instrucción");