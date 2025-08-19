/*Sistema de votación simple
Pedir al usuario que ingrese el nombre de un candidato (A, B o C) o “fin” para terminar.
Contar cuántos votos recibió cada candidato. Al finalizar, mostrar los resultados.
Validar que solo se acepten nombres válidos*/

const prompt = require('prompt-sync')();

let votosA = 0;
let votosB = 0;
let votosC = 0;
let candidato;

let fin = false;
while (!fin) {
    candidato = prompt("Ingrese el nombre del candidato (A, B, C) o 'fin' para terminar: ").toUpperCase();

    switch (candidato) {
        case 'A':
            votosA++;
            break;
        case 'B':
            votosB++;
            break;
        case 'C':
            votosC++;
            break;
        case 'FIN':
            fin = true;
            break;
        default:
            console.log("Nombre de candidato no válido. Intente nuevamente.");
    }
}
console.log("Resultados de la votación:");
console.log(`Candidato A: ${votosA} votos`);    
console.log(`Candidato B: ${votosB} votos`);
console.log(`Candidato C: ${votosC} votos`);
