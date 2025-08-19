/*Tabla de multiplicar
Crear una función mostrarTabla que reciba un número y muestre su tabla de
multiplicar del 1 al 10.
Desde el programa principal, pedir un número al usuario y mostrar su tabla usando la
función.
*/

const prompt = require('prompt-sync')();

function mostrarTabla(numero) {
    console.log(`La tabla de multiplicar de ${numero} es:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));
mostrarTabla(numero);
