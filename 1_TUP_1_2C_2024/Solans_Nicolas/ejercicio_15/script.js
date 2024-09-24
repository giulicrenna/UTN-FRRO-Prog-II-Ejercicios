// ### 15. **Suma de dígitos de un número**
// Escribe una función que reciba un número y devuelva la suma de sus dígitos. Hazlo sin convertir el número a una cadena.

function sumaDigitos(numero){
    var suma = 0

    while(numero){
        suma += numero % 10;
        numero = Math.floor(numero / 10);
    }
    return suma
}

console.log(sumaDigitos(2340));
