function reverseString(word){
    let reversed = "";

    for(let i = word.length - 1; i >= 0; i--){
        reversed = reversed.concat(word[i]);
    }

    return reversed.toLowerCase();
}


function esPalindromo(word){
    if(word.toLowerCase() == reverseString(word)){
        console.log("Es palindromo.");
    }else{
        console.log("No es palindromo.");
    }
}