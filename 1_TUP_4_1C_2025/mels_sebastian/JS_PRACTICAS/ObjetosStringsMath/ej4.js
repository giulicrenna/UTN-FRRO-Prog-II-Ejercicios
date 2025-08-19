/*Crea un objeto circulo con una propiedad radio y un método area que calcule y
devuelva el área del círculo usando this para acceder al radio.*/

const circulo = {
    radio: 5,
    area: function() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
console.log(circulo.area());


