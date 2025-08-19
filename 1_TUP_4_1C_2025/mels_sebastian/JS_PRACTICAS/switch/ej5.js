// Ingresar una edad y mostrar la categoría (Niño/a, Adolescente, Adulto/a, Adulto/a mayor).

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));

switch (true) {
    case (edad >= 0 && edad <= 12):
        console.log("Niño/a");
        break;
    case (edad >= 13 && edad <= 17):
        console.log("Adolescente");
        break;
    case (edad >= 18 && edad <= 64):
        console.log("Adulto/a");
        break;
    case (edad >= 65):
        console.log("Adulto/a mayor");
        break;
    default:
        console.log("Edad inválida.");
}