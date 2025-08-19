// Pedir números al usuario y sumarlos hasta que ingrese 0.

const prompt = require('prompt-sync')();

let suma = 0;
let numero = parseInt(prompt("Ingrese un número (0 para salir): "));

while (numero !== 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese un número (0 para salir): "));
}
console.log("La suma de los números ingresados es:", suma);