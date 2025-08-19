/*Adivina el número
Generar un número aleatorio entre 1 y 10 y pedir al usuario que lo adivine. Informar si
acertó o no, y permitir seguir intentando hasta que lo adivine. Mostrar cuántos intentos
usó.*/

const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
let intento = 0;
let adivinado = false;

let numeroUsuario;
while (!adivinado) {
    numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 10): "));
    intento++;

    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
        console.log(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intento} intentos.`);
    } 
    else if (numeroUsuario < numeroAleatorio) {
        console.log("El número es mayor. Intenta nuevamente.");
    } 
    else {
        console.log("El número es menor. Intenta nuevamente.");
    }
}