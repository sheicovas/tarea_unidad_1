var express = require('express');
var router = express.Router();

/* GET contacto. */
router.get('/', function(req, res, next) {
  res.render('contacto'); // views/contacto.hbs
  //res.send('Hola soy la pag de contacto')
});

module.exports = router;
