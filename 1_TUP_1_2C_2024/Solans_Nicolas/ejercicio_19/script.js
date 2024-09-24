// ### 19. **Intercalar dos arrays**
// Dado dos arrays de igual longitud, crea una función que intercale sus elementos en uno solo.

function barajar(array1, array2){
    if(array1.length !== array2.length){
        console.log("Longitudes diferentes");
        return [];
    }
    return array1.flatMap((item, index) => [item, array2[index]]);
}

console.log(barajar(
    [1,3,5],
    [2,4,6]
));
