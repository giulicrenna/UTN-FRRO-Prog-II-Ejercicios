// 2340
// 2 + 3 + 4 + 0 = 9

function sumarDigitos(num){
    let sum = 0;

    while(num){
        sum += num % 10;
        
        num =  Math.floor(num / 10);
    }

    return sum;
}

console.log(sumarDigitos(2340));