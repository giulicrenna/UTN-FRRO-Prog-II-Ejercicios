// Pedir dos números al usuario e indicar cuál es mayor, o si son iguales.

const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Escribe el primer número: '));
let numero2 = parseInt(prompt('Escribe el segundo número: '));


if (numero1 > numero2) {
    console.log('El primer número es mayor que el segundo número.');
}   
else if (numero1 < numero2) {
    console.log('El segundo número es mayor que el primer número.');
}
else {
    console.log('Ambos números son iguales.');
}
