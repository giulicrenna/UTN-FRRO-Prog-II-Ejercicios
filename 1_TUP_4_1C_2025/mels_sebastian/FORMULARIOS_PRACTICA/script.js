// Esperamos a que el DOM este completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // 1. Obtenemos el formulario
    const formulario = document.getElementById('registroForm');

    // 2. Agregamos el evento submit al formulario
    formulario.addEventListener('submit', function(e){
        // Prevenimos el envio automatico del formulario
        e.preventDefault();

        // 3. Validamos los campos del formulario
        const nombreValido = validarNombre();
        const apellidoValido = validarApellido();
        const edadValida = validarEdad();
        const precioMinValido = validarPrecioMin();
        const precioMaxValido = validarPrecioMax();
        const telefonoValido = validarTelefono();
        const emailValido = validarEmail(); 
        const reingresoEmailValido = validarReingresoEmail();
        const contrasenaValida = validarContrasena();
        const reingresoContrasenaValido = validarReingresoContrasena();
        const generoValido = validarGenero();
        const fechaNacimientoValida = validarFechaNacimiento();
        const comentarioValido = validarComentario();
        const interesesValido = validarIntereses();
        const terminosValido = validarTerminos();

        // 4. si todo es valido, mostramos un mensaje de exito
        if (nombreValido && apellidoValido && edadValida && precioMinValido && precioMaxValido && telefonoValido && emailValido && reingresoEmailValido && contrasenaValida && reingresoContrasenaValido && generoValido && fechaNacimientoValida && comentarioValido && interesesValido && terminosValido) {
            mostrarExito();
        } else {
            mostrarError();
        }
});

    // VALIDACIONES DE CAMPOS

