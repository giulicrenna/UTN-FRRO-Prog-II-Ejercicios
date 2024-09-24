// ### 20. **Buscar el valor máximo en un array bidimensional**
// Escribe una función que reciba un array bidimensional y devuelva el número más grande que contiene.

function valorMaximo(array){
    var arrAux = array.flat();

    return Math.max(...arrAux);
}

console.log(valorMaximo(
    [
        [1,3,6],
        [2,4,10],
        [0, 15, 7]
    ]
));
