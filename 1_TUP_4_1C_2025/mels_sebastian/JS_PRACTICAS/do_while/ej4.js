// Mostrar un menú con opciones hasta que el usuario elija salir (opción 3). Mostrar qué opción eligió.

const prompt = require('prompt-sync')();

let opcion;
do {
    console.log("Menú:");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Salir");
    opcion = parseInt(prompt("Elija una opción: "), 10);

    switch (opcion) {
        case 1:
            console.log("Usted eligió la Opción 1.");
            break;
        case 2:
            console.log("Usted eligió la Opción 2.");
            break;
        case 3:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
    }
} while (opcion !== 3);