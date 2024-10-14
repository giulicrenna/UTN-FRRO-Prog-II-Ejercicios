var isDisabled = false;

document.getElementById('habilitarCampo').addEventListener('click', function () {
    isDisabled = !isDisabled;
    
    if(isDisabled){
        document.getElementById('campoTexto').disabled = isDisabled;
        document.getElementById('habilitarCampo').innerHTML = "Habilitame";
        return;
    }
    
    document.getElementById('campoTexto').disabled = isDisabled;
    document.getElementById('habilitarCampo').innerHTML = "Deshabilitame";
})