// Solicitar una contraseña hasta que el usuario escriba la correcta ("secreta123"). Mostrar un mensaje de éxito.

const prompt = require('prompt-sync')();
const contraseña = "secreta123";
let pass; 

do {
    pass = prompt("Ingrese la contraseña: ", { echo: '*' }); 
    if (pass !== contraseña) {
        console.log("Contraseña incorrecta, intente nuevamente.");
    }
} while (pass !== contraseña); 

console.log("¡Contraseña correcta! Acceso concedido.");