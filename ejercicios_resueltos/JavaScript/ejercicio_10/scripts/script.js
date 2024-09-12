function esPrimo(numero){
    
    if (numero === 0 || numero === 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false;
        }
    }

    return true;
}

function encontrarPrimosEnRango(a, b){
    for(let i = a; i <= b; i++){
        if(esPrimo(i)){
            console.log(i);
        }
    }
}










