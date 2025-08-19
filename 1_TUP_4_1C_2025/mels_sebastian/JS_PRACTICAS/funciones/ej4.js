/*Crear una función llamada saludoPersonalizado que reciba el nombre de una persona
y muestre un mensaje como:
"Hola, Juan, ¿cómo estás hoy?"
Desde el programa principal, pedir el nombre al usuario y llamar a la función.*/

const prompt = require('prompt-sync')();

function saludoPersonalizado(nombre) {
    console.log(`Hola, ${nombre}, ¿cómo estás hoy?`);
}

let nombre = prompt("Ingrese su nombre: ");
saludoPersonalizado(nombre);
