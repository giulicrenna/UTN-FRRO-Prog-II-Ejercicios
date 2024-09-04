function factorial(num){
    let res = 1;

    for (let i = 1; i<= num; i++){
        res *=i;
    }

    return res;
}

function factorialrecursivo(num) {
    if(num == 1 ){
        return 1;
    }
    return num * factorialrecursivo(num-1);
}