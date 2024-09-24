function encontrarSubsecuenciaMasLarga(array) {
    if(!Array.isArray(array) || array.length === 0){
        return 0;
    }

    let dp = [];

    for(let i = 0; i < array.length; i++){
        dp.push(1);
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < dp.length; j++) {
            if (array[i] > array[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var res = encontrarSubsecuenciaMasLarga(array);

console.log(res);
