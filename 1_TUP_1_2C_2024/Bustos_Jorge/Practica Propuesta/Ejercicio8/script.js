function esPrimos(num) {
  for (let i = 2; 1<=num-1; i++){
      if (num % i == 0){
        console.log("es un numero primo");
        return false;
      }

      }
         
      console.log("es primo");
      return true;
    }
      