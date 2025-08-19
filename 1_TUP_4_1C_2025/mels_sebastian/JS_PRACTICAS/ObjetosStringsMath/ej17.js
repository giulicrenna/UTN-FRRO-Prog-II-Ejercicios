/*Crea un array llamado estudiantes con 3 objetos que representen estudiantes
(nombre, edad, curso). Muestra en consola el nombre y curso de cada estudiante.*/

const estudiantes = [
    { nombre: "Juan", edad: 20, curso: "Matemáticas" },
    { nombre: "Ana", edad: 22, curso: "Historia" },
    { nombre: "Luis", edad: 21, curso: "Ciencias" }
];

// Muestra en consola el nombre y curso de cada estudiante
for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i].nombre}, Curso: ${estudiantes[i].curso}`);
}
// Alternativa usando forEach
estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Curso: ${estudiante.curso}`);
});
// Alternativa usando map
estudiantes.map(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Curso: ${estudiante.curso}`);
});
// Alternativa usando for of
for (const estudiante of estudiantes) {
    console.log(`Nombre: ${estudiante.nombre}, Curso: ${estudiante.curso}`);
}
// Alternativa usando for in
for (const index in estudiantes) {
    console.log(`Nombre: ${estudiantes[index].nombre}, Curso: ${estudiantes[index].curso}`);
}
// Alternativa usando reduce
const resultado = estudiantes.reduce((acc, estudiante) => {
    return acc + `Nombre: ${estudiante.nombre}, Curso: ${estudiante.curso}\n`;
}, "");
console.log(resultado);
// Alternativa usando filter
const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.edad > 20);
estudiantesFiltrados.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Curso: ${estudiante.curso}`);
});