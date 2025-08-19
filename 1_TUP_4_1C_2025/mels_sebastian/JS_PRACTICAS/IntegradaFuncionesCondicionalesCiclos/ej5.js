/*: Contador de vocales
Crear una función contarVocales que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Pista: recorrer el texto letra por letra y usar condicionales.
(Los métodos de strings los veremos más adelante, pero se puede hacer con un bucle.)*/

const prompt = require('prompt-sync')();

function contarVocales(texto) {
    let contador = 0;
    const vocales = "aeiouAEIOU"; // Incluye mayúsculas y minúsculas

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

let texto = prompt("Ingrese una cadena de texto: ");
let cantidadVocales = contarVocales(texto);
console.log(`La cantidad de vocales en "${texto}" es: ${cantidadVocales}`);
