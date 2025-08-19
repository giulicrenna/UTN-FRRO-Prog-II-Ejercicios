// Pedir al usuario un número y mostrar su tabla de multiplicar del 1 al 10.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));
let tabla = "";
for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}\n`;
}
console.log(tabla);
