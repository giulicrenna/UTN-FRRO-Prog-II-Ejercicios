function revertirCadena(str){
    let revertida = '';

    for(let i = str.length -1; i >= 0; i--){
        revertida += str[i];
    }

    return revertida;
}

let str = 'Hola Mundo';
console.log(revertirCadena(str)); 