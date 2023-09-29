'use strict'

// Imprimir en pantalla
console.log('Hola mundo desde Node.js, esto se verá desde la terminal de comandos, ejecutado desde el servidor.');

// Realizar una operación básica
console.log(7*8);

// Al usar una instrucción de JS para front en backend, nos lanza un error en tiempo de ejecución
// console.log(window);

// Imprime en consola todo lo relacionado con el módulo GLOBAL
console.log(global)

// Funcion para imprimir cada segundo un mensaje
setInterval(() => {
    console.log('Hola NodeJS');
}, 1000);