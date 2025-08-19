const prompt = require('prompt-sync')();

let jugar = true;

while (jugar) {
    console.log("Elige una opción: piedra, papel o tijera (o 'salir' para terminar): ");
    let usuario = prompt().toLowerCase();

    if (usuario === 'salir') {
        jugar = false;
        console.log("Gracias por jugar!");
        break;
    }

    if (usuario !== 'piedra' && usuario !== 'papel' && usuario !== 'tijera') {
        console.log("Opción inválida. Intenta de nuevo.");
        continue;
    }

    let numeroAleatorio = Math.floor(Math.random() * 3);
    let computadora = '';
    if (numeroAleatorio === 0) {
        computadora = 'piedra';
    } else if (numeroAleatorio === 1) {
        computadora = 'papel';
    } else {
        computadora = 'tijera';
    }
    console.log("La computadora eligió:", computadora);

    if (usuario === computadora) {
        console.log("Empate!");
    } else if (
        (usuario === 'piedra' && computadora === 'tijera') ||
        (usuario === 'papel' && computadora === 'piedra') ||
        (usuario === 'tijera' && computadora === 'papel')
    ) {
        console.log(`Ganaste! ${usuario} vence a ${computadora}.`);
    } else {
        console.log(`Perdiste! ${computadora} vence a ${usuario}.`);
    }
}