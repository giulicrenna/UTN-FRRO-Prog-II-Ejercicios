//----------------------------- Importacion de Funciones -----------------------------//

import { actualizarCursosSelect } from "../Resolucion Etapa 2/app.js";
import { mostrarCursos } from "../Resolucion Etapa 2/app.js";
import { cursos } from "../Resolucion Etapa 2/app.js";

//----------------------------- Exportaciones de Variables ---------------------------//

//--------------------------------- Captura de ID's ----------------------------------//

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
//--------------------------- Función para editar un curso ---------------------------//

export function primeraMayuscula(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}
