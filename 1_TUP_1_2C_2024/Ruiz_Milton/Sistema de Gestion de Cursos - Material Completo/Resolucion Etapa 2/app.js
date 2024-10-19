//----------------------------- Importación de Funciones -----------------------------//

import {
  edicionEstudiantes,
  editarCurso,
  primeraMayuscula,
  mostrarMensaje,
  cadenaValida,
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
const nombreEstudiante = document.getElementById("nombre-estudiante");
const busquedaIngresada = document.getElementById("busqueda-ingresada");

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
export let cursoActual = null;

//------------------ Evento para agregar un curso ----------------------//

formCurso.addEventListener("submit", (e) => {
  e.preventDefault();
  const cursoCorregido = primeraMayuscula(nombreCurso.value);
  const profesorCorregido = primeraMayuscula(profesorCurso.value);
  const nombreValido = cadenaValida(cursoCorregido);
  const profesorValido = cadenaValida(profesorCorregido);
  if (!nombreValido && !profesorValido) {
    mostrarMensaje("¡Valores ingresados incorrectos!", "error");
  } else if (!nombreValido) {
    mostrarMensaje("¡Nombre de curso incorrecto!", "error");
  } else if (!profesorValido) {
    mostrarMensaje("¡Nombre de profesor incorrecto!", "error");
  } else {
    const nuevoCurso = new Curso(cursoCorregido, profesorCorregido);
    cursos.push(nuevoCurso);
    formCurso.reset();
    actualizarCursosSelect();
    mostrarCursos();
    mostrarMensaje("¡Curso creado correctamente!", "success");
  }
});
//------------------ Evento para agregar un estudiante --------------------//

formEstudiante.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreEstudianteValor = primeraMayuscula(nombreEstudiante.value);
  const edadEstudianteValor = parseInt(edadEstudiante.value);
  const notaEstudianteValor = parseFloat(notaEstudiante.value);
  const cursoIndex = cursoEstudianteSelect.value;
  const nombreValido = cadenaValida(nombreEstudianteValor);
  if (
    (!nombreValido && edadEstudianteValor <= 0 && notaEstudianteValor < 0) ||
    notaEstudianteValor > 10
  ) {
    mostrarMensaje("¡Valores ingresados incorrectos!", "error");
  } else if (!nombreValido && edadEstudianteValor <= 0) {
    mostrarMensaje("¡Nombre y Edad ingresado Incorrectos!", "error");
  } else if (
    (!nombreValido && notaEstudianteValor < 0) ||
    notaEstudianteValor > 10
  ) {
    mostrarMensaje("¡Nombre y Nota ingresado Incorrectos!", "error");
  } else if (
    (edadEstudianteValor <= 0 && notaEstudianteValor < 0) ||
    notaEstudianteValor > 10
  ) {
    mostrarMensaje("¡Edad y Nota ingresadas Incorrectas!", "error");
  } else if (!nombreValido) {
    mostrarMensaje("Nombre ingresado Incorrecto!", "error");
  } else if (edadEstudianteValor <= 0) {
    mostrarMensaje("Edad ingresada Incorrecta!", "error");
  } else if (notaEstudianteValor < 0 || notaEstudianteValor > 10) {
    mostrarMensaje("¡Nota ingresada Incorrecta!", "error");
  } else {
    const nuevoEstudiante = new Estudiante(
      nombreEstudianteValor,
      edadEstudianteValor,
      notaEstudianteValor
    );
    cursos[cursoIndex].agregarEstudiante(nuevoEstudiante);
    formEstudiante.reset();
    mostrarCursos();
    mostrarMensaje("¡Estudiante agregado correctamente!", "success");
  }
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

export function mostrarCursos(busqueda = "") {
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
  let resultadosEncontrados = false;
  cursos.forEach((curso) => {
    if (
      curso.nombre.toLowerCase().includes(busqueda) ||
      curso.profesor.toLowerCase().includes(busqueda)
    ) {
      resultadosEncontrados = true;
      const cantidadEstudiantes = curso.estudiantes.length;
      const filaCurso = document.createElement("tr");
      filaCurso.innerHTML = `
        <td rowspan="${cantidadEstudiantes || 1}">${curso.nombre}</td>
        <td rowspan="${cantidadEstudiantes || 1}">${curso.profesor}</td>
        <td rowspan="${
          cantidadEstudiantes || 1
        }">${curso.obtenerPromedio()}</td>
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
    } else {
      const estudiantesFiltrados = curso.estudiantes.filter((est) =>
        est.nombre.toLowerCase().includes(busqueda)
      );
      if (estudiantesFiltrados.length > 0) {
        resultadosEncontrados = true;
        const filaCurso = document.createElement("tr");
        filaCurso.innerHTML = `
          <td rowspan="${estudiantesFiltrados.length}">${curso.nombre}</td>
          <td rowspan="${estudiantesFiltrados.length}">${curso.profesor}</td>
          <td rowspan="${
            estudiantesFiltrados.length
          }">${curso.obtenerPromedio()}</td>
          <td>${estudiantesFiltrados[0].nombre}</td>
          <td>${estudiantesFiltrados[0].edad}</td>
          <td>${estudiantesFiltrados[0].nota}</td>
          <td class="td-contenedor-botones" rowspan="${
            estudiantesFiltrados.length
          }">
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
        for (let i = 1; i < estudiantesFiltrados.length; i++) {
          const filaEstudiante = document.createElement("tr");
          filaEstudiante.innerHTML = `
            <td>${estudiantesFiltrados[i].nombre}</td>
            <td>${estudiantesFiltrados[i].edad}</td>
            <td>${estudiantesFiltrados[i].nota}</td>
          `;
          tabla.querySelector("tbody").appendChild(filaEstudiante);
        }
      }
    }
  });
  if (!resultadosEncontrados) {
    const mensajeNoEncontrado = document.createElement("tr");
    mensajeNoEncontrado.innerHTML = `
      <td colspan="7" class="text-center fst-italic">¡No hay resultados para la búsqueda!</td>
    `;
    tabla.querySelector("tbody").appendChild(mensajeNoEncontrado);
  }
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
            <td class="td-contenedor-botones">
              <button id="boton-editar-estudiante" class="btn btn-warning btn-sm editar-estudiante" data-nombre="${est.nombre}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
              <button id="boton-eliminar-estudiante" class="btn btn-danger btn-sm eliminar-estudiante" data-nombre="${est.nombre}"><i class="fa-solid fa-minus"></i> Eliminar</button>
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
      edicionEstudiantes();
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
  const botonEliminar = document.querySelectorAll(".eliminar-curso");
  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const cursoIndex = boton.getAttribute("data-index");
      if (confirm("¿Estás seguro de que deseas eliminar este curso?")) {
        cursos.splice(cursoIndex, 1);
        mostrarCursos();
      }
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
//--------------------------------- Búsqueda ----------------------------------//

busquedaIngresada.addEventListener("input", () => {
  const valorBusqueda = busquedaIngresada.value.toLowerCase();
  mostrarCursos(valorBusqueda);
});
