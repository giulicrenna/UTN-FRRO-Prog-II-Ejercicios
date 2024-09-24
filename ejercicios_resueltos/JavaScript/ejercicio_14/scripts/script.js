function removerDuplicados(array){
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removerDuplicados([1,1,1,1,2,2,2,2,3,3,3,3,4,5,6]));