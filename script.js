function desplegar(){
    let radioSeleccionado = document.getElementById("flexRadioDefault1");

    if(radioSeleccionado.spellcheck){
        alert("asdjkasdjkasdjk");

    }else{

    }
}
function validarContrasena(){
    let contrasena = document.getElementById('contrasena')
    let verificarContrasena = document.getElementById('verificarContrasena')

    if (contrasena.value == verificarContrasena.value){
        verificarContrasena.style.border = "1px solid"
        verificarContrasena.style.borderColor = 'green'
        contrasena.style.borderColor = 'green'
    }else{
        verificarContrasena.style.border = "3px solid"
        verificarContrasena.style.borderColor = 'red'
        contrasena.style.borderColor = 'red'
    }
}

function pruebas(){
    let mensaje = document.getElementById("nombre").value;
    mensaje = mensaje.toUpperCase();
    alert("Entrada: " + mensaje)
}
