//MIRA LAS DEPENDENCIAS EN EL BOTON "SETTINGS" EN LA PESTAÑA DE JAVASCRIPT, NECESITA DOS LIBRERIAS ESTO PARA FUNCIONAR

//declaracion de variables

//Columns: Almacena los nombres de la columna de la tabla
var columns = [];

//Rows: Se almacena los datos de cada fila de la tabla
var rows = [];

//Counter: Utilizado para saber el index en el que estoy
var counter = 0;

//Esta variable no es necesaria.. al menos si quieres poner una imagen! checa la funcion agregarImagen() para mas info
var imgData ='';

$( document ).ready(function() {
  
  //on click del botton descargar
  $("button_pdf").on("click", function(){
    //metodo que obtiene columnas y filas
      getTableValues();
    //creo un nuevo documento PDF
      var doc = new jsPDF('p', 'pt');
    //agrego titulo al pdf, puedes agregar mucho mas texto si gustas, los dos numeros anteriores son los pixeles que esta alejado del margen en el eje de las X y de las Y
    doc.text(40, 20, 'Reporte Kawaii');
    
    //tambien puedes agregar imagenes
    agregarImagen();
    //los numeros significan: margen en el eje de las X y Y, luego el width y el height de la imagen
    doc.addImage(imgData, 'JPEG', 515, 0, 50, 40)
    
    //le mando mi arreglo de columnas y filas
      doc.autoTable(columns, rows,{
        //theme es el estilo de la tabla, el js proporciona varios themes, por ejemplo striped, grid o plain, elije el que mas de gusta
        theme: "grid",
        styles: {
          fontSize: 12
        }
      });
    //funcion que auto-descarga el reporte
      doc.save('Reporte.pdf');
    
    //puedes experimentar con muchas otras propiedades! toda la documentacion esta aqui https://github.com/simonbengtsson/jsPDF-AutoTable y tambien aqui https://parall.ax/products/jspdf
  });
  
});

//Obtiene los datos de la tabla y los almacena en el arreglo column (en caso de ser columna) o row (en caso de ser fila)

//no es necesario entender este metodo, solo llamalo cuando necesites conseguir las columnas y las filas, en si solo recorre toda la tabla
function getTableValues(){  
   columns = [];
    rows = [];
  
    $('.table-report tr').each(function( index ) {
      if(index == 0){
        var text = $( this ).text();
        var tempArray = text.split("\n");
        for(i=1; i<tempArray.length-1; i++){
          columns[(i-1)] = tempArray[i];
        }
      }else{
        var text = $( this ).text();
        var tempArray = text.split("\n");
        var row = [];
        for(j=1; j<tempArray.length-1; j++){
          row[(j-1)] = tempArray[j];
        }
        rows[counter] = row;
        counter++;
      }
    });
  }

function agregarImagen(){
  imgData = 'data:image/png;base64,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'
}
