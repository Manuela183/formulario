document.getElementById("select-F").style.display="none";
document.getElementById("select-M").style.display="none";
function desplegar(){
    let radioSeleccionado = document.getElementById("flexRadioDefault1");

    if(radioSeleccionado.spellcheck){
        document.getElementById("select-F").style.display="inline";
        document.getElementById("select-M").style.display="inline";
    }
}
function desplegar2(){
    let radioSeleccionado2 = document.getElementById("flexRadioDefault2");

    if(radioSeleccionado2.spellcheck){
        document.getElementById("select-F").style.display="none";
        document.getElementById("select-M").style.display="none";
    }
}

function check1(checkbox) {
    if (checkbox.checked) {
    document.getElementById("checkBox2").checked = false;
    }
}

function check2(checkbox) {
    if (checkbox.checked) {
    document.getElementById("checkBox1").checked = false;
    }
}
function validarContrasena(){
    let contrasena = document.getElementById('contrasena')
    let verificarContrasena = document.getElementById('verificarContrasena')
    let boton = document.getElementById("enviar");
    if (contrasena.value == verificarContrasena.value){
        verificarContrasena.style.border = "1px solid"
        verificarContrasena.style.borderColor = 'green'
        contrasena.style.borderColor = 'green'
        boton.disabled = false;
    }else{
        verificarContrasena.style.border = "3px solid"
        verificarContrasena.style.borderColor = 'red'
        contrasena.style.borderColor = 'red'
        boton.disabled = true;
    }
}

function textoMayuscula(id){
    if (id == 1){
        let mensaje = document.getElementById("nombre").value;
        mensaje = mensaje.toUpperCase();
        alert("Nombre: " + mensaje)
    }else{
        let mensaje = document.getElementById("apellido").value;
        mensaje = mensaje.toUpperCase();
        alert("Apellido: " + mensaje)
    }
}

function visualizarEnviar(){
    let correo = document.getElementById("email").value;
    correo = correo.trim();
    let boton = document.getElementById("enviar");
    if(correo != ""){
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }
}

function verificarCampos(){

}
