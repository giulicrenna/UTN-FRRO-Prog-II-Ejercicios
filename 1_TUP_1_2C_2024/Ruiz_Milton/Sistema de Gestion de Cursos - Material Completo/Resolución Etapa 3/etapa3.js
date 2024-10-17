//----------------------------- Importacion de Funciones -----------------------------//

import {
  actualizarCursosSelect,
  mostrarCursos,
  cursos,
  cursoActual,
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

//------------- Función para manejar eventos de edición de estudiantes --------------//

export function edicionEstudiantes() {
  document.querySelectorAll(".editar-estudiante").forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreEstudiante = boton.getAttribute("data-nombre");
      const estudiante = cursoActual.estudiantes.find(
        (est) => est.nombre === nombreEstudiante
      );

      const formularioEdicionEstudiante = crearFormularioEdicion(estudiante);
      const listaEstudiantesEdicion = document.getElementById(
        "lista-estudiantes-edicion"
      );
      listaEstudiantesEdicion.innerHTML = "";
      listaEstudiantesEdicion.appendChild(formularioEdicionEstudiante);
    });
  });
}
function crearFormularioEdicion(estudiante) {
  const formulario = document.createElement("form");
  formulario.classList.add("row", "mb-3");
  const campos = [
    {
      label: "Nombre",
      id: "nombre-estudiante-editar",
      type: "text",
      value: estudiante.nombre,
    },
    {
      label: "Edad",
      id: "edad-estudiante-editar",
      type: "number",
      value: estudiante.edad,
    },
    {
      label: "Nota",
      id: "nota-estudiante-editar",
      type: "number",
      value: estudiante.nota,
    },
  ];
  campos.forEach((campo) => {
    const divCampo = document.createElement("div");
    divCampo.classList.add("col-md-4");
    divCampo.innerHTML = `
      <label for="${campo.id}">${campo.label}:</label>
      <input type="${campo.type}" id="${campo.id}" class="form-control" value="${campo.value}" required />
    `;
    formulario.appendChild(divCampo);
  });
  const botonGuardar = document.createElement("button");
  botonGuardar.type = "submit";
  botonGuardar.classList.add("btn", "btn-info", "col-12");
  botonGuardar.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Guardar`;
  formulario.appendChild(botonGuardar);

  formulario.addEventListener("submit", (e) => {
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
    if (validarDatos(nuevoNombre, nuevaEdad, nuevaNota)) {
      estudiante.nombre = primeraMayuscula(nuevoNombre);
      estudiante.edad = nuevaEdad;
      estudiante.nota = nuevaNota;

      // Mostrar la tabla de estudiantes nuevamente
      mostrarTablaEstudiantesEdicion(cursoActual);

      // Limpiar el formulario
      listaEstudiantesEdicion.innerHTML = ""; // Ocultar el formulario de edición
    } else {
      alert("Por favor, introduce valores válidos.");
    }
  });

  return formulario;
}
function validarDatos(nombre, edad, nota) {
  return nombre && edad > 0 && nota >= 0 && nota <= 10;
}
export function mostrarTablaEstudiantesEdicion(curso) {
  let tablaEstudiantes = document.getElementById("tabla-estudiantes");
  if (!tablaEstudiantes) {
    tablaEstudiantes = document.createElement("table");
    tablaEstudiantes.id = "tabla-estudiantes";
    document
      .getElementById("lista-estudiantes-edicion")
      .appendChild(tablaEstudiantes);
  }

  tablaEstudiantes.innerHTML = "";
}
//------------------------- Función mostrar mensaje de creado -----------------------//

export function mostrarMensaje(mensaje, tipo) {
  const mensajeDiv = document.createElement("div");
  mensajeDiv.textContent = mensaje;
  mensajeDiv.className = `mensaje ${tipo}`;
  document.body.appendChild(mensajeDiv);

  setTimeout(() => {
    mensajeDiv.classList.add("oculto");
    setTimeout(() => {
      mensajeDiv.remove();
    }, 2000);
  }, 3000);
}
//------------------------------ Función validar cadena ----------------------------//

export function cadenaValida(cadena) {
  return (
    typeof cadena === "string" && cadena.trim() !== "" && !/\d/.test(cadena)
  );
}
