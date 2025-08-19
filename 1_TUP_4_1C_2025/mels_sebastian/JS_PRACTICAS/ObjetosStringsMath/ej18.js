/*Crea una función que genere y devuelva un color hexadecimal aleatorio (formato #RRGGBB).*/

function generarColorHexadecimal() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}   

console.log(generarColorHexadecimal()); 
