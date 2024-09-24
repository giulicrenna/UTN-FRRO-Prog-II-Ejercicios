function promedio(arr){
    let sum = arr.reduce((a, b) => a + b);
    
    return sum / arr.length;
}

function promedioCrotoForm(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    
    return sum / arr.length;
}
