var express = require('express');
var router = express.Router();

var controladores=require('.././controladores');

/* GET home page. */
router.get('/', controladores.homecontroladores.index);

module.exports = router;
