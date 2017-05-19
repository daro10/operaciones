var express = require('express');
var router = express.Router();

var controladores=require('.././controladores');

/* GET home page. */
router.get('/', controladores.homecontroladores.index);
//ruta de listar productos
router.get('/productos', controladores.productoscontroler.getProductos);
//ruta para ir al formulario crear productos
router.get('/nuevo', controladores.productoscontroler.getNuevoProducto);
//ruta para ir al Inicio
router.get('/inicio', controladores.productoscontroler.getInicio);
//creando un producto nuevo
router.post('/crearproducto', controladores.productoscontroler.postNuevoProducto);
//creando ruta para calcular
router.get('/calcular', controladores.productoscontroler.getCalcular);
//eliminando producto
router.post('/eliminarproducto', controladores.productoscontroler.EliminarProducto);
//buscar por codigo


module.exports = router;
