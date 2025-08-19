/*Crea un objeto calculadora con métodos para sumar, restar, multiplicar y dividir.
Cada método debe tomar dos parámetros y devolver el resultado.*/

const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    }
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2
console.log(calculadora.multiplicar(5, 3)); // 15
console.log(calculadora.dividir(5, 3)); // 1.6666666666666667