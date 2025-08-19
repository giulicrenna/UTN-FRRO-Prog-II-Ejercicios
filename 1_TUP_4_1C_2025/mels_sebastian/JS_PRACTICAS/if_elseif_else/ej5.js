// Pedir una contraseña al usuario y validar si coincide con una predefinida.

const prompt = require('prompt-sync')();

const contraseña = '1234';

const ingresa = prompt('Escribe contraseña: ', { echo: '*' });

if (ingresa === contraseña) {
    console.log('\nAcceso permitido.');
} 
else {
    console.log('\nAcceso denegado.');
}
