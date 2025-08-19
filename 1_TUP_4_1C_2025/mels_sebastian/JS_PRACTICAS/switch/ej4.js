// Pedir una operación matemática (sumar, restar, multiplicar, dividir) y dos números. Realizar la operación.

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = parseInt(prompt("Ingrese la operación (1- sumar, 2- restar, 3- multiplicar, 4- dividir): "));
switch (operacion) {
    case 1:
        console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
        break;
    case 2:
        console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
        break;
    case 3:
        console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`);
        break;
    case 4:
        if (num2 !== 0) {
            console.log(`La división de ${num1} entre ${num2} es: ${num1 / num2}`);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación inválida. Debe ser sumar, restar, multiplicar o dividir.");
}