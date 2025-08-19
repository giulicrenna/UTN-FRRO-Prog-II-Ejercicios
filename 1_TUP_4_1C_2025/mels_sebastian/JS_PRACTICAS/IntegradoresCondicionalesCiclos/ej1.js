/*Menú interactivo
Mostrar un menú al usuario (prompt) con 3 opciones:
1. Mostrar un saludo
2. Pedir nombre y mostrar un mensaje personalizado
3. Salir
El programa debe seguir mostrando el menú hasta que el usuario elija la opción 3*/

const prompt = require('prompt-sync')();
let opcion;

do {    
    console.log("Menú:");
    console.log("1. Mostrar un saludo");
    console.log("2. Pedir nombre y mostrar un mensaje personalizado");
    console.log("3. Salir");
    
    opcion = parseInt(prompt("Seleccione una opción (1-3): "));
    
    switch (opcion) {
        case 1:
            console.log("¡Hola! ¿Cómo estás?");
            break;
        case 2:
            const nombre = prompt("Ingrese su nombre: ");
            console.log(`¡Hola, ${nombre}! Bienvenido/a.`);
            break;
        case 3:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
    }
}while (opcion !== 3);
console.log("Programa finalizado.");