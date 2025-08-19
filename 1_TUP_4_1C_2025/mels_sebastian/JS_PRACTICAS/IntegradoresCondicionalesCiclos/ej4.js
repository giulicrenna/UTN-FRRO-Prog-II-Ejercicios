/*Múltiplos dentro de un rango
Pedir dos números al usuario: un número base y un límite. Mostrar todos los múltiplos
del número base hasta llegar al límite (inclusive si corresponde). Ej: base = 3, límite =
10 → 3, 6, 9.*/

const prompt = require('prompt-sync')();

let base = parseInt(prompt("Ingrese un número base: "));
let limite = parseInt(prompt("Ingrese un límite: "));   

let i = base; 
while (i <= limite) {
    console.log(i);
    i += base; 
}
console.log("Fin de la lista de múltiplos.");