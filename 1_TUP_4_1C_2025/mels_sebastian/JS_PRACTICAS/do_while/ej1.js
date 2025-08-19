// Pedir al usuario que ingrese números hasta que ingrese un número mayor a 100. Mostrar cuántos intentos hizo.

const prompt = require('prompt-sync')();
let valor = 100;
let num; 
let intentos = 0;

do {
    intentos++;
    num = parseInt(prompt("Ingrese un numero: ")); 
    if (num <= 100) {
        console.log("El numero es menor a 100, intente nuevamente.");
    } else {
        console.log("El numero es mayor a 100, fin del programa.");
        console.log("Intentos realizados: " + intentos);
    }
} while (num <= valor);