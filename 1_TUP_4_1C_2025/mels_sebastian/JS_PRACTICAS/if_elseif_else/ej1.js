// Pedir al usuario su edad mediante prompt y mostrar un mensaje que indique si es mayor o menor de edad.

const prompt = require('prompt-sync')();

let edad = prompt("Ingrese su edad: ");
console.log("Hola, usted ingreso", edad);

if(edad >18){
    console.log("Usted es mayor de edad");
}
else{
    console.log("Usted es menor de edad")
}