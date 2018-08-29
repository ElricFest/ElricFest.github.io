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
    var usuario, password, nombre, edad, apellido_paterno, apellido_materno, domicilio, expCorreo;
    
    var expUsuario;
    
    expUsuario = /^[a-z]{3,}$/i;
    
    expCorreo = /\w+@\w+\.+[a-z]/;
    
    usuario = document.getElementById('usuario').value;
    password = document.getElementById('password').value;
    nombre = document.getElementById('nombre').value;
    edad = document.getElementById('edad').value;
    apellido_paterno = document.getElementById('apellido_paterno').value;
    apellido_materno = document.getElementById('apellido_materno').value;
    domicilio = document.getElementById('domicilio').value;

    if(!expUsuario.test(nombre)){
       alert("El nombre esta escrito incorrectamente");
        return false;
       }
}
