function validarContrasena(){
    let contrasena = document.getElementById('contrasena')
    let verificarContrasena = document.getElementById('verificarContrasena')

    if (contrasena.textContent == verificarContrasena.textContent){
        verificarContrasena.style.borderColor = 'green'
        console.log("dasdas")
    }else{
        verificarContrasena.style.borderStyle = 'red'
    }
}

function desplegar() {
    alert("fasdsa")
}