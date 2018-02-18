
var patron = /\D[A-Za-zÁÉÍÓÚáéíóú]{3}/;
var patronmalo = /\D[0-9]{1}/;
var permiso = 0;

function validarNombre(){
    var correcto = "false";
    var nombre = document.getElementById("nombre").value;
    
    if(nombre!=""){
        
    if(nombre.match(patron)){
        permiso += 1;
        correcto = "true";
    }if(nombre.match(patronmalo)){
        alert("Nombre invaido");
    }
    
    }
    else{
        alert("Nombre vacio");
    }    
}

function validarCorreo(){
    var email = document.getElementById("email").value;
    
    if(email!=""){
        permiso+=1;
    }else{
        alert("Email vacio");
    }
}

function validarFecha(){
    var fecha = document.getElementById("fecha").value;
    
    if(fecha!=""){
        permiso+=1;
    }else{
        alert("Fecha vacia");
    }
}

function validarComentario(){
    var comentario = document.getElementById("comentario").value;
    
    if(comentario!=""){
        permiso+=1;
    }else{
        alert("Comentario vacio");
    }
}

function enviado(){
            document.getElementById('resultado').innerHTML='Comentario enviado exitosamente';
}

function validar(){
    validarNombre();
    validarCorreo();
    validarFecha();
    validarComentario();
    
    if(permiso == 4){
        enviado();
    }
}