function maximoEn2D(array){
    var arrayAuxiliar = array.flat();

    return Math.max(...arrayAuxiliar);
}

function maximoEnND(array){
    var arrayAuxiliar = array.flat(Infinity);

    return Math.max(...arrayAuxiliar);
}

const arrayBidimensional = [
    [1, 5, 9],
    [2, 4, 10],
    [0, 15, 7]
]

const arrayTridimensional = [
    [[1, 5, 9], [3, 4, 6], [3, 5, 1]],
    [[2, 4, 10], [2, 45, 2], [1, 8, 7]],
    [[0, 15, 7], [2, 5, 2], [1, 8, 7]]
]


var res = maximoEn2D(arrayBidimensional);
var res2 = maximoEnND(arrayTridimensional);

console.log(res);
console.log(res2);