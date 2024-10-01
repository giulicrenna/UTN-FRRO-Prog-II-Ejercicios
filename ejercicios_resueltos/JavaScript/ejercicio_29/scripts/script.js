var isDisabled = false;

document.getElementById('mostrarOcultar').addEventListener('click', function () {
    isDisabled = !isDisabled;

    var formulario = document.getElementById("miFormulario");

    formulario.style.display = (isDisabled ? 'none' : 'block');
})