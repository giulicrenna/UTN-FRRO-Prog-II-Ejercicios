// ### 16. **Ordenar un array de strings por longitud**
// Escribe una función que reciba un array de cadenas y las ordene por su longitud de forma ascendente.

function ordenarPorLongitud(array){
    return array.sort((a, b) => a.length - b.length);
}

console.log(ordenarPorLongitud(["Hola Mundo",
    "UTN",
    "Nicolas",
    "Programacion"
]));
