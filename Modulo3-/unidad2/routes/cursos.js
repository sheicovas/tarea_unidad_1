var express = require('express');
var router = express.Router();

/* GET cursos. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.send('Hola soy la pag de Cursos')
});

module.exports = router;