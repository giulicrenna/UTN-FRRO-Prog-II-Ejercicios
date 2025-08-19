// Pedir al usuario que ingrese la contraseña hasta que sea correcta.

const prompt = require('prompt-sync')();

let password = "1234";
let userInput = prompt("Ingrese la contraseña:", { echo: '*' });   

while (userInput !== password) {
    console.log("Contraseña incorrecta. Intente nuevamente.", { echo: '*' });
    userInput = prompt("Ingrese la contraseña:");
}
console.log("Contraseña correcta. Acceso concedido.");
