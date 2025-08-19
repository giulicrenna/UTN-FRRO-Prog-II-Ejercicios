/*Crea una función que reciba nombre y edad y devuelva un string usando template
strings con el formato: "Hola [nombre], tienes [edad] años y el próximo año tendrás
[edad+1] años".*/

function saludar(nombre, edad) {
    return `Hola ${nombre}, tienes ${edad} años y el próximo año tendrás ${edad + 1} años`;
}

console.log(saludar("Juan", 25)); // Muestra "Hola Juan, tienes 25 años y el próximo año tendrás 26 años"
console.log(saludar("María", 30)); // Muestra "Hola María, tienes 30 años y el próximo año tendrás 31 años"
console.log(saludar("Pedro", 40)); // Muestra "Hola Pedro, tienes 40 años y el próximo año tendrás 41 años"