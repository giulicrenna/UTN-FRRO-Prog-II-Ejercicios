function encontrarFaltante(array){
    let total = (array.length + 1) * (array.length + 2) / 2; // Suma ideal
    let sum = array.reduce((acc, val) => acc + val, 0); // Suma de los elemtos reales

    return total - sum; 
}

function encontrarFaltante2(array){
    let total = 0;
    let start = array[0];

    for(let i = 0; i < array.length + 1; i++){
        total += start;
        start++
    }

    let sum = array.reduce((acc, val) => acc + val, 0); // Suma de los elemtos reales

    return total - sum; 
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19];

let array2 = [50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69];

let res1 = encontrarFaltante(array1);

let res2 = encontrarFaltante2(array2);

console.log(res1);

console.log(res2);

/*
[1, 2, 3, 4, ..., 51, 52, 53, 54, 55, 57, 58, 59, 60]
*/

/*
[5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9] - [1, 2, 3, 4]
*/

/*
[1,2,3,5]

total = 15
sum = 11

return 15 - 11 = 4
*/