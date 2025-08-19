/*Dados dos strings "Hola" y "Mundo", concaténalos de tres formas diferentes: usando
el operador +, usando el método concat() y usando template strings.*/

let str1 = "Hola";
let str2 = "Mundo"; 

let concatenado1 = str1 + " " + str2; // Usando el operador +
let concatenado2 = str1.concat(" ", str2); // Usando el método concat() 
let concatenado3 = `${str1} ${str2}`; // Usando template strings

console.log(concatenado1); // Muestra "Hola Mundo"
console.log(concatenado2); // Muestra "Hola Mundo"
console.log(concatenado3); // Muestra "Hola Mundo"


