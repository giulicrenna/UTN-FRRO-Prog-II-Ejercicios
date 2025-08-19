/*Convierte la función constructora del ejercicio anterior en una clase Producto con
los mismos parámetros y añade un método info() que devuelva un string con la
información del producto*/

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    info() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Cantidad: ${this.cantidad}`;
    }
}

const producto1 = new Producto("Laptop", 1000, 5);
const producto2 = new Producto("Teléfono", 500, 10);

console.log(producto1.info()); // "Nombre: Laptop, Precio: 1000, Cantidad: 5"
console.log(producto2.info()); // "Nombre: Teléfono, Precio: 500, Cantidad: 10"
