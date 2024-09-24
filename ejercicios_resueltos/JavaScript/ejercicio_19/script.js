function barajar(array1, array2){
    if(array1.length !== array2.length){
        console.log("Arrays de distinta longitud");
        return [];
    }

    return array1.flatMap((item, index) => [item, array2[index]]);
}


let res = barajar([1, 3, 5], [2, 4, 6]);
console.log(res);


/* 
APLANADO:
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

[1, 2, 3, 4, 5, 6, 7, 8, 9]
*/