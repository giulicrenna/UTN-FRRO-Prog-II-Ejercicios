/*Juego de Piedra, Papel o Tijera
Usa switch para determinar el ganador y un bucle (while o do-while) para
permitir múltiples rondas hasta que el usuario decida salir, sin utilizar listas*/

const prompt = require('prompt-sync')();

let jugar = true;
let opciones = ['piedra', 'papel', 'tijera'];

while (jugar) {
    console.log("Elige una opción: piedra, papel o tijera (o 'salir' para terminar): ");
    let usuario = prompt().toLowerCase();

    if (usuario === 'salir') {
        jugar = false;
        console.log("Gracias por jugar!");
        break;
    }

    if (!opciones.includes(usuario)) {
        console.log("Opción inválida. Intenta de nuevo.");
        continue;
    }

    let computadora = opciones[Math.floor(Math.random() * 3)];
    console.log("La computadora eligió:", computadora);

    switch (usuario) {
        case 'piedra':
            if (computadora === 'tijera') {
                console.log("Ganaste! Piedra aplasta tijera.");
            } else if (computadora === 'papel') {
                console.log("Perdiste! Papel cubre piedra.");
            } else {
                console.log("Empate! Ambos eligieron piedra.");
            }
            break;
        case 'papel':
            if (computadora === 'piedra') {
                console.log("Ganaste! Papel cubre piedra.");
            } else if (computadora === 'tijera') {
                console.log("Perdiste! Tijera corta papel.");
            } else {
                console.log("Empate! Ambos eligieron papel.");
            }
            break;
        case 'tijera':
            if (computadora === 'papel') {
                console.log("Ganaste! Tijera corta papel.");
            } else if (computadora === 'piedra') {
                console.log("Perdiste! Piedra aplasta tijera.");
            } else {
                console.log("Empate! Ambos eligieron tijera.");
            }
            break;
    }
}



