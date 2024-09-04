function esPrimo (num) {
    for(let i = 2; i <= num-1; i++){
        if (num % i == 0){
            console.log("No es primo");
            return false;
        }
    }
    console.log ("es primo");
    return true; 
}