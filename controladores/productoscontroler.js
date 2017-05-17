var mysql=require('mysql');
var dateFormat=require('dateformat');

module.exports={
  getProductos: function(req,res,next){

    //conectando a la base de datos
      var config=require('.././database/config');

      var db=mysql.createConnection(config);//inicio la conexion
      db.connect();
      var productos=null;
      db.query('SELECT *FROM productos',function (error,rows,fields ) {
        if(error) throw error;
          productos=rows;
          db.end();//cierra la conexion por el error;
          //mostrar la vista de nuevos productos
          res.render('productos/productos',{productos:productos});
      });
    },//hay que separar por , las funciones

    //mostrar la vista del nuevo producto
    getNuevoProducto: function(req, res, next){
      res.render('productos/nuevo');

    },
    getInicio: function(req, res, next){
      res.render('index');
    },
    //CAPTURAR DATOS DEL NUEVO PRODUCTO
    postNuevoProducto:function(req, res, next)
    {
        var fechaActual= new Date();
        var fecha=dateFormat(fechaActual, 'yyyy-mm-dd h MM:ss');

        var producto=
          {
            nombre:req.body.nombre,
            precio:req.body.precio,
            fecha_creacion:fecha,
            stock:req.body.stock

          }
      console.log(producto);
    },









    //MOSTRANDO DATOS CAPTURADOS EN LA VISTA

    getCalcular: function(req, res, next){
      res.render('productos/calcular');
    }
}
