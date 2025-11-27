var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/salvar", function (req, res) {
    partidaController.salvar(req, res);
});

router.get("/obterdados/:idUsuario", function(req, res){
    partidaController.obterDados(req, res);
});

module.exports = router;