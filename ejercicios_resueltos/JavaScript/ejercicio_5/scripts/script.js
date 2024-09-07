function contarVocales(texto){
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for(let cursor = 0; cursor < texto.length; cursor++){
        if(vocales.includes(texto[cursor])){
            contador++;
        }       
    }

    return contador;
}

let res = contarVocales("Hola Mundo");