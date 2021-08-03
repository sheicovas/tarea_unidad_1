var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); // cierra get

router.post('/', async (req, res, next) => {

 var nombre = req.body.nombre;
 var apellido = req.body.apellido;
 var email = req.body.email;
 var mensaje = req.body.mensaje; 
 console.log(req.body);

 var obj = {
   to: 'sheicovas@gmail.com',
   subject: 'Contacto desde la web',
   html: nombre + " " + apellido + " se contactó a través y quiere mas info a este correo: " + email + ". <br> Además hizo el siguiente comentario: " + mensaje + ". "
 } //cierra var obj
  

 var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});//cierra VAR TRANSPORTER

var info = await transport.sendMail(obj);

res.render('index',{
message: 'Mensaje enviado correctamente',
});

}); //cierra peticion de post

module.exports = router;

