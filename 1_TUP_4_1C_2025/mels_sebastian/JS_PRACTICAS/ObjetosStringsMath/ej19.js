/*Escribe una función que tome un string y devuelva un nuevo string con las palabras
en orden inverso ("Hola mundo" → "mundo Hola").*/

function invertirPalabras(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(invertirPalabras("Hola mundo")); // "mundo Hola"
