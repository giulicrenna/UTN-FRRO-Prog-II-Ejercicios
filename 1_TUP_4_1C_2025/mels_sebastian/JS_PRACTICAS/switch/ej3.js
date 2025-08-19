// Ingresar una nota del 1 al 10 e indicar la calificación correspondiente (Insuficiente, Regular, Bien, Muy bien, Excelente).

const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Ingrese una nota del 1 al 10: "));

switch (nota) {
    case 1:
    case 2:
    case 3:
        console.log("Insuficiente");
        break;
    case 4:
    case 5:
        console.log("Regular");
        break;
    case 6:
    case 7:
        console.log("Bien");
        break;
    case 8:
    case 9:
        console.log("Muy bien");
        break;
    case 10:
        console.log("Excelente");
        break;
    default:
        console.log("Nota inválida. Debe ser del 1 al 10.");
}