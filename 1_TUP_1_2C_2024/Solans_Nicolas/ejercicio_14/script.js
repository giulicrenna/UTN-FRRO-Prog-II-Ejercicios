// ### 14. **Eliminar elementos duplicados en un array**
// Crea una función que reciba un array de números y elimine todos los elementos duplicados sin usar `Set`.

function removerDuplicados(array){
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removerDuplicados([1,1,1,2,3,2,5,6,7]));
