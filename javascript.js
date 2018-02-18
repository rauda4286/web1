
var patron = /\D[A-Za-zÁÉÍÓÚáéíóú]{3}/;
var patronmalo = /\D[0-9]{1}/;

function validarNombre(){
    var correcto = "false";
    var nombre = document.getElementById("nombre").value;
    
    if(nombre!=""){
        
    if(nombre.match(patron)){
        alert(nombre);
        correcto = "true";
    }if(nombre.match(patronmalo)){
        alert("Caracter invaido");
    }
    
    }
    else{
        alert("Nombre vacio");
    }    
}

function validar(){
    validarNombre();
}