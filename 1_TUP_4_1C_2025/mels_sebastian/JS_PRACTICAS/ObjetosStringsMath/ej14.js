/*indexOf y lastIndexOf
Dado el string "banana", usa estos métodos para encontrar las posiciones de las
letras "a" y muestra los resultados.*/

let str = "banana";
console.log(str.indexOf("a")); // Muestra la posición de la primera "a"
console.log(str.lastIndexOf("a")); // Muestra la posición de la última "a"

// mostrar las posiciones de todas las "a"
const posiciones = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
        posiciones.push(i);
    }
}

console.log(`Todas las 'a' en posiciones: ${posiciones.join(", ")}`); 
