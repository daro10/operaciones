var express = require('express');
var router = express.Router();

var controladores=require('.././controladores');

/* GET home page. */
router.get('/', controladores.homecontroladores.index);
//ruta d eproductos
router.get('/productos', controladores.productoscontroler.getProductos);

module.exports = router;
