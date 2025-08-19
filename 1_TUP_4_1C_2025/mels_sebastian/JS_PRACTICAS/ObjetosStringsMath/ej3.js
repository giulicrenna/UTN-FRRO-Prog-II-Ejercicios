/*Añade un método presentarse() al objeto persona del ejercicio anterior que
devuelva un string con el formato: "Hola, soy [nombre], tengo [edad] años y vivo en
[ciudad]". Llama al método y muestra el resultado.*/


const persona = {
    nombre: "Sebastian",
    edad: 40,
    ciudad: "Rosario"
};

persona.presentarse = function() {
    return `Hola, soy ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}`;
}
console.log(persona.presentarse()); // Hola, soy Ana, tengo 25 años y vivo en Madrid