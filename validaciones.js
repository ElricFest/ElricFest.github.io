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
    var usuario, password, nombre, edad, apellido_paterno, apellido_materno, domicilio, ;
    
    var expUsuario, expPassword, expNombre, expEdad, expApellidoP, expApellidoM, expDomicilio, expCorreo ;
    
    
    expNombre = /[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]+/;
    expUsuario =/^[a-z0-9ü][a-z0-9ü_]{3,9}$/;
    expPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/;
    
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
       }else if(!expUsuario.test(usuario)){
                alert("El nombre esta escrito incorrectamente");
                return false;
                }else if(!expPassword.test(password)){
                         alert("El paswor esta escrito incorrectamente, debe contener minimo 8 caracteres maximo 15, al menos una letra mayuscula, al enos una letra minuscula, al enos un digito y un caracter especial");
                         return false;
                         
                         }
}
