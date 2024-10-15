//----------------------------- Importación de Funciones -----------------------------//

import {
  eliminarCurso,
  editarCurso,
  primeraMayuscula,
} from "../Resolución Etapa 3/etapa3.js";

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

//---------------------------- Clase Estudiante -------------------------------------//

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

//----------------------------- Clase Curso ----------------------------------------//

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
    const totalNotas = this.estudiantes.reduce(
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

//------------------- Función para actualizar el select de cursos --------------//

export function actualizarCursosSelect() {
  cursoEstudianteSelect.innerHTML = "";
  cursos.forEach((curso, index) => {
    const option = document.createElement("option");
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
    const cantidadEstudiantes = curso.estudiantes.length;
    const filaCurso = document.createElement("tr");
    filaCurso.innerHTML = `
      <td rowspan="${cantidadEstudiantes || 1}">${curso.nombre}</td>
      <td rowspan="${cantidadEstudiantes || 1}">${curso.profesor}</td>
      <td rowspan="${cantidadEstudiantes || 1}">${curso.obtenerPromedio()}</td>
      <td>${
        cantidadEstudiantes > 0
          ? curso.estudiantes[0].nombre
          : "No hay estudiantes"
      }</td>
      <td>${cantidadEstudiantes > 0 ? curso.estudiantes[0].edad : "N/A"}</td>
      <td>${cantidadEstudiantes > 0 ? curso.estudiantes[0].nota : "N/A"}</td>
      <td class="td-contenedor-botones" rowspan="${cantidadEstudiantes || 1}">
        <div class="botones-acciones">
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
        </div>
      </td>
    `;
    tabla.querySelector("tbody").appendChild(filaCurso);
    for (let i = 1; i < cantidadEstudiantes; i++) {
      const filaEstudiante = document.createElement("tr");
      filaEstudiante.innerHTML = `
        <td>${curso.estudiantes[i].nombre}</td>
        <td>${curso.estudiantes[i].edad}</td>
        <td>${curso.estudiantes[i].nota}</td>
      `;
      tabla.querySelector("tbody").appendChild(filaEstudiante);
    }
  });
  tabla.innerHTML += `</tbody></table>`;
  listaCursos.appendChild(tabla);
  const botonEditar = document.querySelectorAll(".editar-curso");
  botonEditar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreCurso = boton.getAttribute("nombre");
      cursoActual = cursos.find((c) => c.nombre === nombreCurso);
      nuevoNombreCurso.value = primeraMayuscula(cursoActual.nombre);
      nuevoNombreProfesor.value = primeraMayuscula(cursoActual.profesor);
      const tablaEstudiantesEdicion = document.createElement("table");
      tablaEstudiantesEdicion.classList.add("tabla-estudiantes");
      tablaEstudiantesEdicion.innerHTML = `
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Nota</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
    `;
      if (cursoActual.estudiantes.length > 0) {
        cursoActual.estudiantes.forEach((est) => {
          const filaEstudiante = document.createElement("tr");
          filaEstudiante.innerHTML = `
            <td>${est.nombre}</td>
            <td>${est.edad}</td>
            <td>${est.nota}</td>
            <td>
              <button class="btn btn-warning btn-sm editar-estudiante" data-nombre="${est.nombre}">Editar</button>
              <button class="btn btn-danger btn-sm eliminar-estudiante" data-nombre="${est.nombre}">Eliminar</button>
            </td>
          `;
          tablaEstudiantesEdicion
            .querySelector("tbody")
            .appendChild(filaEstudiante);
        });
      } else {
        const mensajeSinEstudiantes = document.createElement("tr");
        mensajeSinEstudiantes.innerHTML = `
          <td colspan="4" class="text-center">No hay estudiantes en este curso</td>
        `;
        tablaEstudiantesEdicion
          .querySelector("tbody")
          .appendChild(mensajeSinEstudiantes);
      }
      const listaEstudiantesEdicion = document.getElementById(
        "lista-estudiantes-edicion"
      );
      listaEstudiantesEdicion.innerHTML = "";
      listaEstudiantesEdicion.appendChild(tablaEstudiantesEdicion);
      manejarEventosEdicionEstudiante();
      formularioEdicion.style.display = "block";
    });
  });
  document
    .getElementById("lista-estudiantes-edicion")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("eliminar-estudiante")) {
        const nombreEstudiante = e.target.getAttribute("data-nombre");
        cursoActual.estudiantes = cursoActual.estudiantes.filter(
          (est) => est.nombre !== nombreEstudiante
        );
        mostrarCursos();
      }
    });
}
//------------------------------- Función para manejar eventos de edición de estudiantes -------------------------------//

function manejarEventosEdicionEstudiante() {
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
//------------------------------- Guardar edición --------------------------------//

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
//------------------------------- Cancelar edición ------------------------------//

cancelarEdicion.addEventListener("click", () => {
  formularioEdicion.style.display = "none";
});
