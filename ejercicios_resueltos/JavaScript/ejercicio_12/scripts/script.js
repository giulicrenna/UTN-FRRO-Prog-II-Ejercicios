function twoSum(nums, objetivo){
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        const complemento = objetivo - nums[i];
        if(map.has(complemento)){
            return [map.get(complemento), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

function twoSumCrotoForm(array, suma){
    for (var i = 0; i< array.length; i++){
        for (var j = 1; j < array.length - 1; j++){
            if (array[i] + array[j] === suma){
                var encontrado = true;
                var aux1= i;
                var aux2= j; 
            }
        }
    }
    if (encontrado == true){
        console.log("[", aux2, ",", aux1, "]");
    }
    else{
        console.log("No hay suma")
    } 
}