// console.error('Algo salió mal');
// console.group('Conversación:');
// console.warn('Algo salió mal');

// var tabla = [
//     {
//         a: 1,
//         b: 'Z'
//     },
//     {
//         a: 2,
//         b: 'Otra'
//     }
// ];

// console.table(tabla);

// console.groupEnd('Conversación:');

// console.log('Adios');

function function1() {
    console.group('function1');
    console.log('Esto es de la función 1');
    console.log('Esto también');
    function2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('function1');
}
function function2() {
    console.group('function2');
    console.log('Ahora estamos en la función 2');
    console.groupEnd('function2');
}

console.log('Empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');