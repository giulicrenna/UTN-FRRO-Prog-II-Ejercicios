//----------------------------- Importacion de Funciones -----------------------------//

import {
  actualizarCursosSelect,
  mostrarCursos,
  cursos,
} from "../Resolucion Etapa 2/app.js";

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
//------------------------------- Función para manejar eventos de edición de estudiantes -------------------------------//

export function edicionEstudiantes() {
  document.querySelectorAll(".editar-estudiante").forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreEstudiante = boton.getAttribute("data-nombre");
      const estudiante = cursoActual.estudiantes.find(
        (est) => est.nombre === nombreEstudiante
      );
      const formularioEdicionEstudiante = document.createElement("form");
      formularioEdicionEstudiante.classList.add("row", "mb-3");
      const divNombre = document.createElement("div");
      divNombre.classList.add("col-md-4");
      divNombre.innerHTML = `
        <label for="nombre-estudiante-editar">Nombre:</label>
        <input type="text" id="nombre-estudiante-editar" class="form-control" value="${estudiante.nombre}" required />
      `;
      formularioEdicionEstudiante.appendChild(divNombre);
      const divEdad = document.createElement("div");
      divEdad.classList.add("col-md-4");
      divEdad.innerHTML = `
        <label for="edad-estudiante-editar">Edad:</label>
        <input type="number" id="edad-estudiante-editar" class="form-control" value="${estudiante.edad}" required />
      `;
      formularioEdicionEstudiante.appendChild(divEdad);
      const divNota = document.createElement("div");
      divNota.classList.add("col-md-4");
      divNota.innerHTML = `
        <label for="nota-estudiante-editar">Nota:</label>
        <input type="number" id="nota-estudiante-editar" class="form-control" value="${estudiante.nota}" required />
      `;
      formularioEdicionEstudiante.appendChild(divNota);
      const botonGuardar = document.createElement("button");
      botonGuardar.type = "submit";
      botonGuardar.classList.add("btn", "btn-info", "col-12");
      botonGuardar.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Guardar`;

      formularioEdicionEstudiante.appendChild(botonGuardar);
      const listaEstudiantesEdicion = document.getElementById(
        "lista-estudiantes-edicion"
      );
      listaEstudiantesEdicion.innerHTML = "";
      listaEstudiantesEdicion.appendChild(formularioEdicionEstudiante);
      formularioEdicionEstudiante.addEventListener("submit", (e) => {
        e.preventDefault();
        const nuevoNombre = document.getElementById(
          "nombre-estudiante-editar"
        ).value;
        const nuevaEdad = parseInt(
          document.getElementById("edad-estudiante-editar").value
        );
        const nuevaNota = parseFloat(
          document.getElementById("nota-estudiante-editar").value
        );

        if (nuevoNombre && nuevaEdad > 0 && nuevaNota >= 0 && nuevaNota <= 10) {
          estudiante.nombre = primeraMayuscula(nuevoNombre);
          estudiante.edad = nuevaEdad;
          estudiante.nota = nuevaNota;

          mostrarCursos();
        } else {
          alert("Por favor, introduce valores válidos.");
        }
      });
    });
  });
}
