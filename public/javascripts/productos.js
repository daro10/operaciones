$(function(){
    //inicio buscando el id de la tabla y el id del boton que quiero tocar
    //es decir el de la basura
    $('#tbl-id  #btn-eliminar').click(function(e)
      {
        e.preventDefault();//previene la salida de la funcion
        var elemento=$(this);//este es el boton
        var id=elemento.parent().parent().find('#id_producto').text();//subo un nivel al td pero necesito llegar
                                                //al tr es decir subo otro nivel parent parent,
                                                //con find busco el elemento hijo de tr por su id y
                                                //con text como el valor del elemento
        var confirmar=confirm('¿Esta seguro que desea eliminar el producto?');
        //trabajando ajax
        if(confirmar==true)
        {
          $.ajax({
            url:'http://localhost:3000/eliminarproducto',
            method:'post',
            data:{id: id},
            success: function(res){
              console.log(res);
              if(res.res){//si es true
                elemento.parent().parent().remove();
              }
            }
          });
        }else{
          e.preventDefault();
        }



      });

});
