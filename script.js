//  let validarRadio = document.getElementById('flexRadioDefault1')
//validarRadio.onclick = function(){desplegar()};

function desplegar(){
    alert("Hola?")
}


let verificarContrasena = document.getElementById('verificarContrasena')

function validarContrasena(){
    let contrasena = document.getElementById('contrasena')
    let verificarContrasena = document.getElementById('verificarContrasena')
    if (contrasena == verificarContrasena){
        console.log("si")
    }else{
        console.log("no")
    }
}

function pruebas(){
    let mensaje = document.getElementById("nombre").value;
    mensaje = mensaje.toUpperCase();
    alert("Entrada: " + mensaje)
}