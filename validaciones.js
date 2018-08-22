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
