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

    if (contrasena.textContent == verificarContrasena.textContent){
        verificarContrasena.style.boxShadow = 'green'
        contrasena.style.boxShadow = 'green'
    }else{
        verificarContrasena.style.boxShadow = 'green'
        contrasena.style.boxShadow = 'green'
    }
}
