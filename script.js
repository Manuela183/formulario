function validarContrasena(){
    let contrasena = document.getElementById('contrasena')
    let verificarContrasena = document.getElementById('verificarContrasena')

    if (contrasena.textContent == verificarContrasena.textContent){
        verificarContrasena.style.boxShadow = 'green'
        contrasena.style.boxShadow = 'green'
    }else{
        verificarContrasena.style.boxShadow = 'green'
        contrasena.style.boxShadow = 'green'
    }
}

function pruebas(){
    let mensaje = document.getElementById("nombre").value;
    mensaje = mensaje.toUpperCase();
    alert("Entrada: " + mensaje)
}