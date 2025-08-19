/*Crear una función llamada doble que reciba un número como parámetro y devuelva su
doble.
Desde el programa principal, pedir un número al usuario y mostrar el resultado usando
la función.
*/

const prompt = require('prompt-sync')();

function doble(numero) {
    return numero * 2;
}

let numero = parseInt(prompt("Ingrese un número: "));
let resultado = doble(numero);
console.log("El doble de", numero, "es", resultado);
