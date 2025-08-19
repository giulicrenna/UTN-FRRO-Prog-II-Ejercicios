/*Crear una función llamada calcularAreaRectangulo que reciba base y altura como
parámetros, y devuelva el área.
Desde el programa principal, pedir base y altura al usuario, y mostrar el resultado
usando la función.*/

const prompt = require('prompt-sync')();

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

let base = parseFloat(prompt("Ingrese la base del rectángulo: "));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));
let area = calcularAreaRectangulo(base, altura);
console.log("El área del rectángulo es:", area);