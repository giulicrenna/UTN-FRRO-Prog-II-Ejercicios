//----------------------------- Importacion de Funciones -----------------------------//

import { eliminarCurso } from "../Resolución Etapa 3/etapa3.js";
import { cursoActual } from "../Resolución Etapa 3/etapa3.js";

//----------------------------------------------------------------------------------//

// Clase Estudiante
class Estudiante {
  constructor(nombre, edad, nota) {
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }

  presentarse() {
    return `${this.nombre} (${this.edad} años) - Nota: ${this.nota}`;
  }
}

// Clase Curso
class Curso {
  constructor(nombre, profesor) {
    this.nombre = nombre;
    this.profesor = profesor;
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }

  listarEstudiantes() {
    return this.estudiantes.map((est) => est.presentarse()).join("<br>");
  }

  obtenerPromedio() {
    let totalNotas = this.estudiantes.reduce(
      (total, est) => total + est.nota,
      0
    );
    return this.estudiantes.length > 0
      ? (totalNotas / this.estudiantes.length).toFixed(2)
      : "N/A";
  }
}

// Arreglo para almacenar los cursos
export let cursos = [];

// DOM elements
//-------------------------------------------------------------------------//

const formCurso = document.getElementById("form-curso");
const formEstudiante = document.getElementById("form-estudiante");
const edadEstudiante = document.getElementById("edad-estudiante");
const notaEstudiante = document.getElementById("nota-estudiante");
const cursoEstudianteSelect = document.getElementById("curso-estudiante");
const listaCursos = document.getElementById("lista-cursos");
const nombreCurso = document.getElementById("nombre-curso");
const formularioEdicion = document.getElementById("formulario-edicion");
const nuevoNombreCurso = document.getElementById("nuevo-nombre-curso");
const nuevoNombreProfesor = document.getElementById("nuevo-nombre-profesor");
const profesorCurso = document.getElementById("profesor-curso");

//--------------------- Evento para agregar un curso ----------------------//

formCurso.addEventListener("submit", (e) => {
  e.preventDefault();
  const nuevoCurso = new Curso(nombreCurso.value, profesorCurso.value);
  cursos.push(nuevoCurso);
  formCurso.reset();
  actualizarCursosSelect();
  mostrarCursos();
});

//--------------------- Evento para agregar un curso ----------------------//

formEstudiante.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreEstudiante = document.getElementById("nombre-estudiante").value;
  const edadEstudianteValor = parseInt(edadEstudiante.value);
  const notaEstudianteValor = parseFloat(notaEstudiante.value);
  const cursoIndex = cursoEstudianteSelect.value;
  if (edadEstudianteValor <= 0) {
    alert("La edad debe ser mayor que cero.");
    return;
  }
  if (notaEstudianteValor < 0 || notaEstudianteValor > 10) {
    alert("La nota debe estar entre 0 y 10.");
    return;
  }
  const nuevoEstudiante = new Estudiante(
    nombreEstudiante,
    edadEstudianteValor,
    notaEstudianteValor
  );
  cursos[cursoIndex].agregarEstudiante(nuevoEstudiante);
  formEstudiante.reset();
  mostrarCursos();
});
// ------------------- Función para actualizar el select de cursos--------------//

export function actualizarCursosSelect() {
  cursoEstudianteSelect.innerHTML = "";
  cursos.forEach((curso, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = curso.nombre;
    cursoEstudianteSelect.appendChild(option);
  });
}
// Función para mostrar los cursos y estudiantes con botones eliminar y editar
//-----------------------------------------------------------------------------//
export function mostrarCursos() {
  listaCursos.innerHTML = "";
  cursos.forEach((curso) => {
    let cursoDiv = document.createElement("div");
    cursoDiv.classList.add("curso");
    cursoDiv.innerHTML = `
        <h3>Curso: ${curso.nombre} (Profesor: ${curso.profesor})</h3>
        <p><strong>Promedio:</strong> ${curso.obtenerPromedio()}</p>
        <div class="estudiantes">
          <strong>Estudiantes:</strong><br>
          ${curso.listarEstudiantes() || "No hay estudiantes en este curso."}
        </div>
        <button class="eliminar" nombre="${
          curso.nombre
        }">Eliminar Curso</button>
        <button class="editar" nombre="${curso.nombre}">Editar Curso</button>
      `;
    listaCursos.appendChild(cursoDiv);
  });
  // Creación de botón Eliminar + función eliminarCurso()
  const botonEliminar = document.querySelectorAll(".eliminar");
  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreCurso = boton.getAttribute("nombre");
      eliminarCurso(nombreCurso);
    });
  });
  // Creación de botón Editar + función
  const botonEditar = document.querySelectorAll(".editar");
  botonEditar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreCurso = boton.getAttribute("nombre");
      cursoActual = cursos.find((c) => c.nombre === nombreCurso);
      nuevoNombreCurso.value = cursoActual.nombre;
      nuevoNombreProfesor.value = cursoActual.profesor;
      formularioEdicion.style.display = "block";
    });
  });
}
//-----------------------------------------------------------------------------//
