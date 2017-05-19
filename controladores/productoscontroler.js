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
        var fecha=dateFormat(fechaActual, 'yyyy-mm-dd h:MM:ss');

        var producto=
          {
            nombre:req.body.nombre,
            precio:req.body.precio,
            fecha_creacion:fecha,
            stock:req.body.stock

          }
          var config=require('.././database/config');

          var db=mysql.createConnection(config);//inicio la conexion
          db.connect();

          db.query('INSERT INTO productos SET ?', producto, function(err, rows, fields)
          {
            if(err){
              console.log('error en la conexion')
            };
            db.end();
          });
          res.render('productos/nuevo', {info : 'Producto creado'});

      //console.log(producto);
     },

    //MOSTRANDO DATOS CAPTURADOS EN LA VISTA

    getCalcular: function(req, res, next){
      res.render('productos/calcular');
    },
    //ELIMINANDO PRODUCTOS

    EliminarProducto: function(req, res, next)
    {
      var id=req.body.id;

      var config=require('.././database/config');

      var db=mysql.createConnection(config);//inicio la conexion
      db.connect();
      var respuesta={res:false};
      db.query('DELETE FROM productos WHERE id_producto = ?', id , function(err, rows, fields)
      {
        if(err) throw err;
        db.end();
        respuesta.res=true;

        res.json(respuesta);
      });
    }











}
