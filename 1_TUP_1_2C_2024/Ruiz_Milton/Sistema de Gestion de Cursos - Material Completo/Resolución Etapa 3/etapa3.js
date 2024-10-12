//----------------------------- Importacion de Funciones -----------------------------//

import { actualizarCursosSelect } from "../Resolucion Etapa 2/app.js";
import { mostrarCursos } from "../Resolucion Etapa 2/app.js";
import { cursos } from "../Resolucion Etapa 2/app.js";

//----------------------------- Exportaciones de Variables ---------------------------//

export let cursoActual = null;

//--------------------------------- Captura de ID's ----------------------------------//

const nombreCurso = document.getElementById("nombre-curso");
const nuevoNombreCurso = document.getElementById("nuevo-nombre-curso");
const nuevoNombreProfesor = document.getElementById("nuevo-nombre-profesor");
const formularioEdicion = document.getElementById("formulario-edicion");
const guardarEdicion = document.getElementById("guardar-edicion");
const cancelarEdicion = document.getElementById("cancelar-edicion");

//--------------------------- Función para eliminar un curso -------------------------//

export function eliminarCurso(nombreCurso) {
  const indice = cursos.findIndex((curso) => curso.nombre === nombreCurso);
  if (indice !== -1) {
    cursos.splice(indice, 1);
    actualizarCursosSelect();
    mostrarCursos();
  }
  botonEliminar.addEventListener("click", () => {
    eliminarCurso(nombreCurso.value);
  });
}
//--------------------------- Función para editar un curso ---------------------------//
export function editarCurso(
  nombreCursoAntiguo,
  nuevoNombreCurso,
  nuevoNombreProfesor
) {
  const indice = cursos.findIndex(
    (curso) => curso.nombre === nombreCursoAntiguo
  );
  if (indice !== -1) {
    cursos[indice].nombre = nuevoNombreCurso;
    cursos[indice].profesor = nuevoNombreProfesor;
    actualizarCursosSelect();
    mostrarCursos();
  }
}
//------------------------------- Guardar edicion --------------------------------//

guardarEdicion.addEventListener("click", () => {
  if (nuevoNombreCurso.value && nuevoNombreProfesor.value) {
    editarCurso(
      cursoActual.nombre,
      nuevoNombreCurso.value,
      nuevoNombreProfesor.value
    );
    formularioEdicion.style.display = "none";
  }
});
//------------------------------- Cancelar edicion ------------------------------//

cancelarEdicion.addEventListener("click", () => {
  formularioEdicion.style.display = "none";
});
