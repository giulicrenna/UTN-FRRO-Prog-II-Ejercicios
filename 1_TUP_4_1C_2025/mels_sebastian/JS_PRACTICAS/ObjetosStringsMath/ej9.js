/*Genera un número aleatorio entre 1 y 100 y redondéalo al entero más cercano.
Muestra el resultado en consola.*/


const numeroOriginal = Math.random() * 100; 
console.log("Número original (con decimales):", numeroOriginal);

const numeroRedondeado = Math.round(numeroOriginal);
console.log("Número redondeado:", numeroRedondeado);
