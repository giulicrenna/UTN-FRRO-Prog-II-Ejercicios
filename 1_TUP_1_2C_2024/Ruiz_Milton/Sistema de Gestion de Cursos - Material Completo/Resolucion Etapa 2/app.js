//----------------------------- Importacion de Funciones -----------------------------//

import { eliminarCurso } from "../Resolución Etapa 3/etapa3.js";
import { editarCurso } from "../Resolución Etapa 3/etapa3.js";
import { primeraMayuscula } from "../Resolución Etapa 3/etapa3.js";

//---------------------------------- Captura de ID's --------------------------------//

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
const guardarEdicion = document.getElementById("guardar-edicion");
const cancelarEdicion = document.getElementById("cancelar-edicion");

//---------------------------- Evento para agregar un curso -------------------------//

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
//--------------------- Arreglo para almacenar los cursos ----------------------//

export let cursos = [];
let cursoActual = null;

//--------------------- Evento para agregar un curso ----------------------//

formCurso.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreCursoCorregido = primeraMayuscula(nombreCurso.value);
  const nombreProfesorCorregido = primeraMayuscula(profesorCurso.value);
  const nuevoCurso = new Curso(nombreCursoCorregido, nombreProfesorCorregido);
  cursos.push(nuevoCurso);
  formCurso.reset();
  actualizarCursosSelect();
  mostrarCursos();
});

//------------------ Evento para agregar un estudiante --------------------//

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
    primeraMayuscula(nombreEstudiante),
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
//------------------ Función para mostrar los cursos y estudiantes -------------------//

export function mostrarCursos() {
  listaCursos.innerHTML = "";
  const tabla = document.createElement("table");
  tabla.classList.add("tabla-cursos");
  tabla.innerHTML = `
    <thead>
      <tr>
        <th>Curso</th>
        <th>Profesor</th>
        <th>Promedio</th>
        <th>Estudiante</th>
        <th>Edad</th>
        <th>Nota</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
  `;
  cursos.forEach((curso) => {
    const filaCurso = document.createElement("tr");
    filaCurso.innerHTML = `
      <td>${curso.nombre}</td>
      <td>${curso.profesor}</td>
      <td class="text-center">${curso.obtenerPromedio()}</td>
      <td>${
        curso.estudiantes.length > 0
          ? curso.estudiantes[0].nombre
          : "No hay estudiantes"
      }</td>
      <td class="text-center">${
        curso.estudiantes.length > 0 ? curso.estudiantes[0].edad : "N/A"
      }</td>
      <td class="text-center">${
        curso.estudiantes.length > 0 ? curso.estudiantes[0].nota : "N/A"
      }</td>
      <td class="td-contenedor-botones">
        <button id="boton-editar-curso" class="editar-curso btn btn-warning" nombre="${
          curso.nombre
        }">
          <i class="fa-solid fa-pen-to-square"></i> Editar
        </button>
        <button id="boton-eliminar-curso" class="eliminar-curso btn btn-danger" nombre="${
          curso.nombre
        }">
          <i class="fa-solid fa-minus"></i> Eliminar
        </button>
      </td>
    `;
    tabla.querySelector("tbody").appendChild(filaCurso);
    for (let i = 1; i < curso.estudiantes.length; i++) {
      const filaEstudiante = document.createElement("tr");
      filaEstudiante.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td>${curso.estudiantes[i].nombre}</td>
        <td>${curso.estudiantes[i].edad}</td>
        <td>${curso.estudiantes[i].nota}</td>
        <td></td>
      `;
      tabla.querySelector("tbody").appendChild(filaEstudiante);
    }
  });
  tabla.innerHTML += `</tbody></table>`;
  listaCursos.appendChild(tabla);

  const botonEliminar = document.querySelectorAll(".eliminar-curso");
  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreCurso = boton.getAttribute("nombre");
      eliminarCurso(nombreCurso);
    });
  });

  const botonEditar = document.querySelectorAll(".editar-curso");
  botonEditar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreCurso = boton.getAttribute("nombre");
      cursoActual = cursos.find((c) => c.nombre === nombreCurso);
      nuevoNombreCurso.value = primeraMayuscula(cursoActual.nombre);
      nuevoNombreProfesor.value = primeraMayuscula(cursoActual.profesor);
      formularioEdicion.style.display = "block";
    });
  });
}

//------------------------------- Guardar edicion --------------------------------//

guardarEdicion.addEventListener("click", () => {
  if (nuevoNombreCurso.value && nuevoNombreProfesor.value) {
    editarCurso(
      cursoActual.nombre,
      primeraMayuscula(nuevoNombreCurso.value),
      primeraMayuscula(nuevoNombreProfesor.value)
    );
    formularioEdicion.style.display = "none";
  }
});
//------------------------------- Cancelar edicion ------------------------------//

cancelarEdicion.addEventListener("click", () => {
  formularioEdicion.style.display = "none";
});
