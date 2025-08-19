/* Uso de charAt y substring
Dado el string "Desarrollo Web", escribe código que:
● Muestre el cuarto carácter
● Extraiga la palabra "Web"
● Verifique si el string comienza con "Des"*/

let str = "Desarrollo Web";
console.log(str.charAt(3)); // Muestra el cuarto carácter
console.log(str.substring(3, 6)); // Extrae la palabra "Des"
console.log(str.substring(13, 16)); // Extrae la palabra "Web"
console.log(str.startsWith("Des")); // Verifica si el string comienza con "Des"
console.log(str.indexOf("Des") === 0); // Otra forma de verificar si comienza con "Des"
console.log(str.slice(0, 3)); // Otra forma de extraer la palabra "Des"
console.log(str.slice(0, 3) === "Des"); // Otra forma de verificar si comienza con "Des"
console.log(str.slice(0, 3) === str.substring(0, 3)); // Otra forma de verificar si comienza con "Des"
console.log(str.slice(0, 3) === str.substr(0, 3)); // Otra forma de verificar si comienza con "Des"