// 1. Validar nombre
    function validarNombre() {
        const nombre = document.getElementById('nombre').value.trim();
        const error = document.getElementById('errorNombre');
        // Expresión regular: solo letras y espacios y 3 o más letras
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/; 
        if (nombre === '') {
            error.textContent = 'El nombre es obligatorio.';
            return false;
        } else if (!regex.test(nombre)) {
            error.textContent = 'El nombre solo puede contener letras y espacios, y debe tener al menos 3 letras.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 2. Validar apellido
    function validarApellido() {
        const apellido = document.getElementById('apellido').value.trim();
        const error = document.getElementById('errorApellido');
        // Expresión regular: solo letras y espacios y 3 o más letras
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/; 
        if (apellido === '') {
            error.textContent = 'El apellido es obligatorio.';
            return false;
        } else if (!regex.test(apellido)) {
            error.textContent = 'El apellido solo puede contener letras y espacios, y debe tener al menos 3 letras.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 3. Validar edad
    function validarEdad() {
        const edad = document.getElementById('edad').value.trim();
        const error = document.getElementById('errorEdad');
        // Expresión regular: solo números y entre 18 y 80
        const regex = /^(1[89]|[2-7][0-9]|80)$/;
        if (edad === '') {
            error.textContent = 'La edad es obligatoria.';
            return false;
        } else if (!regex.test(edad)) {
            error.textContent = 'La edad debe ser un número entre 18 y 99.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 4. Validar precio mínimo (mayor a 1)
    function validarPrecioMin() {
        const precioMin = document.getElementById('precioMin').value.trim();
        const error = document.getElementById('errorPrecioMin');
        // Expresión regular: solo números y mayor a 1
        const regex = /^[1-9][0-9]*$/; 
        if (precioMin === '') {
            error.textContent = 'El precio mínimo es obligatorio.';
            return false;
        } else if (!regex.test(precioMin)) {
            error.textContent = 'El precio mínimo debe ser un número mayor a 1.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 5. Validar precio máximo (mayor al precio mínimo)
    function validarPrecioMax() {
        const precioMin = document.getElementById('precioMin').value.trim();
        const precioMax = document.getElementById('precioMax').value.trim();
        const error = document.getElementById('errorPrecioMax');
        // Expresión regular: solo números y mayor al precio mínimo
        const regex = /^[1-9][0-9]*$/;
        if (precioMax === '') {
            error.textContent = 'El precio máximo es obligatorio.';
            return false;
        } else if (!regex.test(precioMax)) {
            error.textContent = 'El precio máximo debe ser un número mayor al precio mínimo.';
            return false;
        } else if (parseInt(precioMax) <= parseInt(precioMin)) {
            error.textContent = 'El precio máximo debe ser mayor al precio mínimo.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 6. Validar teléfono (solo números y 10 dígitos) (+54 al inicio)
    function validarTelefono() {
        const telefono = document.getElementById('telefono').value.trim();
        const error = document.getElementById('errorTelefono');
        // Expresión regular: solo números y 10 dígitos
        const regex = /^\+54[0-9]{10}$/; 
        if (telefono === '') {
            error.textContent = 'El teléfono es obligatorio.';
            return false;
        } else if (!regex.test(telefono)) {
            error.textContent = 'El teléfono debe tener el formato +54XXXXXXXXXX.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 7. Validar email (formato correcto)
    function validarEmail() {
        const correo = document.getElementById('correo').value.trim();
        const error = document.getElementById('errorCorreo');
        // Expresión regular: formato correcto de email
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if (correo === '') {
            error.textContent = 'El email es obligatorio.';
            return false;
        } else if (!regex.test(correo)) {
            error.textContent = 'El email no tiene un formato válido.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 8. Validar reingreso de email (debe coincidir con el email ingresado)
    function validarReingresoEmail() {
        const correo = document.getElementById('correo').value.trim();
        const reingresoCorreo = document.getElementById('reingresoCorreo').value.trim();
        const error = document.getElementById('errorReingresoCorreo');
        if (reingresoCorreo === '') {
            error.textContent = 'El reingreso de email es obligatorio.';
            return false;
        } else if (reingresoCorreo !== correo) {
            error.textContent = 'Los emails no coinciden.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 9. Validar contraseña (mínimo 8 caracteres, al menos una letra MAYUSCULA y un número)
    function validarContrasena() {
        const contrasena = document.getElementById('clave').value.trim();
        const error = document.getElementById('errorClave');
        // Expresión regular: mínimo 8 caracteres, al menos una letra MAYUSCULA y un número
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; 
        if (contrasena === '') {
            error.textContent = 'La contraseña es obligatoria.';
            return false;
        } else if (!regex.test(contrasena)) {
            error.textContent = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 10. Validar reingreso de contraseña (debe coincidir con la contraseña ingresada)
    function validarReingresoContrasena() {
        const contrasena = document.getElementById('clave').value.trim();
        const reingresoContrasena = document.getElementById('reingresoClave').value.trim();
        const error = document.getElementById('errorReingresoClave');
        if (reingresoContrasena === '') {
            error.textContent = 'El reingreso de contraseña es obligatorio.';
            return false;
        } else if (reingresoContrasena !== contrasena) {
            error.textContent = 'Las contraseñas no coinciden.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 11. Validar género 
    function validarGenero() {
        const genero = document.getElementById('genero').value; // Obtiene el valor seleccionado del <select>
        const error = document.getElementById('errorGenero');
        if (genero === '') { 
            error.textContent = 'Debes seleccionar un género.';
            return false;
        } else {
            error.textContent = ''; 
            return true;
        }
    }

// 12. Validar fecha de nacimiento (debe ser mayor a 18 años)
    function validarFechaNacimiento() {
        const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
        const error = document.getElementById('errorFechaNacimiento');
        const fechaActual = new Date();
        const fechaNac = new Date(fechaNacimiento);
        const diferenciaMes = fechaActual.getMonth() - fechaNac.getMonth();
        const diferenciaDia = fechaActual.getDate() - fechaNac.getDate();
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        if (diferenciaMes < 0 || (diferenciaMes === 0 && diferenciaDia < 0)) {
            edad--;
        }
        if (fechaNacimiento === '') {
            error.textContent = 'La fecha de nacimiento es obligatoria.';
            return false;
        } else if (edad < 18) {
            error.textContent = 'Debes ser mayor de 18 años.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 13. Validar comentario (mínimo 100 caracteres)   
    function validarComentario() {
        const comentario = document.getElementById('comentarios').value.trim();
        const error = document.getElementById('errorComentarios');
        if (comentario === '') {
            error.textContent = 'El comentario es obligatorio.';
            return false;
        } else if (comentario.length < 100) {
            error.textContent = 'El comentario debe tener al menos 100 caracteres.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 14. Validar intereses (mínimo 1 y maximo 2 seleccionados)    
    function validarIntereses() {
        const intereses = document.querySelectorAll('input[name="interes"]:checked');
        const error = document.getElementById('errorInteres');
        if (intereses.length < 1) {
            error.textContent = 'Debes seleccionar al menos 1 interés.';
            return false;
        } else if (intereses.length > 2) {
            error.textContent = 'No puedes seleccionar más de 2 intereses.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 15. Validar términos y condiciones (debe aceptarse)
    function validarTerminos() {
        const terminos = document.getElementById('terminos').checked;
        const error = document.getElementById('errorTerminos');
        if (!terminos) {
            error.textContent = 'Debes aceptar los términos y condiciones.';
            return false;
        } else {
            error.textContent = '';
            return true;
        }
    }

// 16. Mostrar mensaje de éxito o noficar errores
    function mostrarExito() {
        const exito = document.getElementById('success-message');
        exito.textContent = 'Registro exitoso!';
        exito.style.display = 'block'; // Asegúrate de que el mensaje sea visible
        setTimeout(() => {
            formulario.reset();
            exito.style.display = 'none';
        }, 3000);
    }

// 17. Mostrar mensaje de error
    function mostrarError() {
        const error = document.getElementById('error-message');
        error.textContent = 'Por favor, corrige los errores en el formulario.';
        error.style.display = 'block'; // Asegúrate de que el mensaje sea visible
    }

// 18 agregamos eventos "blur" a los campos para validar al salir de ellos
    document.getElementById('nombre').addEventListener('blur', validarNombre);
    document.getElementById('nombre').addEventListener('input', validarNombre);   

    document.getElementById('apellido').addEventListener('blur', validarApellido);
    document.getElementById('apellido').addEventListener('input', validarApellido);

    document.getElementById('edad').addEventListener('blur', validarEdad);
    document.getElementById('edad').addEventListener('input', validarEdad);

    document.getElementById('precioMin').addEventListener('blur', validarPrecioMin);
    document.getElementById('precioMin').addEventListener('input', validarPrecioMin);

    document.getElementById('precioMax').addEventListener('blur', validarPrecioMax);
    document.getElementById('precioMax').addEventListener('input', validarPrecioMax);

    document.getElementById('telefono').addEventListener('blur', validarTelefono);
    document.getElementById('telefono').addEventListener('input', validarTelefono);

    document.getElementById('correo').addEventListener('blur', validarEmail);
    document.getElementById('correo').addEventListener('input', validarEmail);

    document.getElementById('reingresoCorreo').addEventListener('blur', validarReingresoEmail);
    document.getElementById('reingresoCorreo').addEventListener('input', validarReingresoEmail);

    document.getElementById('clave').addEventListener('blur', validarContrasena);
    document.getElementById('clave').addEventListener('input', validarContrasena);

    document.getElementById('reingresoClave').addEventListener('blur', validarReingresoContrasena);
    document.getElementById('reingresoClave').addEventListener('input', validarReingresoContrasena);

    document.getElementById('fechaNacimiento').addEventListener('blur', validarFechaNacimiento);
    document.getElementById('fechaNacimiento').addEventListener('input', validarFechaNacimiento);

    document.getElementById('comentario').addEventListener('blur', validarComentario);
    document.getElementById('comentario').addEventListener('input', validarComentario);

    const intereses = document.querySelectorAll('input[name="intereses"]');
    intereses.forEach(interes => {
        interes.addEventListener('change', validarIntereses);
    });

    document.getElementById('terminos').addEventListener('change', validarTerminos);
    
    document.getElementById('genero').addEventListener('change', validarGenero);

    // 19. Limpiar mensajes de error al hacer clic en el formulario
    formulario.addEventListener('click', function() {
        const errores = document.querySelectorAll('.error-text');
        errores.forEach(error => {
            error.textContent = '';
        });
    });

})