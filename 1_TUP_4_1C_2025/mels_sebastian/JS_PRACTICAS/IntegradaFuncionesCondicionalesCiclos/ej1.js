/* Contador de números pares
Crear una función contarPares que reciba dos números enteros (inicio y fin) y
devuelva cuántos números pares hay en ese rango.
Llamar a la función desde el programa principal y mostrar el resultado.*/

const prompt = require('prompt-sync')();

function contarPares(inicio, fin) {
    let contador = 0;
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

let inicio = parseInt(prompt("Ingrese el número de inicio: "));
let fin = parseInt(prompt("Ingrese el número de fin: "));

let cantidadPares = contarPares(inicio, fin);
console.log(`La cantidad de números pares entre ${inicio} y ${fin} es: ${cantidadPares}`);

