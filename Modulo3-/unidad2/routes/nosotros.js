var express = require('express');
var router = express.Router();

/* GET home nosotros. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.send('Hola soy la pag de nosotros')
});

module.exports = router;
