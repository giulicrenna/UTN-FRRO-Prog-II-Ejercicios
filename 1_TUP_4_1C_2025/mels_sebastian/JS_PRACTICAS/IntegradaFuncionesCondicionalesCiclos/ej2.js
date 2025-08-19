/*Múltiplos de 3
Crear una función mostrarMultiplosDe3 que reciba un número tope y muestre por
consola todos los múltiplos de 3 desde 1 hasta ese número.
Luego, desde el programa principal, pedir el número al usuario y ejecutar la función.*/

const prompt = require('prompt-sync')();

function mostrarMultiplosDe3(tope) {
    for (let i = 1; i <= tope; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

let tope = parseInt(prompt("Ingrese el número tope: "));
mostrarMultiplosDe3(tope);
console.log(`Los múltiplos de 3 desde 1 hasta ${tope} son:`);
