// ### 17. **Encontrar la subsecuencia más larga**
// Dado un array de números enteros, encuentra la subsecuencia creciente más larga.

function encontrarSubsecuenciaMasLarga(array){
    // let array = Array(array)
    let dp = []

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < dp.length; j++){
            if(array[i] > array[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp);
}

console.log(encontrarSubsecuenciaMasLarga(
    [1,2,3,4,5,6,7,8,9]
));
