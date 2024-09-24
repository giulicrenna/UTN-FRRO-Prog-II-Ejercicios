// ### 21. **Rotar un array N veces**
// Escribe una función que reciba un array y un número `n`, y que rote el array hacia la derecha `n` veces.

function rotarArray(array, n){
    n = n % array.length  //sacamos rotaciones redundantes.

    return array.slice(-n).concat(array.slice(0, -n));
}

let array = [0, 0, 1];
let rotaciones = 4

console.log(rotarArray(array, 4));
