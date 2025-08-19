/*Dado el string "Programación en JavaScript", usa métodos de string para:
● Convertirlo a mayúsculas
● Extraer la palabra "JavaScript"
● Reemplazar "JavaScript" por "Python"
● Verificar si contiene la palabra "Programación"*/

let str = "Programación en JavaScript";
console.log(str.toUpperCase()); // Muestra "PROGRAMACIÓN EN JAVASCRIPT"
console.log(str.substring(13, 23)); // Muestra "JavaScript"
console.log(str.replace("JavaScript", "Python")); // Muestra "Programación en Python"
console.log(str.includes("Programación")); // Muestra true
console.log(str.indexOf("Programación") !== -1); // Otra forma de verificar si contiene la palabra "Programación"
console.log(str.startsWith("Programación")); // Otra forma de verificar si empieza con la palabra "Programación"
console.log(str.endsWith("JavaScript")); // Otra forma de verificar si termina con la palabra "JavaScript"
console.log(str.lastIndexOf("JavaScript") !== -1); // Otra forma de verificar si contiene la palabra "JavaScript"
console.log(str.search("JavaScript") !== -1); // Otra forma de verificar si contiene la palabra "JavaScript"
console.log(str.match(/JavaScript/) !== null); // Otra forma de verificar si contiene la palabra "JavaScript"
console.log(str.split(" ")); // Muestra un array con las palabras del string
console.log(str.split(" ")[1]); // Muestra la segunda palabra del string
console.log(str.split(" ")[2]); // Muestra la tercera palabra del string
