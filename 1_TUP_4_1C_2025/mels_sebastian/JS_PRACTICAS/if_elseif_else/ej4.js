// Pedir al usuario el precio de un producto. Si cuesta más de $1000, aplicar un 10% de descuento. Mostrar el precio final.

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let descuento = 0.1; // 10% de descuento
if (precio > 1000) {
    let precioFinal = precio - (precio * descuento);
    console.log("El precio final con descuento es: $" + precioFinal.toFixed(2));
}
else {
    console.log("El precio final sin descuento es: $" + precio.toFixed(2));
}


