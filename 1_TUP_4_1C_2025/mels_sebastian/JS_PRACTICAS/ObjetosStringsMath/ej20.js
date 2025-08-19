/*Crea una función que simule el lanzamiento de dos dados (números del 1 al 6) y
devuelva la suma de ambos valores.*/


function lanzarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
    const dado2 = Math.floor(Math.random() * 6) + 1; // Genera un número entre 1 y 6
    console.log("El dado 1 es: " + dado1); 
    console.log("El dado 2 es: " + dado2); 
    return dado1 + dado2;
}

console.log(lanzarDados()); 
