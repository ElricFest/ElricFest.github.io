    function tipodeArticulo(){
     var articulo = document.getElementById('tip_articulo');//tomamos los campos
     var imei1 = document.getElementById('txt_imei1');
     var imei2 = document.getElementById('txt_imei2'); 
        
     if(articulo.selectedIndex!=1){//si no escogió celular
      imei1.disabled = true;//se desactivan los campos
      imei2.disabled = true;
     }else{//si escogió 
      imei1.disabled = false;//se quedan los campos activos
      imei2.disabled = false; 
     }
    }


function validaUser(){
    var usuario, password, nombre, edad, apellido_paterno, apellido_materno, domicilio ;
    
    var expUsuario, expPassword, expNombre, expEdad, expApellidoP, expApellidoM, expDomicilio, expCorreo ;
    
    //EXPRESIONES REGULARES PARA VALIDAR FORMULARIO DE USUARIO
    
    expNombre = /[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]+/;
    expUsuario =/\D[A-Za-zÁÉÍÓÚáéíóú]{3,9}$/;
    expPassword =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    expEdad = /^1[5-9]|[3-6]\d|7[0-5]$/;
        
    
    expCorreo = /\w+@\w+\.+[a-z]/;
    
    usuario = document.getElementById('Usuario').value;
    password = document.getElementById('Password').value;
    nombre = document.getElementById('Nombre').value;
    edad = document.getElementById('Edad').value;
    apellido_paterno = document.getElementById('ApellidoP').value;
    apellido_materno = document.getElementById('Domicilio').value;
    domicilio = document.getElementById('Domicilio').value;

    if(!expNombre.test(nombre)){
       alert("El nombre esta escrito incorrectamente");
        return false;
       }
    if(!expUsuario.test(usuario)){
        alert("El usuario esta escrito incorrectamente, debe contener minimo 3 caracteres, máximo 9");
        return false;
                }
    if(!expPassword.test(password)){
        alert("La contraseña esta escrita incorrectamente, debe contener minimo 8 caracteres maximo 16, al menos una letra mayuscula, al menos una letra minuscula, al menos un digito y un caracter especial");
        return false;
                         } 
    if(!expEdad.test(edad)){
        alert("El usuario debe ser mayor a 15 años de edad");
        return false;
                         }
}
