var express = require('express');
var router = express.Router();

/* GET consultoria. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.send('Hola soy la pag de consultoria')
});

module.exports = router;
