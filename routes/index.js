const mensaje = require("../controllers/mensaje")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  mensaje.getMensajes((mensajes) => {
    res.send(mensajes);
  });
});
router.get('/:id', function(req, res, next) {
  mensaje.getMensaje(parseInt(req.params.id), (serie) => {
    res.send(serie);
  });
});
router.post('/', function(req, res, next) {
  const newMensaje = {id: 7, name: "Diego Forero Cruz"}
  mensaje.addMensajes(newMensaje);
  res.send(newMensaje)
});

router.delete('/:id', function(req, res, next) {
  mensaje.deleteMensajes(req.params.id);
  res.send("Deleted!!")
});

const agregar = router.post('/', function(req, res, next) {
                  const newMensaje = {id: 7, name: "Diego Forero Cruz"}
                  mensaje.addMensajes(newMensaje);
                  res.send(newMensaje)
                });




module.exports = router;
