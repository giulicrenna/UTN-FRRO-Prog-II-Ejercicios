/*Crear una función llamada esPar que reciba un número y devuelva true si es par y
false si no lo es.
Probar la función con diferentes valores.*/

const prompt = require('prompt-sync')();

function esPar(numero) {
    return numero % 2 === 0;
}

let numero = parseInt(prompt("Ingrese un número: "));
let resultado = esPar(numero);
console.log("El número", numero, "es par:", resultado);