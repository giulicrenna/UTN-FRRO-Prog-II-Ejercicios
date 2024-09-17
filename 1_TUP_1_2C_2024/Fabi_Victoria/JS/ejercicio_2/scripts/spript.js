/*Suma de dos números ingresados por el usuario */

let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");

if(isNaN(num1) || isNaN(num2)){/*isNan (evalua si es numero)*/ 
   alert("Los valores no son números.");

}else{
    alert("La suma es: " +(parseFloat(num1) + parseFloat(num2)));
}