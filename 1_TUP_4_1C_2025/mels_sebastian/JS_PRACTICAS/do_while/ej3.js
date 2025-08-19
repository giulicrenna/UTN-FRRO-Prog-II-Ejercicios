// Pedir al usuario números positivos y acumularlos. Finalizar cuando se ingrese un número negativo y mostrar la suma total.

const prompt = require('prompt-sync')();
let suma = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número positivo (o un número negativo para finalizar):"));
    if (numero >= 0) {
        suma += numero;
    }
} while (numero >= 0);

console.log("La suma total es:", suma);

