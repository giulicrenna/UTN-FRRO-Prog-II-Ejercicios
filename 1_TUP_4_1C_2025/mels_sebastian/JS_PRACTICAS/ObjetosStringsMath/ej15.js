/*Dado el número 7.8936, aplícale los diferentes métodos de redondeo (round, ceil,floor, trunc) y muestra los resultados.*/

let num = 7.8936;
console.log(Math.round(num)); // Redondeo al entero más cercano
console.log(Math.ceil(num)); // Redondeo hacia arriba
console.log(Math.floor(num)); // Redondeo hacia abajo
console.log(Math.trunc(num)); // Elimina la parte decimal sin redondear
console.log(Math.round(num * 100) / 100); // Redondeo a dos decimales
console.log(Math.ceil(num * 100) / 100); // Redondeo hacia arriba a dos decimales
console.log(Math.floor(num * 100) / 100); // Redondeo hacia abajo a dos decimales
console.log(Math.trunc(num * 100) / 100); // Elimina la parte decimal a dos decimales
console.log(num.toFixed(2)); // Redondeo a dos decimales como string
console.log(num.toPrecision(3)); // Redondeo a tres cifras significativas como string
console.log(num.toExponential(2)); // Notación científica con 2 decimales
console.log(num.toString()); // Convierte el número a string
console.log(num.toLocaleString("es-ES")); // Formato local (España)
console.log(num.toLocaleString("en-US")); // Formato local (EE.UU.)
