/*Tabla de multiplicar
Solicitar un número al usuario y mostrar su tabla de multiplicar del 1 al 10, usando un ciclo for.*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}