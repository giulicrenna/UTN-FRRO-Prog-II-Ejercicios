// Pedir un número positivo al usuario. Repetir hasta que lo ingrese correctamente

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número positivo: "));

while (numero <= 0) {
    console.log("El número ingresado no es positivo. Intente nuevamente.");
    numero = parseInt(prompt("Ingrese un número positivo: "));
}
console.log("Número positivo ingresado:", numero);