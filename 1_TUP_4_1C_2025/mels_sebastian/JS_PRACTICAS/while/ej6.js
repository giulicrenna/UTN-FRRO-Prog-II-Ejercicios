// Mostrar un menú de opciones hasta que el usuario elija "Salir"

const prompt = require('prompt-sync')();

let opcion = 0;

while (opcion !== 4) {
    console.log("Menú de opciones:");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Opción 3");
    console.log("4. Salir");

    opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {
        case 1:
            console.log("Has seleccionado la Opción 1.");
            break;
        case 2:
            console.log("Has seleccionado la Opción 2.");
            break;
        case 3:
            console.log("Has seleccionado la Opción 3.");
            break;
        case 4:
            console.log("Saliendo del menú...");
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
    }
}