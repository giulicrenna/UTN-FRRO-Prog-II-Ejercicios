/*Validación de edad
Crear una función esMayorDeEdad que reciba una edad y devuelva true si es mayor o
igual a 18, o false en caso contrario.
Desde el programa principal, pedir una edad y mostrar el mensaje correspondiente
usando esa función.*/

const prompt = require('prompt-sync')();

function esMayorDeEdad(edad) {
    return edad >= 18;
}

let edad = parseInt(prompt("Ingrese su edad: "));
if (isNaN(edad)) {
    console.log("Por favor, ingrese un número válido para la edad.");
}
else {
    if (esMayorDeEdad(edad)) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}
