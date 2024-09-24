// ### 22. **Encontrar el número que falta en una secuencia**
// Dado un array de números en secuencia (puede haber uno faltante), escribe una función que encuentre el número que falta.

function encontrarFaltante(array) {
    let total = (array.length + 1) * (array.length + 2) / 2; //suma de cantidad de elementos del array
    let sum = array.reduce((acc, val) => acc + val, 0); //suma entre los valores del array

    return total - sum;
}

console.log(encontrarFaltante([1,2,3,5]));
