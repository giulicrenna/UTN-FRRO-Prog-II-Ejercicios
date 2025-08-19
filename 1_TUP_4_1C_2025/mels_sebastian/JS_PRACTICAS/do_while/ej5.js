// Solicitar un número entre 1 y 10 al usuario y validar la entrada. Si el número no es válido, volver a solicitarlo.
const prompt = require('prompt-sync')();

let numero;

do {
    numero = parseInt(prompt("Ingresa un número entre 1 y 10:"));
} while (isNaN(numero) || numero < 1 || numero > 10);

console.log("Número ingresado:", numero);