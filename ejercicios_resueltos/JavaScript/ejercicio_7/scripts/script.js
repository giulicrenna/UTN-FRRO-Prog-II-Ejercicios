function factorial(num){
    let res = 1;

    for(let i = 1; i <= num; i++){
        res *= i;
    }

    return res;
}

function factorialRecursivo(num){
    if(num <= 0){
        console.log("La funcion no esta definida para los negativos.");
        return 0;
    }
    if(num == 1){
        return 1;
    }

    return num * factorialRecursivo(num-1);
}