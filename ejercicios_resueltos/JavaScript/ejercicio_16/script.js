function ordenarPorLongitud(array){
    return array.sort((a, b) => a.length - b.length);
}

var resultado = ordenarPorLongitud([
    "Hola Mundo",
    "UTN",
    "Programación I",
    "Luis Alberto Spinetta"
])

console.log(resultado);