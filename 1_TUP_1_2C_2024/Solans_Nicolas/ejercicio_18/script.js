// ### 18. **Cadena inversa**
// Escribe una función que reciba una cadena de texto y la devuelva invertida sin usar los métodos `reverse` ni `split`.

function revertirCadena(str){
    let revertir = "";

    for(let i = str.length-1; i >= 0; i--){
        revertir += str[i];
    }

    return revertir
}

console.log(revertirCadena("Hola mundo bonito"));
