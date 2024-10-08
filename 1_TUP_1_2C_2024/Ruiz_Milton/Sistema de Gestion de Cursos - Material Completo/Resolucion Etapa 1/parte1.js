// Clase Estudiante: representa a un estudiante con su nombre, edad y nota
class Estudiante {
    constructor(nombre, edad, nota) {
      // Propiedades (atributos) de la clase Estudiante
      this.nombre = nombre;
      this.edad = edad;
      this.nota = nota;
    }
    // Metodo (funcion) presentarse: muestra en pantalla la info del estudiante  
    presentarse() {
      console.log(`Soy ${this.nombre}, tengo ${this.edad} años y mi nota final es ${this.nota}.`);
    }
  }
  

  // Clase Curso : representa un curso, que tiene un nombre, profesor y una lista de estudiantes
  class Curso {
    constructor(nombre, profesor) {
      this.nombre = nombre;
      this.profesor = profesor;
      this.estudiantes = [];
    }
    //Metodo o funcion, que agrega un estudiante a la lista de estudiantes del curso
    agregarEstudiante(estudiante) {
      this.estudiantes.push(estudiante);
    }
  
    listarEstudiantes() {
      console.log(`Estudiantes en el curso ${this.nombre}:`);
      this.estudiantes.forEach(est => est.presentarse());
    }
  
    obtenerPromedio() {
      let totalNotas = this.estudiantes.reduce((total, est) => total + est.nota, 0);
      return totalNotas / this.estudiantes.length;
    }
  }
  
  // Crear cursos
  let cursoJavaScript = new Curso("JavaScript", "Prof. Pérez");
  let cursoHTML = new Curso("HTML y CSS", "Prof. Gómez");
  let cursoPython = new Curso("Python", "Prof. Fernández");
  
  // Crear estudiantes
  let estudiante1 = new Estudiante("Ana", 20, 85);
  let estudiante2 = new Estudiante("Juan", 22, 90);
  let estudiante3 = new Estudiante("Carlos", 21, 78);
  let estudiante4 = new Estudiante("Lucía", 23, 92);
  
  // Agregar estudiantes a los cursos
  cursoJavaScript.agregarEstudiante(estudiante1);
  cursoJavaScript.agregarEstudiante(estudiante2);
  cursoHTML.agregarEstudiante(estudiante3);
  cursoPython.agregarEstudiante(estudiante4);
  
  // Listar estudiantes y mostrar promedios
  cursoJavaScript.listarEstudiantes();
  console.log(`Promedio del curso JavaScript: ${cursoJavaScript.obtenerPromedio()}`);
  
  cursoHTML.listarEstudiantes();
  console.log(`Promedio del curso HTML: ${cursoHTML.obtenerPromedio()}`);
  
  cursoPython.listarEstudiantes();
  console.log(`Promedio del curso Python: ${cursoPython.obtenerPromedio()}`);
  