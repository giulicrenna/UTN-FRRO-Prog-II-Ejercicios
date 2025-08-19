// Mostrar un menú de opciones (1. Saludo, 2. Despedida, 3. Ayuda) y ejecutar la opción elegida

const prompt = require('prompt-sync')();

console.log("Menú de opciones:");
console.log("1. Saludo");   
console.log("2. Despedida");
console.log("3. Ayuda");
let opc = parseInt(prompt("Opción: "));

switch (opc) {
    case 1:
        console.log("¡Hola! ¿Cómo estás?");
        break;
    case 2:
        console.log("¡Hasta luego! Que tengas un buen día.");
        break;
    case 3:
        console.log("Ayuda: Seleccione una opción del menú para interactuar.");
        break;
    default:
        console.log("Opción inválida. Por favor, seleccione una opción del 1 al 3.");
}