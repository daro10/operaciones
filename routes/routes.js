var express = require('express');
var router = express.Router();

var controladores=require('.././controladores');

/* GET home page. */
router.get('/', controladores.homecontroladores.index);
//ruta de listar productos
router.get('/productos', controladores.productoscontroler.getProductos);
//ruta para crear productos
router.get('/nuevo', controladores.productoscontroler.getNuevoProducto);
//ruta para ir al Inicio
router.get('/inicio', controladores.productoscontroler.getInicio);

module.exports = router;
