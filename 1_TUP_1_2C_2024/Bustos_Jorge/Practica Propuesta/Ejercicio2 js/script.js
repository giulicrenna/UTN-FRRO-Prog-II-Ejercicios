let num1 = prompt("ingrese el primer nuero: ")
let num2 = prompt("ingrese el primer nuero: ")

if(isNaN(num1))||if(isNaN(num2)){
    console.log ("los valores no son numeros")
    else {
        console.log("la suma es: " +(parseFloat(num1)+parseFloat(num2)))
    }
}