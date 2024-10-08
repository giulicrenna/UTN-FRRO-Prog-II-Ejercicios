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
      return this.estudiantes.map(est => est.presentarse()).join('<br>');
    }
  
    obtenerPromedio() {
      let totalNotas = this.estudiantes.reduce((total, est) => total + est.nota, 0);
      return (this.estudiantes.length > 0) ? (totalNotas / this.estudiantes.length).toFixed(2) : 'N/A';
    }
  }
  
  // Arreglo para almacenar los cursos
  let cursos = [];
  
  // DOM elements
  const formCurso = document.getElementById('form-curso');
  const formEstudiante = document.getElementById('form-estudiante');
  const cursoEstudianteSelect = document.getElementById('curso-estudiante');
  const listaCursos = document.getElementById('lista-cursos');
  
  // Evento para agregar un curso
  formCurso.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capturar datos del formulario
    const nombreCurso = document.getElementById('nombre-curso').value;
    const profesorCurso = document.getElementById('profesor-curso').value;
    
    // Crear un nuevo curso
    const nuevoCurso = new Curso(nombreCurso, profesorCurso);
    cursos.push(nuevoCurso);
    
    // Limpiar formulario
    formCurso.reset();
    
    // Actualizar la lista de cursos en el select
    actualizarCursosSelect();
    
    // Mostrar los cursos
    mostrarCursos();
  });
  
  // Evento para agregar un estudiante
  formEstudiante.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capturar datos del formulario
    const nombreEstudiante = document.getElementById('nombre-estudiante').value;
    const edadEstudiante = parseInt(document.getElementById('edad-estudiante').value);
    const notaEstudiante = parseFloat(document.getElementById('nota-estudiante').value);
    const cursoIndex = cursoEstudianteSelect.value;
    
    // Crear un nuevo estudiante
    const nuevoEstudiante = new Estudiante(nombreEstudiante, edadEstudiante, notaEstudiante);
    
    // Agregar estudiante al curso seleccionado
    cursos[cursoIndex].agregarEstudiante(nuevoEstudiante);
    
    // Limpiar formulario
    formEstudiante.reset();
    
    // Mostrar los cursos actualizados
    mostrarCursos();
  });
  
  // Función para actualizar el select de cursos
  function actualizarCursosSelect() {
    cursoEstudianteSelect.innerHTML = '';
    cursos.forEach((curso, index) => {
      let option = document.createElement('option');
      option.value = index;
      option.textContent = curso.nombre;
      cursoEstudianteSelect.appendChild(option);
    });
  }
  
  // Función para mostrar los cursos y estudiantes
  function mostrarCursos() {
    listaCursos.innerHTML = '';
    cursos.forEach((curso) => {
      let cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');
      
      cursoDiv.innerHTML = `
        <h3>Curso: ${curso.nombre} (Profesor: ${curso.profesor})</h3>
        <p><strong>Promedio:</strong> ${curso.obtenerPromedio()}</p>
        <div class="estudiantes">
          <strong>Estudiantes:</strong><br>
          ${curso.listarEstudiantes() || 'No hay estudiantes en este curso.'}
        </div>
      `;
      
      listaCursos.appendChild(cursoDiv);
    });
  }
  