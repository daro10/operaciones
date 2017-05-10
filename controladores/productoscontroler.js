var mysql=require('mysql');

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
          res.render('productos/productos',{productos:productos});
      });
    },//hay que separar por , las funciones
    getNuevoProducto: function(req, res, next){
      res.render('productos/nuevo');

    },
    getInicio: function(req, res, next){
      res.render('index');
    }
}
