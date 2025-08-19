/*Crea una función constructora Producto que tome nombre, precio y cantidad. Luego
crea dos instancias y muestra sus propiedades.*/

const Producto = function(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

const producto1 = new Producto("Laptop", 1000, 5);  
const producto2 = new Producto("Teléfono", 500, 10);

console.log(`Nombre: ${producto1.nombre}, Precio: ${producto1.precio}, Cantidad: ${producto1.cantidad}`); 