// Ingresar un número y clasificarlo como positivo, negativo o cero.

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Ingrese un numero: "))

if (num == 0) {
    console.log("El numero es cero")
}
else if (num > 0) {
    console.log("El numero es positivo")
} else {
    console.log("El numero es negativo")
}