function rotarArray(array, n){
    n = n % array.length; // Sacamos rotaciones redundantes.

    return array.slice(-n).concat(array.slice(0, -n));
}

let array = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rotaciones = 5;
let res = rotarArray(array, rotaciones);

console.log(res);


/*
4 % 3 = 0

[0, 0, 1] 4

[1, 0, 0] 1°

[0, 1, 0] 2°

[0, 0, 1] 3°

[1, 0, 0] 4°

[0, 1, 0] 5°

[0, 0, 1] 6°

*/