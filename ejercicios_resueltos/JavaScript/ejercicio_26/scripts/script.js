document.getElementById('validar').addEventListener('click',
    function() {
        var valor = document.getElementById('campoTexto').value;

        console.log('Entró');

        if(valor === ''){
            document.getElementById('mensaje').textContent = 'El campo está vacío';
            return
        }

        document.getElementById('mensaje').textContent = 'Campo válido';
    }
)