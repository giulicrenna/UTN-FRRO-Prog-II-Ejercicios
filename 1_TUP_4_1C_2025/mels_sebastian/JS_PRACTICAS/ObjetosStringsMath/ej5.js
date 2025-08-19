/*Crea una variable con el string "JavaScript es divertido" y muestra en consola su
longitud. Luego muestra el último carácter del string sin hardcodear la posición.*/

const str = "JavaScript es divertido";
console.log(str.length); // Muestra la longitud del string
console.log(str[str.length - 1]); // Muestra el último carácter del string sin hardcodear la posición
console.log(str.charAt(str.length - 1)); // Otra forma de mostrar el último carácter
console.log(str.slice(-1)); // Otra forma de mostrar el último carácter
console.log(str[str.length - 2]); // Muestra el penúltimo carácter del string sin hardcodear la posición
console.log(str.charAt(str.length - 2)); // Otra forma de mostrar el penúltimo carácter
console.log(str.slice(-2, -1)); // Otra forma de mostrar el penúltimo carácter
console.log(str.slice(-2)); // Muestra los últimos 2 caracteres del string sin hardcodear la posición


